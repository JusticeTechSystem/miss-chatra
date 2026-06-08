// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eELICTUmJY7HvpM0RdC/r2dT1SQVKAYxVnXPDIZoE5xhYk0Lx1QjJMLJ+NFv5iE59eTXCn/fmEm5HkUhoLqfEyxv5oFlWz2VeQlHPwhPfo5qA5uEOQOzvfbOtjMMGJEwV0vORd7t7qFniEhl/2sSRxEwv8ulaBq15aFbzOX13DhbLDFf9SPrj6Uy9TpjvKcaDc1vhVpXXjPoKE+DdGCgfwihue9SyTGV8/uKhDaLd/iWi6IkaNjpOc+nTXXR4FxFOtcAdX9E41aoAW8/HNzIcrUThiU5+DkG8/ZtdK96+pjOl7SXHn8ghuBzggE+TTnaxxJ7ToxYz2l0oIGpUMdRqEi1lCbibT/JGV26RzC/BdLbcYaII1YQufm1uGmrEZZkAIOAlYD8vpRWQGavlyWtuiS4PsjZLN3Cn9KtGB5xXNdvkHjgQCq04EoFR3DOQ+IbEhU0exi7ilzaCZuBxAR3DgdslbZsSo4QqeUntiBmRv3p4EuUVNBm6WNVrLUI17ZUf5ODopzThfY3RYr1Jq5HWCLXX1pnGCC0gqGzEeW4VPDTnXPoNMFuKD5QTB6UnTaUyzd1Ghspxdu2r88RnWIm3BJgD3SeMHJklj1PJ6o3s5Y0oGnBlT3bxEJ2mR0/twjxFs8jD5c556qRyY5Y0O9qv/50/T56C4ko/XhmPgC6ne9aKaHGfjBGrMH3KRCYUAaP0JOotN4uqg/nnfa7Zdv3K8bhj/teiaNIsa8prjAgnI9wfuG1o5NDGur6OACu4KCBO9pIL73lXTkqt1YQyoQ9taOZ6DMRVRJozyAXdTq0H6hTM3dyl5xm5EQqn6ki47GaK5deUDHu81TCNT3BRp5HdNCGe2ojJId/CiNUp5p5mU1txF5H2zEYGCaw+J2/lI6cBs9mrRfOmf1WefOil2+i58zx6CnnOfpM8gUo/iSmwu9lYz0iVOi6sD2QjZwsxwmer3BZKYWV3NH2+35zG0uIt2CTzZrt/mNraAmESPk1/14VCOB3FuYOlPfjl8lo8tjnfoYhWQ==';const _IH='5430c7e139485d076def757c59c20fca26a73dccd86f2211c9445f63a1fa3be7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
