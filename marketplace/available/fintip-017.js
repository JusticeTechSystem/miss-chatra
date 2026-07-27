// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1OToYZAhKeWzPD6zCch3dedu7IlX0bi6wzeKbkAiywzv7eQOFq4USphmUMV+xz0VoF2XJtHXl4Aicot8G18683cM/bGNVaZlg8NAAvKNwE8r9xhZLg3F7qr2tExivgxk5Oyth/iCZxsitkCXsBqA1b5gsYIF4qcICVqmVl8GWhP7RxOUSZnenuLzk+maKl5uSbJs1Wo1KP6tIzN6QS303mlsbEltcV+u5+xzS+bPKSGZO9uGXq1R3xzKk6AtVus4YlAmhJ/7k5lr+OVMP2ewW2nLUk2yxH0cCL6JdM9PHEzlf9lNcVQ/iAt5TrEEMFdtMhd8jx7sfurl6Xp7z2CIkYdfPC2EHygCXZxsOWJROSc1sPd1SOsUhX26/5hG514ZxxAWHemIkQwPNV787cQ3UakH/TWB9F5rVD5ZRnyFu7+wZGHEB9yhuTPzUD8yMu6RJXakw0xHH9A5dyMGepH6Q4foUnAT2pfs/EvbJXsPcW6ds7rJ6mal9ATFN97DwupksLHEOUb8k0Iu5pA6/9GSnrED4UsXi9LokOu5u7e4+iJalfsIUdvJ4Yf7gfOfUW2kK4wq7R0Mlngj7/ES8Z5wVr8Ns/biFPG9vpbwziLBvnm3lRc9rCHdgewWDZYI8vLxvZv5wrkMH5ss9oYhEDJGB0/fHPWk3TJnV8JELdI6Aoi/AHDu6y0puaUKxYPuyhvWDt29x4OZoKxC3t5P9yUGq1nPl9t2794QUUnH/nFSFjYmQeRD7CJS+jlRNOG1LmYazwxbJtzI+Ij01JGj4ZYZBdgO1yiDBV9/QV295f8EDX5IlrFtBckRM5Q6KrZT+5pIzSLRbzFxfGekmd2+dtzxZo++1uOKXo4W+3pEMmYMl+pxF6u9ZE0cOEvewqBW30c1gUGUQ9Zgm9r8kyuD/AwHEZ1CIuHfwsavqoNr5Ram6H1bNXRnQFZZk3xB2ffA43bP2R9e45/5Nbv2EI/id82vO8I5PwwSVkDTPx3GrxrIEp6QzNdlG4QHdVQRQhzhWN/nGGUXS0vvRuhkR6QXfk/ZMjZnH2maunwaHJwB8rX8jor5u';const _IH='5200650405757e037651e9785d7459da1b7d3314d628c9198895ef7c4e90ca37';let _src;

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
