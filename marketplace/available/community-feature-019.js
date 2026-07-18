// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1Cvk/h4AVKGM0zG2Dl/W9xyCN3wd4qlgfr5tc+iqBjOOeqfJ1aVtQ1y4LelnkRch9S40FSba09Xb4vBzNR+GoGMzg+HbsWtPiIHJMGIuo8jJbV/AZHmqBYrt0XutDMdnCQmzNfRCy+L0ARf+WkvAXuwhyj6s29lfW4qRh1tgtP/BWMMpzO/We4F4W5Y5laKh2OYuhTB7XD9/0BMQ7Lvz/GCqiG7h0D5XyRguqcHPyOhWYPzgrHky73UMsJDvnJlb7P3K9cBSDrkOOS/+8cvcxtcfi/Y20CCD6736wtqWC8ogDVreDtScVF8EnR6Xrz37gLHs25ZxJ4mRVhsVYxsfoPKY8sczVetrRGyo6diKJN50lJLayzG4tkizyJ32kPbhT18cLWFNARQNkXEnE4iLdqQ39nyqbxaJlejkqQ4zERSh+J8wrFIwnrDgF7cLa2F0kQ6I5huon3m/q2Mgy6Q1TMhaqPgfpI5J7kVb2W36uCe9kXLlSB+evborzwt6hC4JNpaWe3TUUsJ0IoUUsxF9X7n4rb5+YTdXhIucWJ6W0FWJijNOWZj70mSfYZriyzkc8DBLSu7q6ixEC4hqlTaqsfQJdg3VlE94X3OUWTdhzIOJnoNGrw53Btz4mVSQSyl+lOYgWua35ltFgOVDLOmMiLLdBPZ1kcHXBowSuXi78i3SPlWDsRz2OsJI3wRzu6T6IPamecYMKA1QalIlTKFlZC3yhGXSl8ZiseH5rtVuZb4OO';const _IH='f02f39b4b1aed08626674d59cbd2c8448717c90f2a1901b97609322a402297b8';let _src;

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
