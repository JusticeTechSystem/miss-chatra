// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B0w7vRBCLjc6+XchZL2qI4IzuwJV6EA98ZYu3oI5QVu8e1x6mdpbn2ZWbMUxiOlmNrhJw+PhUw4UhWlQYMNWBfmoZAR8OrmbDmODLkzpDHxK4eWdtuPw9hgoX5oT9Ntz0mZcpzqYY15BAXbgPmkrO3xCvSEiMMBr0TL4hmqLn7j14vRrnZ7vsxS7RtFENlnk0UNn5wrgqMPEL/4PHQdygZNYws5wpttAo+wZHVLIGo16fYegcTi9IhX3WaUgXxQ+NSPOXeh3GTakiEBB9XMZZdpARzu9c0qoSKCLzPpdjzJZE1Zwpv7A/bpbf4nNxk14c7Xcu4yKe5Xie/K+q4KJtFLw2XSD9p5MsQFEJCZtIeyZ3bvDpNLO6ziYvylxQE+Ma8smipPk3nXypey9LrHTdXlvVzPFMT+QdINOdH/0qS42Va9PZI+nNDI55P49Azr/RUmlOZwFiZDPionzYj9Pxx3pKR10DA157nvK54kYrIpSltcShe7owm9w5Nj2A4CMvAiG/bxthajRE9zg4LoNMgfsOA7jUkUD/6OciObTHliofCjmeGRqGaYHgxZXE1hSu19nBvWIX52tW4SsUcbUchOwFa1Wd/0pXvpv5VX35bSiynTjz8bU1Wxip+2PkFOXqb5GPFK68Mc1a9Ob12QAOsJ7WVIrS3bmjCHiAw6VAosAwYH28PV/aLJWeRP8bBtZdURLrWZlXBqdVOoVD8eSNF8tRGk=';const _IH='2f089b151f09c129590b11391efe25662d6195afb02fabf7105f8da5bd2f2ad6';let _src;

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
