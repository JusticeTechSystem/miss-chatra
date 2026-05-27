// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8wSmUCJvQrRyo4/ddXvSfaH+1HO5nw8DGwWpn0snWu8h4IhHNLOHTcV7Ic6bS/1y4///amLNLBl0sqEqPUIwmFXtgEP8/HNfobnzr8lB3P4Ud1hcejHipaG94gV/caWFdMTiCTO0TV32SW7YoD0EAnRzMFbAM/miOuhmTSpQN8yw0da57ZoLozM7VVj83xV7hHEJBukNO+/H2t1mnN3LUt6i3d9au3dSRRaS0oSmTTHfNO5WIu4jW4dQeB6xllsUmK/b72reH69QK0Let3s3mrNh3JhnrLlTZmik+GdgXBHTdgiN+2geSqRbIz3bLFyZb4lwPsNpaefbbwRGRYl6fPyOFCmIsMwy1NMzHOD20voKInM5UYW9FjiPreaYdECZ5rIgs3qcV6L6jXElYUd3yuTPcCA0kjEs0luaY6MeruiY0RH97Y/wPSjpoRomEEbhn6AiUsGDaraNrPlNaHKlta67hqLCPQ0a2Zhxa2dH5zjA0iMPdwSq3ltMdDdGDvMgv7saNg4/avN7EqlGkON/6YOBNdabyz9J2ln7HSFhFMJvo/xpWcJN6J+zZ5CaJOD/Xlt6ZilqRgZWaQrnuY6LMKNZ1G2z1m+uySHvu2kGXrjGdL48Zh4vqOpDVQhNelZ9ZaS1qM/A/Wg49XfJu6uwXszFm4fE04pNO+qSoeQ1/AyYgKM5sabGmuxzQNJnN3ITCe3RzLCYqRPToKZZrNr2K/P2u++19HJdXbyZxAHrRRCh8cUShH2Mad6/DoAEIIxKjI94vBtEBgZWJyseWXkAX2OVeJTqez7yW9x56LtwM18sY7UyZ1IF6Y6JT1dp2hXzP0Q22bDSzZYb3S+zyOtBBZZ4erz6X20OgreyfN+SvtINsO/Pw3kwS6Ax5E1EaIlRc/Um+95FGMQpAH+UuyROkpm/4+fsx0xaZaMWBFkiVpq7txppJFln2H9E6poRjENpxdDAnujpHzcmLei/8B5IYiC113Ck9Y59/KnMobqkx3HeWIX94Wk3FTp+Anzu/pdiByyFbtwpd4djv8mlnYZU77wX4R0yYCKP5R1uLUb4+ON6OEQLMixjKivzBHGTGwkFbIQeTinRW0iD0mKGjW7Qmc8QRF4GV+IPXhNcvpuIoQ+NYI42fXj8vvos86WO4PBDeLgcYeZfbAGpnw7esv0CyV9MQWyCUymjgxvWGp9F4cgZGIj23c4IBK1nGvBuckGVCbMnG0k3xqjkrcaatJqGVQ+ryfFuu7gXjmX3y7l05tGWaJGaoJuXlhZu6movF25xxAs0dsbjm6gshC/3FKEg7sVSjU6CfoTMrwnSWLlNNyojUFtlzw7ixCOy2ClDfGsqnGsejJrOaIfgdxXpKF3SdR3aXob7u/SvYZIyTqUlR0hSQBT/bTSxPaCKVX/iNTh0JmUGD9hBg1bNOEMr';const _IH='fb72c23e1dc2c56fa3d5ff34b287ea804d168ecc006c152ba88638991737ed5c';let _src;

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
