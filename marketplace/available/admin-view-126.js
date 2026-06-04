// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OOMYE2624VRICC8PeHu+mDQwNmgpONBW8VvNA6AkcwWkMSdtR/YkIXN9Llyg+iiLlCjk8PZvmiLAUssMWNPhRO3AVZ4ZwESV4we9kVZHMgDarOWIWdjrvP0Sn8S6ni/MKl2s09D/nXawPAIhQmAmxRQu7i/fnDLhOwnxFuTiC4j/7TCczEaUAARF3V/KFw3kC2Digl1LqhBdhs82hu6l4uHBgtlxrJl1AFAMaKDDGTAJV/MgBZyRrkf3lQa/PTp5zPODvOB7F7Xf7vVF+yG8+AEgvUxKw1RPSVEQdJ0aKd//7otH1s8c8+f+hHw/yMx4NIS3lpxR7lCO7tSvD8vkIZodwM2pFRREDPZxdeRHcyA5XOnVz0p06ShXFqmC19TmllHETBfKo0wb/FqprB5I0rDV3Hn2NUO7ufIr7bRj4yYBEoTjWhhzC1S6wHIaJpO75Kv0N+MG/rnIuoMigWNfjY0pBn+MQAVTVafcQ237ttxiPjRy9URUrz78KgOITk5UGFbv23YW2vcoNKVVP1gDOVzC3+Sck7TQtWId81l9/lsbn/oULbaIL5ejoJe1w18XN2KKB4wcGuobWvoLYTj8ADtcpg9zAL/TcLuPnKiOrRpq3yD67fJgEzN6zrvQ2TBL1OXvGTqm/RCWtLPkKgZ3TPaKm9tAcYElHrfGDkSnI17tXCgoctJ++h9K9vL1ETEb+OF04bVi1iEWBTjZvu7ZyFWNkIQWZ0/A+Rqhx3wH3PfQlwwFuHnMoQNNSN2cB1bWTUHNbAI2oyvp01mCUoLAkli5ism7oOUsw7UcEo0qO92UchRXjq1rBHqjCadKINK0vIz8N0AEvk5cGPwrfsAhlgBUXOZBENBppbX44beKTqjyWDFrbMdnsUwi3cm1m8c4Tx+V0tX1I96VgCbhLkAwpBk6KUqXJlz3f/wN0p2pAne+GMfCsccLVKG1hBJcy27OIoLlXTBUNW8MsM1ZDVuowjrtwiRJ/Zsi1SS0xeA0roS4yno=';const _IH='09c712e7b49f4339714844ad9f3de7dd96f6cd9642282b05e6e1ef6f53ad244e';let _src;

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
