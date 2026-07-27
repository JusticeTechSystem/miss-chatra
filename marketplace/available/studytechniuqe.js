// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSL4c4Lpaa/tE2zjBb0ws70PEjBy3/ZmhatHsKxoO+DL34yxJIThTAiEjJYnlDeJbM3kBN2Yn6ly0Ftk1bNXFPrZ1YFgbTNkjbWxuCe73slr5ctCwRe/iN5EYRzOD9gd7CtGvbGfHf9QZ+11DnLII11TJ7zTRcm1H3VUU9+G/YQ0352YrdADC2gAseikoehNFJpUs6hJU/fQ4G/uOtURYBBQYxiYBUt4rFJbvPCAJsHA1SCKm8+lgr4AFnHkp5qW0VrKQB7YGyUBy27sYypSHc27e5fqs7akzJLBEcqiZn5txLbt0cHI4W9CBrQPEiSOVxX9lfS4O4SpjqxijxJkaxzPSLHWZZjIk4vmF0yHr2ygSc6ewmA/NJp1Hd8xsCP9xZh7YeHGdKanz+S/VKHRKU1APi9OANSRYjl3NerobaOHEYNDEqagZtTdjxF7DOWwX7bv1PZcJbo70kkcL7aWKxMxPutqDxCo3rLqJrqR0fdl/ADh39Dstp1w8SXsEhg5I0oiMT8XHUahwZTBNPkd2qHGE6mt9/inLpV9eTRzIwCtuPfPnKcqt3o33I+6d8ZMEPfAn/2h2pKP7r3DKKPbdANreEcYMXBHg4vYDOH7o4cX38OG0+ai4YNQxqGWjpr+lbNrzjlhbdGH0v632hNDxZ+pMyzsESSdWeqmdnR8E09qR1avCGVOwTFJrmUgku7ta23NVeja7CkYpbYI2fwkQzCgDA0GBZw9Fq38x2TktZ1/r4Dn9qw2h3yoa6w9mqPFsDXNXD9NbVBbYreaqeDDNqcrqVv/KkMtBWTXwiWx0NYra0aDiRVoGnuXy9b0lqAPnejGPBSmxK54SB5NXHU1jlNz/1hPykOh+d/nLQfLkA476xljj9pEJKdWABPrTSGY1Wb2jRWPqFgkFUDTKlESL4ikTCvgz8Kwxcc/2LpjnBhKOoC5tVxQY0LagIzGtvq/oDcomfeo3NIiqcLqjZtStZwTEABVCzZ0pJX4xWRQyHCsPCVcvkDS8rv36yzJ00+JYO9bCmf+kyAhL+BzmhinuARztcq60hjB7BaJkq+rHYl/9I3PQAuPIb2YDumzjG+ml3Px7z7zTAMuJ0xVeu2UKBjewCBf6AOfiDoVP28wp4pbCoa6+U42c2jfPvLPX8syjdSrxsgZFNTayDylmRE8AOEg8pz4Anj4lOBk3Aq37z8O4mO1kTIqVLQzPOKZX8dvf4ZBdxUiHbBA6Fc4p4=';const _IH='db9e30faded2411c35f0096c00cf5d75de4396ef7ba28e20bfacac4842610f25';let _src;

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
