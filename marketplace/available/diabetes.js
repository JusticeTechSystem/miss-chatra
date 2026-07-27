// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHJt1oh8Jb2a92H7FYSA0exizYTrffskPyLYNuH0Y0uryYqNCk9DynZlS4W27J3ip6BSxTaNrfsgBoEZR4EoEctGhe+EAiopDvYb/3QE1uST96yFGlqRbc/bHN51kkCkLaH7jOtI/vHsLyJuAhgfITvEooDPmDGYlsEV+1oDk/Ek2aXmtceYsE2bbG57Cm52Qsrs/dHhiIT2n0GvFEP4rsmUUL9P2CenqNDgMog2EC3Rn9Q7RtxpJ5LxKLdZTF+0e8tsZ8kiNo99pcZo3nTRro421fzf86DrPdkhEFFKs/XaKsaMYOLiYaVHAVJQDWYJrxAHkbFdwwUr3EvZHXwiZmpttQa5Dw6EJtjr8DllS4rNwu5WEHyr8V7pbLlFN6jbAPreEp6e4ZVOkCZDPAKnt7pFtQsUfkThvWaj9qzBmkq62MXqx0Ku7jWURDHdWL3PL09Lfvbv3ZVDY0OURE/ce4WzLHNym45UMHvNtVy89cPwwAAaommVEwg/4295EZjje8PiT0dKrABGPZfRXPQqn6KN+1yff0KiQwcYE6uN66s4RSKp3/slAijGfcOg//h/Ghk8/QLxanc95/guGIOSOr6M/8uRjXmj2WAWlBiGpqoIQKZa5W09x4aBTrlP+sPj8pD5BNpr+KuowhG8Khpdi3YUiozPgOUsDxa2KODKHrwzeB+hef6ybD/plUxsWp4XwKemigbbRd4dnDoBPMRDFudIFfLjcoyJk+ONFyqpH+vvrNfkWtbbMM2Ogbg/m2cLqgGOXIxDoMtW7lkynAtrBLRLMcw+WfnOakF8fuDBJY3NRrSjqPO2Y1MBEgut2iAmcJuk5hxSkaKVPYvABYUWOZoz2OtVJO+uiyTp5HzXSVnSfEx6nD/Y/Sffi5v++RSeWFyxfevwNikGrhdoU5npSpfMckQfNZIuSefDsXJssx63IxNetYy7S5dsk/mT5W5u5u0ByXLHq+lLNqmS7fDJ3+mgA+Uz0riQW/PyjYhw04ejYtJen1KQwT1ZseONc9CzNLcWzEIkEx4auytQTb96zSyfkdP+hV6tlBoI23EgfT1MNOxqRbo0mxoC0pYBhN5RfD20ZWDl2tMGiGVeNNuymfYmqBm1hYC8Ppwcyhiez+wW83DvKLLCwc8cgQ4cezwGB7Z6U+NMcHEmM/JeIvQrNoc+l2J4M5IZBre1gyyclhdHifwL7nfql839KFSHvtr8vzZA==';const _IH='75080f1ba6f817fe97a4051d9dab9f1eb7bba23a677bb2d8bf55884ad27fef69';let _src;

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
