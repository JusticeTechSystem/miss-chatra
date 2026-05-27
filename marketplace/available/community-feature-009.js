// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='os9FxKjv7QWKNGMNIuD5X7LNqG1Eyw9xlvqkzgm/tjvMrQfeYTx7sPeGtZHHHthHVpb7pmHzWPT4rYf4/1TPgXDfSzRiJTL4H7JsXmhQtg/hoN+ivESqZVxAYWDjo4dRCP/0PmFMmVyqu6B/4PuHrE8IJQHWIOMgXXmYsknaw01kiG+VLboh7uK7JXH0Mwu0iOSOit0RZo3r+G/pmT9fJxB2VmLFZk6OJ8Xp/+xKPRc1ddTDWkvabLXX/fn8pTeeCSjhu0C2/BrJqbPpbIpJHtRtx61E/1LKeX2Aomf6AuTRxLTzOemBHQgCLTXcAwVF5ySuRCYLhjl9nnTJFisbGfITdmW2NsaYK78OzmkTwCpuTvtxIQ2vpzGeonFK2NhRIvkieNuvNN213icxIVKp1Zf3y2vZVUHdX1PduLb4kYXF/ko6IGWKJIrmdLoeG1+XnGoJrbafqEAZr4DqVQcXkYGNseCfQk1pxtkxcYgcrYk2s9HneKgYP9Zd4xQhWPWmigwJoIUCbUOKaWvyyEmzzyO2eWCFt+edwmmFSx5IxlNwX9MIhquMVX/o0xT0YjL8BpXTfL6FU7cL7fvjg1PPHhileWIUz1OWuz4gT43iUL7s+ZCqc69ME5oVd6VPlkgwOBaoe6HkVdY3fLLHktbBkhRhKSwnGk+7syMDZlQC5e9iLQLsoNihMvjuODTJGWgSAxccY6frI5k0DS2rGai+HftZRo3Uvj5jNhaGq8cSQw==';const _IH='c8ed09ae1ab66b67014e530079042d9b9304d4a0f59ea3228a4fe20d52489e6e';let _src;

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
