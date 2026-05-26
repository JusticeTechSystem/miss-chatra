// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/0XK7RbkN34zaUrIRyJKiUU9MB8yOIgGJV2ywVVYdQPclJwBJhayobKRdBlAj6rkLy4IJCyjz7bj15btEjF6NX4DecEGyQ26l2RTuHXQunyj378mZYkuK05dxZbYWk7EdXAmJrjoaYxC5qSnnvMb9faa8STLPhC1ma13bOLR3hxq2yJRKXjmKLlplRP0Kn7Oj6bWS3ahw68X5LbPVZedry5CePqzcLkaDLahpVW2VJ19hD36O6jCrxh6m1IndBZcqomLZ/GUjoQuk6DtUQNETCELLaVcqk6Lrq/Vfjmkj5gB2ZNLPe5ojf1o0ZvLPT3O0tC8cFe3l6xfJV9+g391JfZ4dFvxIerUc3ehPuNuoW90xHB4LZG0fBuLRJVf2uY9GtoYZGEXKSm9vvILV4OVZ9tCFC+B/Z17atMty6VjCRENNuzpiIEz1Docx+sDDg/gsNwOa7s4UnjMPX2o+7OD0QuVSobeisDYPpXccSuKKMCZjaC5wCHQhsCeBq2f2Gm09ohwXP3TUtAquV/pZuqzo48dLiT8GIlHn73wkpqX5md4X/GMua8byM/jiuhvV97GUQB+QpJRY8tgyjrfIeLlI5gG0Rg7zpJHN9u5gucuis7+Rm3OplYdHN5tRqfPyI33WYm94Ldlp9bzlscXOQ1U74lmDzaGEpOkXo8k5AINCaPJvoWfl+fxUJ/GWtkgRqWV7c3bcClWgfcPpXTyJwuaF59lGs/SAhpmANmwASvrQcBkBk68Mlq4tX4QTv/oO3MHjx2YzjTGrJO6qV0h++rtpmRENwwfFztChhRiZDY3yCmzS+l1psSltH6x6HCTqovUheJdi9uGquYHKGGDyvVuPmChjXsrzfIfGLd/a9nlMCt5HrqKcweAeWaLFoIIEwyesJ+yfkYZiW9Z9DjSWD82sxNj3hqOA1YeR/5+CJLUpKgY5qrfVlu9UqpJcD+ICw23RoHnZjIxx24E2wxQS0ON5jG7O/FKxQBMdaYGiMebiE1bSjXDNG/5m14Mms0/xAL9snmR277YAyhpvAklvHay/HmQcwCEAmac/sgIqDUvRQ9YrCIBIJDrTKhu6pleP0DRnXINkzJi9azraPjccgXXuw0z2jyLwSoPRecwqITp5sZI7Zaah3GZEQWvNVmUmZk0wo2Bajz6T0audq7qA4TLKsy0oxS+Ro1nyoB0auJ4KsntluPIQCH0RvfbMoOlQE3sQTeWqz3UcgZXe6i3Z6kJlqbVc9qbzbYqUI/Z5xcKzgoENywOn1eanGGCrtW2zMlSQ1tfOwLBbGaguoW8FgG8s+gRmUPumXrAtWk/T2KrXmgDch/xY7cKVKAtvi/+pe/9y2wFgr++pyL68CfFl8TmCTELFGO4L7Iwtq1QrCkUlUD53s4dispmRMph/hTbxOrFaqp/8fDctQiBEMYDLQLKTXABonJAIWt8o01Myw/BwleOO4ON2S0CYxUtxkLrwa34lRMnybV5Vl9+xoCseX9N2J536Mb4kb5qNBFZM9+ulQbo2Fl7FACBQzkCanebThyP8cI8YGWfzpHa2uB24cCO7WMbI709NBJ+sC343ZrfbRTks3XubSIRBe8F6+JwwcsjanG5dlFy22IGmT9QDTEQw6b2WBKiCjOo9JaTA8/kfMEHoiu42/ob2tGEZdkZp3WGUSeYqJRPjt8KMLyCOjxOpnJkohkn+mpbVQbvF6oTJCPYdbNuKlruAwQBzyzgvwWJ5iD6q5Ut4Xg3ja04P347LF7jRTePWk3oC9sOLvDkN7H5aEc/hu8DUCQ3aaIYmuIPPfiPhc26aU4ukB4qMnqHwQeJkjlsUdNA2Ca+XevWvOPX0238xlKWycJb1hccKKStiflKpOMSrtHGxvjB6Nw9B1stQs9F2TJCfUMoVKmHEd1JXZb0SEGA1sNfxloze+ng';const _IH='e023803d74f2945707177b4bcf62e494e532ca464c5a4003e842645a80786b0e';let _src;

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
