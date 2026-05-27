// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2gpToxzPbsMqQ/vbR3CvKgl7ce76M1pAQT8CccT6iZQyVTwG08sLEN/ASQkjgSu+SdkSskqkgAvmI2gvpZtqzjj1tF/W+nK096BWOqjmuFr0RWpQw6I87t+1h7kwV2DDdXvATxjSRnLhqN3ZIRo20kLo6WqV1sRH9ApDYIpJ4k6oCfdItTT/hJ68/lMhdfi6FfC6kh5ZB/H78V0qmxpHGFTo2ixSPnXpLmrn4afI+y+dntqYwBPkE9xoa/pgVCgGWRpt65N7THQ6utGuADYgiimSZaWkr8u1zO+TXMf8YhLyaBLtb8/FbvlyLbenoEm/d3FmoqnpHZIu6YSo1Jj6rWqF4prL+mugh0TiHYRcRAUYSfJlxvDriVgNeW7/suqvygfUKj5rTRkdYjJ2S1FMJBSUCaf5/wjmsOp0ip3Gl0J/BZXbrBmBJLh0LWGNKK3ruYoNbyFtYEgWn2Rk3CMxnwEXzQe7Z5KdeKEmYL7NOXj8TlS79iw0+3cHg90cs7sBy7lTl8zHgaE6Mo/wNStWs1JXX8egJMkadetTrRaWDFWBOKtXylHH4mkqnnyf6ZqDb4KXr93erW1K4v0G/6w9aMQFnGUwNb6b2u9yuwv/W0Nukoytc232bToirJzUqovYlZ7ukF5TWE/IiCdRnpv0V+s2uH8OJsrpC0wZa5K6s35qA4HJjYetr6obDrD5HlxC4mLJ1vi12dqNzDyBDy6lEDin7YAH/UlHm4AEYTcEHhLU3j2LTgv9nmumAP/Vk9PGWVdxiEMpJio3fsO++29DCyaVymSf/vmwZEcYb7ALSfC1FBozjuZ20nTIL7FlfG9ZM02K2VYgJ7qxpvE/0tCc30D17I4GXJYtxcf4YWknHECmPG29qrI1m9NxYkJB9+qmw9EK2Zig4e75hEptz055VJXDG02lTtJcZ6ba6VB+dH+++VCuTaKxwHA1UJHQyVmWpFwgBmsUoKr6sQ5h5ybqOuGTueKlbbi8KCkUgew5f3MTC4AeCTUo1/gtrA6DfaR8di8LW8S3XBhT9YXvGfVjTq4iEeneSWZB3f+bJxevea1ITg==';const _IH='99b53312dff4bc04b5f4df6802123720096f344417dbefb2c74b4d6bad89a5eb';let _src;

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
