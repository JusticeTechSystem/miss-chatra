// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qaId+HysfJx3NHDBOBFBezMOC+/XEQPnDiONDcykJRc9HpefPOfgTKKEUbpJYo1vQ+9PocJvR7KGVz920rvyahbwgAeNKO6JkRzKVz0yfAGAbzj0EQemHaR4KhUUa+0xNP/x7vjuBYSvZV+40Fw9CIxi69wlMAxA2cRIDsD4GRJrsbOatF4oWNEnk3i5hN4kjmrpJpnX1WsA0PJF76O+kpbgwKO5LA65Z2CSQtPGz7LHl45kEERnje0wnZV7ko2EGERqqx7WskOnDzWVy09PC/HllPpUGa85e86RSe4tkGVt+nqFFHdUSwtfUynFax/kf16iduRlfGDdOHCgZ+Hlt8cJCTDwnNK98KthtEof5ZGkWRgMG/PhCj3lP2uQZQZeNMM5n9SvijuGAEIJLSPJ/dd2C34IKwBqhEvUsVcj5tHLk7W7a+PPnt3wD1nwkqtCcw82cee41PNsdinBSZh9QqEPIuDI0pS4xny/ifUnRWt/6OvQqbX8p3oNAn1jqDVrqZFkKYB/S6iNEU9UzCH7xjlxbR2P1F0GdMEChYspfZYpEBk7QzXjzalbTBg1ZQE8BcdU5RGXApTxatvzFY6aFKThykziaY5zwuZMku6YMUbEgtxrTvJJ3SKSbd3LBbIaxlN60JWBYXyYyxQ/hiL66j4rADuZMF7BeDsFc3atiH1C1gecuXO/3dcdI2c+5cjgeFP38hxZ27pGcb4btq74GI4De5Y1R38y3q1ruEmzIaxs6A7vdGXbYRfOe3Xevq5AgbN2f8xN8IVDLe/TxNOgG/ulWS0+53DpoxRo0RDKP+3AbCvHP9RXBqKj3ZUIK10O9mmn4XSwn71SQiYJQfG57HXzCztBHzfn2/+XvIiCuUHnky0ebdmZWepbI8vJue9EC4AuJCj2/IWNRcxa8PtBJW8jJ2FsNGt0OjZn6SnJXPBCY0zTDFuuskkhytQu3oXsHbBgcQi2CXM5AaFcPIjEymIm0tEPnsrQe6edPBnWjjYKZ+QnuJ3Xx+JxeieeUycpLDA0jt2OM8c=';const _IH='50a8531616a41a929d0de002dd57ec42a21dbf2a3faaf898e75180ce856d2457';let _src;

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
