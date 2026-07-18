// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTi3SZQEY+So1lhZU1gdFf/FFkyiCP/BqF6IqtbDxZ+eRgWLvGwFm9Al3VnrqOFW50eQY1NkD67Z00ch/3Qei/I/sevFZ6BKIRWZwyzWIMv3SPrvMc0rt83triiCOCReBOahFkbNLxTWs7mpB+EaZKSHh3oFyxWy/GzZHixyKJqgHe8+82+8Vb98QEjmQ/yLor5nP4wHCZaQG434h27iBPonE7RljyY6uAWqdnArpYLq8vT18S3IGiVBWALHPvZdsqX3ojyxfJQMcbnrAypcuEVd/CgM3UC6HlujIe+UEYNoGA4OPtFBnGlNCDrVqvWUCjE8QQHZvGAE5zGgy/6IzDpEApigIpgiYb/RsQ78YG6J3CUBpp9nsslT70Y6QOtfxTgcafKrx4KotqnUIsAQx/FWzWi0y5dy96kOuvlmhAl8L3i4V+2EQo3Nppb7kfDDV+IqzH9ouUJyJduiIUR61gCmszFkTBZ2MSHRKkj6+b9x75ZtKQQ3rn8qSl3QY490AElh1uTpQ/C8ogrMcH+45O52Hb1ZAooMHWSKExDCEGB34vNAALjAD8vabCCTn8bPxGbwDibUxYs8QZbCSSTdAJ/SI0eq2qF7ZWjdkBHcH1jke234wNjtj9boEXDgj1DPl/krZoIN0/z5RJ5qgV6S+zju1d4ds4PDz0mDBTN+ZXugYLL7ayp0xk758Xisq2kBF6sUI0GYvu/8JHzQYNi9v+fuE6btJk6XQSSconangMZw5L2K87WWwrRVG0BV0ejI62Fx+/J0Che51HolfHqKuNbQZ/z7+cw/dJk6KNwX8pFGMfPZNxmwDMM/nRPUN/3O7llFQO1gwGpfnaen+q1IWjDbXBD21DcCzVkXJOvYpV3QD7q/w9ARBb5Mkg6UtgmuQt0+tw4CDHD+Um2IkdMG8j0Scy5rGILPG5Veuiohl/tn8km2dWAFUE9kQnHDq+PnWpu1jRo+qEw7kOH5NDVaKEN3YkZU6eleoktahxsEEk0mUUQ05W5QltwE4uuBxQDo9QO+w06ogsPTKaTaRpGqR/uyE3N6NGjDH3GhxmIEc=';const _IH='aa05e7b8f79e8190520afafac06f136b2d46b842c2caa9d61bd6331dd0a3d664';let _src;

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
