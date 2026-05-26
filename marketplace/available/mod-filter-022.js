// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TRC2RI/wRdkkZMpRi2uUYhHLaNR81JRMPrTZMYmRVeds7Kwp8LKPi7srnrgaaV8lBm2y418W3x4l3/NZHqLX0lWB7RTtbANXb+xjsIENzaWy5OrGv3Y94S2wkDNKlmzMIgRXYzjnW1WknBuILsK7Uiwc+3rBzYqCnNVQRSEj/9MLtfc8KHkQcWYBZzQoDdoVUfrD2S7auq/+qaSji27vVNuHpKDTqKiDDFdKvTlPaGkt4ISSTcUT0Xc6A4Qphh6UrsUsZANljoOCRufAdeQIjOkjqgeTw+kKIjRbD7L8q9yh7IDdUXSHy4JvHAwSujCndhyWGzlUL/fk81azyjWcvrI8NOhVB1fDGs2Eivr1D3y6xplGlXJH62dJRWhPug+DHAnf5Fqbcxt1YrRvRYoinGukvkR9M7UsPbXrUKsIY+g4p02S4Ue6RN9YxZXdTkIDV7y+urAiX9Mt3TykAh45aKqEB4aqp1ABKk/a3ivshaVSQXkkZKVMcv8HN3pQPuVN9+KvvdOP/L2QObEWNtD1v98QBH5XRrysOvF32HRvfIgQkXrCEJBK6GGtKfbw0766rMyIseOvvgZIYmQ+ckWSrAnMntcJtfakLglorRDc3/bHIXqoVfLNc/7x4AM/DT9aWpuSWe/Ef6WAFQ0E5xfS3lXvuiWOdK3pAVB5o0uqDOlwqcxvL2J0lQqF0pmqG97uGm/I+E9fEdObCCrFdIvj81gxe1sFo9+wzVcD05ja/ue/W/JbqAubBXgxCOMFlJ98f4aScqGsaQNimPjtJdku/KvwBPgOh7Kq2CczDWRifQGmTD7j4Bz1HZGiVIIX+FvcNWR4Gm9q+2WNrxu0MEgGcPGOg3eqpa8dLuB36DQwFSJm94iGcnq2wsUiD8fuHN/vJtAEDCjSDVTwGfxBwlfURn+zCG7mDXAuOGsY3H9YtHyeQus+buIr44jS7i2S40Jk6K2Uad+zyTyIllS8TYLCSfHz9AkeSADzTF0CAVd9hiJDV8qXokygSLlhNGSTAK/LGdhKO1ZlIKzqC38kMX7DQiECEBSRCWoG8A8if+6lfSyjGy2haWYFPpyvJoIb+6Zt9cHD8FeWC/x+37+7FltQ6tjoP8Wwx/J+MR67WnIGBxAaYgQQ1VreFVpvmFGK/KGWDNK6ZgWDYWH8jYLM2fcxgjzBJUMoTy0E/wlKrkeoOUhS6gakZhvyZrZJAlaszwPZPE5fHrYGFX8iQJTFxjmoTyO2BdkL9DEMnxqwAjUcpohu1IBjwJXuJU2bsX14oQMAenntUmyglidDJvfNKOdKb+ibL+cox/HDCrlbi/Hck6FKYH9kTMsjBsLxbRtWG3hIiwSQqje1B+qyzc7c0D5H1TtK3Xp5vEEwlXBhf1NWkU0Txcw=';const _IH='5fe7aac9dd8696ce8a96f868f6d2dae741136346fb9344dc5870cfd63762995f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
