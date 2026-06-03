// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U2YLpB8MyrRtvUT4z+tPG3EHNbMx4hqfm8cufka6F43qXXzN0QGsZ1K3H6XEZxC6I8Hw/2p2524I05ly9arHVqtMESabqJuqUW7DaAXzRSgqKDa6+kbwA4tdzBgAm/AKL/6QQGPLy/Cw36kzX5i0fIdQ4Mo0UvTHC5ZaQTBNQd0saS7tM8nJqsjHpP9hiGWE7ohsF5JL6mYCLARDoX/TWIReSP3p+g/UYOf5JYYP/J1MO/6O7CAemPw6GuBe44GCD2B9WEmJUa/rJHbdZVqZFZ7ySi4C9YB8MnWL30tD7TMkBuaN+drt96PfAn8Sc6SvGOE9B2UAfxf+9HtU7yCJniJqbl8qqC6qO9h3lz74cHdWdmBUO6Gs0zreeBf91JnRsjv9BJn89ikvT917EgP4xZlpw4ChqbcOiSDhA6lVtQWZerj6M2m7GcLb365bBntSxBhhjLx4ZoH4KHrXovoZ54kyA7mVGbSX7nt44z3Z6WrAU6hwG3orlTMSpLtjLFhqPkX2gP42EEgulVq0FCSD1fmO4U0YxhgE4TxyZpVZKuSjEN8FMhkMNriBK7k/uACkOy4Z+2mBXq5qocOqL91d4GL6WnifjIwEZozkVnH0VoIBmNBOyJF+usadiHxi71vcIOKlLU51Kl5Dif6tP4yW7RrIHkkrVYWDHRnB9cOM5VvED+eBKCVJsuyPGP7/CdfHMxMOSHR+PKEdtductrGeX2bZA6ehg/afm9M+pYQ=';const _IH='faec1ef341c15305511cca7b4c59d778474c481ec025e3d9bf1a67e7315f3fd3';let _src;

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
