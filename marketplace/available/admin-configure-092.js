// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ED+4uy8ymlulu7xfbRi/8RP0YgAtonHTxjAbztm06xWD2sHmO3L+uYiB/EDkdydA44O0EBBqeOj4z8dqL8zX/bqWDjTQWzVUJb6OkpewHb3OEtvb50XYJ7qsk9CJCztI4B/mYjS3iV1iNdFQMIak8tBpPApc244igUaNyqr+eQWmSKvDgsdhTHDuI/uPNkit3p9eF+fUlaIwuXZAJyDkXHBzw5NUIEsg0Ts+QzG5JpnUd8UMBA5HHAERwa1LuRxsHAOVK3xQW+xN74OUPSLRMFKx1gke0NSVAd/lx3m2Fio5qvRWatcH/2wA0fPpI62GhRok6gBoVi3xyLsy7kyWfRqcHkQne6uKmz1g5PeTkyl746VGDswc96T1yRZt9ZAl1Nqdi6A1zgHu0+CTadQftSdKXhjr4GEsezvkTWVIcrCRmn69OEcrE1BNPBoEmHdmvSPJVjBWKR/Sv3kkV9mGSipBN2ddrrH7xmuz3DiJj3vmPp7eC5BzYNpNxXzO/RoCM4ZuaZ0qnhmGBoCe7wRWmL8Omxz3sgUfOpDxRR1cCBYI9EWLkVUBYGxQPYRBtry6GgjWd0FuYqQGQVHM2nPHdL+3R7/A0nbcOlc5PlhS1I8XdHCL8zma2o7AGoAV+ubIl/MERVnmOOBK2cpn0FuNUrFEnQ8VoldR2nHjQU835+wa26We9yR3CTXYWJn2IHqOTEGgXlYHXoBZmUW+MTcEJM58xZ1GGjyY+Lqh5HznOY70V6IBlrUoYm0h43mN2U9S3LibrGv4ul8Sa00NSuSWsk6zB+kib/aD7jrY5v/56AB/OFQJ+xeWmMNg8PSPinE9zywvYwcSu8uETptE58du2jt9kxNgx9ztxOy27MN8K3t3n9r5Z23NZVU0FaeOEZwtD5zx3eH91j7PVgIJTvN+AKujWkKqnF4gAw+9quYp2+o0fGkt16RmEz0YOhEu4UVlZfbdaWjQqaMCtWPHf20hYqhpyx2y/Nm1YwmWf5+q2Pa+Cdmi4nuJk83UiIZJoPg6o0wAHbE2OWEApa9v2A/eAwb8';const _IH='81dbb39c5998037c7956e6e670809283a9be182ded41c4442396b13e4fa749d6';let _src;

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
