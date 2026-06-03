// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S29yxPGaLHYeoXVoxsbRdn2rmPmRUXOXrserztEywnz0w2gE5xzFb/eGFXTr+hlHnmDJlRPSWXrVM4h3UXCqE+oxopVYeiM54qbJipj5THhUsQ/oMYju0ZGjBLuJ381nidS9HBpOfHFADkolNS9nFnC5ScVqoumQ2annGDZU2hON/f2SiDA59aVzfmjCFT9mnQbNsh4hDP6g2x4n9+ILKmvECn77UHTFduYZBWUk21b1ymQv3htChQdPXtW2WgqN5PFMFF1ImZqmbKcgNg/EDo0+VJzEc82tuSxRYcOa8OtAoMqQGlPblNKFbyobHh/l87qEgZYSfo6RwpbiN/tSBVYHW89HJ3rGzspT7tj8XjUgRax4tsFPOgeAi+Aknij8o6GTXUXgO2rOrTcXQYp8BSj+1qbYTpVRUmdtSzGEVi4/35ZWRuip4lq9tBRmTzW3sClOKR8quHXs2NoeXnq92vE0fHAglQZURlPA929Vn+7Y2D9S1xAnwqm12KfD4O9GVXNFOEdqAMwdr8BUHDUSiAmWxlPkfaSFuvb7c+SNjDaTqKup5sIu11+SL6xQkLKJgMcD4ZBCFWmqCerw8MZP1j3gGRk5Y/sBxgnPojXSnWbVrv710KJQFpvGEzXr++lpqSk5SayI/kCygHCuMt9HinQOOUVX4sOQFNmBO5W59mdYORz0GkRN+sZK9tcs3m80Xe+ysXkfdZiLHvbxzndihfMOr9nwphaTlvLv9zmEN2WzhymFpEp4kvqes+4BIPNKjYk4ikKXeIlFC+3gx74vXojZAIGUdsiHUxy7lkT6TiY+faau6Whqk3P5oTEgU2CjWevnMrj9jTDGXgB9IaXCIqKXNw8pBsmo1wnsmMUpqoxr83QEa9hgVbfuMu/ZPJoTqVAaSkwDr7VR6pryE3Q5qQKM+Ju7nZ2vR157jKNaUh3xWeYDuibqTNNNlFMcM4jQJkOwcE+1WQMpoYKGwYeZn7t/NV4pions9x1NxSuIFTxmC7oNoqVf+BMOK8K9jPHWMYxrPk330ioP2n1CWSo=';const _IH='8ac1fb0769f2702a70f8dff6d1e44c119eeaf96f85c1c35bfc1e0e4f60e62f16';let _src;

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
