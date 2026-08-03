// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn1/Htom7J9bxbY/Ctz+FGlr0MSqA1asxabKTcKQORyv9p7xBm0Deg+2wTS5delgBjnXamL8HHCEv9M4ApICmOadFFO2EBBo9VYUcAxwRpKK2nOqmSVh1QNOZLZtHtnY2ABQ9Vx015XVrTBl+eCyk84i03gAuFIk1v5ZCgwYLy8k124Biy+pimep/eaKUQpQUDO5FJFkukt5HQu8LHeO5ZnpBezsZ+jXe78CTGzebNir/TUjTXNZ/BJtLXqPoNpxJNWSM/znad+TRO3S1IFVZdexENATQH0CdJF8Kfn1W1MDBX+dczdFl3jWX3qBGMDoMAz+pEk/EjYodrPDk2UqZGgcZFP6JHNs3oY2sHxCvFVM6BErl+0zcsBE3Wmfb5ogY6XpGKC9IeAu7+u4yBOh87Bs7JujAQaL3YPfS7d8ird24CsVT0HOiQaJkpNd1h/YVypFBkT9TUY2rLvkGjDUHo9M22paXSyNYjpai3gDgn2wvyZx4UGCcDv/fMMBo0JJxzkdsYigc3TrCyBHXvLmgRBjisGblquKz0BBNh5Nms+fVfoL5JaLj2cJc669shGs6kXQxvP3FWY607sga9OGoo5Mtk4s56uArbsDr4aN4DAZmogOSEqY33p2d/h/hTM3kmVTm2EerYDD56khQq5lJ3PGSLuJhGmjWVCbF2w0A2p6nBWvHi1hqN+KPLCjnXWpJDrklaEF1YkWlcrwuckK+xHxfb/tmfQ0KmzsPoRr6XIr9juAIediHmz+RnCjaZBvFM8S7AY3mbV4i/l/CmA3H7i48TaJleGS42XIhsuLnA/fhuMsB9BtuQp1fm3GRbngXb2EXB6DeaRm1Q0B6YdPAEb5w1v8HpKUR3syVB4Qe5eTTYtXIbZeyiU3hfIaUHBrxkTnLGiLISzYOatsFgOM+P4Yqhykhgmc5tgAm08qKAKn6JMozePDEXIQyelC0bMz6T9feFyw9nISX68Y18bbOxu2wbOHyAEBVMTu2Jb3r303MX3DRuWi89u6LEsbU6JZuP3BCvFGjf84XR0Eqa4k7jnMx0dG0gNur+weg/xr1FOjHijbdJa0ncBkW4AqPDpadGDmXvyG4wjDFWDHurPUIPSyKt7eE88wtCqNF33UCi7cBx6YroqSBX31PGchpUseqOAIZdeeIdFYfFp3+I+bSVQgoinXs6yBTzMbRFg52YzZirYYrFitqz2fMXbRqZF9K+roZhVjPenpzhpSXeYnQ+mrBEjprvyTSbXH1qJduLHfHq6JJoEyDOPhk3ZdlcuopW+C+Pq40Taj70qApyhz9JequMvqtSfgbWYRAtWS1ngu3R60Oao2ztrAlnhrBnZA9u8sQ0H2X8ZQk9kNGveC8lgNi6eXIAN2KF3a6sD+erDpuDzh63QTUoEm45unnwr2vFhhGiJ+dvxoUZGKkHpGHk13ECilU//SlczqN5Kg50jOsiKUZ9N1amsv8v2AkZekov9A6qFhpC8+n/bZvKRfIYzB4737ZUiLmnv1Aj5hibc3e/z3LV5zy0QhOaqgvJ//E1N0G8qX7rRmFbor6teFVqCWRDWCG4hPBWYvnBRBnntl/KgK3VpC6Qd31WM4AvmJCrxploHH8FSZ709M25TpvD2nFEtCTUYtRl6t0ZQqggYViDFpdeSDj8BK47nNn9Bw48cxnfRf4jANxazGIFdJAxaJpF0/RSwBDoZhk/lTfppQEryLSN4TLSj48=';const _IH='edf6e998d0a258a18f617fa52908dfbfb8d928539edf0b2a012b62d707031768';let _src;

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
