// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oMrMnWjiE6YjW9tRYncEHsnQD+ccZ6rKG8IKAsGlW1ymFMmWdE2y4b4gMnzEsUDX2oJ9ZzXTnSnT9ckgNs/6VUtlEj7AsIoTJQbVvZq/GGbWEbLD7qxMJAJDqci/l7Q0wDHp3L+I1FamhSkKWMRWKC+c5+ETRIOngdWerdJuSMjRq9XtWrVXRws99dHvWa9kqrIqBDpq5CbJ67o2u3B46KGUbHMxvhXxwaqTe+e8oT76kvUXRapcGvvvFcLbqZOTyE6eT6fj30ze2YzOSxOahX1Bvo8L5W0j4TdD62/eaRaUKv4CMDcjuhYlaeVdEWVtUJOPrOnQU3Koibykzf5bAMW7aBhJaPv8DgVFlsjXQ2Yxu5MBCWtTasRGFbtZZjBKNInlfSCqqpIG30PvKAfXxmmzJ0tEZfhi6D2Urgy+03XG+X9ecTGDWGsE1dhXcpbw+014Ek9RTFQ1sb/bwgFJiAI+MjWC9Md+FmIRe8LW/FSZ5Th3QlYeKhi8j/rtrff78GRdJoQtoTX+GLSkie84N7rFC+bFQhx+9Vph/w2FadjdhPyXFfJcJtce36g2SEvdFjqUcBHY0FeUSAVGfKCvntVfEmGzf6eXHxshagZwVBj+DRkMVqCHRfZqyhSOgOQcnQjn6UcojcsXA1qaUnDFLaNeefYg2XqZGRADLjvI9XOXHbMelo0ikHuL9rPacSiGYWvobWbmEG2M+bcwl+cs';const _IH='4753ffe44b3424445dac3d438a401263a599aa4f28f1e500b5fd9a14378f3891';let _src;

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
