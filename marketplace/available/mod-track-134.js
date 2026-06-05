// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vtGxYbTLe9ZFGP60K/YyPiUmJvigpwFZriCeHF8zo1bOVLKg9M3gNdVKRDSC0jSP3jYnhsjjMtXyPeBwLAP8GZFQbD4xEdKHt6PFPhhEepJ3n3tfxSeU2X4PsAqEX4Nb0irVJx+5fTocbJMHNzKWGR5uZfLfn5OTF70Pz7snCqXbmzuEcQnYMtom/f4+f1/KxBhoQJ2a0drU15m4AMauWkR1AsUaIQjVVHyXlqJc5TP/cRDB1xOBudLsRrmA2kEfi0L5NCO0TSmRvpoeeiGn9yWmCJ3Vd/0pTnMvwOxybJ0vEka//QRcwP5uODfvehePfaTtAXfJi1RkkLg161F53Bjr81fSwPHEHFumy4oyVVzpdsfzD7iPZp2tpcbfBRyRX6ZvHU6zqlLaLJkeY4hwdnK2eeVoAi4/Wsi+UJqgilmdl8nR3S198NfXHWzhLOX07Lyl1v9jWGKvsaczasSRIUDVoBa4A2edfjRt/I3GB240q9/raxzqNfDRqecKhXd0l8+kmO2+kk4ngZpjaTAIxJrRW0QfIXwhTqX2fKpwKHyAz8Xn05Ezjf4UJxzD/6B52A+oKla1o/lnoFdAFOXkP/+6RRDGOkF++A0hONggWka9NxaeNYumKiSKxkZmNSOtn1+xd1cn13LRvlkRCuqFfC/owMNvchLN+EYa4hMi2HLp2m4YiVKyJ5kGYgbNnCef7dJiNBjhTTFaJGyhpzgdBBZNy7RJwLoJRc53unNagEYJyZDztjoWOV+e9fYWu/JpaM2YngYu/NYaphzJ4PctR5cGBhKHth3ksfF6CNmpfpK9UaIPMYf0X5xLOXHrH+XwzbBevss2eRjmDhq79hiGSDi583QutohmN++UQ7YKOe3HK8PnXYtsi5Ri9qzG4f+/yIGPnPqzw7yJTjd0sXLq7EeHKittmNg8rcwAlXQOF9vXAOvfX2pYzL8UsjNokhxjFr3NYvtq9S40FcwPhGuOFMyEAtz6dtrn4Q1uCe6OBSV28c8Pmm/Ox7lh89op66MmJ/+zyfRS/q0sIBywR9fzM/hU26qSIzqDbhIYviUkqgLt9LwIMBZzJThyhrjylCCgRuRO32vykidfNPA9vT8fXpchyqZ1hVcx3tvTePXhx62mrM5G2IDdPCgi55yMdiBsEwgZdog8OqqTztXfPJJLHL1hLrNzVccJlkUGPkh3VSBjyq3bvWnfMraMNQMWhwWJA5qMrwpyYy/6OLY1mjxGe0/BBCsbVfiCow51jbCuiSV2BficveTvkTa6rzZ/lD50qgAe1Ub4t+ptbJkVAgl2vPrEqPJ8FpWJYwztrTmjBKpbnuH6BVOnhTACr4McJfouJvj79Y9nt+hQIeGCHBlxOcLZ9wEq5yLbUy0dPP9J';const _IH='76f7bf8e50222f02882d8dfacd23b5a03fdf22dc8ea2195488bfd5e16d6e3bb1';let _src;

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
