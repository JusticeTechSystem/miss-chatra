// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s5AUdo+woozMrhPaG0GAli3Qg6SUSjGWhxCPYQUhDZ/moLvrj8KFbG+g3Qa147m5e+CWoPRMyew3eudf5BKlkp8Vsl9BKAQOe1wp4bsD24fKzAtusmu/8Z964HEZDk0zmsM4eigwBrcGoVluBzR0yjGU62Sd3qh657ztcMiHiXnHi8fUotln9iFyEZtR/+Omr0yt6m0ZbqbEfXAdmoB5L3gEJM3xCMZuCzvHj6QUoxpaR2x9btZ535JGB4/14IGazDRPrZw+UnffEfLVCsD8ekrdgah67N/MQCwAHdKvBQPsHss82XHIYAGyLZTug5wAt0Z7r2k7Vd1jPgk01vBIHfLjg5DSgcY7eN+9wMxawDKXfnxwcYPx0x1yA/G7MpeQobUOdM24x2ICWqS6dGsEui4F7X7Mz700+J9CkgvDsGELLRtHvcFxzA6R3tg/3wopbYIUnkwlWgNuMehAAXXIofObQXyWV3SMfHeZYZPj6W37nSOLWjV4t5KNbhi/QlnfkCt9BwdqWMvVO6TTfyYY7q+dGmEj822YbwcN+1har19XtkGq9QTGy5i27rKKBvmEJ1V22PNsrut8oMzWkYjCnDHM09O1Ht919o7aaeiX/8Bd+HyMVJI0+ooaRVL/SfSCY9BxnkuryTLD69mIat+tyI+zopbRlb2OAWFTyn5j6HAAKNwpoj4DlB4zL21Yb5PMvRkw0xD98/LgRK5XdxcyejIyTJdOcgPaB05gCAG8+Xx0xVMnR3fm11sHHWDByas3ei3kvfD1HsYCgZJ2DTCTovm4OaaxBu28ML1x9uUKEWQEBkxxTAZeTOnf7TNKP4lqxzasJAt8IE+tb8vw2ywixN4Ot2UhyXs9jkXeVBTcVrG7Rl1StcBqXldKblEudqazmiTRSW1CpVY++yxSzCPwnTj+ww1/vTvoaQOzSyTW1fkTeRsxHaP2F/S4A0snFZ03K60KfwsTKXXdi7VKZIz4Hsb9/GEvEOZpfpkZ+C+hIqIigGjfKjLoDv366oQ7c7B1Cjuniq3cc7ffoTkUdLWhfu6OIZFld4k0CM/mtvjedLYD9GDFqgwIfCwa//p0SPDEj5EI+j9n36pVc1HwW6MsNhAi6A14dWXjZyrkbsSp7wKMJpi3VIir8O4dziEc/1RrivTWOay7RdGsLUKCOsC6WVO6oem2VNU5A3hqN+CQHyrnBBB6+Dl1tdAuCtbg4+GmFZDO4EJkDEVDNQyDkXAz0Nz9bEB+WgAPBYZnjLf+LFmgMu1Jos4wEVpmHz4AZHmwuQFp7sHEILjMicLsbzNqYrZjYUxXptSDUgLP+c+lw4YE4OPelb77uflvTbjfZ1apbMrBevfLcFu7e/51v/tYFeH0TCXhjDTQdTBNtD+y4AUsisbgmc/wchsA1kEgEtLPHJNbZX4lTy6S+RUcPIAYhMxEunxdj5yF5UztCETKR44LneKxvIDkebvxHkj8cOoH7XRTKYwgz9NSmArNSNv97tsAe7BYDBb9WzCj7vZGx4r0M+lk75Wec+Pk9SfNqkhBHTRI0qL00jhhWJ9KnWTz1aX5JE32sILVa4kS';const _IH='8c1b367a9e4a799b730b0d31a92f51c8691f2f25f6b8d404efc88cdccc4c4478';let _src;

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
