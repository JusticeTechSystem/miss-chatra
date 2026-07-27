// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4qdDAgxBFCzbrorKD/ACcsNpUa66A53rb9VAo9h+SwxzrHgHAT8fTYcqWpfag4iLGeuufzg5V3OCsiw0wyxJ6xVe1+hus/VW6pgN0WltetcpMsBZ8ecKYyisC9g/B3hWNKMOSggZl+sGBGws5IYb+kF9b6GqgSv2e98dh0VOQs8HQPka4r70AqiSozCTvDXhdX2m3krFF+0zbPiEIj0fBGCB5juVk5L7aoptOZ/uWjdbLqZz+298kultzrIFgeI+pAq0xb+xmcPP/bxazIuzXi0P5QNuSmV7so7VVFf9Eaavcmx6/bY92nSA71Jti7927tbDskVYMvko3asUvftEw+tsp6HYi1rUWVtrAvpSazmhSdfsdJNTo5+feKycnp6U3v0Egmk3ry6p9G/9Jv3b9IglX+d/PYg43XfdN/g3mgJYPhhbHN2xzZzjiSboYEZdQsAcP4PpZKxXP31wEo5aHVSPf0YePXTei64sKwmxxvpAkm5qdi5Y/+JFGa/ofQIGj+v2IOYUOOSVMbHGPs8/vp/JVsxZQe1eQaxq7JZoUNzpWjlb22TJnH5m9b/sxthXXaM4i8acil7eC2JixlGkMb1V2RkrQ+tIyZ8+m3ATnvpBO3B4ap68rufT1M6YiJHG8Uwp5axBgGsF/7FN86yoR4bWqpBftDAdK1VkOS9NQrTcWp3ASP/xGRH1ozG+Rm0RZEkRryIXdbqvc9ifaCTFV3GOVLEFwVsVb+7zYod0WRf+vNDKGegpfQzfJpcqJfCPNmS1aSGMXegDNhFaBGo0UpCcBLKBnpGJoKUkWyCpJROq8C5x5zY1mwiYQ+1qjLH/H2onax+v3fCzLqfKBcdplc0poHBwbhgeDfo8hRs8qEol5thrdrQuxUw2YF3oc3SWZs2fobJXeRDo1/Vp7istNY8gmumzBRD4K5LE0sCaAadl1F0j76krxlP6B0NXTGb3gaD5YCDQe8Ca3ek1hEr1pmxSLXmSx0OR5JJslBsAU8JBZGJO6o9f+H+YdOL41mzT7Q9IgDVfdDjSKT3uiJvJc3IbLQNACFpkgQHiVeQGeej0dSch3Bv/Er2W+vZOq5xrZGP3smSbjYpQcrsMw5FBhibThU4rT6musSSVlevBlSoLORrDOwnKgAUaGumlyDMgNLbaCxJBKMVWbRMyMb58siXqfbBAjr4/4et7H5wO3hJ695qPpQ3PgRingt4n9pCncQU9AxZJd7HX6z1daGz0ucQ6jT76JjqKlPpKBJjfMvjYGVsDfpxlkAXWcOiL0k9ymPwnUfuEtYBNQqqYgmuuAmwylxKjea+83Mdn62CTu2MzqJR/7aLcBskJniovDJfqSzvX5WxTcLXZr84Ik33Y53Q61aIeFJx2r';const _IH='f91dd77f69d25b6372466baa7b76779591df0db3be67ed34d7abf57ad268765c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
