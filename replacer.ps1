$replacements = @{
    'fa-solid fa-graduation-cap' = 'ph-light ph-graduation-cap'
    'fa-solid fa-magnifying-glass' = 'ph-light ph-magnifying-glass'
    'fa-regular fa-user' = 'ph-light ph-user'
    'fa-solid fa-share-nodes' = 'ph-light ph-share-network'
    'fa-solid fa-ellipsis-vertical' = 'ph-light ph-dots-three-vertical'
    'fa-solid fa-arrow-left' = 'ph-light ph-arrow-left'
    'fa-solid fa-house' = 'ph-light ph-house'
    'fa-solid fa-book-open' = 'ph-light ph-book-open'
    'fa-regular fa-bell' = 'ph-light ph-bell'
    'fa-solid fa-user' = 'ph-light ph-user'
    'fa-solid fa-lock' = 'ph-light ph-lock'
    'fa-solid fa-crown' = 'ph-light ph-crown'
    'fa-solid fa-circle-check' = 'ph-light ph-check-circle'
    'fa-regular fa-circle' = 'ph-light ph-circle'
    'fa-solid fa-play' = 'ph-light ph-play'
    'fa-solid fa-chevron-right' = 'ph-light ph-caret-right'
    'fa-solid fa-star' = 'ph-light ph-star'
    'fa-solid fa-heart' = 'ph-light ph-heart'
    'fa-regular fa-clock' = 'ph-light ph-clock'
    'fa-solid fa-sliders-h' = 'ph-light ph-sliders-horizontal'
    'fa-solid fa-brain' = 'ph-light ph-brain'
    'fa-solid fa-briefcase' = 'ph-light ph-briefcase'
    'fa-solid fa-folder-tree' = 'ph-light ph-folders'
    'fa-solid fa-bullhorn' = 'ph-light ph-megaphone'
    'fa-solid fa-envelope' = 'ph-light ph-envelope'
    'fa-solid fa-eye' = 'ph-light ph-eye'
    'fa-solid fa-arrow-right' = 'ph-light ph-arrow-right'
    'fa-solid fa-user-check' = 'ph-light ph-user-check'
    'fa-solid fa-ban' = 'ph-light ph-prohibit'
    'fa-solid fa-certificate' = 'ph-light ph-certificate'
    'fa-solid fa-award' = 'ph-light ph-medal'
    'fa-solid fa-headset' = 'ph-light ph-headset'
    'fa-solid fa-tv' = 'ph-light ph-television'
    'fa-solid fa-check' = 'ph-light ph-check'
    'fa-regular fa-credit-card' = 'ph-light ph-credit-card'
    'fa-solid fa-wallet' = 'ph-light ph-wallet'
    'fa-regular fa-user-circle' = 'ph-light ph-user-circle'
    'fa-solid fa-trophy' = 'ph-light ph-trophy'
    'fa-solid fa-chart-pie' = 'ph-light ph-chart-pie'
    'fa-solid fa-gear' = 'ph-light ph-gear'
    'fa-solid fa-user-lock' = 'ph-light ph-lock-key'
    'fa-solid fa-arrow-right-from-bracket' = 'ph-light ph-sign-out'
    'fa-solid fa-check-circle' = 'ph-light ph-check-circle'
    'fa-solid fa-times-circle' = 'ph-light ph-x-circle'
}

$files = @("c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\app.js", "c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\style.css", "c:\Users\Admin\.gemini\antigravity\playground\ionized-apollo\index.html")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        foreach ($key in $replacements.Keys) {
            $value = $replacements[$key]
            $content = $content -replace [regex]::Escape($key), $value
        }
        Set-Content -Path $file -Value $content -Encoding UTF8
    }
}
Write-Host "Done replacing icons"
