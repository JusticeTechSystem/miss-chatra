// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MwQqk8ILfzn/snR/bvsw25fUSIaRFzzWoM12/fjRYqSI5Uvk55BhUnkgYBIu0IbiE3QNzKDqoMkCHbqnnAAZf3zNnWfF5YIMD1F6ZOYkc9t7sdsDdOq8iB5KEAQ4uDGk4QEm3656WTyov1YeURLFRoWklEHaP36p8xgWAV4bcpVTgfjBCPKX9J5B2R/8Nr4CrobMwHHtkdAT8yzjdvnoCPM8ypZ0HcU7yDSQ0Tv+1GO5701PoKDZz6oqQ+BnBBaVi4O8AMMBV8XcPh75xCIjPByc7ohb/yvvQ/QWG7j3GJYoIGNYe+7m5gLEqPjJQnvCgcZ+rzpp8gvnL8yfj7tK0zoF+HYlY8TfmkTFzA/8LOv1tXamk47OeZbq1+HY+2dlQKbzAIzeroVF9Y6Hpe1nccWkMsz2VePyF98ZbNVUN6rVFLZD3j8Fe8U/i3zzRFn1lI073K0hmNucg0iVGumQNOmwTJ88f6Lbv10YOgpuBtSlPrLkLrj+rztG93ab4vFAV0gl7jXXbmEupOviIuyO7P/Ra9+FAdVHBX1jk46JD9zmYrQS/zybkSL/Al0RAaLWMba/IDa3AJuj7VZP3X5kKXOlgNj4iG4zmiyVQsnEr7bp3d9Xx34L6XQgfASXsWVZdto+vazN/6F0ANR0xE5uPTZi6AOfMVj7sZ02Q4gl9BZsfs8u2fvJL8h5NBRkCZa1vk9hQ3sj3DkwtqY7cF5MaG/IA70AqLu4i0h3zJ05jFYO3fiMiyhp2tIZSzFm1zR9+6YVTQtHrxKWa9JYrhmT7ROAp+Kz+iKzExpEFZMte01ku4VOtyldlirJJivQZ5/ufqlgbSWIjkhgrK6W/tcqvK2nZzPJN8pUmnwEVoEkWYK2RQkdExSGCf2SCJ2PeUoClxZwddVfxHtuwJi9xnASRL2dssgWhtF2omjoo+j3CcDbZYagJIb6eMqWg26I/1mXYbZsYQPMJFMtTXGzidLgn8EqBqSLHvrOF0U+GkI3C+GF5WDiAwtFnkrJqK/FVEEedvSr7cM6j3etaR5n6cdLYTsPBk4/L5/MFik8vB/DbL0bYpQZkPzutBP4f70JEIN6Iy9IKmgR2fFhtevpa2mgJ6zVGJQO29+W1hSq8WPOg2BFX/U8/ukUwDNH9npGRHn+6q8/HpCXJ3PDO0hhcB3qS6FgXPkfrHFXzGaG7WlDCCRLHqdjBJtvWY4hcbx+F8nONoTjorRqv5RNpUhIpNYJAhX0dW+HUZOYwd8xLcVlKiWGXG8egnK+MQsYopcWejJqFQiptHtVxrZmqA7YbaZf05naMPsLN4v9/qacjmAGivVaDytcZ8AEF0AO/gzYCfRGbny/mO4+DG4ZgBgj6qH6mbOZcDocUgKC+rR4PKkxZqpaJilVOZJR+qMi81zqO2k3vSJogcLhqQBHIVUx1VkKv2YkmD9A';const _IH='d3b56da769a7b2f6d0c4b4ad5d0af25db13d94950c47344c93f0e8f045f4e0b0';let _src;

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
