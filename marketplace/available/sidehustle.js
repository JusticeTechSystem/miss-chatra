// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RYjM4q4pyURmmXjXH/FilqBzeK68DS5GHkridCLeV+7c98SkbqFglSBKa/363K7f1R/bBDSwav1CKJQHCZzBoqtQzJ0T0PdtD3FNknlqzBJKGgxjLJ6v/w6crzVuWtFLBvgW647iq9NnwKpBtEy3S/+6hVdUVrRegTft6m8qKnPGVSqkbd+mwUiGZZtHghNg+4Ep8N7tQD4aW9gSMy5o5gc00P3NqHaJ1AqS1BfyPbI0PuvPMQ+3ISMJR7uET5Sb4iKp2u4UFDFHRR9lc/iFXqkmG9z5vtM6kjpTMmDFdIe0kd9a0XGgvjGXSUL3VZesn1zZgyr8m2RQqpYf679Japt6NmnY9R5/aMiaN8WbWl6wDrQWhAuvt80XGsEV88wMlimCnmVVwhKE29Div524U4S1fO3BR9TmzYESXMEGziBAq7Nh1Z1nWmJJIpWKp2QLmti4bAI9YArVW9v+FbY1bX8GGXxESf56Dpqbnz+e/8Xy1kyXlh9PlzuP1HbwUzYuNZ0K2k7FlSt+DAcGlIsMmTVlqvmeffr6q7CI+2gNFhZR4rrfmlwmcGIkvG011jTYPBO3Rvgc5/2/BaVWoqXyTXo9D2hN/P8RP7o9PVO1pk8XTy3Pp5FEYiLnx72iuuNhDbqDCbdJ82jKobPKp58A3N4MgaI6w4i1tbolEOjY59C5DL/QZ9zovxEUhLLGEq8otoNTaneeWZhaJVp7dJbsr3K3NbIdK1lyelUwYRDxdDb1zfA5rz685jm48Tk6uMQpDb+3I0/9JQifCYz5cidZPnKnLO8UWDJbY3P58I9rS6EJkQ6xQo+NRYDnzTV2sSsXSmqnFSk1Uo4/NtDROwG7mJyaz+PxArlkhKEhkWcEfLilntcAvJ52ArE6lJwuRQX73QJNBkqZQZD/tvAsqvTCEb4giKtwDwK8DwlfvJ69Bw1PcxiqTvLWB68I18gpOnRmYYS3Ey68aR39sPreGWSZVd3CoieTFv1RCDb4sZm/Wx5U/iZXJiJaNiJwmzeBJ8UJ0RI+ZrjqyK1F/zoYRNeJNWb+gEuYpN/GedZIMYMSpWftxp5IZnxdnS8xk6m0CgfXksycJ7IAXpt7eKec738GbUK9zZGTO13hx0i85Bnp2UFHhv/EEIZ/C1lni0hHS0Mga+TrPhqlp/wN3aqwV/e22W9jzuTvFVokv7RXNGA8TMFsVOcQFff5F3GHYK+UuzikxJycYoQ=';const _IH='7d87ea4cb7e9d78069a741c3047717a822bb4f46aed6eb2845a64d300fce99e2';let _src;

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
