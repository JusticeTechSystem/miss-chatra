// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O9JXGYj8W4PGNP9q/c8BbrXk5UGFBgEtyRl/QwBnetqZJn8C+cV+W1aXCzA0/KiQExKULKqQ+n/JAaRXzN02IpaTz1pEGFrPALBqjW38mRbPSk1M5LhwDizfN9eGrYnRsZ6d+IBDS8PLVtz5h8ZjlpNvwOP9/nQfJffAWnE/sVUCkjgZBBd0NQU7ktiZlxdzwKYQrLLKIUSUK1hgJ20K4y+XtS9szgrnFZzgqAbZ8LVoZWzj6qIZ1tnPugHqKFWClyhi4oMfuIkOOhat2TdmnDFIZFV84KcFkKMkeL08D4nCyevXvle0pWPM4qJ4wzi3lBMf/q+uOrcWKAIQEYcQ5mrb5I9i0kVN/7f5I2oMW/yEhGYcyRHdg0WF8p+zXxgdzQIjCNJA1os3+YUW6iJEy41t7UoopQiA9hhhF+gLlDg3sigksJz1KIfggqe0WOIRzG/nq4PYHLMiJKj0iAN8ZlpO3hS4Gsapu+msIs+O7jQ8Z6INUKGCWn0H4IscGY5rQwq0WgSK0Ud6KRFTvmbDMHFtw+x+bDVomeTzTymwPh0gkoiUudjX2xj1dJuBdvMten1Ubxe35tRMFG4SDaA2otsR1kNAZKuHDZYmN1acLfuHl4DtA8rpCJJ1vZ4wr1+Y6h3Zrk335mp2iW6DTHYt1pbQt7tqOVvhIlG5TLPp5RtYcrQPsI4cIShI1RFJ5A5P14Q3nvinSofXtGvePIEqPk8hIFMRN9Y5n/FhkR3y6ry5y8BBghv11OwV9nPFJ07bvbHOk6SJVkmkq+choq+eLS3h6CXQwkjKVyvF12ctfRN8+D/A0wKNX8Z33TaMRyfTUISfsMm8mMa1rjVPRRjwnHDWf2z9Y39POp7uv0NY2OolSIa7s43XYYONFFLKfL5fLnHM5gPkYQNLMS1rbvTzapeJRuvJRG/rcoHFn90CrO53JMxQ1gdebFjeupdfomsoQQyaX2u/w8y6EgP3pdmHB4pAqGJLiMYCJelcpOvZ5Q==';const _IH='9783503d0acab18a369633ed99e6629ac856ebfbd960acb269738ac9b4d08865';let _src;

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
