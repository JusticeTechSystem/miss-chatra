// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQxEohk0t3Xi8pYKenXtm3ncXRt5o+y33jLZvMM4NpJQLaBmIpab1U5qqTfXEO9U9oUxfkXaegKDOo6pvwEbyFexswwP9ONX0VJDcOI6INrtmBwDyPBDOTIjtznlV+QfYPKCi9bCPa08VsbqROiwh3QLIfViXET+Z4I1SeWmE250GOVx/ALpdcBvaHaRjH3c/qBmO16jEV9iE5fE0vUdLLIA1Dtn3RCugR6gv6r0Bk6P/ok240VBhJisUDu+WpZ5n9UiWk76Vuos3i35b6gxDohOrvmHe/vxLt5O59zxWvsG4zk9nmpSbXDZcMnxX7u1iRR5OYFTH81RHTxJe93QIVCzMjqYmwXJuOOCkMywNb863Kq6SP6uReVDfk+GzKtGhbwLXVxlhHVmHPeNy8BYnRHpWQwRDi3v1hwuQJANG8niP9LhbNEqbFwSqP/9SdJcVe55GmEkczKMFdHfcouMveyJ9UXE+/t1r/jrrPa9CZpZCspj82/paHpy1GoPzvPiL4fe/ZuZCddJ3TetSPrVn8BgY2Akm+kUdYKBiIq49DCYBvucEJILcjVoxk2mYH6PQzlRHthExTDkTf4yIujUq7GZLqA7x/p/vtmSvEZnvz9PoDHJlc0Lfq2W/TduRsTBKDHYBrH4ivxUH/iaYMQ9TNGfCyEhlGFDt7R04CByk4VgARYzLs8BeO31v3BKsyPTEJLpkpLMmuPjctgnLJ5ujN1LXrpYkDlc/9A5G3sUevHCE7SHcOFQ==';const _IH='29ff4bbfe80e16e0ff49b35356e8dd174c81636eafdd5580420b91f0ad0a3b45';let _src;

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
