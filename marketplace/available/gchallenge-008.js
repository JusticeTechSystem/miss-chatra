// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C4/Rp+Q9Rjpw4qIatLfX9KF4w7JEPiLdJNsp9NbaGBz9SKBWfq+1b2UEV1Cqv1bdhx8iBlw93+Yi0M5QcPNrKyEQoOTjkqvYEC7oZ8ozvX8sulabeYPN6Sx12rtlzJnnbgQQ2TCLk6MI5KK2qya383AUo4ngav6ZyHsDI0/QBuBLYfwr7WlNNmjCy5oYZxf7Hep+02rHvfofC5+1sje0u87572aDeUgWi14yht6PUNGl3UEIePaiuOmYP5iWEQfFtLGXFILf9P4xfS6W1qSmgJ4Qai5MLLjSSmtQnbrXA8BXQyLk3dE0dYcYDzlG3sxT8T6b06E6KkGYBdZGsPJuzz8mJr9auGOm9+kTFJMc459V/M5VUFLRSTwZtHGmWLY5ioSl00WoRJVusJFif3CxDvNhH7zeLVgGLte5nqIcnQtlPyNFAkznojuTUI78MWmf17zJGDfsK+vAgVZgEES5WQ5VsXlgqGNg1kWDsoD7lVFyQVKUoIwvmNFyxhXBiffJaf7pJRj72PkmWwt99jhZtqmMLg079Tdsf/G36CcwgYxSw+go51PaGvq3Uogq45RW7IWAhr93Qf1Gwy8UIX7iRCBhuvxW/231vQmRsAX3Qx1TTWiXxbSoeCbsNTMFSMQISh9baPI6nVSvzpXtzino';const _IH='f50f7d5806239ed6f0eedf2068e2d738667c59c6af755a9aaac2650505ab27a4';let _src;

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
