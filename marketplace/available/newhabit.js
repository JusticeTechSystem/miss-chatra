// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+A0tuLq1XbD1skxvSFWFwWc2+zxVmKFYlAbpKa4nfqzbE9lDd+tDO40QzQwUdVXK8G0EV27TeI445BKcMUYhYcaXBOJhTWsJsQ0Uu6uVSNwqspjUhQqlQILit4bsjfiTbK7mgnPKobZpmO0m8IiOQ1uSCGlQAsHTWSE374Gsu7jdHxTXPnGSut8xmTNkMnhU5MfHaHp0QvQ7vHQIVEbe/yFWmw1u3SBYYuezrRtS6l1NoQWF6Ai1ynSqHRWr/95lTkcdr6yIHzW9X4dKNBHfUv/qriDHyPcojCUoWTT7vW5zpkSdpengAbxs6WPu+7UluIKJ/vUh0bG4Xx8H/l2Et4ACgkAUX/1AiUnwLhh2GnexJix5LgQdmnhCrGEIcR2I7gxbvrl0eKdr7XLoffyDsXJC0kLJlpmSYYWwmqhSoZIWRZjV/MVM7JZK611Ec1Cia0F19Xu3FZWY4iCIPx55wzNEANuKDbcaCncaKX41AbAiiN4bZuAztfx3UhHnJl4m6u6Ux70tag3m4qE+ZU8zGR1waxXH3Xue2ZjlgYUS4mdqJUelr/hBUP3nlfY97Wm4O0YVa1rwZgRdcrkPETDo7okGqjl1VhHN6/LVY8FVYnOD0sjM7J1Cafq7rb18XJxr8SskBV3oS92MtlwkXbF5s7x8n57DvgxvsSSlmzk/BUvgaTsytC2/PfVg9MPEmSfSTRgbSq8e7saG8OJRKK4H/7J1IBOihfIVUpbcK1JNy9VZERFpIX6bTNIoD9MytIyqKFaJiLFRA8HgPxDPqzj5ehe0iYEXhx8wJL/3WcnaptKoIJ4kw6J5g4jINXwXF2M18muWNsnTFna4rIiRGlM2LlrhQ3YvtsLjuYoMnNyerHFmG0lBAMQrYDUiHmbPVB5BMpMKx3RAXU8omMvJKvi1HgP0WYE0zLycil84MoDM2TfKzZq+nLVbMeWgDcLapywkUoi8bnjsQBWL4gOPvnYMe3fZuDsY1DmVVKtd9Bbg4zh+f5ZP3DmOQkVJGCBij+inMhnSUsB3faTd6ERmV12euHbDyRwfIXJGXMuRktczDfIXlhV3e7FAK0qTYqIfWZoKHTgbCRzB57V7rpv97vcV473zfNSRnLwvnPQCyMTFDIpJv6GWvAWFAh4bWZYTE3zB5LGDkOav7ObM1W+r85op2xr+cRJ9Xyv2UIOxojioWhe9cKorNR6hDts0U0ao6LIU';const _IH='42c9346426ceacbf4f5bf926dc07335d919e0bbbf79917dfbc4ded787667f980';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
