// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='roLKbFNrb6tJTmTfa0OpTAvijuA3EbpujkdoXM4uBnKNlvFYa0WRRUEkwYJPFQFFQONAoEw/kSVAX3yQyZu5V/FGUUHHn11CBk659cnZi736IFuMyHbrAGSyWxTEwSl2SR4qKhzwhO8Rc0O7/UVi1L6IhKYCM4+12kawiU7zkZPDUFO0hHS1k7O520v8uJm+VSyloc/CbI+WziWB5UbNfcukNxNKFS3XwWXZAJMziIEhlO8hL9CHEjw6I8DRb/OWiJeD7jy/uerWynBFMpcr0dhijpwp//TUMjqyHKehc6tXryoE122G7zHqo3609ENNqepbY3wq8H0wG8FUiqWQUrMIZH37vJ26463Cw1Bpa8J5qqBoNJ4zxblA0AxhScSW1EXQpWbXC5yGCa0tRjZxDVIe8fHlkFZ+VdQlvJI3EAriiafQ41qwZbTTLPVTsRkNa79Z+xDxh9XuOxt8e5yNqWtbbcmiim/+JhgH4jlfDcb6TN3QqwXPSYPSeqVLoU2vHx0RqZucs1FVN6KAYJ6TRb3QVJgfYBB9yjXq/dvQCRNt5jrw7T7UKh6YZ4vcgseAL08VoX/M0Se7skrt/puAukq+ktnKaX8LOjTUqydrMcM+5aoOP1aHiE6wccWDAqCJy+w/2zwIiQcQKmBGmLV9Uus05HdVZdHRaVI1bNJqdkbLUmsx/URnpKcyp2kUiyjiWwVySav3r66M073Mum3j0CnNJsqHs/1+f0zLM8gxiSkrQlXDarIoNIDkAGMNLDiHZEXTwBhOu1ckfjVS8yzksrSNYbVuluSHIUhYGYjoPLaEiQKDnI+RhTqXcUoSBFSx+W6TmGiCQfVv8Yl+GwjI205ri4nTB+uFVr/GSZfD14TkdzCdbF+BxDL/+xqYjA7W3o0VVI73m3x0Sls/IF+iloGARYacGnxIWnn4hWHWMqOehn0AzzdpbqPHxLZG1iPY/EK7bsdDmSfucOdK/iAvH4azeFvMjK0L22KZ9dnqJhtHwNVbBNvxR/EAdXQXEgSvEcfZqnE+U+gKQXmp+HE6z+YyYoZ0lGtTGFZcDD2z/zIuw/ApRdjWosf59DkSVQSgZwAyN7rsQv6lsh/dZ1YwlVaC3fFQu6J1gMUoQQg5mnkF7DDEzsmV0WeOsfU4WoTtBIn0bn8JNxaTl1/98QolRGYxdkUChkb+pU341Cwdppj2EpZeb/oZksB4r1od3KszDIx3PJYMRHkS';const _IH='dc3920c7a8285bdd9567b78a9ee211a6b657fc9a59d5d66402a6d3e24ae03afa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
