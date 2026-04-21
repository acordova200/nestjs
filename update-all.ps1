Get-ChildItem -Directory | ForEach-Object {
    $pkg = Join-Path $_.FullName "package.json"
    if (Test-Path $pkg) {
        Write-Host "📦 Actualizando: $($_.Name)"
        Set-Location $_.FullName
        npx npm-check-updates -u
        pnpm install
        Set-Location ..
    }
}