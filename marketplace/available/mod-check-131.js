// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2jsG31NIaeFAXt4y6RchtXegQWO/NnOgcAuNiQDUN518CERvf2Fg8vN5DUOprIEnph7BhzdWFSfgEdIL4/4exdTyvTET1szgJ/+VwIVoJPytb4dIWq07ZFz8EXZ3uFiw4TPA8KwNr+Q670dCnTkQMzPMN6XIQSdnUmcIEM3JS6nabpmUGjXEWa3gcxIwMHlv7R2MGEoFIqjb6wQrkEpHcYMpAf8/iWIbg8Jg3yhcNgLka+Xln+OpbCZFhFZemZ7YqifAD9fAl3FStCC6z+FhQEzIp8SZNkzYE4UmnX5YfBp2/uORM8tDroBenGAhjfCta5Vi7mxtIZ7pFasuKAyNh/ftXL+qYxqkwQWKGQfqtnlnX1IHMkOxBkRPr4pmbEbBf0cTMu9qrrEBMswGfBaRu13bBbgpdjKIlC5fKc+iqOjC4ZEH6pP7oxHj/mgyi46+3HhrQu7vqrWk4KW0EW7uJLYe69kRPKQFU1oEOrgAMy7R7y2b+2eaDZ6kVLf9/F+J6zagdMBS29dIm1h0su34jLEMdsmc/sYr0NXjGqrPsxEBUZa/zGsWtclAXK92nK0Crt6gd5u2KM1K66cxaT5X1bJf9vPBM2csePqcy3vceffwBYwP/eemwnI0LQgPH1BAfsclRHXv06L2YJYFdD72oJyN/iePyD3niEqqMt01h8UxXwtHUKyq3O2KtCgk+4LJ4B7DX9pgqgTQdneLITWXbw641IFtxib5HwqfFqz0rcoA5nApJswi+knfsckW2pCf22cOdaMFGl9Hhw1ZNGPDhsJ7n0zMpvavK1alWhOdj6vuc0uLsSiY006Y1G/LFNA1OTTTKKZQL2eFGtB72BcIq9yssGIB4b0ayf9nQ/3uQO4RPOgJtSnECZCG7iUCGsT1/H4nws5K9LmRPhEw/l+K5vCiTip22CwBQhGglZA9yvFWCtFd6Kx3bmqh7QApOwYl34vCDEDmZMHAyG90zkpwgZ/krasTuQx/W+ieDA0EPkfPEdQg7zfRCYjfnHLwgoQojNEyRvC0RQmrfHPuI3B9d0s74lzFE4zndXLn4zFTmMEa7e1dClLU+BKN07xJmpVpakYQqSQLjP9haBANCLE+BIT36Z83Dp6KvXJGnCMprIfYEpsbQrjU++JGrz4N4V0mmmJG2fd5Uk6OE6PrAdbjnLfp7993fXOEquvVEq8Jkxdwbi8xpWftRfs/5tOB9Pf4T6XueVsTBsayWtzEVoI2xawMQpMkoQPjZ03RbnH0o+qPj37z66wbLh0caBIZqaHdWSpbDGQD+2FVoGb86yWq4iwYX+4qw+EP5rQH0eV0Z/O9nAKljp2XYVN6aiNkbA022Ezmy5fM63yWNqX5rmXNMWQqU73DTQ38NNoxxjRuA==';const _IH='0055b5bd9c4fbc694ff7d6659fca2c7926e8d7d6a2a64f96b2fe88aaf335997a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
