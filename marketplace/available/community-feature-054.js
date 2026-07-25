// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+FygTiOa7+SD7tup1xb0A6RvCTcjcoBZFm8nTWHAmnjlURFczO7iX0ZpUKYLb9jRP+RBrsaE3tSaXV+eD9/Za9urReY3mWjm8ca7QjlMOmQY79bTL1DK9TsEJZH+StRTa2lk6CebCzcvWy6UoEqZR4DASG2CzVENT5EUen76jbK6N//ke7mFr0DWozUCgYbk41agdFxtCvx04X5Cf7UQz+R/MnPqfgtviyfYsHAAiCWLPUVzFSLtM7tTouuL2vMAPuj172hcdL7rBkAMkZ+46zNGvG1O3SRNug6SdyuCXi4N0dwdSq+3up5zX/vQ3dT6SdRVFaYyJiLPd6/Gz6xkL8wOQvij5PPzSs9Ph8F4o+A2pcKsrxU61PK9iHZyTaYGOx+l//Kw7li0S+yM/17+wxgXC6INYCQoP6L7iqlcBaY7De7dKld/xilhFZrQYVgtDPvARStv+NpeRJW3MQ/DmiKiGZcdR3f6a6ru6XgA8U7OMBlIvFlHxpNKnSHFClFYxUeOO3NOyoM6F7JrZYjz2iuGeLDqIf/+qyymkD5dKcw6gcLaRI4L0QCijumR4hvkE5lZOhJCF7tcYEjK2jtFG1KUG8Ket+mht3WRh8W4cUr27y75Y6lAUKd4FrdkdVjZWbyzu7aGicWHcdVpdEkLxcEXGcC49w1Ui0xqhqCRr3A+1sXu7UJULF5DVGsDnGw7+T5NlZJF1b38HcWlVGs+fDx04JBp3swNgxicFr/49iAhM';const _IH='5f826fce541a1cf5d48fb80ebd37824716d569726fe5a2ee2bf9f4038bcd8f57';let _src;

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
