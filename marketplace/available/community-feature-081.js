// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3TdUSrnbhheMc3EjaVE+M7BlijsvnvpMQ5xhQwmrhCUhXh8qRM5zQbDqeVVR3At1gdu617rn1FfwiQWHR6DSsROJhMU0JJ1siLIXr5rZKikDJo2Ri2taFmCPzOBlVPI7Jb+1YVdnyA79A2dDo9uNPrCDZ0QX8YJF2XNS6DIc9G83LHNYKXxrZF6u3TvaA4klLbQdW9BnKj4xm8XZOgpuwA1EOsXCB2dgi40jx0zVH93dzgTgeQC/t2tUEe9Ogyb7H9tWPn1FEVOysDcGae1wcXrvcuVhe26ZFWUpgEpFnirUqTVKem7u8/WtXtb5xZ4T5BOq6L2fteckDOje04wA4zmWFHHatODl8wEu5cO3rU2w6CXT49danuSNAEylbEYuvbZ8p4WGQ+MLAuTgMVM6DKF11FAPsJw3RO6m9/LDA2lUHTl/ngTfSR91J90XHiboqk1zUCQkirEGWxCPeuVCda+D9T3H8bCB9BHDRMU7juyqTxswZEaRZsCGl4bxiNYTdLufCmZ6ygHan7MI7s9xLmPl41Qyy9prQOcy5WVLm8ldyaSI+z0JZZTCVXX5to7coR/el4A5xrisG3ZFhBFhpTVbqMnhip+vkJe8qc4Quq+dkDJUPswTd06c2Ka9MLSVCCZ2o0YY2IPPWgLrNYE34CAkQzkSCQknFOddN+wMUpouIzMqdUZUwrD0XKLcUO/J6D6fcXAJcU9uHtspHGu0AnxbUtw==';const _IH='ccad8cb86b689f77297143d3e287bce1e1a91239f17eca4d8fb228c452bc692d';let _src;

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
