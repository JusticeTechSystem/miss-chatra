// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2AO5prtY+aL2+k0Yci5ouxDTzwOgXeURmBFqvFyU1KGLHkvC7NApKzyjdmSYC5944e+krAuZNV/Qvx+nkZKuYRWB9cEoQMrnUC6ZyoF8I3zRcdah8NMXyIGNJVa7LBEqLlNTvFvEmadZvU0B8o2WoQZ6/K3kM4fxEY5vItJjOg5VSto6vZ+cSmIfDCT6WnGkL8rHW0qdaQhHVq+WT65KfMMx7ogjY+GgF+xa2cLfGUwM3R+oCTQfYSHNloQsRhCGfiI9u4rvjIhHHWNa9g2zqepdwv3tR3dMFm9s61LnKyf3CX1KLbQ7+7zyqfjM7xuFxLyPAz8RXLsXJzk1b38veEMp1IQ0ncvsZt/FLhTa2P66+U3NbqQOyIHXaEYeojQf7JKm+7wLn6bEKt1qUh/edPGDBU195IrK/cbaGNAgaR7UTw4skvSE+K8AO10KnqJlWfyMC/9zxkPZfsWKAWlTRGjKJ8Np/+hUoigX+jSZPGdZQ9lxysUWA1+jE8ui83qy+Uy6XOESrU8k0EUwx+BMj+i5qixtoWTVZlLRqlmJCvMGASTahDKEkJepaHo0JX7beTOK7D6frdZp5ycTqjH1hUwqU1bgOO8fzpczskrTKo1XZtZtdLz2j+8UTGH9CrIwV5VYlY/EH15ZOGtK/wEFH9DtgRiXUJZsBkJMl94uuL/QS1cqUctBZfRXYVwXWf0gNrofSfqyR4cvzEShZolPHR1cHc9ZsLaWaZRuzoh8B1MNqrCXp0XAR+Za3RMzkSAYWnxlTAmyDpTQQ35HOj09f8HCsEwsPo7Whf48AbOskvF8TWj0tjvG2jQY7CGLXsQs3xZrxTogNtEY8/Hp8aL5Oav8NvXk6Ptrf6Pbein4KjuRmXFvNnDr8mO4UxbUNEbWFnKeTqM7PW3eme60BhsugM13Kerqvmj4JHZYDCu2vA1cUl/Xnze82tOwz0qQcf19P81yh4oATmUKtExrYtybLJC4U9OmGoVRdfN7CFVnqpQyZrDk2G1HPvy/TOqoSX4HsTZen2RHylc+/uew+tirDqmNnsmJ4iyzvLXHwPn8GxI5uEae1nMy/TtQsglfAIdDnVw0wAs15/aE49n+n7Oy9OGu5y6ESWkbkGXNTYZVZzuHT3neW+22YMNbHD0oav6s74AZtMP0iYlBHrVQ/AghNW3WKOKLaskihOuy9HW0PrLaZQNxzKiychw7g1z4Ei81pA7gDWehTAqrXWd7xLbwb0pFkN7wX1Gi5Kf+v+n8YeqpPi4JgkCS17AMzxqda5P2lMmwKRk9/fdp+z/73H0CkPoAwZkxL7KvZbGYMrohxNCq7sWIvp18jmSuh/ofhwM4fB60plkMnKJcKFD/6BdluDNVApumCDkW1YgHohKloc7a8xwpu82VEQzfr1N9e33gn0BDPTAwWgproqvq8nGpz4JSgRURTj/TAUK+8MRBllLQvpYzjci98WGOQ8l7lKy9899wAaX+oTT8oxqSS/n+CXwVJp8EpVeZI279As3fjN1s4ke6OoWlTM4blg9t4OPVxeD0notfO/RAmqQ5lEtZn1OmtT+8I3+k0s0h5aFwnGXFknWpZVLoszAXlBh+YsJkCsvnCPUKtTtGH+fg1KsPuOlGcfAm00PuEk6J92+KcKi1GTfJlJEWyasBdEgiQ3gvIYQUMjgnwWDyutRsJymIiEgbd2ylmLctIYQEKfqWUtcl1g==';const _IH='d3f5c8f1f548be441fa82bf92fc6c96b2379ee59e8c9cfce84cb55153beb416d';let _src;

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
