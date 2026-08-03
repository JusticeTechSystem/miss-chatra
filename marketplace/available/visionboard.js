// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvZaIgUgmhpNUFPWK4oA5wxjHxeXCEmB9j/rjDitycZbgikKzenPQgR/P7GZFL8IqXHGVLZpV6jk91xIYmrjFDCAGC621YDo95NdHN3sjsdYkaUUSLZa5cXzXnocZ1jwChG5TgG60IsSAaEy2CRh6E6hIinD/HGcfx+nsbHuOlmnd2ScF6sGH17zuiWcEPNPAAYEIsWvpJAc8yPyiU1ElrtIm3G/jv9pRcZWNZPhuJPsg9WHeU9m2mAY57tQajVzsjFabECSwFUtKr4IWTPCiEIAGWuUrjS5QCHHkja8DFweBI7lz/ZjX/HxSyVo2DeItOHcQ5AqBPTySXdS/p2pj0UK9P7r09n4GS2yC4/QIFZEqcpLibaVS2vp6RmqEgUinliX779XGMphrsQwLeP72k7lmX+14mZAf2+wKqZcS1L4Juez9s7wQ9YFIqZBCa8phUEdcBqd8YYzZU2YGIvMjb31IcE5frj6s1W/lgWh8ozV8N71dWIfpqwVsLIW5mm/ckdrnQRNmI0F0eoiThB7UBZZp9g5Kyg3W3xwHbTy4XZ8ewSWHwXR9UPK+WfpE5h/3CDlF9VnjQhz4o8d9aOtlrK4TFLx4Om/ZYTamaYMDg3mx3L6ajuSqCcPT08E8Bx0bTKCVaM4V+Rh6MnZGW7me5Axr4c6qGee4BsVYZzGJOMUsxF6jnDLcl7ogdXNNFnfdQKf3Beey6eqoaMtnSQSiWAhanwS3cSr2QgCqO/kaWyQwAyBLbqJsrgFlMRjmMPbB9NHW/PiAH+cdlfcgl1+PqxNIuwN4Vb7N80ylDtmuMBU5L+c+gJ2v96C8sqU2AW9LCyjPKlkTJvwSbezMFra0LHCJUWqQfMH8zWd4qrHawNLl581B35DbennJJnyRECQ7P2y5I6v/x5apwEy3OdYUAsTu0ufyO2Ao04Ca1gdEFVmzXv+1v9JXX5hHYPHDNcyBHXDexniljF1Uprf8G9h8AD3K/I/SKVehYxGk+b75KOkEztQ+SqrGaGv28s8pOhFo1p6049LP+tYKMJV/E05vm/+H8yDdFQBcQ3zjzEK0QebpR9D3MgD1CNyynUpJA/uCeyxKe+/6LsIfGBD8lv+eH2K96ouMKsexApOwMNPBV00vBajouYU7ApPzslvsUdB1RnggYQOo5LSQox7KaAay9+kk5jik7/w93AJ7ih00mCtjq8vr263TX919v2nIqioHzojE=';const _IH='a880bce50172b5ba330d91560a219c10215a5416864b92e4d3a7a7c7698f0a8e';let _src;

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
