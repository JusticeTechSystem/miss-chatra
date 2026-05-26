// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZIjOCy2gqYsKZCu9pzfGTj/+elfbjqEMmB9kCrnPTPBBcDX6qBziSxgGLTN6i4vg3LzkNTZZg3o4R5IxvQmZ3ipQJzD0PBZASRK1Ib4AmwqfNNxhKRufwREPJy7eQJ4VNe7EXvy3fn7etwWYdtwccgNWB4FroepiH+wrHHzFHBIRzphMh5bO2vIstMOjs/mTB8Otqs87FE6igEf9JrcmtUgzCoveg6352Rbigc1wTJ2Vhp6xs7Ut68ur/0qAH9qdZvL4mfNOi5LlYFK1iNF39KWuUU1VsZWWP08kukTaS5WsuOvuV3lNyXQQSeFn5JhQfWUvSi6YzTZFIWmLC6HxFcebckOOHkALDTZmIPi2SfMubnqePJQ1vei8kxGEjmEKPkDo9jeyMTgglY/Xk0VJWvw/60qz3WLjEnkyLMPIM8UzZXOkx44GLd+T0Wca//38w/hSFgxo57MItlnt2pc6K+6w0iuKT8RQ6eUr/HQf7VcWPw+JcAMLrwwdqokdWmPLybnEoZbNu9qMgF/25E+pPBi9NPnppkZJf7nd/jtqRfr0Yj+c5kAj2s7yYjmjcsD+guVEki0XBXHSVawEjIgMiT0ZG+Zdj0fnogJV+7KkBC+NSAFg9/sDks/Wk+C25NG12zRXvzRt8IoT0cy3XSanoC7nrZ+D/DQiO+WVqeBhTakvpIGqejqCujuteCckGMUE8Szp5vYRP5km1qXRy/9XT68ttkPYosOmsBaJDi5cXnLYcy8acrXSzwkkIdjcds6dCvlVL7YAxNTbwB9ORCYNLwAcPLlYv0DLJm7P6gkJUDEVBEKX29L6FcMvy7Y6/1Ojs0Bjl+S1vSi/e0mKWwHIiKvrI9I71gnajCBO7VYrMKpO6492JPhnthoQLXTF+z1P0aebr4RDD+EqraITBznI07K/6jurncyVnJKQJsHXHmTDFyu2wyf38DMOBMwN0GqXaTz359C/liFq7kjqUcc9RHPewSfKoGJM7np+E37B2uZ2wWS4Vx6HMIZO4vxy8iF+0c7wG30BPiRd3XrEwdNDu6miwd/XWAWoKbD54+K1wGZDezM2u9tKkbnPpE0PPmrBN4MOUxTrcrMpTxoUCX6VK1e2/IF981dc4tFOaI1wXg/+w+4ecAQhAknxtSieiIA7c+tCkiqIkjb/BQw1+9DenKvIeAwkZARp1oIzVksmMqkOxZwGuzrhlpiEE3EbXFDv/vsbuBB/hAP6KXslMkjgwKszDv4qZ5GnRyChrGCcuUHOVC+bc/Y9Zw1200IoUGn7tKPvE+y3dFWuFen7Q889y0h3yOCF+YgQTrEnOuMCEhirrMIZannlSfpS/A5MoqFGpyAax/c=';const _IH='168e9ce2fdd36848c6eb5bab2ff2bc2e42828b0719940429a8e3a9b2833b699b';let _src;

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
