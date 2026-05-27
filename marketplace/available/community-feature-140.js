// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BghPP/if3r7EozU9YTh2HGqnuAtWVENDaJzSaEDxIG+MhdSkxPJXvs6Iy44RqsxBhfTqCArDpLTpnefBz2j/KXf49CkNFB6QTzMgCl6QXc1NSsdVgt0TKQw9ypjrEGGRX5q1wBfpZsVa3ieHEb//beK8I0nICTpjxVa29LedwH0S4UShSol8+TtQYACh7/3LaV5zHmkii2is2+8B1WDU9Ro5rjdDeSa3jKKXwdndSwTDZM985XTDVk2IjG3h6RZqZyldDrs4J28zasvGh4VewKHxVkEA4f2QGNvwHgVacZ8ciVi84TFMhvaKfFBnRCR7NF8WywjxbYZa4w4RsKl6H3qpJ3PSUN8KMb7ohMkAfJiUmFuUf3XTFB0HdZEIjTEO4HR//2536811HiywqDzhssqZ2Bd9sFPp0VbOwkP1DUkXpwwKReuX5jIKfe+oeSvFy5FiKM5gpB9nNM6dYXxKDiQYuWLLvfCZW/GdYfsha5tWnnL1R/8vCNWopJLNDB7uk0m1KpPDt3sKn5xNeKnX3v/IIkSiWxXUrC1HRb+iQjenHQtR5/jC8xz3RSwJ7p2XDA99WKADWOPKEuciFBmyQaZG5rOK+72iFQxmDBuIrBV116XjF1c3538DvW+aKIvQMdQ1pG1vIiu12Twzx6sAaIXgr/+8xxsHpLFEUrvX6aFvbDCNqJKxJyoUfJeegdweiDbdQsRkUUaBgIHrwXI8GcvhnrkfZDDFcHFI8M9ympxv2bmOtQWBu4Z5';const _IH='bffa543acb35b17793a9d97217df082bf7c92d0a834ca662fd57d1f52315e4e8';let _src;

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
