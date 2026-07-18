// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMK1RrGW1VhpUCxT+BCRcCaAzew3xIj+s6aefxrb2h8dlP4tRaQaG/0uTqpZ4T3NrS/4wTRh+cQzim7+NCTRAedGNHisjIhKNZ2M48kiRaORqJoV9c/ZiBaxpJMslT9zgWZfolFwD14n8LgLiHihRADaHq+CeXeqkKwbFTyv6oC4WwBCuTwihYNDGOnMwdXFsiz10mAvnIYltwuIq8BBjJbxX9ojkR1hsczzggUojj9oR4aNYYGw1K7rWK1oECRTt02HWb05IIif0gNGzgdfB7SxTNxZ7JV4SFe60X851C78v7eEmz6xEpBjnz3miakAB8Qlz88IL7/Ypk0fyO4hU/kQ3OZNSTTJHLumPTex5Ew/JWccIIXYCz+CdOImOAkOfqUgbatNSxqNrbVcOyVHjMGP5fQD+nZeQ9/+4G2q8oc3QIQH66sWvScHLGZtwE5CEESfS/H77XqIxgq0eDIdPkmu4bwiY8eptWTRQFGMuV3foaTAj81atKCsw1oaebxUglQVifb1IqLMlLL1LwJXHgyspOntJ2ePtRUA95KnXvJc1DBMe7nbbA9OXcvKn/eJrzL2hOWRrt5JvQHd8W5KJmJe29bLHzuPSu98LZY0kG1nw/GFKSAsafSB4l2cqQC2wvw3QnbQDrosucShF/WBWLsey9J39xVtWSc18gUyMBvmj2sljC3CCvEAs3LzvAkdpwSwRc6lYFYZSECy0h2yQaSvugnedB0cCu3WT+T7DmIw/CkO1fqm0AHLLIgnZYfaS3Tvtoe57Zd3N9SUStslx5zPjWoUMNDGXiz0EbAYRJ0dEtsr/KF0ItgHHHOZbb0mQMXIrJUqjdzuKvfRIqA4J4GuX4b+Hy7OPtQN5GiQz0zp/VNsBzHlpQZcxfSfd2HQSfPrRisQYQ342S8mXYhiXXPpx+zF9lUbnm77zEml/lyG+9rdfW5oA8JEuGoeqRPzl/ayNIX6SoQsmvz/QwgpbuH+7HD7TvaY8RURyxAc+2QKyQStKi3ur16SB/R8RZnHuXGTKbYBfiHVKLF6tVykZkqzAV7wk4aMpeLTpv5YB1xQ2a9lwBGGR4FfEQmONFvoi0lzzSZCai3V8s+4xUmEbDpO5dcivDwraeI82SqSZwvJb2oDsoiq9LK2u2CHMJoEcjg4xSslddkIZc8xZFpzBxDYf8kL0Qr3enfRDQc2gd2KPRciZ15ESHYP//yaHiG09tujvgU2lQXYxAsaAEeJghPy8tA6ROjXu+OF2uNOUQW+GjCqvCTt9bNHJG/6iREfEOOCv/Li+iQkbfiiz555+S6MJgLTT2uxWZPFOLZVNwcnvknuuIUyvvlN5GGBhxSZsouvTXLGFnIRfbayRo9s0akBjEQWl9oblpgCVB70hiEFctvy7pszgS';const _IH='627405737f8a063c2d02db1848ed6a1673e8ccc31ae79f7f9b0000b5b7f272fd';let _src;

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
