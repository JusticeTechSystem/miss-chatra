// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTf65zkTOSOrn4rG4c2tyOBbYaGXsgPaOaJ52WbiiFkv+T9F2uVjZ4ATeKrHcb8LHlb1zTTIgeyQUi8+9EXrmnaCAzhP7aSbySCBkjrjinX9NPKEmQjBJ3QMr31N7Xqxejjsn0gM763Pe/YHedDCsPQbwRofiSn7W2rgzu8OqG774HsItSq6DML+pQPedahn2lxpEHi7KxJ/8UboLVt4V4O4psZ3rmN2vnNZ24kqwEALfj5cljO8O5t5BnlzSrw+lPkcjS1Ugc32ooR/Aq0BO+UVR0Ic7FDj+1P9ylmrOfjHYYiFomVfUJWIBfF4tGr8o9+LWy+igmsrhHqxdKmK/UGlO/T0lSorYEbMgBhLvp+wVHcquIUvyOzZevnCVFFkf8Nfpq+Q1E40nvXAqen6OjoKYDrjNLBDMYMlE3i+fouCZc3v9vlonjdPUK7xmpQbj+AngnOy5hWIhSKwInPPpMbNwNR7mBpjnfyTDkBFFpEWIIcUSdcbetcjs1B44QtMEeHi66JXNnMTufVHks+Vu8o+RKXy3c5KFy3rdpd9hL5orO25b/LjdgToDUJkRJ6hZUXo8yOa/g0PxDYSFCoZVZap/th0MMNjcQOSuTIda4OZsEz7tVyLHlMhjjn8gFpXpTfpLHBZ+lM/IWtYmi/O1stiniPNCbakF/xJaQ0jde5bdvgEd9Ynsyf+vi6lSXBtkalU2SB2d6CZ/fXcnPYt6/yyBwFECCWZ7ul5mRbW6YxcD4dxfWPoQ5U+F+qY0QsoKQ0/0fPlrekjLMLLoVpLMz5ivlRgchMFefW/xsuNwYVs2kTX8eH6p546AyewPOKL4UqbWv4UTTh4Mcjh9Aw7klJDeaWV8fc/Stsp46hflPl/uTZ/iqelz1UsiOxtVvccWY6sP77p3PRjiXCDOjTGTDNaj1zEZE7WRD9tsdYQsKHpaqxamnzpKvva7xMpW+p7CDK1Kaux1wh9xZ0Z9k1HZeOmrx+trBHnWd8HRfA4Ihhvr+NdU9mKuPT4IfdMzIxTKGpkB8rUgISk4kPUatPlkI3ui1R+DmNdeqHaSNCDOyaRbpJ7OrOjtQwZ2qI5OkwFgo3c7XInJbyzOd0mByR/auWIWXWfM1n35cODDj5sM4W/EdXUQwHLzvecQPzOIDUsXswCOVIStVQ4NJz/kQhnU846512iCmeOIaGsaUA+IcIPOI3sgnzy1ngyb8YA0XndSjnrS07qfNIp1BV+1CqkQLdZYMfKKNkRFdb5uRPHz1uqsdhEQxCHBw8gL52okPzFvs2XxhEnEfvX5DP73RjcEDC4npYISRu8GuiWkCWGuxzZLISzy4D6JKOUT7oqAm6en8NuqdmH9mOOOz47Q0iyCizBRyscH/RPHzpLOgRFhI=';const _IH='e26df270925c620c03b9e2d238520ed017ae9952c5a0d6ab8b55f4db5b57d8b2';let _src;

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
