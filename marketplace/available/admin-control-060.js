// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O8S3qAjBBrJ5mCngzb2V202jSWuB5JHfRV5lFyoW+Nznodo4rjZkgLZulrElMfPyOIUUMpPUl9YP6L1ltQUyGdKMnSYQr4hUR6zfFoLAxv4Iux/wmlpN77U6S3/amG8bbyW1kzQpzOFMDI6vo99rk/njFZY7RNNHy3X2kthUtCVFhZGDKI+uEoLca8bh3TMhCduPBa3pNR9dZrlmlSpp2foJgfoExnbwpP0JAtyKLA83dPkeBJ+NTVINy/07/rtand2KdANILHyzj1JETB/nBuqmkfqIn6dQl1WSK+fysYqCWSB/gMjPCgNBsSpNyy/sRslnVP2hulZ774M2/iWwWFFps/1mZixaTSMAeOGtMGrViepV77iae8pFOADLyrdW5oD5XGr7RW/Do8lTtd8buWJOZkn4HCTD6s0vMF4T5vB4Izv5HUc+1SroglhfOox8hCXTtnpamCYIxBQvZ0OtmifMi/7cC9z7HVjhtHiecVfv2p/kS6Gce+q5grQ7btUYmHS3JZTtpX1F96rNHeilkgQwjNec55Hl/EnUTiykgnYLw2cdGPina9wLgZYsvR4RLV2PF2CMkQCpYuBaqAFH5pl90NOkcclfUyfG4kOwsJI4C3DunJhpnt/LRXE24t/Gwr5baEbS47uI+77Lm4H1vBf/iGOeGjA6Vst4F01VJ/l4gclc2qVrFvFWbMAgxVju+/yPsNEhDsN+nFKdkVAPhSt+01SC2ZkHBAsK/iOJose0YwE8FntBNaD6BL7yg95UJwuiDamvFdJymxon2D/AERyZaQETNpCuaXvKsbCpmeRR/safs7TEzsbbPqfjXozPpPaVvxdLsYbXUFXQXRKbZfFnd9dwwRcH05Wm/cMC+TcPNSeubsejQSI/s8thbGTbUM1w/AcIVq7KksG+NAQOYJUOvBEFtZ6W/rFfGUq0VjvGMzgFFZ/RSJVPMW01KCEnC++kV9DYwDYwCpwbXBpeMf/Fz+sVXNjoAPGE7xvKAaox0LDfdZghJxW0Kdcz3JsXdcLOrg==';const _IH='b46226c4bf065b2be63a580a12dfc24a4e0da5e6a130e06c3afebf065b98775d';let _src;

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
