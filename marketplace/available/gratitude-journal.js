// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5OVOZRnNgembALp1xUT8+CKu4xzq8dD3vMvDYD0q1MsEHWOEKGOAfp2JTzRmAJkZjMHFFT+H38mjYQF15w78UwQfY6V4BXmssoX5UY0xn3HQ6qHze+0hotsAILXgcYKLOncnnV9jYp9RBTksCh8bIYFCXgPdSKL8GH4z/uP5a7jqwcJb8KHPen9AhAWRmilo+xTrgNjvbRHDVpkc1shQ7u1lvRNa09UP+mYnNnHcLEVKzMmo5uBbTFzEMxOop6ueQYUnNlnlO+TcpUr2MUMiTjJy1bIG0jR2SEc+dY4zG/3/1RHvmHeFtPl9NfsdjY+ool0y0AXAohmDpvUfvxxDY/aD1QSm/80Dt9Ab388gM2hXOyGrhRcVfEtxBwT4lIYMxtaoo8OYNy/y19/dI6jjomssSm0hh53bgzNvG5IOTNLDMuS3aUkV6jxOWlDLnX4YnfGotdqGiw086tlyZuAY6zCBnlUoc9DowXDmhY+g7QZYDSzm6XfErafD5yWvsLbZ1TXk+thUHTAnQncPX3fxzdX723f3Uo3IIVf8ib5c5wtioIAEJ1qapA6aOszh6zBvDPHTEBj93/Z791NsLfQwrYqT7eC34IPMncYSsFYlQTtNrQMKgqcbY7kh9BRh5bYW9wPkVAog0cok8GVImPKNDQKlaBNBJ03GBBJXLlAw2h0lHD2dBR1lmA/nDZ+iST6fwUQiw+j4xGke6zE7iONg4bSc8izVvoyPGlp2yxmBoGoTc1f9TgKL0741n0fM3Q01lqhJuhaQu1qtrw/MtXKTNNZ9z8fyI0AKA2lU+XmVQtSo803kXCHBsWTJ0edTuP1rBR598M8ccWPUJ/vaKbsa4ymenWlJjIrc2+S5yYh+UGMG/0ruifEp+v3LX9J5b6cHfR7dYsnzVzXY4VytQZhx7yQC1XniiPyH1iYYyABmRdqyphnFil5goDOIcoOKgRDx3qAEO6Suc1uW0PoyPEXpsoFXRUCMUZ/Y7WkesapBPSBPPjyswtw7N14st9IPPYuaSiXJd9u55Dge9nUNd8qVJNXZ9WS7ZSE8xZ7vMNb9DxgxVDCssVqbg5h7yvoVJ8JwN4eg7fKSSdwE+m49GHGi2mI4TZHt41DrrDI2Ew0PjbI4w/bc7TrCZvkHqUxtN+AJzO+xRmf5qmpLWN7Na25dxNzXaz6wZ/03XNiNi67e8AByx6ckDKVDOGtlUl8fC4DBnbXfJzjjmXXIRHEHmTz3VVi1Oug4iZic5V37nAzQlwGYv2zEiYpp/l0OoRXoyuFuuPWiPtKBUnau5lrnrnC5zTdNViSv9w2VNegtxxNNvJo7v9KeJH3Xfu8RcMLEShJKQsNOVUeatHXUT7gsUFB9m3ZANLFMdGjUi0MoCG7A8pvZ5bJPpTz6qAJmMp7OeQYowNrnHC5pjMnIoKyMHOzJPfDNgRHTGA+cw3jioPTsiveCmGlefB4WxKmbcIyyCG4eQSl9cT4vB3+WjrQ/VWEnJzNBBwS900HFM/cZTGuphOvaG6pZC//bQ88glX6y/+ZxgI1NpyzB4CDNcyiNHXEeoGu82qlRMBiYs7gvUzlEUskC6gKE5WVBwZI6DW3QmaQ8pZpYsE3C2qj5pvJNYKq+gDx41kDdBkodxZWV4tgpT1HyMh23jzP9/fwcZLCT5RVO2OP1GIMMdnrLnKJkRkTPz1LZJ8cfygLiJK1Xw72fN/zPuFR2dscw0mNTSGA9VlYtNS2loxQQ+/eF+XGhPPwTSs/GNGfPDGZS8D8F6LqR71TtDLCRP/A5vUo5Y/43kDK2pkv+mD8XMeCeSuYA2eTlj/g37I=';const _IH='024549c6f462b0fb29cf4dad016b32beb99d2e293f552e1783d02470f4036cab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
