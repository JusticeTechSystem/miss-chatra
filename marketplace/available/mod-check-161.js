// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1U1UdYJE7NxSpy5J7t8TNxjs0t85rWJ5SxDb5T+L35jsnIEvkmv5UFE3IALskD1PhQO74gA2UIl5E5nkCXrS8eLbk5AEz3iQ0j97k+LPdmAl+Cex3juCt8gIku7S7rrJON4ruIsWGBb23uLUwCm3dCSQAvhWbxqjopWyWfiJkNUhyDBCTSK0f0BtdidNuAMmbUEPcS+c2R1FvehYN+M3Ca6VSo5sduAmPv6/GURwzogKInpP7NNlrfBIM0pM7Jb7utgbVpdABnXz1dh2z/g3J8dpcPQRqXhzL41S0LQ6Led9NRJ+O15llC8sGSf/IdvUJ4/v3gnkBRBYWjcZbZljK6MWV/fr9YMMwzjvhUQ8bT6L8bwM5gLjoVoFiUjXammGAuE+UzcbTcdv2GDt3Z91EHBbrVWEPbI4hzNkna75H98F+X9T53I0UYlPlhMytU0T0WbaMEe9A/dERQXfyi37SiG+Rs8frVCawj2494e5sFZKOE73mMcvbm8fG552mlTygfjNCY4/aKzuXEmM+ZvQ/ZtCkazQtym6vgMNzS7JzE8tb//OPgoIPfYW7dkM8mt4pnBwm0Nlr+tO6pht/G01hwTj0RS/trKn3IuYc9ZFyfkZyj2QmtwfzUAbW3Ek0CLVZ4tOtZZKEwTioots6mCTjPJ27aXTBnbZJVf47w1XVrhzFbTIysMn6xhvTRmFMKWAyU4w+NMqUsSIsj7i4kz/I2TfK3D6aT0s7jARvqkfbvW/bJxjbQPa/SndFKnDomD1DqX477n1P/CwJqEIbYc8LuGkdliqNIgippR8mTtSis1PX/C7MVPkfcDBc8Op7juEauzjvPCMwSJ1mR1H1pb9Xv8GyTYMSlW4rFsovAULUCaXNFrxmfFtf1LjsVWHYcluAP34G/aGfl2Yk09w24s4WBOJYxnaEtgiyk9E3snLpl8EvknskVku38gN8D7E5gXtJ1UxKTufuX5xavzVjo436HPioi1chqMITs7ezD9o0nnZnq0UA9p5I9+gEsIzv+bTtP3g1jCOkFuC+WVl3kd4+DKb5DT68XiWiAqcZjfIuLuv9wY7QOBKPO9A1Qq1gALeoKzsiIQMYposfARAjgM+FRBOKME0230F37VIuXBahRCv43RCAeVdg+uXILoGuxjZ2cpwmtL9B+NjUI3lPGX6O9vCrSNcs8nesIT1Bgyf4+76/hX8uWr7sLcHi7EEp5fkQWiwQFJ7b8G+ZvjZi0BMtI26HURTnY+I78pwrmkSBJe6QgvN5W8xsB0B/PeAL2f5xqz42LCvqRLnPgwj4urZisVnQ7gyZG7+OtmRB9EM1Fx0r+yKP4kfS2qPf/AvctvKU/Znh6KHzcDviDdreApbFW+1azRd+niDijvKnfuXw==';const _IH='5feb9b7e566129a3eb05ee1dc160cd3459d2a9851eba3f03fb4305365323511e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
