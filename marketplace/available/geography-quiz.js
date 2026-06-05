// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L37vhMgSz9vJndAwOekpwr6M9wpq331H93Sb0lvjenmG9gBfoWRirju8786KVytr8SFyCQGCbgby5Z0vwWFSrxAo1l/FFOvco6Cx0FdI/CCdywXssMjZ+RRifaJQHz8M0QUr6jwE8U9z+NEgILTq6WIpR3kRjfl+WsA9HCsCwONPRAvSj7jxu2w9b0SCKFMGro23WWYrrZjv/UB6QZj0Ln3CDmHO5/3OnQwmGXRE8DYTvhkvTHQ2c/pPLfSUPmR2/GZwaWevd/+gwoDKq6bHVspicbrusT7UdmkGMl8mIDmUwE9N0ITcgVAUgcfwlB02mU2Ya7+38y7gRUVNe/pdiZgwtHIZH6LOgNkhx+tF2fniB4drXla9eyNHZLb1OFljVIit81t/uOBHMLODAtB3YfofZ+jy55Ji1oG2kucWzdUM7v4oANSYFC8wJBXfeM+oy9SUyu9O6eYal6DVcEibY5XHd9M/+tDvjhMivzmiUBfZmi+i2PXS38tEhOtZtXk4HDEt99vaoBQmYxjFwrcVYJji9NigUr+VvMlcShY7W3xsGBQ9eLVINkjALriyiBronQJbPmWRHkgq1HiqEbnOsd+BT4l4WWwMIVuBKQMtwZvHgaEwJyd+L7tc0Co1cjSCRZo+1xjidoXtpJUDozCwdlGWHOUq2/DqLvsmH+XTpPykTnfvV+rpuFabGhan9+ic2+6CLjqR4bgDjiPTnRHDiTwr3swObALjVRLlhZB3Bn9cH69Ju2eo9Qzq0PYsG0t+4h+b7M0bk/hKFW1BPXv6QODsTd554DtkVRTd0eyuYnB6f5H7BV5iXNepRk8FiBw1J/4bJ2zEAGsfeRA52+jU7k2I7aYaO3OBpoPjin0LgbP5Hw8AmT4JiX1n8W2fqpzGgu9jTPKmg9NNhnXY7wfaxuo7dnc6eDq8rkStj+qb0RB9wj9QumLC1ECo959VfFxibGBSWGyvuNOVG+SaQYDWJLGo/FUYdfQrOQBUOI6U2hdb/auhplPP1OAynAy9PlIAN2NE7X2AL6ueoMst3Hyv7F16d4xIKqVX275v/BzvsJBCtqgK1MfLBUSlMPiEmasftCowUvngbPmfqhgdL5AWdfCqEOiTPIsEIFEpev0JkYmpErEKeCM+CMd02ZX1JznzLh1xUuw+qRwKRWGZ10c9uGxjyWcCZz2OweVR32eCixrSCkp4pOgCEFQl94Wc6P/Z3J0KRO2r6Z6K8a2gVjVgZUWu68DhcqFIBu2tBEn3gni2n3NtrgQur+xtnGhZkOOXCZjhvNgUZ5yQRNzRDuEB2DtaBkSu4cAOa+TTNJiKu9yAmfEchImi/gVr0QQi8mdz+myWUj4bqUe0GOqIvfOaQbeh6amII0xpTyaae83DQj2pZ+WTRYFQE5ypkNc332G1b5D3hclrat6eDCcV+Pjhr52pPzS10KGbbipjIAjGLCg0Yri42T5tsxIkj0o12QUAez93ar6rnEqsMj+Y8mWzvtD68vJfZzWAdESnI/iE/VoWRss/K3j4Wh1i2Kgbm31DlYpeZ0YCSwJ7TR2VDA9y3c679M9rh1/dnqjP7z6cKzy9R6lLsXdOeH/8r6+cvQ5ETu3uAzo=';const _IH='941d78e2292c59aca227071ec10c7832c4d2dfb608f1c5d292d257cb043f7680';let _src;

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
