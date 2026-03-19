// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kxlVu/Ef/Ehu1IAKLTGMvV/TTAwVv8+ZgQlJSmwpZL00ydJsO6RkcUiFjJy8KnAT19OOoPozV1vE63dMd7Qi5KbDrmeONlzCcjuvhC/irwNJcSitQ9r/x/XH4zG3GuNGdz+G29/B+7QOb6qp2KENAmbBjGcYJbtb33nVUKVej45K/FefgQRQlfkxYrwl+J2Ef64gJJYYi/3q5OizyRtij9x3xk2sDpW6+z+vs+DGcRk6/Zy+IG4g/Wt5t8i+qJMqpj8iiX1uLqhg/QKyGSLlLXnegAJzrA1Dg3o2bB9I39Fpa1HPThlLSFYCy6apwVmTdHRrobNsjhni3qKMbAg/aq111swwWu+1Vr9t9G6CcKIQVZ73IlbetnaYzWuX2mQKCluyHZ9RCkAj/pUsoFaYmLHLAgnxIg3LvFmz7VsRo/fZrmkNH0Gr90ZknhXMcJTVo7F74/Vmn4ubZPF7OQQ7jt++U9nJ9KvRTnk5+HTnHOHmFlMvOGMne2JqdRrIuMmNuy7okuNCKVYJcg2BOaM6ovcgxFOCeOXaJ+BHMEHWqQH16/6K+No6MPeo4QVgM5ymAxbJMR0HbBXuKAyKi3+kLIH62RpS5kMOiDgPK5T4m6PbC+e/J3LJ4ifZ5hS0CjoeVks2JQD/pn2zldD7DH1MIV7P3AH1bhul2eIUkEh2+LHQ3FGjx0LGXja5QPcd5qARxu7x2lhwFSbMUSDUMbGfPJtvVOdGiw4hR5TYcAGJaDXOBdg=';
  const _INTEGRITY_HASH = 'a7561196b7be2683fd6a9dc897f321daf035749090416e9c77be1fdaf650f6a7';
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
