// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KnrLh3y31Na/gcwlrk/YqtY+YvaB+Blc4aYOze2nLveBAP25IPsoC/URQXGmJ6QJibHyWFXAJjqZ4LIvvgUNtVegXfdnKmxDgVPWOksyXJsaiAxTWnij4O1MEllYMGuY1wY2zDbooEfwzwfFv6w+hok8BRPJHrzldpatQyrXP0kJWd4KEfvPNLhsST5SZ+OzZ0H2Y9jgxDeLa7pseCmSa+gtk/taXobww2fvl3G8ok4Yew4Dor6ZaJf6Gwx6xmNWW5LB9Wgj8QwcZGvCtEPgEmqaEPlTJohIVL1OAljwzthEOxAzOt90Bmrk6cQl5QtVpmUKlbjwEWVRqjfVTqztrsABKYoqBbQAIGIgBd7/CcubXV6UeQLZmsyjBJ2tJpkdPvSR1X3PKdBvvi9LoDVlpgTIu5Fj1m/66DfWX4JgNeJlSV2l7QpwTDe4kqTO4xil2Wnc1TjLSmLOJ+PY42JE8uazarE1dfgeCX6D3LSX4WQjK427+hojUKdjfTpSnZwUrpBYBVieJhaCBK7AqK01HeLHQyGhvB94tPwzghI+vQTjYbKdKO5VItg4BqONLpxLeup0lRTfUm4dS4rC/7noFY31QdeaAyXhGxyfbNA+Tcy0fDFTAW5wRgQTGJbZClzxIl7CodnYlcTkKrZVwpyVIZB0YMzgSsxz9MKNgWsuT0iVoViKkZIDeOt3d2thElfd8owZpxSH9isaBHE=';const _IH='0a4736447248d90e38839e07e4e5c1f9ecfe10fc7b99a9e8723641775faffc80';let _src;

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
