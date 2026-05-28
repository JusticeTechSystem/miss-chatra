// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0lpmK63iElk4TtguOpNblT2TTzBnKgWbc7iAAkSfDNTCy4fMhUuU2fIXAlq5X78g0uNKznR0j0FrgUc2xUzIwG+9EXmiVsgI/mChEIHRp6e4sok/Jwn1dgkZQwHOiIq8UCE0XY0nZh6yCgcHA+i7m9h9m/tEoPnXh7PzllU8bPRgQsh4/iD6SUhdsDPe5YWYxU6XBYt8DDEB2JLSGEVBAx/PWqxv4MWPNOS6lxHs9KEEQQscYLv8ten+sCnlzTfjWsG66et6pC6e3dj2VIbHza6+Ju/gGeH7aSd3T+LTR9uJidiW8EZSgJmBTmZ27bmROuNpOlrZ+N14nN7RsAa3EHdykU9KSg+iySvfr0dW0FmS/0NlGMvBeQd09E6eiZILdyFm20WVxoLaXfNUguW+++U+HhhFyK62JjFp3/dvsQLd4bGJCb6ETtoxcxuRbcwKVWO2Rq21HOokoV/i1VJTY2GE8TlJaK9yu0WMzPI9z0S5sZ1rR8zjDWP7+i7dr1l+aQ4H65fRKcT6GF3JevUOYFXmw1Csm/EbSH0Y2zEizDKKgbZySPD6Pi92DWbIN6LYails/An8a2IXrBCwiLoUmo4PUDpRj+xeiRLQXlZdNMGyj+gR9zUERAx97CYk4crdBJBnEMrmlTV4gbe0io/nKTbpcopFeKkXPVbRGqqZplkCDSvMd00kPoe0bnCE7PhhoTCLrL1o1bZIH9ZXiqCW2Bqlli32EjPtTFf/ZqwebcZdgHwftJE=';const _IH='974edf417cc395739142b36cd9b6e9d993f73620ed4a194f8cd8e716099911d4';let _src;

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
