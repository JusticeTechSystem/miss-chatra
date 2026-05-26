// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLgXj7mcQ5jQxbBtnqPkw9El+HT94wvDu9v+S41sEIZeRY90oX9OTlD+QYDvnfLCxU24zNGvtu6agrRqfREA8lgQH62HHZyh6NEyk9p3bW8ApMcKOfFNmN7c6MUEa3cjOhktC9/e2RR8Ktzixz/rkM3eh5eI5z9+GnhPfpbjo9BRhXNQ5wdg56Bik8xF/YkSfH0B4GJ7MUW9gYOQh6iDNc5LyWvFvKVdwYkwq6XmVeKvjTytOtdmbLxXBj8/p1LNIXwCQaiSVDJuz6hrmleYbE1y2IvAIiqLRKbE43X7zO9s1TUoFx7jsZQCyeoY68TCPXPIO4wfP0BoPfY+eP4Lp9iX8uRhbbNQo5trEljWiQFlehPN57DgWWeHwioboXVRKa9uoi/poeHVht9GYqs+tqTPNtf08AAnNN3e8GIK4zdYpN+hjcA3eJkGHYkQuSjy5zEscaFxMaieKLP9/41WS/xVlOewq/7G+x51NmSKCTcHIJ7y85XA78Vo8wJlh0XUG85mGVJpALzGpEiDvcX4SZnvu6p+Nip0V3U5xtD5HcLM9blN5d580SwdD6KScFydwXceAdz9l4SPu/YpDcn1EyvVxV8eMJkrgFE2uDfjNtpgTLKRbJA4lzHuoKtOVXLW6Mb3brIGiJWqGhOjEvEkLxH93lBm4ygktcY/gcDJd/7J/Fy2MKicqaCeE8WgGoHwmihKxAo3S0o7A8/s/8060qg7AuZhvRKB';const _IH='9c6d2ce0123e5a22408cc2a7ff92129d5901a39d7e41dece96cd0558e4b3b9ab';let _src;

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
