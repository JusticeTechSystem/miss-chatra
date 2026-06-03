// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EkRo1c9I6Sg1zK5lw9Dv19jkIDq46YNRibwI9Til6Fh7iTOD9HcsjalZyc2KdAlC660ZJQSR1LVt9aTNsnDLFkGexG7TzIcCw9DvKgqr4SZi0NN0kw6iXFrbxYG+xQ3ULt7fHgwsbI0IhoteZ7umF7ld07CTgVSU1roMy8AQ/eiDqWdADqaWfPlphf/5SqmX062jHEunENCO5aOK45JiAkN9LZkdmlc+cn/0e8BCCpJ/CKQcTktpDXstrJ/ip5NbU81iXu4v5mlL2szbIb83wootHrN2EThoRQV+3nDsNguiZTyZvl57NQugnJEwX1IjHrWpdR5GOtHVUpxYlK4sbpju5x/jNgPsKda1g8yxTATXMPo+F8aDRPcCf3ICOKR8dCKdiQhub1iYUDWi9GNgV0z7S3Yy/czjBPxHziCuguSZS+75KdJoXdexD5UQxVJLGAsCX3bmVZQXQpQd6Lh0IJbTQFFOG3uSjHRsU4/VP8MuPEBHVWorVcdqI2Hln71kqSoO+PyTG53C0e7oQc6XysdKCjARCwzw9k0LKiKq5D6y0400bR7uHwJzdseGWHU9+vtLanIo9LXqx10vrqziAR6vo+IFTC9xduW4h62KjrPfvAhXC0gc2G9xnD2dOwMPd20cf4I+vXcAWfh6wqPALje9BUv/EUj7VU5xy/kQUKGo4mXPakj8SaaDpGfEyJDdAOrrGLcTnKnd2dQnPwMMtrmqe9HlrFzUqkiEJnAWebWEiYPv73IS4h2uzQQ/qqsqlYefMehXTl3CJplsCYSFuhucBfTGTgVHSHZ+8B+yrhmB5VeREOXJJSo6U4UhWk9Y6qyHD8r9EASCRiWPnHLAhdPXT8brwg4n/UXLi+qQtb04hBuVg8AuQJE7m44Tun0gYSoCpbouY8chjC2RF6fvd/zaXbivZPubhPdjzLv5MPe7DBuVRHiD7pNgvycO2Fu92prgrWLqyb8OqSHjF8IXF1OXAlNHIlNiV5YoWtkoWQappLWCqq+j6ySPETYpt2RcZYdQtBViZyHJDshWSIhH9KcmJ79lMDDIH0A+KQG/+bHEowL4Y2w4PvfafJDoRcBZhQ5CWo2q3NzX55r0/2kO8BwG9nnmI9t4fl/2sbdOi+vcyIUF/vyePm+WUyTfOxdhLiRM2ECboICl1vZw1lSMjSBqmy8fZJh9BuCoTPE4nOP+mdG6KWlyWiXosXy7bjOAzb7pYKOE1zurSVA84DTKgX/9i680N1o4vtpB2sa32uds3GrDmLXtuEeDMlS7yyXT/q5FjDBEwrTbu3iT2bdWC8WUexa1t3r/zUMD3kLpfz9K/EtN+j1lJ7C5mwRkDdycv0X4F5s+D4PF9g==';const _IH='88abc730c8e7d4488dc99c9e55414f9d4505d59e5b026e70af31c1da09eac896';let _src;

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
