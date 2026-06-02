// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PCjAqnaIjTDbpLz4LFcf9Gui7jOuW9+GpdSOfD31OdtsVgP1JdmqrNsrdTX3Z/x3RPcdtI1H0xR8foojz/5eou5BEfZtxrwB+Zwj2cXjRtXBw2eoTfXzBYVQBpbFpBIwRgecJ4LeBPZwt4QlcdoSgL42KPp3czLh6SEtdVrO8c4vMc4coksmRRHL44Xl1cU5W2CyV1QfHWENUl5JS3V4+8RH3XFzY+u7oRDxYETRaDRbbSctUKGeSxJPztfGxFccmluCCoGOat8dVVaYsRgudga7miDGHNjtSEJeffQut18EJbesNsgpXrRVLet1ea0Acdfse2ma7l6jkWQS+2RvvHws7lYpILkdcB8Gp2A5kOyK1Zz6rG+ladhqXLP0/gT4NM+S7XG6x3co4xRgx7b+4sugCCgsAu0pzZAFDz7FrcDkSSpt557DhJYCITrI926tHLCbb/LvaONDUyjK/qT7NcqkgNqEJ4EbRjKfKXKfKuM9cw20mEPs9Jb6AHmXNeqzypQDa5gLkCS385nWyFWYg5WA4czJ/Qlb0+/CgJQnVI4K5BTwocp3HBm1rcZp0fIeOUQdQ1t6N+s1T6Hg72UlLl9rvTeN8X0yfHWf9tBM2jHaH11Fb9iZcHHI8vyLNpkQb3+1TQQl9qws5DxNdW/8dzwwlgXyFE0mvhUuZeKbiRQtzsawzo2LjSaRhM/CJ1uoqgFqRV1io4SHqXlTA6ylB1s16D4=';const _IH='76979ae420f69fe0fd33bd6216ad83e54e759f6d7c918a6f7e8a856520d5be8d';let _src;

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
