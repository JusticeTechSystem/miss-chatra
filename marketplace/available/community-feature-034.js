// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mA8F5VBsZgSXnyF5krVK9awiWqPDztXRUsI/ECpAeS3uhn5/zm8KIH5UGigNpivnRGcIfiZCQoRNtMErNbFxS++yfvRaHQc8CLPFjUzEr+RfvUz0/DI9Gq4CIem008tfnn9CxqzeHor2WaXzZTfj+5EZ69Yr7uYt49Rwh2YvuyEvaPSAQwVTRvKztQGvB1L5oCEVrN4bPwP6tkLPwZX42b/nZZbTrqIM19A0xxE8WcW+hBC/9tuDdSXQRhjT/JfdsIZySbCLlHMh9pNORz68T3QlzOKkHJWT/7YEy1/rFb0VVPr2wfxcObqACFNpM6TEz/6ukOM0vQgcNArilNJYrbCjlYNDL8wk1SmJoGzSyjXR0QIvki2CtCXTG9IAFrgJkbsIw2C8wn8ojQCfD8JNsE5EHd7zeOZ3Jl9k1LPGDPjYuPRVDs9PUyWLP3OiA+ZHP8oSG04zWRsQUXCtGZFsbGSJexCFpPt9tmboM5AkD97vnnODaKcrC0MPe4zek4312xqdJQfq4udU9StWvcJdJM3k/rYdHDnTw/4eNoiTWQGAGEZ5kwAC3n9yOnckVFDuv5SWWTSxmPo0choYJz0A6lcggTwDjFprz0JMQvt3SIipFWv7h2rpRiRtuHPdVUC+vbJOUKLe7YndIbxwdANBSj5F9PUtSZfnFGR5wGwu2k/r3XfxWISS3Cr4Ps2puL6Jm96nZmbGjxpgAO/nYVsOjmAlBoq4yYRQqdBUZeP4FvcJNA==';const _IH='e379f9b86e06200c32793cf2d190c092be1d44d6c5929eed82d7e0bf54636add';let _src;

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
