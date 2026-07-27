// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfK46j+XY7wiZztFiMHGWs5I/GSoVGyhd/XT30n3deFaaXypWwB6qhSBfRuFY2b1HnkRdZnnS5eui5/8ERjMTHCgSmdq3DiowW4AP5O0AgkL7l98WOkOASg64sRvDqUFEIkLLDcRRZOQvzuTzY3QPhmmpgnKhHrMEOk7UuVO2XoKcVG5NjcLaG9YlZFOaMU3H1lmf7ME3H5+i1INOiL49F9AqltRlcnwBOxrL+w4NgBCMhHXx+iOCHZGgYr6n+jFpUaJkpYigtxiv+18wGOPxTBL0PrsiFNzQe6mw1XH/kjeKsxG1dJ8QbwpaMiiAt5FTbAEWd5V2+g0Xkhx5DVFBqa1Nn17rekxEoGcR4LhbAjPlIpzSyPjYn0+nnevCZQsVJGYU8kVVcKxd4DNrVxDBCdCsLYg6L050T+CGmy/DCYxOpDKNizFQy3XljF7jXXyY58d27u+m37lzt6ZrJVhjRytyaoX40S5QuF0dWvTW4hNySXxwiMNR+w0j56FFPUtJNHSMa+vi8H4FAo9o81Jp+4PRGAdabev1TFk6ibpVMGYKGNrOVTMT9UxhiOx1Ri/7joHvm1Yb3a9+U7mB67Kahm5pDtqSKOkFt3+iSphscdw767MCFiWntt2oJ/Ykb3+rl8XOrAEGgTxMT/q9T8KXhTlgrnBHJr/sOstwFJlN1BGsEE0QmTPbwnFE6JhknwqlLIBcaTIJ8Go8hM572pSzPJLvJagErPjNXzvOQ1zj0v8MvRW3vg0sIFn9KVe9Pxu4mclTbubrukyCOlqUJQ1oRIiukHzI1ErAMmH1QNbNRmxPevXaOLg9mX3C4DO9037VlLa+gVmv9DAxX70ThQ+R8GXP8d7qaC97KeKAFUFoFjOq7mRsgEyuZYL/3i775rp3lBCz/6VgUZA3+7X+ayGIZieRuTSSnFPwyudgAjOl1usL32vSkn0gtKB0eBlT8kjX32cpK/3fOxtQcV1/3tzMVUQO4mBU9n+Dp2K/BMbpUGjcEpkvDht95xyUtR0+tRGiM2pMzwWZUdazgAYwwRc+laY5Wt1cIjQ6hOPBOrWXsH8GHU/qALZ+e5j7es7E9zs9YR6ADppDyvDpkiHBoas62ujAVBf9TR93TG8qS7xXaUA26cMnOitM0DjoxftkoKjV2zw85wAJ2jBF7nNAbSFxoXunCsGe9tnfufGyFHXYAGnd1+ymJPGZ8MaeHnyxRfxUXbCnZpiEoYmH8m4sHM7eQyLhdycz2fxDHKca1retZHsgdJqp/Dy8eiQDL+Am8rv6/9CFWXMQ5YvD3rcP4XoO1iZ0oQ+O7Ql8m5QC5IjYmq9xvQSXyg2bPpBCurfkjKOp4VkaEuIpJexIOB122Ew8jUKjMBFNPhuCETZ/uVO/mxC5zQg==';const _IH='f5757e9a56f4242bc52c76e1e7e1118ffceab318392f65ba33c3b20c8156a261';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
