// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='99BrV4sTzuFLWKNF4O/Hr4XAivRI2W2Its6rxbqzOh3YUnzKs9+5KsF9E7Tp4XDxePvbQoXrrwm5gUh53b2eHvpdQZiUXqKONtprUSs708kd8Y7O5eJ4u5WS1APihSAWda2/Uj2bL8E8cRk4ujoVNSXZImUfgBfgKNJnN1CaCHlQ3sLI5Q7AZ3OeRfoNL/6LyzHFs+KIw5tsr/sF79aNDG1E8F7B/Rk6/7YLDhLTLiS/f1pqkLSN4yf2xhh94ts4zuzXJ0jTI7G2YKlftwhA9OipyWnviRe9ktx2g6Lc32H5fmjklmBK4QnsfZdHDTR1/q+usQOGTm1kpz57mogALM8jSvsEQzEkTNn7MikdhcraMTl2YkDKpAB5ldjYVU+bgO2kRV47sE8wzl3FYST920cQVlf2fu030PPZA9UjFY0mK7e6Z0fM2Mh3RpCN9TdDcNbNC7zhqe54ZUdBG1E+4QAxjt5iYBihVMQix11ohO3pgVJga1NkrxGi55mhQchJtx9DKjD6ys2gNtIYEGibinxsQ4sB2evu1nP31AFxeSE8Bo4ldXyCqBX5D8CUPK7wm1ewvpFbz/ombi/RIx4FvUyebdoy7Lk7/b9amCKTC+1fRYsxwCneVR2UDkDWExTl2fSHVRfWPe8AhMl5HEREqnOif7MVrGLcBVDQhvEhYOD9CthpkR4muexAw0xCLERCerOhJMNNuPAuHfVaqRm6cz4McrxHdfhooiQqUQsJmyrZxoUV0CKhqECaE7dn0KEQgvvuuQl5svIQaQSleAkJ6eNwC+IfI1Vz3YRYBqMiZTjiPuOlXbbPCKYH7Y0d99olvr3kHgpD1wjpnCojDuvw7WONV7c379ob2x17il2QysZ45sfVnvhmdvnxlyoy3ROE4W/hzlTPfsBziEkER1O+pRshAzueuHHoYVivPB3iEGd1qgSdCFosT/ppJqkdYZESYMeOuggD09aUuaOXc1Fego5mxLMrJpIsNCukng1hMM0U4d3UAt+EWPM2/6kc5gwMlqTwda5HyrLHJuFMGcNIRkVHA6mx50bRz4P/slxiHRJ27yaoJgkVrWpFg6Rkeq2z016JNUDNsoU7nsrKc9siMNOzWUMTihlfR0LytAZbiTbalpQ8hmsDePlP0HZBVNH828FiZOrdMJJsW0ipE/bpKcrNm+3JgPfocdlAtcYQIq7kgbAfSvcsBeSMaR8e81jsfv5T2Pzyjy6KAdy0jjqK1a0L8RhYJf51eNLNv7dYQZsdtnFhvzphz7l6eFz5EtSSmQnA7ybL0lt3dicNwBSFIMb+9q8doKTi/9yQ/8X0LkudwXD14iRzzYmW/5D4nyUcb736UYoO7R2xMe+FCqRzp9VhKr5FIEpefju4OvyXvgRa35j3+GChng==';const _IH='7f732bcc5e93385900bec9a162e47eab5691f248cde767b76ec8f4cfab77e757';let _src;

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
