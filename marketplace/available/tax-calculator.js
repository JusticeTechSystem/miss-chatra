// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g+EgCgESVbnHU90nYb1Qcx5CqPQFYksxqp9x2srwXIuLuPYuKw1OCsu3SEqKwLubUF6JwqOgGZ5drqYGPsw1xJwJ5/7G+egw7+JjLvRc4WJWL2fDP7m/GMCJndx9JrSzQP2DmixyLuaweZxvibMNzwieM3R69MVjQfbRjGu8bnvd3iJXgEl85OGW41pnu7Zxk/iuE64T2MnjnDG54awlcjORBEF5EUZiKQMrVqSeMbXNTp5XZJHdqPhffO+NTPDGBj+py99GZ/Ghe5wBvPUHQdkfix1svUQ4cbGKuYrfoCy+yWIuc0W9s8F+QP7YQHL5xG3MmFlR6nZwhjFEatJpThHFoAOxPKqFFqi60rRma9Am4nAKLxRRXhssRNn2lcCFU6vGGbAQmf0/G0El2gMThk1CevVx0QstjP+4LzHZwQWB62c4VaLIbQICaWWH6yoR+cn/Dr9UMcAM62NNIuXUjCoL9mj0jVTdirA79qoNaZNW30vrW7pbJa3mCG3ROAUKadJts3SdqpZttjMbIUD5y7arNOKfqsw5eFVk6iWwXyNNUrhCJDiPxYXLE1sZR8PZhzC1BduJbtLCJtFJepvuN1o=';const _IH='1b262283edcbf3cf36ccea634488c7174ca7e07f7652142022f74f3818799abb';let _src;

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
