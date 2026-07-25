// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0rTKJin9X+jgnTKd+YFTAhWXhYv+SnuwH5HZD4SZKGuAeNbUZt0LIWks2J2bjVDM23CyMOTPF3zPEMKu1S3dUAZzPJCpsx5xL8RG0sSf2ZEab7TmnmyrGNkKDj7J/ch9XftdG2YyfUeQK9upnV26d30hTlKxehTqbtTxY/Wa6lJcJ62s783MZCWHoQRa8H4YEz2xhtA105fQOESX0HfeQOtiUoCAh2IFRicxUDDmyQ2iwzOWrfkRqBRJ6F1KJS+vjxfFawpV10q63Oi5vPKmfhgE2ScC/bYxFeeq/Fj2+7kLjrXu4Jg8/KhF0f54iRgiZhl4/lStRklZ4Hd6yhcsLJ8Keg7s8otj/MnAwbIC4oNV5iMuT2Jxwyzw2rTy54rODXXS6muMYvEYToZjMb+RwHdxfDpnRDlP1clUO6oKsHpjcgET6mrSj+BDaW/iJMMmxBuOhlZ6fxn/LfGSD2lWXV3uNWg47zANFkZyJwHVXbOXvq9UArx0MdqIyXsWxSG5pKtUDSnUQ493exief96WDXIG/VHIzOqnAFbG7Iuff8umb5i21NzkfSTmDtOzCUnBjkbUP3lT7gUPNWU7QNspKvuvBtC4K30jaec/wAqUJkxjjLtYRmalvnWJV/GEcBg5Qt/GUpOsWYDbj34Y9eV+xuUIPCUSqWbx4SqqQVq4oBU3+Xe6uMuU4PoVgH/aVvJqfuLCWag7WafCYuevQn6XZUNmUOFaHjgy7z+87+YFbKaP3oqAkcErK9q++Y9IiTF6C0CHnr6Gs1rpi6urxKhJfGLwfepStenNyj9h/9MalqpfR9p9rBliCWJk/CnwDe6GP/4DLxlzt696Qy4s1dNPYcq2H2CQr3ytFZ9E2Tr3Tn5W9+UyvTT62Bhx/aDZvi7SuwAMALLa6HfxfJdwbHPV/o4KHA6rM06Ewo99njzP2SEFqmhzBmPbVIB2U8y32uNY0hru0D6MQGO8TQY2ZSHEUx0QzuvLSH2O2VdwZJSvGYuxodhom8h0jPWIQxF8X8SxvaizG5L6YtQjHsIEJo+WKqBxvmNPo0YQzYjqjKVYK12a15AgMvi1I/uzaEKapkSCpDBBmxZNljJ3LkbhDIGOCbPxtJNYLuAsmoitJNInFoN6HjWO8HoXyu6ObH5QM11+7ge0yefSLPFOn7je8RIrwmBSw0F5u+oBxwR/bL5UkcAM+esyCIqKqMdzA7p3IIMzT1FVRlA8ShNPrgfhqXfGW9/0QOhm3I62/nQ17wpj9kkdI1d1wLagbBnnND8gFRkiYKebp+H/I43Xb/cyGN3Umx/gRCb3AqsgtpsVVPwTCtL6tcHEt0K2ZRN+nMbK7b/auHYB8fyeFyckwgbIJv5xYUfleidqLcRlxwNd4oV/NoJyQ7Q==';const _IH='52be615d6821e731ee292c8876f594f40528f18ba830f2892535a35d6b1ea3fd';let _src;

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
