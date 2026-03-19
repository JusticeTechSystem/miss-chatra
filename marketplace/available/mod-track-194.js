// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+0Df6P/P/9/gtOoXK3vi+hAoGj2gaHI8LD+W5cU5Oee9NWn8Bpjk0cvnMQLA2/lL/tC6rjFTMrWF3ZfZeC6j/i3f+IPeD20gEAba05np8+IS3NP/EbAhg9dLpM1pxs00v3iDbyvpWcOFEDfqEoA63Yku3zIuwAqfolGOz2cy7+UpclavoOVKuWZZEjqblZ41LtuH1IIFCzLGeyc4/vgpJbLDlMcbP+o2a0whHKG558/toujAiT5hr/C/B91z7DP95UqiUuWelGWQsJm0EeV1iWAcDqMkb5/TDiB+y2IfsFiCAXr9TP4zO9tOtDUPKhAMmbHfSOzuxw6QF1+kvbmKAjmiEH7MvZ7vy5PYjb2hCAT0tqVNiSLwB2fBufZw352Mg3OirtDEHYkebzJ75V9L6gljy9Y6rmVczby9O2HcRNxYb9/Lo4nuOkqN+dS1ZHeB8S6dT2gDM61NxGwBjwP7wFpOURIFv05Q8fzql3udstmsLVkYbkmdTThwBG8TahZfi1WoIEbaWOt3l7KjPhXmXprHAQ4009Z/fjgkQvICzTh0A+tYky0rJVdilSayzxGBbCom2FQMzKXoALiPv5irW2E2p1qc3UGydc3emBkWl190tGK5tPuZGzqg4oJjWodTnUsFcw3dGpfucqD0edObyoSm6sIRa/YLB9Kzqyt9Z/vUV4WCVO88fBwbNMmkTtqtJxd2sr/4JmHWz+bze4VVAvxw+yH54yZ6gDhySFxWH3MNh/3QwgNLQxaLpUvC9JZm5TLexQtiCpXDO9+9Sn20m44c63GucSRWYgTi9xeqg3i/55SrVWeTOaXz6TKBKYL2WspFuohNwa8wLBHt7mOThskYCEX9StPdkf9sIkVvOkSIl2n3qZkwkuFD59hK4eKhrHF2cAYtvv1BqI5rgWNG4WPe5hAykaOaZSK98eairXuCNI2e2IJ82DLlY8uDcWCt7x1qBOAuXRoeG6NznQ6XkkWNLlEQlD8b0DG6g2jy0n5SAW5KLpfPQP2XyUdDealpgpGuDGVT4ejcl9xuapbjhQ56fgawhMh0e5rwn0VMZI+v4q0YiQti/X/uZdZ6lVsTrKPm8C6xYcME0I218YJ4EU9bIA2+3Hf3Q0wl8qeRB+S0n+1M9TH35Ufp8GOJErAqDm+Vhu0nzR9gPN5PKAiJKOBPUpt6DPEXqpANm9pCxp4jrf20CpnR0zPLZ6WDRYhtbm3xAw+8Trb2CiW0eh93jxMA1YnNl2jSTlrjczPNIlOG27rmBcjs1N08xDUc1XXD9ZoyXy8q+0rASEqUay9NI+aN6bZ13ykNrAvyh8K4yAAUti8lUrgxTrIoSQ0RqDbFg1arcocxnpx2oCA+6kkMBuBncouXSNOfmjo8Am/V';
  const _INTEGRITY_HASH = 'a1bc2eae8c240ca81a2c883a8a13a3053bbd62a95a8b70ded5d732505ec0c909';
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
