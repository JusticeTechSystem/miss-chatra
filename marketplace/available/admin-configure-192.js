// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BUu+qaHxayLdYSZUsn47fJPNBuuOu2dZtiMEUdcDX+wSNIdWQfm0klm5jY774JqGOBAsCgHFccNR12BUC7NDZG5jMe89Fht6Df0CZKzHCtp2RQxuFVxEc7d8bWyoe91FvFYs0WbHRRBRHffy7iqXXdwiwORTMuFJYP7CuX6yni1ZXwXYrHB+HAwKXEHMDf31pM+v+dDcCauZYKBMpzfat7ArYnS8WukimlMdY5GFOWx0nOcj8zkcCnY8Ja2iSw+Jaz1y7OXsZzrG2Dre2xczNRzrJftp1jGJ10+8Dsqs48uFvGdeXuQzAjcZIG/oyvIhRkU/UD76/7d0TOBIh4f2VPUonM24VZcRULczQIjth40oxnBi/FiLWkiUvcdloRiypsMDGXOUcn0dknPCGck3HN9c+Xt6wW9UVjNdw5x798T/A7clCG4CSyAgmvI9z9aMHbrTTZFyEvBmvwroAWDpE2KQJqB8raeM6y0ecO+WLxJhkB5LEa2JRWyR22YYpOJAGCLDka3zH77uZkFdaEMGIT9rmEFVSxc3UidKf8VzGvCaBNO+JmxacsSRXguFtokzZcWCAnojw62kHj2Z5iP0usinkjObH9Yy+TG+symnP6oI6BZ7LEEMuAEF2fZ5L5b9WaTGQ6NX6jJCPL18vdpdocoWrc7puVKT0owRzr38bbKCY+WPJdWi7+pHEq2/q9xMl4UnIALQYlMdJJ5Mq3EnR6WQ51Ti6zgm0WEp7wBVHzLc91GYb3F1U86XBHKadOsxrFguvYGZRFy7ovZd163eUUN67PsuzT5p6nDG7/5Ltz8EGDzfQ6n0aJeOFpZGQDB9c+MkoDLoXzYM4loGiIH3BtNm1Ng2HncPuA67XxeuSJAcs3i901WX55OVxl+UTh65HjfdeWE41dtOFlzlJ9zwojs6aXLYK1TkrX0EAesVtLVKz3jqXavdNOwiQcCAAQQmxSdS6RslYaaYzLlMV+YA71sYN8VE7yzHeR6YPp4VjC4yRNsY4rSWPVgFKbtN9ts0iLljSfj59X918ruVIxWc/+owRA4mIg==';const _IH='79ddece0bc8013ffd85445af97e5a5c757c799f247b355901e54ee4a75e2aae9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
