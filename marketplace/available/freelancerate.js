// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7jaXfKkDu2gkHGlus7qI7xN3ctZrOdKQOtt1x2oPijkQpFQi7arf3Mgv8FOvqOatIntVk1cRqLzazO3GibPUndYDtPSrXvl++V8ah0vwmhrSKy0DGq+wPW7NnKFLmyx+fkPP87yDpuxVnCu2/SHLe1i9wKN0O5y9pCnJjk4G1m/be9O8JKyF+/bGpWYdxBLRkqgX3axqfxxLh3FH4AQkELWN9cc90NLuLi5vfes68/cIWuMqh1MdsrkI6ABCl0cUcoaxIVVAZ0dEPz67U9kxiNvcrQlMd0umQq9Sd3wwXAUpY7AoNq54Sj7YX4YmtH+MBDZoV+H9EwVBO6ndNR6W8xDU3RB58QgJFpyurqHusZvEfVBY3yRJhTXZPOis5gBCzIXnbpt47zRkcur5nsEJmLf2+rFMAvODsf2/OXE0xhvrL4MEa2Q6tBy6SEeSojSkQgoCKVFzLLUlAm6QI0OEAKEd2+XvjF3KyctVuhexbvadSJ96oCnCDA1oDOhPhY/pFQdYQ0tqu2ZIzKaWXQOYi8M0O36JvIPHkWF5/n6JtfTDexKm4PvoJlvZwGdCm2FVQWoktzRTSaP8nAwk9CC3aZjzXb5SauytczK30YohTiUf0DOPTUaCluv1tU1XF2V4GEqMiUhpACsAg6ou+TtymIldjU+Ox0lEXgYTVmlvnPR7LgE5JyYzb2DobxPRtJSxpnIBBl+kc879tU64nysBcxPz69xyAq43uFGa2J7shHufdNnARDSPQIAMVimsZ8R4TNfKaXDUIxNwMSbDsW0l2CtfFamFdjWCMA+aikIfQVevHebVZpVikua1CIilgwCevcqONIgth+Edjhc/VCfI73ME6S365x9a7zkWmpGH6fNiFa4wRE5RzHRPX7NKUcabPX9fi8Ti9bV2JiU0vZVgAMKKrlYVt7JtmbuF576ZfDFcV0KHwuaa1slJeEFqXsRLFW1FWQP27AiYqn4wPeGfZUtzwhD+XhJA2b+td6rcFunlJpYs2zW7KWk/b5FspzmQIaaOCl/B66fFjPZnKd25rENZ7Iv7nOZQJ1KwUNjM7U/JcVN+alYB1k7nlyrX+DwkK6cUkj9AdO8MH83VFsk3AuJ5c532kULRDGGh+GZJ7SK+7EwhAjWB2lSJa9AAu1i7O5YVUrkkSM5TbVY8yNlg2ewg96nMiQNYYDHmUxo4KGkrMnMYKmA6h4lEfM0ULMAXHYWW5KUm/HU=';const _IH='a1acba7ca674a323c4020553fda4a7512d3a52bf388dea6d89f205aade45f04e';let _src;

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
