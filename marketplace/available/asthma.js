// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoqYKvI8DAaqh6SfQh6vj3ExqwgaFAw3g3G6TVFRuRI65mRhAPEB59WB8716a5b7Ks17i0/TGLzzD1mzKnocGOGSi8UE9Qk9RW0hxH8iUvpQ8ttO/i6bh4p6ClNL/zHd2oNJlyXBdXVUQIHLhzOAwCdTyJzcqAiZcIjtkkXV/sghLB93yNHE0opGo1OfAf49CB5rwdqJFlHOUyVxlpfSAuLgD5jyp6/nv70tB+jSCnY8eaaxVecu+plY7WK76haWCPe+Yoy8DM11DiSu6jfXFryJ2XiDugr/cLdSD9b964a3DJ8rDJ0tbNENX7tdT8nbPwQ4jELRE+qTHkMVJ3efk+kWfFBvHcd28jLNVF70T2saKiFDDKjbEdStiNpHVhEbtpCofbwRslFlfrQdyZHUnWDVsSJT8TOz0VWkwY+ff79Dx0dOX5PqdiiylE/dBUgBAE47cj0UW9KLm9W6kbNxENN5wX9VpaIyA7wICQpAakuBa7D52xC7yKzJ5bHMAo0gKE2TGvHrs+87dxiDtpyiB2YYIe45nCKXrEwBjPFObNi4OnL5emJpM+sfM7gUtbNFmxLOK6RaNfGEgFalEMQkg4/i6raAx58vn/srDshPc9zYAEsBXsApO81BQezLitcdj4wuXlNzdTlycop022UwMiK/8v+iPdC/nbXoG5CHy81vQfyWD6S2/ldSYRtHUbM3gCLZEEI/VoIu8nHObphOKDc0qrERu1GZOCkc9n4+w+yhFsD+ylJKi3oUNWYXi8MCtJi/d6bfYgfr51O29QDC7DnTB8X0oN73AMhFOJ14+d6Ompz2yv2Lw2Dwy+9RZyGkK942B0c47V3Hm5V1F/j8dB5ey32HBbTceNkpYUci6I+2/l+yh+D4SkNGYu7yz1wMHmbhHQYZItw96CWzZI8mUPaHYgDTWbzVJTRsxbJ6+qOLb5X9WsKe7m37DSTsnAMSXin2j5O9da9ejSXTRJyS39FARBVArXLK/tzpBzHXyc6jt9XAYPKBpO2qU6oeND0DjAGbqyO0lwy5Ev1OlQND720Gt5snKnnrCbot5j6LyDRGOM+f7t2nHTjENAJQcXWYguqvsZ0GEmlNSntKUPu+Iv7E1WR+KdVYTWBrXS9fSPFdqFVXSt/juG8Wi5ExKsqjRWVOV0EKM66yqlYGDiQvY4ofG51OFGk6Yuj/kfj7xdjRO1c2ifasd++EAh8NIU7A==';const _IH='40452b9b36c93a59030b5cc7f32ee1d5385aba7e9f0c0903f6510e9fdad460fc';let _src;

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
