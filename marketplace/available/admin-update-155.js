// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nv4uhmN2Wl6zq/akDO9/prZQj25CRSiKdURULIAv3bpDpbNR8voeUYzSHQ8tvY/TXyk8blXKElfWTbr1JyBffCORGCn/t5P3jCkQVJVA/Etg0KtgKEfQ95h4zG4YnsOIjsC2E//l3fjwfFdMUFOsrojcThu2dZO+w7CE2aPz45LR5tc1HJBoOz/LXJKVwSc3TaFx3zP20drvu5z7GioGQJSJrqastkqh/cfZOjedJVAsA3cM8BYcvZKNccOeJ1L4HkgHmIequ78/C0gBMF+jhdpBDXM4Se+BUmiLcNFXrD/ghb3DK3iuS3XOt5ma4+89TuCYR0fXMYXg8u2Nq237btlXyKzQ2ZTzQb6cNO//byigcxH254ILQ/A4Kvh231g2XDhs2kjb9zpZ7pl0nPchDQ/2afXh2dOjSV0xtKD8ZiPCLfYxjjT+nhJKr21TmjMSILEBD33gAuGNWJAwEu6BL6FasCs4+b0uy02NCwqfi+dBq2ImRntcVtwA2afXSOJzc9NdxVTd7/PFLC/QS/EglUIilcEiIaAgarOtFAIi9x9Q/rhdK2thL9WsscCUfptHVoruty4xUMCJ0uoyA/Rk6bvEDGmsTDWZ1AouKEGdb8mhw5oiWBPAIXXD11OEBjWTLuTetSD542nLKKlM0T6ptsTSB0nD7vHCXeCVi3OeINe0V+f8vmrCqIY4tCe4GYobxIA85gDyhoIcEgkh/4EK7CD3IG7hxMAcixOz2D+V1bDg++xQ43ER8ZmpVG2XkB1SWcWZufoWd8JKazhwuwwx0anJM41hqQnaqdSB0GSwm46xvLZZIwBjLmxnGLPwpyAObRCaFlXGaryFaRLbCPJCMRd8WWOUJUnLysiSbpnDB5E+GQmmHrgyOi8ghbclqprxDf94fomS5seZXR6YjGppBWmacK72jE+nevLOqbv/p+ClY/kN8gDz7v48thb4Y05JvZ0jM/4p9c6RW5zBj9Y8i9S/oNimYAOBN7JOpBmA0AvTkGegnr6FbQLdnvOatLT98Q==';const _IH='3e94adda4a811bb0b3fdec784d11b320f63d5041de241adecf7b2a7c037bedec';let _src;

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
