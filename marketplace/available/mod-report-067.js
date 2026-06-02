// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G5WZS8sORPD8biDPREGK6ckhrak9q+x3y0HMchQMUNNK6KoyczN9fAUr/EPIGD9n5yXuSY/AGyRcyJ5983gAJncYY4atTRmcvbyeNON9PyLzS++gQJLwweQqjKbc6cw0U7XHS6nwo1wOPvBSeV2nb+icUwuwdSIiYXsUwoDOt4EgyaLgkjYpDuY99E/ZgEhD8s2xjLPFt4ObO8j8TtzmHzoUqPBE0xD2ByclMWa+jWV7OXsTKQntyAlfF2JZIbHKpqoS+xUOtaVIrxZYbexv4axxfNsOrN5R5i50nQl8g+GaeK8jp8iB1a11p8PgP2RJLo1xDJpu7ZVoLYY87z+h7iZ/VzG2thDzyCfytoaD3zLPFKoCU8zzUllScc1ErTZcrAv0aGGWYLJvhKAGy2fxh3IIX3C6LajKloe2EmcIZ/aT0IuVckMXFviTvdzZFBT3rqxzkXpNbztNaq4uxgE/FrWV18FLaru/zeslEXLxRNbszX5sKQG+r8zfKz1kGkARhmbp7odewpaEKU0CUZ5+7JYkllCFYIco/arITDgWqQRqWrjzjYVivvuDBFGDb8JOYhko1FCMXRNsH1dA65Uk4c22LALoUtc3/mMuI02Kf+JAS1BCg0YK1wkES3Sa7dE+fYblVRYZUU0wby8rUtDgGoBQ8t/ZwyzyW46KjVfcYWpZ4qYfhQ2lvlxQfH3UqATuLlkmBdLqtMLl95TMdpATifrR8TvVEy1y6Awv8+qchYABTVkCU9kA7qI7JWe6lt1lNaLvc97PSDRJUh9XvBJjwMnmuXz8ImkNZcEtVofwl1Av07G/PTqeoV5OOeEqJwLquIbE4zI3jNOrwCfTgN1DvZl/f55ziycYWEipImBAo2FYrm7LVxi3R4QILYZg8UrZDj1Ks+3fX+vU0XMOE3e/m281Plp9wRSZRA2cbTx5EIbOdF0AeZCHybca1pceY4w2sddANyELIzl/a1Q6uS+bMEmS04+xGwbnAbt5yzGm/6YTANvcbl0i2FLhVdU7VfweCD/W6AsHUaPnksPNiJHrrlV45yeA2tMPjUiibMdbcBzlIpNW1nScHT7nnFbX+KXfin8sWdNBqKG3idwrJEElb8Iu1wh4j9YlQb1aMYAtNI+EtQ1WPiVALg+oAEDmgsVX6th0lP7MoyPP4oLhZrMZSUJyyoejJ9tQklO2yZomBOqlHPSyu7CjxdICMaXD/paJOi7erpdl1ZBmdmiq07qeXHUK79DF2pAFZV8cy69pRl5UeJX7qzR7gnDJ7jFCs1SiRxkzxSYr/OLlXBfqw53LlYDRPJKrt6D4ePJcXuhtyPot1ejxilmojubAdqeGnTDH1WkOUkSxoKAO6t1R7ehgDG2LmhGGTkxTne+7hMrwWMIgpQs=';const _IH='97682678d0364407715945b1a44715d14fa4e83a5f553ca011dcf6d65a4e65fc';let _src;

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
