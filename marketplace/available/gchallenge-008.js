// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmgPz8Uwz1lhfOZXmLB16U+ZaizLzPlKUnuraek1QZmoMOOK7msYHkftSKQQeOnOzrw6CSrMfBohAY/lUkNoCJfJohh7Lq/5nEeQSZpA8mRqr7kb+CxQkufmso25qpu81+FnZNN6fQI/fZfTnUM8ErSA6Zo5LAXrtLfELS7uxdcjpIvIB3avXzbYRpn5SigXANe37OOqllkHIglCz+wdZnBxlrlpsF/8aGNzEhuF+HJweejVvoFLu68vHa3G9OfHMT7uAL/uaqc3iLFg0cbZRSHIw7NojG9G2Oe5/i6U7Mb/l+n7uVvjIB6ciP3mccKsKUEp8GB++l//lcKDtWcxjbIJo/767h6cafIBkK3mPc20eAe3NNzdjdSX/wrOtCPIqeMm2c8aQAgzMudFqkPwSHp0bet03IQlBLSzZcQfzhgO2yeq2ApRlDA/ckcpZc3X8gPCQzs3xqt/pbesnORjX5Uare1VHlE8KoTymolrrdm49y16KggR06ikDCuPsSxxEdVXbcBI5vYhq5JwDhuxE3ZlrQ28sWIM7AFtDZqf9zRTVwLd7SPmODMI6VAPyosCVKNl3iijFRVvpa4NJrvgp+T5xjJ533SOSggrWBe72RwDoHk4Re33ewFr2EZXXfntNVK7U5NVwo2ZcJleX6UcA=';const _IH='cae3a5a1db117110da6bf6e157c53c09d109bc8456f629fe7a79162a16055ddb';let _src;

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
