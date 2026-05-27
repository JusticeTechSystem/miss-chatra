// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5E3BuI15SzrYhwZwO0M3ZIKrUIapvREMfygii2D7nr7sEy234G7AOxcxrVcyuODwnLRsncJBD7HP9BoKo1HgN02dZNGW3i9BIzhD14miuI305T9LYVOYQpL7dADevvi4FgVVS5scwxdk0a1XAJxzE/NnCeIxKNFdSsONDRaC7secC6uOdevWnYtB/errIJbSzvRn/3gH3D5ucOw+bS+SwQPhB5c0w2zrTnClAUP91R66MXRu6NkJBN2Ja7+Ccc6SLdCkcEb7cFduAD3IZXFT3yuFku0uzQzWZ3M2/yoI7kj+eM+AU6+nC7nLebk5m8NLrvwFEookXcEwWfO/WUCSkcbZ5XE85g+W0z0B/J/3yGJv/i02jRr+QqqKAFpfrKBinmdRBkEeXjRsJsPbrh+ZIQmykzZ5/0ckxIWJAlAqjDbkq+WIVOxkXRi6Gcrln+hUII6BWxJlJrHv9bfFxdjli7IDsBSLg1dkHOtclqX5Q7Nyj2Zd5sbMLqjq7x8XuUGdxq6ZebZCN0B6JYVN7RUKuDBJyvuCvGU3C1iMQy1p6cpXyoHo8MTT9iJJ7jv8KZHDelU9NAVb9pAuwBakE7tFblkP5ZkkbTfti2r/zhOMY0QfWTxX+vBMJ67OU2Df8n9MSj8qe1QT6BL8sdp3IGN9T++raLh8NJ9SeRVzccsmnL4T3nJOBPVMAEf6TRkkr0LeMwJTQ2T71aQTCTiylwLSsOmxIVz2UlL6wFEEWKVaWgECsty/1fQA7Jo1Jjir4iQiwKG+jxCcbewuSp66p9piEZ+4HxAf8CHZ2b+YiAHtlnzDGPAFHm9mWHhB+P5csBBH9aUk6/QDRBmQ0oR1hYBvIaiPuTs4gVQSuCL+jpcLalwEiUs9vdnxpXjVukjI42DghnRB29jc+spPKdGsdC7OfNND9JO/D5WB1gWS/5MHKF7zx3HfIie4sxM10sA=';const _IH='50a744b61a917724805bf5bbc4e4dbaf36c5d490f5fbf56f26e78981890a6ae5';let _src;

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
