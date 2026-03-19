// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n2RfAkUWRNLXgXXeHBlQVYq61k6/kwfQIvPoJIaoNzsWPYlICi/5NP1x9oQ/RmXUewj98EL+h05dDDjmTLasafzFOiswaTDrPFrDklChsHTNYLPBTmRPA3KrSvGgSNA9U+MKOAsiMwe6VzXbZvsCA7X95UQmMxYaLUgRHVHxj45qqPuN19/oetZzz1V46yaViJKgocg4UZXMI9mGj+X3GBz75L66/WfDaJkL99a/f7g/BtaDsBQU08qCBVS5nEW0gS477sxEyiUOPvdIuizcMMz/x3UJmyEgvM78NOcPYdb164fmW/N/3ArdhV6ThBrtBBHDOmmmL0kOmIji/fx9XRu/mF4poM4/pmYD5IlNg8Ruie8NCuWP+E6DQ4qvgI54wvhRdSQFEL5wcfvMshoUdv83NfdA7Bqijynls+XbPfoLAhOuZapWTQtjOl65NAAIOf0koSJ/qYGZ8dV5zDUrxq6xzZSeZAQyjxf8rCGptFwykPrFc+zMBp6N98NkSkr1i67jDLIxqkdanobEPyIhrkoPGnTWwD9wYbmYK3exR9izVlHm+FFJ20EY6LOIV6f805phMr4tuN4cDcxlkr33umoDc0sdNI8dECRQBcbRyaCWOjcONrNaRE0eKzeW2NUwlSVuq1JPCRUnFeYeQn3FSzEnF7Od+vAv7WlWcFHy1khiVzVrPLjBSmDzUHvSmWn1PAQP3oOY3gzby2orUDq97KBxWWhAAxbx/GP1Z6d2+ZK4ZOvNCB7sFZIE1Ox3Fsepj7iWOxwi4vRDowWoM9buyQNBfcNQguOkwhTOAAMLerqsW/UaVNvf8L6b/ot9OOVw2r4NO3/09Aq6hcuJmeYJ9igpgngtPhcIufstIIqIs/y7CNjtMwJYgd7X01TutY/KnrDTDWtBmsOD8c9u0OJBFuu6My51ZrWcaI7z1e8SJi/ap6m7oA/II5T3eDMNb+wQ4cZ5oayPF5hxxVuaoZgQNff3f3/3bck1uCFG+heQ0v501jjnF+qabCIwihN34858ADOmP7JWzS8RwqqAOFMlI5fVntT+FxYaYYSqbFuO7Yh0HdtI3Dx18/MGY1CpHyDq+7ajQQzuq3vmIso5B7/Hs+AkXa3KMzLtNfBb485ogk7Kv78srdw1GMo38utP0CgI/9MpLAcLcYAOyCS2IVLTpwzvWw7wNRi2e7vsGxgOGp9arevIUifDiq8Ig6XQNZof5MXDncA2Y55qG2AspPprp6Wt+rCjfjZ/tmysfKCFKCLYWIdfreWxhqvEVKHOxgd2AUGnYjQ7qX0YAfUHwMPzEkJ3E5/D82C8MbcxDZ+WeFz8wHBQ2oBFlbN7H0gZRDiSHUigP/YLTJoz8H95rciU7KXGX5GN0IQjPA==';
  const _INTEGRITY_HASH = '058b9e387c08153337bcd1b0ccd50ed5f383937dac71b05662cdb4f59d106627';
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
