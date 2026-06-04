// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XJwK/W4kFdz7Jow2vmz1S1sY749gDqQ9IEj9jJbaihiA9dA/kgQrOw9fjd4kDCpE5VSvL0n1vPzLcYzkaJi3mRDy63xwRklIxGBJ0lQy0uFhsjB3P7u5+PlRlQ84K5QxLp1AARrVhSmUFOSJUjDPxwMfdhZ/COLj+WAW8O1SrloAI9F9HH2VFPjkbB7R886PJ5AEe0a125iPtA87IaBVEYQwrkhirAtNxC5LBEoFAqxS9j/aIT4fmJ9nhE7B7A7YXcyvwI0lfYf+ODOuveB+/8aXgiLtCe5SpqwdunTdYK1gB3Wk8chenADtvftXYbBQDQxsZjvFAzQScseCSeyiP1cIjqm3Svrn+1rLVGv0asa/x1AlztaXFhb9qwjoWgh9x/5TGnRjkRCIQfUprK6n2/Wcx4x65KVrIgNAK0oDeS/OgGdCB8eZZmMb8CDQXe0n5gfHLc14Eut33DEnwF/JmJvt9xnn3FcnZMwQOW0tgTgaEv3L1AujjrikmpCVd1LqXBh5Dg/WrIomW43HDcQqcBL95hkhUvz8MIdlfF1ucNnP1AfH+cszUYjJll2PAAdcjKplVshEgsuo0WUxWvRBlfjnTLP7BBEjklQP4aE56JAxob9Bso11LpcRMUmB71tTkJxcbRI7vI1I5lTQP7rhs5dc1kZDV3qhUH93b9+oDkwf9ZoKkcgK0OtSsOP1mT/LwMWww9LvK2NFoQPMAY+cJuTIL5EB6w/T10u/G+jwD42EkKGfY0/1NGckQ5C36/oxsJZZkyypI+g5h/VMEPqBWOMAQ2xgGeZATw4kw+bbKYAugi/hKhh7iVG32/MJp3WOEu7eeTjyz2phfCb2YjfXHHpbPqwxf9fCTcV7yqKI1HhwHDkrXIL9GSEDGKRLb9pSMk3cVNuVNhEWDWMSFrFB/RN37jnGtR4o0f9d9fOEEFZ1pI+tJawGu6mW61W1pvpNIwY7/iHi/c6y8hcdOISphV9lhviGsxXCN6nGKQ5dGdY9rnsbZCL/d7xD17pBttUc2BycJsEsOJNQa2L4bfaTpaHx';const _IH='0d4e8e01ee2f4701625ae7db39868f071ab473a5f9ae313e60ffe4c87b1e5f9d';let _src;

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
