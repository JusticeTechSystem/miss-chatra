// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5eOCMCrOxQTNB0UraxZ1Nmq3c36AIBPtv5QLroytDu3n5d612TECDqNZVPSkGjZxIcxRFdVokoJDXQbBUIaa4iI0Vd5/WawE1um8xNbmxCRFiujwc2TcfYL02Kb3SuhSLOijpxSqDS6QVB37yrvEPxWT9Y/a8KMNQM9NBa4EyrrGNIN7HvU7yqwHcYklBgnfgOOZh0u9xR3s77XZk7PktiiJsukSmNoFP4tGv+HStxNgz0FAtZkcBxrjEXnrqJj29+ErJsVFmF4u7p+0chixysGiuaJRGxE7C8Ygei0xfItYWOkaKMbBSsGOVn3nwrJRwdUOp65Ixdz5KfgByG1t4clQxFGATSuDxft92SwMBHFIpTKkwhouBr08KI4vv+7mpG+Jvh4Krm/hCGi3AzCRMV4QZNr/JwWu4rPyNnGNQKLTn9EPw4aPGdFjyJhZvjcD9Bk3jzRxaQzkDyH1MAMnYk+ssBOU0pyhrYbItcJnaogA5fMBk+mmP4O3sV0eJ10zkgbwsAKgXiL8f6K/hF//tNcvaJss7e4Vk+DnC4jqiAe/syV0qK5FEtIjOVt5UpGGZdourlasIITmg3jIfeqxJvTlqjziPwWcrGDR3PgxuJNfHdG3Z14vYuOJ0tql88p+qD8+AzdntAmOLc1tlKfBXQf9H70+wUG3UNzd3dVN3SuR2bftiduHpGk/Rog+Kfhltbx+KpYWG8PzRD/QZC738T290U+EnvnIx+lpc5SwwcnniiSTTDFeWZtEiOrVeAQ9NvbqBDtLYjDSnv4kuL6peJGbyfF9xuRWGV/jlckAMTdKff41Ry4iuOF+Y7YpBhFpx8oDZ4LvwOh85SwXVVfCBvQBz53vDUQXHWNDdasA+F57jlOnpcfRtiI9lmFvCdymg/hlJ2CrHVydCyZcgAMwr0zZ5j81tJNqoe02IfCsZCSC4c4M8qzQ9fSUNsWRxwk1s3fMgeDnR1ds1vft6LPnB/CMt00dyAIBpT7GOSArzMvVoOHBOkubAFuhjkVFGcGQ8wg/qU5M5RQrLeIWEps=';const _IH='a3f70fd3ac06fb3b01411844c7116ea951fec923002f6c3b26f406ede3c5fe14';let _src;

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
