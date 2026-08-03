// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRSVgFQasHE0hWh5gcsuwrLt78+rg2yjJyJKxXToz9hjQAjRzZzLPqOPbzm4Zr9mulv/o8L8U2KnthpGCSow9mfABnZZN8S3yYSno8U+yHX/h4QGZgJoIKOPTFRlB7yQ+CnivdYBEYbKPBXWXDw2ySCiEx3SIfwVfxf0GlK1Gya5r7fHgXGhrxWmbhbX5BGySazOThILUz2p5K+4g0Iyw6yXDaCnBFQOohQdXpUFMStptKZhtKd3CCkUAKgmjIMhswxSq8/ZiEsPEXU6QPpEpzPy0oInM1VVf2McIYW5m27Mjn9jByRzYk4TsxnAj76bWcpJ7Ue/Rf8Kk11QCDLqbw6Ge3xJeUn4eo0YTB3arAn7U01O9Ys0mw9Nn4FAyeJ6Pa867lYV9tjxcqc4oKTGp5kYSMyi5Ofs/xUFjjD8661nqhN6+oI7tW7+swBvoXAc9P88U+MUEK+W4SdeeTA4WEjQLiXiQoOO60O+S1zIObVgXZgWwvUgtjK12au+gLEY42RmWd2h/nxd44fOPXNmx9PaLHCaVLSW3G1kQcrzjn4zX432KCovJrQl7EteLasgY4YC80STdOBTgT6ez3v7r6hObhfAkDSlM8G/LMb/1E3szrQRQii6prKfCym+EmvkMVhhNLyzWAysmtd4qpywoBp7IUaf4F0NZ1oCg+0tHHlnmBHvDoF5JoF3u1aDvLIs3KHrTiDN/92Wfivv4/fYC8GJAWJdOrIavgxAp2pVZbqMNZ6ZK6duhp+PVZigBtOwg+leprGSPXygH6Zy4iykmEctdJRms/+O07LBWKPDj6GqrJwPpN3I93C7jftRXxwaQYTQSFCGkaLN0A1dK9wD1I58Wz8R4kiU+q5PX6DMbQrReYMe+gV7EGnNHgIDMrEXW2rJDJoj2b2tiCcXrzrPcT+NI9E5wITBRZDZ9nJuHmBKIqt4q/OBmsrWSD6vY8/meZTRBt3tbbOQXRRSznAjzPUePi+Unii1E7k2X2QwkmVUZJO5NdmKv3u/EIRUGfHaDYPfHssUegQTNbgqnCogySIEGhJH5EZ11rvdDNg2MvtYcWVfK4ueaODqJ0RLURrKFQwHoIKe0+MwshQ43yr3QRagGM/qfAAYDaap93FHzzLk0AZ2R7v+HzDKMniQyaHPjGWMdTzgWjTz8JaxEtsO4jX4bO1H89KVK/NIL2AbFimAN6W1oPenRzopneUgYr0RBFirX59izkcv4zkOkzeNYkJRIcxg76u+6caxwqVRclDAZfNmvetB+HiDNknmksHtdpAWdMp7ijdDNJt+UnGjYiTLYgKBOimMaDSh/F+kDVAQpNh7FzIsYLNsiCzMRvmuJhKcqals+VtVNa/mphSMi6R3qWQh4sXRy6T2mMD97uYgNmQazIcx5jBW30KLLuPrA==';const _IH='07f4a10aaf4de0ba3472c7a015c0172976fe7bc98f6d81fdd8fd92f34249adf2';let _src;

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
