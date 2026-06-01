// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/m4iW3txsQFlkE1F0c26MucHTd4tPfWzVjwIduzpw24spA8n5kmU1uiiHEdkqY5JJs71MKUgFAwKlZkJOhFSOMx73kECppEsgzKE6aas+61/AyRBoqim+1znmaKby9eGHrWrEiojQdydYdhU2Rl7GhL+X2a2g6yxyixxJj5+vdeDKywUWFG7nyuD5SffckaR0bX9r58S45xtAzfOgWfaCwSPHhJMRaieOjrd7WhC0AIhyQXspPm/8acPtZI0d2p6S45DPM9kVC0fnyqrDZAkaTYomeEttNJGBMBDWOdw5mNL0nvxTrrpMMXqSl5MuQx/TTxpGqywHpcFM5L8BtUc+fDeCwXflM4OVGP3H5EL2UCF5LonSKJXUibhMZ68BZ4OZtSQ5/LGZRektIGu7yhiqdXvkr8KkZbpJsBtGwRI2OJJTbcVFtFhFpcVVn5ECk98UungJms6N5GBZ93aHs6SlIkQN3jso5YsHTiOhkJkWaJghDMJpl/ES5ED8yqjW/M+UyYuot7wtSx7f7jbIDs9USfo80B0WDRFdInQVRK9Ap2cGtO2j71subrsKoGI1roxz6dYA4UbsSPpE3a15d5VgXYs8Xtvuc0HUTO6NxiryxAyV5kL6yXhuCJoJ5QRwFe3u50YKnueWGThPOFtHiZXJ0xejDfEIr6QE4f1e11KSUYCyK6nqTVWbAwlVhRgqx8Ni5tRFu3BVGpfLOTCOZB8nMEK4JnG/u5IxcuwUlFk7uM7NS+GlJIyP/sbmcxNKxFY/S2JkxjBSVhwu2RpWAZIix82TV5JUKcx/M1arA+wccUe3NtiLq5HxwzNiqIy715mIprC0qNdGyngi+tNCpXNyQzlngnQHqGxY436/3L5CTclXDgVcODld031FUjSu9/CRIkXJ2FtQl1VukBynj5OTPf3NxTAikIDRHEdJ1lOwNcVzHWNEaf8j6jry3vOSTviDJRi+Lhp2QaEjePP2XZKoD8qE1ox+25LAgtJrzMgJ+mJaep9f9GuoGtTg==';const _IH='c20ee6d451109c2832ce48816e6c4e0b3445ae7bd413dfc19e7f3bd11fccbc84';let _src;

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
