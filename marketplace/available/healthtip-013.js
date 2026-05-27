// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VF2qOz6B7Ci9+SH3oe6FRlk0cGJqeKsWwlxjO7tbwZASSfnP+PQ7ZCsXW3Ybb89iFkBmZZsdS1B8Ox6iP0B5xIoBa+2ueiIX3pfTNmx2p9jvmJzQXvphq7dhFMYed1W1DDZvBtvuEVA6zM8tJZsJ2RMmQXL5uKiPRX9vFOGKcZ+RtJ/AuJDge8/CVAo/2G6XaMb9TsBv1Smk2fPnPKqcHqR9AbrToyuKgF0tWFp44e8iORHDTN1GYogA2rYkoyG1uWaAMgqsQvUuiAcSix771Bzt4hDzM5iU0POOuOMKUZsQwA2qk6w+fsj8pTayB5NPpIGcfAojHeStVy6fGYDgfTIBfW6Oku3GLaD55z9yJuZHuBhQNXkxIdK9cgMBwmbH24a5QdEpL+/3z1YU8oAguJV8G3fcONf6VTmFlGoKiVw6A4KOgBtDk4kJ6X+tqExYXGur1kfMlHPrTOIT4ybQA/0l5684BLmfUmiqQjHK/SaJWRepQtVgXreRqcwWYD1/Yvr4NFejLMs5h1N5FakwRGhTX1KrsxpuHXD3yIKuKH92fWjQAT4EKiPEtKc90vyybezeoUidQl1xtuEwd/uqTLNtmBn17h+PLKm9Bem1BLtycxzjwtLQCTEHSloqYNsYtDclGY1ekG7GxbFQYjqDJqHAkdw7lPPryRP0WyejdCtFSzMtcW+Rj3wtHLGBRd4E1SFUF4FzXtrboaOsajQ9n8EMHb7SyRLPc7hNBU+k1ooa32ETfzpR8lTFE3dj+RJxcqRWDkkVuZ0futA1XbyRgZ9PZRE0Z0oZDhPQ8uEIwBbNP/RZzeLjv2RPBljKf1x8cWrcwQFVlClt980D/OhJWvZaMZJ8jMOKlk47FT7KTrDy7TqaNa+XyEvodRWi5ev5ZkeCwnmrygPxiX6BjPrE/OjY1+AOAQsPtF29uClwjNyMkg7duM+enBZU024=';const _IH='7dec69b29e9cc49980214a0f35b47d123e3a5b2c712e2d6329c0dcabccd8e75d';let _src;

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
