// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VImL+TFZP1215pfmZw/lH11D/ZyaLRGVdcR9dsMx56YMSRmCwflAWl1Wb+VGumMeXJViBjZO+sha3vroJpKB8lC+oKKvcqd4uiBUl+MA7dbvzLWzZ0dayUr1niFss9lC7WbVGlG9J6TA4QEwXCrim96I4Jl2n2n02DBUj8itJfGeunkl0wWI1ijqziwUxSu0UHtCRRA6blVsxgHuOBrprPwivWtjLlBMyNsiWVseLHDuyiEqUVWKee+FzIk0k50M/Ut7PVOyvqvnE+56XNspfSA4zSrBSfs3d6pMU+tflqBRzuBJrCIpBj5b7iSzDwAhwVca3X0giKTfIoN4Kt9Arj7Y5PspE8M6nQQARw+6q7y9OGuwJ3o2YEVlDgCAoUu80eEyEMf7m7REtCipBQ0qLVfzgZ7TLZfgIcnVVokyjFTOE+8DdFxfZ/aYv8W72Y1xLeTYUfary8qK35ZIS2DdhR5k9Mz6osRv4wAk2gEnJf3cDvPjn4C8tHEPcXk5Zt2TlbV8zIKyumjr16t1OnyR8CVzlcmQ7Vl0O02NNJpbLhC1N7Mwx2yNk0E6+ymqY1enKCiPuRDTuFyvZZcFRKstPBAKTmaEUbKhANgt7gdTt4LaDahIb41+rvF/4L05b1u+rm2eHy809y5AqZbeRy4f/xK3rldIbUoWXlOfETdoXUDszTjUT/pZOEh4X8To1NIKWoDjXDTU68TcDnyHf5goSyHzpB0+sl0t++hLUocxJBq3A/h1TlZutHlBT1/KMqrL7WTOFHq9QFw8p7XiMirwIQJr2USByFun7IuiiiuxJouVebLT6itJyjrViA7ik2Lp9OOnbUc6hgIm07m+dBRK58on96e0JqCcIWgKLj1rawyygbHVsLonmpUIS282roG5zo5UtE2oGiiCDK0xxms/uf0mGHslU8VjowqJk5uxxFDS6mD80NzmR3i6NAss/eGljQ9gu6zElD4bTlYvFi+sqsbFmIkIhce1rCi76oOgxSQcbQNGKf2kjsOn5rWVGZ19Z5cMdsbPSwnwstRILrKDDzGx1AOg3O/RLr94NB/tFJLHEXGzIS9GqZFC7FU4VymXxNGCJ/xIOsS0G+o0tq4bHV/vF6bOwbLuk4I2nU47Ee3f3SW16F9j9vPCaf4ErfxdIV4b2BoeFZ75Uf1AV8AiM7SRfGDCpzMMCjbeLIPF6bnEZA1CyxEl0fb4PgZhZ0LG+9KmU5GS9T9I0YkETHyAQCjvtq89+wTNxl4YDhj8iN7OJuC9gDmuNOz/cuEw5r+ziT54j6A9RAayhaPkb78w7tQp5F8+8cDcz3n4WBaecPBcSwO9lL7QumCySRFd5PopASZTWFWYpNT+UhFjN1hH1QcwwPmh7WPzi15ECAbV3hE4r+W4bwwW6QHYrw2TMHZB+m8=';const _IH='fcd25580661b09ae2c731d4ddf325cd4ac5ab79081a88630e52b384ffe8bf653';let _src;

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
