// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DXwKoWSWC5uN9014yXbpN/UD9TITdInnTqj5Mxf5FplAJrpkFsOe/pR2PpBXgsY7+IW63kdSfrk+uzkfcfMU6fN4wltWHUDwDo62qTT3Wcw3z11Wkoc7rG5WuBB2UXgbnmnEt2Ve7kbwon8YoTB9rns5OG0FRkRBdrS1sjmTsxVC4AkHMM0snYXUJB7XHlslpAsQJcV3I1vVu5y7/0N9F/6i2MNTi6OO29SWrY/TRZtaCw5nQKPayGoFuX3j2Xj6gwkAb8JS+bS/LxnSRKA5yYT6SlpfWz8s734zh1cyIae9SquzKhQp7DepXpsvZl8J7JBa+ypeObo+Z754vOTcGHI0mlPTs8SVs0P8df46TwPZywuMB7gN/xv7lTsUtUMQRxeIyM6V+LqVVqr72eWZcyA0eXq9VilNxhDDsSejnFzVSuWulFd4e+I5UdfZ498Pbn/Cu0S8Nh8BFhegtZ/d0QA1FGR06gl30TDNg3dTgqE65h7cB8Ckk1qGOe+Gki+AFCyK0jPsb711DhOVoNAG9GjjU7KvxcKtsGC5mgnbzWUnnez1NgIhmevLMugjFJEG0Wtg27TfwJ41+yipjuMjIn8pwEzBySE52PCqedQj8o5i3WdU/UKBARu5zYhdUtb4vWLu+Ef5fEfsnT1XqYk0Dr7IiBAUJ6s3rVnW6HgWA9YoSF67VzFLCJY4p6hsvLOlr+AqMftvG6jB9Bn1oG/EYQS4+EE7HDFhrTmPLRHgh7VRhmQoDx+fh4TyZ6TtKiXnttBIilBhfVFE3eV7JXpo1V3UfHTlvp/lwentKi0GpINaob7jpizq57H9mYAH6WL9O4xyGv27IO/EDFyRI8PXVkeyj+8GUrBU8cisIDSrFfsyXzvF35cgVcCU2kC5YYnePKX1BasAwjmHXxZsraIL3cjdVT+mVjkDFYDmwthQc89NHcE3UrS819lu7dHSeZjuMopf5TkMcBai2+t9EcUCFiVLIh87Adk9jFMetzBgi4xSqsRsKxs=';const _IH='893ab6bf0529005c916bf196c7b71a5cb990a4d1dc77253b10d051e2462155fd';let _src;

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
