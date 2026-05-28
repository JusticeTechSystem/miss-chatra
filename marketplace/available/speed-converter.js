// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Eh2w4iKsepC18gQylNnPZVhFI35Qrqvc/J9w6Wt1jjo8fNmOSmNA3KbesNDGVra+UqYSogPX27faVQldQ/0OYF4P4vRAZ8jfnHUAcLEwwePHidBz3L1JY5taogIgHiw0tC8wMIwAfH1BJdG80luvMwFp57sXV1PSdDk0Jn2Bx0Z0iq7cqxDiJgoxd+PHFUw4zO4BlFws+lM0Vdd8WvKMsstClZoZ/93piGaXpp0UMDHsI7SDlmwLbZxAOSKTDyj7AoKc8lVRjlLr4uJSIwpBQa9FNX8FxHUtZc6EVOLXsgeaIi9PXY9pUeiKl1uNvpKitSE8M8wNTTs8I8xkvfWn5WtQ3TyIgK19X2FZF/0fGOSDdfBgBQPYVqEzO4EJsZCO0e4ljxqjGNPdzIsErytiNtTknM4wBSaayX3gN2616EhNRrlGvSuDKHTlJCPHPd/5OH9LUqybHIzn0fTRny+/kjYKvBZNBkQjm/+HddUGTdR9iBNjTkQA0CBJXBnEigzBhF+yGi8qSclssy+xM6jhwhW3R0VUMNId8v3c8o4oZU2txAkN50jEEhhsV+vIjWbKaQeTHQAUF6+ximv5mbPcZVqaxl/Y4s7Gb2nzlHZUxiJHP9hxTkhB0JtyB6xgDGSW/AL5eEkzPCGcbkxaOtYdAJF50LHXXvF9ZWLU6IsgRsA7taoLUzlRk/5mbB+2KyAuaq4+D+p8pJpK0tHCkq2S66WMeIsGP2O8A8DvKwVhNgWTlBIznjcLSjwodrH2PqkKTeFa4bdX/hLo3ADR6YiPWa94PhgyKIYsari3aLaroTCMBIca/HJtp0dVT0hYL9hOdDhRnAbVL3TwbgAvW9tXGXPsVSIgEkJ+LEHp2Zq3qIZZaMDrl7TC/TUul0qLt2+kbUjgju3Ag09dg03rv+akktuovjMcquhTDlEluBOVVOZkkoadfX92bxRjFjXDiIH2eOBd7qla8v+qWcJi4zfPh7mbGiBKuAxveHlGOcHrrQeK53L3wYXK982thFlofJvPF1m4kRj2030BRCoH77N8UobJEgbXQFX3aOUHifOT1Q4rCHVcpQ9q3j8FN3KokxKe8KAQBiUy5lD52VDwZl/HHi3b0rlneO3B56cFrKGEQflMuqAs5T18KVEb7piN6FlPmgmnEw5TsJBCIY2+MJHR4HkU0tqYTXtu6c5ZkHxYDC8xNBngq9kzTFeFnE74cggvBBXa0enh/gwyQ06xpyGaJmbls5Yhb1pPTB7SwHEVv5H9UyrHmPaNegU2ywO/B+SrlVbXgzbiEtrdoqL9yq8yGVBq1VNYLuVNQ5OGPkoy538BQKwmFg+P4nyRxXmA0/9yLzrkc8GbI7YjEkm9A2HABmmMWEOH4WNmjF1JocEtj6rOWL2r6sikCET0a77UsLFetNYFsJmoRllaX7Ics+4prnIgkwSHdR8j7cJ4alOMauBcqdKlT0Zvitka/SZ2zEzD2C51m/N4rzo46cQlVAvEtMBWfOtLGkXEHuoGRiExw6CTHa/HQnQRD4kqZsoeKCcGK9meanlIln7P5N2VjiGV6Zt/6eDeBpotqSur5l9/BkCP+6cB9n+yWjTTi9IQLcXNznxL0OaKoT6nFkVRAetoFNECUQ67ecAXDgKM3dbLfvOucqqM2H6S+uKzEgR/F5X9xI8FSj5qKKkiF+GhrVLEIccZwN0emL+NiL4c+WE/tUO1qUtzPbdL62t9g==';const _IH='31513745e4dc85f245575a7ad4a2839e99af54d6be529b721bef6094a7c19239';let _src;

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
