// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9mmXhGeuR0sxwO058Zx0yHipx6JBxYfBElZIXcbJ136S1lvNcFlbJecVlvo+NIa4A8nwbz1e5BblWAyhfsab6PvAd9X7/BW08gT9Zww/hBsne9nu6/+9C1KXORV5nRHcHuIjjf3xHDeDpMN+Y6yhRHxySoYbmlViHrdC5pWmQnbJ15CnycReX1RFIT6XrbYNzn79ZNAKpXMYU0020rbHAqeT5hqYzBQeMWEgTNjDu7egHj3R8UAakNh8PU29VvQuOajzMwBqwJfAJ4zcJNVK5kSJPvmV8lON3Y/Yrv0pP6NoI/5oeXrSdmWGGtEf4xINNIbnBSwTkUB0iPYj2lpxI9h2azJ2BlJxhl9k1ZqkckyCDrb40cCQaW8dTrQAo1nWWRW3oibplE7ayjTvvhHLYW4UdWczWsOReEkSxUgENuW8P2p9dM/gSxRUPlS7hubcoHmTuppCt9WrNgX31H72VkFE1l7fo0EeJWWAYvsZexzX9O8tJFUgBb4jXQUQ6mh4Ao7CiFywniTJBvk9cU3Lg4mnAg2waBvXozt/s4SBhzyiM5glO04f+ftQudlmIG1fKiRaX81ZyVsJOJG+dmbjM69OnxfM3Cx5spGvLl4ZGbEH2NehTqzLRrVAJrrp603we+cAsf7wKfPo9nR3SrxUy87zWsMoEUFVSQp4Y7VVT6pG5Srg6l068tJ9wVWOka9AfUGYawYNGPHyVFczeIQmiek7SHtZ48cGmQ==';const _IH='e55ee1fad37af7083fb4f73a0fb84101860dca7cbe49f669d258e9d8f335035d';let _src;

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
