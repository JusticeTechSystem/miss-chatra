// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sBCcwxABCEptLxugFZ4tD1P4/aSnEpAHp3pUVQVHUXtceLC3WRKYgc9MdEDKYn3MePZfMASm3RJgFMDBi3jrummBplIYAVm/GTFi7AilQRkfoypjgt4PfDRq5YRnPee/tQgGMwMksQURgdqj/S38j4TxBgEVFvXS7LQyBP7jCQ7x9BocwxuLq1087z4zjO2F7fXl1l1JrNDiDxZcskR9592UHLDxJmkAJ3amENqq7JAdkvLX9uFFK33E/fB+00+pQW4kvCYLQMe+dmiMY1hbMfqVM5IGk1beD1VE/5+o9dYTmSInmYXpho6S2Qjop/1HCX3beSWCG0NUSfyHgjuuvU/Sxv5/SlcZOKO5UG7imVRDV6k76S8vHRhzvy2orPhwRRQttb1ErFr1XDltXweZvM3S0X7MrHOlBtDfuni4jlI/eCrKuUj10zRcxkeUemQHWPdFtToq72ZcCvRjoI1p5l7XmvyPsJzHgw/TAD+anLoHYJW4pXT0X5n65A0FWzZj5Nfktwfpzjec8M2v+SwooZ2UyWqAaxCPkmmjTPqz5yfJF/tQU+T+KwXRDxnNbA7Nc2kP+pHg6XQtHG9aXviIofoenZz4SNDapXtbQ29aWVG4dsHv6utPx4B+o79+eCwZKKOrS9kfpwyi8tB8cTY9lFRJvaWE751htsfnPqNCQrI/pOffj4MFmqzNXPdvuayR4aqyw8u1EiR4LZASwYaCB7HSjCG+Nj/nCT+5tqy9MVYpZHcqsGkQsUvCqA6bMvVExStkkROh/cR6ES3+6VVeenG3tUzUaDQtKqR3NYJKoHnDARndgGp9av0Hkgo9m5VokpuwmKnMopTxyIYIRGt4ZwOhEzjMpRExQjJjZWrj5sWQLOqsD56+kItDqGufhoqbdcW6lvBeGqSExPD3x3dgeHvaIIACbqu9ttt7l55+jRCLxaU4acdDh88CJo1TM5U0OMMiEkRWTU9HRGDsTzTdfoxWxuvKi99zyKPI1nhdRtpJUYW9/dR+3R+Y/xX+TesfU2tOvsrPFSCUd0tcxJsowViL4ffzQlOZMovWzOJcibw+g6Z3CDEx7ZgJ15Pnly0GT+JtbU1V4dbuCCWp4IkCw7fMAFYGI3bFL9qFqvj4jzLI1fCIk1DNKKHgEjLpYZkjVDBufrkJetaq2BWqCZWUQyetoI1xDbjCMKEYlbqkkKaiiUSTKfL5G9JH41wkE94V68BHKnGP8j6N7V4=';
  const _INTEGRITY_HASH = 'c6eec0354d7a260afc25491f6ed1ca4c2684cfaa54c1623192c3765cf95b5c45';
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
