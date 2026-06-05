// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B7o2H1byNmZL+XkuC7MKpL3yzBRbwD5BLbFgDDCNExlljIoJo/nZGorwGEW5lprwv5BqW5d/fksdTtNnCf8ZQp6hyjJGWgNh8krzJB6AL9C+RKoAN8pKG6/pLvFUYBp23SeieL2RUmPCBH1x1Z+wM2mPGNUx5JKrv8E6449MAbgd4sQa0M+FgXB1N4aZSZv/Y73378r0Ad6WcW/oo8CUavk5uktJ2CzKUawIAJicgR0Gx3cZTFKS8tU6fp9AeAL/rOtI2+4dNqjLtHizhoT/0SqGeLvv6an/MkVk251sYrEA97H1mKlaiN5HasR8Tg9Ax7EsDHV+aOR9RBn4zatdcYSwH3e6wPOpGJnqMyBD05KPT+1peyxopc/QQid+LJUv+6VKMMYNSEAQDf6ows0yVkJDXOVCPoRmOf+14ixgAUf1MwxJblnqE90/wh0XQf32fogRFJpdfevUDVSGEty5s9uVfZoKxV8kYiy6iaDEwwNTGYGbPMLkYAN+eamAs3Bcm1FtpnAc6pu8Kr+8NbiHyqLZ50Z7nPgOfoTN4yZy/SDfEtsSXcp+lZS/t+13pkC27//EXDP9pWsriW76yhf3yCXx5VstohLfAXTKetxiOZPTCuKUs9ChrQnJwm6terxnj/4K+QjJO3u+jMJXha+KSeo/3p4m83urF1XzSmVWv10EsV0xhN3QabNdkx5HYh5qPfP4H6OyCJPd1GqwGOV8Zz4eyac84Qae73jlULEmhEdQZQ==';const _IH='6759da76d8450215ac223ccdf3250eefa67d2696383c4af960c60b0a9c88e9a2';let _src;

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
