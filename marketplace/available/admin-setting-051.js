// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bJDn54gYWuTblwitfrt28M8QI3uR5/hkpDfIziLuxjhWcZgB/5huMPPJAd9duKD6eSmGbbfTAoVr4GP3PGvXh/iqP7wysw1ovLFjVCNge79KSCiey+iT3769TR28aq10ZL93EYyuCPxocWi/ro/Hgy4PKJ+XMPZQTzPG2opsZjv1WE203PMuIA+u5jeRlgAuNTuKLNOqn1tLEP7KFS7TF+Wmyq9A1RmgnA3G5+1T3JCoNB6m4GHiTaV5vo0yeOZq7ylRyqe092qu4kGeXuAbH3/vG9KxkFy0VmLPoccdmgs4vrMpIeIOq3jbgX4HQyeJJzzPhTHJLA19FZ7Y8O/bXwsD98OGcOZI5mvM59o+UlL+77nOqXazTsbaIzg6dPL2ynzs9LBV+t5jghn2nsQ+91NG1k6i/oI8UKX9bYfD8s/uI15AfviTsxTDauQ2JWS7IjJujGp2eqgbdENNLTDxW17IkJQ4xIbN8D53xPhvB6fYTgRuV+kY/R8Qf6hiJLkcLqLkJBqK0o2oMsUya9ZwYSzBaqP1WmGQlhs0PQImh01gub5BJHE0gfy2D5MTMp49NAQmRORLgVddhbF6Zw1ZoljYJ1zf8DOjV9y8NqdtOdAxSBS7B3MX6rJHYRzA0e1SQBZvtot0dAyfPSbuQhUhm2yClRABlnBEER/uT89ZNvIWmFXeWfIwm0A3I4QXBCgTQLZHDBbAlRI7iKu0Gqlv7bwFazHrlNjw/b5J+gksAB/o6vIxb71kviLHcvJYOAfzx3UzsVgErmn05p0a21phsRkMOjI3XVnHqlK/7JXV8s82GIpepT2fajz15In+AMC6v4JmmJVgI6JCfYXG82BxzturxgG+BxXsgt+cPB3rTN4rHj5OLIYfREJL7yWmeUumWPFuDAZ94Z+0YSvg7aVsGxj61xnEKw6J3rKbitgDHwXYoFN604QS0/5K8AOiVYwP02fRhuEEbrwV/NkAAiR8+iuaEzMwI7/Zr/vTib9QjffZKrk4xDTd1c2Pe/EnMiTaeQpWzw==';const _IH='20d4e5ecb54fe1fdcf3637fe2a60b058b7a11f18f94f8722829f9f791c3ca331';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
