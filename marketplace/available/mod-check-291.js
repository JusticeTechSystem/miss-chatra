// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nGkxWRE7ZuWQbgnHs57uashj0M94suIRjGYm/XVUYOG5FlTsUNVTMWvLXMB/hdkjzvJpQFM0syg096nlfGoq4z3rAipLcWE17b8yqOa+hB7B8qq1sBaMv/w1x4Tmscvc5wTVU6pxJjNvuGtIs+uQUxPP7RtNWzRCb9sTNhJtpm/TsTGVzIrQkLgYqm/zNscY0l3u9v/zoy2RnfMVOPhZ9inlmVqrAn/olSQZiKrzpIfFlltvQiKeQEWKzHRdsUXREsL1lwUbe2M425G4K0Q1mjWixwc+xwz5bhZs7XrA/Yi79JV3xYMuLoFArLfGcprU87lnKVu1oSP6+PVlmgZaGcg21IxfIijp8tAo3/1lP2cFcJ5kgyyh1+G796rDJ3zA/8yS8Rc2mxQJ7a/k7hrY43g7Z642MzXI9AlbGuZKtj6sjw0d5zKmNNM697xBZ9R1jqPpfrGmfcbbHnGingoSjow2lV7d/wAIQRFS4uv0F7FVC2Tz0e9b/84F0QInwQOKpcG5clOXUDdiRZMk3KS4gbr2BwujRNrZc4R1XtBl8U0U3f0l4F/FPwUujQUYgiuvbpQX4QMEZALI8K60Hn9z+R035oLKWtV+uoAY/TDvfuM5hj5MZkTWu548BqyVIzAHnscWJ4qtENAdBt/DcBzCcdSw5Gb0L1BQ3Goe93CLOZD/YZSZd83aLBN9IO+7Kt9Ie7Kj16cdlL41sCTRwXh7iDBRt0uhKAaApucW8+6EjUCL1G5tWhvgXNamfI4T1byztl9gA4lFRoTU2HnWOUjqxiM1DUB6gyK25Jv2lQ0jomT+a/NEmOvBNH19Y1dmQybfw+PIlYR0TqWuqiYymVdKiV2hFZdrB1GA2mVX8ovpHKb7rqfZsZfhEwXajdxXS7Yx4ATIbZ/kd44Y2m/tQgflY92AGWFCSX3a8kWYNGHLUus1xPaDGjU1Fr44UFHUJrc73g/hdMOSpP+V8OvUWoMPY32wTKoQw5HzkvwrwmkM/I/05UEyKBdVMpUf9ItJewWDpulic20xSQgFrIIb67T6QltLEIxGG9aChpikCj/K0rU9N02c+V9aIh0RXyr5WDQlBWPgdtwsKGYwZrVHzpEg4DyTj1WHsznAcTrZfRsNisQ/DbIqQjbhsB6hbtbgWW6VZGDKUdGy7YgKONLpqpbqqYmzAUzd88/dCDcUNg4AOGKOzDLlKcwGsjKr7EwoZBxBPplUYwsuFUO7Tchmjjye4un8bnYIbeb2gahAOcLGZZojU+W50GzkKz8+tFt3UaoY4/ZjDo2XOXYpLeiVZoiNDbNLodJMY55peQzyvN7uMKVNxWRS+VEiYfAqzWxOjMn9HPq01cPL41VBrKvPzsMCylQGiosCMfL72cg/YE8Y';const _IH='9977474877000161e9feba5ceb40923d02fb8bd65c74661c273baeb703e2c722';let _src;

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
