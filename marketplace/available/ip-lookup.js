// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxMnXMkmtsafgILWrsZzfARaX5uoAgjvzD4APeLy0hvssHwoZoCFf3SwXUHfj16ZsmAjy2dMkwTNnG3RkGGZQ8PAxe+tAmV6nIPPEc3tVUxhTIt86Lt/p/4AZlv53BKWUthU+EMAO4r1Hhw30iLTAI0xyZthEbIPMVrkjc9xvbvBXNc1jm3FMJycDQrpzzdlrwf/zskmNKHK40tN2UP2AY6Mp46Tfg8ymcnk66sKvQj0vwzXHhfkuNay/iGJWOWRSMLl8wSda1bkpYpVEyzJilAVRJQIe2e0+elsJQS5p7B0J1Fsj49QeUvt9o0n6HGJrVywEvZTKZT2KVZvLQSCDzNuR6v1Tkip2dk5th/8MwOPGk/oUo2EzS1tiW58zOVmO9hbwqes4bA6Gfs9ut6UXTBuWkWZwwcewvUnBuRxnJ+D/Jw5BofeYkioWcCz4HyjbLAYJKjDKYb8CPjZTt7k3f9ZwmFWNRg0cVVHZ/TfHqNPQ+SmbrWSd7s13NVkAxgvdKDF5avVcq5S9hhF9/sS+Lf0Lasj9OxBR9on2WCTM+RpQ5l3eSgX889YFqVwF5g3staLWw6qUx+ch90BP4ndYd4BVhSwHDAPAiyvIZHhpV+7ydTZ5GQeD/dAThGvanZ4kF4HMCzqvaLNEXLQgInf3wZz8jeAi8C7hKU3bEQB5SMJ35fJkwdZrkCl1rn5a37dJ2zSLLChvXASxB1Y5eZMSCPRiahPAr3LadGc1WUBxBj0DYhjPY5BufCoJYpD12i4a3a4QEcc7OYXckfWjSI09N2kmxmYd4lwF5zaVMWC6M1/Jd99WCbELEiz1fn4i+TlIDzL33QY2bFKNb/cWGQkWv/MC0cZe6DinbyhrH2SAs7X98lzaDI8AsCTgcTgkjqkzEUiDzvkFU9KN583riaKAY/+i1w5zcLHsd3g59E9jYntBsbg1wm0ttFOso7lgwKYEFrSv8UnNJ2Uaw5454p6L2ORjluK2qfpF3Y0vf6wG2jt5XXiTqbFcDANXJJzdhf0QyEvLf/PC4a+XzN+CnnL3YRWQV6kXYiHIj3NbFSmqMSm1PK8EFzBATDqgs1XNqgzKP7c5b/lj9l4E0yR5uTAFwOmGe77mUEqLyWNtj1zQRUE7UO01IzwrOE6zh390oOfDzmlUxUvvXc6BN9CX9pmMvhJ230krfKuHxEPne0W+8q937WIlXTvQBQh2NQchWalRwMlyKCZCvfBpuvzpIX7fhhrhi/OR8lNC9iRMKVdjCBtk2rjEKaUexRHbKGd3+XrnF';const _IH='1ad400227a953410ee69c6a6fb74dd738a33277a5f90a2f65875862d5243c742';let _src;

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
