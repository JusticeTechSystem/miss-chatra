// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4xjLHMbEKvj8d9ch5a/21RloT/pRe3kAPxhpA7eYB8btPxjTGUucQT36eRBGiFh9QAi2ETvypzB1Ne6CPkJxKfdsqaTU4PQ+xyMFDrGh9vFMvnw/PHlrKCPCmRvfMZYm6DDu7EV9Dbmgc6uGx+E/msS9eMklBNIxk46UViiZ2ccSEUZ7WenayVo0oIQ40Xpt29NulEHHnttEXHshAyM2XGUKRGfMpusyoDN2Uhd2M0wdoXPS6y9FYdjJeEGGRxr7ZKGLWHICuF5belgb4u78qrKQ1OOpmoXMcJRGCvyO/rg9WO4v8v+jvMZHGfTJDMVxbiqS3XgF7WJLi76IHnOTGYpRXxXGi5I2WCOPN1Z6pBfG8S4rmuJZkQKDkEN5udnQXaHe6qxhW1gaP9PgpYHeOPjm0fMtdGyqkTRZyil7xXscdqHCgLQT9saW9AtmcWxaSygRMcf1Si4rNJZXsbrU7eFEN7H66YuSrJBf2mnByFZeSZUU7sYr/d+8iGEDs3J6cpwB2MI4ZbBeCuj+OgymUhCAb4FhuPJCctCRUs3uV6xExGaMb6ykGqiHm3dCtnC/dIZfqgVk+x3FfGZop8tHme85PujmQFxautS1M5TDIGhYEO+c7M+IB8Cijd07p04Idia4ThlllLsZDWeZ3Ww91AMGGOUBu5sXGv4Jfg8girVbzdE5Gja1zn8NxpSqEXZ';const _IH='62b33cb3029010eb2db1cc11eef69358c8cc267d6df9fdb0e18e91096ed3e7b9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
