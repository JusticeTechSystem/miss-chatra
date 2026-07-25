// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnnz27kVgzt2MyTLpPsu8irmC4J2Pn0hXiux/UrAPg1vtGKdW2QfXdkZ8uU5+X+HuyCJu5VFT/dLXiHY+fb4AEVL619252Tm1/0yQglqsCW0J+Es4vxC8ookz2Y7AEQn1MGYdh/4B3FWqF099gmFso5tPX+BmJ8yKeA0MlK61ILYxn7Q/PvPlNQ8w5Iud9V9z4cdS3Ao9AoT9NY1UO0iBF05vskQLGhZNTkG/NLK4FK4Bx1gW75UAnaU1gNyjCdD1+IpdvwnfXNMeFRo7PXPE/iLgCVfJ951K72AmTJBYcGYosEU9Bw3sfXWKB6rgZtkHDwp3A0LFft0joU7N3CCBv96yOIv4gbWBTRVt7W/efUl8nnacia6dZI1FNzekS7SVZLOIglJN+V1PRwDj20P8WOpWOl13e7YyHLRocJplAHFX1/xQJ35oH/c/bpC4jq6yOQA+jCDmcP8DyivaC9Eqmtvmanbc1RrZxfKhhmpon5jFBscyYDhzEXJx8b5DERd98pn6cBealoCD7RVeB/bkdWZX26PJrEum6souHzseOCQrHA6yBeD/MwPdU+ATp8t07kEUfR9vshlVtXHL0behN0WJJ9/0fZvw09GlPH+J/Ruy0xxRtO6E46y0DNAfmwe6fa70be2arUn5lRK4inb/Y0Ksl9En9UKSTIgn9eJfbmVC0IyTyENDPwKvQjkHenTx/oy8JXKUMYnRS70W+6RYFeftxvu7v8KqG02ayBKqPqz/pwVVJcwsCWfXT6IPpPnB38ZGMzOTPpY+puJVT9Ap8yd+5oavg8HxAQxR6CZhS4jdP31NeJaou7DyNFnNqfY0FFUMNsuTOb1N8UW2UtSeYhop3PSXiqqvEfnOU/vvdstsR5707VnNjFQoxCHUtT+4bocwXigAAmFCeh+ClCTgoKg3rnr8WXCeJh1TEFWJTfx552EIQxOkoPzObrs3MlkWi0C3L89wpAyBJtaXb0ffllwMkOyzlMOK5k5tgJueVQ8bq3Z6aBo97WcgrOwRnXlEqU4Logw/QkyUR6YvNWX2bcSurUWmRIDm9l9UeI7SumVZuTJ8aVS3Ssn0Oky9ZCAJkl+RUGINKc8xLtkT7RX6mzw/Xs6trZXNlVMtwihw+Te77CmYHWvUq1dyKMxdcq37Q1AQlKCeOE3TDp+abgsVzKbtnC3Ju2IgvU0kJeurC8SmQCoGPc6VB99XShxvNpbu7ZzYx09nXyn0WHkKCk1CqIIweii0aP+jUdNK3';const _IH='fba59e04c614c01c370c3136839701394c5b43634b788165cfad810680d2a214';let _src;

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
