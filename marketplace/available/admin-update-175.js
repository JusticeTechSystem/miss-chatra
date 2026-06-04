// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WPdOYL6diOdAy5nh9Xx8wJb0hgNfAVyICLix1TvOkxdJi8nH9AmEvzVkf7ZXw+C8PTpXrv5bG37d3o+wDzfW0fNa4D7u1VgtluFFLI01S9SpZDC8xchZNc3dJBoH5n+BBXUkKIobKij6+T5FCUMlAh895so2bbNdUQsPDIpJn8gBJc4Yzeqkp76KGxA0575FR7lJTigdEQkYXJg8/SnBnP+TWMf/0FjKYkxZJP+HazS90PUd19lgjd8CqNM7ic/PlusAwQmaX/RmOrZUa8DTSoex7/B78lnbJ8/TPxPqoKNHhE8jDBWs5KNn3jx8I6IsFhwi8v0r+KmrgcHos+rIOC7ECNAtMtnXSZVJvJvuHy4RU3l/1rwhKePSgFNyrguGvhQFX3ykau2tiVfmVJySHod9KpRjB1fWmNbMSowNz+bWkbkGap4R0m9dHyMhpAFGkwMJaaAs6eJ5vgVrwnAfgCnVE1QAaudTH8/4hudfASCXSpb+8XpB4AWU347JH+6v20jnrMfWZDTO//nZN4zVRWMyi/l+xbgZjxuix7pUMI2E6xRsUoUV4CpglaZvJaOcALj+oPIV7qGisr26iovBhvVBihGevrzlQLOu478eq4dWaWn2M96+d5n5P719zqcJRaNKY6AtUdBjLIP0mOJPsla1UcQxR1XsuIifb3iRAcuCZsGYLBYUv1ekslFQrDhUe7y5odrQnDq23J91076vNPvAgn7NRbtjozQGLteOdReBd2XXdyNXsS+FJVxUKQiQo5ao+pXYUDOtxfH0J1/ivQAaj6s5yd4Rb0Rc64nlwqMd6F3V8xkGUsuY8JCr5GnWFqi12i9yKLNKwvC7cWO0d7hSV0hKNIzGAgma1AZWHj9ZWjPMmP0STe6vKq1wypDegPj/IRGKQt9ByAlS4+o+F9SPEF+WCwuiDUNrvIB1U8eQAAD5LU1hQPYSZELzIIqLN6oYMXja4FdDj2I6c0BuF+mucWWLdhSIG4AYuiyUd6FFKF2Dnv60PwU0hP4Tar6TnA==';const _IH='6398c90657376457a16b7ff24fb357e9e3fcccf3a529287853806821df9dcbc5';let _src;

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
