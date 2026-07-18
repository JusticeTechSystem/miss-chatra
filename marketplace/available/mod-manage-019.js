// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTM2UGvmDQwpZJi2zwJUu20L+0I+gJzSIAKt/etbahW1F7sjs+x5rAxMkqxJX/9JWQWn9vhyblf6DvkV3y+pvQmttzwTAKPthtqnE9oWeVu33DXm4XCcFKNm8peuAszrCxhSO1hI4CJq3uNlqpD6grNmk9I2SoOOPH5SBRAeK5s701LEhjMrYbJ8Ea+J0y1JWyZZuDtIDMK1bcd6J0ZQTFEKNQ+OZISi51DBpiB4NNVwE30IxfpI2OpcNXmSQCiigf1tl6QWynab9zyBEzxJb04nCdVyCnP/eEFXv9+sGGAgi6QAMl4p15HZjBBeHVaGEc6ZFBaQoqtPtkskAzC9HaowCRsAatxMKqbZVp4KE27sClP1JqsVgbUbrENCLLChh4QwiumASrmDMQug/0kOzLRi+16kMb9+7WM6isSHkHEwp8ARN0obhit/fezyoyvJC0zvHjUB8wsGuaxK4CksPUJ+JW1646cDmr50Ujbczvs28uHp2OUX33jIqH3mwnufJLYesUahvOZX277s+aHVUo4rLMzvWKH/fomxZMLALCGLjlie0ysvRVlrhqwAPFCWzHOf6/GeEs3E25xPsBFFs3fMPDCFEUjrqMPAhrmwCjTITAR7wqGvkOPsWmD5cea/I4kBITB449o/uyJJ2VPWWXw8wzdPbYmk9Kfi+s0AMpP6Bm/DXs8z8BNAj4jhG/QtV/2Jk5+EB5xio853H5G9cGylYz2XX7xMSCOsafgQ5jHakbAdT9+ULQYViN+eZmRGVOPWlzytYitUKDSQ8Ghl7TCH0WVS/kIDWChOabMVhe3JLCt+/urk+a+hf15Itb/uk7v9lQROb3nrMAFMK4Zt4e3JUkakeH0z8eCLcC2DafkRQgfPQjDdUKGCzOEEJ+fY4lu9LJFPzMfR40oi7zHFsiEBIPaIYfd9rN7LJpVTHdEGU5DV3KCP+6W+PckyJ+pfIM3DV+XyWucOOKxFDYCag3YeYnhK/Cw6U7w3RxCT2tJMSVY2eARA2R16rNZicRjbcWistjD6x2ARaQ8HcaSrcJH4SNszCEls0jteBG97TjScWM3vhvrZBxUUOS0rkLtJFaXU+kFeTvH5SAU6bG+juhw591xwa1NCTtxsiLEpTocQjbXcVVhF9OHt+UI4L/YaiYmW93r2E5ovILJe6q1l1b/6fVjK+jgCEVGBSw8CeKQaqqNPzIUzP8+ppU9xpznIzSJuaZnbOysW3SWm5Bhb8Gz1715HX3+osOlrBLvUks9fNtzVSWHOx1YM8ECjwZdKXXuZXGSe2PUJ3ci0v/OtIJG52R1PyIoJ+5nLnECjZmmROctP1GB7nnmuvSG8X16MUsIq2exhC+lmUaqkZKn9AHLgPMVq00rFuI9LW8U05maZALoQ==';const _IH='33cffb2091973a65036160320104b23e50a83dfcbcaba0385ec6aec0306b4f9c';let _src;

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
