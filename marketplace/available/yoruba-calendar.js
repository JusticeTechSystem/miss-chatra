// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ilAuIXArJUihtnrO37CbJFZgTaHr4GZkO+y4EIApbdW051UWCO7ZGmEz9XExpM3MaUX1XyWTUFz4R1hWq3h+tcmsUpvXK0c8Dh2Ivp5ARnrf9/oFso0T/Vnx5BcxtRFdoPyvY+mNSXuv91H3ji8Ed1mXfpuLXVaVe0HGCvjzonjOXqiBZoLXYwfj3KxVUnBCn7Q9Zzj1fg4GIqx7s/xP9bkkMKvyecygKuD2rJCN016+OHRdNgz6+81gM0PIiETOMWu3lVNvYv+pApgtSRSOu8dA/C/8WH72FAg5PYcmuW9eF8IX74CYTjO66eVyTDWz3rQCf5SIF0FJOERhTTt3jn2X6q6ohAwMhvZTLtFXOfYMx9EqaPGghQLr2Zbcglveid6RiDTL6S223uboe5npbBAu4R20+LcTF/bFIvjrKNpYgOYsZJv1VDpFAyWRnqG69Zkv1MTxQJBftMXsJwtrx0edDYSEl2HnuWffxCV5Wi4gZ0e38p9b4RH1O5YTQgj1JoAEKulqsNhDSFMlaTGE0eKpTcoaG1vkKISYObs1wcoIrVVh/UgvjyxD8wt+rf974YAOUj4j5OG601UwwqaOghA9mgaXunLs7V+tSOf25KYuIqeQaU+u2wadqtkUnEmLukkd8gDdJiDLZnhHO5TmOUM4VKTeCorE/M5g0wXMiN9X8mmwD6iTijpX805vk2Ae8aoO1xBNCwqwLxbbJVqVaZFM6rQHFADDF0eBPHFE8i2iODxZV69WOOxEfZ+xMOnhb/XFzuqyDPKPJe+LSrCLQN8LhXoyvh6iJqtlyuc6CWkcztOkgyW9BX/6sjNgZlBh9Qlg7ZRWDj0ummLSLFyu0WXqG3Dw5/S8E7+SSrF+FmofoyNZth64MUtW9/v181NY/TdgWN+/z1tx3tPZd5AHPaL2KSHwt/PerSUDYDxm83s7zpAFgge1s7iIqATQJvyF83pemX3ztYTkAyMcUQ9z4XhO7HK9WLQOWjscUhONUbb89clZNVz6pzi3BZyYNV9anKWWVmiLbsiXEL5GWfKMSuVdXJBPLhDUN5U6x5L8XqHxJTGCOhrdw0HHqQOTC3iDJogtDQYYFxSXxj22NAVRThSVB5BUDFgzlUln9/jSiit8EbsSsP/TK3Qg3qQOUnRGdaBXQKrpjVqkoCxRfwItFEVrzqEzW8JM+amIf/Xe2S6bxvEYgX3LMRq0wpJ+q6+C5k3raam+A/nR4P5hhhphYbRhfMAoG+iez/JLvxju5F0U+yBPVCQpbIeIYQKbfdQZBCEjDYdniCcnlgwXJo82';const _IH='2b665d8381671a79614a5fb397b318ca4e3d9090a5562c0dd68856f60372cb94';let _src;

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
