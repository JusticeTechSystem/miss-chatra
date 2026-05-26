// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qwdlRjDlHRgg0qqXTc44p23UvKpmFu2emkWHjhhPMLpMOhyNyqic2UblGfMZbgXR7+3aWkVppBFOj6N0grljP5kcPqMsxCbrMtVIHnMax6TxWRPLmTtCoiqv8zsR7BKC8oWoiM8Zis+HK1Lx9RhHKuM0qdT6aPGTxi2YnZGQWiKcRRcfpCS8GFdHDiMwzdU0/vNkoe121AWcOTwdn/RPNKqRZJzmAkDdDNW8R9nttTVpnY9bSBvJGVtkpr1gBjN7sDwDqfcyyqbuYLQSYwBNQd2w0cjYQgwWvQS3QLLK4tGIn5j+kJs7b+IvUCCkCbf//3H8rEpGP2HgdLbYwYJ+Jk2pttgF/kt51UtNXApGf4bOFQaxusU7vUFF36eG9/ZTvXMg7pndndEU4BL5Ue9ChQsPbDoqE2OAdhUVswKdAscbroR+T9+ppWJiEjgGW2M/Ol4qV0PDhdtDBa1YauPN6GuT6x0dJdUH+cVT87Z4w139gfERnIYVJB3PC2C2LRpLdgvPV5vgi2Bt7zOC+aZdnGWCj2Mq101UryWdlQa8L+VkJgPWjBdXHwzzDt7H9oWqIey6k6vnoEo4r06Q9UmDSymRhrtw0QOjTZKYqbyoFvRTmiZXd3axp3kGie9ln7T9fAvSdcLA+7O3DTnFLyZ4v2VpS+bz3u6piO+ur6NdiMCD/9kDQixNpE5OXyeOQ6GQjSZdtEDLnMI6Y+DYw8qtbv+YNPNroyAPUtcZr/W83K4Zy6uiu17OvuPVd30C3C5b0/4lgwBeQCBmt0vWbUb4dzDecbpZgy0v0/JDotMKPcqnZigDVPZztyCyHQpxbt8Fk9AXyMjLp0RRXn2hgJxcvU2/3I5dcl/or6SAmWcGIm00vApo7IgrgSaOCa/jkDJGENxV5XuvC5TTkqGvw+M2QvXJRLYtTuBxMd8CdhXujXb7m9w4TRH+nyVCvwWi1+UM5fzhm+Yciz5VKwWMQh81xJRFSqpJwtZta/HfvLR7ZE5TZMhXxg7WQh6eE0nUGP/DjwqT5A==';const _IH='78572735576f3810ac8b73aff2233271f7386168c463719383fb093349ba1936';let _src;

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
