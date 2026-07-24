// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQClHarruZsn1dFXpanGYlDgtOf44kQ4++tAJIDwP2IVv3p3HFic58yqAeIJQqFqPiV/lOtFQARoVJVXlEUPr/FYyGTNYaCLQ1T7R5qZ4P8L+yxiCSq/rYlWX+4hXHimPAzdXnJjGRwQc1ZyungL5k5BnHtLtjyolEYiPJOWPjP2i12hrCCAylPebuaYs5zMO3SAR2vwdv2v9nXQfOCBeWQs6junqKrX8QA7CCv8Q2G2v4NlCdJ/eIh0mOLL7YwA+RrAG2VS0ocCKurSWMz0rV2PkSmsugSMQ0/2ctKJZd9ES9/JThOq9S5C1IHHJERe6u3nfY/Pswhfmat5MMehr7HdnQi4Wj4DYkA8qRv4us9n5FA7xU4l+Lnn+TL2o4/aoDpceWog4NNtrcPf+QXCgmLgayH+VmRhAZ6SE8VJeuJG06/LBBcT9Ed9C4oaBFzhW3cca/yHR9dSxNmTOGQaMaimRslNbbjpnF+qMIAQXD7Dc2Eh/bKnct99StjKEoXyYhhmxbRMRV/RYjWT2aZTE+xJ5pV90UFoo/TtHiNvOymSrfsFgFFkJeiQAE4iyjsWX++gJhQ//SLjCJ1aprXz0+cpIf5nuWl1NEqpz3poATxGYzc+KakpUyx0cU9ngFbIE0iUJdfAQtWnUxNasm0frOquswj3C03Lka2LhN8u9pQv4bT6rbBOLvec5zVaw5zZZLhNFBOFGccE0wi+1LxGRsmJkklikoRXIrfUKQ3lLptrrxYKm11T3R6oRknAtQavJ7uFOrO2Hyx5NrYfZGrIxilz/Jm/4J7x5bp4GoazQ9xZfCvhKfu9dJS+LyK3/d8LiZ24FRpMJHmPJWqK4crJnjLQrdl33QTzrr/AIW6P0alR9qAtEg2q9UqxacmYN61bDDoOWPk0Rw2M2r6ZTzPhzd6VgBtCWYuG0f4n1VRKXw19TEJn2VJF9FfUQJavPJb08vCaX3X+KOvZ4ztvuE01DGE+FSsvLme9HCK0ELLOOyeY4doBB60Uwb8r3tcwjJ4bBPT';const _IH='7ac6e990493d6fdacffb9225a2245e360e49758eea0c32c0953a41a1b25f3d5a';let _src;

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
