$files = @("c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\app.js", "c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\style.css")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Intermediate steps to prevent double replacement
        $content = $content -replace 'font-weight:\s*800', 'font-weight: FW800TMP'
        $content = $content -replace 'font-weight:\s*700', 'font-weight: FW700TMP'
        
        # Final replacement
        $content = $content -replace 'font-weight: FW800TMP', 'font-weight: 700'
        $content = $content -replace 'font-weight: FW700TMP', 'font-weight: 600'
        
        Set-Content -Path $file -Value $content -Encoding UTF8
    }
}
Write-Host "Done replacing font weights"
