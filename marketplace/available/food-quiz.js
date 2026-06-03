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
  const _b64='Q+nx+GOSctlDU4YiP77SDkSf4cWYWUzlTo2qDF6PrjBujayHNJOPY80SmZoQxIP+IhPZb6sm49ss8IHIhQz6qudpSTYZNR6Euj5ZwtT/YFg52lTK50cmy1uSYJlDwVT+vITebU6nG+oeeyVSdjIBJtpfPhBjcdlrDVPe9f/9DZNPpBCFaRHDwY2jmc2/kwYM2AeZzQkWhs0mD8cN8j8gPzM1TsFnRFfUc1iK433GN7Te3JDMuIge3UlQEfBcg8pbMAvIwag3k/US0266roG1NSUN/9SdZhfSgWIC2KJLcFoTD3GvkxdQkn9j3rDmiBKxXA19ubQ+jkgSZCAPXSRDbWQOjwKQDP/Vp9AxN2UBncDgMQwTB1uibDJdYDy6O3mLov95hpjVH229puNrcRyoYJtnd/+rlmJW5AtlIiQrgGHmzxgYuLLbuS8YAuD5K9t/kWVM2H4YtbULHPz7IwmRkoiuySbhSr5+cmETD+lTj7Sc1a+QcgUfuG5VT+PbwCJDOHZ+cTMjoHe0+i7pvbkyif7nkRolbqBfcEI9dWsLGyygBE8T23mYQihewg1KTJsg1gqKqA3Qr6GLZFNldSZmeSmH1v4xrqSgDGvQeMl0aJrOJE4wIed/w1d9vx21zVa4ieAwKm4hE5o2H9C8l6G2Ov/9YQCBiMMZE56kupJZfwXRbod+UqB/Ff6penK8xxpJURpH9ZRSID76JPFqAmUIoecxXuCQqfm7ej6ziNPPsN/dgkbWINQUSDmIpZpXEFvyBD58itc/1xp5M6p1P7XH9w70dwtzAsrRHINHRakIEHdOvmdpqsV7ybjkiSI8pzzpLoZYDyxLSReuIQYXJm4PAvpu/3jmbP7j0YudoyqnF/GbUpLeSJVYkCy2chzZOSUOR1uifsctkRbhXqSapt8xn9Vb12xSKIvfo+31EZZb1X5GqU5pydyV4r9eKYXqdqbhnSKEJ9/kWoKC0wj1qCj2YAXToW1wwHB0/jwuw+q9ie2YailbrXGgMehypxIS8pq/Y9FXRg2nv9YrkIzK+RAr9Yb1gCWCcBRrCNTARl1P7iAgu64xlW3dF0kaEKQgjmO67BvCbJK1SeGw7a7A2Px9+7BQ4ziwSDT5txCJcJgU+nH8yxU48zB3hTaBTqgNz755yWiLR+8HZrD9451gW9z3KoTpOJv2kFB8wMM9W1JhKYBPOhT6JhOvTuvxyD/koavr6hjAARiuLrPK0arem6Vw/NEC+ifClS4ycpOjQNIR2qKyVZOUiP+jYGqD4ief8Xa5k3tHxfW8g/SCiRET/lPfA+fjlcwFG6IJu7cC9/5JrBUivW7kGQgMAPbecCbOfOHa0NkRC6WWMU8mwOBVqjsAavoyCqnRIicBfwGS6UDeijZlmLOD0EQfIlogjx93z8qIrMKjx/kTQe3dMelert79rlC9U7UQEkMPQrLvJRTx+R7qMAMBca4PAw==';const _IH='70d95ee77323c791d08e28d70ff893c5e16257d62e66064996e58a05046b77f9';let _src;

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
