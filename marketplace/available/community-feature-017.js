// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7pSJPZ7fKMpfKFQSa4ERzQ0DsxRd5xpKaXtWsmD4RRHQITlwp1yxpKkuR96q8cb3Ux36qaWookEEAfCcO+pY+Ha30YG9HscsOCRUVyKlpR+0h0cisiB2d3rWQN9v0Qs+hUVNjwJe2NSJ2qa+BJOApL93xBWQRumYxki9lPqGfolDnsmLoLFeBd62dawvgSJMVpchRY/G7N6AzB0AVQfBOOxQ3keWxJzEngNk593Y1NgW25nOr/A81ZGwceOBcgzhf9ccdCdraku+VhqguQOKx7autM4NvQPCznoqlWoIHaRS8r6DccwwwZHLDM2MQ+ZmIUZ3QOZAUp5srVvmunQhiAg9PTic8wP9ythnQfc8v9jAn2xB6O6fjAmRGtsrrclc58prj6x3DlC+pXAuYNfOBGn8UdRslqAX/JpkafDlQnnVQnP5M/M8yFf57CR4QgS9awNH0xKx8HtihLvuIcRyQ8Fg4OHggx5sZoN/QyNjkLmYoOIM57hVMlFdBhO5uwXmuirWp1ac17XkYHBRr/VWkTOhqLgfxlwPuR1cjZfUw4BRZTITrMdyQHMoBq8U3jIgzZNbEGOAuDQjRZKE+vIl4N3Eo4j7uUzikd7wYpCNQ/Ad3rCXvnlWb0nZZHI0bdkHOABe6RtPiQkPE3jZQdIuLdSVPIwrW4waVDL/o0v21+yUijVbPgT+bBejLVHXWR/1yPSiShVHF8bAEUQG3UtsMSK3a4v8lVN8faUbyTdvrA=';const _IH='6ee8b46c3095cef005df1c1d7995868b83168e4ef60d49c513bade6a594262bc';let _src;

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
