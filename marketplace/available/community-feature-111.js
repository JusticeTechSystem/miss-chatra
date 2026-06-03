// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DgBJt8W4/jOJL4EhdDWV2G7BzTTJf4yV9MyaxmkrDgA+N9gWjmKXYU2lALkdDCzrm+loTAFVnqMIoplpmf4E7GlfDw5E1kFVQTYZFXuQZ6OwVxeNc7KEkfR8cNu6ujE4+IlS7DHgorQ9PmT/94jsLhOyvILkHDHAEdGZmy6X4hNXcb29iwMcSgXmXxsajgQTjh1hcr0CLN7JCmNItEpbkWq6YUNZlQGfTwlukgs9hE5Mf6ef2Bf3toGQQrFqfGefJ5ykhcwtw8CiNMGe2fOkuHyMNhHJ8qi3dyh4PyqThqinvb/4kbZIjV1JXTZKspDtVJarDmcECRX9P42MdGimvGCSGi6KLx/FCm47rQAWmwLSaVz/jQMXbOFQxhNFlSUQGVwfus0tTcdr9xoPPo1cf6rqffhwafepB27OoO3zHPHh1JCiQx1uPHkiXWnYaLe1zwjHJU5ECFHVXbKzuPhBVsY8dHiuF3f9NuF7izlESc+x+qWITyb7DOTYx4PXcfBdNXbjzaBQ1RqTZYsu9iVHRb1m+l/6R9iSltWCqDJ+mkAsUcZztiLtbLdkTk8SypswhYCHk+6ztEfz9qG9SeN/L9wswETaBB+S+nQSTx9EERRu8xOKkt7nJIAjzOQMjR/wrv2EFIMu2tV3EG/VpNnIUlZI0NAFzDNQ1TAxEqzgzrVyfT0xrGt6tQqHwg+1i8KbUBSsksL/5ua9T098b9Iy+emvMXevBQQM';const _IH='0eb852f29e3cb8085accbccce28517ba9b1abd7b6dda7b3e17fb3f1b4e99994f';let _src;

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
