// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIX8vbaZ7mIxvDuue5cKB0xB3r12az5w3hpeWfNSXmB/yLy1mUvFd5kxo8emi1aR1jfocWR00A4QLuihSBAOQYIbluo9UhMtPGxHm/OGp6bAkGpKOqFfcYXBZLbimcDZedFAu0Cw01+hgJBYwIieUUq6hRiSSFThSLRDoT+spvTE/6v1YFd8A/aYQVp48KR0Eq0RMeA/UTiC3scyn/PmbIhh10r2YeegqKDeYrM0R2jKnqnX6oykRT6Mqjo/+/6Zig0PzU4sGlIenOCgQ0db8De3dSqTeni9a0TGeIUpPJIsAu14oZ6D9C7wGcRq5PLJUSpupfD2wPGRbMcl0RNnuAb6VhjITco15PLSKpbcz9XsTg9yB7LZrIdrizTkn8KymhgX/SyBeGV25EBrvXO/MZNhtcB/qhtTdRl9w9ondi4IZlfOlkqi1SPsvDmmvOr4xD7EmDUW7RrW9MKsqKKqYnoDY+2G5j7SUmGuHBN7RpzPZuaLM9UvgaphkmSI1/sG2sGKTwZbRSHT3sTx+8Qe3sLuFgA3jdaWMnmgl9LbARukdPa+3OloDvs8QC5Gq/mrW5A7gW/yMJ+esNhElcYq5/EYzZeisakUJ1qB653bPssClM9KmQXfDnWPaL74w83FWGaDL6OlLmaImRBKbxEDokBNEWbSi9cyfPmVQMGw++GqrRL0NeeQB+uC5Q8p0y3ApEIBbcJF+MfM6udT7CXNzOKWNP65jwT5syAYWkA3ZFry8KPDshm3Djkqv+z6UCD1E6YpzYHhm9d2SqcZWZjRxRIy5gj8by2IuTzaXrgtmRu2icw741R2zMts5mMEDQ34yh1dOOqR4UjcJD4koxMPdKjqq+SrK8rF76w4zUqQFAIcM5py8x4SSa37dZapFvWB/fXp1ETOy3H4gnujizs0S42xSlGCxA6CvlmqAUcA+rqExHPiM9ICPd0DYeTVG+3WJVkmX0yVgShsMz2Ar7eWKEyPnlRhCaJEoczeg5rXg9X0JcPVLrPGmt126wMcSfIp9Y';const _IH='08fb170b20e42d9c71bc048320e38c64779f80cc5d4ce027d2e369cbf98ba18a';let _src;

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
