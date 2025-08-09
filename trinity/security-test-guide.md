# Security Testing Guide

## XSS Protection Tests

### Test 1: Basic Script Injection
Try entering these in the contact form:
- Name: `<script>alert('XSS')</script>`
- Subject: `<img src=x onerror=alert('XSS')>`
- Message: `javascript:alert('XSS')`

**Expected Result**: All HTML/script tags should be stripped, leaving only clean text.

### Test 2: Advanced XSS Payloads
- `<svg onload=alert('XSS')>`
- `<iframe src=javascript:alert('XSS')></iframe>`
- `<body onload=alert('XSS')>`

**Expected Result**: All tags removed, no script execution.

### Test 3: Form Validation
- Name with numbers: `John123` (should fail - only letters/spaces/hyphens/apostrophes allowed)
- Invalid email: `notanemail` (should fail validation)
- Long inputs: Test with 300+ characters in name field

**Expected Result**: Client-side validation errors displayed immediately.

## Rate Limiting Tests

### Test 4: Contact Form Rate Limiting
Submit the contact form 6 times within 1 hour.

**Expected Result**: First 5 submissions should work, 6th should be blocked with rate limit message.

### Test 5: General Rate Limiting
Make 101+ requests to the API within 15 minutes.

**Expected Result**: After 100 requests, should get "Too many requests" error.

## Input Sanitization Tests

### Test 6: Character Limits
- Name: Enter 101+ characters
- Subject: Enter 201+ characters  
- Message: Enter 2001+ characters

**Expected Result**: Real-time character counters show limits, form prevents submission.

### Test 7: Special Characters
Test with special characters that might cause issues:
- `'; DROP TABLE users; --`
- `<>&"'`
- Unicode characters: `¡™£¢∞§¶•ªº–≠`

**Expected Result**: Characters should be properly escaped/sanitized.