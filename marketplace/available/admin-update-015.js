// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Ou6K4JUtypkMDLdB6phSWPjE1iqOWcJMfRFJEtXQ/hsPl9I3FNZRLvDOdAnsSYLmPGnFljasdRNZXP1uhOcXclDIxjg97frDUbyLzlBk44L7Qy6RSTPlcifFJgLpACKEQSkkWMR5j9R83UZlxk2M4/gK5fBYGkXFIz/HNHx4ijHGKLqBjKiyr9CBDGmdayzq9P04raJGC/e1DqtLEpFz+IOu4EExt3tkimyhB6fPunCG3KGXku+F1AR5jb07tZiCMq724EoW8MJEtjTQ0VaBYXH7SU2eeAyiezv6vcgsyVlxFVwu623Ke2kjjZfHhxLIOu0aWtO6qC6pL7NQszB/O6tEWPKt/6xJyCfFEocNuPLxEyvs9IszwPgQUuMhKae7FqJI7ddpRi6RqoN2XDqmcpCnLY7byVt55o/lQzWrpkiZJyknYJgg8/gKjRS3EKNqp7EozU8xGTU3KIkJSyl/na747MCcBHGy66V1ad1UOCPJiZkQZmLRP2dEfJltM6wqdhgeJW/HCBGbALzMa1w7RKW7wqucYel8SJIi2y8O+44nujTT7APhFPMrPOXefRIrDFUmWBAOrjSux+0MPfNvsZTC/58GS5FnNiASoxnv+FRQasgOMCqw2dhCHkSjN+digNcutVb2V+XzKND+Axjvvpth28qLLvRCI+9u6fM9aVFI+rcWbqv5Hdz45vRxtK3IahYgPmAZE8gI1QQqtFAtkBb0oXeRU9CGteqvlbgU9HJn6zCXaNDIa5XxcApnlBW5sT1N0xy1ki5lUixrzm/6P0idP89FS7h28QFUx/7xx28aASEVe994QJejxyY67cd5RVBIqQDlFGv2YBU6c+A67Q4o+Iq7YDdYQmHsZEcyeOnNnuVUAnUpfcmPBfgA2AxgVFD71m0+MoJPAkwEdDIqZyYt0S7BNK5BXbVRIZlSrNO4hCFXwBkrpyrddey7tZy7UawS7Nz2Giwag79/rxB2mM98s7hdjMLENPMwGNLGvJTmCp8eRg4GlMsafb0';const _IH='41ce41c22339f51f8a103ad6d876d1d3146053834725b2a3894b1d15e1cbad13';let _src;

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
