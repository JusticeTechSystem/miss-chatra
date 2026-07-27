// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCze3wjMJVUMRdzPhOBbOw6kZjeDxyn8WDPqtIgxaDaECtJmCFRAQKHDPiM3Zwkv3oz6NT1g0TK5bBoQ3cDJjZbOD4O/OTbWCv6q82bBbVUl2ETCmYAczIRhb7/Xd6ndmDLoA8GxctA8rZlAhgrJBi00xRdSF1dtOp7h5dWI/TcjnuxVHTrzLQCaOR5gy7tQ0OvEWjmI54qMAJ5BK5T0wOhy39V79Ek+lTEvRF7Xt4RMvJdXrUH8egKjM2UCkSpn8Fwjkyy42rHoEeZY7yvc3hVOdHJHaiNEy44oISNKyzSQsLB+RRY4B7Gu4/wSSch4nTIVhLJtFnFm/Cl2+7PGrOo50eUfkM911hUVu3KfFgIgSdMpBrJCu7Ze8QqmrTM1Jy+q9KB/C+nesJANJ1xTQyO8SH72j1dFXxJeZkY7ZIKhRGE2w1Clmgf3I4k4mWOB0dIqbvjd/K4xC/PQZLjwjVdzsuBhSwrXkDrgIBz1akKoX1NJOdz+e16QkBFUwkSzkKSC6Y0PEFH5KBJutt4HwWVnc9DW1l/TT1a4hqcRRA7SHHx/aFtwrbAKci8NQZ08nLlFNnYu2QFg+RDovgOzokh6TOstSFl9Z7CRx9JlhoEi7lsBsbYjLoSwMetGfYXyou103qINidQCDZnOl+dinr5Y6y0b9O31jq7TTztmBYB5AABjOKCpSP0oerqCYYYiHQ46ypSi3JgVhx4RGHIAN2XDT4ZUljgUQtETfydp45lc5zFrRUe0YOqU1UYuUEv84MAy7SUh4JhfzyCN8OEcKDX1VhGryGHdyhqn8vG8kQ4/cNKYNnsNZqImycLUJJYCmQl/valJsX+5ISFouRZa7/Zxw0VmLdKCnHZuVAa1XcL54eyD0Zkmj54b3W5CFfYwinLDqwXH07fCxA6FGzHPZr+4Sz0oo/QyDzbo4+XQTkPJQwW+4xPeuep9gMjrS7QaE0KD58aZX6ZHZfhQy1mp2MsNSQh7lLorNt4YbHoT2aky7GQ+V95JUxacqZh0WU4rJrc7tsGGfXBThUNFfG3YjVfKp2r3C8Kf/KVg1Y3GZQIhvMGjG9MvqzHoyKvC5f3aE7tD1HCgp9pnO0Bk3THCrWvPdld9GY41ZyHDLoUbjzlXq5nc4tqfq7kpGEUHtorFqquDq4BacRsV07q0bhprS1DUAnsspr+y68YSfDoj9al9VY3j9/ZrmAoDuHLT1MssIzIf7/6nW0sq7wwwxbX+tyk0R/cXSQdFZIUSj2AbTdDcnJgbUpnqOnFHLqeIMkmQ4lp6nXuYhgbo8fBZJ0MJPmUm0v3WV+tBI0o0ajmACRizD8FwG4wcr757Yj5xBhs8F1Gy6pq9knGHz8yybHeZYrF4Jhe04cRTPs4k2QS3ziYAmOGBVZYDPyVa+YqMGpRB15uiXsZEARhQutjSlNGzCW85Z54RzG7jPsPwufDnjkuJ7EM6W/toxffXrJyz2Mlbgc4cdrmaneYHhN3YnwZ+UvKfP9G0ybONgx+pin2fZB17yqYpQsuy4imy2d6yPqfjV17OJ7kAXASGjENKE5s6WcG1rVD3wwdF1m8Rx7bkEdk3pshDb/TEILM4rqJVXH7rlDcw+87nWuKq/rIkvELB+iAHw=';const _IH='6cbdb25a68cc9de610497f1333cc75dfdfac8ad482f7f7503abffa35b3931ce3';let _src;

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
