// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H2Wag90PMTxQpstobQR9GQOpvtufm9uze33XNt2qxsMRBBjnA5TimWFLPHmnC+dURA8uGWFPPN47idGEj9k2Wl4o7LUe2wk75K/P677dPphe7vkQQEQC5NS84ZQqQrcLkYPtopVcx8Aapog6vXeAAgSHCRtU2uZnGU0HPYAg+Npbsj9dl9clctaQZtqvla2UkmlqXjqCzxg91/zc4O3ZE4kexpDpZvs9YCtd/TSjtu0vMUXrBrB/IXJvuTOQ+lrfRe85mT7k1fWN9TEtaFiAQhGdi+IXNQYMIHJJccF7GBfizPykf1a8Y0y6y/jir/wtUl0RetPw4TV3x5TwjY1jGaNvqLUhgblE4MfVHCspvIPQ6Rhk9NY2bu/MpZhMNsBZC9OtYgE5jJ8RW1ZM2VVRk+lknnykjg23sP7rLxiueMUP52Q3dFUJBXULW2MXKMqEQsLgjX0jWisxIxjY5VRtCylpZSy0lUuePs9JaU2liUdmLAOOsmIUx/M61f/+qlncyWmHjF+Ww/lCrLZfaX1tS/oXekgID1Adeukx7QkneKxKu5oYJgvo/Zxf5VlNkrnr2dqdsKp56JKwSZTh9QPvAKSEAlUa55YVp6qUn2Z0u/3i7dFnD3SvXCDT5N/gc2qdOIyECA9zLr7ZXwVb2NsBZ0PqZ4R0EiFtr3fmaoalkJekIR/UNOnjmXDCDyagjxXn5c+sn8UxQ7qngRlbrIZfogZMiSj5RKbQBBs7XReiML7JA1YV53E=';const _IH='5c9626b568f31bbb8817ba8ed9d5a2179124188f46f1fbc36b9dc406bb5567f4';let _src;

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
