// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ADmXfZfg6rqDBgsAMw/lBJ4h30ib8d/8MhaLkQZGhvZTF9XLa/MUClQzsm+0ZKMVS/qAi8Jiso9UAvA/Cyy3jmBwoYfE3rpqJ8GAnFXpKDbnjWz00ukc61ufunCUQLJhA+R2AxnAfxhR6CNPhB7DOPTbHa43j/pN9SifB6zUthm9Lrgn11hUpodk+dRa72Ep2IzmRKuhiyH8QZn4Nb7bYqURrZ7/UBdmov6uOh8aOP2RC5rabczCP4D/YRzUrJboE69IHsJeDiQdjeN1f6ikOMKJwUNCxojew7gcXBzdieZk2J/kzUJFCcFkj164MTfbjghZIYPrw/Zn+ww+VK9OWKnVAtstnva44fZBhwxrXZn/aVips9MDcb2ZGoaaNBW6xN06BDmJcY98mVrBF1rU+/Kp5to4ssFdZXOzhVaKPw6hTV6PlzbzfAHX23Wlxz2ONAvnEKXUn6qlVI56fFDNgE/kilqILX7qBjTtb0bAhF7thNn5OUB0/C5U+0/hGTikvqiLYU2E+hSnMuFBJJFzRfC8qAxzKJHnoID8G8DTARDpsNLHhtH58/ncKoiFivtHEEc4ae7Y+X053lSVf9VtuPsZhTOrkEy+4JvCZ8TQkDRw1Vfdho/MXMWpSMWNKUANyeTh4D5XdlaC1uoGNlgqrFmNqKBrff7CPydhuae68lhxZrdldRxZ4I4sux+FpbnMU9ghItkpAbNb41ZA+dTYm/f8y/u0o10oSeyjaMlTBPphuPq4aOPVZU7ueH1WkIroRNiHq9AbSN/SwapTvpCoWQ62lvO8iRbPa9YokpOvExbzPUtelUVcHX5L7BGmZZ1JN/MkzKcfP9IwkArZCJmLaglhXyFef+WKCJKeSunQTEzVY5UopBVHe3jKr9pX2z4/33i4zYUl3NYfVW7Vvr+86dWd1Oh1EwjUYXX/r6o=';const _IH='be9e045a2b0ba70f894fedb721de91b1da6422c357a9750286e26990c71610f6';let _src;

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
