// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7YcA3YitsaxH6OU9spsmk1UnDRW2sqVYcNM/Plx9ClLBOJer3Nd+K8/raE1hlSQmI2RT5UoYojwOIkGd5hy5dw2rVTjXAfJVm0tfz7CQIwpstcnIXwUG5VwrAEQ9qQUlbWBVO1B9ZSPuXeM8wVuJmav+Ok0YXXI62pvEi+6XypKisl+ydvoYPIKrclC9fcB4RXlZ9hufDZG3yKw40GKDv5ZMcKcyN86vu7N6Fb8ZZQRJbSwcXutrczDSCQtd4QpTKq2Xt58DI01uWxezdp61jUvTFi+u3cnKs6rJdyMHLfU1qbViOTW22pEPRpK6TJMzbUm3nCzauD4Bu4sGGqgw15OVnPXU4sHHRAyV1s9iX9npUy2yzVrC5ADSytSgOUCldaygvYHDM8VJD4iwtZ6kMy3unkDbFqKX1KE4fFcuOCOjNU27EpS7iFpClD0CzYB0FZq23VHV3P5JDPXQGaN0i5otqWVLlPu3g5d1YJGL1cX1aXT2NpDbHl7UCTbrUO/sDRzb2E2zenyQSc4YudWhis9SOdECAOeSIFinBlQXHpGGI5JDKN0x5g5jdEIrUZUMGmZnqgnq7gYsQ02JjNTUpqgbdcR8CCBIQw4G+RBoDpFvblxVE2EBw/VzdokRF3pTWc09jUdbUv7ajoVbQH/Pez4cpz8KP9zR6DHtPLBlIC06+to7Z7PX8c2WJHC3Iw39rHRmTl4QvhpG0HiMjOzq/4O8WEtqtYJBiWSGp34TNdCjlCkuvWA8PbBSdwD4McRo52NAv2Fkhd24/HoLOHyVtQXXsMN7oZl71YXG+muO6xOQVG2bWsvrWdqOOtrSOW1ls8w7opN+7PSvvHonVgZaAJPNhFMf1iMce6f6iuRXHZawNWWbw6+O3b2tEz+X3/DEzyFASvoF8+dNTfyDbj9WzDBKD/4QVXnMCEajMK2cbx2tITUkfiYNZtJBrzwnyg9SouqrF2/nwcdUsH04OI642kQWOI51tezifnEwpNZbNZPXqdx/WsHh0kRhYeVt';const _IH='fdb170aca8970af975a2557d7873dec2ab15799330472d744f0c4205952ce50a';let _src;

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
