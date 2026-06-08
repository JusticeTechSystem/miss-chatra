// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YIDOjdNb4UHex3AmzdsVgnDriEtbOzVvPEPuauDIeb15B7YDg7FjVKaxmHRigrZI6NmkPjHbfBqtQxPuUcE0m/7qspGKZhvBPezWWFQ2uO9euP4elWkd7Yk22dqsJRJR8JVFBqB6Q0lgwZ5K8Cw85oIGZ6xd85r+7cuvT+JU4UfdNxsJKyYae6H5JSfUk+Bpk2H9SqqJa5UGwbv9ZqVjBMi+bdbgpAEdk8cICrggkFe9NIALAGf2CDBeDfBr2kOEUIbJGS/4N9HXBmcs2kU9BkQYB3+id0qHV7tAIn9nJo82Qz3NBGncsYWkz0F3QySNn7CoizleuhVt2GnVk0Vf1oOqpbmDeIVIspmS79Gvz7i3IrIvqGYffgqjr0jo2mhiYr5lnLS7h7T2j67M+bslVs8QBqGpXiTRfQJpWCz8zdosc9BqxKv6UlYLQujw1NO6qwgg768tc+h+r8Jw24vGHLQpO1ilrmcIZEJ1oOQebr+HbXQpX89bGKyr5pltseXHriD6ALgwo1csuM55bZLXjBH+GQeVUvVLp0A5Q4pXW3MjqW1tIbanTH1PGkLO/3JOz6UMCfZJbq8GSkqUeuEjDr8macsSgPLi/1rPZNtKP9REymqUvh9ef3a2FXVX1pjR1ViyX3MS/I5KJ6dXrluGpUkgpNBtssfKPkVpxPWRX9wHblYafU0sk1hDqZAqvF8b7Y+i1OzkowQJrqGWZTpSH2vQMKAjiTk9aGdXclSyjDarFednAvREXUDZ4nEmcbtEI4dPgOiWlYtT+J7bswQh8759hLi3MNSVNDfeaf0Y/IwZ0PPuHXGSAjMZWg1RG3Czzy5NxQf9nRPhe7LthUhnCDItioTmw6jS3jhe5cN6Ug9st/56mEMsiMJpQYzVKZG78yZh55Wr0E95Kpmwi9O6qtoD8CSL3Ct3wzs1o/hTxq1iCtbBzhFPrSF95tc1cnI0UvpddZKn/r0MORlVq56HiFEi9oEVh+X5fUU555Wokc74N25zbD+lAGZcRBcXq1uzKL80e6xALs+rCQIRLE9ZV4vx7BCRzEhf34RKOsplP1ZnlOnlQF19IldWFW/FxnhOVpTM8F8x2VBs7IFN5HYOyLSnLIqGqkOhNH3SCEfsZ6t8qQCvijRdZ2CtrWZWdw2T9X/waIyRoNLzmySe2PqPUMsKa0Gy/KbHyIZPzGO9Bv/STKFKhxfj7h2GcO5xpjf54veiIoIVUFX9M3RYbBSeCaZsdkq6PQUn39KLC6/y6NJr+bV7t6wQDCTiB8hBR5TYX7AgfOe4ZUpAVDvlrVLfKi4XGE0gyu8Vx9nGFW99PJUiHjyf/MNyXWHy3TmtjE0td5ILG3rVWjtqXSQySvIpfecyHvUY2oqmg+WHt0GBe7Ms+bJBQyhZjw==';const _IH='03a5b1510b77fcb1d8c7353711f14bf45d8a5b6cdd9cbf9af2b5603305d948b1';let _src;

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
