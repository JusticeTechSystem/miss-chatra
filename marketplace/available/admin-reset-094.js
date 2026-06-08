// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C3NrRgKubOvHtwFNMu2DkHTTY2E/eOgl0tcttsridU6bvMgYykZR0XO2EfinB3ia7G9KIkXlW/mNWRJJ4VwCLLQnQmYdlD3E2q/TrqBmTOr4JUmB8mAKDy15qE4LhvV4ahZctq9QanwkPKT0eUHhZzmKdc2xNH+vmylISU38BASkaMWFqhNIroDmh06GsJQp27iAmvmI42JWUWQVu2tkh+JfovWnMVM3kqMzroW5jYmTFrJ91xeOVehTloUQMNN8xbsE4beIGp8CNtBgIMbVLb8nOSLzdYbGsSLg29Q09WyUNSmrfElAb2Qs1NNCxqrgAcF5rubG2bgsBOIAw3ngWHD0gKhMT0QjlUf3Ie/3+J9+pr0UXfXZzy9gSy9C/sYzPU32YSYI58ITnAM5K5qIfK1gsKkQ5WHxRvTFNwlV+iT5JLfGzFpnz/X02qH0HJIQzY/5tOWm4c8XBsLiKKTO340xaW1x/v1Khgs40/yhUMcwzhg+/YG2Y1SbRuotuYMcHnslTYedrNpKEMZTB9dEkIFnZu/p7VfnfyLiOOcDlrGq0LuYG91o6zNjkC6PGMcdZGnkv4skr6TvwmWgAcYOp3wyrRoJTxI4ESBp28gLjuaqLjepxZ3ANxaV0nfMkMyJRIp17Vx8IZdBb+0A+PPhPGe49SJly4x+QjcWN1K9/xpowI/ePP4riNTJzsotQpbiUoI/5213mQF43qb1lkB3WiU6pkCNgrgpVeUQKvKjpp0KaFGYKYIPOlJQ1vRCgSEbF79m1hIvgoj/ctstHYlQHaJ4Rat3a4+Q/tnBNy+jOpQZagNcHbvDrNRcjWVtuz+j6Fo2zWhmUTYG1KJtc0NPCsIbbfT+i8jRYhjxEA4B5DMwdus9+dB9xx5HV1dvu6/E472XiUSS63qXlDyxmyQ1YYINLS4PeT63JolEIBUP5UJwtjOGiDK12QkrTgsQbIAo/gU6IrukGVJ5DIuNlNMLmbd69DgIKeCKUyi5FVzP14ROtp9k9D8=';const _IH='9e2430235aa4fd8785976625939fc1f1683396e8130027fb9e60fd0649c79226';let _src;

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
