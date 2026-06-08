// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K+pYCzMoj2XredV0gZoAK4W8tfrc00g6ElQjQMaW7jF7A3zaWp4bqAjocukNsOx9VbQiEH7z0asykLuHRC3rR/QhIS2n7MnqEwd4r8amfghzYP6wR0ywgnfarW1SjV5M2meENHRbX86qE1+C76ijRpmQRPBlo42RpwKUuOulgAxNCAXdg+/GUQIlhq1/ny1cvnbjJNOOjf3xv9dD3iQL6nBE2JbLQn6v0EPN4NjHdelH6c1notcJTqlKYoSvKx0aIKfS5q5CLNC2CKBiMIcb5KrrrUYHPGrHFAqqU9yVdFfwK46IckHCfTF9oG4Bq8aFnCO//vhQoqyZRk382FMnvFJdMNiMlTZFRUWtRsLre613tu/HDopvUt2Ks6hsSEYPAD9igGwWw5YBhOlohvEHD6ZtzZ3kI7rVkwpbTmgkL4mJTkMJKW9tgY55aueXgl0tY6PH5QXmktjZFDStYucGywVTj5bKt0MSvV8PJyYLW+ox7u/rwDoDVH7iEWvGSLggpXKDZk+NLzpB7QHnqfCq0+tPvxRtVNm03PI8A+5pjJnytpkUzGhRpWb1bYbb3gu11nuA/VmNu1vv8yCDS01whLDrOHPJGJYlKz0DNpweTl/T8/5JXeYCeiw2Z/zRXlL2EyZ3XksUl9vtccyYvnFgbAT+YAwGz+2XysElxKNWXCw5zL3+jC+8M1+wP71KNUt0IIPekjySGeDWoSwTdsq4gl4dfA57f7KIl2O+Publs/jlfe4KpJKmi6jLE7ma58HCKoYCEYd3fZATqNTCjvq0/xVFglYh9BK5WXECX1f/NJ2o2amE6IY9BHaay30XQ1LBRVIyI0YASPmBv6SY6xxI19LvQBcGd1yiGQxWASUPxFV0/f9BWALCDg8qLTL6vfcr50YznWc+xhBj8OlWFcuZf6+7WxgaHEzz1cUiPXlwouQIhoqJdW7bmqVK+jNvdqs//dmQcgqNK7KLZ9c/qasvQjdT8Lj62LtUT4c815PAH/vgpLGiP265g7x4wvh0QakDHNgTBg==';const _IH='9491f8d205faa52a5b0227e7f77cd951a0b992ea7733cab68f4e3ca0ba55a045';let _src;

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
