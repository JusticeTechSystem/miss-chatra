// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mt7+nBTGMvobH5oQLQRzjbFtrAJBNcDEReKmq60nYnZdlpZewtf9hAgTcyU8wIEs/N2jWCwc7qUThp6S3y+2ipDiPtZns3LmJf2F8SqCLreZ6WsaxpWttIvECbTr7QghOmIXTHX/kq7zGpEzpwxUBXkwHdL8YwH2EffS7/gPhjJZV0Rmql5MkPEkn9CXI347JzCOQvvg7Zh7zXeagvRidnd1V+HxiNXzvYl6xdcQ4Laq8vhEMbmHeiWg1BRikwXUFJZqV9vGwHogxX19Rsbtl47LDg07uhyDyF+sjMjpATb0exFsIOr2alqRwQe1SxyFMweQ5bySFNUg2DaTK9yzG/qxfQ0g9G4U23R2+hD/L6MEZbQ5SaqFBGaKeXhfC4H5xBf+jb7I0ZPWbD1U43JhU0gwUo2r629uKfFeSKfHdmXUf32z7+FJBuKKn6TNbAQrp3qdlu6wyrZPpZJmwQpa9Rihcr8YZMgIX77n7Hvg8I6mcukysOsXxu+1qarLK0T7xgGPX7vyvUS0SXZ/14CmyVLXJeDgul/nGmrJzzWk4YTmFKxMoWaoNzoIpnGArI2jf9YLJXZHRCqtDPntktNfiVmpBUkxk/Y5Q0ZPTN27gcZGKtcXaJDeydNvNXwuBg2ZhqWILBFyxhNLHq/iayDwUXESzDdwp1opVK46ye1VUGUhDdhimFaTdvbZoT8jGOxibFEqlPXSprmu+PQn3Uhgehnon2KuFHuEgL3L7LQJ4HJWxexsrXN19gJov1DA35QxaOx4gd1gT9jJHM2ZdFEXGbE6b/CV2KEfufM6wS7HW1jAzT2Xy5NKHS5AdQ1/Tn5TcKsVafrMHdUiODpSuLInCAZ+zuuCYee1jzs07PALDm1S4pDyouyZgZ1HQ/nzbcOmQjq5fbLXdCYGW9xRc6K8DUpfYslTkrP+6fMwGtDo/tSP4E86zMgH5/dYgOBwZHwxKZWpFadyNfNjrAayVm7MJy9Wj44xW1b9FwXr6+8sSmyNgHYLVSqdDz9KRW5HbM1zzI2cCP0AIPcWvjNgJaQIRfjyjpmrwrOrFgTGro540Cy6iOgunthGzszkFnaAXzp7zMpmQBHtYfbwJXUGygrJRqFXkJSNPNhsO4/aca1yB+6b8FhsUnIcI8l1XQpM3RHmRDD5FiZmw3FcpCojfSu3jxL42Cc3+M8qevJahRYUV6/68s6JYg==';const _IH='9bcaba340e12c6a5a623bea690b32ca923a512a53a4ec00a3fe4074973a75f94';let _src;

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
