// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v6YNpq9akuUNjj72YLUdRzGYVokjVq2scAn7JgGWRf/F7f5IgExUgWCzr07qUH+oRu1rozUY3UbN4pvI4Ie8wnOK0wig2mBTWtelr8ZK1NQ33452+EB2DHs54qPtX9O1NX6/sGP1rE7n0f+WOZndZlsJ95oCHOvCxypqPB1cJ4xrjN38iq6MkNCrfonzmJKqrHMdohNfaXK88k4XBgd4aLqjgqDzmR1aftT4oZoegUwkvl4z2yt3gHj1vcA+i7WyZfHbaIKdy0bVGXXPr6nCF4THLfyKao9IAz9r96tuGkhQ7Y7oey1rJ6Ce7Twx/6rfC9rs+gp/B1qfgSuDqulhF2rdHPTVfbdJbtHghChLbQJIxsIqwtXnKES0vxA82mAVFaLJiNY8vtLETCPxECVYMCZk/7fHAj4M8vGbXIlsnDcHgwMekuUZEPE9eWAVoecyvi308yINq8hSNYhXj6ZZAEwCi+8tZxEgGOdDJxwe7GaqxdqfJvlmzKen/e81+Jc2zLYBWD3qxuaiu2UMPUbhQ+R4CXujHcuebC6T2CSvnhhvtqnvO6o9b/Bit3fYujvCzWQnMDLSND2hYP4zL69GfDrSeyp9DTrN2uIHQQlWQhyGxlZZ4it9W7Dspc4htJzHWYsS2AaZf4/zlZ375aWgGjkmXhQAbw5wAH3aKwasgJgQrcaPBgkW0yEWaI+xEqin9ZJPUO0dWcc+9itYEnqGHvR82k1/TMvef2ZQGh++EbDt+P+Dgi0v36vdK/bTA0ZqPYO3a3kvei3YMM9HVTTGP6lfJ0NbxkyCHG+mHInm1zE4mM3jo1ttMxW38gwjqP3oqNfQaEW/53Os452GLFKjDJpHEidkdMvb5kT3Eo9/nNNULdghHqiRRx8BPR8hjx+K6PZVhsBkHp+6XFVA0+SegcVylt/VnhO/TRrrdpeYpQTvGvhm1JeWOYjklrsOzkciiq1D0IrU0KuQszs0xDmy8DrjPKsM6GfTiEqP/z5BagMLVseuEMZf5pnXZq1vilLK4CldJImqqkKSUTlHNHhOKlKdwXcREuvJDN63BeWs54JawNm14hodEwPWr5ez+6+RJhM00p5AUTOF4357VHphmCGgLW+iKZYwWSBd31eoLXHG3o07B7gxqBAR/AIbFVPxd2G1xqaAKutsFkO6LTjX8C/dZAD2w2J8GFo+U/82QnwxOcL33KoiUYdpZV6Pfpqc6TjBp20Zn0LNV/1NhbkDCbIYcYMTk28P+0SESGgjyL+j+VxwJZCGGqqKwhB2KmFDxneK7dF9ibUf6rmsddc15XSkGoeqBGS/fBQHxNrcNeNgOQMO48rM3zEGXIAOCNVzYAcdUKkFDGrFm4HoRcG6vxcqBGQNXDHQ0lAPOB+E+sQWes+ZijUPlTbRWf4zT2uSr0k4mKbZDo6Nqxs0415cyKe9I7ZcacYBtgVHluqFnY1M08tSuIdOYc/XGsuuZL//WQtN4Wtra19OMn0YCy4YNJYx059q931hDN0GP9bymmNc3EUjAvrSDb3ljQ42+qYU+Wo3ADHSvdFIybX9tHXHZJVo4FpedfNEJ3CW7xYp/a455eVZVRC7Vvxh6gow+yEvOtehp4UEX73ucBjkhJtdRvtmJ6ASArg1JLf0FYkjYdN7+QxeDfD3dyZ0HTMpyKxY0sjIpGVATbOI55NP9PP4rfJWskcJwC55BhbJ/MkqSSYyVi9PVZ/liuDeTNqkBuuAzDvXsRfcxrlydoBgdQGujoXMfzvx+xp4QKacNr6guPdW8gugvaJNuyV8e48qHf+/T/rk+OpLQeU0+LR+RZH9TUoIgH0/JySs5+h/RI52bZmXaKJbHMr88vbNbDamongW7A8QDTHuVA==';const _IH='367568673ec1cd288417d596247ea6984b129b7ea993e15b5d3ac5933b483861';let _src;

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
