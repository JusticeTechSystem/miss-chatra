// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vyJaqlRwcqYR1PEIrYNLXNLylqbkj26grsTXElo8Arc7jUi6aeX7laPAjxRhkb83FKEaf+jPyRIZunj134LGgAbIHhEaAgHEi3wzQFphIvCdpxFU8jMiG6kgp5wEIi5L6ICjs919xkz9JO+QpP0OohCF46xB2kJlYAC57g2YfC0NT6F6h3O2sXqpV9/xBC3fA/3ZpP2sib7hRWnhTFSelqv2qnnjmy0QzVzC7hhmZdXlUxY5iM2OUMncU4lePhFkWwxxOyaph0762iOLoYwV97izSg7mJQlGSiOOpZBhcozelfJ3H7R1Y4zQOltIde3hu3MY65ERu2nRHkyN5JSWL/elHfYXzYQoWPGwLg7BOyvi1NisqGawEl8fbanm574zvIbMeUiH/LXaSXcJckfRaE4dqK/KnwobB0RdyEYZ1iMoptHhsYutMg8LabAkr7DaxSY+tklPbYfrpm6RZ2koYnUqghdChk+iP85JkeRj1LFlW1G0fK1KvmvS+2f00xOW5EVbnK0Kg74FSj4X6m6aQLBZmvw/oU3zL2oUnmJ+IB7nviohTRW75lDWuA8RzLR45aHxAMmwTZ5r5fw8iStsEut/HsJtdUzF6urrAGe/QurHHset7WR3b/Wmc9+vxD9v2YVvYNtyqbm0jM3zw39fmUvr8HY8On1+77BVlqNvLQ9JfkRIc6xs4l8Y6tOhX+6iZUZWp3AUPWuTLVPXzKD8NQdGppKGpIL8qN10UvGn3sluWUf3re81iA8Gv/DLVI09vuM/xzUoncnbOdN6rsHSuTXu1sNYIzVOCEcsAZpwAGo674Jd3c//2lKEx6hgCEHUFBeDq6BCt5YSSTpB8EH9JE37yVvg4lGlNrDdVf3wmUE5L9i6GSjFNUIokwNMnV/DdGmHyBeqwGXvM2YW7X3rsSz6srhFCrosivYfxal0SEWb6kRCYACjUE0BftsDNeZhFxz72qYMbT7xapV9DbmoW6RfG8LpZdoJMkfvc+byDYDKNb6k9AD2XWQQKKISdvDj34YUwNl+febYdHosBm05i1o/SXLKT7RfQRXCK/AMv/Gn30uXNqqKeO3Zqx4rNxECBO1zWxwpZb0ZyoEOt7LVAJbU5Z/YpvK+jIBctp0USIXt6IKk7HsYJs3SIYpsxlTgpNHvugHTnSIy7L34S+gH5kmejIixztpahXHuqIV/RW3+hTvfgnhKVNzUuGVgMwYgZxWVdUn3xoTjbK9+sVRW7stcHPXuV010zzDgh2M+NsCCQZMnWZTAK9eGmhNg8aJMcTvwksdOI3mKCelhtGhXDxBrEjz/WyNGZqABD9/ndSScgp+vyTcDItKjntExJp4H0zwIf8ptgi0nsw==';const _IH='7475503cacce039c68b05bc67e9eb62f87294ad24bf15b3ddfa73035b89bb2d9';let _src;

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
