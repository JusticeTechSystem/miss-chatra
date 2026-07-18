// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPivTiGxp8JcVXnvvSb50DQc00QSJhB3Xxiy70F/WezGS7IOXf8Z6mNR47gzk9lQOw3yE6p2f0sJSmU1NbX8ZIPEj/Q12FFUut+/ctmXyzFvgdEOhu3pwPc53MKQj1c6bMm2KsO0AT/8uCODJEGkaljZJ1r9KGYSgzoV1nlyx5R9PttBiyorHLHUyzawygkJCstH4W8Uly7eezmpcHaY7U8bJgggykXlVUohdIGZKD/zmmab9prvfi9WYy7/msHb9tahYEcJ5sVENQ5nyYA22BFAHEd1+mjTwhgGTRBfiTLk/Ljarks5L1WXsMxWaGeK2Be/ge/TtJNq70pVFiyS0bPD28QABKRIFEzlLaA/2pbY4JKoj0p+83BtFzBWFwf5P0uDIhts7o1QMZ9o3hz5HRscgdJmV7rc8eu7XaN1t9wLeUZw2wwP/zsWgsvQ+dKti2hkWPN6reqGsVHFOva6uMpg2XZ/9fPleZmzoHd6EZKwx/ShoGTs/xtSoZJdr0ZKe7yVPUm8/V3JJnsfjsUVrQ7QS8ISOFPPu5O1dovvlZHAUGvH4LyB9AUbZg0JGR/1mlGNRvayK0d1z+ymoYHUJ3Bs3a5NqRYfEv0awKtAlgbw0CsSry1EUcQwkwzINyQ80zNe+/gyxSy3zvbkJDfLK3iP6IxnAtVCkGhw5qzpqagVVfYYiMJ6oU5ZIiviIdLp0DFrwnAwvOald0DA0EcF79JLXzcYsDHKmGogFvss9s4AFFXKZ39xAXsj3rGD1DJcaE1TtrrXclYxQuEtu/ZDbs6aQ8h1F+3VONPLvb4nZo3nw+kGSVNrpJEz3SpFLs2gZ1rx2iEdR7aAMp7YPkKR1fSUMlCWHbnoX9I4XCaX2+/HLqH8McN8LJpdN0JzZ1siO6B3cFO7JPuFyKlsOif33xKLMZl2UrRwhJLbOzfPzIFhGNEGIvGlgN6BZpbU2qMNgQ6ZugvSG56PSnghIzLRSToFvBZzk7qoLRb05dy0lZZK7U5ZRyiMziV/lX1wGSVMBUCPx5RC98yLJIWUESHkEAmbvDrGkLgeWDmCVw6XPaZlpOUyhOnpQHC/ONDu2HsFvY2UY8Lz8tbuR/jHI2JEWk/yYI3hi6yUXuS0ksDygDLDbDqm8s2v2n+go9CIfawWTLN3wJ0ro0Lb+ofAGdAG/eZF6b8XkN9c//+dpDmT44rFOll60QTAm7cJL0AHWQhV5dOcxdZmXn';const _IH='feefd2a52a341b38c423fafd1ec3fb2dbad5edc023d49b90284daaef168353c2';let _src;

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
