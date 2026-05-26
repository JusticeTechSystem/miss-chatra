// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BbpSOQNGrL2VSgwaQhZc3U36dFNP8sTfcWIpQsJ6A15gn74HPNLXt/3SIP6i/Ej/oHVnGd5DJFxBuWYgYmGL9Rg+slYh5vItKqIgbkv/x/XXBk9YhF/ULChnvt483j0CYA9aMsfT5VU6kcDpdxkx86KdlKoH3iOGbEnoNWk3GA5z1SUS4hEr/FCwauQu6v9gpuEdF5MgcvrPrutywlXMrAjIg5wY7syfCPcvIb6IAqXp/HXPkNG7HEn6DFCF2i+glVD8ICjr9bqJzV7zYJcA019tYvfE8rN3rwNgycVczAr9Up7yMjolScC6RrrL2OyQ1rThFnEoLJTtPq46mgIyVVyi8ai9ftd3MVeB7hwWmhgnqbTkrwqgTi9uERYVL1GlfnXjnFdOQIi2YiQErvgNiULIVkiMNuMO6XX3gF9tLfLWKs+ZZ1u0S7av7WCMkal1WEOrtwSNv8yhFRg4/8ggG6HKAI6RCwbeon+tFN9GpjsbtUmjLV0o2LbLrIxsE7hCva150OfZLRrsp6Qx6FiIltI/+tMZAM0RnyKfzLdc8+BfJiYFf24I7ANznZVTIdoHHmtvWKHJbVtwwsDUR2lZQh3ZpHjWVDGj8xwJdawSVPtxyoKQCvjVKLYjM4VtFOZOM34FwlTB8o/9o2CvLH0Fsg9aS8/rU6S5cy95nB1nFivWN+CV0WSRaVaVMxmjL9zCdE7wl8pock1LgsjW+/f85/fCduuPMxdYczAVR1/Pa09dHdKwpCASerMYQ7I5eNrik/o3LDQuGqJKCinkm+x9XsKs5BQYVJHBv7a1msV62HnvApbNVjd3vzn3uJd02JYXdf0Mk7B5b1R1XBHEQ/Bc+iaSktrcOEHakZ+xeinF9X/0i/Iat4pLs5Ortc6GA5GVHWjpWUQV2wlU440Htwcin9BgdJGHwzGJBYfFehFQf16+0GEVEsGKx2S/bXWpOrLFLCM69Q28r1rTeSBlkmhayAJPxXLrzQ+1xmpJOMsr2lsKslEsuui6wvKukWGv9Pp5sCE473KH8kOjW5/ZRnh3/YDZfFTAknNda8C9+X7UBVjqRnPgCj7JHiTlGUE1efngMFPSh2HKm97O50BWMInM4vNZ1A3n7eiIstnXkZ4PDuk9cV6MB0JotYjUTKKcizdcNz9sDN9iDmyFrJrqh5VZh3STgWOxXL8nWGAaLJnWu5MhsnUFM7xEdVcwg4eFbcHCeuldmg+457+5';const _IH='d1f7732c68f9834304ac3112c231b4a77fa8e721a93ec2ecbac72c1a7cc26a68';let _src;

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
