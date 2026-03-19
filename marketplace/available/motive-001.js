// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kVW6SUYXlpTtfs4fHxU++LnHVbRNwRyFIkgAQYARVPn3IH3F0gSpLi/zoly/pAd+0p9UDOz6NYDd+5kI/uPQrhZQZCTnYwWjL3jMnFErI85vMfmI38WfGcF+XGTRpko2NkdxKPlHhMpSYjYM1wxdCMWV1IMdG5Z4KhVOVlzGbLPy5dPeHsirVCdrPWFQasQNgWulfH1W0jUKdKvBExsWHBAD07eyOMvhI/TFCwWdDZ61GzxItgBJmqR6PNNinmACcKf8N1NNqpEttWRvGPZuLSyMYqMHtLwc1Kh+rudCcbf1QsXDlUAjfpLpY+yat0IEec2L5M4KIT6Hq9FkuB0BmtoMP4SdtsynaKxhDKDsIxVirGUZSeuMtjzWhwb+eTwIkDzt+o0o454pK4KTax/IYm14MF0vB0SjvHHboGjkhirjMr2dHhmgwwnY38xWyEJ5z2DrMi7MogfetAg+YRAIqogo6DcmdXXq23TSOj/b1oyrDn/+4xwfJVLthNtUu72vk5mg4/y0mkS2+bY99psWR8FxdauI/CPtcX6yqg1/rXekrJG6IBLlA148OWzimSH6bTGNjJTlU0yghyCNUGNGWLoqTsMLOoJqNXC7e2cf/OdPDuP1TqCUOnreX6fNejTLNtqeOOhWy5eggJPCvYisYi/qUCABDGqKT0/bWRm+AMzJvA/6yD4M2pqvMBmwKAUcXoI3ix3j/snVnDb5b9hIjpZphhGYTHLn5JE0LcJCidyEGDGKgT8e7UVaNF+Rqg4SP/2SWDFJjyi1xkrOV7t/cwYf7IWVGKPYxNnv5VvcsWWtvqoJwXylKNiZ06jowOCGqk9aiW9MRJxar8Pswq5/JUtphpnu74LElTBHoc2jyD0KJnQju9p//Vena1IBWseotsbiY0JEFvuIstWd/yJNNevGOcr4tP3BcToKJvxsDKDj8SCt+I/hFPPR8cZT2IllXoLkH6oBenquGL5mFziA383UYUNrw+EugDX3cSuUs20vCcTGeCCRrNHUclbjwu12U4sil6FqFbk5noxsSxc=';
  const _INTEGRITY_HASH = '6a4c80a44fa427496363956102704889266fe3de7453519342323ff7eb09275b';
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
