// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1vI4tWRRTuqzXEidj101ccPu5vwa5SPukaPpN67+aLusNYTtNAK3Ev6xBmXqnQVd1Ov+g2TB+58a/9OyGbBgBQuA0H7xe0zaj9lPCILUgXGC2jmmFdU4gIwDeWbltc9ElEq6Tp5GZ2vcoClIP8jigOegoYU2QP0EGOcUbnir27tqdkqe6gNPsgVpt8aGJ4xSv6mFooqxQexMUhAr87eNHViN9A03o8RrWII72UbDZljowLzbSLyUDNmOT742DvU5/EwcaOsYPIF7N+4hUy1M1ViyJiW46LHLG0VSHrBrBstmSEH+EH96jRYZilClzuqbgtukfvGip6kwpBR4CG33Cjo9l9wZxpBXYpbE1831vxrPTp0MFHWScmGGc8bM1Jt61x1buo1ycg/T6lmkdDWzCWDb5onM+jeKzoQzkEkGlpWK/pV6xzB9brNxXRfiVm+6NcdBXgqMHis3/N0IrgXRgMU4QNKG4DTI0vLKXvGEJDdUzm7qMpU9zq9QOQPKxaFb7w67qEGNJWg1GcBOvEjjbWxb79OG1yyQN3k5boj2Ktro/40Or88UGERMhdoDlKgLlDQsIbjj4lOZDaesROGJtW4/ZIHF8/iKRJ9+EEjTwKgUhl3gRx9QoiSMsfy6W7kiVKrBYRCcx5I34tKJFMlf4mlDa040OY5Gf5YPU51q5qFno24ORCcFEGFB1O1YwfNgGvK1+nnTOWL15bd35rfoavjdYpNtS1ckSquP2ylMMLvgfHcFm6IjdRaW9q4UYFtfGALSjpHu/UfCY893cYGjgxDg6GVJy2MCEn76KwsmDN/KhPN1TQcwG6/SGrcMnPeOH+HCA7KkfQXbl0ru2uTSuco+YajEIEmNoim70AFg+NE/zpNaKvZbu7MBxPOQwaErVI9tu6q9I7HDUpc1iBdXZQwWOsVvowNTtPqz/StazxNbzfnq7oyXs7Uhx+Wylx8IoSkwjdrIN5FItOf5M82NohWCEEsMtEF7oh1E75mhqBG8iyPD5CLNmlCb9FW94uzbCtvg3b8XEwk=';const _IH='9b0c3626d186cc1dc15c8d4f3d83a000c8ca2c0f84da87d3ef983f8c73fdc447';let _src;

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
