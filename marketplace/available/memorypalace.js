// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rAsl6gmOsJOI9sio+pwLGSdes2hROrknJItTVs6rSFYns2NHuzPy68+wpLzaJwaEq7ZZrTyQH1bjVqB6WDMKsbSflBXoqcvaqHwufFxtNZimVU+h0J4UEzUEnAVqelP6+sz6jC+ZsCJRf34YVKO7V8TcCbvrAEyCJXU4PoE9ZUf9/C5UrgfvNyMyXo+i91NftoOTMyZIjqyEAoal8Triv7S1i0I1bIqkgT8gck+JoOPuyYdlCiwsxY3Wsci+pzcJvyKDgv6z9KsLEL8qKdWvvFrvf7SeaX3zSwF+xTSu+ZwSIdrTOtNj/+vAau5mUJWVyLygF5JQgkgB/08zi2yNnxdPFEFvUBSC7sFqwUnRb+BkGmulwBJnrXWBPY7K/9DsMg/a7YWPJU7m0OrRP11HWSOWYQyAlEeDmzK6PFwdXEiPYJ7sT6Sy8nVDyyxHENEOT0FiD/FWGOxAdm+vmFGUI5bgGQGB8JM+3ZxXl+18UkhmlVemyyQ/QVOLk6Qjhg9bEmE7dd1WjUGmoI2SjmBgjiXcIpbdYwStSqJ8yhwaYJuw2kFEoVt/VtPa1j10iVsdeldTzgdlx7Z9wjcMoQJTfN/IUU8VKLkN4hrzob5YCiRiRtiuaRGgWumheHj16zdW3dOw44BIERfiWfRyF7n4LhU/CSANJ7zyk/sl3hGxoWhClqhjsZmU2w0kQGq0MHrPuoS27998el8/J6NSMUi3SFlNr3bhQ8UZRGzL4+SX7NssKDpWOdWcm1DNz93wrIn8YdDdOrNTqq9or6hZPS+wfHSNoE5AMc+fchM6FodaqJCZYzSMogeKLjBEULT5xAkROkHOqiL3xZK3bD7cfGDyPgkxy6P65d1GqJgPmS+YGuoSwp7tbtHEYcSZ9q8bxujvW/p+r65Gcr6T6lIKLpXGMu5HJXqO0Up/QC3BYeRvkKB+dhjZ4j1g/WwX7xHqZOq7t9kCDbs5cAhbPB5wdT/7HZcppxz5RD+wRduAUzrL+cI4jWGX5f7qVvBNsO5mlCyq+Ar4EkJv6jIkigRP7+x+AWsnEVhJntJT3ve8OM1Cpnwwtaq6f0eE878r2Ea0ipzMZ51wsb0+J0HJV8dEUNSzYk3CXiniz7DZZQkNBHwky1iDfE5USIVr0XmiXt3BQhJ3vmWmOzwGBROslxH6E4nPNS484pQUWZB/llfVGtHMD8yAEquZ6pcsfKGvH2UL7Y89eCXthjLEO+Hq';const _IH='dd0c05f7d0f2214ab7a7915bb95ff2ec1f0e99c685beefc864a033d8d3edfa23';let _src;

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
