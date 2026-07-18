// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrGcT28Q4gznsRCb514s1RDoDvez56JB7hXfd1qWsoWYlTOamaLfF6cOXDkaOhUmaS4tkAObbpkrmi192f0hFSe7FpytmVuylVHl+rBsQmeApgxSvf3BuShQU8+J6GAta4j1Iv73j0UvuTcXMqucUjUbj0OTg04MBSV8DM9desNuwCzJJHpZ6Uhgev57gqqQx2MmbeOPvZv9BWLZM2mV423hRkqJpc9kCIgyg9fbIJ2gcJUt5ysFi9QZ4/UIbXKL3UlWMHvm2YF18nj/1Bm245ZZWqKjgrdtD//8kCgxM0u1WowxTBC6jMM0C8HN+zzzRDseFpDMvScTy434s6ec0Ea2FOwxwlFfpDP1e30kLVkBao0J7NQyGlIGf5MO2MPIz8XoitxvfkO4YmJaM51iZNn+vb1Sp6kQW5HfI5x44NTYJzevVdNVpZRt/ETy9ORacGbDkIa4tdQ1D7Spj138C4YpWBoJGw6m7MEv/7hXc11htQnGmpqUdha37dXSGcCvyworbXsXfTFImN3DxQhlFItXHa2KShRc4HijBAw8QM1zjjsZ1u2JSPwO9GYHRWSwbUTreR28jswDR3U2EUGuhNPIfF+7fcRhTB8bD4xTCowR8tJv5TA/QD056AzpB0ECd974HaSDLcRmqyfkfCuXKsrAcHBYcCDtihEFiXKFMZYOwrjuHXTbeD7F42g/xKTI3hXWaz65XYeloeC64EuYJd/WqcRmWpNb/oksR21xbo8ysNpLw1B3pA4ya9M5P0q6A7y6G8aT4z2x6hUP9SPf2Ohq6vj57d8VjFVnDQYf3r1293LbpUmcczBXu+ydoeN/uOCxUiLwNSi6z5ytbgDq1pW7el4i9Rs/Mw5r5yJ+vQMHEoiQ0gW8ct7B0MkhdZbNbWlGCXkfj6g+iaFwnFWw69dErOG5YNc/mlGo5TSkOoXwAu1A+TUh4LqdYJAgC2BKgeqN16F9/EzW+QvWubfTf7DF31VCGZMl6X3XjDG42smRPgi6E0msNGhd8n6i66kQWBz3ixvwMZXe1XFB9M1tLJf6hQEN0smFr6ofc36ylsuUw2AUWtVpicj4oR3hit9yyuZ0hDBZPQP0ZRIDkEq2uLALqDEIbYN9VIyEmmAG7XFt3s7thEs8by3UhTKCifWi6SznyELGSlOLx3bDkroffCMcntIoF3XL2WHg+hpoL7O6/i3APYrNGYzbXcVxKj9EIPchnptpJEHywfVP5k3apJuMO5yQieBpe2eQX3mU2id293VcHLZe7kMKodNAbxy9GiT8XppNy7kdSDSD8g2NM9gEdfexYitMrgoP6OT9lD/9eSjzSSgIHkFk9bHhp0GjjN1+bdezlNCYhAgBhCzi5dZE2TxexYq532ar0OAQ1+YsujFRzC30jeIlSE/N2s8yfpRJAl59Wz3hfLUSz8/429uLb7UOfSydCV1ZcHviZ51vyUvw/rXPax2yblptKGoaYak989sYfDwNceKISUfNA/aWOJSzG8DnOJ2eEYJz44xoEWXh9lzNT7HUGTdPJjz8EVzzMjTlzmy6jGNuA=';const _IH='4cc1dfe09b59e5e3580a27b3eff03148c26604496dfc4896422dc11a97922382';let _src;

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
