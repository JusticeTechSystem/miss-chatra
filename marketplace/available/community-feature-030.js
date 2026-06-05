// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fNqcGYgRJMySiq4SYeN3hhQJeLwAy7loFXW9qWtGl64Sy4lG1E3A18tD6YDv+ZmdtOX+hoyHQ74sRyOtH7a3rg0yKDO6bkga/G9N3gWdNTWnJ5uJRs+6qwSVY7iHqzE0BwF1Vkn83MiE0KP5cwXJzM/K1SAcgo3YccKLAkQo9bjKsC8nvo9oXL49wCdNr1z4WvGAKkw0d4LxHJkkdT7UkWPAX7UZemUHRqeOme6C+x5HMkH6W/XgGYxeGwsZCNr836s24OZIiBzVK6PufiL7w4Rd9MHwAUaNtp7pmBhuL9jznfYTMuEXErh06J9E5xMjqp6HWXiWhxKI2HS4qrrSIpg00CQjbpBbL15lv4r2CwZkomffQ0t4WRJ+ZFuaudwuI15TV9jqWnZJObJDH0xub+5vu4dBOGPQoNq6N9vqOiQhezh6ts10PhRf0LHsHopn0+lLV01OjXgiGPy4seKFE4vkKwKy7h4rcv81AvYRV2ppQ7N6nIebrIIQdz/ZY0jk2gYKatw2RqXE39mj+0Yj1fc2/EGS3V4zIsDFH7jMB+u5BZCLrILuxx9tFqOSMmaL3N2g0atYiKX5iixxuxftDwuBU4gonCfqlbyUr/sxZSenhxfWt4EHmDDn1sT0AfB/ZToMQY1gPPMg1MSV/4+hSiDkime34AVGPRrXmH0YZWnfjoem37iC7TJieL0xbkzgxxOrIHYoF7Edx+fo3lop5rdq8z4ruEjwaImIFP8mrgWfxI+ffy4=';const _IH='6d34454d575cb1c8c9a69f3231769194c5a7f909784f9fb12b6695122431c999';let _src;

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
