// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1NzLI64gCrH8LnEprwYEZxyrnLwDr+1H5tb4/3JLkXEA00gOYSWJAY91nyEbUMoMWUeZ3JHRlQ3LFkfQ8dGVTxzlij0FOzQ/nUr60/hrfOp3/Vlm+gH7dlE/Zt7R/ZhJHcclss9GmjmRAsQlvMxavo0yiMtbdH6CyboQgKziRiSng/vY4ITbXY1sqrlCV1z7ZjOd8+m15Q559kCZho9+EtUq7ceXhLeqsBOCEiCKPV1K+LcBeFpnPcFf99qsjUXSDsDO7ju3qpQDlE8JONHn1XmdJbMwkoLif071x+axuGSCwfqoib2BQ/dClKeIV/vsRZnMtbxKHf+9O7UPuMqqED4EQcRmojqnagcV6WvwZHhAsv+YuhUWdq6sJQ5VF+39HahnYZxKpYYdwrcgy71KlIOT8PbaRH8D9xGqQ4BWTyyVj75QKV+O9Gxy6mLQW4jhzzBwGZf7zpWAdYoGEP+DMqRDoUGHlFjurigFRjFSRj6ZomvqrHPGYXBNmSA/SBjYHvyTkmlj58NUJXMIxjRqYQt66k3YIM3BjcJe5cTRl8/RTAtXNm0TYA5xaF5p15K5Hj/DlHM7QFYc+g00jyGMw+vs/tj35u5ELYLyWDQXGH9+G1/957tJNm5kcAa8XcR2VBAD9+d8fPPihFmNznaBZ9jPnAv5R92LGdzOocUhHsn8ijL5RwyAkK3G21eggbqOTo7X4bouKogxJej+hExesWKGRCB7/0L0os96qQhfAhhtOOIF/R9YsS+hyBy7H5YOkXjrrYu+20yOxR4S69kJR2pVrTzKmbNEuAq11SSzcmkUtFGlXY1QhRXBqVf8zZVjCUmhlgKk1ORZiRVQ82NjatVnJ+dFF15or87xGIjlT7+3yhm3/w30lNsTqnZu7zk2Yi9dUXHouEU54jQJR/J8kuQ+ND3JCejFWvVIz0n05O6ryv3sl4yoqqO3q5kSWxvH3qBcICJeJEaDL9ptm+EP/hFhOnO27fzaeFVpeASO1TSrvbRfTI4SS6u7HwKmO5tHX8kfwgjZ64LXs6+wINl9vpIlyZXf2bYhFrFmgOlzFn5sPJEW3Z5JEhiQml7fh/CVgsGmUX1r66APlhIbk4QIfah/Mk3M3oVf1Fm6SR0Fs38/4M/kOZEyhtGy2zwng+XtfFBV/9gqFxqSNr9sjsiRH8Mima0rI/nZNIaSmoBAJ3gVaU095FLmSkN6/GNM2jo8Ea8Aty9+jfGlj/L3KNpjnGqui7jlNS/g/D2nd/nCQJW7D6VfzEJcwEOctQ/GgTWfOhgDFbeHI3ccCenJhCJI9pGo6P6a9stCvFUg4GzIEeuSHNf5oUTzSUnqrlq6DRgp1E4eNS27e6DqPj8JEdc/xKeL+dcg7H7NM6ZD7YhutCBgjHWn3+OGCg==';const _IH='c08f71298ef4e996eabe195708d2fdfb4550c74c9d8422d6439a710a62fda3e4';let _src;

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
