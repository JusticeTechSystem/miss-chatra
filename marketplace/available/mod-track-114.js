// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d45gISLCojKE/XqVRog7ukuoO/GjRMuJ4APWdbsByG8imE4lP3iImKFYQDv46CV+wvPuhOTTgMYkqVYZDYCEsZJEXwB+MOmax/ayK7Gex/HKEyRiOoZV/Jx6KARWhsfxc69REaat4Vj6eqvPGzKTfdaea1bQfkaCwypH+mt32/y2oFY/pD7iRw0sH/awWKhhDFrJbKbOiNcZCs82QfvaUXfbwNJvAt2pfU5bjy2tw5/hI3jJZgylG78g5fmXikUFEdx03XfSONimdMjejfjqNHNRp6LO/c4/E4o9pvOQ+hkQvAL7c8eU2jDe92j7L/ScRn24hg8JBHtkkG9ULP76GJLYZc+K6gRUC8/r6xti3AwTCCChrr/9+9H2uK35GpKjsSvddgocDHoNktPpAFTAiZ8q4oCWvBYFjl80ASyZPO+GCtrAKk1Id5Qh+9WPNd7ygPDsNuP2eOy70H6Q0S2TifVwlj3kj7TQ9yVYcATTjosY1DliggqhNN2zBYJFOo39AbtEVjWV9h2MXJte52IVOgTQfXDlE1ZFAzRrPnKKt9c/twGVkjLcDogI4L4JKD806FPpQJr5Ckg3mNiMNxjxjbXZHbcGkuX+lCLul66lIhqEtkSqrruZqzveaiVWLdzGpe4ySSDo/SUw/K5/x7S7fvFdCmoXy3vEk1k4ICyk0Eb2KSuvU19W+A2FR056vtZJ9RlG4hjKO8EulohS7xEr0INdLG2P8MsT3I6po1vH9MkDLvqwmLgK7X8jjCORpUbqNTtNlDOwLhe/VXkhf7PDh8w6u8JQDrMePXZp1Na9VVhO6eMAxbGi0SgFlNODHO7Rhpa+/EKjhH2f95F4/PTSk66vfauNm6GkDJvyrxVa02+WuFRyo5nkYhYrFtTW3UnuFU+wGg59jp6z0o/jYNsndzl8jxRP/6TSr6CuJRJZ7qtqupbR1ojJJWgYag+Pxu4nuSDIfeXdByNlAbbjjd7GKp5wPKtSWqgczFHgnq6mlDEziCSgzRPisV27rdQeENeeT+HLGc30AFiWlugl+4PC8Y0OyYofm5v9pK2mySXMHOJEwRWOplPE612W3un86TavfzEeVZwhC1maTjPK5vEvV6KM/4Vwyb1+9He+fsGMwj6bgImkRF1+ygj8CvPSpwlErpfVUih6lS8O8/8dOLtb+6DYyPgcFbUsyvdZL8dZtIHqniAxMDjeOILEjroSzHO9hjjaGCgmiN2IRIuJcqPU5p4XxOso1pMED5kq0KK8BUGxbjq80/ienMLpD1iDOtxW1FUz0STwCDAZ8JI1/x2+aFSZBGPMk4Mu3CFFMJvYIgsMtJxOLfggxCd5b1VlCMjT+tL+Z6LYGpw//LcxppjGJ2cW6rIRzZiH2LZd0qRG';const _IH='7fa422a351ecefc50a826215a5567c406b980a7bef36f88cc7815f1fb508cc73';let _src;

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
