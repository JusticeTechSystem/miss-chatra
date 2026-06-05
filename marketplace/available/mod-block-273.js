// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1a39ewnjPDHr9R7G2Tot4zr/KmWW5SbTmbxG1h/oUZc0UNYWj0QiaQ+7GTRprKXrVvJQij6iMsHzqnan3WdA2PUAaHik3j4unq+ZZmgHq6SG977A5VzdIuxDXPOHwPGf3Un2OpDInbnVlBZekhBruKxGmbkb2b19XKC0dkrNij+efXgDOSeRPGXdmEYfoLNt3BOhqcSwfwfrMG02iHhV0Y/6PydmIF88nHKGtPbGZx6kYP9PuOk7lsFwOekl1tVTFxP3NTrr8clyQmDpWol7kJQHOXJCLdhFa3Dl1ZDR9N0P08BJMOfNEAhg2WUqAeO0MHDGs++UGv6aa9F9Ot07j+m+PBLpwe1xGQHSO6n+h2OXdHMDJhbhgMEWaSNEEwle4QnhEoGJdi1x7ImyNyh9pOthMRXI4wZkAFMi6d9MM2r+zd7FDxqaTHcnGj7cbBx2ans4Fq63Qo7yM64e7ZnTO/96oX9fwIT98+jZ7y846O5dprRDO+sNDrc8HEOj2cH8IPBFSaWQkDDZSN10qoeOZbE2XPfLegTz081wqqfSZBZLzzp52zqpHrK2vkWQynONwLki4Q5vcYKBF/1vqSE+0v9f8vVaNWz1G15yCPTqJpBuzscaHqxFew8nwcSNOielvNdJigOeoobL/arQO22MFqGLOvrHk4v3CAttC+wO0BrCrb/MuDepQ6skGnwPmRSx814g7O63RGfOMHbSpPLGjc6i5sHfx6r7Ts9Y210Kz79LRwXgeu2WE4F5PHV42WskZNwN1m/ClqQhT3+nSH//oLnKqKdPpfLnF9ht0LYdElH9qFSrKl37ndtv7JTMddfDr5qpVcP4aGXl6USfEV2sMBpyvkWSdvu1/Hh4PMHHh8X9QOZdEm5PQxNLbn9nORTHLBBegjY04o6YCAR/QOmjRd9iGUX1XX+7fWo7oBNh+wFFf09yoyyIMK7MSR3wscyPQUUtLJNvvGJL+pTUVDHET9cRX8CFiNL+OeqipdCD8iMkOQ0Ij+QgVFZYGzmksoc319p+0GlH7Pp/lHTLaiBdhE/1lQkpzG9vlRRBuylYfNBUZRUlANddKyY5+gigl1yHdMKEgyQjOOltnvlhqs2EHN+6T8Ln00sbv9tTGrr7UdDosDVMMx+xxCCARn3n4JuMKgn6yk9j6fMgNwfvt6jnAv+4yPil9rk45kx9jhG7Pk2DnEI4PcbStXW9FKUQjAp59apSaXvXUtihb9yGH35Pi+VyQ04EzcjdksYo/k9vgpmL8WqOSqGuuHeToGshYHs0GWP7c4uxt0RpRZhzhnH909xhpZ4CzwQqNbI51mPoYg/SybFy6zbv+vrbmE7MWAXe1ZLS3giotH3LCgI5NNZzQ0gaNXS1UsACNybZZRmT';const _IH='7e5e1ea0ff33a52c14047a2883b1096e3b6eae76dcca36a7df7e52261e1dbe31';let _src;

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
