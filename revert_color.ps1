$replacements = @{
    # CSS Hardcoded colors left over from Dark Theme
    'rgba\(196, 164, 132, 0\.15\)' = 'rgba(223, 177, 91, 0.1)'
    'var\(--bento-gradient\)' = 'linear-gradient(135deg, var(--primary-color), #fef3c7)'
    'rgba\(0, 0, 0, 0\.05\)' = 'rgba(255,255,255,0.1)'
    'var\(--border-color\)' = 'rgba(255,255,255,0.2)'
    'rgba\(255, 255, 255, 0\.9\)' = 'rgba(0,0,0,0.8)'
    
    # Shadows
    '0 0 40px rgba\(196, 164, 132, 0\.1\)' = '0 0 40px rgba(0,0,0,0.1)'
    
    # Bento Box Radii (Assuming class radius)
    'border-radius: var\(--radius-lg\)' = 'border-radius: var(--radius-md)'
    
    # Additional Shadow cleanup from multi_replace
    'rgba\(196, 164, 132, 0\.08\)' = 'rgba(0,0,0,0.05)'
    'rgba\(196, 164, 132, 0\.12\)' = 'rgba(0,0,0,0.1)'
}

$files = @("c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\style.css", "c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\app.js")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        foreach ($key in $replacements.Keys) {
            # Note: order shouldn't matter for these specific strings here
            # Since some involve regex, need to be careful. Powershell -replace takes regex pattern.
            $content = $content -replace $key, $replacements[$key]
        }
        Set-Content -Path $file -Value $content -Encoding UTF8
    }
}
Write-Host "Done reverting old colors"
