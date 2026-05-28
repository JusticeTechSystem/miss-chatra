// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ePpB7YreMlaf7NAFQnJYBDzINq5Yz8yLYcYcyU6HFM7pwCopH9eHhmRwYoHMtz1kVfe+3ru6Szkzu1j9B2YiSPcse1tkw6LaCcz/Ydt/x/OlRabFJ/kC0ASAhCAUcL0AlfO2+Y+vwDhsT6XU5Qdg4Tv/2zlRpo2cPm1R6Hq+FdnSTzCR/QCMNhEfmzNo4amONBmsYFccRW53jXGb5B7RBajlzViafPd9wKDQeVxFnaTN8Xc9IRGthf/CDQVl5h0g0r09VnR7syFQ9vJaJ6VfPfPY74CgBoOgC0wgH8rKZAe45N0VM67h7YL6NG9I4oKtTT61Li0nj3vY+KjGIZqB+7EB5qoJ2hZlGmtxcxkcfZZc0E1mybqlxpQdqhIYJlDNKhHIce4cCdGhujBFDnOnVy512AIumxDvUbwAiAFEyn9uhyMU7X6J6ZH/3E1Fz1fP8PueiPR9xjyj0OeZ6Kkt7vEFrQh/G57uVcY8U8YKoXTp39IDQQp1SZlMgeID4G/gS/faxETWTQVeHduXZbvy9kV2khjWF4tbBGsNT0wcT6RLjuLHLZnixBmwLKgu1tuB9fUoy4QIz8uRE9Tf4MErcQJUA1PAS69N88yqdrauHcEYt6mYg9a3Q5QzJndJfjcskd++nxX+gfQSrGFHxNvuFwAe6D5ezpShe2AY4kHp1fqd4gEIPZcTeXgw4vN3NHWEevRglVqUFirETzXkGXDs3hP/ShvMHDtysZnw86MOMhxSs2iXf8EFN8Q77C7QxV9fHQptfB9loSaskX6TUAERySkMOEsUdEW53WcceTbhU05xXWL42wU0r9X/INimxOFrvt+VH+te4fJxr5+LUdx3BOLOkk71xr0QP5VY5mm9wfidctjwhpZRSz7tlhgY8/R9ZjQSs5eYUhgLruaT+boA7jW/2yKj8Pd0LaqlLuOB6uZdA7s5MCN9AtAdukeyPvNzizUbmjyyww/SVTDIgbjGf9h5aknAId9mhMr9YQopWDtKf6+L61CR2MsT1o94+Iqe6UyAEnRk29D7UwpRiOHEQ4EB';const _IH='baba5edaa0f19a2c6495d539437c2607ca8265cdd07dcb527d303ef4f1fcbe4f';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
