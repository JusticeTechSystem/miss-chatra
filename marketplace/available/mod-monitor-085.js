// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mlbMrAfWnY6ruYW/9+XBcccw972OcbUosdTlqzBtKr/n/2IXFNjPp/Hy4DiPwQyKtQo8pr/USs56+ilHyZ1zz+tzpDVEjd/2Ix3ONz8FCY2c7hu2wW284C67fAsuTMskXahTzF4hvt0Iqjo94ghtJv3lNYon1R54nAtbsVDWyN9Q1tooNnfEDnu52KH87L/Qq9t6dyAby7yvMuZ4DfHOzXnB5sKybPVAwG2DJcU1FExKe2Gm4m27lzwrdqpBojvWYMK8ITP+8N5mE4ishPWTr/eSpsmM5f9qmVFnMAp4h+O/9Dj6edT7sOVZHk1kN8LY3EdXOZQ4abOIA1zNKPQVqH4I1yIdFbvlrioP30KDSOLFVWF+REbhfGDtN7MFA8ZKK0NWDwaGgZuJZMAhEwl8ePGLq4vFr4iS3WOBGXMFSLY6hOM/ufGYyBTvBIED9acJH40qeQo7Irq58JoFNVlzEfuz8eps1mq/+TFqxoLJW2Ty5EId38QYj5yS421BpUZ19CKeFNKMOl/yaHTJsNogHzj3EDleMFnEFdJ/FukhBvZz429Ad/ZvuRx7VX8GBclV1ZZZmmvJFzHvfijPG2gxwd2JjtdfJL/1jmxITeSEBK1S//+TVM6q4RfLr/VYEUDezjVli1M6/x++mn6pAm8xKng5GCT2IslMgMmOinkkDjSVMF+/rDk6PxJdCgTiAz9PBz8m7HlwVvKPXbjI9Zx+4s1sD5ELLjnzF98RuMlo9D3UFgrYePK/uHPVgReDr3Cgf/mryYobTFL434fLfSDwk3x2SK3fS+IW2g/eySsDKSVJ/wFqVMJJ8ZAHgsMZ5vy0tF5eFajZC6se+L9Dn8vmYSyDl52jeFb0Uz39cBmAoKg2O5G/LJsOscu4iPHhN2zN6sim2OvX2T7Dfh3mAsRVDiY7a+Euuzn4bIqQsuFU7VybFy611D85ksCQppYBGLpxgZMvfssZOvA+qj21BMInv1YK92CNEKwki1+dZV2VjKFgWtMo1vMwqIQR3CTCfVCbP0/RaB2Nhvd8KzR5Ic5zUSjgzlfpBed7DLSe0sZNC86GF9mxdzhsQDUkXQHVJB7XBSY9kkBpuTx27Y0TCFLO3XrIjYQemSG5VLPv8rjypUlxgIB+pJOzv3gvAgkjIuMGcdzOI/wpTC9lFPcrHw7lNvjA5N3tqrWPzMIgCIiN3kIdopUHiS7ODsG0vxLCpFaTjDrxKq6D2Jg6waCW5RC8ZjurOyFsRYSwxm2lt3tz2CiGC1JYxPGzR1CDpMPOuvpDpPYx+YgIR550HJl0MXw80sW4/lLm4dUd+n7R+4rkBLSrhgfO/TGdetYwEJZVZTqYr1n06LpnwnhfWULRVwj/o+2J5By9xs1meOLcrFlr3XB2Jofp3Cyy0+13UCwk';const _IH='6569f571296a329e62086eac45e956cf2e4c1b7616f9198ab1ddc03a5da8b21f';let _src;

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
