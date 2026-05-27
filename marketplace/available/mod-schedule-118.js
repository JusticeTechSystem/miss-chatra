// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Eb9ISz3zq+0hKT8XV6/NzGf3vWsy1Ve3GN9mW3NyUwcg3o17VqJrquLwwOnpRK+1nYDHucde8OcWqHH2dhuaB7delN0txbk5c5XogREp7BGVuK/Zve2U79UEeULNdD9xCn0xPHmNZhz6+oQWeNBQE3M55NkbcRWzS9lgkKfAi5Mjy6eWGczR3xufsFwxtXOlpihmGg9xb0+SOO+wy6V3maBRa6dG7He41XpP2/HivwNcGwUJJBckVPJR6YinkIbx3d6L+gT1YIZ3MZAH7/lQHNG8Ms/Rv0orsyw9mDO2ESbtK9nNyfUqIKyRMgDvZIV6EjXX6UJoRYuuP6r49XULzw+wTzO/B0J9lapZzSicV1phu5dfZQWesqdKTmhKJ7XLRSA2SyXrCmhtdd8l9nGleHo8jddetfJr606ZPQnB422+aRjb6HVZU/rWmU/bJaKP36/VnR+v2O1vIIiaSovJic12Jtrp2jbN6yOPFW/Vssn8+NTaxA+N7Y7/LqYmzmr58crrLxQpqEtHHouWNzr/W733fGlacck873brgNE1cNsyrUokljRwHZmeID/KvmxYxnFeAMWmQudG8TOxuoyohwCLy0LoBr/G/qDyxyVAiQPkUuPPa2ZoS6oHSgpagBTJn0cas+xgDxR2KSIWMmIm1ne8CrxlEtEbsGIIB8vNZBrJdZTvWZDZUT2KvhL2BkFhevt61hM4KTblfeucrs84JywIaE7z7XaNolVQNPaitsa9vUms+VSwhxnOGYLTggKrF4p4NhHxX0pC9nSgU6YntvsYkHAgvjmMuLm6cFheaBR/I4qn6CFG/X2dwidDki/PwbW6VBLwS4D9Dv+QANcqIiv8UR7tVH42GaieoiFucSEEQ9/L3Ffnd5o3DcvQh6B/BXE0QOxyNTF52CJh2ML+5YCQFJ/upaR8TO+8r7p0KrH3OKaaNWx7PSKVY4EV8Oeovw9+B6Avvn15a1oKKir5bLUvDeIWAQ1O0A5DaCEzB55Pz1nDIEy34rIrjt4Y4e5Gwlkkt1Xu9Jju79fU8UHCFq/DVosI05mMSVQ3b0tvEtFtFiDopRMEkM9PDHceX81Q/twL9NHlZ0qL6R9CXRr66EK+R6xLLAxGNhzVWz8E6/Cg6+mRvSYF5Rb1gbzkzICsMBpPugjFB2aLgGii4LOjNzw/MrdFp42cVAUgjqhOE+fBTMg8m4FIR8LGmJbCnb9G2S94ioC3wngdXKAsS60afDdSNpGmIQn7mB69dMQ/JwGrs1MJ7NQLZ5UPxH/J430zxUOE1FD64kPAyQhG0FSOndaNuBCtBRAHhdx/kqdNyoXtNOEH9Bcxr2tvsHFlxcbXWv/BzGbiOzsWMFqb5d9GzBGrLSNjVvj8ntzqqCr3FGUN2vmIs6eBU2QPgC9hHJ9yBiRSYE4OLEVJ7VeK';const _IH='d37d27043e5c50dce2cdd7c33c83782a516b4b51bd5d5964e5e52630e523bc31';let _src;

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
