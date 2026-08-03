// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTurevCyL6LdN/3ZciG2vUWjSMR1Gr+IQ4Wby+NJEnf/zZ8HAT+tVGsFNx162bwR3vvstj2fKeclez6E9Y1IyQO2a9lwhvj3UYc+KUZ7LQUTw4KlnVJPV0947oQUhYvXOeEegH8l3j0KT6hzL2+Q+5eDvbF28QkgDQzB+aWyO+MznomTZP8p4CRyFTxoEpUmM4R+bQ69RVBWCIyJZZlnCzXq9MtoEOkJIsQW8vFNvCXpfrkq/Hm7DzLNZZZ9BNY41NtHmCypeB9osoaOP44oY547UvVn7mqbMiiWe/MDdcZfPCnqnPTFbGAP0xQVVJLqUwlDD48CSgGtQGv0wWdSVCiGQG1n+5vUAXOAvS++8c7n/eirTDiM0XSqlh5GKqmILwz9egi8CzKx9AlegyPQyGsCLmgr/WTv+AlNc5oS0cgTQCtyDwqUGDU1+ABodYtMBUkdI/RNA8nFl0yQ4pse2tqdhEVPuV4S5gRvOSMl4oBSnMiAVPhFXey3gnynyeZYwltAwTRYkIcd9ZRMM8emzsNU/dyzND8/z/q/8wVG6Wu534u602HIEKldWFp2rQqU8e/BeRdAqj5hJL1gg0cJ8cSIxvmTY4JflQpp/Ll6fgW+stYe4FYcrTmrOweHLCbfZu/w6mTvlxq8JrMuPaSmqjzLy/3cIYcnAVVP5n7/cZLlnaIIKbqR0RBa9naq+HifnJQtefY2cDXAUcku/ayBRTetLfPIN/68OlVF8proTL5NouB+/7UR6xFvHGgZv9eZ9Rhjgb5cZ053GXu/fHrI1lbWZd5ZV4UHJ0cOdd3O45dVGcM6b+Oeyxm61GvsS9SG+wCBDShNXkVtpDEv+sM9OXDGOuYBE0eIprRP22t30LR4HfyIps65liFxD2KWOvUXdSASGNUnWJpdBEXu/EY3XvYTlDcGLDBEiaajhRgI1YRWr4ssEzES/vi3ALot6IlWO5go3wCuvysBIzVt9jntukzCBfX6cxag1jHhA==';const _IH='c014cb891e0656c9f8bd8ea89fc9de91b280727b104be4989fddd42d594f926d';let _src;

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
