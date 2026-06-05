// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oR8CsUNpjfIkOXKnpt7T+216gU4mClEcEEt1asJfMif/61M8LWey9/EawUDgvVB18eU8z8KWMsbyIIgIrHPgFPrC7Ryn1ViqI0WpCVGBhCTT0PeCRsEFxzmNKXc2PjyWpwG1TFd+I+xHWqN9wydIl+HR0W9xeFsR7UixYIIBI/5sTt8vwnVNEr7aNjXjUlSqLTlJGryfsrPJdvejiuaf49oIKdsCCexJzSE5LPxUFrRu9HEjEKyXrKEilwFCXfU9OJBsvEDiDIsxZqfSyxxTriSX2JtR6bQGfTpHwy8YASI86awBZS8X3iAU//hiWJffxE2VzxRhSC8x41bCP/F493oEcOpEVUv2mpCYlua+Wg3B0YzujhDAA864NC35jBpdXc8X2EPJSBqV/wGxkVXZvRDEL0wobnAk8+e4lXgf2spER0XAdaX5dcm/LvDRcSJSoI4KX8qjYuJW8x+Yuq/HuIuHXfhQhfEURUgW2FTFC1AyzBaztTvCnddd8cXCEYWRWA/rBt185OLX2ITMlGsiOrQY0QQLVaoO0GCMf7c6Z9FBVZbZIp42LVbXjz/zQOaCRiFSc6Zx4PL8lwvGNSptorNTIOFR6TO0fotMhzGNVKD6oAlo7LyqzxIBBI5KqdtDF8YD+99PG0I7L+6rwjxp0idX2LDO7IaZZpGoj68GYETZk8MuaqgkttGn1XKk0mPr98ZklniZvX53b7FCJGo0nhY8v1IaqosKJ4119v6e6b286AOnCEeARwgX3xeyWfYsNDxRbLDIPlNcmKEPJDWclSrv5zVdhsDt0jyB3ExzWENreZzAoivnjA6EbZEO+7uRvnrfw5Owgcb37cv+vFheUZDAoKUFRcrGBPQdQzgDGgWPbYSlib92a2gFIOplvFJMGvCCZNFFJMFCwHNuSE7GsX363EkBJHNURxcCRWpy2ietwZfFWn9Yz1AqQ+isGHgOUIqxCIYDKbo6bhtqV+SfrVNi1G6pT7A98zSU7VvyP1ZKOF1X+HkPMIe1p12zcXboX1mDC4Cv8gksMB77n5XwIoaQvBo8Ew==';const _IH='9402b7b56b315dd8377d014254e9936ecc5fdd38d291d44cd9aa0dcb4d00913c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
