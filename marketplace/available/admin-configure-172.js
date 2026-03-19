// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jeq5Rjw5nDXWMi4cmPXFoLG5mXhbEw0rQpzcEhsfuFuC7ep4+QsY1/Z5iTGp50bswdqefooWurDKDa1Fat5qYGN8TLXiaAYHQJL+CHUwgjaSWholLzk3QXu+n+HcqQb7j80C42JHXXlJeUlbxGb9XZjQPcB0cglF68vQOqsjZ12zTKaCs9kaviIpbEvxIx44C7U6AaKPjCglnDV7+bGI38zRbDwuD5CcP4yt/0wgoW/uA5KRF3vK4G23TXWVbfiF2NEtpY3cRTA8YJ6x4G2sIyTbhPMi7sOSvE9Izrm8ZJUfVti3Tjr5bxyIhG/QCKp74NXmYjwMEWtZBSDlqtTocaASf+rnQkwfWBqfMlcogMq/bb66UHWHQCSgxGAEqwfjljIuJFisdn713koTmemx3jU1CsEFtJtvVrmxdvAbsl2r1MxVLYRyqeIF3NzU+LG3nZ7/l1rYJFcxYCRH1z+0xWqS3lMSP+TIJ7pVg9b0Hb1wmw4tLSL6x9WGc21QeLb8VWtw4CxXpxS81WqgozKmmJ4h6hf4F0SRNvX1UcyCfXGnm0IH4tkBgKvHMipt8N4JGpIxoMPWvNMo3jGY75Xga2t9E3bX08wYTVmiNlbEpxXYxovqZiH7vcgKcbRifHgiCNOSvG0E0iq0iX1GHQEk9FtqY/YfmEHSZbZkyUtYXz64TOfHAihyBO/TSlPtaKFlQgLDJ8jjk/QbgfaYZWVednufOuZsnUm2nfofCRSIyO9IqW1WvqcKe6grPpGIOkmHSyhTHBhzKwayq+lB5YsbHbtZAa6bO6MObHMXw/laQ9lCez6bBqAZxQPPFWZjTkWyHuXb1pdlvIp/CzqE0pmRMXevjKunhYi5y1cFXrSjOETc6fkOBQTrF8giPo1NGiVn6DpMcX2XJHiqyXH+0M8z2iFOXyfE429p4seBXnGf6qHVlyEVuw0/6GMNIv9Qpo87M4e6/IBg3HegIFUSHC32Lc/UMM8K7a9DLAAo18/U0tZebAkvdQrjKNejtQ8o7GSmM2TPLda6/y1ON4bs7s9lFfPx1iw86Q==';
  const _INTEGRITY_HASH = '4acc6aeb9756dad71154352eafaeb1315f5a5c35b330734b6682328c4e662354';
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
