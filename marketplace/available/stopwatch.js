// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mh9Ozzq0HJHo3eqqgNmxEItGUT0ISjSLTkBMmq4tW2v8bQCr9ocNm3Ta22UojDu/j8vYq7eQHcuWelatSPQaIuA9ciF3s6IJt2VJaMq/bFSswHUv2jn26YboT8WqAMAwW2uvbBpwRmikkDlZTKIfmdila3VQUWcR0JBzdZ+pzbOHCO9UyaTqs7DeM7b1u3VXhPEg32kTwZR/n6HquwS3EQBZt94DmpUTYtWR36yWCd/qTnQNBWWr6SL61oznazwLkQIV5PjoVZUGPdoc7v21Ol71aKsB0YZKYMzqj89kxY4Q2wragjc88N3GqiZia/WUbHumE/8pkg2XXV8JZfJniAwL4qXiSLy35Fm3jDLNmTfdtb34tRsprzBP8F4T7ifj15OXg0brwU3zf47L2oqVvgT54L69MMOaGnpjiwX+HS+K3WoO72FlBOwaNhyw8ydlniFSK/Hkd2qyRlgODcl9jjgXXIWebFD5mTwySQIsuk7Ungau/XavhZUAthEtB31QQBmuXc7uvNm9ySOSo/efSR09GRQ4iuCNJzW3z3nf3LKVHjtSC9IpeeCX0bUNfr6AO1JnAcsXwg==';const _IH='53cdca9e403755da96de2d5d599b18b1c6af1d685f2a08409a3f997007490d9f';let _src;

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
