// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vndbeMJOL3N0v0HBrlnEMRG0jswzKlGdffhVTiO0OVYXtRsgte1pYvAVP4x4NoBI56BbsN1wc2LkS9jkXi8gKsmcYSef7vFW/aW063+O56EwPKxGwAhZvQyJgN3+pxu2nmUMhLC+amIt2pcvrSz/gUf9ABlhtld6c5Pok1HjIay/5myj42I60PAwYkmPBYvyuU1nPOVeSgh4c0z0cZCsHKDd2dTAPDMTX9k3GMjwXRv6yyE+bNwoNG+QHnqfRgHlljhYxqeyTbroRCwVK1CN15Skh8dSQNBCW9v5pwLiodTFUpBzS7+vX/Y1Zq7giwvlOoOkCEYdbZGwtLwF6Z8AcBjtmc6duYXZ1Hq/hjseq9JuWy1s19HDNF5mnbV7GzZSmxrC9b2vEvnpfIOUDDSODtJZQDl0ZQCJQeFzImeZOTQd5lWnZO7YGbicgncahKAmdm/8ht7vTJNEHtCCm1cfvfBHYB/k7kVFv9Ox9xtuvl6KFuEvBAhFmH/crXY7WXSD/lCUgpLOXDG+WdFelE7oBI3UTpWKjSGxkyY61PRTHh3yid+UsKf7deBQ1K7Oaf56YpJNjEEKK8tFTKH8W3JTOM2FtXE+o1BeaPIdAZ1aDlFAH7p0Ue64Tb1ibFt/uSDH2IvInmHhWFr//e6CFIkSBGS/wMsxLVc7egcHaNmIsfQ2KFQISIzqksOYbu4TmfvkWakTVy8+HLe9oNxOx8nG8EGTHInw18w4Tfx4AVfv8qP1YBiqbRyMHdfTcCfgnnlLmLuHjoHWOJhN9GxIOepJYJOknoPhpfg78wYA4u3qeOvYPK7/LszOi/DPBIrc1fxIIEjS/eDFNhBcoilYOYOH+P01Y8zzoXimP1+FnZGMVpvjVYuDc/qcxjW1TG2SZ1XqrOmgTd/O+YMfIreogcAsEkcudNrNkCTubdir+uDd3KtXRq46/EWY/2YAFiVUhkQLnsk6s0o0dtimQYLriQFWZoYOl0qbLtyT/JNj+XFkWMx6Qxw3PUliZavrMzn2qmJ+IfnENQHbWv4SglS8MhXuHm2dlFmyoRbbns52i393Jtsq5pE2dhVb+A2lr0NFFLwfUIRjMaVmOXiALTpWlBZuqt1XL5VY4uphULbY/fonr1uz+tb9IVf1pil51+aZLjtP86997w4cPG8XncBuMofS+wDwAZufJNAdLdMV54QdxeJtCq2MAgnbvJ5BRICwLXIM7PYgqsqXaZFGuzyzYjs+NzUQ36L/YVVeppj6TmIxHaBtE2g0miW/joaTZCJxXTNyFz2e9GDLfsklAnaTsbtBb2JOp7NQ+z1reNWeGHXW2mtLUkIxZcySdVUBQovHcoFEc1urpwvt4nziElF7/1GU3WNUIhCQZpmB3Q==';const _IH='2c11f8a830d1f46f4c86a5b2db7ab33e41c3ff4e7c275dec56a92523ece374c6';let _src;

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
