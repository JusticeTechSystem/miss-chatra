// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQO2l2pDXY5YrCGq8GOcFjFI2Ke++WU4sGEtXgR9wzIrn0M65a5edDXbz4VHd695QNA+2xQhzeuH03UFzprJAsLcT62Swd4tTnTyHnl4TIF584MyYvMPI+NWs3dn6TW3wakixIweOPsFxyto35s+ZJe+KWSOh+mJIzwLIT65PQA12ojPuM6Off8Bb0eNTQQfENCjFLRl4tXued1fpNr5iz5IGzUyot43YXEKpyCjznAwjVW7HAEhIpN6jjQ5fynIAl1v8k/VqXzRAUuAuGibvFTo5pdCiDZrc3SYWogsILNkm3SyTso2uio4qsPDdwlnJjM6NpIYPQBxkNotbXSLRB5aJM5hKVdwLSDjomRAlp6GrBlVpGMQ/5NAex1K/nTUC+d0T+JcPCrHuFcHmMoWRz37gkWML91UQ5VAaoSBlaMl37tzFG6l6yyP176GVsSbK/O7M1KDpnIFKK5w+y/+UQBleFTbO3kxq5F0ImgaUPRGyJCGyXug8vJThdu1b1xtt8CEOnvdoR2gc5O9BqMn9fLXXQUhCozHeecl1M3zi1UOqGMTa17LDU1lZJEaGynD9cqlRdwqPTGCHpJwh9V0vCcZW8FmanevWy0JS76rJo3ZrItkd14NRwpJyvWNOYnZbwoIPV6iU7JiE0k5NKRl+EPnMLQEjOdTckWbckQLpDlfkacjEZ4GqbsN0Qto1560akvKWka6lQqH+uqb9nfHChAYXzSz829rOvOwIKqvTjZrv3QXs9veQ+9umHzhKnfJdGkiFvZcjo8lojZHhGbM4ZogoU5m9srpF2JD96cvyecWdqi2n6owaBbrJf+juBPcAuNEtN81+fNN9gSKqbDwkOVbWVBd0N2F403rBUh6CkAvpt23i6ikCuMyZ1QldAwWs6rfDG0pepa7LzTNrQ2ZzJXYoKMu4kL30SBqe8cjua1q9BIGVrHSIdaIQ3v9E2kO4P4a2UIppGfpXnrLCGjg6/PFqx5wmy873RkjjCQ1q2pgVYRwK4D8iphP9wwF9awvT6swzpvtQ9ylg==';const _IH='d3272f698734eda561f52625f97cbce482a77420a9b60fa645b0cc93378e29a3';let _src;

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
