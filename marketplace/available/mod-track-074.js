// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v6e7r1yllREOvlicvhChYZrkCvS0seAkf89kSmDnm05mdQUkNwVLsC/MJWx1eb20fauGBOkawQhdfSVlHGzx7W0qVGbrXk8iiJ7ItL/1FbBNbE2TmmwD/o0c+9lhFWqtKGzSMR+SpPOARPxHfGUNJA9ueB2QZ3xCDla+gpcsolceRkaVYrAUtkaQDfDwt9muA+ABK1iUB/lbuoYZkFS+JllGzNkANhLH6c4j8eR/mT21p3VLizANtmIp3GbRskUBrojMHC2a+ngMuePz6gpLRkIBW/+9iegerPURMIwLyZCt7yfTa891Wn9sN+cEP1E64aFhYWp34l4SRvIdtOstqSMRy01Kr0SWGIMHNOm4QR/OlaHASSncFFJlnPn4/mwOE9cJDFXTEVbuwJN678KT5IHuArxXhXfTp5fbrPWEi6/sr8lKrcRxMfgU7msbtctykxN3Mvv/Fu9s6NzovIKq0fio2jpBR9YJxsKm9OAml9AUga7FI0+tVe4aO2rQD/gJM6aTPxQHJ4Wn0xfSqq/RBbAry9EViXTJiBYZpsS6CSkjHgpJlxDzG2iz7uXArfNyPoqFfiufldBFt298xFKL3ox3ttasizVtIpcLRXrcOp8Swi2qrnlKq9wehhhcVdwAOt7FLDEpfB3/4k3ggb35xUcheFKjPQS0XQylNmwInOb7cwPrUoGvL7aRYc+CSsNK/b6LCO/C/DN5p56qDMeJpOt3hCuSXl1UbOagtkeC9hmerB3B3IiXh/1fIEsOPOe8zrAsyC1gFlDnw/UJw7/UUZU3Co75hTnwpKpsrtCZTbfWOxEpY66bm4pyatYof8Sn2LVOAyoDHgN5k0iK9TEBvwmZlQxbaehVOJr+OYUjXSwSL9c+WEmF7rdd/EZMXhQgzkKIImwSfW9x4T2to6CW8Zzu/3I8Lof6OsL8oYDYlEKWWJ3ERNOrSw3dTW7iPno/NAMjt7pkXPSGZaXq2/9Kz4/+MbHUQ/evyeptDBdXdr9+niRRi0V5D3jj5aoSYDR1xNP4srRcAMLhijwhYbUMF6YpPyuA+2jDisbGSRqy5HuNxSpUvaCXcUBPaOC+aU2G+sQIQwb6fUUCD3nKfpiRs3TxKU97nh4+pjbxiasIMsYviHuYajh+KB35xBurL0gomiI1mm1E47Ekr5S4jE1Vd2wUIwF7Hd4wGKN3KfL35M84w20yl21pBt1ywdz+Xuk2S9ArfZhgJkBs/i0vIUNWmZLQxPH0EN+vcrGj5iHXPE8dRhpuCTpL0Hqjq8TJevrhDjqFwLLmYiIhOz9lymm+r38ZLXho7P4HTqP6vI7w4IhoLpwWXM/gz8FwugrAnWKSwpyutwd4pQgtalYM9QIySiTbhoBZyO67DA==';const _IH='6f26fcfa124117163bebf0a74b4d3bab88de536b2754f51fef24659a308102d2';let _src;

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
