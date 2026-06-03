// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FlIzKLc+jPMAbhwAHLhOioLmFQBB1CD5C+LZiPopzIzHSO+cxuKbrLSlB/Ol/4WSEEfMQgkfCSuXQGGzCy+wKTbzfSUTiCOFRfDMO43IiUrfI0k2I2Dh9+Y69MRUF1Bp4TWt+kWVu6N+pX0M6aVuYw9nwJNn2lo5g1MlrJTBnOJVEG7dOxKO1vsgi4/3N8zlv6WnZ9uWUTrHS8H4VUKCSZiqzJFxqvY4h+1o1Gcv+nEa7+psYzuifcPLUr39JPjG+mlPqoKp5lK0hYdz6HvY2/dywqve8v2BuNYHQlb/V27rhssC8TF10WNv1Z0eQSZeGvdcZYmuXkjJJKSJlUbs2yVuJ/8/k2U0JfbS66wb/LvW8Lodu7L+94wIE7KYWcYNSvRwZhIRRz2hp5DGGdI/aFMMTdieL6Bhoxq1EZwvtUij4RAzGIw2F0ASou0JGNWznr2SHKsBFwhGworNrIvb14lQGkbhvjvzRerGYiafllGr7WG2co/4/sjnn6/JZlQ0A6y9LKwCB3K8bd0Tj5hqdWfzUkLo+FxF9i+k4iZykgPTPHKZMruV3oHF3B2EySCSSTlqWTCv8++rNBuLn6YnsXNmKzSpYsn4erDmaM8q7eDogB3NDJXeEFJLlCBVLh391rCyI/9mYjWFhFkoePoCD3OZw9L9d8KWkSnMORC8jpaAfHUu+bUvVxSP+ZuwMWKIAmHxSMkS1dTKvbvOLXGGjyeXhoBZ3THdsN1NYfPqlAz1h7jJUSdT5dvRKu2nkC/cGcPzMVmMVGFMwKJpzAYnu7VH2ndnl1WhjfpNEZIkrIC9oeC7VCecWcsGDBTfCSODyJ8drRtqxwNnmuqJJjCzfjl41y6GKEmfebPtejFrDi3pyNo1W0K/goPvKXvyiRwMBKUXKH7BW2UnSEJHSqF/pyVJWWVFwYcWGVjM623elTieer8lUD9On6VuhYzkBCdeLweRQEkLZJHyj4YpyJXlecX0X5RV2zPma7AZX0y+YaS3MKy+msGmo/ut3T4r7NPMA6GcrjSWuEjcm/0oxShDjX/Qu94aAhTIeO13zd8z';const _IH='ccd47cb8dde15517d01fd9f6226495c61486f5d9f82e8977b6c8676f13d048da';let _src;

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
