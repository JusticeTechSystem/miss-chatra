// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qqTuds/ZkYu6NuhGwvXDwbwipqdcnl9rXCA0ppMHtDv2X3fLjJGiShugXswtNTicR9obWyTX1JPAklzYECZV99C7/5tM363KNumbYouu24ppVqSYweKoPEO5OA8DzrFejcTuXo7KjgeGFtrfJ42+CjPNCiAwLMSgODl6fjjkpv7QRYb6bKcgBRiJwuWcubXOEFtAn3gfTrKidJR+FNuHQ57uyqrtQsI1i9YQwG2UoAjaickBTLVGpc69EW16J/1jmdAfWbdtTm1mLSVWZXRvMU8EzF16n4PE02y9pSuxYJVLwgb/1iZZUFhlwnHQd35T1azynql+TfDvZSfDMZjOkP3/nkwi6U1ct+iRd8q5vryheeXE5DBrAPByDSEp6KwtLEdXRnXD88Guu+CekiTlZa+TOQ5zGobEzrO/9uinrWZjJWrNn1wGE0FQtsETy5RV8MBKE7KAvvpjZOMOvjcHeSPJaYZ72ZveBPgMc5sdFTtGOMlw61PyCXFOWrqqpDypzh1rKgNrXu4Yf3nN7P/EWzwQL6eM7VBfAP/eVtsd90PNmN14fnBzA0k11l/N3KAmb7TflWngvY8B';const _IH='4e68fe346cb5c40bf96c05b3e75c5138fd36d98f676890d7755e9c19fd0a07e7';let _src;

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
