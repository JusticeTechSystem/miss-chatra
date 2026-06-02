// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l8wUXqGaJb9A/0O5YL3qnZP6V2mbLBgjEsmpuVRuDh9Kn9YsxEmNOTf76IZXdj2dFcW7aP+gF1BtU1A3DM+pOggu1x7k4Cv6qh6XZ1wYF9qIOQRPzs4xjv6R/z0/gNc8NEKSy5+lTYeLuKnME280dMklxb5ze2pKtqAdKlnBGwA650C6iSt2MxUqCd9M+qJwCmw/Jb/WSZuzXrEtTyon1aQlEfBQZboW5fu4WtoEakJ4nEqLg7T9jZ0Kuvvs00SJwZDHZGhlnT3qaK/yXs+3ECT6kxkMLMOwyfLQ2A9GD9F9LIO+uiNJ4EqXveb/xHUswrj44eT+CW9svEjjTqTcYnIlbM0nuK5nrC/fqgHDSTgjiNc7INbBLWU6KAYRWORufTmzrthD38SLHO+8SavLUZQ3z7HGerNpHKgdVlnvpBpoFC1TM8GzV9J6db85QEbvbOQ19ydgzsyCaGwq7yJF1EOIriXQpq1rNa6d+KP9Ir9cLeetCwYXFgvpVxIhNAnX5OMItTwCmgx4kYOg9Rwpe8F2Woveuj8ANtKP4Att8VKC4AQeMdEE3ULPthZMAsTb23oUKdBgoP++mR8nrPEfcMAk/QNEHbSefC1yvebCUZqYurU/m7XMermQRLckzuWBwGuYYujRVcG4I4hwwadnMHb3DMk004ykaS51VgTLb0XL/RoWRauvdRCXSCL8vaz59bFuNbuyyOfCKpcS22ZXcunLSyyDLn/COGsEnXueiEk5lXJ+6fd1X7/yFUfJzT0QWzoM85JY1IwC+rr7xLdWl5/VQCtQYmE4iZyUxO4zoUZ5AjZysiNHzbkp54QualpYdcYrtM8qi0N81XZYu6SJqHNUwGW/u7KmFbS0WQmD+Sc2O2auApdNaurwlQbvxFjgTth2RlRrAW7XI1t8MevMPDwWn/q5z/DnGvn5ELz7G/yV9ltt9LOzgTtkGM4px7h89rLP3c4TpitMUisCio5P+HfBxCEM3uUa9Fu9O09HMD7ViRH9aL93iVFY';const _IH='93f5815938a260e167ccb0d920afe832c2daf98922127c3893841399f42245a8';let _src;

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
