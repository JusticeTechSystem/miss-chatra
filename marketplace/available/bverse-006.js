// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZE4VwFi4f/VH+J3YJCRq7xUcIRLzYH86tb/wp9mzg47utlYibgh2g7e7oDcJv9DcOLzTVicN/bfbD+Ode3Ryny8FtIhjUxhXz3UBcsDNEWIeX6UJ/ply2nbG6BeYW7NzML05A94mRu3YRbEFiY584tuDhwDONBuM9R6IvXWXChv4MS5bEJJrMQv1EIep6BlYM7jSLPAtb0C9ZCqZtgmwMW6mkcDbToW9B8HGfkkGHhTKo92vXq+G65WtMnkoTSX1TbBWL4DntmHCvgFPeVByt3IkRGJMLR7QPJZBc+Qa9G+CBPaOadg41T9BVziPAPhgvTkWdt2ZdkH0nQSb28nNXUhKh6bymGg1AMyKSymEIEkNeC8rWf2qDmQUYpZ4dPsPRV1yBMWBZC8GZJ3gtxl2Wy1woZSdwZ26pxgcA9Zzy4L3TRHAKfZzAzAiz4drVUIMjIOuZVSCXuQHPtCkFzybBdrNo+WUahsaXPpZBdy+3a3yAjPUYJL63c+Ce77ZOd513Ul26tdcRpRdIpXYUnE8cctLv+sFSC5hpyKVMjZTVp592wzRVWrSqzYUNY4ct5FnqOI2SRS3ZB11TAnsrRVB7crUvPgtkjS9l9j6I7SRVqNAn4+iFDCFg4s7H9xfrL2CSpOAGt0iIJSN4EQ7/KalFQNEqYsJ5TyJGOHEj/g96TPSJaDd7Rt3Q==';const _IH='c9a487c90136c3d943f60601dbf701765dc6b02cd7f846494b5aac7dc1536757';let _src;

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
