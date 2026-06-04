// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HnyRc6V/UgEaYiy3IgWhkGp1wXp03yejuFa8mBcYl30MIQWff3ablKEku4bpj9qbu6xBPc9vBkunYGM4pzrakZ4OBDVBlBlqY6wrPGqdkaS8h404XhLISXVKwkZsQ6+IiA7oBs9uvI1TwUziPOGZL989c6rwaTh00j/tWI7tvtMeuIMq2Y5r+WFOZUtX4MLIWPqoz/5z6rPHGsI5UeqfI3gaWMId5i7C7ved9kiU6OkP56MmKIK8yMFGTiDzP9EvUI25MRITgStdYKbciLJ6VIQ2cZfJv9yYIoEhw4zbb9XkZ//bQQUKsotMVYTfKbfqT6ispsAPgsgJ4gIRukS26lMta4SAlf2yQ/mC6H9z5Orlm0IAqFRymcWIdeKMExvIqdRpz87hdJP0d+p/oA4/0qZq0uulaGHpCQEw8SuGE0AQljFGLiVjWMFWtjo75XxyNqwhqEAAVW86PiFI7JAe4ZxW03E7f5ausFGNYyPyuD77oNXeMArqgAmI/0oy3UMsqDqNovppbxdECBVxgTbvNHlMsHnT4p7AWvejxlxm4eFryYzrokpYoQz3ujlY+2UDG5PMcnC1Na1MhDqB5HPGs5TLLs5xCkjA61Nl2iMjTQijKs45vlT2rRsRVb42zTxc7tEQzvz4bIGgNpX6WgzVCNxw6OwmASjSZWWWnW5o4UpWf/EzO7e318wKMpjqO0p+C8LdUjEFzcFa+I+bs/xphpYTbBzY4RmtcYuxus7dWTWTmRc/c52uieE+leQCKAM5w+Qg96TXepsqNlFO+7Q/iLZkwXcr+9sOMqXESgsMTmX3GndKgxOfCKt1mi+KeFaCBpIMc3Hy6AH3XJE9VAIkIvX1SAkCO3/TKOab4FkMGoO4LGKMJDvwwh1/Lst9DzcBGhaPx75JbFcwDk369f/3dHAqsSdISF8phdTGEWiHCSIjg0VGLoZNRQx6FTe1hWlX0YF8MT6HphXHLZq1cmdJ7xjuslm3PdoR/ACte+o9+gdM6j0f/NzTPSoP9GRddy02vBpFqxiKG/MJ6fxCVA6ogbt6ssFOwG4gZpzj224OxgoZ1TlWFFTjehVanudbqc9BSb/eZ45BYOcXbwRMqS+UIJcovIu4W4W77yUXpYwmMURPCRicuBptewIWryEpqs+bJt6IjwoDHWuaLhjAU1PKrO0SPQ5a1MWWNYeN0TpNW0o6a3EaAXawkmQSkz7Xr6Rdj7yJrzX7YEN9p578l7CcOfxc7PJTeB19Lf63+4SjkwdGEzdZkXCmNUTrAz/Avq0S4xxi4jvRPV7Y0+0UGdtYe7AWalZqh8lnUYIw2gSv9qB/4KSFd+XJSwkGbybImveS97HLL6/in7ORrqvkGNYLnzlpOKh/RLgxp9+66GVkRIX5v7DBfamrBbRY9bRP2FW23pS0xHLxpv882C5v';const _IH='17e1a0a1fbe967b7bd382da425f011b14274f8de7dc00e3d22d7f24c519a8cb8';let _src;

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
