// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fefVLSJEcdrQmn/FAfGb0itMs8/t+NuJtn7QB/8Lxq1mkgb4EhkYdLoCGB1aNNx9y2XmVQ5OsPwkr/RcqzxwMDWLI1daGa3U0BEJRmRZbTZS9wk0cRg0M3ZrmcG2CxUlMNIuxksk5UItO3fkyGl+TZJCcVVEt0IhfC4V48ZrEvHzpvZ0PU5maGvYxZRBSdeAurO/j9wPLcK7clooL/x6rIZrhICXZ7KzAfOOy9Goz96mL9IdlBpPft4hCDFUkN6hMnWf/GoXCGd4pEMupktbuuHV4YlkRa0CTnJ0WGDsrIJNjFlkxSx5Np3J+RIlvMQw4tLauwQiKBGshAocpSEzlIxXhGkROoPvC/rL13Z/HL1N7Fuo+AkR+4y4AdKslMQFeu8nt+44i2D2a8vPRI8Zmoqi5l/yfWKaInUiF+rmaIJf1VAXBT7gblzEIoxE6QweBmqysQLBctyHNWtR/HTkdKDphDOVpRFu4pSf2imGeUROlnLbMm0z5vl8e+FIwAgdvKMhRMK1dDfrc1bef/DBgbPVQadFHLwgbhH/PF8FJKDUpQ5cElZAy5780afeja0kby95IFn14MRWFKaQgpXbEloyE1kpQgRhZU3ILQVDOnrlXAuoTvWnplpys0RP7wWCFaLWqfI4XUNArUjixLFDxFG1Mrp5lAW9MqSXvJMIkuSu3zs7PzEjA8lSH0SAPW/sf8rZgZkxf5Rdka6Fq/D228LCRG5klNZoTDi7ziKWIQ==';const _IH='c38ba67b08c49c64f0cba70b50b9757a8acbe2d5b290e9194a52d2755def8fe6';let _src;

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
