// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nMJbGfDcgUEXIRAAbysCRoVUQJ4XwvI1MX6blvQY/ZinCDY//9PJSQWLoIA6XZCh5ZNnB4u7XvvEhIi5J8AmFf8TCNyAWyLr/j50AB53M7ZJxnzCLJbRR9iTJ9LHgr9VgT3EBxN9jbUuWMzpuGwAV373uSUjohMvaTMLqXvnTbbdBEd47Jb2Zhct7SBjtaEXZ/Zc4MIPqshivk+3t+oREsKziNIHaJqiOj3L+qEl2HpN7kWIEokQQ9h9PWjHFaHGx3qfUGo6BDVLhRrpjqZyYOmMIjmW+3WElaU1IPAKMwj6iyjKEHiMiDXPnv+l4TR5mpe+I61z3Jh3/x6QPT/QeCeks5PJrLBBGh5QOe2exMG8EFsy6KT4V99Wq6TEjew8RY5asU2D3mz+V2r1X1lC0RjM+34FxZsoZNzagaV6fAh3r6Y9LU88PhWQZwC1vfJmxdM5XMAxdMJP6UhMVk/iKl6GlOqliSPWl7dvV0hPVX9XI1mDNwVjNsaLGwB7dJK4Ev07FKSAyxQqPvRgllltnlS77KKNj9ZePVL1EfpR3NxUB5ez79bGgeQ7PQT7Xz24StP5xh+fPs/i6YO6Sq4JhUeORg/92SY6mk8ye/kGCilt68f5ZT/l1TU/Vc3JU8LZUjvE4vZzdShNE8IlVXzWsDG7st8wuxAwICbBM++mbe+FzvD9KnFx0vcXWmpnaJGJOc2UFJK2FAq8Dn6ntxTcFA0ClgFJFTHd9Wj89aLEJY3DB2VlR/Sb9+u6L//t1dvs5O2zQ87KHlUie1p08WFZR3CUVmOSb5vot7BZ70eJFrK7rHT96zm+/cGc/Fb53c8SS3fIwQrrAMSZ2yQ/iT0OY/Dn88FlaCumurEWZnFSztCI0JRb/cdUull8cVtqrjyRwKfHya8AIqpWHTJt6LNAfjzhJVknn3YOhQdHo4fNByeTUpcmXnXCfXhlgykIbn67Mg7JhApKhwB8bKO/Qf2hWYK6o33oebfmGHMyn74XLLTKeaWYOK4vDDR8Wfilk6ooo7dg2t3TgDXfWrq4Az4PVTs6Fld/1BGx4O5FTdARypL2XDjQKx28j5Acco3q9B+DhD7yChmU3WilJGHqZun7HvzxnT4pR8GFk2RjyxvDV9OeiMO/7uRCoFFRXyOwkeCYrcc53e3Lv/brxXd2lhzJrQhVgKOiMswUOorHuUPbAMzzTrVUkAyJfYSHcUxcJkaIyilP/3PaPFxV1clCO0MVZURuoytwfNJsnKBPlGithP59IueBtzMMuMTbqIIJhutK1qKnz9srA6p2zB3vtfrqfD2IDrzHrnSJUVVRxF5P2TH3/n17Z3EPE28KoTRsG/fHlr+SzGF01WQ4+rgl8YLz3Il4qXOWSgx98yAk1bletPxzlX2pcc3DdC+4IVL1pKPexIhcIYUm0mJoZNJXmOONBPqKQj6+chCmRu1jaylQqPZYGjg/cboYhfWtQ7xUAxKem0Bc5dtFWWXw7ek6VqEPpiUxj+1YXmCYGSVOxs4RkUeSZRF1z50KJkWSaKtFSsbWmJWwMG7hGr7ZfFad4HQ+OXKipM02kJwgLI99rsj/zVuzTpNCzqHNqKaaWiV9fW714BdsOwq7JA32AVgixF0pb39xrCg3VelJeIVjgKHsMmf7FEfYKIRqIs7H7KZqX2KpNcavMEzkmAWFE2HM8aebHX11e/rSryPd9uDDXz3Ae6TwOLJ+RRKyeEvcwWM3Z3pD12/ComWo19/mSQFAbOGQ0fGMuPNMf9/zpilwM2Q+JIWt';const _IH='b042fc8df4f04528bd7757b927a0ecfc1052f724ac03c327c23118759f360b8b';let _src;

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
