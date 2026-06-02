// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8s+mneMKzfERZNXGjkTSzGwxp7uIAeLq+/uhr0rztjBjnxxE8OLTSaR+zHJtCxZh/a7AtGz+t31NjpCSduEaFarrnYWZwyM1PA8X4uRNFWXv2xYh6fivnouyibod5vjjm1dUKzNX9LNSWWN+LWioIgNPGUNssahMbehGK/yQ06MRFBvWhEl1OsoGjydwJ3/rImF7FjPpfV61R6w1p403mEJTtwaAKcGuUE+FbBlw48uZ0vemh6QTZwMQD+OHx4LbIk3DedujZ0rXUH7pEfjx79TvFRIKzwTfGeW4BP87XWu0O/5ResrLBpK45VyyD+HDEApvVri3FXFWPsWZSZLqf7KXmts/IlAd3t8ph8W7zz4VPZgAMdq4DjZ0P1VYTtk2wZwxpzyjQ8cN+RjQQm9tjTl+UDQa5DPFcIgKfuCuh7BDnedy4QvHiDL5DjHxP3qT5gqcieq84fbA8jBQCOZZJ7ERsqjos0wOJKDED5PgfJds3mMuwXa8Oq5j9DKsMIX3ykelQu9jp6kDmdXPEcv7M50wRxuKp904+qpJWCUEhcj2jmSJmXxLF6ANudY8fGvptks5LjeqpZNFKb8xTPxfDFPMIH00bAuiaITXLKWZgYHEE6Gsk9SNldfZ4Xd3x3WsjPbXfflGUIlbsB0JrUXJW3H6Zod4bip8GXLa5n6wGgwcNZzGjKCzkFtHFuKlD8CHaH94J4x0z115vDnQgXpWJ/VEy2aaMEkw+qSi2QM+S11wOa2Qbg=';const _IH='3ccfd697d44ed4455e3c8eb98257f0869a643c6c678f1775e4982d2bb852edf7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
