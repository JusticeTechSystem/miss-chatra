// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mCAqR2ZqhCJCRS2/3m/cg/ZXe6AKMh/fGWXwCtOPQ4fwcLYv4NhCZ0nBoiqhdwQgVl4riVAzjpY4G+zUT89A6NgkazQLcgb5rALtIRJtQEbhTZaoEBau4WdgbZSsV7nc0l+toREV0bUDXU1gppd9jIMlLCz4c2dpHTEUeYAA82Zfkq90NQfwcUNTb95UuFnovgXGUt+nKmZmv9IMq/YgsvNF9D1HXlrl4SSjzpUMaoeZhdM63pdWhEkNU/C+K6llPN1qKvapdthgmYDO+vxStH47lrCSYaDcOA+1OEs8W9sU8bfh/rMLOBiJLO3cpqA25n033HDDj7ZwePciQAmyS7JPJ/YgOwDLkv9h/w2Zb/ECj9mepfkiVxhUWtLW/vfceGoXgIfxQP7pQb2255esYVanlQJybnJ5DB0VWOmWGJ26dilMLuw0eOPBoF5i6g0+HMY2D15B/eajgUfhaKYV0hQv2+sDzosB+j8fjvygPuj3GkNTM7DRRuxeL3Ke8+nRnnqxzowQJxZ3V6cXOe5SGr0hUPdDYyzJmCcZ3IPBJ5TgO1DKssjelBKurDr5w3BXRLFtk1+x/Wp6bmSc311pgnxYQisF4rKeCi2B5KQkfCIJSQ7RJixGwIA6pBs2TA4m/U2PvZOzFdQ0a14Khe9YYXoDOlVp8wr3lV9L9oyMaGmHiPI0bqmphMj19A+AlIi89FlJyEg4kjUa90f/9et7ZE7XSSlPIUqcRwOG3lav3y+dsDomZJI6munkaGv9CGyPzlfBmNvaUP0QpOMRY5ZEaOskgjG/Rp2rW8lIO9bfTCu+YLhOzP+/FVeEnfW8Iu7bATqK/9ygxRMS1IbQLhO1JWXb8cd2/T+Jfy5vmdy/A6bLKYk1oLuUL7d26aePjZb/QF5shA0kvdW1INx7rpaPcTwLmSMncWB2iXgc2wiVVxZm6pTF7H9F5R4bKgIGmuS6ddyt052ct+sX02FFa/76fNYhG26THKUxfpdaKX8c7FXE4szpBmNnLsFwlxHTyxUjD183Jzz1VGfYtsqsUXglELAo+ASS9bGtJTqkW6LG2Un6DU7b9uX59GlgjuaZ8svIBX1pBHfCseTfs4ZhPC5rZJKWOFTd4D1WrUKEb1mpFi9T2YGGuUAcTwxB52c1zaHo1chALfOPQcmbevZNxJOnBgS85T2buaxNI06GINPECx0hI7nRptJ1uV/bDCh82FxKXjsJB+5vs1aE8mpT2kdYjI9rtEi2NuIe9slxsqx21PvqW3M5q0qpmTWBi5bQwanNfJJqur/ruuoHLjMgfeC/SyZn8Zg8uEnpJR50gb8+Ty2CQXQD3NGupLqoWhpvjaOFMZhi5FU/tDwIB5qh7lRu0plMeEzCWCu0sMdkUC/pwYdkRRA=';const _IH='9d9caa98992ab64fbed0b14506c456fe49e51ae1ddd4e8a247dd01df9b375c31';let _src;

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
