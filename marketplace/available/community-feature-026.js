// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UQ1ge3C7L+6c+PCIW8wQPhZKHPxzAZu7XZz6OkXUgtob+ezBWzOji7LghIh+X2t3oAdja7AI2Z6wX14rGXnKppC3LnpT2cuBQuCQHxZFAhaWwrzKfV93wu8HZWnSH1vFgfDdfbldYwk0iCALokEqTv5YDyuxBk/uXX102SEfTPgQ3Z9sRV/IgyScMvNGzco5NLXO/28QlhUJN/yKalKTtgPaVcI+rjJS4TNDaLVPVbxoZ3VMXHWNRJOTRc3JTx9MaOWX6oUFoKSIMzdZdzLzJz3vw+QxUhPRtz532eGCB13Zi7sGrNo6Eimpm+SxcTct7hppOvVMQezCH9AGqlh272Je+r5DDX0CGaT2u96b+LOyKAq30GxeTwUkrI/RG9j6e3+HXTVmGNqIALwvnYmwv5U+aKrDXr9wfcp430TI3b86CuN54Lh6i33VzGgcZzUI27R5APFsrqZAG5lH8SlKn9ta/cVpHoZVBgBU1AClJq4LjnvFaLCMGhBJZMqJWTrzh6LeFCJRaOtLitT8xz76cQwhqfTx6y4kAhksMHk9KxyVy/5xM0DXl3Huf2x0Re38CxzTsbtH7v7SdJoLcvSpFH7b7IjSl1MOoyybN3xQ8mX4Tw+Ruhwh/A0T30IMaIbqksbfyTXcWmRyOtyJWkPXDPsk1f5ikyXGos36CQDxBYSNnsbLNlw/tc+ewjI/3Zm5gnkzGdh3RU+UF2M6iuZpPYHzq8Y=';const _IH='8a07c80bdfd935c71fb7aa437585737400580f5a332a8f6d88a981ee573cb7fc';let _src;

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
