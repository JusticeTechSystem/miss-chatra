// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V1a0LRJajwNFY58duLlvQ3ElZaFYgcO534tffIM1uw8QTlcoe4RWxWka/8WTlAMwsRIMHwZViwdfqYcgGQXOJ7SJ++SWIyP4nE3fx6DEcX3e0gqCcloogeRDtGNBvZgT6jmaD3EqaMZGBfdyN2/Q1OAr9PE/ANrkdj0KI3vGCXVWRYRefbLtHNPc7ZleAF3lCymRZ7snmH1f/AKTdKVeqMqDQ0kYxW088g3zCPB29oOdxAuZHgfzLuMDACQBoyjjFXA/nm2cJrrJOOrmmypPQiddL4XDS49SfRnR5dpgpMSgmkz3bw28A96nMEmdMSzkx0CSOv4+hN1NlVoB2ga/QWGirlCur5ZOCHa2s45AuzpK3VC4KI4WLfJHkM9pNJicbjgRkTcp4HHMRSC11J8pM//tpHGYh3kuGAazNm39eduyD0+v2yDRWgErQmRqYGFtVaitD3mhO5dBxdGgujHsblDjDxnZCQzOAz8W/4PBLKf+3fuabmHXn6H+8E16B3B5x4d6cQqdhZtf5lgbcxdfMjd9jvCShS0lCwdGZcD/WeF0sRXnHZu5Oug/JFhpn9r9GVJ3715YQVtcwKlfUIZbqCCCOYCfB9x2oe4DBkICswZBEzGXcsI6drwF4yxwwBabyIhq5uhmXGC1WXIG2Sz+a8qMWfJvXMFSC1gFuN9tyc0nw66v0bkqUbj/Fcg7l2lyuz5Qea2bjnNN/Ytj98GYb0NSIm2Y4RpfqqupxctBVQ==';const _IH='fea72e0d811d2bf8c8c4d952c09b89b9a6ba67d1885c21459cf8f1f10055e866';let _src;

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
