// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9o3AzDAoLGJyyX+OGkZezVqXrcog4dgzmcxXq76QBRRpEFVM3MfbwcWNrXzO/TeKhzHir/jalE6PMnRxGcEHjOsoJcYjgO7FMUmycVy1kC4huFplMjxHK0xmwh3o0Q+PZIuENrh85nc/MrI9kstnlfBXwBQBSbKLVVmH9ceMx1GmDJqE7Sjv9NnkCzS3/kev3WXu3DUGA8gPW8GKJjSX+aX2vRvceslxuKQQoO0uzSy9CqBR6DZSFq4r+k112MRSXITK9UBbWTpA/aWi4yuM9bV/jAZ69VJruCwebYIUwrLDGQYncKMo297Bs1ozQzVZJVpUG6pdPmn0zd5taUP8Oyy4/T+MU5CCWUsbFt2JvXC4kSe92kI+WtmSDH7CVcqiMwLNvTRbZh9jdGQ1Ho/f3EEuxUH0V1VAOVz4EJxuKCEAKE2yKWbKHs56ihg9iM2UkGkKiO3mTG7AOnOu+FIV3XnttrcqRfaIIWf5nIAgZ4G2Xn9rGhP96dKDFrVSVzwEqc5Xc1mQLBMIYzeffjm7bQcVbpoeg9M3jiIMU2D3o3q00rzlBY5eTC9jF1PCGnA6XluBVKAs/rZHxD5u7DTXx19hKOf56w9wd0t1ZYK7H2iKNJkPISL8CrApa53mciJ1rzfqU5RHNKY9UP5hgBzPBA2tga+0+7y3WAs2q1Bs1KgWSP1DRMar5GHirWvcdapJ1rrtxAtikzRhSI4EOjtoR8EaH9lfUgKPnc/WsNRQdL2Fb9WuZEOEF2diw3NfqBUSHnM4vri5V+Mzd2KkaalMcTO6t46THe4ebtYnqVmVTqfbp9VCFS0ySke3+nuK/IxTbD5M5hcHfRQQz+0on5N2swWg1NchS5SUWKdd57bKiF0IvQHTssSbMsNr+P3PcKYAQynMEM4InPtw3d9qEFGPUgdp/rjUxmPz7uUQlg8TGQWnpoXwFFgSB4JbeW7SU10Bv0o26TCQPdaWPlkiauqvoOxMYkjcpPIYiQPpsR6GT94hAM/xNKJZe5+hkQ6Abmn70T/ih85CplqWa8yOJKCwqfjBN7xfFz+rag22v1WqCQq7T2+Dq701coOu5z7xnF6LmrqdK6NoEAWeuFqGe+NPAzzO2/pvXm4g1M1291ohQaqK/jTCz3F3/9o8Xqu8vHEZUL3LO7gKdvf8X8nmB2utXQlPhsz0BVKA7I3wiroC9RoYBLIw9I3JLhfwGOvymTmRwOFKrdGBCL6Y21nl9aBFnfOz4C8fUuNiQ0YBMvIorDC8GHcudEBveVsaN/8hz+bplG5+DNdNFs6cwpayct7uwB2xWKw5i4MNjS48En6QcwTDaTa4MGXScDQxrBa7PD2TjOKiPGyYwuJxyY6h3Wq835dxF6JryJDaR5Nue5M4HaV4WijF1bG77g==';
  const _INTEGRITY_HASH = '5cb4a3ec4697655d25f2fef134365defb9fa7a302a1d8797159f9df0f68076c5';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
