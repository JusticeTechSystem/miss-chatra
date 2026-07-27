// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNfiYUmYjLmQ3zy/6g2wwU6fI/5pzWnfaxm3LszAeu8p/bUSo5UIUOZ2hfR48VCp4F12rvRgIe30Po5VlVNNRJjMVp8WXdsEEYRaGwXAOp6mQQhIUySqJb5TQKjyeorqVQlYRSMZXveXuFnkvOgeRAHkSDfNXSR/rG/V4F4Sj6TUgnJLZrlTq7lfIB37DSibTKRTsjsqPrds+xJULIHLAzcGV1qwmHU6TCQSWsa+5Qeqq9PyOgcvEj+uwzCq7t26IS1dsXj+yBXk/nkxSaSeZjVmEKBSqC57MeA3mu6hdPUnzEEsKW2ztJkLl1A9VcDtXiMu6zd0imO8/e1n5cnEkPq3cEHuYxg0Ajv1Jbk5WdX5hwWGsmaBNbOa/7wsrvj6q3kffUvXvXzUwcYlEDFbcI9XLb3h4GBfccY9fEwposny2s84XQzmsJoC16TUnG4/JLmHPFZ8oQVzMG7QsAbTgIKQz3S9pQrfLqAaPOOUhidIRqY5qmJTOp5R+FuwGrmDTLin5Bpiiz742lLujFL+A90Lx9HUbPATDjoU++nyCmrcUV+bLhRnDkL18J4KlEYgQDh9htBaFTahcRdAmc6HHboXCrH9z/YPORgvHNvOfqvFEpHJ2vujs8hSD16Fda5ZtBtqeaUq2kdtNExETOZlRB8Fb7XHiaTmBHbeTYewVoC2ZTeMSLenXAn2muzeyMhVEzSSQkjh0wtCixPUFOInqAgizANPLqOoKZ6e5R3QC2nfYGKWJVSw==';const _IH='1c0b4ac6a0765960acc46976334fa58db3efd39efa1fc32ab3e259f05bdc2599';let _src;

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
