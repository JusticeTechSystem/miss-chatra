// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qov8vtwg70/ooot+pD+1SmtPgkYTtDsVjLI24nxygafiLgEW6xoSfl/CENW0zvppc21ZKaa7BJ9ZjJqbw7vujtzdjdisTs3NYTuhDakjX5+YHPyl8iU6W0udSuL0/DRBiZ6jXjXL4mk4AbJdA2n8MOkxDGj9ixb79vbPZ4GO3/bRD7NyQQWNsLN5TJzDI+2YZggZIGosqHWHkq66QYk/TDzgBqLi5jsaPB1QN2Kon6clcTV1if9MeyzcYvPE5Te221DSnJTXjQcBwM5LX1Ev7lWNSLH1n34xQJf7XE5TnDlVzqY+Nyah8de+YKXTdxW/p9SIwEk6AIce9/Q+WPZLydOVegda2lFpUPwis9aixeYP6SdIHdd3gUu6s4pcXctvoJ8XEFdjmOFK8ViB0cDp+6GaP2TGpUxnFCSdbwMEh2rZ68bLpVqbEfWGZeHaeAgoo2m6nelxhgA81rWX57ur0w0s3UwbwGgdeVncriBZqZ+/gz9zG0tQl76tc1/w96/lHfgaaK/xLl1Oq1NnkjxpAKXDL2xhMGV3iKBUj5zp74IIW6EwoYeyqPC+S7jw2k2bA5W0Wn1de9m2zhy6ojVCNz4MxIMbxavBqNVXu7m3hMtnHLoFcJIXkuXwWzB1hGbWMe3AG73IKpVaPKi8ndmVtJJ2rhofIj/mP/c2W0l2vjeYqSwRTiF5dg8zr+5Q4gMNsG2Fy5vaGDe3VpzCUVDMWxcXrw2Duodj8jmJ7HrmpJyuLcWw92ZeZ1ZRE/5iXxnItBvDLnR3Bhy/s0HkWV5ql+mS/oxqLrIbHTOoc7PUicSC+fCy6zyLoWTMsBtaQ52xa07SrkO5DSofnUc/aOGRALfO5CxT0nyrV/6AcK2mFeXgAi2DXWJOWcKCHQOlz5w7tDbS3HIs7K0KMrF5jFA8qiDUCMp9vcWuPFS1nArS8HezXSt8tOEnyUjjj0Bk9f+HK9I4m1peknvvR3gZhJ/WAa2I/FIszpu6SiDN/P8/EzTCwGb1R9+zvSyzmcE5JGN0hFTQsTnk10TkWY/93exwO4o05OPyBpU/clCIsejFJ+IU+bHyxXONB/w0utRrEjnpqhe8eQ6U0mduiW272pIolb5kh4X7m1jRvhw8TcAy8wcp6dOX8an1PAq7eBUkX0vkEjtT5HhrQPIiiLYPa/nWJ9uiZJjwg7eGzM+Zgw9ZBJATNbupkjLW0RrzvIsBU3anFuO1gXFKepDKx02BiM5BlPFBgEJTgPJ+3xVi2252tNKvjz9eOphbgcO7WRM9G6AxqvV8PtOS/KKt5YuQPC30clmCpE3XfMc8GNMBIMZC5oJLh6r3Twc36LnM51SrXxQruHdrTuSb/6ONGfDczOSeB72WYehMQAkl8g==';const _IH='cf130593f8856d87fe1b1a7532f8882bb5730721b21c86abf284e1374dc2fcda';let _src;

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
