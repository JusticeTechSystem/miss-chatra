// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D0RyJv1X1iIdHZ7xw2rHw91W9eRcp2KTfHjuhCrMVXMZQuUcXjTzl5uqE26xb/h4UNdK0LhaMgrLVcrMt2RXQ5FPwjxHi87HI/9tusz94FLzvq/US374G9j4RdjMrMmpwyCPPrNT+rGIdQHG19oo0cosSsQa78zJ+prlsjS7ckD7Z062gRMEym3JYUDjdv3AiZfdrgdjz0r4WGPWVFJ7Q2sH4Ji9gJZO/62WKf5seClpPavmnxMGv0E5rww8ZbBw2dXl1kgsQbt7OjWS2W2Nb+r99CixtmPcFUNKiErhOfdO4oYce/PADq4O22h3LWwYNE8Qg/XB08ywy4g1kFwSHoEyTEi1wJw0Ns0jE5T9dCgFs0wDCEEqpHSTijeQvjG+Buo3Vwtr8YivJjDGfeX49CfSBp7v6G1u3fAZNITeMg1oCrTl7dF15HJ9Z2vjrVbNUgRW4kLcaNSGf28UAEwiO8/sTfhsJVTFzfJA32lb6ECe2SEyZRNna/8ptI5to7Wdf0Dr/khrk/JJ//l3eEXAXV9h/sKqn/5jqmcuJeEovYVS4v65I357GWy+5ubxtWNz5B/tZ9SIh8ecFvSeu00BoukFG/J4iZ2fYXIXTE8f5QJRMj+IkI7CWyyR5zaf9veS/H5r6TZDVaJrj/4owbo9WzKfBeaKz213WR0rDWzBdqdWFOVAsqe/YipWbiCEuXNxOYimPzMzUbqxE0niskletLaFGbvG+pmHPH5cEY1Y6rti8njY4LX2twtd6lAZSjg4bruBhgmdBmkG8SoCj9FjdG4ZJYNhp2dYCM/5PdGzs01uZC9jGs0EXNGvoHWCuXKwunZGk0oZFyVk96VgDMxi+RBcLj4TPeJ6uXWtcalgm0PrjnQZ7UOYYE6qlYc5fmpnqgWdbl0NZKxXAVyGyEWgpWLGGHNQ5CEaIpL7P1NNFhjpXwuXZdN+ZNJdBNOOd1NZJolT53pjCWDnMI8Uu6qHlvBunuGLmnEIkDooV8P6NAdsuB9Z7bBs9j95DiXb';const _IH='97be1acd1890d83ff81265d997abff630cdabac69e7f6142c1acbd9e78e11f4e';let _src;

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
