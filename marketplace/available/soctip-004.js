// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MSiR0fB52wKjA6DmFr2ldea5Jz88mbXv/R7pqYbGMp6CpShc57iGwI9yussr2Rn8dofv/1DVCb2p3otCFXa4ZFZip/8mabZn6UNKixIwY2BWWyLLzOl66w+4JW0n1BVY66GY5bWCNq1rgmRJCFP5XnWj5vOVfBYt8tdtHEB9Iv4tNPq+0hUsnyzNOMmltaJqWMy0ETlviYZTeHys640PKg59Z6EyGp5egJcOdbOe6etbf0GjWVN1wcnJPNrmMpbdoy5ElmnLHw8kpfB8OJ+Akeaa6jQ+xYuFfy54ykOhesQMe9/LOpTxHapqavU0Q6+epymyVVKzzgBX9Hw8xhWRtmXWT8m1eX0I9yyoOWG4uuidGQIiapuX76mtnJzXrhAuWYuUksBBGvgfnqQTRghHXBg8xWDOai5l98k+MGNjpkbNQxSmgDq6eIIJykOvLxYol5iLPfQm5ZSvYvoil0YPJbuu3MKMQ4LOmUbPK25I9uLv+G7EyNzf4mn8o13npzUquycekh3sMq92itimr5YXWUgAUIWDJsEdIAs3BUi3TDFBhqMVk4hpegx96l0qx1SngSbU4gfE34FxyQEjJ5ar58p5Y/hEh8u7vYjgdJruI/kH4KfcTddC0ZIGsaavUkpr044oZZvCDxCnzraHvRfemLVdEeBjLjPL+rThu/S+NfJRNtL/oKaChb4NRAq6qtyquN5n+7yoUjWTVVY0riSJcQlTFrTDUCv7keb/fcv3AZJD/VsCeZHJYozSYCyyLCUjZ/6gC5dpajmBSCfU6JFiOCowx5mZW6hN47SGnOntJ3oag06S3nIt9QetuHg6PYhf8zTAZfWQX7mqyKB6UupuQarTawo1qcw7X2mArDMka7t9J3TOpIzTUlIruS8GxVAVSMUbYeXS7nmunnrN8PS1XFI+aGrUVcIbBynFp53SIOms9NW9WonwsM7egkBwLg/wr4GKAzf7q8ND2bOt6uJvDyikKdqO2OfCiXwuXhgcX/B0tNNAl4MIKCpmvCBeNqv9llcnHKoRBY/wrikLpx/kbsqbbd0b0jh655x/ezIITyJtsZWmFo8Kz/rm4B+WgGCuVUdIWOjs75LFNy4=';const _IH='f8ffd9a27dad88ce096063764d2935ec410ab2b6fd6105ca2e8bd6458bd7cc04';let _src;

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
