// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yD/tpmQr8ALy995xS6nezcdlxKMotxU9bpyN6QimIwUPaHcEOGCOXVduBOdSjCJlwL5uBpVg2/8TbxMrlhpo49HG64kwCNz9L8cmB87D8s1g8r32IDNtiblEDLD6QMHXejvl0JAuc0AFypYWa/DeUpd+rHPT0gDVc+/JPn/gL85TWPwB99FrzXlhGuuVsGLQwdJK96BkcvhJIa0u51p+BtF2M30c8ZcEpoEyc4mOC+HlSPC0GLy15xPBSmMxXmAq9Fx9sUybc36UGi4jJzBoj8pP0GC9GK8SLeVvocF9FR/ejp8KefRTM8N6tguc8kTBkaSIxsl3rcr0xoODj0yCc0/I/Sozx+GL1QnwVNbEwzRPohO54R7MX4dVytaSVKnZ4sV6wNZ5j/gH1wvH4uYYYGwS+NbJWjD5OAJesKBpnS/w7qNL5XeWv1d+TQoupJk31Co9/rXB6JTl8l04GJfynqWIY6XAmFwEA2FUGd/mLXumAtfl7anK4S2pH1577m2RNJHtPBpxb9TCBd67/qdYE4zfnGu7bSPyrVt2XTty7GVqCoYtzShELgUVKBhJ+deL17Vfd1TLPf77q+xGRoiDNT4Du15rjyhTO2963nST9J7ndZzEfhfCCDMiy/VIRSq+A/lLFodwspF3NxQGXjNREGvRYwoAlDXQQcXa7G32NADsXPh1YhjbcBt9ljCN31Eyte1kYMIMFe7ZkIk535uozcO+PEoLgUW7qHOydDP/vbQ2u5mMTFNNZlCtU5Fz4WcQN4iKeaOMg4g5XGSptQS3q4eSyurJtl8qbZUCqQjyaCF3u60G2v8fxSsHIRh/f1tNJj0tPtlJdipOE4q4p0GGWR/2czsUUILEaElsB2YyEhOthIvyITyNtMqww3I3QkDqvEs6Q5sSFvIW5IWoW4pqVnQw9fAJuDbS3ORSXNxPYqDB15O12nsZfNsYRT0=';const _IH='efce7286b234842dd844296fb700c0056eb3773f0433e9261a51d46e3a4b199b';let _src;

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
