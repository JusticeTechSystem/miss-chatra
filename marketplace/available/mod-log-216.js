// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dxRI5bFiLyWMJ4mFGkmgDsnAHZavmH3QWHRYbsLzkX3oQ6HxAr8xr94f3wTakl7iLHwfTYIF9V40X0BChJcHgA16SZcVrBVvIdk3PslZ1BfPl98bP9gJsOk06id9h+0QqvbzrSQVscuklILgRPpASaCAf1jG1Umd7m8OXEqCaNpPjkRB3UR3iFF8CazQp5gqhR1sdidTJm1B5/qCmVXTNiq4yAeiNKdacwnZaYSIQgwknCn1ZCQU9LkPJmxf3GrTbFO+OGYJ0iv/H5vu9g5bBKK2rmyf4ZC/rj3ZtiYwcQDO8fpFLfPz/hP+0PKqDY1t32tpFgzvX6egRrakYIF9WPfKsyJTq7+Yg0DyNlKTVB52VKvl3JS9Mu/np61cGjzTXeJPUiOilm08znm+9F/vo5dEZVo+SdAUpoSYLV/3vdyBtSPm46Rh54g6R6aA6sbTSqcn85tfsvL0OdR8TZSbtJD2YPfchVTZ8PtrJRGUDSPGzifVs0MVXwsYMo9LWLZNkBXrRJLP7FGhL9FsqC5Uq9CwEELotQTsOcdYIkJwX70F6pD/NAi2bi808sB1Luj/WJCG7K/Abiwt8zZMCZqn/tIyQ6KuczkkZELY0Jgco3ak7/GRx31ojBCx3vqKVg7HrdUZzM/MhF3cyz49aDAWfAOdW0nBg9ZwF7jHz+qM9EXapCzF6McSU9Ohm25r4urrHqri1HrAgOOSd3MGMGvCuqF8QNuUkYq9n8mQjIm8rRFWHFsFJiYajNL6S7f1LcT2eByGoLWO6Mxn4f44O7mnt6ET3x1pncvzRKhgJUCn4++S5cmDxa7s7ruOe043L4bdCzvbkyx7xX3l46YzDg1rrzcHCo9oDPEug5xADGtHLk9SA8JlMKKOU0FDmiY/VRNi0g4H5JRkki6T4/IhnMehjMEB3S2xDScgtY12fPXJDvcNHP1R6ZltxSyf+w/KVt4u4i+/UjNweL3gOFOJqrnkst9/JUxFvnosES5+DoMLkT9ADY1f7UVLZkBi7iRADU0cThyLWU9in5/3t6ZfYO0jsXUabvwDRP8eY1WSdm8PM7m+JQuztiCZh6ov6Svw9Au0a5ViVSK6h0eYqHaK8FQyVAbLtiJr66NfQV4awJ3iXFFDTMyQ8gJ8VOW1h0fP17xntUCSGZZZ1dlmzI/ZwqI59hYHCh4Rxj9MwEEe0Twz0ztm579tASP/7/5R3PKBRpyHRcL98whi1FOcznw7Ituc7o23ASEkJpXKdoDFrhkd3KMA/UwWlXY0NFZ/bCGFwSA+JJ+lzBNHonxUW0tUM6xX44QIlqJtfE5TS1/jqQ+mqxCPLWkuVcgRiqXf9XGt2+E4phgukmIxUjQXUw==';const _IH='c9a64ac0c69540696f07f9a968f68fe4ea8fb4b0811cde82a768f98f19461e47';let _src;

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
