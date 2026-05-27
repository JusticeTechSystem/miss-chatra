// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xoZ7ivx44xxy16s36tbzsyf/xvnfQovbigUHYxeiLVcbuAqmOognQICuEiS1fDCEY5SA97fmK0CcXup01tivzS3xjwhUxLEruE9FUwehxFc/9R66kl9BO7ebomCTckh/LO6SJCyRiIJFCbUNMLsQxk9AQDWXTDh2FEqaj6rfNQFSIK3f1GP0tVIxpO47jgjKOAJvM8hFOHBvABfH+KGdJhTkp804+Yy9b+VsUJ+4tOa9ubISrIunk1mssoNz2ClZ2bhsQbRywadC2UsI6zV2B954ipaGWMTm0TcdCUJCUYoPldWaQG81I7tk+IP9Ew6vyOiLVVTtLfeQgMMkko3NB6d2swVuhCaGnBlxS/k1GHct0/aW+kI/I/exZ5NoZ2R2i0HMwlYa1fFAEA9i9HiEbwIQxA1IxY9IQgbEp7iAAciUb4Ch0S0WhWQwwU6r3KYq2axwJBxUt115tGpgfvwTqC8NdaCiVyuwjLq5YRI31Lk6I8I2UUCfRhXXHjsFC5XRK7IzoigsyZLrXG8U/Iv1liXs0m6UbAcM6eHK9ueYYWGNeZiLm4H/yZdhNW+DHJoWoeiNJRSkOXpGNo1B4FHFUETpLcS1NsL9rasZtN5QUwWcOUqov4TtyIsQTbf09ZDT3CSHBjaemTxoyvun+H9ljuAnSF+9YqSudu8uygqn6/gvQdvIoEwoLt3meAu48+vDmXtDSAg8EEUo7btkOgjRYwFyj2T2CLFRZ4jApaOpQQQeswtyuHGFUoYC0T421L08637wcHsYYa/ppf4M5tGDcXwld2YbD2h+GH4GeLgpvmorBkdN1uyCG3nV5Pny4RonZZW68aUZKTBr0bV8FJg2cXuA9MRQXa8bMYu4nbN4Mco68nhmke3tONJAA/lUAKIJEgibVeA0Z2V2BmzEqMRNC/bTeQGJ0LZxtLKlGJcT5UC3XiDH0mFU6+fvYO643UbMV8Mvn526bfmmOL7Sa0FAUPeczFUanAAzE2rBAZ5hOhfVjuVq5aOb/4wehNbqWR0H4sZXUhyNLWblFdSVBBkwchofQXEOTmyE/HVAViEzf96zIA==';const _IH='665f0e508d152f443c95e6306a45bcbfa1aa851658df59e5a500ccdb6e88eda4';let _src;

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
