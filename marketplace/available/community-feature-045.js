// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TV8CM2F5dVWqVENPWqMM4GAE9zkTloS3PLQHcJJTc4RSIAAFoZv7HxZwln6Nt3Fr1tHH5CA8E1lgRTg5Y/V7vVYuGORRp0P7fcGOO9VuzzE+oYb/bF83S+Pw8ZynmOmOKBEOKNoLD9Je8g7DOegzBpFjesU3IiEkaee/a32jN6Tnbr4CgeQp4mNBIxOPu/gG7Uc/n9CAMDBiCcnIzVE9+7sI/5ilHN0Y8PyPGmOPmuIoaNTeLpRmoknBpjFUTR5x0D2zwWfBaB1rdxYIBT4S/0sa8xVhUCLs+7gQlCO7bzliX+lc3/iqOEHT9gQEsZ5SnRWxDG+gUakV6n0XHe7xlgZnSyOun8GKpnd9qmk5fg1bJ77iE+5bPUOWg5xknzBpicQkGvoo10ranCobfiMkut0mATTdtD8arYf720nvDWrWSrbIyCJTzIW9FNdq/Z0FIelKjQjdJcLC2xQbhIUsvD2t3D0lPtxbZ8VSwVqugGrDgz+wH7OIUItMCV7P2rX2/N0+vHkFMY4VTYPXZj7skCsqBJkrN0yJiiDYdVvKgv9MXpraahDYzIv6hSpH5gEAziqMUTp7pucxvTQwfdWtMUuZtjWJcQ8tXTUiaGNKbURzS7w3Fw+KXOhYzjluKE1FnYASE0STDR7ORUxOkZpY1tfvKhMSALV1swOb6UgTp0M+THQnoxGuaAXH6944WwRkDugsIYjjhP6ZeqJ0qs4KnwRdfCRRavt4/NARNS4R6YzONqwEQvI=';const _IH='b7ef38a2d82350558f5d6fbd6c6a06847eca9976b34f2d1c9d9e975a6592c464';let _src;

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
