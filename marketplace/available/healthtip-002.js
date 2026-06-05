// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z4vhlNH5UseGjysPwyrgP6hF7k+g84/5u0stw+2LvjEUQwi3Fe3zfqxffHG2dOfJb61KqsizKRGsZQwKcU+c7J/hzdWI/CdM7bUIYf3HJlOvF2fs4so9qkpTW5tkBvxmZSILHNodSvY16z2uF7myOpFMK+uSrHK1SydJHyIoCvjI5gZvn7wjz0lJ2fkLeFwA83fVRrAEeIB8jU3H9+gDEk2jVAZG3XWZ6HTSi3QT11HURqUfHJ9QoBFaRfGmmeXUNYTXSoMUbzxQLXzjSo3vrzayk1LnF/t9fBWRKEwyR7SjBeY3xNRLbQupSrdqv6nat/8gPmWfC4BpA25oPSm85pTesml9VjkMljQx2NRhNrD1WFAA4A0AuFxqxuqBEFAj8pqbi3nBF+KBQWLJuHDFMFaVFwBl1M43VeN8vaTfFp+55pklHvnRxE2U0nlOJMu7DCL2wEYZtCWUaDePf5Utp8nK7YzhJKT7ZUDd4N15nucTtfIheIX+MbdGz5cO/Qocq4wLxsVz7ELFocmcUb97JxwQXIEX+HyFgVpbiEb15xQTjE80aBJG4crj1gLNeVF0Bsn+vredyXOcYxzd+57szQowUfchHy5wZbMkAhinQTSr9zp6zWMk+nYwSeaxl/hV/Spi6/Nj4Chg76LXz27i51J1iLHQiYtOyADEIE/4wrRiJ86nFoKe16zWfLJrrq8fP74ER+3yqpRH7qZBkJBHFVaEYpxDfzbQERglF3xJc8lyhjhGmJNYSEqMTHkmDAv2o9ctKH40Z+/E9uYB476DWVIy6FLANjitZbLlnhSKTNfEB9WHDZnfENMo+fXWZ1WXl492yAxWA3MuxeHtpd6nBAgyFe5t9r0Zsdw0TQoL9bhPITdjAWKKqXWfEhWADGVN0ccWxTIOyoMijr1m/Ao8obekb0mRqZS702CXEc1UDCL/ewQgcF5EQQ==';const _IH='6c0dd93384579f9c56e4de8a4d36bb3c1aab13963d72fdfe55482df91e044e92';let _src;

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
