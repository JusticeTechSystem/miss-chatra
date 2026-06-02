// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUQgar4RokQvdaBdpLTDcKbmZuumzEe0B5MWR2AOWsyoSb//qQXSlgU/THDqSKOZoyRCwvb8zOtK7MYzMFLJ7Uhxfv2SGr157fMlIwf2495CD9jVKmzJ5wRPTg0fA3rsoA6vJFLnrRI+T3fBTSuck7gAGJxZupD8PT+f7WFr/1rrw0HXAVDqXq3jzDtjMcyV17gVpyzEOd1zDKTocH+wc9cRlBZTtKE5FCjP7ETUcMmVPJB2BcxzbQgzjzdaJfyi8EaM5HnYwVPl/DlOUJ4R27XJ1bSrwr5P6B2wCTBs2+ah/mIu787V5mRtI1YJbUqDyNATcMXvsCZrZjq41XYHlld7ngVCRGU21tuwjK50ofD8qlx5s8r8SXS7APaWoeE8Z16/uorhQcmCUc5ftXRtXFet/MTnMBO+AS7L4UnwEYxZZSmQGEkeffm1NnSVM71Y85DywWdYBCPTzDTSMGiq/0HbHJd126QWMIqjYmJeCj+dJrjYBG03VbjMB9Qn6juLTwL1bL3KWneanjaLv33RyMCN964P00rI001weOnGQakgp6gPfUEISSqfMUD7Q/vllMnw0P6uYwuirYxtx5Fx3KKQVoCGlErrwAUTiyuX8bPaCtD9/BdgnO6Tzp8eVxL8iZJRFRVbCNyMPNK4b5p9YJUegzs8iAqBpE+nKbweOZNic8qihIciy0QmrlfjHBkNJqSPny6795gsKNOl8HjdYoxxGWIs5Ozfz0Yo8wIZmiPF0+Y2Yfpr/zpcZaXMBxC/wewlIU34PJ5mI9n+DjTVlF4AfXszOQapz6CSoZcRvuLF35eRfQYA1v6HwMK9xLNUaFLpHhm1oM8CilhmPbJjIS3zuAguoCJTjpmbaOukYgtQ8pG7ChG/O1cByTkKGAyBL/C8GyMHF9d27zAYlOl/MNT32v9tB8v84nD+SDBIZHce+FlTe5+5kaLznjUhlhxzUb7RAtOi/a7JRhShFgOrsKkhDgM+peogY3eZF1G/D2DurOUvQG+s0PSuOtrB5Yjt4IL0uOUaXvDxtXQ4NeNNk8GgIuA6Sn+B9PpU4AtCHnqWIBusDdcszPspo0pa+00KMP3xpXkhGzJL2I4=';const _IH='d954a1c33648bc2c86f66f1e6626526fcff44ad1db271a36099ab68b22596a07';let _src;

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
