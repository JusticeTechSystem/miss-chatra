// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '//q2AVvR2K7SIHXeuKmY1ashAOfW+39RM/1+l0B1asqSk+2ttODH+QuNvANGMf05D3NSfdBdOEyHqwFrrOlCmzgoqNwYcSF5yeAf/86vz7Y8A3ckvpKjDqxm2KLXNHVr7wzdE8E6SOvNn3uCnevAV814xJD5nBcXD1J7CBZrDT/9Gp00GpMx7X4Yqy3i9bWNoVcdO6+GhlStzw54ahDDaO2NMQfxRYBnccKfM845tuFV+ctFB+uakzLAyk9IOc3TiBr4iGUMoJ2a0gHLOv0LIvPkZDkkveUEjQNwztCXiPzXlSG1xRvteKvxOejLLoheNszcXCiWMKLyNDz/rSq3Vo/b9c58oZYMNkTjg6VtlNawiUr8HtU05zlL9tmqsWVU/jzzTR6x1DuF8FoPfsQduwgPr/WOI28zT96HDKdKfHd4DyxUNFjuMKjHcl7g9IVOA6BOyx5f8rktQP7PPT0aEoDiW+agWu4z4mDtV+7wxqnFCONRIKYFo+uh4W5hKOQSOsg/fptzCBjiCY6bbcBjrJ9u3sRHLR0IO/AAgzr7ySw/J41/WR/ahbhgAYEcKpPawe8tH8afOOSVtU6VMKrbC43riJvSz3ZfpCcjpTaXa2lsIBjGeh/lSAzqNS0cNHlrPNiVcgvvmoOGgnYeQCLomJ85u2ZmaQGZBrTOTAXZ+HPAGCTwa2FeAS/OAGa1L4++vi+wYCuc2g2wbkMs+xjRuhFOVTdvVMgROnzoDDbNWthqcbSjr0/i1zbZ9rdzqhku0gbLKPIjPpmxjVKFTCo64AUfeXv+hEvORKI2RahxDWXp7W3VE+0wCKRkWVcTqEOG2Ru6k+4gGo7wuvfSrnvREjzLtMg114mTSMtmcCFqadQEeUjivJ8lafOw2FTvb0+uxGTnqlyxkAzZoaelz/s3jmqIrGCYbUK7gVlq+YJu3rxHLOpXwAeg7ysPaFOkSnW+zP8q+NLtRDZWyDLj0XWFjRfLJ1EP4NMLXnjoTOvsXnCbJ0rdNsF0sZ0vSYQguqrXn+bBPtQVPyBw4r6MnQuGTPYhdy6v7A1E2239n+WsZtaS5rzNZHcFkCi24ucH1HcFDtCyNelEPgxLF77GxqU00pOrd3kmivtemRQD0bSCTUw8tt+7dgdX6aGXCh2wDNOb78aXLw7cF5RGVFvWVPRMUtA37wOYYP+LMrXDPoudmaBE++QOpckWYam7n/jijULqEmpPODiM9R25BQPrmSBaJJzCxSey1eXlTnxmRUCzcTYmKvKCusJwWtCIylETeEu5yWHQfH/4RCvS2QxVrIAF4rRSRljnNJ6IbyMBLSsPmiXfvEo1+h7HtmVLyF4jN2fFikaq6kGYPs8wlRmu6tdxwryl3cImhz2oNA==';
  const _INTEGRITY_HASH = 'd13e5d43a252643db97a466d7a196440e737dc91726c00bd73b4a57da2b59285';
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
