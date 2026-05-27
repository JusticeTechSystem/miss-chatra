// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='33zvh3aCkO9fFF9mkJDz4Kwo2Nsf4GGeCM1c3uRdrMqRyRXbi7nZ20tVpS6nHODIK4OGDCgVADKluFz0IjeaF0tsIj3hMGZ3u073hMsM8YTT/jlM2ifFSY7mytVcPTNhDpGgAYB9NPtrJyTcZMOU5EaD4Dc18CW8Zgx9dX5j9FWH1BsPLKSW6DVTKIDkAGeO/DYTZW8cBUa+ZucL063kF+0PKYT1zJ+AZYvT7jR3hMX3aZFBO6Okgf1YmP77vh2GBcRoEbewl4HgcZgFkRTMYGH/Qlkbay4EVye3zgKMEXrrUpIElL0x0mmC6RAduWGr2I2PU8yuKJzPWtZLDeSiYqhrRnl7FLqxR/Xd+jf5s6eqZvt0KEm7xEda4it3Z8iklFOrjbs6YjT6KYSb5re3VAChxelWE0+KCmcOdwipBuMHH0ZSZD7NWrVhGG/9nQFBzQ6SrJdANAKQHAvcvs20vrjZzbuiO6VwqX3QmpaRDClZS9rNvuShwTq5rdSxu2niVidc7e42VI4FkVtGac+zDXW4GUX9wXLsOJUQcD7rHOaxxxg9glgkPRTF/EPve5MSs4Pg7DgZqNulnv10MLzIbJe+0drplq4eUUVsBpCDVGxtOuuEs0jyp1n16w81Vl+D6RDK425PGm5+uJTaIBVP02LzQ//pW3HelJctxCQRv2c5koTtI30waB1bqpKGMBYnSGc3xtTnLkEzXdgxpoguftPbYaXI15Zc3V0ju5FjlJPhAdQVINXJzGEHEifKn9gUx8yX+oxBMVWRAm/Il9GL0c+4aBLKe2K93Lxsn4Q6/Y/9dYTgtFC/A+1ehGw8JyB+OOj5zY0cHUV0nldbamA2ZHunjkMf8unQeHjqcq901+PQkKodjFw55jdDkLfvs9vwBUjnm/tuAbjzLRqOtR4n0lb7hAQVvPp0vYVhwXzNXP0LCw+eDKY6Xvh6vNkgSWz+3zoWJh0CYrg8wIYDNiV8wsKgrrISp/RozpXo3/m/aMSuqav41XBCDq7/sRHiTREJVlfAnRO4328VDq0KvCan//1pjDorARGIs4EVl2MTLL3/0t6/J6KyOUEEXddTzUCbLBP9wlrPT1bKaw8uQe8ngVjVSvaf+4aoqnMPJ7VcvZCbX3kEqvn56nX1jVJxPHnT1Hxoqd//tizncJIvo5idICur8qtWai804OQTsTorBoSGTYhOaJ5LZSyXQtrSKNMVGQWLqsiufQwwZvM9I+2D1I4iONsTfpvCWddRgoyLxGLQrz0g1Nf1vr9K/IDGuAMEPrRWs79P7bSn+nTin3qBrN8dbY+sWSvETs/j2KyomFNjVDavLW8EnfrAfvJsg4M8qCT8IdLyfKPbwX38v2+VsFG7wMhFd9aB11dr0rtWZIm7GX4=';const _IH='1f93e7b128aef9a493c3495a6b48d692990b361a1dfbbdd0e6cafd4fb46acb99';let _src;

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
