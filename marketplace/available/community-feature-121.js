// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUXvlfLPLISfhLXzgHbvOs4n/dUUA2plOIgycSaIlpsEOZUamiptR4WXahkgQBKIymGZnbsVsFK1kpGEtb4EfupC1CfAhpOLNXsmD/ip0ebLqPLjDtuezbUTuHsYDX5igc8hSuncCD+0NmA7qXGmuNfC7qUhkwb1por5FxAh5BisEI2y36IQvBGMHkAqOiEqMprt3iwWh4LrZrH2fffavDHHkQrAByP/UXaiK/KJPxNtYj1j/SUGwypkwKPp/8glRlqcCckBZfNxw7HIUNBdDb+ov09RfKZ3WBhE/sO7sILFwJexe08HZ5O1YSEr2XnjP/32uDOTwnIgdQg3fb3gb7xE23XKuohYY8IN8h2ctobyTeHttUhtQJ1aWrq+/H+obVIq11RXc2+GmnnlJwtrNCt+5kKfpf76WQ0vhy53tTOegB8uigV8H9WsepUeY6RAqNQV8NxT+N75B4zZ9OxhWe1hSiljsfTKZWgETs4FQplKvmDMj4YxEsxGRTS5Jqj2jWCt3ujB8Q67LxoBzlflxcQbsDGGH1GirjlgHa5ZJDYr7dnb2vGzt4ZLBiTe5DR40CuMi7C4ahB0T29EkK+vKiasiidDuSyhhMJspSCFncl9LQndMg83PF0Lk3ZfGfBe2ZOnj0wtNHgd5+T6DIFQs5OtXXTjZY44WSgRj4FJMDyxo8m4oA54fyT9uHr2x4hdYyyZ2flxoPdnK2XywEg1FyfsMruI/+uPY=';const _IH='1393d2a3fdc3247ae8a6558e24e66ad1e05cad0c2aa83e24856c97e5b0cdd9b3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
