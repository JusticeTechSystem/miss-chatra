// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GCrJssWxZbswxCK08ofDqOa4TMv7jSmzoSb0zaO7XrA8QG9s3MP/XJdUpsPkgr6hFlOGJqQy4HbZNO6K5+Z11lPiGk4+ZUGhy8Jlj/aPbf4UJLg1P5ir+T97mOV4FL9eXUK8E8tAHZU9eX30hoEAfq9zhMTTdSVe/NdlInNUK1EJswloctzsYKIDfgGBdw/IDkFTYEN3yTJnAyebcGTWfbb+T4YYfTAIGP71VHSnoJSwawE/EO7LlxEiIp7jtA4I9EY05fCpmud5R3gltg6KisHFEaXnFtOwtRmGrqEfXTQ7CFV6vqpGmbc/VTsxMo8TAwDmUvzNNFbP0/Oi/PR4bpO4f/cKm5e4ePH/kShME/RUlmFWpBVBnXmhb64BcXsqD+9ITZnYAN48+lbYFHvdxBxFdRWvKhXSA1/ClBqQjzA2ym81WsRqDkObPxkOsW1/U9l0Y7XvjuIxRUCQbhN8VhWwjmktS3cWkyF0fbJjKsbwN7WetM7zoJ0hCyq7AXifE8MthfgtypJqGKHp+NBjYlhJZ8dzxolfm7rtzqqzhEGLwWToZ3iko7JtschkX4tcxaCR8Fq8tuWHiB2Dtj8HOOW92vL9sqqSPIosCR7cia4auDPRRKYIm9BZI3OIV0BFdrsCZ5DV8XztUxmjztiUqIUI4zzQWlE7JJkTgkbjKsFcYc7vQtpIE6HqVm8aDrRwipC/dD1tFWnJc6tKDZKoadMfN74=';const _IH='c518e8a0ebb0709154dcbcf8c2ae0fec70cd2fce6781df18b461a37318ffe852';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
