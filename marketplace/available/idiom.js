// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ghjIM0weeS4NhlBzcwfjdsTI/jFC9TXeOL/hKyqO8ZLZTNEa1apeo0/mKeRlOcAv1khJCubM+6tWlP2t5Y52kBW88LUO3qSs7GUDvW1Ppf6sZtB4vDPOLgrq5d/uWFlR/FkbjPuLBNakvAYPCHWl3jVdYtzhdvalbxrCTULD3OBcSgSLLJ06MSQeOAuRvCulK0wrMOd1tGUw76j9cQtrBG4i5aqlrIfW2TK+rHpgVA7LWzWibBi/lVLtLEoJgXvBT5o98LMtoEEqje+BJ58lVHGlmV9HRNAtRmqo8h3tOus5KUON3B76FdFVwaKuTmgOaIr92jJc38hhkh9fGq8iuBPFs8Gijm956W/3JPG315xxSLleLJxNRdR72OXB/3BQFPC99+TLQ2SldCQhuWgpvzxFQYowYpPCKCKcG/mc0EgqJwuhgsmeQRzhmdSB0aLr+KvsxQJe5Rl1xkvtT5Muh5TPHCyNYD3wYowOWi4r2U6DMn/bfSHpoa/o0hk1MOvWPfsBT5bIwNlkhPei+ckl7J+0z6t7FOQOS/+56qh/AxxuMjfvWEQ/jJZGlU8W85rYjotmwC0MCXQ9ZPt7F99aZ6/kUvqRsTNcbELyZApQB+mQnzrCsc/Awu/EgSe8QIefOO64Uw7yVWaY+alvD4sJ65eoZbsBfucMzaJ3RBvhVn2mbOpHn/6LZE7UdPtvkAZlCuKvvP5jEDA+eGdRPY+JHiXTJGdxy4BuBEjfbbitPcory3bflCeZ7h+FN4dMmc344y8VVcMkiLHEMAxxLmG+rr/xDr78/OO2+pBrrjAOgx4SXp+19HhQbzwVFQAhb5Isoov9zyiD5N4UvbtFXmPDkAnZxJmYmv+0mVd3GQwtp2NXVJgBfF98HRZbwWc6rp1ST45+WAyBhffUrygafQNdlyTXttcOiHayzAz4iMW4q2lQopnuxtCSepyEGwpL5UnwxNf62cn5tCOesUFkz8Np4f2gPXvkymBPFJoDWs3HBNR0s7+n7TvHVIGsOFF2BQO53DZQ1Oap07Hx3cu5x+v5iV2ploH516VeWcQq71VPexS+TbAMlK8QlckWeZ7dXlQuZlYlb8Yafk5eXonjoufbex6X4TSbrexpLW9fe8C2uAlpeIDzZ/ACcLWwr/4jHxjShFE7OaIyPqiGymJlvP3q9iIhCzWZbVLBS+UlbTwBB9JEJmW3E/JO1KBO8l8=';const _IH='ee74870a95b156f40cdcdd15fb96a2cf20f2248e42611403ecd917601e10a5fd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
