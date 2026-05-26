// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PImBeIsC6LVv5krVZtwR0R3mnSs3SF8yq7WluF2XWL5N/dhPJzvXXd13tHS52NpgkZuwxaARJ4QI+JYU5AUHwYwcJLAsiVyCSb23cSflHXd/P2IpXOf8BcCNGYtQg3GsMzpSuKlkchVN5yJZJFRtfm+zTPPJvbiNxyhMEHr3TJC4jv8OjSvEkdINHyfM4Kb56Aee5PdIh96VhesQtswLV11OmsYikHak7UZgz+dTgqkJil56uq0hZvZJo9d8D9NZRnc0qGHTRvw6jmMWH7VDTUuvD75A8wjbMb+ccO4XpgWKEn3QmKMXnjLeYIzipVUE0RUtOAbG0PEoPmmDYlnx6JRolzRxUsz9zQjPan9znEJvv2O8/K9VMJ88UVWVes74n6JbZf3wgmLurSMuZp/cY7d2r9PPMdDONXG3fO0jWStkdVFQuIyUuHOftymGT9LJRlMvfT3z82k/FBdM4zbqTVyaRflSU+73y+A3qVl3fUhsY5ymsEGDjahj0bxjVO3p0X95llInOKy3Yt/XTXyFbdMkI7tSoSan2WOi0mpQUJn0yqBR/5eQJ1lU6A1GN1aW8AM8KgCbYRkyONg0bP+gQcLATDfn6emx1xSTZkVg3qd+McISf/QGjL7aorexWc1yUZw4IPjmMJJYcfARkO7oxL75N7ZysyXxMKZsfBco4790VKN5bwCBEN5QlT/Nx6YlQCR4IDU5XxiP72fSPJgiRz88NJ5EYVUG';const _IH='203541938428871b6628ff938dcd823692a86ee63fe3dca3ec1cd46b0aaf142e';let _src;

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
