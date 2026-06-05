// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/myqFwRxYa9zD6TEEmQgGK+MrUoNzZhC/8SCQDchUI9wX0UxHb3eTRQsINlNbXK5Fb4DZUYCAYbaXsqnGZPrL2yzQqs9xzTX4HK1vshDWNB6GADTr4KVqePewNnrC71trTBzGSz+YUjVhMhEq+9agF5sOUbgjp2y682G7yrAw8dCgg+Dt7beOeCKlQJmMMhRYT/kMZ8bc1m0QIDOXlfxMD6eIoPfdBRCWmyk1EcNaCsiqmywP0MLz6yA1ZckuBRWsS9LIl4bqdu3ofpfXDwwpOfI5AYnAXDmqrJcTCjZn4aS33gsXlOOF4iSXYsWxrrfLV+QrxUZU8SLW+ATVo0/Mpi81e3b3Egh29e6dSv3u50mRmLuF0W+5RapTK+dQ3wmQoAawS3jy8KaOehsZzw8OaKa9QejC6rcNDJPmOrSHgJWLf32vX7FXnXIPrmfrn6q57H9SxfzNrSuiqcK4GbnN5fpAskM0c/+uZBDDPCEx3rZVFlC0xEvU30ifFtZs4pukC7HJ2fvh4hcGpsTtub9ILRkYxLTkv3ZBZ6fRHwkwN3VbQ2TE4Fyrp8Ydv7PLAwVOpkNaTFxuXrgvZhEjmfQK6XE8SLqLaOBG2LWNyDBHJh5mjbAZ+b1w2h7NFH5QL1IUDc1hAR0lYf8Yvjj1l2UKuucjSsclSKo/NeqUe13wuZ8acGFk/Yr9bAZP9CK8ZejwLOiVNm73OXVpT8x8MyflF1+9v2m87RTFlNbRIldj5wW+GVEXjxFqV76IJ/Y5WaF0LjqzCthabt4J2m3SYEZiNsVHo3Q98mzcP6fuFnTi8nUfUcwPrbdxIylzAlLw7z9jO4od+V66inMy+If9osgmBZX8W0UrbR8IirHIRXd5OPaPXo49RZIFyhnTxq+j0JjNrGlqyap3eHp+aSAXjQTpGmvnPFuB2LaZFGUaim60rBwOzar1fAkZoLV76WqocihXb+F1DFN7lPHVLvIjY2jtdnLG0i+VSs93kIMPG14TNnY4frSelW7r+R0LqULDC99qFCeMavoW1RS02OgroVR7KBuawDPscZVy4b0UYcMhW/5QcI7ljPLVn5SfZZf1A9ZXd2uHpFFSeC+OZq3KRDzuBz5JvW/vcX9LvvtPDab+VSFZk1BXN4lAwZb0h0Ye3uNKPKKrPLuqa0pelov8TOf16CeHFBbFu9OD2cGgm0NzBWsiQX/cZA/M0UEspY=';const _IH='c0980032b98521e021c066579a69c2b26d42bf0cc452dfb594d0c0bfed4213b7';let _src;

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
