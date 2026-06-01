// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ46pVYIgIP/LC1TK7FxW72IdFCSzL2QK0eo6SUbtXfiVbtVQCE2IZMGQAknpg8wwTIFYOHVgqWslNgEttDWra/Wn4++gZBd1CUjWBztD0XM3pHodJkh1kZFcmDk0U/OGaeBgymzjUHHMFlkt7YUftH+5aiPMNPQwlIjoMx1V1v5Sqbr98/I/FXTU3pF7Kzgb5yc6/J3M3ErtB91vXBO7sVLKQqU8LN2GGyhp1UPjE19jvcLDgDluDnimU/kQbI45vBS9gGN3qlgI3k3Vfpm7K5Tuxx6Ew+y2v+TVNPAZTdybzU4JcMym5XMgS0bmth5l3l91jrkhMeusP+e/xVbgWvUdjkNSD6hXFI4wTWVYDdEIm87hbEgE67qZGHt5bHXeZ9jcAzPUZUZX1zX1OUCoLrFufb6GpaMwdXE32t5FJKOQZD7mx9/mO7Y5+JmYhON0CNeB3mpgRTMtV4KWiMvthJfJ1nlLNB9PjgZfqqt3+n6SFw8v0+wOUtlQJgjyEWTU0yQc5/0gIGsoY1i6j+nDhDKeQ/KLGZBbxbXcRfhV5lf5PXbaff+3LzByhtfuzCbcMBLImIsKiN0RKahCroutBCcrq+icaD8jxn5YOVWtvNfc4YTSiMBNQ2ajD6cpwLF5t5KAIbv/owDi1+M6zaibTeMaduJU99bMR9kxRzm8tIf7oG9BgQSVA/AcNT7KvFdMK6e22aBaf/eMjmO5VFKms/FI7fOxOsFrBL2sSauy5e5cJmDuI5D48NgEtuLz8ouLgFqXFlLpBvN8m6i/fBpmbzos4hn7Y2V9Bc+7A8ofJ3F1FMlziNGDx/cFYMePPRBRUlRMT1DhhWwPUZjBahiHtmQ0XqfRITtSYO8Dj1VgiEyVCzP0Q2g6F9+dTSpQkK86XiycqFrb2kKzgKnv/pmxkggImYgRtvSng+qgzbXdWQE3SyMnLBRmOwcp6f+iBmBWDviRHXW5M2oGBryEWfT1vHLgvyMIk49u+tSZF0cHMxHM8t1Nv+dT5TuXzqQ/dDPjznLnBFp1hojHM6MAdgRDJUpInbHNkP+75jlh7HjtsYsfvXroP8gPCC+nLtlb2tfe5/KCl5322Fg0Dmvyhu5ndFHP1mdPoizaeQA91KOOie1+SBvfpn6VDaQjDSmrWXmCCl+177698MSlwp1vUb7dlsA7d0TSAEPr0CjDBz4E0PxiDxmU+v8F6f+vuG7orCAJpm6ODD2k8Z5dABDzvSe9YmD4ZHYvloAVXMyWAiO/myTdRYZ3Vyfg9sNPOrqZAfRWyp03giBt3xBpVqWe3Ynj78xS7Pxl5QLuKbykcjjgdeQlUYJCXF0qOId2WsZsF45UiUYrI8mhkiDaLbbQnEfsG2aFkfh5WGxII9B5E9pRgfxdsPemCocP48tv/Ff8hPSwOSVZgbF+P58jVkddux1sexmAbXg8qAXxXhWBqC97UHwq8t9uyGNwzqRhZ7RKqj0E5u2bWHwMLXVilapkkKqidAiQHTKqnSaPAtMZOm3tkoreq30F0vr0QZV8EvWt2N7jNXk5q8jMt87VxnxcwNN1tG2U+KdiuDY2/z/Ce+giqPREAXmW0zO2HiYPKgn6Tg37PBMwwyyFpAVBDgSjxRoSwxS9wg==';const _IH='44bde885dff866e649de8e21972ebe3804efa40394d2eb5979ce1b52d98d2c94';let _src;

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
