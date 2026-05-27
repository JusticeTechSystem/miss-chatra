// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T6qJtMddfnIKHAUn5DSEMd1y52FLlWLUPtXTzWjEApkUK5h1MptvaTDU7ZkJQXqzzEHR17mkxqhR/7/lJz5ghNlTLCxGXlkhPrEi1/4+3/k26ForIriJ7ELHEpqhi+noyMMIiTRECuUeyd4HqjoYvh+rFwoA4jIGVfzfIfKxqfDgvCfG5vbkxIxjkUPiJZ76FqM5iESJ6zHt7j1zLU+57OTFhYQbPYgrFlb46gzj3YpGJYQpD2Y4lC/OqcfiTuld9gtzrzieoXRi7Ng7ZxeaINd2Y4BAmXAWJxX/78BJ4qpQImtFmy1Pr4v2G86xxvDFDWeosLhH+hQYK7RnJEUg5kQIf3Xo8ndd/jk5FlBcNvMbiWVIGUA3GV/Z3lLBgRcqMSYMPk1E+OtlCzpseSCSFfbRFOYbLDhHSq+IhQeN8EfWq1J4pY+7F+TlY7uEAjGuw9Uz1NLHjmBJE8UJMULE780z9lOq7yQSSRTKOqaG3iIzDF4OAZGmheH7fKY8K2RUumNs08IKAAhBhRIIKSz0Ki+AOvOshh1lNm/L+WWDbfYAedLyoxXtHNb/mAdbUtjHEmxu5QayQmVm799KnABhENIwPxcr0k6L7UlKYRv4cbHlV5dGdRn1vOpx5lfJ1pOfbmpSu6203sNr0yp7GqkuP9BTPVMIOzU+Rmc7DjOxVBxbWIlS1ymIJw2xLLLMR+5pIWchl+QO4C/Qs3BvFTC9GBeuIYcIRAPQgcjK8Ti3xtVTvsyEV4dDIYnMazTrtqMM5tfX51t2YAf7U83X0ezzn1J5mcGXQ/VFXm2+82crGXCQ/Y5vvUwJZPe82be7U7mX3tWHa1DHwcW0wVvnpGoVjReKXGbknuPpuOGlHUenN0c0FD4HJVHTE2ph10iOkqc211oUkRMK15j6jHCc+caDS9WB9Ktb5PMh2up4ayipxHe5lX+MS9jYyK5PBmgrz0iq6rc+0TeEQRemyeSlZtXVyybJXHh2EYJpYkpNQWn+G9cT+CvaOXQy5fz+ewKGVrPKKpm1fy58PYAiX56spH7swTy9doRcwUOTQj1HCYbp6rD3TgkYrmQ27hA1ZBQFuB+RwmRkbv8zc7ouXh5d7LuuJzWAGw7rbUoG2stLmEEQj36TGvCqcgXMNtzURqAJzyWE2vXiWO18jagQUUq7EC257GwOeUbb5ml/ECIFYQlez8ZxsFa5TAz1YICpxnSoYaWHSCF3Jwx6ZJ8lCy0RMd9YAzs8WnVUbWa4AFVHThqhspUhoDMs7OQ4bQg5HNZzVuvhMsDyBFsAjDm9S8fj7wqFUtV8zeYLJ2Meu/SHke25jHMicR5vNaZL3fc0OyX1IkTAnZN7ZQYid+V0qZ5RUvoh9Lscmn3bAdwXl21A31RDvxJVGbbPHVDJtA==';const _IH='993f89fffa80535b1026cb04a93ba0ee74cae83e82da82f52e6c3a464aad27ef';let _src;

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
