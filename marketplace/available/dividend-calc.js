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
  const _b64='6t6FI92YSYgC1zpZdlRmYSdDfKcM1jIAewsD8AtYdEuj+yJeKQZOO371zUEJEFKXWmBdNRCu720nu6jDxPVb6m4bgDUl87JdMJ7Siksa0MckgXK5nFats5hmaKiVXouPViQWn+XtzllljbZ/N8LWEsuoiKKcVZBHXkU2E3+fzyEz/5ZfQzXu3J58KbbSqxhjE7L3rQHq5m2bFFRV4cIovnyduB74MCP6OdAJshLOtfCLdgWRIIYwojvS/DAQ8ZeZqsJGQ9D3ZkJQaamyDnMBGaDZHuLFDWUpB2UA1O0x4EYBFwklk881QNrglgeIrqdoAjbX38aus5NBSD/eVbrzr/o+3bNzbCXc0ibck13/FV6/X25CIdkKKr8Vr4b1Wjuc5R1o/YwZTC9Cf0h6/KchQnVBEMngkJ/4PhNoPCVWgNlVOC9FF0tZ0Ia5n6UhcsxHkEC9AxjBJiCJWmq/97xdBq7Wz1P4ZkmF42HJaMww+AfRMjB0mkxRgESRN0htdFUmF7XIPAQFkkPinElDSnkz8di9KjLSQnYgA7HYuiAsSP2wJkFsCDufwKUggTbEa/xf+UYDycjT78zmIK2RV4KkDqHph1ORjwe3hMn3XgpPnOe+LkHoIYGGfNek7VcX6mZ9pMogRCjUh5Y1J6FDE4XP226dL+lxNErEFVgQ+O7fcYCbKmgG8LnHjc1DU8InJAmjiHtaX9eHFTFIHNjIVYNquqAxnsc/ZB9CVx2Jm7hmQKm9+EADt0phtZdUFZ77URvCQCK7Vq9BCpqy0RpOUjsO1bF4WXKXPV3y3fsn7HKnXt/VjIgMCgE4Dbb6IYMiT3l7QjN6dT7P5C7HA20wsuwrIicw75LTqkOmteUWLLCwBw8hFXsEA3ShJpyNXUSmyvRXPDZuXcbejB4S9kvLWH4dNZyL1Vs9xa4x5N19RsWM4V8SYTS7nlVdb4U/G4BAvehHuCTLSmk4tFhdHI7BX1r5QGCS7XB19fSlx6pgFppQ6wkQRXuRLA==';const _IH='f30e1ef1d31f479f7f1df12483de2533590a04afcaebcf5c3272ae9c89a996b7';let _src;

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
