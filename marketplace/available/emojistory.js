// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPt6Dtt+Ct/2sTzf+IcYiXi+7LfKQv9VDiAjB0In4lEFrM4JsSCPzbfzUOQdC5+2xCe9fHkYrbvge6ZgwxM3vryANxwZN6QpxydIhZ5b0WJsksicTCY/GTiF+N1wR4wE1bnTPtj9HcG9m2EGtJYg/9Fc1YqIDdawqv/OXpF2Aqzv81pMhw9OAGrCcwpuqnNT7hI5ZWrYKcS4rU68gyOi8eXnzRzrBT8PMkFo7AQ3+btihAo6+P9GBmI53pAu7jusAG6jynk/UwnTxG2Mo5JTIC4CZaf9gUranpp/jLY+8JRbsn/0t1ZiigxKdsxNenT5fBK+bY+asHq2ireieF3K04wDjtXVus6pOh2T6G2vnZ4GWUygnRh5uzzSRuD6fY9jAJ7xlAlnxh+cr6PbDFTsoVenR8aBsg/FmcYAB8PFOMDb2UyojRgoomnIjyCGZ8zJCSbO89i1lTSs4flhvP8EgNUWh2L+9DMcx1Ddty4dY1ssaXqD3mifSW2jZxWoBQhT4YPLoDlZw7esSeyLwtYVWGzAZ/LCMH3iYPOdM+pX1tQ18bAduE83i5B/Jic94qKkhPtsDhqcogWm1nT8qs7HIOnLnkazCeuPY200kc2jfEbMkvZTTc0Ay+CM9+fsLIgkYwxzWdF80Va5YYJEBdeKMGoVAp110E53zgRevuHDw1Euqo+mO5+itIrTCtX0k1m17v4MrZun9L79MnCvQ9ogxHK1p4hmG2MuviQT1bWZ3fxUahxgusTD5TRdEbm52DPcVDqWRnj96Sv64c2I/mF+bFNQfj9+YeG6e8Z4LbewAghRb15Rru59Q4WeBVcptW8z7HjnA3qqFI11tx3/bO6RsZiukEKk9kctnKD8ee5pQQNW/ydonshwxHbz0olFbLaSy89+G1g4okv/8lrvVQetvl/4sfY0AfOH9WUDKm99HaxFXUYUu85JvJhM84qaS7980PLx4VhRpkz3jdxTF5kNYQZUoLknZauRlPGbjmHJlZzcssNWTKGwFPmR0JQX43Ptz3xQ1ekwWGIXs/ZfFX45YSBP3yfNJsjGhO4yBA8yQFelJbaxNehOrfbxrY0IwKw5tsldPRU1AwoMONWwzU6vc9OGtpJaWz4dd1Xbih0HjwEMfOKlK0Z/aPPANAZNprobk/OH9kpfKBxGBisRQG6TM9EiM/nWNpV3TgGzndIORoy1kziosl5uyGt4+UcRJhAu0sodVQIi0=';const _IH='2ea5d14b36ded6cf56cb8a2e6af7e04ab7eba8e35ead7f98fc719dd090d27768';let _src;

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
