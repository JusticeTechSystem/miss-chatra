// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4d3Yw9TIdXLye/L2HV2zPFTAFd1zfuG4jRJoLV3VtlHuaG1uJIhOpVZ98SIvbPpy+Dm/ZFkBiVjFZEGH5qI1kL3XDiY5lnwM62rWXjD1gEmoOJMAUQ+l57cQ8N20IIMGbdiUIvLrx/P+HQSVVVIADCn6jCGZgU0IEIcknjFJZ/Km1IITAb/Gpe6SVqkDBRveTUVdvt8/wLhst4lp6xlgorECItrlNkAkt5l2i5egyYDvsGgAqetsHE2uuIATV4hhckucZJ8by11l2nz5Rhqir/xjDBwF2+oKgoA4xUEw2z2EoswBE9+uv81IxAI/fd0pzLFY9kqBPaspcDl44b12ivCkWpcpir1IHsaWN8co+kCIKtWM3T4mjfd35eePoVX9Rnf5MfIuenrkbSrmlso7izZ55xf00H2k9dygjWHtnYgcE8ByXxo7xVNEQar+sj5uPg91oB3AxWyK7B7RRTlDC+DK6A+4Kk3KXIgBhncUlBtL/aduk+o4GHVEthzdCIgRR+rYQn3X1Jlw2T8wMBYU0MAfg5iXa+1/3rD8ZzRurK+bHCop8dfNscXBC6gGXKjoFArza4zL9rZeRPLKIINlemM34sAUuMmeoAIS63LCyr37n8WoIcgemjDR7WfkwfsXZv5o5hzxG6HIQ4HcurArtu0RZvGWAL8AYdHXOakIEEpk/HTMQ0KcwDOAFJRzTnHjtht0rZdlruuhWCu9UxJaSmDfKNkVmOo2eVSYR0UP5QwRr5aRjZ4a/OB+Zbx8a9n+KhmH9ZYsYHs7Sxth0qwJLRKAahtDq1dRBGhtjsXAfvyWTGv9XLuZ1pJPaM/KPE/khAXYI9jclS+ym8ak5Bpk4t1LftfjN7FtTLA/H0rucerQ6qgwARh5oEFG3QudbZa5OSZUFheu8X8FnKxaMee8Z26iq/3Uh1PDDbKTYpWrvYRvQq3Pek+O1uoE+SQ8zUJBSrLnRR9s0KjE+h8yg8apPxKtg743Tm2D2ZV1op7WOvM1WH+NS5Wts7MXoAiqCNe7uP1K/sWv9no=';const _IH='ee8a2066b9ea46f167b685f875c20f02d0d2ad9e8f2eaeadc6e980996780b8ed';let _src;

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
