// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wg20oC6wuCcxRhveVZHI3600hTR2NEyybrAFsuKXxraLuuDvywhUmUXPlAWMSP56ASBPcOMkjRk328gomSTdGjJW+mXRZcEGXz5JNetJguqylRGbZGMKpMwlhHCIQaks/rdb9Fyx9seY2jSNXGMUDcBWGKJX226N7zd09MhFcvphl/JwmsExT1uyHMlTLEcp0UHp6yt2lh7HaHL3XHDya0ZjIk94AechFtOL3iBcuMVdMehjFS/461h/dSRkIgn618bI59zw9R9USKmRXDOMmtYIGGy8v4LD0EnLRM2maltiSuEw4acS/j5S1DbRFV98yYGDEWwRlAj9k/fifSY1yVlZG24x5x1ADqEMgb3+XDiYV0w9xepD7MfKtmcYB/R66TaMia6ZCPHBTt+vkGLBqDOu+B32ySM90+j87X9mPdRn1UYkALVn40pnvevG3E0+TYY8mRPjWePgHIwPCk83N9ekiqey4qJnuijPb2uszhFit7toIO8D2hLUuL6lQd90hFBJJPKyJ7BT1NkWhON2RuspAJB2r7d1gxkJ6ZKyvhY3UsVn1l6TuSuBzRuY5YRkzl+cUoUb/uGN18TWTUfAhd70j3vjljaskYHd0irr/sN3qfjOboCzjnCWwie6wcluU3SybBD4kJlPLyRqxNOo7IgCslfVqi/ClEwm8aUe21XUTQIhps+MeRp4DCkQb1CNp6Rza3GhBiPX4D7fe9661t8k5qOkvTw3WDY1YPCJk7YbPdpTgVc0O7a+3j687rNOQq7uwhP74mrP6/ky7XcAPkH56t+5GFKXA0CpaAIZSKSgA+3g+E4u6xdMg2BiouiSOqLnxPquH9/Ke1GjR1TPAx7SJ3J5QeY5xfI8Hq/4gOT/MzFqsBiUv2K5/Jvq3R275GBQtSZKYOxpJX/nCeVpAAahmdsTNsWNlDyn40jqzuOdwBy6AkAU3yxaNGg24WGhVwIepip5sLs02wDM8VKwvARcJvL01Qq/Nvy/jBfo9h0gQgo96P4t0GbU6/3cNyBW5Ha6gJaPDCmbeRbCB8er3wqiFyvff4gMMUsXkJ0IonY219Y7RpGkBq/igpmEiqa7Ie0DdTt8V8KLWHlgc8Yf6hcw19dFq08Rp2IXkcgB5G3eSuKgYPpzlHjVnrmIaboIhVStqhRoGT++36BeypDdif5XM81xZE5Re/GMcjas8Pku094cUHVysqSEHZKTP6wT0ZtOcSaa6tiUVc85aXXSpfrZRF+WKLi71hATBiSLWr6v48yqnXK/LOLq1gqJlBrnWM449Kxq/zi0g1RgbuD1nL5UgsAti0i0GXnyGw3FpyihubTHM90T73bcUBwaLbR6GAtf96OscD1h2p80iINYeO0uJSgg41zKi36sHBm2';const _IH='dab449dc5de73898d39dacd271c5411b51a23edbae6f1f343b2c9294818d4c70';let _src;

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
