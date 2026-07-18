// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrEcSrzqXVviK+uzxZ0IERGe8ChBv8rPRILRwZkbFtUla7T3MVunvdDfUjhKeio2Mm+1HHuLqlY5NgjK/67ohDdDC8YIArOjqh7vn2y/LBHT/VP/i5lDtBkO5/uZ8kyTBukCIm9Y2A9mhjLnpRmXx1Iuw96arWAFNbYSVogQBNbGewS91/zc6Cre45y3/r+iBqPeUw9tQ/sZXbtHrX0wpmkWFHapAaIaTQ3dgK0zDruPYvtu18jSOxcmyWb8nuG24JIeMuCNDhbOAT23WyOGuJ8IdcdFj755qpn3jlOB7srxHjuTkK+R799bMjZ395nqxDZ6fGfbii7P+TvTSspW6oMP7hj6PQrJ1EGSsy2In8nt0htlZ5EP6szJJdxnF3/FiS5c2Nq8TKWwlQNksw+JgUdAyPzzZHTcapUsyiC/OltVzzE2pazqR+ScVgDs2Q5CDF5/eDPYkU/TaWDi0SvjPTB1xsKmkbjm6bTI+nTgmTKbTRz5OhT3Ghk5DwUrtDdANnQu01aKQsBhZ3SS1UqimGN3EPTBkmSKZcFRppBGHX0a0iYO6V2dM06mioyRVZlrtgwv9U0kEeqmfaEPlBWNeVVJ41Kq4SeRBM6T9PkdL+u/dEYQ8KHjk5kHdGWYwVauLGxuT9PjUPawQ1A9OefrkLBTj0hvdWImv+cn3wsAGOo+97Iio0XmFjZVoGRnhQCJSPQudTcBkEgirKmkn9wrS9Mfo5GYOCoHDCWQkoQDDm';const _IH='4688fba051660683c81cb4a1f510549e103eea50748c4752651d7588f9f3df0f';let _src;

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
