// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Azgj1e9IxvsDLRNyGH6FpeXYITt/oyKr1uiqFx3aZTx+Pku4WPLyWqOHmQczIyPLgH1Dv11EHH5gn2pS8aysrrV+XjpGIsZ+oe5+tZURnXB5qQoFztSPD7HiIByA/zH3LCeG+GWkptawDDj5ScgzuIjaXTfdJ4j93RzcZM1BhjL/iUZAXfoO8TPXt19bAg0xssP23QRu0IqWe0NBCCit2Jggw6kLLeBBW7TryLei36I3vUgmGVUPt8pJqJWa87p3IPLFSiSZLlssnC6jM93W+OCODEHA/5T0FcWJVL4/a81+0P0X+sC2upxETmwKy5wblo+e1ox8muyxl4yQ0hUxMJLtiLNmyAjCyUAXdlMXFF4aXXF5H7EZllXx66jskpGmjJIqSeARpifZdpY7a4wKvuZivXYOqGUSz+L0H2nmMtsOWbJODT8H8HNQhSBAR37pIahOAcNZ6ir3dyLI5fjRbQDVH7k5xSyb+JfSp5HYn4xj1z4XFM3mSfHj6wuiGINyAZ+WYmivVbYXJlBLwys4raIa1eWhffEHRkbfZ00QskM/hYPBk58AvYBSjGnHVate7m+WJ4n4vRCCUbUTEF/wz1wYK2yVQp8bsyhnLIX5C07CybVkCmscT4D3BPNckqr4ln8wnnPfxiB2LbSul1olzT0I88dH8ZcHLDwsZJEYWCBkBjpzrbSPAjPQr3ww2UFjczOlm+keMSvcw8SA7nWB7xrBfXCqGCOHCTiUBVddk0eTT4raURDC3Urdn5+sQ1Im6BtbQZZeG0+LjuH6yQPPvjiOpF7hE/k5pQOCHhFXoV70zla+NUij5CRcpz+Ywkaqou02HyutUS3jZ0IG/SQvzplNGCqhMtC5KATDqa07hqbA1YkPosSSzZHFOTJQbuRlAlrI2gteMFCm+0ZV3qWwdCGOmrqkJP4ObHHoTJCcBZVsdfz3hIcgYU6D8AOGIsDneXaZtpDYvOpIYtLL5GDzqVlXptBNoqmhzbDc/AnZ826L8G1JfxY2SKVPBysT/VDwpPJcsr64GL/RGvd1ViffVTz/dUuUGy77+TMdj+5p9pP36uGL+FaZrYDPLOthetVnaunJuILLDboByk+bUgj9HNOYCLlvUz2L6GtXFODPjrR455KAmS6k7apwgeSBiVjpHFn9VhHePQYKhrH6zovw2tauNbSB1UNmohPc+vyHiTHdX65OtZbEBA0xFn/Kei8arbU7CqVs99+uUjDU9kscKo77iD/pIR+21ECrxIfjVXs2H8+CHZp6BkCe1j6nkdgVlsFvqB9HtPu4vTBdT4BjJ4AZToe3lEf4SIF8YOeAZFivak7ugILumNvxZCF6RzwC';const _IH='73f68a6be5ce0d8a777472ac125270a66cfb1e6e4582a27fc4229e1393a75020';let _src;

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
