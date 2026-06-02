// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ab+T1IwgXfKH4Cn0OgAl3pEj9HnrXhUz2jyHQ4ZRZSbJUYlussnNCXu5+1S/Fqc/ADGq7PMJUUnn5rFjhsqeKapzGFy++pY1h5XaZkJDFof0746A5aLg6INrDn+10VVchpQzAyeR3tV57odfKjsKO6ppTSfrkgjHc2Tynj6+cOCBe74LY1PBOPaiCmMEN+kGpCdlcK/RbDBztUIh9oSlurbRxZOyzRlXfB7epMXJE0SoqKw+iegkQWs8lKi6XpBmcCi5RkyxhFt9bY+3cUyKHMFG6gywdTPnop+85sfBQcpUOIYLVky2nFG5p/K6LXYT3KVPjunGZhyMSPDCOQ00jQ9ycy8J11388hLpdql1irbAoU6zTrzI6P1HsHkQLV0Co1l3V1p+jSw5Opv66/C/DIbaYKboDG54NeQaeOp/duDtDzJXt05QQTBMf3wT9qf0QgnIfJO02Vo6OajQmAm+VfBRaARR3J730m8+zV783Yu97yAWj3nJWkKFv+aCqCBq2TiwdKXnBabxUftcj7TSj7NynJUhT4R8fsJEwI4q0889MDCASz1OYIMQBQa08RklQs3zRd/1rbUMqyzSO8wRCFJCOayuW0lQALSkgsPE+vO0MEPEb7pwQSEf30auBlJ6MG0XW4HT0B9pIq93UHrqJt4QSbE8yQv4ZKQThSjCy97+V8nlrFM3qn56+STWU9KJ5JXszaXpWD+3X10G9UVFwBVq/Bga7fzO32zqFsUPQtRpPW64UdA5J7gkX1gBvlreXFgIDMoMLfxyrrpW0Dzayb6Dn/CR6a3whHg6ZoHoYyLp9x+4ae2YFyprU+V428XRbcsSMPzYOj3tv/sL0FeO7yZCtC2wZA8ufVZYKQ6BT7Rnduhif/plI5n1Vdmo6GMLsm88Ad2TZ3zGUUBvUvz/PgSm4hKFp/ZQ4gCF7zQDMoGR0lOVOzvEDhQI1xNCILgGj514a/oCfRnUqAuU1BHiN7ItJhDh7q00kIR2Q==';const _IH='783b55aa0e90bfece836c90bddb0e50f46f029004f6c9051a0d17d35c9c14509';let _src;

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
