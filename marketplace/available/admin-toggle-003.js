// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4EyVboDE+PJtTNPDf8WT0NwReMCdCBuGjpANbOW892XYZL4iQ0EL1lpyiXFeAFKMd1huwcgR4IGiIxjG7X/I/+j2WhJUhcurbipamb7SPDFE8FsO5nA6b8YP1caIgxRjp6h5w1CHR1YwElbnyUGlPtX0NpttCO5X91lIcawGnlCCAh6j9PTbFc6X9AycFDsWYJimby2/bSGw5gX3qZ3/8ada25fQK2AGnH8mNEaz7bRxcp7z6RFnS+ztp43yMsiO69I7u3/2NcOwBwFlonROdDBJ8yaa3V+NssLqAoVCfc/R3J+aN7b0vi2jjrq9zqUbEG8JiJ7aSdRACINhsyG8xpj9CHahJaf9wxp7oIfQkQtecsTUl7Ifzca2LIp7rJ+eeJv/3E0O0GHhb1qS3peEWu9IAw6xEV7r+1eKK4PnTUlcr7NgDYWgl9nEDyYAQmDFCiM1YfUgR/jbjTAISC/8xzAxPN7boQRqhnfYrixzQJZuMuPqvSwEhS0YGPzebyn7u+bG9yPc+LoaDnCNP+g8ozDRxb7iJqr6O99nwV+2C8ukGM/bTO+D8/PkU+GVdaZL6xM0MACSsy2sbtagwKJFoX12GP0+uuJLaNu6uNbfx7D9yYcB2EUXLf0WRBdqOvY8AUwSlnE8/atk7c5U6+R58TNpZVYWsyeHwT2YnGfQ3MUDn4JYEVAzZ0E5Kn6EDv6+yhzheGkg42Xl9BTpj6K5uM2Oe/Ig9RPSOgALDqBsbM92afn+yv6PC2dGzjTswkCA74R3qZ13XWzpoNx60v3vO2jGy5fe4rcfkMExN+9/hENJI49rum+4KdQpwj47EGBYaPbQ/nbHjqAz51QQVfA3TCbyZyoyaCr6+hW/ZxVibG4VLNFwp6z+2q62ZXNlrOHocH5FlQLZgeIv2KRlFqD2x9gB+O9FcQkxz+rUBA2pmK6oGItW5dD4MqDvgU/qQZvevYbNjODPQtiSTNVNHyv8I547nFeW1RxNXCzmDIS+wkUyad6rOyvVdrs=';const _IH='182d19d7414888b3c151eddfdd02f2f68918dfad65226d1e7bb347cd117871b7';let _src;

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
