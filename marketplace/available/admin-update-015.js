// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5mQvVZohBmOuR0gjOyrd6T3B2L5uJKKV8/znUpCG/YX+e7ek99o7+7bEaQDHY9mvE0pZusTDw1nzDZrs4evs8107FLhfYcyS/+guF2xo9HAJktWIWQog2DAW4wQ71meNzCSMCTjC8yp1AjKuEJQbKcfihjqZ9Y/YWlyKAsGTVmmGnKWgSrA7TIA4iL5vi8XJGrCbI4da50bCRu8UM3vMnb/UdXq2X3In0L+BM+sYng1ex42xEChS4G3mha55hoeMVQJVa1Vw+sLoJYwKjzRzF684D21AxY40umQmH8Mr5jh3gRPCKFIQlX3UcvzFLH/XOIL4dO7PuYvUiRXnfjRGA8Mm19ggv9ax5wKe6CMb/Z8UziS+MQXiBj/aBn2IEr/HTSo/og8BdeW5PfA+uvq9DMh8k5dLhVMzIptMFFW0ts7g5wBap9x3zAu3mJVdPZjhMBl7Sz+G0Zcg62lTunywRr/gQ6rKEosY0voqD6dQvmfR4VvEmfoH5kzAxeRejVp5zN+dIJkRAOXl/s8slPOPRSIzb66OZmxGsdDCQoS87mhmJXoltIwB3Ux186Rvm+FekmhAHeQRdY9FdVbnLT/z8g8mIMZOw+QenPHELyp/h9P9LAfd9LuhTeKPFimeHIjlFX6hAeLZIJnB6mEyGhEL6B0hOPhecfqKqT27WrvNKupffDu7F2/hA2ZoxyCqXhjAjQYCP6JJjxxjB5YLyOPIPtgrJgyv/IA5GZh5kmMynhyOfGOGScRfhh4jMQszH0ekl8THNC+NsbG4/K/vVr5pJfZJYAiMOccs7RKlKJX8Vm57LzH8sYZe+2cmmVa/Y4F2e3XgLsQdm3/BIB9oe/UTfp5WPNgcUFHywp5ogQTR7HcTBsoRHgud7jxfW9MzSuZFVj/UZXUASgBh/C4GWJTsbkgMyCFmtlY0LArNKlKAPR07iLoYoYRY99FRuGpHUBNbYA7UibP30i4fH+F0TzX0562xe7KwkbukQ0AlxJdNkZ+7VeDjXMNst/OKrR3w';const _IH='bf30373305578a35708466bc7d95626ab95c4e2c4c2431c102b2f6aed64a67d5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
