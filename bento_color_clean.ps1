$replacements = @{
    # CSS Hardcoded colors left over from Dark Theme
    'rgba\(223, 177, 91, 0\.1\)' = 'rgba(196, 164, 132, 0.15)'
    'linear-gradient\(135deg, var\(--primary-color\), #fef3c7\)' = 'var(--bento-gradient)'
    'rgba\(255,255,255,0\.1\)' = 'rgba(0, 0, 0, 0.05)'
    'rgba\(255,255,255,0\.2\)' = 'var(--border-color)'
    'rgba\(0,0,0,0\.8\)' = 'rgba(255, 255, 255, 0.9)'
    
    # Shadows
    '0 0 40px rgba\(0,0,0,0\.1\)' = '0 0 40px rgba(196, 164, 132, 0.1)'
    
    # Bento Box Radii (Assuming class radius)
    'border-radius: var\(--radius-md\)' = 'border-radius: var(--radius-lg)'
}

$files = @("c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\style.css", "c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\app.js")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        foreach ($key in $replacements.Keys) {
            $value = $replacements[$key]
            $content = $content -replace $key, $value
        }
        Set-Content -Path $file -Value $content -Encoding UTF8
    }
}
Write-Host "Done replacing old colors"
