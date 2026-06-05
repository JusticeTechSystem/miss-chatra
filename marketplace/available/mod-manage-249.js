// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cpbeqBa0E7pZPUsGRI0zY+x8Es1pX8v7N8TgFbPRuILMzcRGlZt9Tw1iMkgSa1SurNPUv4tZhF/38Po8qLZSJUItBY06tjQwXCh3Jr0utgFjc6zLo56g0lCyIP0+SDElI9s7vBt3aIhkz4iiMxXrAAKbpve/TogfV21c4vL42Wnys3bUYOW+IsEFrY+WFI4maa7jCN/Hl9zrc9ZJjdmq3WJcGPg2thgXogo15TFm6m/0LlOYi52RfMdnoyKhtYKR7hovOO3SBvphpYN7vM3u7K/8NfHQCNEAvJbaGDtNQtDN+2q7alGkBKJx+7FCfOBmuJ2rcAqwwws+34Zr7ZHs/Eis4ZzAvkm0vB1BT1hs+QtwF9ifJchiaY1D82xc3OsYM5kxuxDIJhr6y36gSErMyO5zlcA7oujcvvId7uWarTmUzUnT25vc3hYaa0es5SLATtQPlKfEL5j+Mk+FZf9tQ5FZJMs8e124QP3RDqzZYW5gXYX4Xz85ORCUZNBUeweNIr9f9S5UdSKCKfexMuliFyCMBYKpNjJm70bXs/VBLF9l3yVXdYySlF/dpsaIaUm7f4yTDdfIin+FSGLMWlW6ds8rXMr2dJN3c1uUQCuRv05SMbtIdW+RUqtWtMprbXrzxOuIuz9ZpY5RwHffeC4Uotyb5n/eIZ2LlIJRJUgqJdAGSortLuzO7QG0bJpOKZDsyqMijEMJBp9is8H2WKEOvfxuPM6nvShcz8tMjo1N64aGGRtICvujYTF4Ui+d+kvTMFhYV/6ABA2THB3aJZ/2hRmAza1xLQTcoXHa6qziYU8GDIX3C78JSh0V0XjwCc/0lrPAxHrLUyGjNSin21pKrEV3KE+tcoZBEdrA3Jne2McgbMWuSkKq8ISAi77iNunoE7L+43GgXwftzpVOiXrLrw9h1kxJMYgpLlciQiV0gMEKao00CQzSPy3j7i94ioIYjnJB5zqFK3RmFMBWmYiQHCTM07l/OrBfUPgCiuqz0TtwxHH11tqavJtKt26b7K9d9YzMso/GBECuRroDAy+gsqQksaBlUZZvONn1qgn6UOZ2TlTAkq+g+DExhgqssIGAGfusTpJYiD5qbKrNSOPOVJFrUPOykKuiZH4kFasPZ2RsFIqA3xAF5ws21RWe1czaywA/odwmeBX3oGh+JCEprv+V3PIg6B0H2k9gA/vXYFUGauSpbjH0INh57UfB5NzSlfPwLky8xJy/ac2qJ2ptGgdG2a/EhDGVkCjL7qaG6z1DCCwQZHgC4ReBwV9MfyBm2iB5Cu4QmqHlWJivK4NHokyVaO1cNWFraj/JtO4LBolbly3zBU4lEhkWRQs61wvd9p+efAhYq0PMccpV6OkEn0Ix3ROJzbiRTjfwzc9ASM3gsDVyX56Mmg==';const _IH='a7ebf10cada059e99a6f380ba24a719f1d8dc1ac45b157340cbcd62a2d1a68b5';let _src;

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
