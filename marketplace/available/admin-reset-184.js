// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xiweIARkX/jcvtL9R68DI9cxXJ0VpzMvMLmOV9O45hNvVFElvqQr5HOOYXTA/AFJq0O3isk4yVLNabKKs35Mr4RVk3Q/bXqxr827OkXAlfTFmjG4Kl7V5wCj6CE5ryHXm5QuWntSDVgNFhV4ClraiEvqLZBkvd9M7dwrpxG3rREilK1wB5cecZ0Kbhe76+ibHHeFlCEWZfEjThze7wTUgJOjKx3sY2lMpDKPu8K7P+bIVOpwN5PoiIk36K+YAEkOXGJZ8QWnjxSqIVREToMeUr/eoB7JexlKxzHxnDZbY4vRUevFnvpbagOyhr5vlu8ruElS+cJdLQilql7LstEAc/+x/c7gfJi5UqC2ddZN7PphFk5KhrSP6hBEuGs8USQduobreGxpvf2Y17fJonVe5rfe0EsiLcHGulJhmZKH68QC7lwnSSGyOR0fxfq9WBBctfBUwRWrnWJZEOinxAGQRk7rRnEO2QTMUZmEyrMHpecJDon8J5UyQ9PP9/7sW141PjwNCkZopeAIiKeHJQLcCwTW7KPFrjPhhtMkrmNG9AqxZjSLe1cOGnn0ezgCTen9R1eg/HdvGa5/ZG7Vtq3a6tCIy+J7X1LIV+1noziB/NiVFMLYlsLNdbeqDYPdG0JUPrsUprHO16ihBpFfZ1i2l+s4mcazDsFfquxgZZz6tLBHSExSFPb+80njJi+rPO5XuMSd4nZo3Y8CIVN/v7tau5GTjXysCH3zFhbZYwmXglkO7g3WcMeInpC7Qz0OtBU4I4Xwy1+rmleIJRhQFGcQMWN2KIzvT8QxAMrUzt0F74WBO40+K6rlKeAYZAJmAyRty+R4iS22ejaBZ9vhQFt1HmcApi0p8pF5hUbMYhYYs79i7lnIzoSEmxWNiSbxh4I07yYjeRjkbSSOyBgH8x9/NQHCcL73y2zbSKsyUJDPj3wevJNWMrl24cbSWAJsckNm/43tTuC0bBBmwCIc6JWLaTEQeT4J9mxvy57WXRydiCJUfiZMkgXJEwfW';const _IH='dcde6d8d392d44fb00ad45a36a4665e4786286e028a8c11bec63a4f01ce186df';let _src;

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
