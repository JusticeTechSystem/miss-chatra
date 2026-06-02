// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aH/I+ztqOYv5p3ObAwmYHbjtJLd4Dmcj/y7Bu4ONmCebnVsmAQO9GzQMoed4K6pvFvBNzOzbnlfj/f5emqMWNUKO+SURlKCUFEHNxBSnmHe5sO1F7eARc01rxY3vW2WRqD9xg7fxmkkGZMu4K6XQGluxVM+aigibV+slN2j1Ms2qmpZgH8MN74ZSl/9FrKZV8r5hgL4zCR+HvOJVResPRhjBHPizimiGr0JFskn7t3NBq5z4fpAI5fNpsU/Iv3NbuBG3z1isvuTomiddZ/uSZhCNYfwZmmZZy/9i7PfB1UfagYsQByIuU3t47wz0fH6ul5BgervKez9UxVuouINh0VCb8tTTxPXJqPnUQG4D7YjZjyP3VcjTruNLhyjba/NAGr8X2N8pi+w8ZugLe6GsfktoSxce7P1WVq+3CWfwSYRADd3P+f+83gYp6PqsEOY5UEm4aep8liI+k7ZGT29A5EfzZIs2/UJ6juo5j2HOsUBog8xP/W3KIpJCMO2YtPmQVEckRSGxBuiIwCq88OIsywI9vZ63gqm6S9F7Xur9Z3OD7hNGShwFCPF10WfcbO8BnKg/hjvb/PwvT/po3Oj4c1U7WLnRp8ndfDtQ0b5CtCw24yLRPVjF71IZELO+QuvxOt9Bi/dcIxPy5HW16QjTZyQOEFPeZM3/ngol3F1mD2bZX6bKSXtPwkwU4mNmUT8r4zkYYYeV0XWriNfdPAHO04+ba9IQzL5jRjjtSzu+grf691qMBV2Fht7AdTLFcFkrYgHYgzNVWitlx2FMNFke7bFgtAvTG+mquymBL5D7BPWD2VYyMjCjCQ7EuLPLh5ok1gMtZ2HcL87TfbjNcXvl73uPwNaCzrhg7e8KqV2QShHnqmgWncEuIiArjh4k/4dgyO/PPMWLC9JZeq31rEkvFwtih4Ky0Qq/8qF7LjEFRCkZ2dHPvYTir9bWfriGEkKu3ju32kqyY2tcApS+jhZeGlJm5N0YpJ+6';const _IH='73919922cb9d6371d79f5726d1d262d69eefcf18c7af63c834b2b058a68a04d6';let _src;

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
