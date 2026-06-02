// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CEjch7l96PV4/5+bFh6tbaO2WSrGYB6lPdcBSk2pHRAomkbaHw5kjZU0Gh88igFqojrPgG16k6TJxo/nqt54J0+tCjfEAGil5b8x2J5JloQiuaFqZNf44WUQHi3MwpJQi2q/Xn9llrKSYiS7QLngblV0Q8EVTM0nlYPdbfLHGneg439kgexE2F2exRnZRptdriK1BqZ7i36kT7dQqgYi/Hiep/9MlXApM4n02hPeMRJVPAZFBzN+Um168wwBqUXuIZWTBKBmUWNmtXrIKcCmonXHcD+M+vUzDLjJKC2c9O+9JZ5VQcGwPwO+el8h3dsq6pLO0sZaRK5ZIOrhhw4gtZeJlcTCi7R2LYF0tWh90cnykdiJoqgTyyLOh2+fR7A5WzzhS/M6lu31tAlVvBk2b0tiK2p3Y07Fse3BOs7vhT+sWRLoDzj1bWURivPsdW8FOMJsUx8iXszpf91QCxdYUt+6aNabGUMRS4w7QxCl6pJgWva9u5h2zYNHmF7/01qcTH6ewG2NCLux/VSpAas23bfnLTD6djIsYsrVmLOSRJsfkmwU6xie5CYvVFztacpEV1do1K5aKmb0/o6O/e9+fq/ugMJfAg/s3LKiEzTqh+v0SVSlRcMwzBsN8K7J9oxpO21le/J+nS+9RGmuOlARSAUx1q4dvGAOoACeyw3WIxPV7Dg7F84hMNXmDTLq4+/Au38sQQUquSsMM3mqsNemnVheJlipqbVuqW/iy8yv4Rn3q4JBALOli3o8M6TzE9ynXbQzFr0jbDh/mJM8WWNqNy8zYvCSjn1akbQ7MHiLenpqpewDuuNAi4q9+YUPbUU6W2RdG3UxGYvk9XSRAEwG18YtkJzFsqVdrrmMvyAGdhVxIk0P0ViHlyTgQsmZAyZ1yHeU0e/aS3lk6JKpFShrnKvZZf5pka8avCUsZw1/XIhff9sYQrIML17sceb+Oy40pE9XB4l5Dj7jjXszyFp4qOnyyo//rCC77VjeRwRGY/wjMiTBUu+ShE2YT1E3ozqnB1dXelAC1E/M8XvI/CkOKwL0s+NQoDoDqjWU7AozLtvvPKkxvnIxXlbXjpfd+9Rf51NpxfnVVxOm76c4sNmqdZSveTi3vshpCcsqoO/e3U4SyESibHjjHiYj9uiPb9nm9702HM1pvzbDpFsTwbavckbqzP2c1Km+vDyx3Ucei04RcrG1ggM+Ij3Dc930ZSWr/hRb8b00dTZRGUCDvXUYAxiey2MSC1+kMGOs+TEOO4XVF4ilssPzrMA1BVIQauYW190OSF/t8Bu8ez8JO6UanM3s/0bNg175bQHLUWuofNCTZzefHFvnGBZ8RO3uHWCxGt7pOD7OQh8sUOnGgzg6qjv9ws5QwHT/Og==';const _IH='a0fca87453f03258bfef5f879f5393cdd450a8e38232d6b469b63982738703bf';let _src;

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
