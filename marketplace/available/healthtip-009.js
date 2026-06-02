// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bjinlk+de2yqONQIX5VI8Lx5Nkp40wGf8ESgvWyNlzp9IORW/modkEdf98263hCb70m2uo+6b/LnhyItzlNPV4f/KQTzuAIMNbLhTTwHRmlmjMkqFAOGew7As8v1RUsIj40q9krdgP8nUzH/9T0z00ykRGgT9yALCLeieoPI5KE+jhMu1G5FVE2g9RRnAcOJWzSl4t+iANWWJzllTRs44rHBFTxHRcqyeWq72WhEAxO0rYWTcFanoEv5OmNAeFFHkwN09LTSr4lftKPvj5rz9o3zavlJFDLInSOV2Tjth8CZ7EbZS9JswGHrZYiUHUBRsisZm+NUYQ53SWbgCyJ6lyAleselprXOzp0bctcbquCKdcd6DlMnPhh74FNVk9G5cDuyNIsJ28BgbSLRRmQjmrIBFe55l5NWm9E8ILzhOtZBg0kJN+mUXtqusZ1Cg29pe5al7vswBiSIGpppP199Wyq+JJNIMZDYIm3pSz8MfNIHhLWQFdwCa/DvkIc9vKwW6zetb4eetsb1lYdmgIbnJhhgddjBvKMNUEDRzf8kwoJYtFoET1jPcXKAAFcoTqSX9vzCBEvkM1At09Uyq4hujuRj8S69Vdz3vrovF2Tb3rXOSXglJqip9d/pPOM4UwYG7lMeSR1owa9iA4rluknW2/ieMEs+iCU3E51rGwA/M13XN+/eg7O8J67wG6mPzwwwdENuUpe+dEeFERn7wAWshQMGxBLIOIYlUcKpBMUUn9QbDs41klI4m3/FKaQXmxosS0lK1oSk/S+AtYJ5DLVH5Jdu3xt6cf433XkmDh85DwX8j3REQoTUNyeXULd+ZrUWxt7ftAukwXQ0rVSKwPxWn2Xi7dJXP1DjXeGUeoWBOEv2itM9KdXbzKso+gku4hJ8zkd9mQ//HLxQINIaqmUDjjNl0pKb15r+ePVemWM3o68OycOsId9UXw==';const _IH='a6c38d0e428e26de8a6a734f27bcb9f90a46ff51937886377161a241d05d3fa1';let _src;

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
