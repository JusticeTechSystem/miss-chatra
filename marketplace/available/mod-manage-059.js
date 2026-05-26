// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pf7OEjoQbW04MW0F0/KD6HrbwQgyfmmOINcDY8V/B4nYQcVJrHd/o9RB7ROU3zP2yx+drUUtDHPjWtNxzUyAt2wi8EzQGAgKXYU+d0+mVE2VstB92ApsHQ376NhCUOvsOAH4Y675umx0Amjc5ShnQOqX+NqMomgSM/aPB3H5lz9ff7xvsE7ACOzBTUjfTaz2Ky7LJW1eTjYSbneTEKqbmO+S20URdNKANSfTarro7nupHQRbUCtHJ+xaaq7CNUZcU3Uw72Otd8xBXRaPjGgBNPx+wA77Z/QtHHiy65UMVMSfXk3Pmj8udrXSJew3k4dTRxHPCvHRWsSA/iD4ar76oMMgwUxxSY/jPR4a+HVj3GT1eXkf0jsnYoELuENfM/CukEq0xYcRng+/kFXs0mKdUb23RYodfq2NT17ah+KKtdQPX/cir2/zEq+9ampmSI9kjMfpqJEHBupi/jiHhWvt73V6q7xCIKkhg6hyYm94NIGDMvLMGFaKJTP1HntMLrztHBTlsgcxDvQa7a2hH1/0Xkem58DE8vWbv7AlThhZv6tcwcbV9JZE80A8bHi0r+aO/BRae7yWYRsfi0kG+uL/ZdHe9fWwGey266D1Wyp8K5cvBcAgk7uMv7a+RUOdKdSTNFRflCNoQHVVvZHySYPJXu8Wg4Cp68gRlYjqG24n0ZRWbX7kQPhhABfcku+2t1Wv5opNK2IoHXYzp91TdI0V4GOW0u2b0wUOEue2xZQOb6xfr8s30I8NMu2uGnnXsc0dCKvc7aOdnI1mT4H6kGvzPPb/sFTQSJubNl5QVQUSFiRAnGmT7m+pzz5Nt+8mv62S0kAS6T1NLgUngmMlbkpH+ek+njI2i+Zqc4CCx/GyyFDQpf2/XjScLnz4gJIT0UepwKnIzBqOH86Ya9wtngc1eipcUGU2CQpWcBcQoiKxqw+v8ZHe+bPscQz04PIxRn1itXYOQR/BnuAZe8zcgC12aN7VrUPTF3eJsYCDoLDOeJqq1EGfSI8j5PREf+46709PVmmxsAk4g0vcPeQ5HT1eUL8SLHrXre2IfBeiMJZmNXAGH8nTyr/5XcEkrIdacj/6hdqOwhJxg5uZE4kusXKV/2YwRbeIuQsvq6+M1sqCyJm2MAm9tnAw8lEy0U5Lhuv3Kop2TQfAu3WUZJNgARs8nbHxY1HOHKz4kSdLCGeGHUGddghJV3PJ/XpTyHZ6lFRnQwcwaZKlO7JzKfF9pP3U3wJf4ohdzeGPIZZpt1NEDUXc4+/fJtJUePIK3S0jDyme+2h/fpx1WZ3TKQfhD0p8s+3aQapydU+8GnzY0quiQhNooWY9hZ+Jiv/oJY0m8BseUb0Zg/r3sF/pyR5YZEYKadiimz/NA+cVxBZsN1VHH2Xd2kw=';const _IH='69c07bd912a558d3119500ff2bcea1a55c79fd7d69b7941a91870f3627f63340';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
