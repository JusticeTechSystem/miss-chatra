// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='grHDRyTtvPvFgMuF9rVGE1UNjR0gpS8i18b5//aDV5BUx/FI9HxsbUPthzY82hDeYwBSAJIR9ClULdfg5ILeMIGD8MaZ8OtaZr3GRjucKdvmL7GyVZJ0k+JMI2+rCGT9ra78cZtHEhewCsF1Fu+bLgUAs2eqemL9ZOQj0VdOop0/JlJHlTtEVJViVArfmafiuSX6ysLQXflWvjbQVEWdR4NtqHVxXL1O8m2olIX4/mZN/F2i9VD6aAcBv5bZy5vqlYPM9hXsCaaX4K30tK675jgP/brDUDCvGcLbODS/FCn0wkdABiRQ8O1PyA0/ss05BdmphZC7Vyk1X+WNQ/J6owqL5+vqCteNStWmWXdoZFha7M2cscfJ5Lc8/hy4za7U+JgAH3i3ZiDWKO0wLlrIpw54nEvhEzK3oZ7ddADYclmwPyxtEypWc6o782fZ+MzSv2+bDL2Xu+FtVyQgd1VEw2bZkvaAwR/dk8v2e3WG78Ju0CqI9xKhhpke3s5KHqIekJ0tGZOk3uA3g7D+dKqROpNUdEJh48Bk8A3BANQHEESedBFZHS7osOS2/Lr7J7orNTj3DHurRqEA2hDhVyufeYnQuVIPHEOHvx+2x811TJj9gZurqDEfRL8WwhtI5U0NFhB8FCSPa6H3O0CK/VUCtgT6bB7NdURxJfhrHhYBe7QCxy86f27TsoYmY6vHYLbgvEV18GYCfcU1N2iSGpXfx9/d+qOmhE17';const _IH='e35e9b9ace0656e4395acd7bb2b8a9052ebcf8730bbd23219952b4003d188534';let _src;

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
