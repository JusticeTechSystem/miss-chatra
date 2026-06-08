// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OGhACqAfBWZdJIqllUpBDl3C1DPtNyWgzVMwDLvx9eTok5VJZQJhZh4r8IKaxrk/7F3A64q/7ZAm9+jFDhKKEV05xkzP30+8pRdMFmyf/9UBYZ6PJDuZ7upunHNPiT28hbI9NCV4bZ6uP3NzMAZI380LWkSunKSqvXmPC3McDIE3doTQ0r05wNeFJkAlWBHVaxZPTfF59IIr4TKeIJQyw3jM8bvPZwYptgqSM4mIAxHxZbEXZ/UlarOfwP2Scky0ojyjsVrX7s/bSrkXsgvF3RL52VO5pornapQAYUB9+PjYVhNvcK9kj+FCXug5ZhzHMy4uPmm/QU8xK7L0oBeUpt9mLsnXhYLRahcyQZnUM6TjRhhyX20t7HRshmffhfEcEOUHsR7bwOzWspFaEpSCO98qgaxkhuQ7UTFDpNf2nNtMIVcFDopj4MiUhLqC9cEeQZPC7wRO8JiSb7OEbKap5A7+ycA8YvpZvW6BoxDKkhVtXiA9Vdyc+SXciU24YHiWA65gJQ/2XzOy9I08b0sTJmhUT8BsZflt57+4vxFP2iBuKwe0nqeGaoB8icBT1PA7efTbybmjxvjX5JxLutuuCGbU84OhUgEE9UodN2UBfiTu50trbG2paKQ1VzRjaMCqrCOYy3uhPfWloohIITPcEe9rjbJaGQzYaU6KonnxCwLrNHTkhIDzU+Gmw1u8dJVd/Nnjd5YPh98znCvWELFFQmwWLPxrhtfJJPofjuxesDYb9OgrUQiv1xCdNZ+KN8vj/J29kTAVtdMDXQYe7Y/81/cw/FHHigduxRKrXJVXK71d9j9xOblzHpruoe3u0AuBYQueE75pgwun83QMsmt4OEqt8bL+TCmNKSKoW4cEIBikP7Cqc14G2SqBtbW3zsK97kZeJQVNNZhdXp1QSqPE+EPuZyeIFtJ6Bb7BDWCSJgLQgiFn2wysD6gTzGJGeBfFb+Llwekl/JPizfiKfSUmvjkk+bHRqjCjZm4fYv1uASjql+1k6hoeQau35ODaBinKP9nA7kEX41SV1fPC5c06SVATcETo3XTHFHhV/DHR3LSuBLu/R7/7axrDjqsvjk7ndBGm88Ls/dnSsQMU7rYboUdCBW+xXY3lCSRXXJGjklr4io32muu8DQlGhysiOMo02MChuoMCMqXs9FhgXGqxEat1Fm3s7RsJG466qH2rpFwlFni+zrxTZ1ErjJcUHXCgCtbQa6Oayc7bG0wNOD9cU6DMRKWPhK6AHc5aejoetuya1TWF+Uw8ULka/G9xLjY/ygO9HBWwKj0xUNVWKnrrL1M9W1Bh6T2HLWZGs8IbjtE1l1Q1iluyPaOmVnimd5HbAbgUPSlbR9FAADKFll6WfN2j1SKe3dkdh+dxqqu3cYu8L14W1TDawA==';const _IH='57d52ac113bcb2f3b52d0f557a6a8340f7925f13aad053dc7e97944f0f9a089e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
