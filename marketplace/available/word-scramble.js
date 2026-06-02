// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Egk1OK7lijzDUJwQkT6nS36Bz7SD5J6IAPpnBtw4jA/s67bNV72cxknFJv7lSANkYLRi4clb9Q56J5CTyMM+/IyTFd/gBwIB8FtBFQF63OUKNyZVLk/AeckYItur5p9l0Z0PGoXmMKS4w/YOEmD6yohFQa5DTbMZSss6n92BdNwJ7Vi0PbcZGPlr4rFyn7PhgUXYcpHKzHUkw9zdSaLdMp1spJpL0ag1oKLRYgMAlrE/M6GJtClCT7TpuUugQ8D6ipE3rzS9MSdO5ssn4nzUVyBQuiJAgnyEsU84LtAIrlHqFpS2lR7obWDzDN7qMuN6+Xic/Oyibv7OnIUtEC7T3VfToguqIT1+h9IGx78SL966k8rI+dbxMgnDXb4FQxzSsjxzPh++LeprzZdUrz1S/l5YVlBcA+M7pGgEl8YGqqikiUd2N+i4tT2wO6FOdjlLMN8LaiepKb+8/MWeVgVoVR7RSMp5hAGa4iuk3DZPej0HbT6lrHzFCnsUxqLgvB9/fc8KVFfVMIuJn8Wm0Jgpw1W9nXaSMEmC09cBBxDilMXFJKeBdM2oE7yMA/q3qkQID/Uew1C1VpSz7uPRLBpiMlW7l4i9hjgyE5tnJ+sVfGT4DkbczxxBmrW6ZWRJeIeoZWC43h+w/nWRwOzWh1t2Ol9rDbhDcg0SAWXt39MFEW0kV9duSBX0dBsIbgSmBHe4R+SZSk4SLKfnHgxN+rJVySyuQla97L1Xgwy8c8vapYkiVb/AbhS8EJ6urPnITHSaNEPQiIsYTnSsAKo1TPYFNsPQ/p5Wtz/Vv2BqGqqbi3jkmCcbhtQji++zKwjZSzlBz8/umkZcuG+rPkdqSjfd6qgpOOyvssmWEXW6cL6uK6mIeC7ii49GNeA1ZPi/wymSvFjcgLAsMffM7wUhn+20ReW+QhI/RfetNV3hT0crz3deRpB1ATXDKcDr2n4hkd9MMH4YTAJ+sxYzlny5/Omx6jz8kt5peTpVrFwDofmiQx+IuVj4e8wsenSWyopj1YGP82nQ+FKMuiO7BkXYGbB10wNlra6mH8G0hIFvzTz9J2UJL3D6WH22j8pGk9wFRaBF7J6qq2lCqTuGmaHqaaG+IpxelscdlNRNhGAy74k3QNdqWzG2DAIlL57Hq7HO1q3zx5ChvURZxxnxoYPe0klqQp7detYqt1bYj6NwSq6iArqYNOWS9+tU+GCpt0Kt9DJpiOuBWjp07HNcvxKjdLtHs73jRXzFIdZYN1pOpTvfndRaTK4Cr+AXUx4r7ADr8UuZkVJvwzKwk9ikmjMXdvl/+OmlYtWOOk0lrUqMaZaZb3jXvfskArd6FV5sGTVK4diyVdDQvs2L5ZW';const _IH='4a2e3ca46db46ee29d751555ec9d280d83e18df66022b5bbcaaa61a32754f0d9';let _src;

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
