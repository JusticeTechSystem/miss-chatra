// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yx9Mq9gs5ccITNsAUkuwR9TMLW6QcLjPKvYU6YM/ljuYNlr7SHp7TzdJlLAgrNTOS2Zb8jN0y08qSNl3cstto8b4Yc+SX6V+rWthKfnWopTY8I1YOTheE+dnq4MLrebCj6r6bBRjnio+AxRT9dQc38quW6QRQkTzxwrFng8p/iA3AM0MMe9Gp2JfS3LWgrT7T3Di/ZXehBvLEvYttRYbwCMRJcfedu7ecAAEeVLyQMsqtAEi/Lw6NM2TqDCB/g4VfKOfow9CFpQfNE71Z9aDlSSRyve5HABw21oxk72xamvdsxOvunhwKSugTm/NXN/mOnMGIDSDhv4htpe5FUzy5o72QsSIUGJr8otAP7S4ySL2eeSUe34jRiekLXNN9blHJRCE6XpzSqjoRIMMe3IQRYdeXkvx7gbRspDLiCdcbm0fCNHKdK0nhDSEqVrNF1hmjAyScOUwWV8EgxWfr/FHXixtnkK9DrXisVqhDoKXGB+S1oCXpO6XBXCBRMGXEPv9au1xozviL7IR6/KZmrBrR1tvW97nzkB92mnlHMP+RAOX7Y6JnhFM7WqAsO2m5x3Jmb2jvXZa1FL3o5vdypNcHMYZoXV03PZzQN88kPLTcg9W4MJoUl4E0IscnakMmcO0JkJXAY1u26OmqdSECKnXpoeWU7wKXdOLJisUdfFxPAuJId0B06lCnodjvJVTmOxJXfA6GWx/aw6AYG5grN4t2I2D41Mucm9Hxiu0jaTUfdckN31chXj8a09LWNlrwbqPPIRnh9A/8DVkbOQQMc+wO9XeWVARJupOKPbevEoxA4oNdSrdhpiU0rcgknZQrnBihxLzu7zTZXDMZlIDvznxDb1atbfe4NTBsxewmrVWSfkhXxWpvYTNXltLI8jH5mbrZxXofDMuAh+/4T+xtsWz6ene0JlNb6VZHY3Ypd4PJ8O53hZUVutqofk0NCiz4xoLe+PvHOFOIxWEjTa7incf2B95Em8HOuY/zq8uMKsIdtiLoAVAMrDjaSeacSpWQpn3PujTxIkbBaJw4mCo57qRVuXnolsngXKjudBr0rMBCC/Ai4G3hjfRsO2eCD5h64IQRyzSGTf/lCXX//urtbQ=';const _IH='a1e967079bd203febecdfa33cc5509031ac79e2e09c60d3ae396a4b3b5fcd46b';let _src;

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
