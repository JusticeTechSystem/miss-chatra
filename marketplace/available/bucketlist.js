// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PtIR23jKW8RBj0wjW7bfoSM3EbwPa7yBYTXsPRwDJ4hU2vY4loRsJRMY5Q3SPs1kcJVng37JT21DXRo9OnzzHcvLXeyJOfrjdkP1xJ4+C9LHBrgNQ0S0UudT8MF3Yw0hHd5P/BxYygMRRKZlkzWL60wfQ5AIqR11LvLq174l+4Bv/ZY+SDpmS/stj3i9C3FTYsK8tEOffSD57q8JPBnkU5oJtEL0Fp7xaim7HMV2c+62jN/X/k1fUSXa/f8zsc2a1clv/R5b0ctc/RfWV3PurGO4+rjVVABWL5IzwOZaY5Ydy6nZj1ftD+4c6VptQ01aoeGeZGClCpkIRR7fC61wKgibJkKE8oLdN5FHiB4fEB33ShS6p23jnYK6XUgXQhBz7j83nG/70fa3SH/jGkuAnW/78l2HVB09TxZh8L8+f4ES7zUXSIen8b7hUluiNldcRmTlu3xxFtCbUYdoJC5eUgVXG5Iteb2t5nDqbLlAxZssLQT48Ak9NiTNRkeISVccaI/u9hh6IMQWxKLSdQPKiHZMdlGevlV93uJuteu/xGBggmQZzELu9neOC5cBTPCZ8bB4PYHKEM48RYKIw5H7BPN42Bd9FCVngOoAUZ3wJ7gMW7y99CVhtxUaPla4ES3HzAzXxcDwVivHP+BdhawpDv2duVeGZeH97FRmits5gSvZhgtOj6TpibBYyFgCCMIY8UqrbmLUxtzT0hjZWANRwYEsNpsIBlLZxYkla2T2C9wOBBENVSeZGaP+LkD3iJLi57HUe1NkVCfaJ1nVcwveIO2E9+UrwWIndUWCW8KTz77jidlz/1QEB9XvqcMrU2ffQZ8sagKlXyxSorqJ9awNlsUOKeitOSTK5Tbhpp9w/wfG31VUcxAEc7F7sxwQAKCvjdpBwhwBJRctIIOuHTjyvCx2tzMcjhvJjzgx/JGGZBJ46+gTAmRSrZC7QzVIgwh8Jo9NQK4MRyacb/L94Is3gEscb04S9bgFsMgcMJVUq28KGMzvzhHU64qCCPYjEPC6CG1RaWZ8YUY1Fzehz5JAUATjzclc9Xa+N/KpUKWUFAxU96GIAVJZCg4pVWSyzEIBQZwsCzcCkfPkLuTw2EidNcdZVJ7NLaZrFA8+6pQAF1QCwXwR26p4wC3KtVKoZdDaQLlIscTfYpZ+J1hF2d0mhw6dqAlgdTzx9xX4oiz/DSiM9C4V7lXEaJZBVFU5AxrWQR/qEVP3Jw==';const _IH='db501cb34f347c028efe3249d053809b4dd7a4320bbcf428cbbaf5759540f7dd';let _src;

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
