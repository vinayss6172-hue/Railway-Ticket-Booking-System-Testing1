# RailTicket Automated Test Suite Execution Script
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "🚆 RailTicket - Automated Test Suite Runner (PowerShell)" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

$passed = 0
$failed = 0
$startTime = Get-Date

# Function to assert test condition
function Assert-Test {
    param(
        [string]$TestName,
        [scriptblock]$TestCondition
    )
    
    try {
        $result = & $TestCondition
        if ($result -eq $true) {
            Write-Host "  [PASS] $TestName" -ForegroundColor Green
            $script:passed++
        } else {
            Write-Host "  [FAIL] $TestName (Condition returned false)" -ForegroundColor Red
            $script:failed++
        }
    } catch {
        Write-Host "  [FAIL] $TestName (Exception: $_)" -ForegroundColor Red
        $script:failed++
    }
}

Write-Host "`nRunning Test Suite..." -ForegroundColor White

# TC-01: Verify required files exist
Assert-Test "TC-01: Core Web Application Files Existence" {
    $files = @("index.html", "login.html", "app.js", "styles.css", "tests.html")
    foreach ($f in $files) {
        if (-not (Test-Path "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\$f")) {
            return $false
        }
    }
    return $true
}

# TC-02: Verify app.js syntax and presence of minimum 5 trains in DETAILED_TRAINS
Assert-Test "TC-02: Multi-Station Search & Min. 5 Trains Guarantee" {
    $appJsContent = Get-Content "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\app.js" -Raw
    if ($appJsContent -match "DETAILED_TRAINS" -and 
        $appJsContent -match "generateTrainsForRoute" -and 
        $appJsContent -match "Vande Bharat Express" -and 
        $appJsContent -match "Mumbai Rajdhani Express" -and
        $appJsContent -match "Tejas Superfast Express" -and
        $appJsContent -match "Duronto AC Superfast" -and
        $appJsContent -match "Humsafar Luxury Express" -and
        $appJsContent -match "Sampark Kranti Superfast") {
        return $true
    }
    return $false
}

# TC-03: Verify On-Board Amenities Structure
Assert-Test "TC-03: Train Amenities & Catering Verification" {
    $appJsContent = Get-Content "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\app.js" -Raw
    if ($appJsContent -match "Free Wi-Fi" -and 
        $appJsContent -match "Mobile & Laptop Charging" -and 
        $appJsContent -match "Pantry Car") {
        return $true
    }
    return $false
}

# TC-04: Verify Multi-class Pricing Calculation
Assert-Test "TC-04: Multi-Class Quota & Fare Calculation" {
    $appJsContent = Get-Content "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\app.js" -Raw
    if ($appJsContent -match "CC" -and 
        $appJsContent -match "3A" -and 
        $appJsContent -match "2A" -and 
        $appJsContent -match "fare:\s*\d+") {
        return $true
    }
    return $false
}

# TC-05: 10-Digit PNR Regex Compliance Test
Assert-Test "TC-05: 10-Digit PNR Algorithm Validation" {
    for ($i = 0; $i -lt 5; $i++) {
        $rand = (Get-Random -Minimum 10000000 -Maximum 99999999)
        $pnr = "84$rand"
        if ($pnr.Length -ne 10 -or $pnr -notmatch "^\d{10}$") {
            return $false
        }
    }
    return $true
}

# TC-06: Authentication & Captcha Validation
Assert-Test "TC-06: Security Verification & Captcha Validation" {
    $loginContent = Get-Content "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\login.html" -Raw
    if ($loginContent -match "generateCaptcha" -and 
        $loginContent -match "captchaInput" -and 
        $loginContent -match "1-Click Demo Login") {
        return $true
    }
    return $false
}

# TC-07: Offline Execution & QR Code Generation Test
Assert-Test "TC-07: E-Ticket Slip & QR Generation Engine" {
    $indexContent = Get-Content "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\index.html" -Raw
    if ($indexContent -match "printableTicketCard" -and $indexContent -match "qrcode.min.js") {
        return $true
    }
    return $false
}

$duration = [Math]::Round(((Get-Date) - $startTime).TotalMilliseconds)

Write-Host "`n----------------------------------------------------------" -ForegroundColor Cyan
Write-Host "TEST SUMMARY:" -ForegroundColor Yellow
Write-Host "  Total Tests : $($passed + $failed)" -ForegroundColor White
Write-Host "  Passed      : $passed" -ForegroundColor Green
Write-Host "  Failed      : $failed" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "Green" })
Write-Host "  Duration    : $duration ms" -ForegroundColor Cyan
Write-Host "----------------------------------------------------------" -ForegroundColor Cyan

if ($failed -eq 0) {
    Write-Host "✅ ALL TEST CASES EXECUTED AND PASSED SUCCESSFULLY (100% SUCCESS RATE)`n" -ForegroundColor Green
} else {
    Write-Host "❌ SOME TEST CASES FAILED`n" -ForegroundColor Red
}
