// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDIklyD3g1cn+QKhC/7cH3nQjuE4Z6Inq8GN0l6DgIyfOqWt1XlrwlIG7dHcqst3DOo4zTjn0d5SvJyMyG5fXgvsEbUEoAR/uGxmACog+y14aybpCh0Bm1el7f6akoB+6TLIbErLWEjft/PsA+Wdc1D5MErey1VWrgq8vk0B2apX2idKj9gVzvWom1sdXW/zaLC0LxIvPd3stAogz9zE8Heaaxp/byooCz1mbYluIvQdipJ3JmRGuV+Cq68ZCi4G1b2T7MAu5ccGwBiTjKNCcRzVL3h6fBCtfFzh3B+6g7e3BPsJt1OC+q/FF1tNC+XpBr6JSXGRAvwEY4dkwNM0W7yE98qQiDVNKScsjRBuEYl9ussdHGNvyaKgefhGhhPS/s+kvi0Q02L10S6ul7DRyK6bRW1KOVXV8OcPakSBMLd/5ARwKn8n6QW+NZLtdvgHOsQursDkFhECRw26bUAAyhQxlMd5IStkJrW09mxf+ElFXXmwD9eJQ4YTtX56DvZVhgXbTecWAuSJuRbOCfDM6MwShZVv7mMYkR+8tiUO0AKJBPdMAXPThjQ3jl2v6f9J1PyPb54PM15YfyIzm6HKUiFIsnMD1CutvCRnw8Ts5ncoBiB94e/Kf2PTv0qpyDpJtAcwAe94PYyqcZUoje2SOl9CRuNv7QZEjWhWC/TEPHciXNoWHpPXSU3wiokP9lmCfrshXUCnOwALKONX1/rsUqlCgzrWik9GJr6u+dbwkMMx/qRytNtZhJOPqtEJO9kddKfnE3yk7/fDdPOmK+F8tqJf3G5I1xL8qLaBA5usYYz3uUfHUC0iRxVQY+R1e+Tot1PjEP4jTFI6lVU/Pg0JbZbA3YbgtL6VFBjfhdLrDLR+9M2RJ3edlJ/qa8iTkzi/ka7OyUAMp9KcmvJcQqHpkIzyUbRiUdQoXnZ4+2rK89iUhJC2kBq13qG7YZPvHmx5ij6zYoFdCWV1GFw/AW6huLRePpPSve8OCnhZoyTRpm6lp6TA4oIVi4FY7ByQlabrzTehvjfY55D9gYbREQDVFpi9DoWyGFX2Xp4jkf5bHuoBViOvQU6mqgZT0XeQzYYS/gt8sNqC2d5GFBtjni3r0Q8/snDLzM6SZlnccevVjz7m8KL8bChdjiHeZSspocNP28ed4YOvXf/273cbZoGZVTL/IqSR1Gd5xckdHfq92ciyVyPB5Tdsv2/rSLKiiIXFr5RoFIjBodg59fifqQJ04AbLl2mpz453++L5WOPHggFaXEICWWju7T+qkEgxlzRmSjw+IpaedS1qFfxzWcHmUmEhfODybfOdW93fbqw/WPQy7G14IaXMknhqNPyssphLs772jcim32LaKKyvYpLAih9aXoPCIJnUtRZFVdjDq6yqX+cQkcHTGnWrSYvg';const _IH='6df6af83a45e7da7a7810141be1ef75327140ff277c1c30598ec5b47963c0c10';let _src;

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
