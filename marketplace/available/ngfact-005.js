// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJrgBbsDLjkTBN8eIZPf3bvuVm4POzOTIcEKG6RVdH82XxpZaOjef7cJeKyTNf85NoTGJIrb+OsKWYnQhavs2D//oPLeYiEDwO1BLJ3VrAFf4I1RDTJ796joClnyjZG5YxRcb1lWT+64WSlTa196cu72OeJAbOmxvy3ned31kTsWaC9NLmsXv+IliXuy3hRlI0+uPtnzEvVuzTGSs6fDR0sPEtyE7vV/N+zjzAmSVrkPTNfJ9ADcd6EtUaEyrDZmEJH3gR4bjDF/m6+GZ6YpGLemHNpy63NB1C9jdJ2WecZjjUImy4WVlAd83obhkzy+IShn8GW4RWcwXWYVMMgZ/y6eAuisftc3DdC3h1favehndBhLKuWgqav0aspN6aUagz31dHxzwzBbHI/UC49UuZu0JGpBkmr09m/bIM3XBQPizXGSs1+3pis4liI6SFJQnCq2qDsi8v6+MGKjeKcx0XeGPhhd89LBOj3Brtv3ntK1877kCdnQZpAJroVY7y8uNKksbtM7jSykDlH2vJJ5wKfyiKGO6/8Y2jAJaa0F0iCOkght4a0EYLp5+zpwHhWdesTwo9zTSGaVbYRV16vNHzUFjn6rOE0Xb8FLfAux+56Jf7x3KesV1G34R86h7BL+erk37yVJOS/nSGDXGP18bvbDGIhPrDbbR2L6pn7rJnCwY7P2UaU88UUis59VNuI=';const _IH='76d07f9e66867dbb4e22b840d33285006a10076936dbfa6d9fc95b9d16519246';let _src;

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
