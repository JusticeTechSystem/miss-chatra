// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ13xk4yU6AtuUX/cXmeDyWhPbrkrJdIKEY/SGq6IF7lok4eVcPTWjcc2vELtCROpBmr88tTA7rVrVPZNtajLIUj/EYwVnIgLaV2/mpaUtd9yK7lRbrQd60Wohv5YVrGSPickzJhO+MxYJcS1pe4nt6uiMPD+2MRp2i4qW/KXzjrg1yNCfyVae2HRaT3x5d9ABU8P/kX7eCamKr/LTNwhtuN+BJpMxgvnqf9dyJsbXelFzAE2Tv8M5IuMM4zpHy8MP4uLS5u05zwg0iJoany1hBzOEeq25/59xKAIJo2uLXMSCaZKXpuTlpy/+AvcvMSrsB6AHgFuJ7WXWp4aJr2ehFGJ9wNaJb6wV0vkfDos71XcMNYNkgwVY5kXfm/zbbWT4xIQYJRK0qqmuSuBUoAgIQIxE12xILzvckdszXtI8yrr8IY7w73KU8EgTN4I8qOw4sa5qWZa6zypqytW6kZV/Giha6VjrZNcBxHvMyh4Jpw6MU16FVGmxdLKWdMfUEncLdd4CkZCFlHjLKjbddvucpaHMoYt37GV8IvLAGvXEmUQRs/7gKpr+rTCU1n5vA38ThFNybKkFZGo9cYB1RTOjaUWsqf2o0Jhqlo0R1aSh7CKHi/mIx+4e4IaCvz1jkflbodQjyo9b7Cx7HzPW758pSQFNNO1H028aMP090MmuT4ZUASd+BaCAx6bFN+3BzD+MP44P3t096hDO/mwDxTmlo0tllAZ+ik0Rv0hYEGfWnXYnGHl6qyewNEj2N/Ij0t7QM5/nLqi+2ObFcjwujcbLD58eR4OGkoUhk2IOlJ7wyr2iUl+bRqPSuJf54W2Hc97pbz/SpBvLTQUa4MjP1MztGznUj10Lgdjn1G+T0XNGzz1FmAlEj8Tqto2PT2xMHl5XXEBx9KUrOIhs4Qt/76qN7HBwF7+31efZVonmLoiAy9O62u2Vh5wnkHqQGwOls8P+HpLMn5j2fU4pqIHFW5kRfUu571is5OOiYqLnFirDPiRkp0h+/ipuZnVi466ovSfR0LLw4NE9GtwdGp6kcOxycmA3LxgYjHX58CZKT+B/HiNeaPLgQWa1iaV9mnZ1qshCMgLWOiuRkd83wzxYI0a1fUA+rVcXg/T9IqdRq7xw4bzj1vzaEGN1kkfUH9bxS+h6NGvczE3NPkJlw1dp3lMJ0yV0ijZ1rPbctw1N+Nj4NFOgkBucacPNK7y7GPpvrzo8sdgWP59c2UgLdQQt6GI/D5BtnNjGqtbZxCXVbNlPUXIJERCZDeuV8W2W81e2H0DsrZ77winqOg+1L3J6E+9rsaYf1PDSlnC34fsN3C9W5VlYXQb0s9TffXLern+FNh9ynvOPgYxx8WUDcBXK3v2aPwk8aFel82sxyI=';const _IH='a1db662de591dc641d46fa7db63c8b0a8cf5ab4a7a0e3ee4b4f9372ab8486cf2';let _src;

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
