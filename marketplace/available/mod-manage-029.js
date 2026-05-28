// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JXgAVOPbdZfH86GgPKHdq+G9bEDxBWA9Rn7xHWtp9dU+aSq2zCMO9I9b22fOKYPv51ki2KX9pF50FJXTDMG0U1QfXdZahiJHT5zcp1iv76rjr/dmxVaG6p5APyRuko6NKXgTPort/1tv70DBfXKL8S+x16Bb/BOGRxdjBzQjDYlnbSquvDWpNrdavA+kRKf5fCH2u8FQu67c0V8X63YC/ELfj7Ygq8ZE7gK4OSK2d49siked2fKvbNz+5I2iGQWxlkUEU6f9IffeyCrQzMnEXwSax1GGNguzdBFUkKzYrIT2A25r2URM9OD7dnCvj2fZWCUpHD8ReTy7veiYwKwwO4kL/3pjzy2ojplkg5RuYeOe4O8RG9umxec3GtpE4SR9wrxv2rDDnYP6Wq+oOptyFjMRnybaiIrGdNmHC+sHMbuWFCAGe/kLHe3qjj75kT0A6dZ8AGoSJl4UknyMWvR4DPYe6hJ+vHCrzDMqzT/7jNZ7nRu6wEDFhzjoOnPNLEuOEDh/l3AZjnsgRVYI5koiK0V0CulBSWD4zSzw5aP7cSE2YdUnbOWltk87vyJ50VQ2Mejv/UN1quhUkgGsvJVLZxqHThsVwkvkkMyUF6RdUAoT8ox76BjALR6C7HhFIPqbXmgZWbMZcrie+QO0YzQkiL3W5wZVdF+PjaT8C7nLkllqaY0RjywWavyvuwfSeRtKHgZbVLOt6GmKMZ9jI3Wz+FsmtwNkzekXQy88NviU8Pl678HdZvhfuPyFCcX73PBgd3EG5maAKabF2iFLkr4vz2sywroFNzgRJw6Hvy4rEuq4RLzEVrrG1PgL5ZMEKJC3OKKTjvh0d+1aMFHNkBic1T4jQ1lIYyZGQBgXV7Iwja45PynH9/3HDiNrPN0AO6ssYqzNOPtcfdC3SQNb8Ywo1CmZY4dZyx23z2B+QuCf2R2l1prj6M68j7hmri2H709giKqsngVFIdbfUAcZyME4QIENgt/tQ0ejvVdJ/H7MTGDYWkREtLxdrWVgjENO/GNsH8MsPFIOxTNtxJ88tMmzEsQYA6oivEDDhmpkc3oPCvY0I7tfNQaQNWKD8/5/5jikOf7SHhblf3obH9pSBHP8tQFaJD+aGMOOi9dnNLR9N13dGPOilr2L6OKEtX61ry0JIyexxDbD6BIATCrVdkNn/XZIU57GZ8N1JqYW7MzZa3dSJCqso3DglD8Zzo7qvORnzUdvWimv47Xesmu5P4sCMdR0B+5MlhGdOJqIMicR3sjuFmCch3MzJnvSjSwSZXcrEzgE3vxdtHEc9U4ueHif750cHU8IWRVmds+/PQn/sb1zN9NoPehT/H766A8pp+/qAZ5XKu+K5Du5XGpdJjyhnMRTtACXOpmu0sZ5Ew9FFRFpQ38=';const _IH='646392b6903f5484e553e4bd4aa49d3d6882c61141528a89ad5f4956bb5d98d2';let _src;

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
