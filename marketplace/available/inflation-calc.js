// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zy6Lwfy7SiY/jHh/4juJsIIna+VBZUIQZf+Uu1V7NELxw66ZIa2Y7CBswQAMQAEARm8nWMKBG6YT8bBz1w0PW4LwoHGpU1pKBulJbrSsw5YiGGasVIonJUSEyWUKgeLm5ScgZDPEI5jPEjIA66x1xqzwYvJprLdZb2v/2jCNpHtvJPkHd4TIJDhNH1hglcg2a3MWNQ4EEZuCewxD9z17q5I3YCGdQBhOb8OsuWhE20Yz5sC5GHOBXGAUeKtRVhf3IfWPq0p6dpgWomgbOhH/BHpDaObvNh98U5R9s81Vp6+s77KoMIzb6DXTRQT+qDTI2rDZnqw+vsBPY/QynlKXnePUOy2SQkpPGh7BeInJyEevJhtTB3ncxaBxpxQ10LP3OGasDDp/akPWbYo0HmhRz54Z3DEhkBvH2K4z5nX+edSs9QcPQqqc6HGqD+IbYZNYV370jiSzRUGvY7LYpPow8i2OwLbY1+xABjTDZy+eIMuj69wjWIW+sQzLc7s649zjAF+fa/uygddG7pRKVWORIxBtBrlsHnf5pxbd+6BJbd/zlZ6kLcv1v136pfyQunalZ2GlAXhjlisxDx3UlMZAsiklhRfEuGaQa+ogVNSy5k5X/lurtL4/dXwqdCt6fmzXDQuJqFJhOxzw2nW8WqDkO2rd4y80p+kfttNbeJTiZMWm007adPERYwN5lt0Q6GxNygAWQwUzKQ6g1JyD+ogWqx9vl5VtT8Z8e5n9DSnGv8cY5PJ1yiJJckymtrLYvnBEXUfg9s8a478AArGcYD/P35dl1OZfCWaYQoEC7kBDBkXW8G+CHTBKASf3sqcIelSosJoLL0sWNXt7ZbFI+jzncd3byKdfaJnnj95n9rq5KmleFdODpmG0cMeisPcfsPG2qzNZzHcexG1mmwBi+lDPspZ2BldPemiBi44gnMqB9IgU+Ok0gsv9mp+jzHLanoqbwJk6M3uAZM1W13T7Y5qgJbzSgfC8Ls0XFZ8/5AbN994whjBlmIg0g8clJKxrgtwaR4HM8PutFOh3GN3RpSwg5wHLcwaTxMuvTbphORAcdzfe7AadNXXvZgDbdEs1mAjclhXfMNs9q21lOXZrw+yWVKuRE70PzZulcQ5H8ogIcY0elF5+ARaRKtGKjE28Q4dZyjadgENFLy9MGGcd+9lLeSlL4EG3x0vngmeMWomfgeebjymQwKDjy7exhMWuluQlGHen6KU7dl6LQs0nqo6BXB1KE1w5xMby8Ii/Atr9mtZVcO+06QaxuKH5zbQpX5KHcJJQ23bNl43NNxmkFWyXYkrNn9b/3c+Dkoda32Zy7X5JRQh2u5NRLsnFMGDTl+fOIZ+1J6EsWwLtzIuyzh2jshF/YsKtvfAJTfYf2toi91i3zSYPqARc8Z9FbKvWyeteqiZ3Rf8KJHPZEL8Ie2q4bWMEnVXm2RRkvpY1meGHQny3E/ekzDAt0IBI6pxlx7oDSi8lsu07eDH/CWgLjhKbpI525+f6j2Ac4auMpt4Y5E4KLrHYy/Yy+JxBRlS8aCscAVeOKCB/ugW49Eo1rGSzlJgx9Hua1hJYz6fJ/4NbXFTMWDRIzsONzH7bdt7dypbMWOxlY5I1553jyBXz7Uu/kMAnv9Kjx6ks2VPaNaQ3lXGFU7Ja9+l1wOoU2O3UrnfLHvOJDP/pq8JmfWXCFYWlUIBlaKszMIbfJkP83siQ756BuiWSKW+kJpXytUsx3ZLSgnvJvDQiIw6ZlOz2rdZJLwf8';const _IH='90b678d8e1f81e867fff98246eb7a6cd991a21a3282843d6319495d3b7b9617e';let _src;

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
