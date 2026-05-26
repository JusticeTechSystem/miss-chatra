// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y3GTiRqeTKh/qtIDvXZA68ph1wD1RlaunSM7tpf/hYsoIWNuHyvGiqx4EgX5MOPP4RGBoXw/dzHjnpzgWtKCuTaSOU3LSbZ/n8p9XJACG1Q7Jh+xTkdMZ+hFx8H6RrBshSZDlkIpa5c7kzsnMRjhBPdLRfZt/pr3im0sMnSjYhS/z6hmh6q01De98YOx1k5G2iW0n3bFr8mn5QVSYkXA1LPdXbguJEHcehFqe12Zas7xO+8gKeC4Jxwij/hxfe2KGyQN/jzxgK57V0VJEvOtUz9FksPVzqwTKaIfz6IGTXSz86hnSgQFbp4iKiqjI1V9UTdD7zpIwqcgScWjth9ykjYJU1ctPszDcPTZ+mOIL4afbw8q+ybZaSJArcG0RvLUEovVA7tSr0OLSLescHj+c6kSiVOk0zS3wYTvZuO7l4S20g6r994usa+KlJYumsodZDAc18fdQZx4LK06lPAP54x3M6mrmijTxy+Iu3quPsYvhmg7BILXm6zKL9OFI78DuIy7q81dQh1ecoiDcRnk3DNgtRHnowvH0KVE1ovIX5CbwoK/KQvEDW4BnXFNhg48NcIKH3igCCr11u8z0Bo7XPOf+WRSA+YhB0aBBdJGzZjtiUgkya/jJCTvcQipz2o7EyiEfFbTOkxw3NDhyN0HF+L56a5SOtHOBS2b/G8fWSSdhXc74QRd/xMWMZJMI6tGRMn/AoNIDO4UFILiiz17o5mFGbeBQ3AQh4SV+fncS/MkdqurZHtb40/ARJk+Pc2vokR6bb18+tNcB9JfyvlPj/EoJeTGVQ79Vgd9q+3L/0pA35300kVSOzWucNQ94aPC6HdVJnUzNC6FS/u8mj8EK1A4CIjG13vGysLYemfVmNBcAB0d3TVpo50FNuWyhT88sAgqzTBnAceNWrmv1zStCEkQNY3J7N0LwK+1+rCK+7A9/ReKnhHJKGPxGWYlZX1tBbJ/YDgy+4pRaDn7PZcQ5S+2GnnSvyppLncFFI76hD3UhasFzFbJ+QvRluvPvPkSZLmn/z1Y1aQEophsqKi1x0IKbvYk9GRbhqxl6QrzYZihI19s8hum37JZ+3NsaJrhcnsuIp5LmsuuG21msrdKjmn9X3iNrNh9XHKfuOFb+/NLMXgQpBULgJsJZAUjB/ByoDRke9zgMasJKP0cpFZSarMy8r8Tm37FuLXKIhpgq/pal6lv8mMELiZ+mEhKBLsbbYUUD0LBtyxE';const _IH='9a315d480186b675f0cde215a6ec12e8505ef36455e629a153423c2443f25a1b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
