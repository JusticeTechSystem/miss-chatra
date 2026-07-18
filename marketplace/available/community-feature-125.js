// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGFX06eU035HUU+c6bClmiA+v2XF6ytWMj16nrklxa8fehMWKcXUPcyTC8ZAJTFqOp8ssX9dYLzCn4eB/Q7+uprj/BV4YaUfxnq4FNszxNzefe6PItC2PKfHNpbHC9+GBF/DXSvBEKHcleRE3nxBEDjoWn9ylLeZQCEoiFZfNWQxkZHPZ99Q6s0VjsNXSzL1+b4HM99sC9DXYuKSsn3jHDE/Ho4+Iloib+XeoAuymoZIctFZBh1bLJBKbueLzcXXH8GTwZIkhTGtS5WvkJz58+9Kx39hsRJRY9zaLwEdulsjDhtrQmy6rJ5sHCYEALVl1WrZjRufmN/yjrqmm5cxNx73SRIqAG+mLGUWUjHygPrhZRjSiKk/TgOVvus07R+y7j0X6uwEUQ8xgjvYzIbqBY9vAuR/NOE9/IKJOjdECbswILoI+QQKQ1vjN7mysP0PO1TD0QEr3cwUWfjB+oslzx0x5Gzh66uvt8YQm4Ouery9Tj0AxQPoxAyhNFyB0ayndGPZ/aOqEqptvDztAn124SZmgNVWkFxdH9YiMNwQC6Z/+TuKJRdXY8ClFkeUOkmuMqWsEjWr4iGVmPLCDMnMUUhIbm7NMdFNDCUeW6BqRw8gVfYKSZZlmOhvyW7MwAwAUmSjCn7oism5GnBaSazqfnMBJhhmfx+i4y0jtrA3evBA7uPX1VTF0GsOi3hRyty1H2fvPmBOzF4g1hkmch1MaPqobWxVbXkIKb0+fwnFeq4Rwiww73FQcffAY=';const _IH='46066db32cea1e5e7bec1e4cfc350a80ff64abd459342d9bec2c3fa29e60779e';let _src;

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
