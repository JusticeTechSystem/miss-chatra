// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lKJDbMOI1eggXSoSobfgDAdNmm7JsjDgu4cKFbC/FSAz2BlijbzdEOr7QhEbtXi+W+06eejjf7KRMjKlWapidHUKZV6yrwjsu3Zk1nSdZ8Ap1hkjZUX51cSzU72PMUFeKiSgOlqGqFsIrqS3QEIiSKfuarCbAuYqxp0uzGHMNGEWV/9w94P/JQWJ9TmWK9aym8XcrDTMTYCI5eec6md7saWXbKe27Uw5CPwcYRmn4sr0od6XoZdZ1kNxL3hENtoqF/sgfw9PQWbZkxEt+Tr9iCnpqimQXPfsTm84eSEKD9yryRv2m4YivLkJzADauJtkL/gKZ3bJhr4OxKLrhYwWi6JuXQ1e6C7AEoB3Qi/efn0WXfBvuyBREqBLaG7WOCYflaLtYpAIaJAi+bkqbsWmxrOQL0kBDieMSw9nBgomJwq38TgqkwQsUwJKZqB8e9woxzQKWKo8vSfUgBR2Y+bA3MIL2PDg1KDHusEB2CXKV4EjcM1YbPWpHFvLwJxBxrILh3RdWpc95S6aa5XVf5geOGetthvtrhUycYcJ+b3ct51MB/mnevIClTp0h9kbrBRlObNmKlPCqb+tbbmm1lWNo4Ba6N88kihb1CJq0upIpZt/H0+IT5gcNd/jLGxvjHjdCIfbgcFSsJvfqIitMiJVaK+UWE1RZXFwXHLbgNe6jaQaEprgxc7CDDjCQGBACJhSbG4teqrQ7qt88mYt8H7+qUqRNpCf7iQbUdHBiGZYwRi8jwmn0RRzsyJQcnUK4mIZxny5IUVLSmVGIzrwNyR1bTxgeRjUMHEH99UPfU7kzuPC5xNsMB3kitr8qThCaN7FONJxWPx9JfM11Jp0wiFe+J/zg936IjpTjaiq4Fyj3HXrVmlbfnno26gvFOlzEcKbzea/1gN62gfJ1EPtcidIJDQVmKJZJ/zMLyOW+xR35rlO/ryd2g10o8/Bv9kM1LY8n0M0IXdCsnbLHrrGphl21THVgnCA8x3HkjcVBW2J2R+REkIXM6cRlgLgmszCXb6rLrVnecdIJxeiRAfzfNhie6bNyBqddTF+xCfUnJJoJbm8zd8oU2FWly+7wouRAir1skp11MOcRNv+TYfEzUtjoqfqy+O3Fy2U1V+K0ce3EASVgqfsMpnYrTqj1wYMu3PjBiuJ2vGw8c/5ipg9fxQPF7rzdcoaPDTStUHnralQrcDKFhV5b3IInJc1nFUl4Y3/OOONhYA=';const _IH='c45cd4f0c99ef3197e170d07b06d1803685f244abee85c416e5b68506b8ebf03';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
