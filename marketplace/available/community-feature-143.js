// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZS8Xt1VpkZmChBYkO+aPyjCK4nkAEq7GtxglzoRJY81EO4ig9KyvZNfKXnCxSOG9xiOcbZCkJGWVcdEdurjxb3iS5v5eqbCLF632g7IL1Scul/dCRex+DyHBnE+GWUWCRuYke3rkfdZyj9cvSZ4Z1R63j5DJUjAIguEbsj5EIYMvCQ1tLuCNW+FlIo3rz/7+uBMQoGhLI8aOUMu9meWd5+lzyHGKX9KZURUtQDmoMjETF9WZ103smQ9+Ck+1fN9EBMi/Z5OUaop+QxM/kbCuxZq9rjyDep83z/+0CXorROV75wODZdxCVQFgNjsSATZt8TBe3PIz0dpIQu61kBLAenM2x+De0LKWN57hyrvAt3r0rv5vQ0GmgxrSiRVCvq2dn2hd+PnWhUkjsG4ORoK9h5/yUsRJ7mD8veR9mlo9E5AMz3axmYkX4ytWPw4GSkNZ+AlvUZKK46MsKT7fpUKPo/vOMMCmYfhcM+5MnHutWCXPTcj0tpoJ/bHksMC92eXgvJ0xGBeC9VVFFN1Hg4X8XqzXjl0F8JCbZnMUUHQ0hPX0TNuM7IJCe+bX1N/Q0KUYJpMaNybaPMBeh54spIKN9ON1jRh9TBJ/cxENNI3s+Gfb7O6tC//YdY0kRakoWVmGDV7JIm8ZOsNRCbtgouDaWcPHlYw5YpTIQnVzgh1PLHY4NGIECz8+l49CF2MOrBgVmLipJDuhwgGOKMl9kfYy47p/APUcdTcFaVyYroM=';const _IH='170169ae3b4ea49bbd2a430b51c96f15a6dd09b97469f45f36f49872f73d3ca8';let _src;

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
