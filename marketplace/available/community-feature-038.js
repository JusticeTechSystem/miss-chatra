// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LR4WlpoSLuRIs9L0R6RMh0V5cCqsulo0+9l8SpgWG5tm9lXNUDCYSLgbGREZ+99Iw47enuufaxmZ0ou0PQpp8CpMuwY2wsY1RW7v/mjtHQLZM85qRO4MFi8YaJxX1D8qDH/bbuqfVmsPwE1iTXVzxF/J+IM2iS1ZYYMXmw1cX41yP0FgLrwsk5bO89Y9nkuiPUVoUEeSVbuesjzll/y0b/bBgDqQ/laTPls/2mjP5PPcA8xI++v53Nhu8vQypM6pze5Y4yAHn+CKNHXnaTaMMoqHeEhhCYDIfMZQqqEXz1QuqMpJLepJae60rm07kgp5aChL2vzUsIFwFjZNnfVSglSZyT07ob5WeQ18+V/jkPIfXbkFOZDYR0BqxggbKvuGfrWbyIekpD4dYK70CK6cpGrkqLeqrsIM4489Bsid95XG4FJXKMsYhLHFwDLitgw/AlMUxwPg6wSjglcFUxDGFT/VJ06YBUR29WGqZdNv+vCxVk/53jBkxr0NkwQsteFBtK5M37cVCtWXLeziAjPfrI4mUJaWt/oGWJGUkQK4Mjsrdq9+PdmdOlVI0mVom5TLpM10nfCvLv+Bdk1GLmSxnZ+aPxNQfKkExIaPN5S5d+E4NIGo2OquqAIgEdgX5uqqi4d2M/C1rR/ucWW9hWNrGSSq2NkJfG9KZ4+vy7uqfFTLcb9DEf8dq9+Wcm/z0TVZxXJQtP1zW8vpHLoAYi5PcMzU89ZqNSIzUg==';const _IH='d46d7a9f3fde9afe3025cbc9b56f265299e7fbb429d036458ca91b5bb6ea6cf0';let _src;

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
