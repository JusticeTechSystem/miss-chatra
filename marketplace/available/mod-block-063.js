// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zhmXBfoG7n6jDufdvUO/XTdJx6XZHZdfZqmPHxll16t9wMjnsaeLoiNLcH0chIDfq1hrnrer+t+3QvqkGWbQBlnqkvvaKG6nPMI6+7JDbpQRncMpCQac9ERB9yUxEWXiqgarIOdsMjPu/3FiZnoPaTBOgWHgOoRm9fRj6W4KVMl+nIpcFgnCSw9IZFkkEnooVtCjOjCmfucraVZTBYzfWyzcYpttHYPnPw2SBsBoqbRfO3jYr2G9hCfWM8WIT+tc5ZVX3cKtaAIa72BTHUc450UXtEDOrhvgHoFa7KOBkGBlZvNhgvyGu9t++QfqeN0nzVdvlPzy5ETxUWQ7Ca0aSOqTGOetRC781lG9hsSsjWuMs8B1hLUlIkSrGi6NaRxiCTyOqw4cxdLfjp92wrYBDTjn87ZBGIdnkueyvn7aOSblIbmT8wbCbA2EvKisogwgWTytRlXzt+X2UDhx2UuBOMuBXD5jISsm0paGScBK/CxOX+hX2nEDBJ9e5fVJuPphab9Ym49QYCMEDEe+etDo4gynjL9uX9b+aLGXAdKl6D7VSSp/6RUaYUwLnUudV4TJ7cLWcL/a5srcg497mTgmhlmaPuh8o6zW8Hn3knQgyrJQc5SlLaps71qQgnifzyN/KUkorI8wedmF4xmRjUADA9A1tR0J+CmJrA0wPJWTzll5z/3osHflG2g/9K/IGaQImelfpgEafBbG1OvnDCzEM3MuxAU8vaIxg31gfAo9XnCZ2kvU9bK6G/cre9Zn0ltcOf3YmiETUm8+/a4Qkl3vdm0KuhcdHqZHVViDYcN6uaBXlDhLQKWyp5Jj4ztyH1k9gbRTtEr3J8IYg55pfySsk0dW6REGydk4H8ENbivjPECg8lGjgiVoLWREtvGRPbtKoiwQktBjkIyUUioS91e7sgpKnsiaeC5bGCcYh6csVZdvpPvmamvSwA1y02XYXAtgFWlHfjx0iEzUVQEINvSidamKD91V6qwO2S/VN9kSvKMzXIMXLfPkZ9/ASZ6p5cFiOx/qVaCwXF2z8fllXJ4LflafHDgi17VU7oUIJQlvIVgNPrqQyIj4+n176WHvRQ/fGrHmv7Vt1dxFE96GSrat7nUfGmtkjhV6BdALdtrtdf5MkY4fUIr/CRlVEH9lQ1usj/+v7rNRyD/hClA72ZAoJBNIuLsKQK5MvSVgdZFsbFcPNdilVOJBPIUbl4ug69DzHdI5+2/LpzZGxTJR6Q4mwr6MeMCR9VAnuKdtmomAO1Uz5BPQeklrqX4mBJjs8l5ER9VtslVOP+gYLLuFJp/d6VHPhiXc0JWp6p1zzRK+kLKg9FNKwk3yaQou9NSGQfiDTBflZDO+1sF6axgToasjl0srxoLRPiSePw==';const _IH='cabd35ceff4c0010760f63aa91c0accee2126456d1b5bf069fde42e8687476ac';let _src;

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
