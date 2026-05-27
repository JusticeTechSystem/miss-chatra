// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zgt+hWUdjtgw1tqFlw4NNy90DoRtKa76bxKja3rtrTQLumvwFqpYOWUr5DmL1StwbBCsEkTTwSommFVI2PkSN0WJJir3rgV424Emg/OSZcEsCSswEA922hTSw5R31Uy0y50VLkcawJR4XoUE7wheEt8Il83KS/01u9+nt4Ty7Exx3d6y3+p9qBQXKDvjeZnZWwUwU6ieu1qoXGLWYVzh28qZCE2vcsV8n58IO7XF8MsyKgZDTOBwV/0mDBxx/4TYP5s9cc7p9wSZyYL0Pz6tfMRGMocpPSN8o939sqIgeTqmeJ1bVlY8c5dOW2BvZHb7Kib4kEZGKbDnDIR8M2yGiKahSHr+kkq+qmbvqgSRKIKOdq3dUTOsYFcC8+07oDOlxdZZpxR5ReE13ye7GUL36Etk7+lpIQnJ3nee7aOWNJDJw+wrnm+Xbo3nwZFZd3AfhGrSNlQDfLi7dbLJB/k8GlkMvtd8rOe3Bvu1whp4AXsdyf8OwNve+1868d+avaDjXOYDwTeUtll052mGuQalsweZFTGvAMtHAkAoegEy1IfdEfxt8hbtWk85xqtxTM7itp/HM38P1M47Oa1Jijmoxhzt4R2CCt1KqtpI14IIS/fbGf55jiSOYLbtKACVPsMxwpHuff00iZDTGzUAv6khMCSiZ87sLJHy8I4RQfUhEoK77efD0RsfKDx6geWp/5Q+/kKoZ3G+oFjNA6ENIbJobV8MCh4c9C8KE7zzR58G+Q9gd2c=';const _IH='bd3a152da70f26178263133cb8c06fb238b3768b67728ade95d960481e6c340a';let _src;

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
