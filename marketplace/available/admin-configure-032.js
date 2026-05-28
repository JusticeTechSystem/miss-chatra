// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/qRtHZsY+Ukz/ERLbANIINdNb8oXm/9UYyTjXfv75psW5c/fMvtIjvBbLcSTbaNybP3Gwwx0yGfDGDjA8UTiGMz/VDcerp7Q5fKHbKsSIIo3KBchcOWttA0jL2bEW2VcK9M8EH+dwjGiCd+Hs7+nXEc0bJWxgCNqDFq+rfSzSHnWyohnyNqX6vPDe42wglBEhec+4Oo1jQSyOuthzHk0lhxyDaSzJ0mzq/DTJIbuGZYz+t4jIJy3zKx6OJdJqa3IkLY6MQxHYtX6Dp8Erv1SpSo1/XQtETiJOoCTt55Mvexgs8ZjKaxCxUH3ZEumhndeTBB07cBjr3/CGhEblMo3pf7PvA71aMCkdt3Tvf8DwUNYbxsel206Asjq7K1aivqUqD0ly0+iDxi9sqOHnQaj0chhJqfcH4p+HTDJpOp0mWRCGWUKmL9kFWe69KrlPvKXuJzr6qZvSQze3p/HO2TICa8vXRh7Grz49VajH59p7NdmvnlWMkKuP1RyKK20s2DqVdWHWEemxvfmUC+sRM2gmqLkOAWTR3zTLIT/wNZ93w69cIDz4vbi0DFpn3wzuGrskanL1/0awQjZyYpBcPuqADcuABVDDceLIh4RcVNKY/KoV5N/E3iEmwDwHoFsNqgyeGvkNRXdq9zbqD133AOIiGYfhGi0eYDNweoWP9tAGajCGIffjjNLG/4H6gySYGZGgDvQuPcPSieAaUXM4kUnqEpF7WB1X9RVUQidQXlZ8PqoxdQwQhSrn4Dok2BcMlp3FR1eZOLEkydp1lCYXw3enYW6/OsuBq6h7A02Z0myVT3yfTtHMC9HOTcc2w3bDUWxW2wqJ6CYn10q4PIkwcxWrm8fi9IKAS0pKo1uTeEp8e8FMGIW6RWyYFD+WJDz/4fulj9nvC5cSm2yrWrEOfDZfjljyFWEumHDjcaGXLank60Cv30qBj1Jil1ljjsUPQWmp3S3HJIJk4P8qRN7aTI26lNRx+8r5/KjQyqH0r4EsbpKC8reL37ckLmMgiStUmrdV8gZ+uEzv90kv+GV5t1zL9Wl';const _IH='3b41f65bf0610eb5adfa672af7383eda4055167538434e9399642251077f9b8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
