// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTou/Ec73oxOkRQVMmrpIJcigKRekHKIzCxzconFntcA8K+GxIte7KT2uzSnw1FVcxeNTwZzJEVfxFuZq+kl7dA0/WnBKYsCVrvM5Z/m0NvXCceOKvcCGMZtVcJUSJPKhqUChO3ZNKFn1fY5z5GwJ5wa5aId8ILh1BSUW8czyxNm8zLROW6T9hkeIXClCE07gyMdf4ECM5/P9F0eDLkDCiRoV4XUWcepbIYHoARg1tLw5SnCReNR15uPGgvsDhqjkdP8bYrmxTTZlWejlX9u2EN71stta7lk4C9lR5duthZ5bZl9x6DFWBRMnVO7xjd2QRX2Z0IZTxXIW3zvNnZLCSJHA3F3baqIcLw1kTaHH21rVss50ho0rqw1QnyLczWr5hZTQ3ezCB3rb69xv4xGg9YJ+gdMg63jHgQwgVUkgOuQdhoc9280QehJ+CLLzZeYnG8URWhCzdf25tsuoFO7FrzQa8p04iBG/F+1tO5sxSXfHruG7KxLpkJ4bBhkoO0stn91vtkJnvSTjjCZl+GVeV9Q+eP3n+xs82BB2vAEw+NOAECu0S9cufJlCn0Vi/g5WYxowRw3N+ln0edJGHsUkTQlgBv5rQQaV6W46/3GGIePmwh+yZeqqmb6QCJBMUuK6ifA/AhGxkNVwluPz3OEbsj1XS8AWkMiDnl94CWu72zcM3koZKdhHfh/Rb70lVZ44PQx7SoRCaHhW/cCJsp5Lu2s8/dn9zIv4OIlgDAgB6iijRMaQ==';const _IH='f98b67a8d5f6e01fe6ce96cbf22d8662310b1b458abd467247aeeb81ca8449f0';let _src;

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
