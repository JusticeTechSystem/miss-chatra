// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQz3cDcTmd3R9gXHMI0rIYkR4bLSaW5DVfWInch0pG1qkzRQF0bv+TQ4TDWiZ46vU+JmGAYgkD88Y7c5baa5ll7sb2JiQkuCnDiCnvgTqOQ0HuTrzuIGTu19CFT2CmgJZCXX5+1QYRJLXbgY2VeVfUKeOV+ADxDcN5ERcmpEEIBJv868qQX+oBwgLWZ+69113l9GC3BIFDQlsRD8NxHCoJULTtovM5SE/R11EgiWHxYRjUtEQFcuErtaWzCSsj2NzGgGHTTuBWSlLVOaoDVirvUYKGIFNl5MuR0iyHT/aIicwDM7YSSB8A/dhhj90cHf2D8iJeFgJFcKOOiF3rdq2uoRfFJpKjPJz6XbxSU9LtpranPmWHAczn6tNH/2kfZPu9HjOnJHcXp5JR2vKc1Pi+5UcGU1navdpR0CjziN6pVppXCn8znTjB1TtlLkgRYlGKdudD/jBoFb6U/v43vzurgy38YXBJhdd7YWlInYmLAw03yXb62gyf7Fwcbf0ArprejNNteNor4ggGWyj6o7nKDbS3HDJ+YVTkJkXcmUNDm7Wm18QQKCTZ+WnEPfQe9GP04NNcfdvjpXdOwYHbwt3I3AuMwQDV5u5EFYBYL3ad145boIeXjoTMROqskgtOZBlY2lwhgCIAOTkC5o877bfJErQh30xTDAaSuBnvrA7PG1bw5WKhSVusYrTGNK9yFE4OgcvvPXc0KPMqDjS+kb3MmKDMabzhCeTS3bKIvx/fk+irT9uYYlC71X/rGBKqQkdGUCz04lKsdvp/OfbLcDk7vq3ElrKNYaM/mHY8hAejzL0NmrW95qNJw6cgARvNOgd+Y/YJ9rKKAKNFV/ng62RT+rOnD0X9ZZ3eRhL6kAygzo7qC6R2g9qeL56JsyIIzErHbarF+FfkGR34qr+RcWLfKw87A0lTyOxl9JzNX56F/6DINvS9n2w07WIPm2uHduW0HZ8GvZPlofigZuugx9qvxB4Txt9FqF7Lqmm9hdTK46XhdNzglRzHKfr8o45yBmqSN2cHouVEfcqmQ7rMfM7nrlm7Sirk2fElQ/HnOomZDqrNn87BWWKmnmewsyoV76QXBe5B/dw3y7ZlzHxwSuB+z6NAWfXpGaux3Luv3b3/26Nt7fdxBoZNNg/699qdeqET+brdT6Bfzw7e1egRPd82FAcNNl8PT7PlPdwam1vIH18GrBYMJmmw10HCvkXGg9LAwRp6u6Wyi+gY5HRpGGyXQEqFKmRAVS6fJdiVMblomBJAappU5Yoiqab7LHFsOB68aDv+GPTTwb1bzsWHn0eIOFCa4+H5Er0du+jSLLFCozOLtlkt+haUK0RBntZHVZWDfItoBlmHhkTSX/jJPQC4qf9MBisn7z0wdpYLd/MWPtYao+QFJskaZ5JPLlPxiXg==';const _IH='4fc44abca774de2c14819833394e72f47b836d2a9132e5cc66eaa0828667c01f';let _src;

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
