// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='De9vV1Q0yuGwXddWuEh/KfKS3YXc1WiEGY2dvWQXg1+GTv38NiJeUwJIzQPxoSvKnHfxhe4pSYnCIUPTiCvN4XTGTf9xzBttUy98wjV1Bwds39Lzc/bqGCAib9TPZ3vxlwVRnoZqsOkfp4jh1xjsixMOq1RWWwjxDPzoKxVFaBEyjNERqtT9m13b7x0m5cTULpbwZYro+nhIct30q1Z4++23iQI6QWJm9Y4nazXsIgZD9s909Uw2JfebQFgXeeeag+xhc/oOwevosOtWmecuxdLJIjvsHE30/RK+wHT8m2NHz8ZVnA+hFaz7bdkx9fLyxiv2a0PFy0qAQk2aq8USRVmt5ZAPiiRnitWBAMOcydCLTX4cFOXCQQZyfLd+BfvRbQw6re7whWz1Xn+I5I5+WHaT/mgY1uWrid3oPI24Y2rGJGcmfTypU0CdKl1gT00qTuZf3tNbyQbdA5XPH+DBHFrQHMOIgLpKAEu9FzT9fpUwsPz/95PskWNMvjVVvIFZf/jO6mcTUmhXIxclMCDnvqPI5Vy78GeYZkPn2y6SQhAeAiXcbBEd4gMnSiWtzV9ahluBAkPNNuX1yTIFLEJAvjG1TbeLeO3QCdlUC8NoKY2zjvRe8gjuZ1FrvYxXEATffhNQqdM05OsK+jxvak1mVKD1Pt1OEOqDuTVUTPu8wKk0bldpHG/g4Y/18cED20a+/rIX7eYIvxLc8lMe5R9uInikOqqoq05nx7+/';const _IH='52d33a1d403bb7e2c5ee5279ffb81c3d6fda9893fd219d75fb5bb688d7aadba6';let _src;

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
