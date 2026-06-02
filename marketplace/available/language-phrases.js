// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hZrXJ0ASbjw8dwMEacTbRGQhCH4He9VNuU15Mvy3FAMtbypQecB8qOvJSH2mIK7aMAA8si4G1+/5ZVCOSUZsUVsdWlSlftcT30Z/M5761dlKc8+mXRL42nEWt7ip7fFIkTyeUwqOPT5fSslKda8/P90dbBk+NJSMhYf7vbqJLQEzsTVVsWakgn7gu9WRWr31mYDPLE7eAsA8s41Nsrv5KCc0sUizrGh3G9c08r6Pz+MlAHI1VmOA1oRpxPZxVMvP64nzwTE1eh6vhNOynYlmt16NJaCJ6Zl6oRY/E65oAWnlB/YYEHypZCgADZXDZX320xKqrW8A1ldOp3vEuB9E2N+Ewfzl697Eln4eik8SPtTP6YSBdMLJAz7ygX6gMHgsWjt/3aV2VI8LBoTFNSm6xA6iOy32Ccy9nWzPXBv1IpNaPNlHClFr+tk6M7jBwcVlnOFYX6Y3HmI6d+Wud6dj8WSvEV8DSOJP88IiOMpBBpTFtk2U+AhDPWbTERVUIMZNSX0ZyYCkIMK2FC9z4hhrY0tti42tF3e4qCMAzM1D719ngGKx6hsPTyp18mepJ8nA7M38EOOTyQ/mKXaGNPj7cFqFRL9/zh5QKJAbBJ7K/cCg4bELIJVUJ7s7xPFwd8JT0iyFUz/PapeV3bS6IgBmGVOI1gfRcouELSVK/Ox8n4IY35Qn1z40YcBFw07OAgMRyWAJIvkfkNrfqQ7dTBYo/A3yMeYpvdha8vLNmFQpP8Z26czjNugITVeJ0Shi5cDsUgLbJCNxzOLykXKaxokgEqKwpKlpt+S8f048F21MitY0i3YQuD6CwLFZWGSYQSAXSn/7BNtzZQ57xlV2cPt8NRgn6f6gfQEpgI03vFfIi9cBA+/JNh9f3s2OmA8ECoP+mJvKOwpd3DfMzD9t7vTHScs5F8Ah3IbEx/YiOyNGqrzJFRkhGx9HSmIUpoE4Vbex7A3jZMqaVmcdXtHBTUSlsu5F1RsuvmE3LONWmuA0G/VnbiymM2l8gH27sXY5xcQAv8E7i3ssuX67hI/Tl8+O1G0xbow1RyPi0Hvk1I+cGL2vgZGlcAjG3ao6GsKxQ2bjGHCXL7U5mR/xQmEjx+fnCJL3X3EcPAoq9yH7PiErTfrbTaNjRML5bdmgV3HIZk31Gpyq2fuV/oUYbBIdV8nY/TaY+PxyHlW52/lzH9Zd+4uEcubUPNo1BshVhDivAHnOGpu//rV/JPUecKd8IS5/w1hqlJjRQDoizLo3Gtkbb6gEICzuGBg44+tQJZYJejYDz/Athy5saXl6m8jvK6X7YSSvMBLYK1zVnqvbLB4xnKkTw+3Rn6S/K5dFWPG6AhBmepuI3VrsxbI9BnSj6+HGQ4CRde2YtDMkLk5huuVw6QTXbfj+toGNBkaUTfebva2Mdx6V+igoz37fI46VTUFNFAvaRz3kVEItDrfWSmMVqqysziDd7YIj2Q6wkzHn9es7uYgppua2WY+B8zF9IbISr7wI1gbpOshYn3AdG3LjG9DRNbkw1FkCa0YOpyok+Gqz3yeiiFwiMDMhU4pDrN3qg0Ykxexa61I412chJNBKtT1N7q6Yv7yeC/qeww2w1VejVC3rjq8CVekslHhi01THxwUppZIWhJ4RfOQegYFN';const _IH='0c8ec403ce1e6d1171ee8d98a66e99485156f8c2743a1acb67e333b6c26963fc';let _src;

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
