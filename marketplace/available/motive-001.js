// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mrraEBVmdFFUolLbEEi9/+lE68N4nGWTCnHgCyQ4vPwx1YjebfUQmRL3ixwm3+r14L0/vBg8PdkN40YANnJ86bXsJksmh6/mdJ7VxCzn/rE0Rb+8+9Y1KnyKPP5tN83svbSPuwUEqV6w3hzu0zm2amysyFbyuln1xq/y1qWDgd+iU4/vzWhbEvTNjEP8QnAraLe06tPV+xy7x9vi+hCvfWqyKOsN9gokojXO/Hx0KZ+NhvRNSTusLQyXK5dJUmmT1Bq7rzci/d9LHHrCmAPGMwDl11Uenz6xcTHKSgvVSrjTJzMTxIrr+OSNYZrmnReVwWtRqC6SyQlnZWToQVdTnyiKVGREjbjR1/jumgLhAtDaKuyV1mxyPqnwLlHU8/JWaE8m+pYndgab8OaulWJuP/yKSQ6pY6/KdXEa4Xll5c0UYpofw9wGEyX2IqOH9LH8fr72LGoNQx+f62VZTb0e4nwC6DzPW9QbQ/a6s/lLhUzmsT4QAVVg+5N8P9PSaakYn7Wq1RkW/JkSYV7vEqskxuRzVUehh2/2ofDXFb1YyN+unCanh6gJg6bIGJQy9EPoBzQjSHfb4F1QjDIKN8KQQU0QnQzrHBGnqgf3AE4bCFylyezJ74cyo+5wD1NdVuviyKPFxD7wuTAdGJqyQYknoeKjrxFC4q1jubSbFogZLDByDEiUvmEg14qc8J8Vo8l3xeaL8BQjfousaQSCwkmuHTWQXdLe8a7FJHtQ7Q0QITbL8cvC/hgDRfitTvhl9tJ7gCfiboDu9Lh0WRBfW9zEqEeWbnDpR1eBPsAH2nvv7GZtrSqU9m3gYEo4aod0jsGRoCaFOB/0bHFt2d5ZkUl+EWRSQHNTGg3XfatjZes2AFCQv/Lz+CeqhAuyX/qHdbrynHAOIJ4CSasTk+Ej1uRBjZXtkYAuX+TBknK/0ju+864UWw/F0DXNeBAjdygpqf3+CULt2UtQw7oo+Al1nble4nSx/6mNkpOPVFwexE1Os9MJkKZ3XPz1xB5bekIfHt8/mX56xIxzrOO8lQ2/E5Q=';const _IH='dd637465a725dc8db197afb1a31255e5572f54583549a51b3783d5c0872939f4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
