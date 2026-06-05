// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KYrwSE1yOUs79eGlvqIFfof6/v8jqMS4R2+A6+czF5ezhOc2YYZtgRSa8s6bxRShp1J7N+46/4RzWGGvzNM3GbZEBOLCS9osZO9KfczeLvBTcbAmyXCwAxvMpqhWOMYDTEQIPwlbUthsUTei6vCUuUThb+GEVF/Rj2tjeuGC1xfSX9hhyXPPcgVRbAHMI3Y+uQXu+XdjVvis6QnWb/+U8vz1kzx5fzPrxHQoSu3x535UisZmegNk7hyjqqBZQeBABGpm2sRo65Ln2mM39WR1orOzzU7ad/QUs922t3x+JiyYhZnlGJaSYOqGjs/ZQo1Dg2Ps014FEuKJhMpCJ82Wtuv1VBP3IS2etYayTLkYygPxyUAZfL80r2LqZr7CUOLy4J/xaDaIeWgCayCCPRdQEVT6qFbfXB9mRRIZEhqZdxQCiSfmcTO21vWoT6DI2G6eNP+MD2zTBKryE+9XosR5LU7pJXOv7VV8jdDV85P2Yb6edWsyalEBjZG/wUBMOYSVTlk+sgOhaIRYepQBtgkTUgdfrGqW+luGQk/qO4Nlrxoygdz+UvUsUCUl26foS4l8YYgrfsggc8WGoEu2FQanbEntjxr0lixnvNUgOWFT34CCfLXDz58Ydm4SrHU7fV4uFXsMdUdvQJBRhXtr5kOxbnqc/l+MikAIAYM5BS7BcuK1xaTFaMj9ucJfgR/6PqR+Pg2mRUmNIEucQC9bxsBEXS7fCZvRXXufDCU53fm21GEy7aiDzLXCTiZjcQ125C4T5PW1XKzoLIYNlyLoe8LwQ7Ema+OEgpVV1HLHBGXbLGj+Kx28MvXO9T9XPHS7QoJgRd7Z8TUJ40PnKBZoYNeKVkEbhoYy5F1HLAloFvxZ+jKIC7C8otoP8+uQs2pFvZrR7UVq8B+UZ5n6LgxUjY34piI0ophu+JNPudYpvyVMFWOFi8vf3F+kGSb50HiwtqZU0ea2rfwVP35Ny8fZccxj3xFrwY5oW9zml6dph3lmBaq/DODnwT3DT1/zbWBoZ/a6Ft/c1lxDClFJu2R/bp31kjsgxKW077g2abAg6N5DzwXrcrprQjiaDBEOvvwHNRJyq58uPF8QR7XFRJb/ILHM2nQLNQabzGiliFjrwNk2JWu9p2kZK93ymu41sDw9aoPNfXQL0GVF+QhUQFQi1wynpLcFzkgemH58ktutEPCZjfg2Y4+BMWtPV+7AlcoNnGnDa3ALAb/WpdhjyF6hUyCN446fTx45Gct6+y2VHAQvmmZmokjG58J7HQCZ+5tc5PMofPiufJjR/GXkYDENzhak8NieD1dV701yNycPJ/1VSq9uwlhd6By5BdRFzXXGfeMqRhLLhiLR9FKMfg==';const _IH='26c11636d173af791d95392244a751c2da1ca47e2f8d66856b0397cd52b08244';let _src;

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
