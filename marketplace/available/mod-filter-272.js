// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+daT0SEMQRPqbwYxslPeg/CJgj03IGbAm9OlQnCFmkEZfPbmdVrW51iU3YJZYqMGwnHLBQvjrrCHviWP35DQfv+Wpd9/CDqbJ2bglmGHAFxYnEMegu5oQ8yIqI/2CU/1F106PIZDNH+PkkNoHBnPLkdXuXc99T0WZh/UD9Dj40USl1nJ0uPDeFrGFNUgNfwOwE9js4BQixlLXR4F0GqAcjwkGMeRkUapCa1Eg1HnADGwPGOCX0TbmEIvdBi8G1wrccfJxG1RB2hsEXROpkVKtuXO0LKrvh/ncNWC5a0g/2Hi65EutKDLB5HBHsOM4GaD6YNOhBdXpSP3EFPQDocv2nBcozT22DO7rVbP7i3Leb6qkPkOAEE17iEbQGXbIXmJctXvByiXZd6SFwQw5mvw3CrodFHMhAa2kGMwqJly+aw1Rd4cHR/rlTyVdchhToArqy+qef/4L4Lcw+DbfoUDRfwkmssKCTb7sJX3AetqWPFGqQLcjrsgXCmZHMJe4W33CAtEhTq5RUoSq4wEhi3W+x8mmr/gVduejhBpaZorgMfFFsrC1dhray3l8LMZmbkyTxdiwARuLkzV4/SFrLJoMenGcET01J/aYDR+f1fPb1aHz5IIT6zZLbYck4jtc7W0Gj9/bqJTMukbotpuJluprDd+8UaBNhj8mF3MpUj/EsZpUwJIxMwFtTepkPvS3T7iOatLVz82b198meRzhLnrNuvYrwd+UFBp0dxkSoFwYEX96mEJPr+bAdIi+ZpIVdnL8Ye8z9tM3uVjPeBqheBGxWkAYk3jaNqiDwJMEzU/jbkxlivC1hQq9ZY/zYQMaKiwStagxcCigKoiO3vmmC90T5ClSJ8aq4wtcm6k9/OEMbMqsLF75AqjOm6D2G87TTYFIeso6X3ZFooA0Gb/c49KcbdxUCfai+2z/qVp7UgEBEdS3bvliNry26GzpIitpBPDOb4mWSmdpQQaZLuvdjfjn2neTrD9B4+bH/Dzs2d0Ifd74JQa/nmyvw+oglmYOot9khFGZtRn6qdIqiXuCn2+sokJfb1heJ+LbKghfcCHrR6tJTQP7N9nbtu0GnVKn/fqVSoxCq9CQZ+1h1c7je7tb0FT0gwR5l/0Jmdiu7iKsvhIMWsm9UWHLQ43KFOKs7XlRPCBMF6GNpGlcZhgMKxolnXBKCADq02p5F3jtSUNcrxlckwjgykjUoDD/WwA2VGNp+Kgqpqpn+8g9w7qgloVIgSM/Sveo+YY3goz3k7U8jwhHJAIqz0kcVQUD1gBFakf308h0YCt7jq+FbAjBuF1xSVfIvQPnLDpb5x1rIEUWdS/nKHf+/Plh5B7DXkZ61PmyQoadIl59spc61u9ZQR8MCDPZRZtzXkwArXrqrQKvQQ1GXn+cPYgdA==';const _IH='364cf6b8397482a9a33ec9b913fabebc73753dfaecdbdee7abfa8e3af5447908';let _src;

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
