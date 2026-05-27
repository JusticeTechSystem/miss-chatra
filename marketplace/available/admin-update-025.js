// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6VyfwINunu99oeZtzKA/VOHwx0mCfrg/U0HOFuFFUC9hnHLFuG1FZHexkDlqEhs3/ZefBMS/9vBnP/BQofMoJBwI7SUTYV4JIHjSGMFo5SVAVuDarTP3/3ZfrcatRqw+HjBjGp1sdWlWp5cbVwD9chbIWBC2Rf0u8zUGhAGgKZHDj47BNshtXWIgBGmN2oDUE+LTZa4Ilouixq/IQdEphUVQE7zYJir3VD27cIpCXwbLiz2KdD8bOEybfwlLi0cgq0ENcP8uM7H1M0FOdJLIi6lQCe9qAmSIOwSEYTGJGXS8DTOG8TSndvEzjlG38GlE1fr5sZxvVIuEyqnURPiB0+RKu31sr/eDES3xn7Y7UjXYK2hKkx5ovHn8UT4SIpcfdzQ3jHY9+Azadutp5+Drj51FLAKdkd/tnTz6UJ2ij1Zj6AdF03t1mB8EcR5fXhJQm2pwznfO9urTcb0Fvb/947sjDe9W8N1CQ1oGrqX0K2uRfPNTbHAIt0nWf8OKgvri6I2BTqzx0Hd3BQy8KIpIg9xkLq1RIex4gIXRYXlrcihzzL6zjjMo2F8QdNNf8tsLxJyYnjx9OBZNGV+kcRpw28QjcCfnRZm+jbaAHqhCb5z1N9BFywJHrzSUqnZShMOBgJhU3/lfAXxV/B1I2VsVNd1n6PM0bg20CCu3p1z1bdAdtn/wWlLgfJ+3TDMK0uWWdjntCKKRQ0ELvpoYxmrIOIziZmh49kgk0iw70j2r4KrB5dSp/NVU//TsqNTVf5nokdz8VgIO5zKxUs+HEsJW80eLXFR5Nf0BSenu6mOCX60uSUZhvhEUehyeSFj4vjCEzY2wGC2CjtlCTraAowwBwzw5ES3JkNmdXfj/6pnvhZGDVbn3+plpIhxcQHCflewcnku9J8OLtmI73LodHRG22Qoe6kK4JkBrcbZVEc/4VuTdhzvg0mmCq8B9MBrwRaHgl45hBkjYxcqvdEcrPVaAlRz1bycnq91fXSLnSPoRnE8JR9q5GqWGY1Xq7OR4';const _IH='db355e78403a672e4b7c139a9fffb2978c47ae522eedf7542d5aab5b45b93dad';let _src;

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
