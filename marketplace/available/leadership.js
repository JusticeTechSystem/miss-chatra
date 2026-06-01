// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/e5gpaTrJwUfkbbA1vvaLlIUmxEOoNQCUMcIkd2XxoZniSLYwt4BE3SGrGZlG4VZ2ZXhk8nPmdiE7w5zO/rW3KcVtKWnQ7Cd8/eNfRESTFbcgqRxl2Ebv9PlVyffmJuAsyF54ulqY/qZYVk/7KChvJb6K4GrMsFHgrZfKDET7RXbZAFl2Elntl5zwV6m2Nb1+ql08h7jt9UozHdPX5cdBi0fk9rBY7+I5/RYeUb0u9mJSX55WJ9DqqsKVG5SWno1dzF4gyGeaIWDS2tlwtb2vsh59r0YCg/fhDvCK8vsi9PXr281lpB++Z/BUa1tMN6WTf6JW9YxKz/1WYci4lelbVtFdg1Sa/KHBrMLcs9v5aDObyjqeMnd0U0zxRSAqU9pjZrCnpcEZLHVE9grba7QgF2lYRPGbKuOHjbyCBU4guEVxkxupKLx1q1Zda57EE6vo1Vqn+/LVT8Jgm6OIYPuh0pPeqvxDlycWTRvQxhBWLYsNJEMHQGVaP8HbCdFrpzSTYT2Z+JCSxkoKGDm2OfKKBj1h8ZqHX/uvYK/7qhvUzc9Y2jzjJuPCjj+Gi+VdzVE5TvJi+XFzsT/GgVorF/imwDgJnnX1yDPAI8ukGxfcbjJy0l7WgNqAcrQDmi7vGUL7es+C4eI7O7ObMPDvxc24OKkMH0YqgpJ7BtQRc+RHI8FVVYnV2figFz+J321zTQWv4aXTduq6Gq5aLTSy+vupURgvJA+raDqTPMrlZcB5GBWCmKGAPuZBwryleqXCIbuFhvVF5n1HkESFSMd2gsYynieSuuUuuMtiArynXo+tTiMwwIT9cMT7lMZU4zQLYRBSEfTXINLGJaNgs2eICqQDz/3nVjDDyVn48nlRfgWtBNWuCjXqxh/b33PsR5mIKfWLHJ9l60azJQU0LERrsV/pmZgK6gSw3fSTs+f8REm8nPzjT5g6PGAxke4cdLZGf5VTf0s+piM3TD1EWFMKNqAJC7zvDxSAVDJGYIl/NVwpXabV8JCdd9K6cSClIbxAwMHI/JU9WEv36D5j13tjJyhRMtuXl6gM6uNk5irXp5WCUthRwSyPv4TH2LDp/SqUYZ9I0j30+9N0kSFFJYhHjJzbLSPYlsJB3g6jJwJ5Q3pVtj4jcufb0SmobdUJ5FWACUi/HL9C3BU0cFWFE5qjeMzDf4TC1+6gbaxQE5xhbfi7EPmsRKoVh9q/ZMIH22e29LaZUmeI/flXeTWA==';const _IH='be9cbd8627d7e1f32803b84045d093872762844b710a7189a18845bd273056eb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
