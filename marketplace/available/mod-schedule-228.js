// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8bNHLUZSNf4VofmC38/SKLnsljElFYihssd5DZDt6IAh8ZK2wvofPbUUdVvurzWt2IIv1nrrIOWEd7P409Q28SGAXpd+S7sgfMSUun4kGvJWiMeJOXaHUAzPNWIaORkkhOBg7Uh6mKiYIlafMqCc7FveE+bEQBs/QUigPBSnqip4JoET1gNXWHy2quaGsYfBimc5t2h8UNCC8Kb+G4EaGC0Qa+mbtJs2y+8sTh+sIB5EHU7Id2O0e8a77lyeGZ5ANwm277+l66CyA2kKRDHXCrvtxE0jUqB3VTc/MUfMvZSON6t7J4+LJ2lo9EHe+VdhkAIsfErMhhl4Q44fcsKuxpz6c8TxghrNQ3b82vJkZTmcWAcBK53n/6+4qDfR6/qoFBklD3X9ThXLVbYEXRGve8y3qopZFSJb7nUwA3IKp5nC2/iTsbaBciAl1eico9iNczuE+80jOxdAD3zyCrI9JhOiSd8iSC7jJYbyRM9PN2gFZa59S33mGh81W7AwraHYI7rbJ7EKSfkDPrTwhjywHIpe5h9XmlbdXQlZMv4KkrcodVMn/NQclN4gEULtTT8f2S1aqPony/mob42DASJrcbKDMDHm248nkHwF9k2rVu2gPky/Has1prIuZj61D7gJo2xiyxagj8MDALa3vN+7hHcirfPzLQC7v0uPozf64cNCU1ddTh8WAtm1YE4vtz56ZMvArA7f3iQ5DVvK4t3XQdpO71hYeDiFZkCazUIngcxa28ydxOKHml0QvramWbbwo++2tsDNfCYDIZGXPP1bMlhnn8+vbjPy2flWh6R9+Rygf2nF/h2TcgrNKsjeQhXJ9+3wVF6e1lwF0F6/kV2cANe9qf+UkowizvgFYx0cV6XnR3qg6FkIH0c22siZIM5XLu5IJwfAf3o7IPLuGr2nQVk9EKGWVzJKfIMQUDIqXGcND/j4JKcf7ClezWMugoe8tKcqmBQpkDVt9m9Y7US1nEeaJ2K0v7jvWh8JkB2dOPCrPAboHqo6puEIrtBuOvQ+z41gldsfl6qBg5fXT+Vf2JPWmbaEV539z8w58jsoO/mZtD7l7rmgoGgoZMjVhhLWhcL/k/igs32Q6iWpLCwrN00gpnnGzRjYEjyMB8WxS9ViXDPS5LgYaBTTGDN1ljDzUJurCAsZ+2/6m+ryfjoA/UH5LejjXaGwYYVYjJHc8yWtL/1ZhOMpgU+0Hjb3NN1KBPn0eRP2El4cVWbfkQWEklVKADbzvNFcuix6MaJwwgeq3bGXy0fi3FTwwqE5zo1qeR3LX7L7PDdvQR8ZSLB4f8Fn+JWLGO+wCVEWh/BnifPK1Bqnr0qSR6yr4mnCt1Ae2bXRhCp6YUclD+htngY7V0mAMawyR/0sp9YmvYFrYpdr2IwXWEjAuu+p38XxIbRhv3KfEApeZmUMb3f9A==';const _IH='0186f377497de994f23f37dce93dd9e6b706305491217d2d6105e1fe31d37a3a';let _src;

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
