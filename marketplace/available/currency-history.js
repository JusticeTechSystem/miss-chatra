// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uV/HAC8WxxFPiwGXXH3bWJ8yRn3V2wvGrEn2Xyu000SNMtnj/M/0h+uMwX53+x0iu6lGYGaBkX+taDns+Y/YCKM96pjR8qBkuyKg3WMS79Z5NngEYkxOr/DCTGEoXO+1NRHX2F6icyxv6y9z4/Z0tMOzZCeaLLkIBgRSch7A8p20Pg2Thd11iew/vhQG3htI+kC/F/zHjb1UjgPRqBdaboncnpvSfr20W5SrgDaHheOUlN2eD2xqoIb0ZK8PGjLpAvc+Dq+3cbHiz9FQdupIXv6qasPhQirFWNcLKtT1gjXqO+KEiDYkTT2uLyhKGetTCY5UBlNoSMYCF2DwEiYGryAd7WEh3Vm01sSDhGeB4YM3/Ol+HLpbrGYS0E3jixuwPB0JaaKUd02fKU33gyZDjGHnUTUJcf8oz3TcNGcC+Ljq9H16F2I403rOXBKHYKC1USbrqpxGdQaBF3rREi0bBx9DT0r8skMyzwOWKsHtg0lmGBjWUmdxuhMBkQtOOBA3i9uXzv5aiCIMyJ7z0csLDa04coVo90MYQjBfONbjhfS4sv30ESusEcSU0sOAGcUocWIF12pTWNZYMms/qbqwWJCsalnB5C2ZoBLW1BbNwBXstZT930Aa5wi0wFqBOKCT4GUfJVf0nMftlDvWsB3VmsomgY0KlyORHsTd1WWdhSg2OJaZdZVVIvCiRn5vEzm3QztpNCGJXLQACCEQsS88mOS6SBhdTaw/gFCH+AL8O0wNeAjFpMbsz2DCOHIKZnz7LNe7dyjNMV+cL4TABjIeM/6bvFK7cN5mmjRzlgFUyKr3wuZEkzuBm6pdzplTjqS0Va2wkm4Y7MedGYEMOrbSXEc1XZavp9rHCSOQSBf+59w97L0qFa8yKnEu3GTXsBA+6ofUgA2gez3gGMX0IGCLXGGjFzphYry36Qs7WC8=';const _IH='82c81829a51af830acacc18d133d917a0f0ba842bcce74462570ffed6c0cf53f';let _src;

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
