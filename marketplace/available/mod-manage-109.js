// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ta1RlHs/ch6WP1K6FUNAkq/qm53Aw/7mIRfvI+aCxl7BWQiOHAP2F8IeW940xuSO7TCNYretf4bQUez7cyFuvKNnL+Oe+TnJOQc1Gpq5msJxLQm8n5Jz4zRB5hHTDEhygtboIX3bZWRFzY98lGAAp9vU2TEKBJMYF7UITk3L0TJ/liERPtKPkQqPK4IySLD/GX0CL4HlfYPngmSGavU2/t8WtFzbqvPFEZDX3U/YxFcu2ff1Gl5I4ylmzCIuQD36rmnGJVxbyj6+qS2W0n6qrvueexoKKZmMF7TpdjGe+r4nRfpqDBa1LQfqRx89EHLAalbKy9dgzuoCw8fdtYA+C/A1iUfp8Ig54H19sULMRK3ySwlFNn4VN41ZI6tUcdW35tC74LSwYOGJOFPJdZuElRttk/fh3rGxhBvAIWfHOO+HrPwg700GERADpEFz7xAh1TIpmVBmRgnG6dFD6j4EYGc0ey3VbdGRmNaXlO9X6c15qZZM7x/gJe1sSiKYUlXXvyaxKZbb+pcIKwB4MKE66GJuoGxqy8hmpKu2fV/7arAHmNgF8zbCYUeFPWZqqaCHQjF+JukTqncH0kga57sPIH/mnhXdtoxrgHZ+M4WV2d28PpxEaVpMWfFYsTVmle0D0Eozszh/6QaNJnWwmg3QywFPVzNCZis9LeRKwFhzAvsDgjfdoI7ydFHfBstfgOGfy35fhJixchuATx+wga/BKZ3Cwfp2uF0kTpz1nxmSingja2WJ1WAE8GRphNeFP8RQxRxNUopDxc9oiXFjBfHrs3fh4J9RkXvs2wC/+MZ3hYsB1EGHqcqV09UTtPNTvq55E/11bQgJx863hvDva8RJBKqiTg15xFrFGBqPBqdLfmIAwK/2qko5f3W6K6IdV09WoQS35qbZVbh2wKoFwfc9qD749mwIPKww+M0GM1yimG7sUEeRUhAjaAbjjwadF+u7B2Ak9wBt9xd2i2LQVjzupkVApeHOBX9LseJo5asBdwN76v6nrT9w4MDTEqsJyTtneodM/Y494caf//Mw0LuoD3MAJL5aSVS5CAg2BOYffyVqicAOFQD/N99ofcx0vCMq9tXImgJ8dD1jroKAFROdsu0vcXuErnGwv3PhOC57lYRsGTYLPih0Pn4/iJ5GOz4Rlxjg7oXVDy7ySer0oScxyoTugw9okn8H2RIK2w0Lp4MJaMIzEtzkDDPlEEaCHH0MahD4qyrdudqkXZGRrdIsllgLttmIpyCP58lAV/XuAUD14hwzl1rnloUGswPKA3sZBpMQ5qlLWzTcWLiHf/3BDnpH2kRdPzIt39MSBt/qngyXtNsxnS5HBQ4ybAL9PP+vxjvO+35UH8HXtW5s6vUASxW+mSQF/3N4gOcWbMo3iKRuFie5L/FwPA==';
  const _INTEGRITY_HASH = 'fb15debeb32a5d710154fd9bedabbb99c1041cf9a4d629930ff00c54658b67e7';
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
