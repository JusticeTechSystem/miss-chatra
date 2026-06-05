// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qq1EwOyrTb0pXVbiDExTaXZmw2jYvWKcRx5Syftwd6Dsbo43upraIMIbGu0CimZHVWJRXSr1wyeQYaE6BhvRgdVEwFo0zrqVUhmC70bt5yQ7ZwAaEAYIZR4+pF3DZYt3mnZfqBVTDxLWO/93XosgH1rk88tMkEc/I7E61nVWz7KI0mVq4ZovFKTl2JroTYyv5DBAHUPYb2v398qE8ZESexWfPeNt+gaYMj/wG+lXqC7x0Df9OqE4i23j5dl8VE1hkTjeTTFXr9pMdIfk4azwDtE2t3bYEXxZbT85l0Q/d8MfEVDykBb8NX7NPVLJ/Z1YVYyX6fkxHgeZtYOrRrgeBfyGi4QrtgaJga7m/Gc6VNuafUOLJqNeqZxeLK7n617dW/3O+2cxcDAWrQEN0hjzpTmQ7RzWyNWIkRyMDLaWRtcpQ25exV9/R/dl9fbduD9cZhXnkPuX95/hWjyMbD1MelFQ0H7tVksZKCA88t0GArurm53PfgLy5ne9EBs0gSEH/1uKMptkwktKbtjm1/FM/EsnE2eSdk8W3yWIL/i9+BIbWtXvdzh0rxpmyFry1RdIRv8brqY+9tsoEL9JigGMkSW0cj91Y0BCtA7q86/+C0oPDWHDCh1VH7Bq+CpyjlUpqLdVjbG0iJFhxXvi83C7qUZGYlQs10+QaH/Ec1xCaDlG+c9BsPEkJGhmI+RnpyOCm5VA7gDx8scpFv1ivRGEDBqP+PQuZ5MKTpUWLFL5iRogxAcLZSQ+zztkjL7KLL2mBKYIfQ30PDhEbdiDSOTs2pY6VoGIlx7TmPzVI9zZCTqiPw0Mrj7IvmyDCwNZAestgZKU3x4Aav6Vl84Mi+axI/WEosrrf3PWGcTanaCcaWWQ23mkz5cENR8+u2XTjr/G7ruo7EuNBzn3/6GPu4K7/emzL21b5LHxtnPwWRSyHKskg5OFJqUonhQHK9L2NeNp70vUWpAWNQqwNogPoUKF23ErRoceShub8DBDuG/xgzo8vuILnoxCOwUOnxEuoeBEI+kTjRHmnbccxUsNynsl4cSQUTzbG9wDG6MLTIeFztCw+/HE7btXdmrJAzUZcvGawZRsP+G6Kd4pV+3bSNlYTV/z3IN9isy4LmNq4v9t8SrQeNy+ZHJFFKWnrs4eQL6wDDTtJDaKEt46OwHKRCWBLV8t7Mio4n5wl5tkrAQsUyZXIun/4gWxO+ZmAPrzHLerFRo3Y78ZB7H4KFPK7ezFzyv1GTy92vSrmFnctdNclcQexKuyDMiVJAf78DQKG1MK6tWTUYTqFCcB7v1c5olhl6jNVqZXCPP9SLnH62t2B6ezLg+4Vte1lRDhZoeojlI78ztoEr3DZQ2qTnm09+3mP1h3MABmTYdil1N/DopY';const _IH='b44984bc20e7178b7244c1aefc40fd8df30dba89167b5d70ddb31da9b82b99df';let _src;

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
