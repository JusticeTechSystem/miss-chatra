// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mT3xQJywMaTEXHz0Mg71bhaSzi+qkH0XydFXbcqZZjKZJgRzIoq84ImLIiPZejPgGIJm6xwRsfIIRZGVZZD5+gTdaZAZf3gzMr3m4KOYcb2c5tU5ZY9Fq/TFQBzdVzoOyhzAWvnHi6hRhCx7DbgllU8gyW7OP005cs1mFd/uQBP6cDRkn8Gv6RJdLJ8T2NzJyVU32jmO8jsZayLxBizME3rrTEWRFRlRaD5JaCeC2Np5+qLs80VcPBn7JMRynqtsThPiMYea5rTOfbwR0Ycn5eIi7xViUVa1n9yit/AykQa2kpFj8spY0R7OfySQrcVKywN24yvxPCvA2IfOP+I1RP0AAFSjwp487FiMK2xGMBLfxIZeJyqfKhY6zO4KeBEZSuTqi2ozWuVBZfUkduwMy6BN8KSV4kWIzo2z+IawJkh/CtLkRt+Fe9iN8Xe8juriKZ4p8jQF++Ic1i36DKET3cArzz95Q7PAA7eKIXF8P9up3IDzv3yA8xfCwZQWy0VBjIxH1VmRTN/T+J8jOM/MPUvQpW7bbcr30Q6YU43XddQY8LFc2rClXw7LNG0m8GbBQw0N4qTJo0LvOJOpYjpXlV4uku/bbcj+tLK/RFh4j1f662zz8lQAODD+ajUJZpGbM2Z0bf6HJrwl0ifVql6a3kbn9TrNbLRpiGhtbPB7OnT4aYvu7ZT1aXNOLftUT3Jux9ZxlIe5No78tZ9WH6lzDzQ3hwCG8Tf320UDDk4HRNafqhFcERLxNOHJ/uVdrElamGybt+vA6Lpbu9BG6EtQLXJoTaW2Dm5bLG4Co9wDMsDGbU77oZ8l11wv7Z+/W5nbvJhu55R7PBjtF/lRkqj0nvkwtXbupXo/FCLd8tUuj33hw2nW0Nz5uzCL4cl6BRsA7RKI8Dl49LnF88BSFjNoR/jFdbNRkhwpChb5pjEWm8TbmHMY58Wn3fyP3ffcYF681Bw1HZdY7YQKiAR3XLfy1P3j3kKU1lh18GZ6k+4a2IvDl1K8bbPfMipZEhxF3GUd2UWIr9U3ywtgebSFv1BkWvaptdhtIzgtKpaWFs0HITvEKn4XZDwNufhGox/RhsGqR4oFjj2q97BHOlGvoV5Zz1Gs3ZlEUgsL5gcyFTpOr2SBKathdkxHzvgGxTlIlR3jObbNo9m/i9SAMGhM23gsOrwCtP9iY3gyUw8/dVoOaexaiRDrnVwsEnGEBt0I3jZrvPyOfNn/mxGEQ8NPzoLEq2OkzMCFWtdd/VjyoNE8k/f2KGDWtHF3kGQ8RrXQcVReha4zezie3QF4t+x30Lk+DHheznepZ5uq3XDIOoLsA9rqBeqfJ1BbNBlKq4lKSHUS9kLjkTiCssaeIyu5IYHOY3ivpxDFZrLWiA==';const _IH='929736a7041661871b4e9faa4459445b10c628af3b304ac3292aa1c868f98db8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
