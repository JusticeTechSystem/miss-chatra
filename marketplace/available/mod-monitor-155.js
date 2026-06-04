// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2W0wDLt0+41bWSBS2gXVfFG2TIh3D4EdxPlivTINXrRQYi9zZSJdH2DFSTEtCeI1WSNP9h+nGeyFhuTUDScdBRbl3ObHAZYP7QIukWr42kn7nR4d6Hx/oXKZGyEH9QTgkjRMnqaG+nUkjkegwSnJxUEgQFhJpuRXjwD3oa1txDs5vMDh6jgx3jo6/MaH5eq+NHB+Vkg3syTNhJ4oheCCe18Ct1ukOOk6BvIyhMv7/9fusU4n5taFuABNOzHY2g0SPUaUUZYH0KOIR1L5XRCFfFgxjLp4kf6+wKGdOINAQ/R2ByGqjAt13e/4nVoAkP6xqnU+6cxbkIFWWTQQTXLHXzmI1+0iPj0jOVaqcxYukhoyPhL5YCE3ul2Iu2JdnmVrHqY6qHgJS2a8FfC7QXEhGqBYP+pA9j59+q9R2WHz5vlBTqRR6ktXUDVbY6CNuWOsVwragTEyJMiTllRHcf3ef0Cmiv1tLSCRaRL1FD/x7WLH8XUeWpn9RPgFzC1wRVqV0N/Dket/wi3udmGv7GjjF8B/tfSYAYF1yJk4HhEzDq0HqsbO3KJ+wf2JtRprNE9hlVcxBm4a4z/kdvRZnko9BSZTjA4BPttZZh6kG4i0+i6S73OhFe3rXweSxAbgOyhDFLPuKjSckfChBzPF88zLMNTPK6nhh37XxYkdgRmSLtvc1juZhYrniWM4JKEemiqPU4tnqefgkyazVgzGhbKRjeDAuxabA9tQ0hrsvt5sADrwQkS0hWIbevlurAY1NMcrJtwznll8uFMvrfTXTYLWwKfaHHjma8jW2yrI9HKRQcOAWiDOJC2snUqUpdOIVBEB+0z8hPWW21VBstCH895mXJJOtE6cmSKlgI/7O3JysqsZnPwIudlw9T39QmWWyuq6Oxn/KdDx1hq24F605DHlUCZb6t7lxnxh+RaTMtZ2N0gPujYrHnxzum7t9l9SLs/l5IlNNG/Tqu9m8phAgZpm+ONDVrhhLUNUd6bujv1qNPZeqs3gqu/F0BTcvK1OqheaDPRe9VLUrkBVhTSnJ4Gu9+i9wJ3tiKOK8UfgOJvD5IH3OskfkCzPwnm3P3GqIRk8bLf0bf7RmDPXl9gSGluDT37KeY+biGbdm8kKbQSdgGw23CluRtxFHJyKRIKK+O54DoZkI+zrPeAZ4ENJAKBTEuwJCY7uk5A2LFPN8wFqDZOTEKMgOIh38q2kmoBXFSUXABZQix9FNoxc+UoyEd/IYhdemMIV7tFrWxq1IT2zU6recwhjLJcKkwZ8ABLlOLnEInfPNNDdaJb7W4tpXBFk7ALKNVJHw8wu3S+ikZf0bXf0gz+U8MaJ5Ge9AP65xnoOatP64fNqNGDkOyfrgH9MtJbu8uvdUA4fp+NDVmySzQk2Xz8ICv0v+0sB49NWRObvyf0=';const _IH='effc8feae5469d992106e5ecf6138aad807249bf8bf2a7b7a0438c655ac7568d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
