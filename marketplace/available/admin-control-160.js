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
  const _b64='q62WWVd/qYBkOVFHgh9Jw+4MSoHQOwb1HahSTi5wPuV5duq82fG9s0pVqDMsoC5pyDBYmUghYdqmWe3unsYdLGT35UwDk27jV9WkWPOcmIkoiuX2EP1+d0qMxbfaggC2tAbJfAERgpyBIqi9RAtjQmgU1R1dByRVpEnMsfNO478IY0kLvxTKL844Al2BOOKGhGE9wPSybhTbaAJCUmD4rHsIECQfYtGren1M9aYWLU+UJwyWTiHVRs4Gew8QWKIr1/u/+DrRgvA7i+xdhpvdR2PIR9ZC8LfFnc4Ahs7fgK03sVwq0nvuij0tYdzGnJHL1d9MuSKkwfN5gyqp7KuSYY1gX6k1BZQ0Ne+/pJ6JYaXx44DCoSOw1Fj+6lm0VRr0eqYzrPpylQYpUaTbwz2DWZjyYEG/Hou9v2SB3nINPNfZvzis3whrOtvo0oN59HMmfNE+9suU3QjTdbe0jxs5e/0EDIz4ApvDgo882nWFQEyzoWRm4AbLx6YAQ5pZUWCBX1PrrOy4L8JTzA90c1rYP78kmA58tAxweEJ+bbl5xPNYrTk94i94WORUdtfl48c5/7ThzLYVIeo3lWQpwPWV042kE4Kkhxg0TZLm30ml6sO9JH2CVqpJCvo/o4I5QvqtMX/RikylWOFh54c6HC6VJ1HnNQF6R+Wr3WjR28aQne+2NhAur9r/QbXMxpi4NsfKitSBqtvSSkuBOui+9c34GeO8tMrdybzDIzFmdrxaaMCTgNJ9sREUd0H2zi7C9b6INLrv39TiYQ3q8YX+X7rM842bwpHfgVbD6pjDAQPe/ZYn3aAVvUUxPK4bRwGv2XY2zV5EN04XEmLWOrp87fsOAW0SC7E3CPBYicfgFq7qMrYkpDzJ7ejQg/2CtODMXwnFeJRUFgynaCJQrTyXkfnGMdjysmKrmhDPVYhlC+80BQdlme6ucow+D8cDkpIZb22U1EcSUu78X9/7avIZbmz7fNl8o6dIZar0pwJx1SrMLAxQRSXXuWTmZByKshmaKLDnUqVI8B8hxs8=';const _IH='908fe911df75e0e1eec0feabc54be362537a0030ba23287c9e17a3a4ea11c46d';let _src;

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
