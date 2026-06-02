// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='baIf570sh7ec7AlZTpOMqKhKAlcWkz8HKb7D6qo8Z83ua2A/3Q5qcSVWk319UCh2SiOk0t4ng5Ho2rp6u61/FJpuYlcm8H99ERVUsiwa/TcwVAQ90qIALzSynOmJKocEEyvHwvxuIYYhQxYA3/dS8/F0dOQI1qg8/NA1Bmz4Fn3wra0QnkhjHTQAY69wbGuF/wVOdvKZfj7LFn9+DvhVj97FjiqaSgZ5QJlSNyAH3y4bzMFbKflfQ82P2eAAt3dqxvyYF6rpFaBWyqro+tF91J165sskhbXNpD7PXHGFNCN5Ff2EQNt2rnlCgXDIvP72cL/pbqcK66AEgGFb3DzaY26RxNj5xm6FjN3QPScDXSWpIgFl+9kru+TufLOjQUMO8vzYcIyklM1bushYiyKQ6jU0dWaxijpjwXhRvVoZS9hzUZiXAyXo14Q9Gp55eXYksb5pd+p6E+1YDdfAcVUmgPvicZZpEeRjpBRVx4glG8pXlmNUYy2yIklgXpq/D6/HRhMxIRtH78QZzn9yGimo1gm1MQOdYz0MqOyRWAXF5c6KH1V/BXBE8it8BSeCBirsQJpV44Q1YeZ/DBd6GcGVEyxw38zxP6coTAKQvhBEdMdoXNiAlWwRdET2Fk+9YzHeU5cWX9wZjQ4TrRj8zDMasVUo29GHhFywoJF04GDSaE38dI/V6Q5sRDei4YfkBejcXPuNUG/sBazJ5tJh1nuaI+2Qqbi9XFGHwsu7gv04fCNsLZJIX7W+JLxf7br/ey2/37MpK1XiEypdMM8IwpvENlD8ufLL2uhBoPz0Fzphe6DBk2MNv62wd4UfOxC0zne5+hGD4tNLcjjc541xX7cxhDVKbeq5/rOmu1pI3+jmd/Y66r5l6eGFlNp0wQ5mSeAjJKki3O72oi4QFQio6ZDjhrX87wOrt4DCefXwhqGpqcYJqZgOymrF5/rciFXsE0yDGv+kYvtZtH7pkOdM68AnZfCeZJoiQ7YpaSBZcsqR4P5hcBes06k3Q8tOh2wrAqWHTPKRRA==';const _IH='ecc46884ff6fa4b019ed5da8b81d32373a7bf9507e9cb5482acd30b080be89eb';let _src;

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
