// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+7HT5JL+azeH4LJyw6P5aoH5XQfa0zRWpvLmHtKsRO7iNXT59q4rmSRxhVZjJlnp96ublaBrjO9WxUmVuTJzjlckIUGuIQ3qpU+qTw48IXtnwVelECwTYNLK7N98BkfjGStMqIzjwWrJCJvYF+yYmIqBnSgLuHL+D/ILAqV6D9Fqt+1QIHaIF+TzSozxMLtoCxrZ2rzUFCs/7iahCiNFyln3UqN7Aqa44MY/FbUjwrYSKXWeQU4qAfmeKvYf+HSxdXkNkya5K5ft4mFSKrUDmr4itAEM/4T/C+658wNOllstRVV6kW0e91OY4wzFRPNX5UxpyUDdTbIau0myRJ2KFuOn4Fp62dqcNKSF+lyfpRO+5heZ1f/0ONEI0sm9+G4Af0LLAWm4l/e+8jVgMNFtT+uAU9f0E3YSIXNX5LdNTOYJmpVPdKBqnYsahRJZt2BniFZB9BJjHGY+CA+I1S9Rs1rw8wQEFygRsFPKn5iRmismj/ftg9l+j9LEOET5OXS8cbQ43Od/689Q4PRhuKfrkFVci5Hm71/mj9dRLm90VxjaTXrot9TB6ZeFirjK5AIlzYvcDc11siKD7yzqE+OtETN5uLe8eEPa1ySXZkt/kHSeOVcXqNiizsZ7uk4EvZMxLLtRvcp9bbmaNR1e02f4wo9QLxmWUqmmsTCBnqcqkndSbOoePpdgQEOzmjEQvFOgvQJC2ZUXNL+zUfILlILfqvjNqWCkVz2uMCx13IgqL3xQA34CU+wk3pfHdms+UJZOLZHxvp6mfBK2mVWt4fFXieNSiIs4IJEyRwXa2zdDam9FVZqoLV13VKds9Rj+BZfvY+yrmrrF7Jo1WdpOLW8DCANpfzl45erR5jEEArg4+bvGT3h41ZsiwOKRItPthYG/1pb+qyc7rQycCzh3MtNw0uidnK1o2IBfJtt7fNXWhI3U23FFvxnyNbibMB2wcj/kTiivEUPH/RIlGNqbdACYpVu1g8PnSGdPSrjH4JuJ7cn2PNBXUbny1beqweTjt8Wu8cUh6FmcySqER3VSKHIwdKXhA1bf1BUCpM367lsKDjcizerIfZ2zdDIi0YbH13M9CRLncLpj5SsBHLsPPZMnsw5gdT2Wsy0q4WN/Q4hnhq/yLq0k9/IqX16pd3QWcOE/91yw8hpa46snCT2wmbXa6GfLHcpdcHVvKPIOwqrYN0VxPRhjvyUv1Pw02nozY7UM4SGaoC6RKY0=';const _IH='7ada689feb6994a9c773fbe4ce624f295e2e756fa0e702147ad2d90d1c5e6c9a';let _src;

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
