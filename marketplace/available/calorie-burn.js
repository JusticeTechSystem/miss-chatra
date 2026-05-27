// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDDyeuhmCLfw4I19QzoNwxr3DdkNXOaoSuEgX9AyJ/HTNXHpBXOzxZGMdp5iD6bBVSB//NYGv/aRIzb1FUjwWgLNrtVv0e68uwFphWQ/IJBcNJYp09+Rt/lNZgQ+R4MOVR7U2hE0QqjnpAF09rZ4i7uG2YANbj/f1S0XPzyoNp+0ZSr8KAraPrmCua2eIAF3aK80hIRAx/TRsw3H+tswok5AkQ0HCDusKqtLByWbsD3m8pQPP1LL8TqtEGDE4kl+w9D91IG3JeYoc+xuqYW11xaKKsAhjdmpIJC5npNCRpYsRhkxyiM776x84dqxFJSkw6TqP9XQ1EKPQWY8nvebQwrdxUqPGK+bHU/WpTczuPlARBgyv9vfaHIyeTnwkW0U1rdQRp6nICVVyCC4P9x50uQuZYy0mtgXDyanB6awoJS5/d5cnShTQj3W7acW/SPkLjHdZfxQe9W1vURjwuJCFNdF1Uwx2klFYOVn4GgJxKuz0Xxx75rTptr+3clso+EsX0iAk/Mttz1DtfI4h+5AE9DrsXs72HSNlGGO6jNP6gRKnRiefRVN9cHKherBfbv2bhnaHaFVLqZyrI52Tdb7YG5//39Hq9SkkmBf5eKSpFimVhnLgosokrdwPy7xF0XoQpqCsh5VIiF3vmV8cxxN1455jkfvazQsApFtWEIE2XxNH7XqgEZhJK/tcxqvoPjQvyFEt+KKHf+ykO1KorDmXbvRmTbj1wSUU9wH448xlijyxxzpuw0lqfjhnoqrJBtgWmHgKqfF/2RhAywzjefnWzrJAdDJhIuYdmPCytYTzWIKxV2xGvR7j7RXIWuLb0GH8Es7Ci6sviA6hnTtORrkcu/zzdZ7sSvVSqAyibjMIQG78YJLQpJX7jCnMx7U6+WTpdGbJq6xkzYZUa/mhlk47kQpEqFWYDV6T29mmx0opp9KnjjXIeCsSWRHifuxg0qRFdCBSiZwv1GkGL+Q6m9F73iLhe7jLhVyLgqxffYpaAfd/5/B1S/UvQ1Mf6w44e2BZOb1ivnh0ksMWDfVN1nPg7FM+YqhsBzEwCET2XlTgIEoOORaRoG9IKlv3nF/B62LpxULyaxxjc6TdYw0sK89XiDlSk7yweSNmoDlzog0e1i0w8GQjVf6U2qFSf0DMxdgI9PRWz5rMinWuoMZdxpo5pr1ExG8EeG0e8e9c1DRIDKBVkUelGu6j2GHo1OpxdRUhipSFwhllKmqyqsL0nwCiyHvGeESae0zi6xFirKD6GfLDibl4VzA1+DItoIhMmH+15pgNHPa4ly+4n6EvOTMd1ECceK3OBce5Y2B/TC28P3QVt0YQAqzierw8ihcz9E/frNpMwaLHOsToa3aaD2DyhtwYsss4YXIPnd6wyd/v4S1bvO7YNKS9ErRrNKuEv35LQpXcwe5MCidkcZCOVwI5JFSloRA42VYMCpD';const _IH='6b2ee5e3b9766b9e5c1d854c4d339fd72bc0789b52eea49d8950178f2d640018';let _src;

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
