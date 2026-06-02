// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CTnVa4kJ36mCPwsA0vWXP602yQ2VQZr3KlvYVK4RH6LXwjOuIRNLXGqfgZ1sXW3+jahQj66HfVOdV/bV/iAILZ2/zXO7fefGh2O5mf3AgKw1ppbf7eH2WFuiUd5umO2lmmxAT0QDbiTW7Cort9AkhiWnE+r82pZcRqO2vS2nwsMB5S4DxaGXQUyfQJ6bzP++wgCiLq6OfUrwUgVGI+bv9glxOAPLsAEyx2hcdfR7B7vdVadGzIotyeD4GyEQwaG5haadRUI+t/ozGM4VsYAGKm10sXVKNGAUdhaw7J4DjBj0GglVsC5DveLvSBeLdLHZPFLS0CZ4scnnIBb79CELOGlSXvTHfwQnk2ULuHuR1V2+vJwHfdcZh3q/QB/kQmh4+gRMmoOlnlSjMNwEIMD2vlgvKupg2svpreMlFrAi4B8z6vTowkMrq0YVGKG4e6w6kREp/KAUYz7Op8y2HfbvOXlA/O+S3bG8xxCn2gN/n6p7IEXPkLwUIc09gQLR0Xfv/Q7eEN05kh3atnwppjLnYh+StqrkfbqwQFE1JcSpr8x7H6jPO/dOZ9IAybpyPzxQpdMRe+nTQm0gih3fNJ90DcNslB7+z0LCaBS3bnL1VO3FGxqk0UKgMh72U0HDt7pGEOfRQBunsL2RR9DN9pxW5GKMo5BLYEejxhv9t3TwjXgdFcivmgoARHTocdWUoGOZLqGwZhsx3fb4VVdInXyr6vgE3TIkB1ueWcVXvx8uwtJZurSGJ+ZI1GTxQ1tYK+VfibpKOkvucRYjLGPFJmsOpoM9yVeitGXPST+UoLm6j3kM23hZToqHJWwV4HtrRX+3WnQvrK+EEE1//bbl6tvwceFIuYUKD3OQXJJdYkkbbA5bkyfGpkzyIZ3WJfffd7p8zWo1Vrt+whNQB9afLJ4C87J+bK7pI8NzXHOdCl7x2JpZWWCL0brrWofMWoBLDEbn9k47LRnWD9VYgNGGwajsR27eRdCpAVepWEoaQrhmh1o5hKDPwND7ilt8uumiokdgXmWN8jZzSIMoSBZY24gJyEHn+ceEdO+m1RDi+BclxxxlUZ/xrCmsc02b3BVjSwFBI4HHLv82Oci+/EO8mc62hZddr9xBfWfePKtqlPpRWSJvxA2Xsehl3+gPjHftpK4NePvOJmvEcpB6Jy62ayHpQZSZ75X4hO5ubyjRBBbgZEbVFozCyh0s8WVw7HQ0JTNqGi0dhx1eVjvfE9t/e3m7qinxZAkqaVNXNdCbUT+Z015OGUjOpuSeDI2IRpcYA9qb9lI77BS1/9ghMqXirMrhbI9RGlU/zMTu7VY3XIL7EBYEdIscP8SAun25anFxudcu';const _IH='758adafa885e6bb9a726273eadefa78f78cee8ad3701df1f3f40483c52a567f7';let _src;

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
