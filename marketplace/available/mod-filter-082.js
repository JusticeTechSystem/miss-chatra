// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VXiZlyZScgW8B8lXrmz0hIvd/JvmjWBUHG/NTQ/BS+MHbfvwprEC9DZ64+fOME8xqEDxH4vOPtDlUKROAtvrx/Nk0wi3GXr3GAO4QQE4SoWGQfIjlI+XnXibhnm/aDBCkcgj6b/1+U3eaYlX0bOqZH3y2KHwwmF3A1FBJZ/G4ANfB29nyVNLhVuLqCFaa99OZEbwB323AXCObg3Kuts3J64k8Yn+k9sdPrj69lt5/nxHGlL9cAGwsJDGqnp9IyD9vPLdUoXfbhmNeCUqoYdKe+Osd4RiGzTs8PIUjnDelaG+y8ek87obEmohIZKoNSIiHbOFXsPmB96XQ2Z+KWqV1UX/JypDhU/6gHRR+BHkGNM1rUBJHoc7hp3CHLqDN8/8KQm6uhzYGuBhiAdcMUBa7Gn8UQAI7nCcLF4ZKujcx4Ws1l3SZ3zLC5krBCoRO2MpbeTQHNbMIUrvxcKn2KeyUthErRiPUPVbN1fSs6LLaWj3faPAyh1Lt43DB68dI7mh4Or9DiiOn/sooejlRovtIralpwHgbMHyTrAv8hr1yvQDbCLxz5yM1O2QTHZXHWAfGRVu+apo4Hx6lK1b8lvb4z9+WQXAgF6BZeZ8f4mFhbkH79YuOXtgA5k14U5z8Nl1Bk+DdmH2sA/ePb2HC9GhyN00cznBgyHa39+VOq+sBU2VRcEe7gBOBD3AjkDnU0Y3bqriuD/rfmDNKlhx8OX2zKLHoyroBB5DG8552+DO6O5keM51UscLUYIDGghUvmZSj4Ekc32MEeIgKxEe8nP89tS9jKDu/hMeTxvQ218HyzJaNteeX2TDcm39jKURX+ccZreF0Nvs7p+An/tOzVF123ZejRiD5ZRyqw8qBDtr2tqGxDIITN3WbyMBCDRkGzISRxhH6nRy9qzPlBcpJA5vRULzR4zEJEZxxTNNtzp5s0nPWtNDH+F03rFuhUonxms/Gl4MoIAQ+ONP8Fekt/rROWjI2JdtBXTA7acs8MMoswQD2lLd6PyGycMdo8lVwychge2FuDeeHDiNU7TuSPBVzCnrTmENBAA/3v4evSxtVjqM8hswAO5nxYbc/eG3CFSU1ZwoeLzgaOisKsC1552RcNBt2BwmlMppJuSqJgIG/ZY5jpvMeRcop2znQwKTXFBBMWVezUcsTFjieIvBJ7GuJBNHks7ZAfvcxcv8sMkHt6rjBNhdqGuL6Bb8k3L3wh/3NMwrLs5VE3FIFo7J7u5hoATptMfaizr5bRDVAkO7kCogTYv8FIwLQF/RaLX0OYQNAlotq1wYLhpe6BDwrHj6LmFHNSSmsfami/GXUn+EqG18a3k7DQOQE/M3gFuF/SGP9UHbk0CFTsq4BLp6X8libEaqCB7VrN/eoa4NXMpOI+NOJEI=';const _IH='53ee16ae0b935a4a728f0604ba21872b8a706de3eac366ecf7f159c6e3bda0b7';let _src;

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
