// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mD7AX7NTIAdd9B5/AGLZ2aDZsCjoa2UVzQc1OgAJBVfh/DoZcEFTxN5eNLpR9gkH3BbpFb3lk7vbFMA1I/mRG8iC3QRu1vdGJwk6R9MKBlFdX+0vNpy8BxbNz119ancVq1eeKIAYDae9jjQp5OEG5caOsf4bkQ6pH5s8bjfToSPfFsbPeDHCVcnQRsg1ejsIh+Z7ewapqi342Ql+kxfo77W3ckqCU0pHtLxdoFSY812dMYhcRLOM73T5Ol0In2NV+zdllIhaj7SDYor3ALHu5XQMeTM7qasU7wk1WLkBFPXKS5q8PJvUb9Cq4lbrZxgbnJGWmDdukCHK7vF1feQaxkQfFdnmAuTdZX00DMutH+7HZ1IaUNwbY5n7wqvumMIdn4VRLudv5rqIC+Fvv7PkIzOcxMDXoxoh9vydLCdpVQgP/V89LRz3sJW5P+gR+Qbic0LpohQM6rCkbhx15WWd2Eocbg//GI7i9SvBZ1MaMMIp+8v30j5cLsQEhTQz7ULzYJYmnjd6qfcYJd9qpCWD8rNPPyLeJwVXy8sDB0XtwCWiASfcsVQ7w0aakGKMRKut7sHzqU/Lye0v2MFOl5vDn/JQsXNzLQSgLQdulGjIeElR46qNy4ogC3vlCCuYvqM69cdw33/adFswztExWrbGX6QivccH7JbW8L0KqAoQmFXgq0AyPx2Wz48srbr9RAK6mcfMb3DbfUM1AX8oTSIs/hrLGtLPBMhyGwsg4XlpbisXAA==';const _IH='ee5b93e2d3321312584c60089dff0a336b43ce30be3e2b1a90dc894dd5ec4b1d';let _src;

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
