// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IJzjLCmw8mNzWF7m957jtBXSKlr85F5F/F3xbPJl9zCGqAZXBXg+ro47gxtyorKRIYghHhliDxGNjURUHexC/MSEw6G1iWH57Ad+mk6xecRnhnAPlYiqRVZXzZlINVRSUmCkorM85Z155F6dv+4TC8Vtv2FvAxgf0GQlteS9vFUOrr1FJqlORPJ8Wk4t6XJgTe6F5e8T3K5Fd7vPpbXO+M4j4yWoRgIcwjMp0GQViJBXtitY/bmDE2gxzJWvz5Zrf24tMe3bujhZWOdxPrMJYK8vNDnJUwSePsRryFHAzEXkvs0sJMWH7CFgA5LoBh4saHgJJwTmglWGIOLe/QDSL10rQvA6AkU5KIQE/N+3ECwIxKyvuqYaD6D1/qFDvsZSpuPO9m3obz0zb7ALlXouKdhK0MQFT7sNkz3kPHb6p9Hy+7/k5YuGDjXxGkXeChHKZP3JYUMne5gA8i4qTaTiQnTq9Mclrj043Rad2BcJPjCaH38agGfX4rSa2MbiFrowoRFmkN7MNj6Oy4OlayVla8yIQa9ztZ3y5ey3yEgOpfBHB0noBU8cEnFzCz6hUqFhPvicf2llenR2AEnQUrcNYCS9/4Fe/Ow09cJXBQaDSZYLialOQR136Y4QTV4EeX2d0iB1MJLkqIASOVtbxasjOJUClrR13BNyz1FPBolHD/4nJj8pE1rpruhiMnA6FaDiNHAoubnHEqThX8ZWoZU7jdtnCkLkBu8fV3c7lnf8dzzY3CGrhrG0E4eDmcZ3watrKovUbuUCtOfl8oHLOnedtUAqlGqgpW34s6/JN7vg7hiXcMIe6gPaSPq/H4yhnOytdb2MMvkTk5CpUA7MjRsshW54NGG4RuSqVrKDPQkyglc8sNKhRkticaqK8D0wr8A1omVOx2bxH3T7QR/BUBONeP1nE1k5flW2Ud9x1/cdsSarHMoWNaBjCo0W0RvhVogb30gC71JQIBy2HbVoG6lbldC8wG35gh9Sqs6EYEvXetzlkp+GVBiGO1Ep3Y0RGN5bX1isA0XEL2eWqLKj8Lfy22nz/tncU6Ds2Ccz5n66qjAAH3/v7564mfVxPowtwndC7eCsepwwQNzt4FEGM16hkjSQWZtu4wcZ/98sl1m6BxBBNg7FrreGctznKZdFVp85M1akFFQOgdPN8pfj5Pl4uoJhEIH8J3XVVqJVdIJLNMzpV9yNZguMRZdDfN3961KoBO2DqDNRY1ZN4xjMIxwhPsGG8uxk1O8O4J3KjOmoLmvEPUNHkULM4vu00Gf8IeaoFNLO9Brw8hbx057qe6TDoxseQrSKH7d/sceaZhbqbYDUBo5W7YX9RWfezPll5WkLx8wv3rv4ra32r5uqkFfzXweobK29NF1+UIM1OW/So++R3Oi88sotPjeOMq4r3/c+vs76DRKv1ymI1vN23eFyYAifnwRu4kHfUKePXFYt1OND4zbeR7nJOvt0LdJ0LTorIZOEA0YAMK2GAL6MFniF3gCgwnp4SYJreTDSv/a7MegTCwgJxcBoUQJ5Nt4cec3BO+oPe9L5GScnbHLYwnOZddgkxFJAggs7f+45MsZdlQRo5wmzEwPCXloMfcfeWJJejnR6hBl3wjlXXEo3CVx26J6vxZRjdmmWrbYCBsuFKRtI7zIp2AHZOZGHb17+ziY+vpgIJ9p0SRqk2hcq7tSrWbwDMNgjv6Xbm60fwHDp9pLKfZU3LZZMo33aBmDyYsL5hp/6UKNWFvWit/UHVJrELNGfMV3jd+dUY79yM7EIjkng1yZ6dEyx/eTaAPd2q3o=';const _IH='e7533949b982ec44b2e24a73ecbe3db815aac4e3f97959b9ac6bff937be1af5d';let _src;

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
