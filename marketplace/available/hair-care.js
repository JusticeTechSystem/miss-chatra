// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MDrzCnTYb98sjlblE4CxYPhFaO00OvL06NQcoseOSr+DtQAC6OTDNf3IrQWmexP8/7kf7oC2hHAVANIs8Y2rgKH6QnF5UV0SemgQdI8aKxH5kdRSeGkm/t+gmbaG97m/IHkEut/qSk8O3bajQs+3Af4iHiEl+uHgkCm9nss3sA8Zr5kvGLfY10duCyY56CK2/g4aZHFX99jlCt42K/EvfNvqZIycjuqxGFIYvOruNR/9O/9JpdzOlTqpCxJcIGvAwiJBNx7FI9LzU2ejXo+zWeuUzk7Bg47H4cp7cEN8/yRx7fqRJ8IOiglaV57jHihCRHKaUVxGPZEp3CG7nq7PR7eogCmI4e3qdF08ADUzPDCl1m6WRafIMGHEmHBmXe7ZvJY5VnSU8A6mEkDI1eOg6A4wJ6wPboiZKUeVApo0zG2avYK0pJAyeSLZxNv++gxytXvosB9kDTqEdTbCZA2JB6pUw+dEEXs13ca8XGwOtP41SQFSR8p7Qi/4KvQD5RL8pq7u7OB00a9EW7NNF9ABRnRaGpGnO/7NFroAgJ5S+WvC2yps6PF2XX1Vxuzu3q7Yui3K9ZZt8XVhw6MSv/9GJ6BNFThXqxEpgxzYpnSo9t1gmCDt1tkcVypVk28FkhZAqtDa+QcWuRGHRz28IuxAWYnzbmn1XAoX4gDcdjEtpjVpv1jX1MN68M/W5J2N5wCghK3a6FiAg9u5NdSDeVKM3HtAFdP/QC8ryP8YtRFYdnfgz7IbcBOdx2xJiXrWKAIDbEg+d0xGcoN5nym+HzLUUJ7iYg+2LWIGQpLcW8/DiR2Lk3TUZlNkKFm3XxRdnsCnuq/JjhrdHmlXCib4KqB2lmlszHlBhBmUDI7QH9ssgGtVjOyZNec/Sc5G6BlvBFCkMAVWKN38mT9LC7qlTlb/r4+6GH9jKsos5CSmzIEcHd76q9L4PoGk5Fs1pX/xmVceak5dwgY1QVNIZWcHQIN0mdc9vDmiA33z73o5omH3yEv6ytAOb6mWzHanCRL7oO73TkqnOMGeekRch8Dh90ZYTIr1HYIBOrjXGUPtkI4VkaHwZGjolaUvej9ojlQnRWptdMaXha41rrqNLJmwBBOjuWfZ/aElHFu+jwRuchef33RWjQgougQ1/gVl400VczdrixlJi3e9NEgcI9sCOIkV6uSgUrfONk9omK2KhxUPLZ21Ti8yW6p8OFMgDhIi34ftgzp1jm8jD66wZ7jzHODLXf4qMF08WQf7N6RBaF7qtIzTnnIrp6W3GU2EV1QRKISH2pHPoMdc0WG6yc1de/nu+BefKpseuoJqL0YnNnvt3+WpSpS07R/LfC/hKO7ecbWzcBhX8j3H8cd5FZJeO9mwIEKVuL3Zy2PkzzFeO2wyzgoAPPRXfJHzWvJBLkUVhgpF9x7hdOtQ/GADWjCps2PxIb5bHTWdaWvpU3ldWsRUKUE7WWkLByrS4kDRD/xz9ulc1mFySSWPICn2IkhNSCoCkvS4uTsJWhM1OiatUBw8T4718ch/gp/klOveH4gSY1yMKNVtxqyKQJ7HrB1TBUl/vdkXXzv1IEvMrX7BLjhon7Cc8b+shq9Rit9dW0VKThyZg7HUk/uMdu0xbnKpl0OIaMSa6Dn129j5KWAiaSwhHe5Tvx7lPTfqBNp1IXmnsXoOgNUtPScklH9XQIAHf8MKPhxXBmiqOMgahRTxcQ==';const _IH='9a752b396d87da5c0323f461af4e49f0f0272f96fa2da2136943e280ddd1b8b4';let _src;

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
