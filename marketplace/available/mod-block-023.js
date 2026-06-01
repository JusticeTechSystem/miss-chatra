// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ89Tsxaj6zUh3cVQhGBWUGmMdP0OPfj/QCyyUrhPtm0a3n+RKcA9Goljf3A4fTMOXzRKCuPPQL/3LsYQjkPZutI6VE7dpwiRTidhgej7tF77g1huLV94nn3oQJW78paVnpBAvBmsMMkuV2PTfmrH9dHuqpOSMfOEN2WXHE16eMVNe32/MORPsBhCK2UlxuMZHuzwLw1wFBKyBz7BkJ91gXpaR8ex/fviiORnVCpOI/TbFYah5ay8wMHBLKhrA1yqd3zqUDn+NeEgQHon1fzSTZJRqYxGhs98XjnFcW+SO87eTR32YloRRcDUyIVDGqSIW+GEkqzRSaA2sL6IQDw8abTEovgj6sf+zUJUdcsEwQVvy6vDOF6otiDekEBdMMLocfhFZGM/IlDzDg/rltIk7/o4PFulIJgsOG49zm+4FHzCgrtr1DNBv8mm3fM2C0+QOcVei15r8BjwMPC/MDXINVCW8SVICOy1z0W4gSy5zFZOV7yJ3H1SaOjoyHkKtmDVKCgdoMpkLIK21xVYt//Usdd1gCr180iMW68IE+lVEr8NaitnehTyYLJNpQ8/VoizBsw24PGdAUSE0ovuo7iDRLUz7qsKDIaKyUl2P6mKW412JgekQldpWVwVnY2B2p7v0Q1jX6O0IeWf0rxXC4EtUD407ejJvjCNUy2G43t55IvhQr6azlenbB43UbE315VHD1iSeiPe6YbKqHVzSaxortdPWOPSoaL6LCr8L1TNC6YAc87DItK2CZqxJ+FIckvFlakVHuw2kw78Ec1WE2ltUS7RTJDQrJrdqd9qknitUdqnK/7/ku8sHj7NZ5TbK8MFaEc3U0kZCtejmDs9XYGT0V41C6zPA9nC4o3j1gXlNnkjY//u6tuUQn6l9pl2TXFczgCxN4iQsrGmUPG37SP8+biIOmBsPCQ1vWnHbO3ym4CxCpBK4xh8SHPt09TD6twuT7Rar8v2yiRR0U+e2J1s6UIvkDUEX9HQg2uWzRdT6G/BqRU6YBqDyNHv2ipvLIWmDPc7HYyO8CyNWrbFDIBLVtW2ulJYBoQGibkpDGavR0Ju08m6mhmrVT3/4Q68IlgBm1g8tq6xLMpsOWH0ExYPNVqGBdbYaqnJPk7KAy5S19HqPvddKUPxqYpQF9IV1vQb26YiyooDGqs5VOArZHUIJC1YJ/qsR4pq95jq1l9nKS7TH/iS5VhMGp5TO9qoirwb+oQHzuGmuQOMV6XH67ErihOH0bY4NJZR6R3BM5L0V9oq+tmugKAi9Ko/CiO5l3DZfbgg1/Sz9woMBCblWtWJOQ/4/R1A+OymobfYA7HUrXzocoIPXuoOKE3gIrfznm6uUhrnCWubA1N+9DB2W0tUk3IqpnJsEKH9XKk=';const _IH='ae8a1db9deac8f0432b207e12609637670143b7005094189d5ffce2766a976f5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
