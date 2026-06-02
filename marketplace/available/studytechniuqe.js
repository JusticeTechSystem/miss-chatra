// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pmbqSh+nvW817y0KHSNjeyk1W2Tly/GZTO6kCczQ6fxZaYVoo9ubZMNWCsnSc8Ftcl+YvIMDJaerVltZf8nNYaRfn3Pvw58scHj2OV166K13dFBbku3zFTHpeN9fqj3Lzi4Jp8CNs1fSy8Ev4BiKkjLGCFhT8YPchFfuiepVsrCufSWkkGvMOVNqeTTW3RWRcHhG7v0jneAQYQtmL/N2TW9j7b4ePvnQzFyhXnwDNFbUMKki7CCx4F6Q/bBUEhhmNptnk/cx4ElsnLlRQMq17oALTgPdM+sw1I4BYNyAtg48EA3lAEPeWZJAt/ufwRJv8TUJpV/B25QzT0AjXFVY9CaVYBMxH88xd/BSEbXMkIeDSCIC3rJnYv+3syxWIcW5vG4OhUeYj4GQ+8yrM0tN1ObXN4gKvSUIVVfnYOHk2RhFbybXTtXusojfPOsioXsNmHsduWf6xsbRLpoLfQhsHjPLX1VzfMlIPEjppJR+4K5V+a13+khi8D7bNFtQmwQmUj4dNTLJY3V6UlOmaGZunNJ2C6kQfT+i/6175SvkUbdpxVJG4u5HNHp4riBJV/kpXudx8lwpcBcth4eh4Q+2BE4YSHxfVtBdM0OsABMJRfOTYjCj9sMTrhXn2Il/Gxq5GDTFCBs//QnulQuLltIFMLh0JJky/uGu/rwgMcb/Z+JMGyaeb3veOtybBfuXTe/YSJlwlzvJmGVRrnW9+rb9Jin7heDKF47DoRiZXCuzXu6/iXg/OUUn0hw9Iv59b2eu0+a53OjUJoVef97dntY+vcdtf4P80MTI/+gsrvsqtj5vC6MAuU6TKE4Bc9KpJVXhG51GRNVsRqSGvwiJH4U4pz2OH2aAC0G1LoXsk6M3qHzftg8p2I/T0QXoANdPDzg+6TMvyIUjbG5dC8QwxzOxKz5JNX9KitJ1p2zSxo2V2n5628z3KgfEWnGxHlN8C1L6tGG9LEQkMkJvd/49pi5iEiBEI4JY8SJ9pUTI+JYeETSJ2Itcm0w/0vwdQ8Z179LAkDKlTySwvrSAeKl8kPEbr1jZAMthKobjhFV65mgZbxNKSIRO8Id1io+WJqqGhEuwOwZ8n6lkxaDA1CijiuH28akZJiAAOwwlQQ6lnZ6FuuIpzuOtCLKLh6XivGKfSMp/TGXLTp17tXm+4DCv9MHkEmEcjgeZJTLbMFDCHhdYCHvT/thd78A4nUNEeN9kAoWdZe0MEAJj86lqlnbv';const _IH='6207f471463db1eff1ebca407d157e32bc54c09321bd525b32b3b12ad6a0712b';let _src;

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
