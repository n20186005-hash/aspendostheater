Set-Location h:/GitHub/aspendostheater
$items = @('_proc.ps1','_kill.ps1','_check.ps1','_install.ps1','_build.ps1','install.log','build.log')
foreach ($f in $items) {
  if (Test-Path $f) { Remove-Item $f -Force; Write-Output "removed $f" } else { Write-Output "absent $f" }
}
Write-Output "--- leftover node/pnpm ---"
$p = Get-CimInstance Win32_Process -Filter "Name='pnpm.exe' OR Name='node.exe' OR Name='Robocopy.exe'"
if ($p) { $p | ForEach-Object { Write-Output "$($_.ProcessId) $($_.Name)" } } else { Write-Output "NONE" }
