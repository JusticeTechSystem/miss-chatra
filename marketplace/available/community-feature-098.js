// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwMmAkT+YWZvMPs/fEijSTZRW+t/eRbgDTn4RFjWN4/wHu1IfNJq2ZcPixtj+2ks973ZgqsQaFfuXkTiXIGihNXgKuGYQ6D5LwdrTTHkh938FRuVzlF5rKfjFogXaOwuAuSaRZo6k8VHlgrBCzf07quophVZJmuwKkVcZZw4iX2fPtWsPO1clOSFfShF3HqAyl4u7NXCo4fUpDWYpi2hJXS5xevZX9O6LCd47QMB9XH967loZ2nDFQB6dMWe7o04ou3R3/tSURxVUcHS+tGitWgAeoPYwc6b8mrzO3soovu0LSqmC1a4DWtGozMyMEN0/qgE0etejeH4ciaD47+IOnMNCxf0GcDmaud5zY5GXUODfo3t4ujeFTUFH+8/8Rha34gZPq2SZbntCEu67/lMpI0EHwKOUVcCuqUsUr49dk4jrLmbxFtDwSzwzsxca+GDDv1llSfn7/q62jnlu90+cv/Gv0b9nUlKy/NukkruPHIomGYUiVMlHWvEyRMCefVE+LvgEUOrIcEfj+XOTJn9S4Ydd2yPfWngJTv1IkbQvCHcLcfFJToe063aZUmkWbzgKRRwXp2xeRK9XIEcsqoMpYZrIfFjAvcNged0ba+f9T3bzxZJdtCDrpcKahdGgAySSzMQrDBT33kYH5Mwgj96CEcmHyseYYL+L862FjdznsLaTe9Sb4eZ8ICBTplwPyauBWHE2qwE/9P2DTf2qV0u4z3ptjOkzb6yxxM=';const _IH='341a2694a51d1d7ea50a0e5d6dd44a8f733ce5cece2d42d046c24df7c3f7b5e7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
