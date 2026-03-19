// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AEvNWcTh/oNgtTIXohcar9dvaS2t0qu5ZkmNSpTv72srIig8pkwYjCMsNmImkJ6JqkaiKChDW1UUVLH/sLP3+mU6gfK8Kii7ADDO9B8HeKUY8lTP5XOWPX4OhzbmKwtxra/PV6nUFep89YyRdn4mmpAzBb4pP0oeZTS09WVLsMLXR34K7/8pWw0J8EMTM0HvSe9U0iK3ORR4GiqwrUmAMKtiNeZXdbaWZ8EglvUVp0pUovyIMjQpnnJ/JD9YUU3xBlvWztIJEMq8+YUsXq6NN64gRJiSFkLP5JlRMpBYTs47Eg9WMMeu0Xwhm35d1KZ9T1cKJZSsC/jbz9kD+JLywbGG1TfO9Q9qXK0errLjTNqhg+d7vsRCuFPj+QBkIEpGwSJq8HlwdGlbJQTqUE5cQZ9TZD15nApMOl87XqKB6EeAPat1GBhnCG1G5h0jUGi6fXPaFLonodxHxyKMqJjDU3RmwKckCArrqM1TsDc2X9Jhy9vCVoTeZJeplM46l7v9rF5WeQvhi2AxIzmuVTD7IFSgkmaHXLmKm3KlCExE7A/rmpK52baLCMhoJSZy27imCiDJ62mB55tkG3KQmUdWA2tx6/ps3m7qVXNXkFuPSU2+Tk026BDmkDnEuNxpQUGXq0qOkwClygA00XTEyL34o/xhL7t8uYF8vwUYaacQevoN6Lvj0yNdrVSdoyaNVWEt5CcBu5O7yE61wBlwJfgtt37Oq7fKS9pAqHEi8zF00FhMQ5N7V9+7hG4Jlh4xHCiC18sep1kDm04cA1kOVPE+Fy5oaYXRFUDJyivvqPk9hbr5zheErTBcKE4Vw+E/q9ayseEEJEhcEh1X5PZpUKs/mrq2W8cR7DFBfS+Upy6LoLIeq6Fuin7LtrJ0g+tJO7cq7gvL+aVsnV5FjUlti4FN2kgnTV48zYWQuH99IocUyspH//lf87JVCmTteqk1Rg1/cCRNWWkdkV2YN046hvCdY4IDiEZ+vYhuHfo28Wtl646yc4JySjlFljs7bofkOxuv+DmbRb+eLbpO+NmDE+zu9Rbogcq1be1IuQJBshme';
  const _INTEGRITY_HASH = '7a40319170c1b387c6b158fa3a4fbbaa9cafef97eb67aa6c3ce6966a9f5aea84';
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
