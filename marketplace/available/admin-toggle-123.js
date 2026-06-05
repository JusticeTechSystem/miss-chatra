// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DT3B9R8KFo+IVpPWbjwLIC1GGQibLSUBH1/x/DV07ixvV6RQGAxgOmScW95l79JkDqNqMN2lecMREZa42KV0VAzofyI0vboz3yzAGr6OWvTqMAJ7QlV5pk4h7yl9FTSQBEiGc9yLbeaqvYAdacULsZvw0lrS0Co10Vx3EoKtKLQ+uTWb3WEdC8leFBxxPbV2mKByVFiY9t2ztPGKREjLUQ/MO6nlZiBWN/+C3JwHnEk6mi9Jo6uCPTdP9y5PKYGBNFtMFQGvZwNx5lX0Aa5QqOSJJIJCaMUOjTzc3UsZ6MPdFqD0CpfeLKBCHmXWWQgD77IC+hd4XY9UjePaDAzWyq7qz9vQPBIs1no1QQaMHv61Op5TIYQR6UMjut5bjpX7IWIh+f0dvuoWnCPzWmq7Wl9pNIZyLWT/zggj0in428SvQfq4ZYjRmdMUCW1PJnDY5UWirXisWPSriDDR/tmxu4nLxIw9m4Ho/15qzN2uaty2H/502C/Rv2rw6ih/vQL0tyDEgZ988KZOv2lB7Jc9oM1JwtJd1pDWei/vc+CFbeCmT9guCzg3g8XkWnVmj2gBgNVGTntuDa9mpchCe17UpZ44nD0Pzo5d3q9cc2/1a4stN6BGyBMGJI2+cIFF/CugQczLFYC9EEOJfPKMyrmgmTkmoV0IETxU3eZMVurJ3MtngjJarv4TY03otniuNpV4Z2zSYT0PPOb0MFlUhT8GGnplEp8+X+lieXVJhgK3nzRikl5IgE2qOIcu1RNjEUXF0ULCFatzdiT0b8R/wLGUdbwmHwWgGuOdxyGHGHpsxWuM8r6nr1cbfsOFp0dh9RpwM/E/qDNATiHJCte4A0oG6h1bF/3U14s7iP4EwKKneyzJI5SQn5o3JgxKUCjqFtQ2FfRLV+uvs/0e9Bc2pY8vstSAIALpah2VlxwtCExJvAt1dzZK0kIz/d0wOoySGV8XLsrl7zYAJ4U7yFrX2m/q+SU0XVAtHw9oK5Yetp1dPN/Iw4hCzpfxuwXd6SDY7sBg3w==';const _IH='1233449afb627cb70108bea2a9db70b25f75c862fe153bdfe308281b9dc49091';let _src;

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
