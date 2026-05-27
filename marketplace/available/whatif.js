// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wol7pbG7z611ZO0CU9/1+gDisQ9qkEo65CvquSfbKA7CLrjRBJGSX7HadmGzzgQqRE3D85pCSFatZxqMXmpwvJmp1YqCln/EQYzC5ZsHzwsEWCBRGwVLxBR8cutU6kK7rWSGtygXSUt0m7TbQTi5G1aa8dDuX2Az+5mT06xEOnMg5FvE9aEOS24hDGQZHSdxrwoquzY+sQnbP2vorQAbjWi7r5u7ClBALyMDxQs7d7yFq/nDfxme0XxcjRTmHPjUWi3/qCnGqjuWT/st9Ts1nroLa67vnVK8XwZeiCPWPszMD1DltcTqISkJIyV1PgdT0YEOdXi/qrrmUueX3OaSLMs+aeNJ/W4hkeqwKXQfB/SGnco8XV0mPwgNNrmU7vdppocB4YmIITSs9Y3gUC12EAjTtHMQx5wqa8QZvlTyJeD2YOKnGvnlx6hrhqFGkmKwD2ZCLFMf/IhCifKtuAqH2pjq2pGea9cIF+m3HKPamUA7RBJfqzgobXvjYe+k5/u6aQBqguj4q7st+qUwb7bAQKWnz2SU9KkTEUfsTJnxskiGPpqoKKyOHQir9klZP6E3EmZ6/gIc2uUuCC8ranktoM0sC1witwoyeuxIMF9Y2HfdjY+QSSbh7jetDDDfxhykRnT1rsHw2GQiFFZYhEPG7i1oTv45bwvDiyBhvCrhji3DoHBZNW6xMjMIPlPcxgGpvly8ZSNkn8tj4Xd4l+uMYAeuWJX1ZuPD5C+MzKPoy5Qec8bFIwxmtP5Msx4lXpaZvME2xNDkFJ9eu2CFjH1O8vcbOUYPGcqiJAFr+Ftef+mzxIUGB3bIS1PGWtIKWOcXQ1E8grKuyjhiElDuLJT8b38MPNVjzqt9ZWiz/UAv7OKjXuWLN2A8ylhqzzjKZ4k7hrx1NXqeLtEYL/6SIzje40rMHMy5AowloEL7O1SUCO5LfnsR++2qFL6molKUOcQHe9+EitbiSYIqUqUbnkf//fxxXcT91cDdDBjznUnMNJ1EkPfmXsAmoOecm+0avz2LT5rQWA9+uJIGz1lkjBbpniTwkpTZaS8nDWhHKUx+bjDFVzZAWwqa4krdF0O1WyfQzW7UvT3bedYpJALGFKY6qIzh9p8JFhHvdTu4xSXKwhwoXBGBuTxcldl3l1pQ6ba8mbb46CqSk0VC0slz+mQBeHu05lJVpHjhoZmMeUh7d2iEKHL4E/ZtFW1kRStV4C6v0Tw=';const _IH='1bac941b50dbb9bf3035322a50d9b374b201cc6598fb055be285ba20e2a01f4d';let _src;

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
