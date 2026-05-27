// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yNbP4OOvDrHy/Fb8+QGVIdqKehNg6CewijOihUKdcBXrRhC3yPekN4FMbhuKem6ulgIbc4DF+7w6FV8wcvA8IXlUN+EASnav6NnK+6pK6bkTsjuGBaspZWmMqTn8GXQvWZYZBvovzl401iABLi69BoNv4DWUml+Vscdh0ChMS3YTEAFcOC1EMSIO+VZhiYNzUQ4M42kDWRlqKbyQdQB1cbtOrzav4bo/lp+3et10xTuOPQT0iVTE6o9iClZQSEkp+21MRBFlSqwWHwZcqXIm8tzxMf30ZIEtC75CxZE3D9mmly4JXBuSe+z/qLrflBeKmTQUOwBpBD7mKh7uGzB08y29I7kTaJayVKdU3TBoTeDCNYAWglOnvRm4bcOde5nwIR/DXhOkR/MhSV6r8OB1QU48gqc2UguLyE5Inh+aNx8EODsOvLprElmYdn1wqjVrHzdLUSLiW5zXENxsADp1pe5VlUUjdtVpHU6/QO87MhsRG8v1PkAoaQi+O+6KmCI1ToRhkMu9uc0i3hMpRDqSNG3jTIx1+Y9KTKS/CrWBZhqYNwsHwD5pu1H9hLuIxE5TbLMNOyzPHGabJVSUcZ2jWb2BCQxkvm2EcdbX0HtRlMQWkuyp+40YuRsOh+l6K7+e90Sk1Uxbecyi/V4hUeJpg6xcuISzG4s4O3OwgIORxCDeeG77hCh8vNr+WME1ZpGTQFerX3ICWfoE6tyTVlYrVOuTgbzzct/NhGAHIwm9Iw9fLg==';const _IH='564654403c23861d7d61731380de8e6e5c36742104fe3a6c08164486d52623dc';let _src;

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
