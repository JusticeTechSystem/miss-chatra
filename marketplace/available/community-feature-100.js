// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nT//jMPLluH4NI4xtFY1MaIyEgWvkdc80eWHu+czaQMnRgA8uFc8L7e+uInReQVTwjZEajqWygiqV98K3bxGHfTNWnJJpoDHYrmjap12fY5FkPTcDM21ns2Nt6+wj3GveE+pJntwXBrsWBeesG8hlJQou0HePKrfv9Pz7JZQfakTQzLAa6cIq/+mMECTFYiZSzaku51suCbhujEwr4W38QBenL3opxW0XrSSUUmDGdf1r1i0YuLc4XfCA+G2Iim9/Etkcx2M5jAmrU02wc4BiEC/dgx4olACktljke3pDZ/q2+nh7SNHSD86QF4Ejc/ZVJLDe0sIEHgV18KhVUpi9iVMK7hP0+6G3QOKAH6s0QNT9UTindeXz29Nvl1iF0rRkGyM31gtJtHkK5SLdH2YPYCAC5uBualBh29+hUPHihpaoRVn4TtIR9YS1pfFhqJxuS/NM3cJluKaDc280mT5H4ENjtpv7mGnUg8MsZQfPxzBCuJmjSXLlWOCSZEzT6/iwmPmtwj2yQj2XEeH4POhx5A44XVeumohEBQ+zXtd3lh/6gd6eKAWv+h4tLaLu7dQWFGLQuPHzj92UQIzTlhzjp68SpY95TPPoLeHCmKVy2yiTiKltACJnlFWq/7sCaVEEqTUS15aqe/7MAmAx6cEyW7KrXkqpakU+rl6ofSkqTvvfTd2hqeIHwO0+AGSPJQt2EQ6XVnsZV3hBkH+TWtyAKwlOwFWcR5+CsYL+71rCHLQmqXxBbQr5SXx';const _IH='73e2c6bb3bae5e4784533eb884ce555531535319052c104e7de85a4b046ede05';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
