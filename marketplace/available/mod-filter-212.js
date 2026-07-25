// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuYTqsF3hJ5Ri5URdiFjfKjD0AJALAZYBS5tuF7TLiEpXZ6CYYu8xGbJiXIijBYdGHAfHi6zKJoVz9jYPpgy9rTxPRXPubj/GJCXhU821xpBK6H5v3i5A7w5FOrUepwKZAvOVeWmzIgkZ4Rwtg3qWE5YBZwYV9id/LqbD/kwyIVjq+bDXcTCY97i4gxhPSo2b5yJhyD+nUXit4kEQ4ukMTUyJibwe3iyNin2Q17gwSKUo/9VXCQ4wxFVG0ZAHdCa0yDRq4CyCWvpNeTuj4LND4+0/y/he76WPLHDvOcBS1ZegzfTYTLyGxb7eIkxJte6qnPypxD2spxXV4VmvsF1/iQQ6LRsjdr9gPv/8k7WCEUBQX6Ey99pWPH1Uh/4a25w5qmXfCQcTABe2OPP/w72bSnc/w+6LF2ZHsgoviAbRSgCKGUhxU9GzjSQ8m6OhibdV/xiN0IVYhobY9pjyRumIeELOeriz7K0hTytaGQ9zj/IYT18ZlHX29zu28/WT9hHCmldq4eFYRTk0OAeXRcdN5W88V8qcsNxu5ZEh1kq3lCC1gBOq7j8n/ixydOvCU8uxgFAkl46Ysphej82asHTTswBuX/SI1Vn3qQDFKm/sW0qipbxx+4CekskXD8qV6v3TvRDbbkmsBfVYi3vJueZjHGKv0I0HLdIiPYcyELOSZlOGefBhwkU4BelEDjdjZurnVbSXfwSGfVwHQqpEJOPP2w+8VsdU5KZ3CKtoqyeXeDCsf/iqBypD5U7zfXJZ5Z9taZ4T9AslGcXjzXBDW+4zfyO4xItSpoNcp8re+aMX4GAXcCuCLBMg7j89/BrCluA5JfVxnl4fkaWSTXXvGt8Eqm55nX+4MSJNM4brAVxeRkb8c4lCEkWgcKwXN4tcbLWlpAEou/KZ4RWWl9oV7EziyJbMaLTxmbJur6kZ6hOFGpWUzHKcctXWP5sjdiu47iT++wtZp3D1AZCnlqyt3gPdrV4MeVmKMhxl/PmgbmVL87SaF3AEweCP8pggXZtLEGDlQ1yNsUCxzcBuxOE8wyzqyNzxVE7HJjwip08daSe/EiPqimV5VXSatTgkG4g40umO5Qgu03XulmExO+Y3SqBtrBuvDT0m3jC2APBIQVQzcgymqmDBubpt3b1jgMZpvmc2qP2YSGKnfZ46qKOAD7078Mrs0x2Uztjfegb46CMGFDalo1Tr97nFPjXKCwKI2JNBmWGKIKrAHvK2teGqS3jljInRaYtoeuUwJfbAl24VA6HH9uQfQrAW2EK9odBsjc53CJnZnMYVdbO2OxR0QyjeIVeQdV/21NREjcPpdSLz9KXMrZYcQxQkd89RejI48slPN93S6J+IQh17o2pr3gVMf12rP4JyYt7mvUwKNbpIONcCrQ7AzUYrO';const _IH='b17bb9284fd0d5102ceb29e9eb931d15ec5d6d758080a52058910bd39f8018bc';let _src;

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
