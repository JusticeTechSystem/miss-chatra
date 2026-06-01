// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4PcE88caQUvjH1uzlRaCEEQ5csHf9X4ZmvximFhRcyGJkDZTA6mA3cfbab8yxEG41r5Hg6C66GO3xPjSF4gN/cUQdEYoGuPA3dNLLRy5vFZs4RqFQ252ANd0tOmMpIl+2bHviAOhDJUont9aNolGaw9pyTvjZT4OdUsdldTMG3GrgvSJfeH8wvRF1dPfQ5h9fye1dWbPFfiMnNMXJN8clQ2qN9qiRSxdIhWUrzEXUfrKcrspHk7AfCzBPQDDUuqicb+gDunFBmB/lx64KacGzp3gAq8Inr3ec+PNXlO5CEIUR5kvVM733vOGZCbUBGpDjPp5L9pVujob2sFlYEItRXUvGDhPCQBeuRDeK8iXGaW127Qwhr/BU2Ou82tZmKXFCpNL/v4PT7T4uYjlwCM8UxqNjRY850s2H6ILXli+wAS1rtnagsraO4WJboxpHWPcQQ1Qzh390gfxbeDD9C0jjWiGKEI/ziBvnVpurDY4yrpsnn8rfDlLRS6YRdZsdAWvwGv3Rj791+sVjEmdVXN+5Heb3YNPx7a9HLzet7hOhiG0WrTK+P/sgDFo+saRM6hhoMrIyp92ahQ2HaP8vo2SEev5fr6qfic5vD7LCiqIccEtB6YOA9ZyQdgepW7xN+qpdDqWBKfBTiMmo8+/9YMvdhWMpWrjF8GFmzLbdznvefw5+HjjGu6ixUpqSlmaIO3nK0TU7WbXlxlXx8Wb6H7iXqmK2fKgCG/+crUtf3rPoKZg8E3YWkJYoqbs01MFvpCYyE3qgcDV2dNJzw8Sx5yoFRmIPKw3oTCdjNh55B0LkUkuuvGb8p8hM5Ejia+uh9bSWBceMo8EpCwkc+NeFF6HXw2PzjRPvJbU8hr4Cid1pndgzvQHul159A6y166/wfG7Bwtr54OHYX79SdqPhnF0wV6gASar4lwgDPCQOZaeSvDxO2Ofc7/z31QhFD+CGVJI5BzTqpNZ18SjrUP8CSrlvQOTdUxal4MydLSWWf1GnFHava2xfuKIzrDXBR5LPj3yhZssvq+emDfjpLOUrb0QHBHtBe4O6kkMIGJSEmRWJrjZq6r5w/rVL5xUGIAiX3PSA1hnDxUz6CtWkhqPy3z3QSeYs9BiXA2rFHmxRluOQrFafLAE+o8gOlNBNELL0uzySqfmP/wC4N6ukGuSoSEzraQpgzZxhGyCfkg7As4oyzV+Po6AVLZDIbC1tKZYZE15BW0KjGncvBnOmIX/hhOcjmiD+Ob25gs41F2rLe7gGKI7WIf9mTP79ElWmR/kMAS5e4iZGRMcsK4CkmdDqp6smYwUJDKo0wOXMky6uNI2NTDhjMGTSR+6VowJ7z943Yc7JZz6t7vy9RCkKwMUhWC7zlO44QkkGB6YKU=';const _IH='beae13c30a947ef59691417b2dea652764745d5eb1a6e29746daf0924a30f638';let _src;

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
