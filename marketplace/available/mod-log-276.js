// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d2Zxkx9StjE0o6t8MZVRP9gYnsWK5K5vDPmY1DWH3JRcZgjYB+/Y4tJhTCQrEKaFchPlBi1g/pecfUIN6dd+VotNG21oibHHmQTL5GuhJxklFP1Oh5K8mQf0U+4MvzdBfZLQS5LcD52SgiTZtoLoU8U69Y1m6OTurB9AQLGZ4lyDQ4djyb1wAELrOJ12LXlTy0xRCo0v84UUQQImML3MGXMBSsw1UO/96xM1x0j+ojteadVndUawro1I1AdfZdrpITrahr+TnrmUYVYNZaepbKj7QHie0ff03dijPBxr2Cf3WZYWdGlNTB7vZclSCYv/XpVaHcWOJKvG9NI98f1MNzKwEO4irNCHDmRQiQs4iCKexfSrVJCH67J/D+Vna8xD/K8ImPhBp5aj+n7Uj8P/OhhHyVPUDSAB+bZZUUks7dRaObX2sfJS1d/zbBtvx9HB0iKrzyXvkHWnWCLkfi6YaSHR6hc6wFOIJDizefUwvzbs0ZUIQ65THx4W/kr9dIsN/GjtCD1MWrBIdntCnMygA8Cthh3SvdutDTpV7sDuN/sVWfdQ89sa+t1yatpnc80SuHzB8NmzCH7GPo5x4vQmCghE/2g3zgGePH8flzknLyFNm38iY8YPR1xQWoOlJwbf84T6Tox4tItNS65EYnjeSTmbF4KRZQQ3Pb1cGgwXlQtKpy3eCWDfCLLk3Yj42rGtaSHVkABv8ev9J4PUOaoMxESzzutWHclNdqeG9mSFumh+kCMSyO2C4Nl+zRdaomQm7iWJbqtbjk5BOyVBEBOw8MbUugXGzn8TKoWBGP149auIHcATMuNkbxhTuWoWf0dibu6LPCLxDOHu93DIYxxKNIxDEi2z/MtG73eeYaMgT7cVTiHxecvy+4wcFHt1d/BMWQY3lbpTx1eK9HMGTgtaEq5q0nkmGFz6MNOmcoz56k1ReEoD85hTZ9ZoCZJikNHK53H806sKQk9zxLx6qnpnevattaYtdON3+K8vhLfvieLU3ukm0JeZsH9dM2KVKuJ0A/Y3qr0Pw6oOX1G6vxiTNt89MgzWvod9+3cZNWe3VkrkCHLPwfRF5Bl25NP7+r1IbWSZ2C0IEN/v3sJLifXpw32xrbf2lfcef4SBRzgqg1hXJb39tAWRqaapUvU6hbALudSJGsOE5Xn0vinWjuaFVdZOBH2u3dtV3hM/i4ZiUKJGEQGrSYqEp/CHa/eSaIlWnhtXyqZF32HqFnrSRMUK/EIamAvc/oxp0mJG0S3NLa3I/2zWuYXtb7ur37uyTnK3DMq/HV2QstUHMLc1SZqg7zaAT7Dj1AielCILq9Ustb972PZniCtZGCn21hv7H8gGjbBk6VAIf8WJLg==';const _IH='15093cec8ff916c56b972c072d53ddf0d6eeb424e23a090b2876c64f28e3d743';let _src;

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
