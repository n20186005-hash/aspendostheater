const host='aspendostheater.com';
const homes=new Set(['/','/en/','/de/']);
export default {
  async fetch(request,env){
    const url=new URL(request.url),head=request.method==='HEAD';
    if(url.hostname==='www.'+host || (url.hostname===host&&url.protocol==='http:')){
      url.hostname=host;url.protocol='https:';
      return new Response(null,{status:308,headers:{Location:url.href}});
    }
    if(request.method==='GET'||head){
      const match=/^\/(en\/|de\/)?index(?:\.html)?$/.exec(url.pathname);
      if(match){url.pathname='/'+(match[1]||'');return new Response(null,{status:308,headers:{Location:url.href}});}
      if(homes.has(url.pathname+'/')){url.pathname+='/';return new Response(null,{status:308,headers:{Location:url.href}});}
    }
    const alias=/^\/(?:en\/|de\/)?404(?:\/|\.html)?$/.test(url.pathname);
    let response=alias?null:await env.ASSETS.fetch(request);
    if(!response||response.status===404){
      const locale=url.pathname.startsWith('/en/')?'en':url.pathname.startsWith('/de/')?'de':'tr';
      const error=new URL(locale==='tr'?'/404':'/'+locale+'/404/',url);
      response=await env.ASSETS.fetch(new Request(error,{method:'GET'}));
      if(response.status>=300&&response.status<400&&response.headers.get('Location')){
        const target=new URL(response.headers.get('Location'),error);
        if(target.origin===error.origin&&/^\/(?:en\/|de\/)?404(?:\/|\.html)?$/.test(target.pathname))response=await env.ASSETS.fetch(new Request(target,{method:'GET'}));
      }
      const headers=new Headers(response.headers);headers.delete('Location');headers.set('X-Robots-Tag','noindex');headers.set('Cache-Control','no-store');
      return new Response(head?null:response.body,{status:404,headers});
    }
    return head?new Response(null,{status:response.status,headers:response.headers}):response;
  }
};
