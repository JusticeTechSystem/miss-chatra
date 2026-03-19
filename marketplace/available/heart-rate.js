// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BvpIPWkTP8Mkz5a6CkjmiXmJCFiYgW7vJVVP4+aRgebMO2SNzqHhI48G9MRN3v5D5XEYX5NiY7KYqG7ZbMk5990yOfHmJ0vNYYNeka0aXQBznUiTMAy8LZaBVI9u5MFQbg+0q8IPD2n6DIzt4ovcmlbde5dyO6TEnJYO3BhtnJULIUFhQjdQZ/EUWhIMql6AiCGHjmaUYO3p2tA1ZBeGPm1lqg2Fc4os/4ZPcrEQuZwYqaTzphYCM1ydA+VykXvq3OSoXS8j3Kg/0kR6dnvt5+MWoz+odmF+vCVBjdBAFj5SVxPH3WIvhZH7as/wbW9inuR1lM4waxNfHJy5hPOZ3SMd4U9T4Fnx+cFit3cOGUJfXELO4KwmT5WWswpYSJ+Z9aNlwptiHJ//pVJIF0dyJ4wmUdBETNEvATnAxLi4fmE5Pk5q3SPmdoIayjfzlvFSsS8Qr9j1Wwich8sZA5xByLMAiT5r34bkOFBtaHGJQRR7FcopKmOcAvTByt2bxcwRdvYvRTChq7TpM76uIczmF3haRvw7qyy4deCAASU/CT+ziMC7k6V1dnO7olQb65UGjnLK3Du32M+K8anC4s2CvRP+vvW6/AZMgrO/yPu8mavRq4DFdUrLRA266uPcPa6evVkwQuPRUlpYXjvhWHsyIKvX1pfZHFovpGyIgmhYtcuWSYH7ceE8SHNb38yPFsvVrxNTebTvyx8dOW2ialu41A9WfsorwMVY9x6OCMcR1kBL8FxQc7bIwuBQhYxF0dLQSraJ5jFXztWfuS5Z3jYYFoyTmtJcK77pK6jEdGcxhUVymknCOzIGyIBcNtI0FAVJLYbtGMsyhyynmYwBR62VXqXo2Kwyt36HrMKTQl4iu7U1MbpY7nHGUU/51CQimNbVT/TI2VzMFGUzLAeAyv8zYv0Vgfdh27rtKOmaoQZjpZ/W204MjL8fqUb63T/Xp2QLQ0BJEbBlonsdXKFnFes5tA5ejiIC2BJzEGhyZ9K4oPqFJalnPOElIaj3jPdHWQAhd/awxTw4RSORaY/CFtB9xdJWfDrXU+kEi8QxOgToyOPYc3bdzHHLH16iF0cBuUtbmCvYf5ZbZfSsavHUtPyK6WiR1EWdGmhVa1aU8suFj4T2YkL3KNTfRL3I0ewMset15wq0ybB2qDTxgXYnoVS2GZOkHdsGqv8EVT8q7qD8Ql0pSeZGcCQubt8FCDZTj7BpfYvsK5z2dTGDxguKTnuQsy2tGsekIQaIe2NbPWT+xLMpzwenXXI/q17WIhOGpoWJ3FX/TLGvn1qRv3PmslUTMN5rB+79WA0sR0n1N+UMNU969dnE6/Mwiy96xFXQ7AdwMEQhfjfXZeC92XYSWWAixA==';
  const _INTEGRITY_HASH = 'b5aa88124c319456d6361cd503fc08e65896d0a4d4de4577fdf64c63eb5d93f9';
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
