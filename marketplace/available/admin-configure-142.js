// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTA1Q/u3Cz8Fss6ieiRoZMnbIGpD9bRGXGg9CFAxgtEEoQdcxBH53XPjZyUhwNmbNSKdeQxHrYY8Ul1Mt1x9X6A40C6DI9WsS5ec+6HzEGznN1X3JIbMpfmAPrYrE1TfA3i9Bzgq62YSer26JNnUvDTUtY/bmelzvKFKzACX4Av+Qf5xqLWj0x/hH0Bf4Q9JRbmjFLg38BDU2ndeDIvHBcJ8/7RSrcuQzzVw2RVNBsYr4tRFdDLn+hH3i71+wq4sgLN4G0PBEMyE/FhEXpQcmdRS3xLg2OWV3ar5g3khp5fRkgXyWNeRw5FupJk7E+ykpmqoIFHfS4iwvEUHTEn+aSKy7xaaxt3rHZjJF+nUPkC+gqWvspdoBIZZL9FPYyNvwbxJp4SfRTBy8B6Xy0vXTbWn1yXXC9DaOLlfWGKyF8Pmvcr0ay17zUMcXswO7/I5Yakbf6PpMEDlrFv40wuOSn/qZ54Nvw23wYi+54k/ehy63dGNw1BKWBWnNxB/8zd+9jVGn29OzDvvnAWmtZczUA4u4bfzkQXSKkKNlwV1WJG8dfizyPhopDc8v7Z8oEE878U4fXEoBncB5oNcWvbdEw7/txj8Fo0YsQt1dn9zVXp+SUu6wolyEqgjblkm8Ezyy2j5XI+5ZE8141MqSgyWBJzm8h1iZmmehSBrJVxeWjmWe3f+hOufrfN1no82xUZUF57PTTscqukAtNNWxyjOVmwA0yQkq9LeilpDHd7RglIk2oktufIv0TqP1AqEIlvZb4cNnT8ZTaHPAfrXo0jISD3eb0QZ1fItUQsLsPHaHGzALnAnTJGAijLC5EpyEeetjMwlS3Rsa4ieqPlF8TRYw8dzdd5dbO9CXtaU9Zrh2BSUNbTdbsyLHWzotfoZ61mkGthgNvMC2lhKBSj1Fv9pLD9VaERPs1D8q7q5rWeZL8cZyprfCiCKaWaukhQNaIDSCNxzhm83cdGNsLc5uEYxk7s717+vSFzjPoE47zfE60ylkzOIOoIbjEWeqaCyS4ciFzr/9v70/iS5evGADdvwGHqP5LLfuxB';const _IH='5debdcfd14e5f08bc8ce13fcc28fa15dc3477a773e3ccf63119fe118bc4ac304';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
