// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgsMpYOHG9AjqILyOI4oxuPljJM82TEGargLIBaGr7EZDYTfhr4xBHbp29eXcY5tp6PeEgWJ3dfMrirTcvzG4PTSOK12mdGq3AsgekC6BOLnllJqB0EijuhhDw+XfTfIs+23DUuJI7KhRf9GyThheVsb0dKhECJnK2mN3x677gmco33c9Nxh9787u0wTL+Bnhu4ZrhUTpGVfPetJJMcYzBfkUUqHB9HdHJ5HKaMGyf90R8N3Ud+QYqb0FXfALP/hc+1r266+Mt+sTu6j+Vp3J820vMtmgwQQ23XSBHLw7OsKswZf0ToxGX1w3rCywVuhWsMrn1z62Yxx4DgPH2VzKoGgjsiC8JMEeKW3OAcP1rwkA+p32KZ7SbWkbklYtqDYu11vkS26Oy/6m0TV9LSGimrfQTejA63by7YqGWBZz9vvw8mLnyuMcvaDK/Ahm7zJiQWtbpyqD2SIIOXF742IpY9SGk0525h0nggCHeCW9G2SNw0eIrSzSBBedO8g9igtCtkKzda2tqMlJf+UzEuSi3yB43t98lG4hUM4RlMvkx4cU9tGVaS+0UZcutgF345ZbHwwDSvywKY+4P5aX3XOtYEn2FCk8s5Fmr6KoepQROPyIUxOk07GA3fyV+Atr9w0dsM9WvLvA/7CsQLEBEF2QaSGzuZeWEY7yxghxu0uvGaTj3R830NR/lUmMk4pc=';const _IH='23a50b18c55d8c22e878607ced4e6eafa60b0d2411ab729cb999036975ac34df';let _src;

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
