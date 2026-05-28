// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dKHJa5MBIJWeoP1/btAyTy6M9irLT7A4Kp64UVo/qqoKlZAOeaJ1BYLP+9WYqJls+w5Ql5cL1b7z3VdDieP15ta5S0/b0FsCwJA0dcEvjdCVAqhuHujDIcJK91lmrefDL1DIitkQBx3/JYGoWJhuAxyOMUyt0Qyp8O3kewREmZyw2xSA3+cCNOj4rdEFIMmRlI+xWzyotL1uumJKsElFV/3ZOnI6igB908zs2Xm4kNfOJQvL4z71eJMv3YK/v9SZai6gRkybYVjYWzQ06+OOMPudswWMLf/c7k2cJW7C/AGlspGMwslSZDt/NTLrmLPkk3hU//Q7Fhfo20OaeIFletaxjkUqC7ojmP3t+hIDmn2Hy17VCSTzpwAUlVS/EybmhSM8N/s2OzQOCS0+pScVF1o8e9EKeeCJ5h/IBChbaTf7dMoeT4WbjblzMEJJCwLSATuIL/s0qSXsH09lO+euwbK8jqMUS3kl+GmFhe5x5LvXPmvphDsPHOlAu+dfhe8o/0pQ1rYqZsEUR8CdCy8NZwqvqHX6rYCyPkZOOJ41MKBPMlqyCKQhfR5l1GubFUX19rL+hZl7J86jX1Hcu2ArSQbMMCFRsevCfIgl3M0d0nioBK6EOoNU3H7ui52R/i7eYXhRaJaUz3LKaq87Q1tjcaq72mC7cAElyjtWzgpWCMDAJH+ZoXMVlefx3KYFoa1khwJ8reDsjX4A3eRZ/AIkIzVB1QmJgyjCIlsFzHNIM/Nqw/4bgXW+2GrqHHIoK66VmEMAl/f18msrX1I1Rl5cocFbwK7cq9rIwgInjaSEQylBE6K3mRLyPQ/6+fsHy0MA0850ZCV2qENYe9G2fS4UryzFykmQEVd++1Oc/7Dn95HyTmGUTfSIPwE15blxTmGKAMtmaIlQBPE4kx9QSQBJ3dr3/cfko5AphR77WR2qbz3rBtj2sh5OSUKYsqovGgantA2Ac7/5rsR7JGH/esFKecA6h8DuBfM2uhzex8X1RG9KzV+46h/giMAs573UBaInXKddlI11bQpd9L5eohFmwAf516034bAySeyh0pmcCcBBKD7Bo9DVgfJnFnKffmYsxmvWfNPpskUKAlcIKtSN9ha0ePwwEY0XTKUBjpkeLZbdR42c67CHJDgVPzkZPmyrbMUkxylMYZz8PXKf99BOC8Vu2Fl/duxHWo9Sdr/el4LK5JLsYDzHK8JngmMA0YrQT4TBNaBc6oo8agyZDniCgg61e3GhZokHGPcNc/15Qbljb7mpNAtkWUqAdGmR4qEY8gv3DpNBg2KonqTr4533yBvMPJqR6WOxz7FwB+IU2j/YTokFse6roNRNZci7GU2XIgrhKrTSLChHt90jWNC5jMvxdhn/cjciZIDqscFk2lVhLMM+woJV9Vp/2R/va52r9FWaoHFJn1spv+Fx';const _IH='f31f373f73e170554de4619f2bf2e993968b1bdff59ce1c11b940446c0d2ba07';let _src;

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
