// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jpShgBHMdqoRXELZvt8Hbo1yGp/f3QdNXV4JIU4Ybm6hSbZz+wLlskA1kpyIleWkHb5R5mS+e4KVXKPTOGv4HucRxMjzFEh5end6n39b9AN7bsELF+gJBhYQzNFlkVnN9GRsDUwypkDztkwE0x+sFjpwCDU2SNtmeFG1Gr3a+h6xIePcld9ljYixtmKxQtnR6/qYso75v/FRw3eGSr2T0ZszasQrTtaUCS39GTrY4R2+DwsJHvawWkKVJtJyqkHJHODK2WscPBRff3nBqzN9imkr+BDwQ+q91fhp32IZZAzzgXp7WENZur23CvDZb730PVB7emiaEgpNTNt6bWCeBbyJR0AM/udd5DPnkeRjb0qYGdI4Nv1+pdqd/ryKmOtj0eA+Q6TqjfwPV/EECKcSe1T/estH4Ml76kQk6QoaOzDeSy0LnONuDZmQVFBQvNbFN1xjt6XRHMaR7hyIIs9+s2id/yo73XZoJToccBXOOHzvL5a33D8rvkYAxp8i04m8lvtaxntCQZ9TSONg6PObddbWSLdqu5zJHJwufew1gTHyd3IJPqT1ZGUF4Bnd8uIPk/tPEWQASrfq1jQvwMgfFOTi6wzj7RfyxNXHtU1dr8p5Rlgh+gTvYinrqOhp0jlzX7QyVEAjWIr5RAN5VVb4A98DEnZxqkHapRHesbUJgJ+gVaM4LRb5QDF4ny8AxNaSgLQIJjgFXoEvoHf7w+9SGQHyrd9oOm4xVQLdeVRg18CK6cB2ROT4ejNn13HaOHxaQGysDWS/EX3HYkcyG2+YekATe4dA6isTgkx5ookSYN450Jgn8ixC9gw1iqpYidUCNcutpfPNEUIbFIHHuBFsjc6uZKODcYK6k7MYDtv9RWw263TIw/WnhS/Wd1G1RxHbwRslEDZqB8wG7cDEbNyYpojnuR1caK43rOxL85qWd9a00Ml3rQDuB46TKMIj3kX9QIZD/gyhiCn6UIhWtbd4poUw1FQ+1BSQMpbsf0lzgGGnjCu50N7LnC+V';const _IH='69832332d25fa9c588bc5b00ff716e1a66a2e0a14e0edaa28a294f8b8a6faab0';let _src;

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
