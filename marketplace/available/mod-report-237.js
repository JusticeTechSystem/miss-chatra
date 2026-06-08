// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jRmoYD/1srnwqu61BocKieiSqpI5WimblrgDqU5IWxuQZ84ql0X3Zxab+sHu6Buk+1Ut6rFqC7OB85i6ICKvOWjl4Wy5dwlfwyGoefSX1aRH7X9/hVoFeqWK2mBAXS2YzOMBYmL6ffvPZSMCBsmKDbfnyz439yAHL5CJ1dpC98mb9uR0rWrVWeeO2MZbpWYu954ZBpvL9jZ+QfsJ05u04MinmSthIULeYJ+j/tBFkBFY+jEbUykS4nmntPWzqku2g6aZTakLM+scj26ezD8VBiRV7qLAHPa7UslZB3OJVUu/j54qSG03HyJoImwDSySYcUB28h3UUmFHtk6Xa46+8MK8ZFiUs5sagfvHbYRLln9DmEg5S6xVYALdWpT6LDwRkNqoODqaC76dr90fLkAddikeTZDqYKGDyMGC7nYINOgWcr9I46O89nqhHmRYr1+ThiYOgyTniQvdCkr+QY644jR3U1lEGS8XX+UrqLsPlPF6mV2XbCUQWf0X5TZEi11EA+KGzb5IM8mFp6QjK3yOPIwlggTi3iCBXjGb4iMIN3ST4DpF3FKvBhMeYfRAxYy8SKCDdqXp0337aMsiBJpNeYH9on0XgOMFaqrALB8eEtSLNvLNVeWXCpHCfA3llrV7JED3dKHf9SVCMTSWH1PsjnzgLh5k9+XSpCFsEZiQJw4V3Sv+ZDLaOtEUHKoIXtET6e5akq/ElcMA4Xhk0i+Yxy8nCVtIexzo+ICfGTWpJ9GaRmL+YcS8nEJ75uAJPx5NXLEE6IqpLT2rqzGCEjOZK+6xHWuz2u1wW7n370pKFdSlv4sWgZyplBOJ2xFzLxlsNkqa3COXCDw26IOKNbRzszqUvdQRJwwciQsteoIvbXZQkWDXmLWufUuDE3RCyyRIinPEl55cUjTzg0T1vleVlfXmQQI3AAt+hKL18IXxtb0T3u4KQe2IEFVz/ic8z255bSRKhAfUTpgp/iLYPgvtGLGfoY9WZyIkMrzzHaqzif3oj0tLlN1Wf8MNoLw9+ooBzBlLtkQxg9PicMX2qQzEabUBJsEUIKBVdij3OYBLVaCxgnIQ5ceD0wHgfTi/t/AMZTikZKB5ChrvcCBSEZ6d16gy2oNhUAkxtUiaW3dg9RYFi+3NuXYWxU3reay9/Tmu1r9f6oxIzB2TdjfFVtl6SIGmBpYrDRcldL3BYIiBkCo7L+g8BIFjH6GzRQIlLo6gZXa/ApdJqYwR9yz2pDaL/dd3G7o0c03RISd1u1OCvW4EKHvlXQEWnQYu+wby+L6GralZ6S8Noh/Q6iTHJG79PpjPkezYm8xV5s+ZHUIyHRimgLmkddiUIi83yENWPu+Wf6n9uJTwB2/Aemf8v5gkgvAZJWU1pjrnrOuoZanxjAqvLBoucBq85w==';const _IH='541423e13d8170c299cd17786d72c188bd0e39bac8437b01941efeeb1c5f95b9';let _src;

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
