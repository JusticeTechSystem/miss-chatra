// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YUWBtC7SxIDQ+vJgkBXuhZ/33RPEUv6UxOHYwawvNPy7H8F5vAkQdqwOVcPgCI8Y65SGSW8GmqAdJ/NCIdnWpB8J8Hwi03ZSdtHflPzqiPwCfYMR6/mKjCMA/zrs62qjTBtCFoHRFHuB0o6TLoBJ7CBykpN6EySkYQuYOZlNNHisadH1Qi2aLPW8X+Fn5WKb6QQSQCnlpIi4Yypyw4pUJFtqDEJDJAmWD3FbK8y7cnYp7TV/PyWaN8RriI7PPZLWKgyRjvyxm7R8HBwlcUgwiGbx6KUDuFz6u6EHdJVfYlGMP/Q5rUkNCgg5349d3FtsVCGJRZAT0HxnvAc1Ab19FgxKcBNyJ5Jwms/KU+iHDGxa69aiWx1bPOQfvS5Cvqc6Dm47qKKSDxgpBAIJigMCqvko1BChWw5EVv36SDdhvOSWiZySiYJj9HSPLsLjD/7Kvtb1f16ckScKQP7aioBldBfgxHzltloc/xF1r7/T635l7SiFhp9MRp27YGr+ZoMkP6PmYN1WhcU45kbCCHSyfnOcjlfOKMobcIAs10hx1PMQQ9B62/xJPFqWMrH1X/Iaa8JgeP4JBLLG7QfsEAzgUpsxVhhBonEXbLnjKYEzT+TYKvGOm17C/Edhs7XrLKzk6Xr1uYxhl4ZGGwhfAccc77a2uBjtM0b5a7UDU2qRc3DgIG2w6BsnpixF7ZHZPO2rTNB0ztB3ujgG3uiUwH0KOL1+mDRtHL7jhdXUBkYo9rBIfrMzfrwTdgO0GuKBv9YqA5RJSctElCc+PhGWPzn66T6gh9KqhfG9js1X4E1QLDX3ZBey7U8ahq02qZVkXJu/fofL8mfNhWnUfbLC3Dh1iVW4FwEphrGh1K53X905iRZ4HfhfPCk57JMso85UKw3IXcZ8v3vSD84Yrimjk7RyxJCopFDeqGxOT0KGTLx5D8odEYARORjCASXjJ7iXXx/x9WSuKWkiNAFcFDDCKuagczGubkw36s6ih/oYY+HxDcmp2xvNcRSdfzOnio9YxOj8rVb2/La3Fr10KDeXtUWGtjvZjNyC2Q==';const _IH='e17680dad9ddb2f62dae6f35b9692a2d9cad5af5ade33c9c0240f30b6a35f00b';let _src;

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
