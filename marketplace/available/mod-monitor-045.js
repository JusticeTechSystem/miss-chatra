// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dfnUVm0GHDGDjT4OOlSbrsDawvYR1auUxBB76ArBJ+mZE32xsG8s+BYfsief5r3QnlpS4fM/H9IvM4tyOxv8tyRr2ovJEyDqg9P3pvMKbhyIvnCSCs6R0uwa2F3VQ7NkIqsc24uaMVD6HTH88I5IGxeqbqHF6kipp/qafkintEDg5lGSIAu4lKPS181c7p0Exb+5AwoZKbC7YvR4IIDeP3bVgDQtm1BQOu1d0E6caNr0D0CuMq73RY2VYHAGZ23/1L0cGiBp4ONNkWFaossgfrXdNA9LBBoEQ6QEfK5WKVXO3kMImJlM04yqtFoztyj8m0fJoqL09kFS+2J5yKl+C/1cHZkUfmY0XrIsEl4tQD/0plcU/NMdmq7osI9EBoNNTHTDZtZknQXJz8iw7oJfUswSrBYaqoW+BGOf5Ye+a6Xbl2ftMf4/a1LKkIBXpUBsYePM0nv4fxtsPK9VIDatCPzk2tXLNgUOIMuAf8gzvpDCLRKj5ik/KNsRpeeMthmwGiPzFJE96yYQEd08iCZPdushMBcUzCLxtQxrgDppcB2T/dgqQvKCJPZThQ6RzIYLtXDby0RPhphTRXTnqn6Yt8ZRHu958FHHMNwINd+9DZelk/TdRqXqqqjBcI1aTyekhRyRmUUF/S81z7iZT6tpg5a0e96lQO2IUwcfcb/CmjxHvDaWhZxgFg4vlv3On72DzuHHVKWhTd2ujnIW3AyAo8JIjmMxew2AJaeVMAeKqJfq8tIplDuGfIlR9lWEAHjtYyLuUM/z3EZAxxrpzIO9QktvalPZEoz4rVVHk4B5WjFT1ag7RI45v/YgGQHrNEja4w4zo8wqk2liD1+9bipOE/CkWZoJ4/Z5FeviOEaBgiDrTHiV5udSnzHI95vJqrynA0en7upw4iQbasfIGVAyVzAVyt60WpYnbRkO9/VkN8siTEOCkFj/5LM2Rtdzpg4z8aVvNEDniUSFJitUmJGb7y+/kEu+AiO7WDFfzvO7oVLV1/53flzNx0+crBfbtFORe7fC/lVlrPMuTOSHoZSA0HFiDPnYO3wt/kxRXCp8dovbcVWQfqyOExhT22ZhuUWYhZ2O3qColOgUNosdnp0SWJIityMxchHBk3mJndJ193gdxAJYSyIwOMzp7fiDpmtiT47lmsTks4HuKoHaqajtFc3eiOouhV+RenVsQ705LN2D+Te2rP4kxKWZdpx6MSO4Povw5+Da9h2NpAQ7OGUbBnml0NZrO5xkM4tuAZi5+od/q8Vks9Fvye0Q3MX1Zt+JpF/yoiRJ+AmXdFbfNq8u06D+yrvKELJL0kWxd6vQPGHjGVYGWeUSP83Tr12g3JPwGEflpHGzhoGIbWTUMtnrT7EDPacIbcLq3b9uGSffjoufWzMlb77+B5LQCVLz';const _IH='8cb79a972683b2d6c6382a85be2c7cf068e892cf45e143ac0deb59e8ccc1916e';let _src;

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
