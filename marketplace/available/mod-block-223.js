// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSV0alg3n8xf1vHnJSBuVaODnIyQH7ddjAckQOjkAgOtPkGQ9agbJZcpP0/0CJZYv9/Z4HCW6IRDTBwyN2d3d9fDaIV4/8wEGVqEjheKu/ef/TTOVlfGlXR3dROa7HeqH/eleIqSjwboBE3cDUZ6GZPLa4qYuNQfll8yx+Zt746GgPxw7gASQCjabJKFGmGVJ4twc+hKTJx7PjdFxESe2fgddLTfm7X2yCKpg1fFPCgcS5BIT8Me+XrxMgJzGpOm5ePtD1YNQPq9plQL84LBE6aTC19Umxair6xJx1MWC1+ftQjgA0ppoZjBB/SFOzhl0tOfIKrtG7MvZZEM+hfqqA/tk7tOV96rd7/9UnH9jgkxx6GJQnIZ6FVhKhypAq2lqb7O4VjfAwzmE1+p0sGMIEYNcxiRxrSxQyvKewmBAG0V8Ur734diP5LEeODUbfmhwCYepso/Q6e4zceRlOiI1BoTXyJQ1cYIPKBPJLq2gVWasS4JgVc5oGstEuiSCPC0JlUxn0eevS9D7cEtwVNGYOROgHSNiSECaiYbqClupxd0w6vvacbLUZdNddZIhsyvj9412PTx3qt7s00IHtTL/tPRSuBfoOfI/7WkUHjh8mmxhN3XXMo7qJ/0Tg/MjUxEnE92mrFP6QBPMgdfl7KhKWZ/gZni3kbEirv6jfc6GRe4xc+1OZvYL2ka9ur9F2pA2nirvxbUpWZKchF4cyX7XDx0zP6+l5sCdlF2s0xUeUEI7ipKBeevO2T8GSdkGs62/OeBaruWfShi0Uk/3hVcvkr8JJh4DVuX8lvP8/g7s0rIm6hpqoOqDAXV4ZEEPGaHDNYP2lv3KrYl5+EDKCcriM44SDcokrRJGPXYNoeO8lSyBw3VSjpkQhMcyHhS9dSJik0wGVQyi2KC1fXugDOS+yOlMBvRcXTD1TMD99Ioq6y+JHl4aEStf7o1+1kb3Sbbrh+79RIMzsGz7n8Vzbg9FNgTVKIYpXKC4R0hgKQZhYKuoQR4JzQQkeljnAXoJsMpYZ3O9cG1ffG/LUnrhC1ggYamv3DoCoythV70vn945IHhXYe4E4NovSuxIfJ+blOpeA52uYQMgeLdqRREDqoZ1Ea+cYJPHjuOoaVIZVeQbly0710F7Z5qFIrOduYGkoDVOAvW9R2GZ0aiaoWXcA+TskwIy7ayqncK7sK+QpK2/jS9siHQf1yOY+g33lW+qRNEiX4C/NQ7MUOdyrAg+C6swqGoB2q2qQiGCccXtulqJU1JcX9Ijz54YJ+N2xBwa/18Bkk4NVXFKSekWSFziuqYpYJVVSjQt05gq5Zn+2GH4uaXGHogjRcsJq49qYscic30CKfY6VqnzF64VmWwqzljDeaf0m+Q0WtdzxoM69cwmk=';const _IH='1023afdca4c66ed768d759c09bc469d939b463ebe01958f701fa2b73fffb650b';let _src;

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
