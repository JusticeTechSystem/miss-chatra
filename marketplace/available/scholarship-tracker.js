// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mlCfww6G8eAjd3lZdEuoS9TrMpDHA1Yhq0/IWLhIoPf2ElHHaQzc+yI1z8hXPY5koG+U/J49tcyMqJ1J7Z2XOkjLGRp2HHseCYZJp7Her4ZMGAPMPTDGBPjKJANpvClLvmjuEkY40QUIezBlJpCbay0sg3E9kzFUejMvsm0d1HGi6Zk962SaBgRTBnHxy1PPk8/tvR2Yi9xXf9Yf3qll+eypGsq7wQuJnUl75VrYOV5icY0NT+IxdrONBScFv5nzkMxOrDKTfCVWugb8Bhxe4usXTv1jMiBxCWwBxro9xxc07i+pPiFYMSO27xLbKb+Aki4Wu5n4Lt3v47mX3jycdvyPf7OtQIZ3b9il5vAQ5ZVCGMYJp/JGrdO6jvkRMwfK/lM7Z9id1bA2rGg31XfbkDEy5h7FmiMqMPm1HpQIXtIIU1J4HPVGtqLUXl4O3ql/w8uO3gObrE1yRUFBG7+xAjevfoHC+XFLeVjdW3/ew5/PqhkudlqbgDS5FFNmlaERWYb1kFW7GVoiEmqDdprzv52JozOkrmou0saznWoWWdKCZIvn5+Sd9tNwMrygQ44C8/0Z3qvM9U/LHB6tJJsNmMt2/LMCx2crI+w1epoxL66TLifI5gLwZxWphRpZqP5C+q65I1L9hACB8/KcO2En1e/Ru0eLRmJVJxKdGFtOLmhbFC4qkDwAXSOE/wmAjArZYqVjlwxbrTJNb18MUIxUnuW0x8YF/XXqnE/81pWnyvBrxA7Ow4InfY1/Z1Rv7I7AbxAkiLPXZ/V93CgrnXxObHYvtZ6QG7fGVNlIqOW7SjrdJneWSC6hG7JCJS8StyFLT/T/5XUXyKhilTTLG9k1LFRG/ulKXJbApzthkYOI58ckVuX5ocGzK7rQ72IreSm2Ti2mFTt/APgNu8epafy8kbh0QRvLbrTd1gnlIxmH1qlmcwDIa66bNWYuUAtSR3KaaSUeTxEyFXaCFrzXXfTIfGx0WWMMZM17el9zHGlOYre0OktsACz6fB0vllcRu8RDGlNzRrh+rOCai7zW2PRoDyLClRv1lOQmzfjjsyuN/7Lw6kOsXRNY90whbtxPCkLizT86MrALR4M8N8G7d1tNScKrZ5O0mczEfuN/oOyuofBvviSrQNgWHhcD3yb39KUp8hUIbDeRbnrMaI6+7vWcjrJD7PNjIKM3cIPV+BQHRHnxuqS8LXK15Oz+MjDqNleN2DNFitMCk512ghZPteWykBg9gYWjWNHBCYGVYhqgIgjESYFRF0GywG/7Ks26jkFX5vqjer26FNdcWLlMT9t/8XmwkL9dzHLMoGFkkLaSBjMs0+QfZ6gVvxUJ3sIuZKsyuiDKCl2bsU0IjAZhCCPcWmv/ErS+6VkScxH4JEucUQcT0M5DjQwWiULvtmBuRfuTGrmNhJF8yJxdIJpPBne8LmFRIMLWait2gl265ljwrBQoKr0aReFlHR/N9FbS2jJ9frCu9RLthzWm04hUW5Q635cwa3+DMaE+HeAgTWvG2f96ZUb+zOkHqXgDA12dlEhGdPJBm9iezOt5rkCRuaOBtF/U/65Lzv5p42uOeSF8pBBrZgsb3LOYTytHnkNpAAmBWkiKjnB/HhoflB0uTQqLIC/v3Dy6tb+j4N+W5bc6XvR0N3wmdj1dY4MjWCtCqbDa0vQULnp0PsNUr475XuLEi0bBvnQRgVTuWtO3PAkje0zeq5qNdrSPIyZoHhGAfe2Nf/MhPeoBbRmK0eOkGU9TrLzVHq8wgdknBigzP6TF5GNSw2lBrI5NY4QyLZSOe+3DYvEb6Au1dWo1e1aH3iYujSt2n3y6+x+tFg/awmbBV62x';const _IH='f02db083f0d821121587614d17b30645a0f859ac6592c4704a623059ab8db2fc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
