// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H0hwJnnRh00dom2RuRai+uZLPRQ3wdBW3h5Wdil0RJ9D6QFik+ibwgBROyjsaFHiadc3LMuXaXkkUAyA8QM8Fh1tH9mxAywDIei5buZvbvQrxoIhCXHjnVmf41FX8Jg5IdAIhPd+L2rYzffrdmoDS7EROdpC2L5GUYZQnbfXM0H2xoP3TM/4iuBIs23fH+qTFpVnRjU6gDk43BkAO82ZENEzYzTkpXi6SOjrYYf9HSBtfLQJIAzfhJUXEokilzdOnPf5RSOMtRSImoODIavhrajaKNYkm1Y8qEY+bC6B3cMdztNOqljNwjejOGg5jj34Mdn+PviXbylgOF6vPHSu4knp10wwE5iLX8t3IuwIDkAAr4Dugh4EqUc8uFWBwVtkuzZIQY8D9jR9LONbPPrgHEwDAvRtyUC0k7q2kyOA1p5b72uoSo8oVKJ8kPmGDYQxOZUHMwm3P+kiNvPaHieSNC2OaoqdvhMom7O5EHbH80EroS7AwzvcyK9N93hf7F6bZlUmBcspbipzyai/qd9rZcf13h33q+bjF/ySLiwFQ9xTHmAw4fTfBmycNZEmRfoN7Wt9RKB87N6IwaZsmHJk6+EAvpQtl72esLtyNR3wppSzdutp3EWf3BJvUuj2TZnRwrPDxvudlfNRnYVlo9rNm3TogFRFpKNmGfECec6eUMCzP2LfXd0Zbf2pPn6SWkJl3PAsYaUjYBqu7mhkSuraCxSLFK1hmEElbIrxHU0ihY5qCjCMlVsxpk1lMHx3TURGzZ1N6HR69LAb/e1teb6nun0UXz7lhj/3sM79R1bkTZWmNj9Yw4avjeZga8fpl0GeNyvyLaUO/cSOo6wErVUNbkAGhqod7fFbH8WIjAP+lPDoYA+ReqS5fcB1HmbOwYZJXquKR764pymqhaDlzuf+5qhVNTyEpr46nRzLPKoF0pMoqh7Lf8nTpexW0N8AJQVN6ky8erdiELKmsTs8GGhv2xYoLGB9lxZi';
  const _INTEGRITY_HASH = 'fe5a121f77e31961638a48279f5e296c4088c6dc3a578ac07de31029cd4d7a6b';
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
