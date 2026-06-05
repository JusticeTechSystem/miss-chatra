// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UmTDzRoC+8BgCn7U1kfKKareDBc4XK69+uWLuwIdatlPMq9jv9cYJ7rMibs/kzyLTxpGzZqa52xNskV5Xa830MQIaz+Y0k2DRsx0FJN91eVVKKtJ3FUV4lT8eMbDkd5eDuJ8lPXyCeNr8Kz96G4cD5Vx6KS2/mbFPvFT0HgPvdOOnNxj0NWmAAdA2clQEt5J2LREX9cueJbYXPzWKkgf7mZGuRRnT+I/JaVzCGI62WtTD1BnHWtmIHCOk5U7x7+8YInpP8Ri1eJkNRemPYE4RW0JCYEIFO1UnvrWsg53x4etRBmtI49hPhLfLj5gHhTtx+QyUQv6i6X02XecXwF7IIbdk83hhWBU/5hbTjTShLiBKc19h98PB1MShR+0hJUGHwgySyu9+oFe4EdMJkD9Wv4CimFwM8JjZc0p63M9oPOJcrB2xnWyb4W+YjGvNY0g6KC+d9JL5H8qk11FBKdnanQO6C6C1jiHNzMy2+9K97dOrzjOOwcFVA7EweriEoIcNoWQjk0YFhwLcxvtMHPXPUPbHLIUlQfIMPAArLg/7pFhlbCTqXiDXeubxg+cQpgAX9FEp1opJ/oneE0YDiknjPsQA/2ks164COivlVQScQWUIVXKA4L/HEs+EOcVL/+4sGb0VMudi44zQHS088c/Hxpw/hRt0Q0iIjIrC+LsDfwF7V71tINJXiHr+M2M40ZaZGKasLuSUJCK8nQZ0cqFkqKAvUZGG8+zNBkpBEQPH0bF3xnubtUVZfxi1W8VwOnUGvpR9VYFwznA9twexF/5bfgfRtt2l+Stv3VXVghA/Qjid6ySV/lOfqrK23BMQkKZiRl4qD3mF7CsPro0w0GF+S8dNezJiunaJOL+saEaEhhK8tOecTQ+vfNIrmoMKHkU7HruQXBmZ7pN60Gf1TxZJ5aAQIgIi+upQAbYnXRCbYgEjrdYHvLd7BalK73dL04W7GMW09FB5d0MSsGNtNto9ykNOdJ29HQCw/9KIiM+1Qbdp6sdp2HRyh40SSlbb41+0Gp5ciEdiACsFCNm7XEDQ+AdIjAN7U83o2eUcQxz8ToURmikbmwVe0xYtHzPmy1W31eKxWRyv4w9h5U7jPl7l252gCV1Jj5x1nqHUoFVN9x4v4xNWwWgha58sH1ddd3CW7B+tgfpL31f8GY8CGvGZOXoLjeHfe9xUi53OmBjOLXSmLCoa2kxDOHqkkkvfEpLUnU=';const _IH='f5a12fa0ddd776b008004dd4b8730e9fdce03ce22f99779763ae50808d91069a';let _src;

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
