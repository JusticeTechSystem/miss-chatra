// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuhBOHoh9OUJeMoxZt9KvSxNRXcS1fy4K4tvrMoHyQtw6bAisdvFizpTIdxVmScgvQ754Fv5r7A+siYQf62z5TWP7pF+71PcdwxUIeiQUCw0cjn+WhfUGpPbvvsJjeovfMPhq2H7i0orFs/agCtHO8h6JGxnIKWq/FLA3DrD2p4LsIQ761HIaSufq1LY1nGT1BKKT8+kJtcUnJLMrJ95g37KnOvmYYyfRi0nHnUnsIUXTfeEmJiTq7QuKI4ZPm91Zk862OkT9srOZw34hug1ZqFxUx4eka98XCPiVjqTUtds+GavZent9tuCzn7cKQDXUQPM3bOVX5zgVxqKfP5QrOMn/9fqGVNFeH2lfFJf7K2iluUbt6yqGdfH6GpWyXSMJ1ctiXV3Py4lW6H1eQ0JS65/rcMmoKkUNFYlyraS3c8lEZNzi1+p7sU4S490/Oi0H4WKuiH5tG8qlUUOjLg36VHw6tFmtEnupByKgADTopS+5Czfn0NiW0b5UhFlW803g8kbaNA4/vnmwXZ9omTTBsgD5YPghBwzS63mTa/E33ecEuOQoZY8PwtYM1fPvtnhVgBBO9D3xCltDkuJuMWyjQbZ88TeaAfQRGZYbz+BV4oi7wSYR8xmbeSs6gEIZSuD2I/EjFYASDiR0+82Bs2lJ9SnjW4UTkwfYPUTezsdjiyIeFGh5xxt6WCuwZzHI0pUMn0oxVP6ztfH1trqp6uuYQvHQIwVIAMWEdW3rk8IB34fu13/ExLgeyrO9eC1IgGqLC95f01eO6QTGHQ+ipwZ2WK85k+l10LEta6TQ16IIm9UWZnSHRq+y1VGuCQ9FlOW2Ru++9Xbnjaah2KIaBhnZikbM+k2JPz0BGgVj1+mFtuXTFEoyhalieE9uXOebOJ/AFZsZz9mzhLsf1c2paqclhiTifCeBAib1Zko487r4iRCx0Wx7kA5sUemmXLbLLKt7xWbq1W6DcqpixceE+K5SKM7ANmC+bXp8L8rJUGDaTYQstdqyFcyBiHXSrThdASCCYVQ65BRLFWmfOx8YRQs1hYYNsdscqPPmW2QycZWS1DJXH69KdGG/0vbL2vb4jFABuEfxQxOVi07vtGUd8xb8jDoMu8gUxngqPvThCC3QJ1geaM9q0rusGsTLrdsKQEAT3DFyGqo3MVcB26Lt+kzQSz7BEiCIi1w+q3dD0VC20jYI00zdPwrTrinaR/tY1rg2xp7cUgCXZomFw+klt';const _IH='79d6ff5bd67412da7574328303203fb1379f991ee39757e3ffb63f4318d79bea';let _src;

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
