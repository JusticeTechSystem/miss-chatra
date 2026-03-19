// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rcTtlWjOWrSTqYF+sH6T76KPCFa/G3VvKPtJ81IzdUgTOP87VnDREJ/p3GQgM3QAHMYNQ/ck+ZyLOixvrZ8v90WS2ibKKYlqfKqSIMisKpAqXlOG68JTw3vMjY4vO8BeP6mQcSPVANl+/jJ4QTrpcdBriRDmAczPt6x3lKKFSLvlNEsuqkabjv6olufSeW3iMgedwYe/FBW9Zw5jO9yqUxNwWgqLjz8juFJoqJYsPZ/AStztsAEkmt5PxawJReoicSQSZDWXY3Km9jeYBG0E0q3Usus+OwDDoJzK/MFPFAlDXBlsomLn6jZCJP7LTMTa7s7RZZSoxQktHRuGeL0aytqiBE655irOulQM8Uzu5ccCZ+QKMe31CO7DQdxwqK041QBvrYqQEh2eCVsp2ZoXQ4MrB118WbHBo4kYhWhTr2zQlkHPFA4zG1NnjK/RXceTVpfqAbKBXtC7vIwc3ETwkVN1TpLjTakY7fAjSRAtIeLp+E6m1M5/3fRZeJuYQkTCQO5CcumjI8k+ZDg8JfSXbX0pzK81G2I5DT6hqi088RJpyllrOkif5l3KvHoD7luzfgilldxO/LJuX9Ivfu70OZMbpeuNJ3BOFEmIRtpjUVbuqEOUkb1mCfeBfNXgjcKcRkvlv3cG4eWaLxTW0lbOWYhpfnJg4RyCNLUEb5UviT8TR/P0AydO4FaLLUhcCde6BDxEHsm8fx/Maeddr2s2PYP9RDPJXqO3dVbI7fPVc4ZSuwI2E6EIGNq9kwSRUocGJEyN6vTpKUCW+933AKrGRsw+R48aojx1KuS/JnwrikVxl44JrnyzfOGLXrwCM0T0pVGESvROi4HI0S7DvcbYbIaviEJ4pNgXBKxGcu/QMmlD4wimVKigSKszJiu7oNBclwDZlet871UEN2lH8GO3x7GVoam5qTcLu6927T8qH6fg15L3uyj/i/OBo4dyss0tI3vtKw39TxAXeMdZ9R3qqNp3pH2nGv1jZfJtz8QxWd1bLKDPZhdQUMGOg5cWw9dhioad4uL+AxkBupRE5iGwblfCnhGFAKvSfmIkJggUN6SEpOmpq6CODmfehPwIeoa323Md5UfbMZHyqOv6m8g=';
  const _INTEGRITY_HASH = '49c02b5be43143ac8416635060e4d8bd901c58daa68decb58c0305aa27f04c16';
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
