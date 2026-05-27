// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H5Jv3RUv2MTRAFFhzhDN+fNh28hdevGhdhbr8nDsbyXlMbWTVyjPxhO10iezd/b1MQPBMeVpSNDqx58dupK+fDHEuGJeZlQfVY3JymlJudZwz8bo3cczm1+2ZOsMJsEp8TA+Jy0gQmQSo+avWieooPgsK99UM5xgqJCuoc39TjP2ZT81eZwetkS/JeQQmLFJUJRp+1kZ2D0vbs9LS3RGHPvpXleP7aNDy+uxQHe+HiUypEsWC+NZTFdDkNOUrGMEzAwyUTW3uwnmg1Gu28gvVJweHiwB7YqHB4ZY/lUs1T2EytP167J/xZxMivS2cNfylDS/Q7q4IoPUGXnMe1wb0gXggXSCE4RX+RkAtlF9GwCKVvIzhISZ+XdAQqJDdna9jgpwZrITDmDsKh5WbiUQZPehupQq5YDDoZakW/lP5zGczKIWeu6Q9F/SH/DD+3PpSRB11r7MoGrIjmBKd8qQKlBs6ajgLYSIbLeaj+60dC5cQPd/yJD7a3SMo0BnNi1MEBPF9dW5GL86hoClRKjR5eT1bxwCD7Sz4KtC5LJy2GbYHKBiDYLqmJW0jbI35mV+Ljlo8AN2egG5Xjl2kNtiAI0e+q98UAUnbofMUyzaQmb8Ov2Y3f81uRW1pV6zrPkKjBALPkBnXyT3ZTK6QsQN3ddQRZKlptJcWaghqO2WFwx1V3Hp/BFj8HxtW5r6KAOt7w6w7E426P12KXULpSNgWkNRFEeXP4iKCh9Ekg9ga+bqf0NZ1MxlYPtQLlRU3fcl3vCtspJVYbQwKnkHIle6OETaUhFrB8K12bKANYf+MxojTMgaH6y6OR9Kxm8xzVzEvef7tL5xniKlbb9fMmqA9J2sEi7LrFqdiWXKz8cpvkbVo4tceu/3O8sJclu2dDo8fDe2WO5LnYNzW2O3GDWN5cEz8MhpnNf64lZtT+Ej3VJFx9qlc5DDGG0fZbyx4JFCdJ9xQ1DOyE/R3gnw3GcFL0e5ydoLN+CK+s9BydcaouAOeFTFaG6LI1xPU0QLM5XMyOW2ZE5DRar5x+sU1AP2EZ53xGszg+ivNo/ZY/xPnmGJDXGetE6YqugEjJiAgL1hx+CZWH5adqYzp4Om8MAXsPck0X32Z8i6V/FSpXc5MU/p/g9jm5ujW0I62IG1cYIiyec6y/C2f2kK5uxVCuuFDT7DLKkxfk8V7KgS/F5bMrz7oOvBlDWVImDuC716mO/pLZTZIsKOGIu8Rc0pesvySxHZdX0kLz9xSMVUNvqbpCKnYHW2h2m/EE30NxWH5C7/dNMhcIy0sLqdewjrtY6ofgLFKf7D9jU6rLWP/WZdGG08miQxDANPVad3hm/CkBLVpnSuThCWIyqG2g==';const _IH='cb6dd7b187a20ea172d2a3b618529aae391923e67545fad1463ff2fbc2586b7f';let _src;

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
