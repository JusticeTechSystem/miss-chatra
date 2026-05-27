// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XREiaFu9b1OHab5E61jIDElMkl6bH1ST9JOSYwlTPhVsy7KPAFX7l93I6ANoz8Pd0pepT7nPYiL51/n4sM/lmqS3KPePL4tXQv3Yf8M0pknoBveOLwkpvG92+6vw2J4g8WxznmlvdFL2axAD+42Myx7BGN1cUZizEZDWrCzF2qly4DGV/sHmVLLj9vjhX8hBSG2Qp4PItVYQQDttTuD7JXqkMDbbV0TVM73epdeogOBdcA9h8nPzY5yuFh3B03c+lN+D+gNJoZ88kQXVS11ZCdubYy/jIBG3FmQCEYmhQ4E1lrVPI1x75sedaBXOk/VbQaYosoGSgLPJdWLkYh7c4cLOyP1pdu9gpTLbEqykZ+4JOFcBhGH9KQfUSNyEBH1oBHCubE1ZkmSs0YRL30Kup/BeyDL6bAOieiglCselQBJ+87BPcIqudPuoiFDUZjvgXRnI0EPX5QRzYdr8w8eShpH/TUqH87H4+JHI2M1KOXRqr4012zZZftqxEJfFegXVU4hIpa7wELukb9ryVCbRtA+tN+jSp2Yd2Y3ircpsgn4DsAHgvJ1ak8GjWBorCyPjS52f/TiWqBkyqVYy5/lBVt6OP/vp2P00zR8u/WNfRPjNg0oK6QV+AhLu8XV6KgGMf0ZODXhTdn1pXgTSndAshg4unBuaAhTJFEbMaHu7AjKEhFshHZjrhVjo7kkyE1R9GsbgqdHUknBXTBSSeZBg2e4TpZQRyrAqCfGIrYvpRiuMsuh899yrw/a2EddpkE0K+a+XM0cGIDDQHAljPd6SANDHRZMd67oBTgRiil+4kWgG6tYHcfJyWQDPIirgwBMxeuDdB5nugp5uBIMDdWtfghBPEK4zOhZ+N4nOXHOkz8oiGC3ki+t6dQvbIyryGlmMZt0+axWGoC29sbZAOpZKzIlaGf/dPQxASUvyra9bXxcS82qPJb+2xYI3cK6pZkXr3owv4sKViqw2JJ+5wmXhx/W0zb2Ch2kToYoC8x01WgXH46veMFaLMvdo5terb2jzjfbQCw==';const _IH='b4ab503e713b5e4265cac978e96aa1cb4cce2a41cb0c388c9f339ea76131987b';let _src;

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
