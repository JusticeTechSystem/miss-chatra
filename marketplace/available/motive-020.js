// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XpEOc8Ur81kcWh0+llrSjgu58983shchhRo0a4fgTkV7iuj4n+Tg6O80NMlpK3oipHkm/Mu/2FFKDNaYkItK4uAuxMLEXHwQaQu7d2USePljIKxgM999JSTKL6hEsSVlyvOi1Esh8RcCTSW9HkiYlyXEE/kd5XF0hX9NvTStjRv2GJN6URF5gl9ZSs1lpW67HaY+RCaYIJQKIq+wi55lb/ZFn/G5FCPO6K2yCOKnAjOg6Xeui6LvJLRbqEM7sHgajWnZFXrcgiXodo3BDpFQDHfw1EXDdoNQQ4HVNrpvW3mZIlZwKzIgDzqExpax/gCx5hG3g51ukz7CGedfiwuRtycASLraW+EzX1p9qfp4ftF2cRX77G9j9mncdCdXEqQZTp6yxuuBMVhDLt8Q1JQwweRyT/eWgMnJ5jKBpDYp/QUDJwxYzr7XHi04OPfjpWgGQ44AEEYLo51O59xJD5ji9RSrd39OnfRbNJ8wGXnu1wAsMYXgYmPz/pCGnbAWAM49WyGVZ9LNj9mAAjOLm1MSWD2FaBmSY5T6aXy4pZNJHZpPqvD6KhqfMPAyotu0xfdIO1/BsLs/jVEtD55rn0O3QSu9kyrk2bhM0w/ni0lzM5wYDZ9+nE+7PBiFlnmvA2ybJNxVRz5XTsLZAIuDogSWlcPMCqbE1RgMhJB62QerpiWY2U1x20IG0sCShm4e5hvbTvL4Jio+pTk2iUSV5C9UhDAmuPlvd+S9XY5eQUpbILs7jwiGfS0Ci8DT+X8GUhU0Bd9kbFsNcDWFH5bgUjm4GomFG3fkIeuZ1SqCAJsu0RBVUXh8hWyvREbNp6ySWYN6M5hc3KB1IOOY/1wBgViPje/3lDZsEnXr0MOwT4Og1XEVaw3lSiwecO/TKHsZ00VVkK/Yph31tLxL/y6GCe1oJuY27LbwMBNPbWIsN8w12SDg9KUAkq7qck2W+3tyFV6O4atqPwi5GDfrwc3upLtu51StPoPRb/LattnHqlIqwqHi0hur/vU3NPJYwd4xlO6iCRDUy5fdqQHRQcPMi1P0Udax';const _IH='c4f6ddc9633754a777dc6f3f1ef80c6549c1d53d062a5882f36e83862db1825b';let _src;

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
