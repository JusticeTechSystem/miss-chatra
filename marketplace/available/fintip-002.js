// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SMaXs/icNvc1EuBePSG6i1zM9qIusJ8yX5fYHLk9P+/cECUpKU/jdLsmX66cB4h29AwSBx9nf1Knmbw+c1Ffa5MZzyUWqXG24JBsSWxG/Ew3jyRrAFUU+iqLErN4dnjwGjKkVJpVMmbjpzQPoP9+pUPLtehw2YplZzdy3JkD/lIj1RrxiokKD1q0KuuTCRUruNPqWoFbY9I2lUdTaw/4hNK90Qt+JZs200flju5odKv4kFvGbWQFUxu2Szt7Lzw7GPHmQEa6E1tHYNpeFEuJfP+sMnzu9CeZlFS/u1izw+6UMmCnYYcLP1hGM7ahcV91J+s/V7MhPR7RfEtZn73yejLh/ytiya3hqA4IAb+qL++7Jjyuqty/am0nZ885Oay68mONPQriwetHNWIwLPgMCm1ssFcbMRKuRJxogJl7nqwreMQzTKMnn9bOiI32devVUW25npU7DrQ45yiD4XwW+X2yUhLdB7k2kIVUOn8oUjSQoi4ZXuLdyqxy36k85kLLMPDiMpeKWDd+xrspF2cBjmG6w0TQW8bcQMPeQpeLCSIIfm5sxitqUqbw31nPcN/eyaDQIIlzq0q5Qr0/sF8UA2or7Yl1q8BTyqOInza9aNvtVgHRacyFCA48lFIHJMcaCz/Im4wQ0i3+sDVjORmlo8ues6hrfQEja8pvqCAdH9fV0wCKf5hHVguBd5OsB9BEp56ek+nHn11ZziiNXMlJbKSuZ8+MtHTD2JsLqOq8p2B2wp3pmTrT4RoPiecHFHu6UzyxwBgLqNdSRHWFD/KBXZAdX0X5vMwE8JYTuHM6lwF08nin7QmACTL4zU8QsduLv93ttP7ajZcMNUw9I16u6YrO7m9npTLZfKUbZ87C04k0rvpZaI/2BK4dfyT3oi/N3HnACpPAVpVbIu7Akuz0eJ31gwJHXFS3im/oZmhim9zNcU27c2rtMyvk0lpPGIhb9dyodM56/OIskvLv11DqWhzJXjrVPX4UJoUnV7376dK5+OeQoctJytNJE5aw3OeL2fI1nNTOF/uMA2osMFNVk7NnryBMKVBjO8FnUVZl';const _IH='a70bf7d88a5f268bdf48f42e76fa13e9a989236ae560e61dace2bd4529b8b5af';let _src;

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
