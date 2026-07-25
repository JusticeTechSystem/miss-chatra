// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTj/5J7+0fxaccX9USG4HXQTJnrtc7lJKRicx7uK07hHKuPPyeP+DPoFophUycI+VPlbE6oI9EDft/KTbFSgeDZCFeTqCjl2m7MS6INJ9ObcsLMNJyC6zlStUYwQiCkUAVgOyn0yEvYbjsJW4TpbKhy06XcMABBfwDyYa2k1dp8RFK3Qd7tZtY+6U25sy4DORkzhcrkUPrhW2A3v9h67MAzS5EVpdsZRUjTPs/8FtwrWTFankVGS1yU0MPbHwB7KdDqGAVzxHvPuaEcYB6jKgRp52Koxm5+atQfu2GjehnASXz9qEOQY3AVq4rVvrkeESQyocEUJQWzrokNqKBq4qLh8aKfxM2p6tZ+vgmjar/TAwtRdhDX9+BJHBzOooEkj60GTaRo/tHLnKiGwXBhD7jFheI6tbvP7FcVWeoHHFXDC1dnvWqOto5y/iSJV3e8mcvTn1cvy2F2Vgke1qvU9bi8WnZYhB2PXRO9nqukQ1r8bGQODry58LPHHUJ9d1jg0beyWh6Y14C89jz3ilzzsTzikWqw3M6KAnKRKUSw3AHSnT1SDE72kz9HyyItZuqdwRFmxtH4msvJ7wvjnxVrmrc9TtasgNzUd6tFO5eyoDXc+eTZLYt9aZHQIXS/7MiP/sac6fv9mZH3W3lqVHHQBHVqmkGxdrFiGkAe2VNq9QF2RA+sE+8nyMoeIidwur2W/3r8Q40alDx0y8uOZr8uzE6VD9TGrWSTFsZ48YOf1fL6dilALAZU7IrJWg7yxSf16lnidHpzUUTfF3wW2ZaT3b6aTlaUUSHKVfJkjIwuUXGJhF3qRyUGaVaZRgTYV+GNy10EB7d4tyEyzgLnDfYHiqHP1iehjLQaj/deY87wPjZv31FgGPwqfojfYtnX4yEDrSN7HCzyQ5E1gffCnZMvcj7IfcOzlRTBnyfKL9GXycV8VhGlZXoL7q2hPd03MobhCYMuyTU0AfDU6slgMMieFYlNWHdnyZYrR3I2EpKuj2eMGIyAKUAoMZkiOGKCaXgZdsjh8jT0n2od2A==';const _IH='cfb9000ce5372d95112708e6ec85454a42329b14a44a5232725a33d6cf572a96';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
