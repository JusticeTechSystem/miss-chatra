// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qE6qGGURfbqOf0i0ll0A6xPXj1UsFIuXAU7m/w8uuY+6ZcCpvNFC+fHBysXOe+CmL2XgmRDhK2ZWjqVxrwwMQCxFcyPeP5TEQM9i8EQYZh4S+MgdcA/dC/fkkppp4eQpcbdPYH+x+x1PKxZ+qM8khitLuJRbybvZdFDX/pSO+e6PPGmX5YaRNxmEWn3H6A+85FBNqjxydDMvPc1nPxNoHFtbXpMO/fxvAFRBQ1EpFGsLBULGNqwJ+HwyVEK80VRgjwcOyCDMXPASqO6Hgm3TmRp6LuFmCbbxnc81/R5l5nW/HogqXxFTeEdzQ0UllRY1G/+jZwq7T2qls2Dx5f8IRNFpDmta4F0yooRLcNyPSkIZFs3L5XRi8hVhS3YT5kTKzV9r0eze7e+uIH31e+lNvrC5dBlY6Da1zQrV6syX3FcGlDxI2enqKfJHrY0dO+UItTvBUIegjsVms6dvuBtVAj/ijHrN6zgHTDkJO1R+zTbdrMCB+Ol4GEKz2VGju9vuRUdPePpQa/h8t3aoYfEANJK4STot/JPgtzF2o4Y23TG6Ww+H/vStTLCgofJKGW+qgm9M3IZ3a6jZoquBqYYsZsxF+U/LKHqqbL5CFjXsBCwzo0FxrhesTfJ7Yx+v2cfM7n+IW1GMguSu1/PeZSFDyyDXz7TPmfNGvc6Lw4oKAOx5A1sZpcDAOuE/vuTb0pjmo/xZUhrtxu0JG3hItxbTewr9uZomqULFizj9AD77x0ohK08bvB8vBUSJ8NvkI4NrD2NM831oXUHcy3aM16T0Ke6+YBnTyZP3xbLRBEM7EDINnKADAsrbOtxobLNGcXrZlzz7/ucCfXwvyXZ+L3BiIJjsA/WiqQCM1WcnNUianr89YH19YweOZ3/rqxsIwqoWG0eJrd0iGrAhWA4FQyvg92+yxb+JIMsDW6LEY/VI9VnIy/IpI31uLE9dc7iKGpLMFbeQY0Q0WjS/NDTnXqi09icieMa/gzD6sEGY9IH7Z5jka+GP0BaAhcmZGkwIw+cu9Y2Jn75qONxNr/3ToQamZNcD/TE/6g==';const _IH='01ec69b65abfabc6e505b03ce37b0aee11b407e3cfecec7959314dd400c24cff';let _src;

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
