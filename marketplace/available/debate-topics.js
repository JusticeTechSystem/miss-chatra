// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KbBoSRoHrFF2XkOr5tHTPUCyiE4qlG1fYG9tWg9IfLD+dvp6jROuhQpcv0P7i8q/rHjTY7nO2PNvbCgZsHQ2znkOZWmaZKBZ5hJ9xu1mZ1Y60ccaYSN2goA+5/MLG/T/a6e1hEIYzl/L7EPoNCXCmV13TDzyiEIO5oV8emL6b99wRgNkJ7LRglRQOY003KSpoM3AitM3gdACK1XWPUpSOTSFZgVKIoDcYMRhBrjUSr+0gWGJF6SEpJEreDnfP5C3YjNMvbMvKl+oV6/P50/a4UrLIS7yW5DufASeAfkMUy8zSScsMwy7AqGlRsezgSo03jvpyy4VRytV6APoNRJnnc6HKRs0EaIxKvWeeFAz6C+uEh4p7WqTOV2cgFMwC+AO0cA1e38mLw2GfgkDPu/4kDp/6uR4M2Cce3IlyzYjCSFNhJGMwQV6e5VYbpXpjmWVq1MukHMV4vy2rz+kMnyBb93bnjOA9fAZ1QE4OKlwpSuXQOMDbGw6syVTT3XAwMh9u4m86Nu134DCKHNG94sIOAkJHIrpo3qy1W59JpqUSzYkojUo5JUTVoYcHFNK3jmn5UeJtnzLi0Vzcg/ujZpTxEsbTXmHTEI56WRw7ze6y/tiFThtr+jSkAPU/CtnPtQRdtmate5uP9jl9EwJA+Qf7522bmirdwhj7R0dUk/cYKbsrHsOJCH6c9VJZpDS0Xtu7YyxJoat2cYcxAorPnBJAPX0fd9+yncNmVahMg7j/fcmEKVQIKsJEOHUDqPVF7LxyKd04+X9Abqm+ZwymGcNXnNdDQPIuni97/uPOiqfh7rbJ84ZNTEnciEpLoQZ47vBlaa7rcqMW8xFKp4JH9uUfR74FzatirkAjqvOlGINdv14zWGFMeAadz7/1935LoYw4vQmnUM1HDtR2nis94GpTr8W956EDPtazQ+IbuoRqsP31AT/xMtIvAJWP9Je1wXh8eX3k2BWhBTAu8OlwlcslHNLVEYTVwP6SyqQS3X4FpC6bI4ORRqDadpnL/sjQLnpfbMu+K0/K5JMO9gUkfzaSNB5TV56UNfe91XoJ6SsgwZYQ8qZq6k+iS++dAue3e32QCKMoR3W4RbyDXGtJk7FVyNb2ThPgxjGQafZPHrfWxiVEpZ0IzEKbKw3IH1rShs3XTkDU53Fd8FzoGVP7OFBnnbgiFk8+bx9yW3mWjHo4g3JY6ZvOHioOfSMmR30mWWPa96zewlexfPI9qAJdXEhsRA+PPFtCl+zo5ZPiCAibn8bgPggFpc9FZxw0xA19RKJJLdYTAehd8E6r36AUxwUKVVJSzKa1AzgDIcSjt5GRB3PCFzD6PLhAndR1uHLJd+Ele4dVPkJeO2kafmzvUby95xdsD3ACRZu8GpwoC8wwn73hyual3FsyG+wF9VbvAjttaist3s1HCRZQS8BqjeOrlFf0PAa6Hg0Tk7gL69nFIVq+PuVujmVaTBX/wjTn+2vlWTeKxASokQrMILdNcZiwUtU9iT/8esLVLbx98Q=';const _IH='ebad80af69fc777488f4cb1a0a3834289fd876742598fc3effb18ebd75695ef0';let _src;

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
