// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='udTVAkOPNOjCTiYROOGey3tyY7zso2Gr5FCO66auwLP0qNPCsaZoXI00OE/WnIUDeud5R5gaIJcIsg9ew1sbhUG47H3IofWyyTWDz04Bj/p2DsFIdhA1sYlP5o+KG9OU0yYs1ApD9U0/pti7VJLVHlvyhxpI4RLgoWBOcyCRxJS9FphPyHW9zhxaEs2NGqEv5GYImsuGzrdvi131wBSXRJ7uOnwVaUawVD5mlDtjyZtjGn0/RcZ9Vtx6vGMCuPt0q7hHEN0jC/J6XUYPxQ62IuXwGZsOpsX8e9Elri4Hzp13S7jHkCMi2xnMoDIVmkkOtahU78jnPy3JQR3+gp7ogx7uJ+SNXcShKMYGQNEG4STlbf385F4i1xOAuS5DFRC5Z0wPyyDR4voBSc/He5F0i853YOGY35/JiqtipBTVL2ltjE6InAY0ryAvFqehvfuBLZUKJdo49Qa/pxuCNk84fI72gY9zAxwD/oqhO2kl7FyjIbXBMSCtmq7CTfseiXQTw0LjOWgS4o5SZBdQ9MZyc+xxxxCKi6IcNCMWScMotu1NKgjpyHVn5VnLS66txKXZEgdKV3aAlumtRMvXFoTdbXq1MfxIIdWHh52bR84Q+HH+kKdI5ip7uj2R1HlOMlQFt4rDK3vSIg1v0/U8oO7eyH4+wA7IKrhmbV8pQApZMs3HdBz/jBx8K4z7B9Ws/Q74iULamPgKhRld/nuz1RZeAWmUOnyFJGxlrgdMfXXPMf6Ez9KY82KCyeIcFMiYsbHvX2M1yF5K6Ty3SRqyKEFDzJo+sqgsXxEtqlUyqunsl9XHig/BZYIdgecXZwx4NOGCCwbFt7R6FSU8WriIzqrxvkoOhOVm0KJrYM40E2oBcs/6xOZz7+CdNd2BmcdbU1EXjJY4tOvcN/deGYP8IZj+o1ygvmlNbhME/mdF05WIawqf7zNWn7kXrrRgJkJgCRlOaNPOjLiQ4+U9btvS+Is45n+hFOExuh/vkHwXm4402DNyvWHWTeOE4La4CMa7a7cpGLTwUjRLorLHgk2f2/JkwWoJTnY/ht4RkAwJP85f';const _IH='b768639baf5104fd7941680e3f44414973957bd8e78bc04e2d64b850fc6e3c22';let _src;

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
