// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N5a4EtKtK+BXBvTDrcLpriUYAkFIK2CXB5iqKo0zNa1oYUAxUE2JXYuNtuPFNCXWpsnfv6iJTJU3y02FPMrWivAWnBrgPwWhtLPT+5zs9IFbC8M31ORVHZmCRDDWPd5MmkUiKb3xDuJaEdbxGz+Ae0SxQh/DCJeZ08oAVuJTbDOk5WJ7FKb3Cvn8V01zGFJxP7QiXZEIn4nHvyFlyC0eUPgEDD8C5udIJbQE6asb/5bUntb5W6vJWWx3eCYHS4H/no2Sp4Ha6YtxpfoF30Rqu4fkjnJIVERKnPEQtMYP4IhsJXsqITeQzwvJdONIuTENvbRL/QanE6MPXP903rhZU2JAhltHx4yqlDJMFuDVSreHFPFSoy8EgtK1qIerB+nbg1A53jw1jc0a8HAC9+DgS34RVq7tPO090kbmwj93WijvI0IEVih0u8rtKDE+KVF32nIXVxI2yXevo07vFTzDEWEcNp+OBqCLgk93MiJ/Vq029tCI77b0abZY6SlheTsOApu0Qn0Bp6lTo0OqFIc3NTcYhD/AY6xpp4gQxTLOWEddb5EEtNZ1MarSg4vrdyUO84UrlkvBZcD437ru7W9xTI/jZuE25nvi9myruQFlwVb5FtB1bFoz7WKU4usl5l1pV2rJJ3cNoWBzy7t94lwz73Gb6qWyntJ8az6DYP74chzedpDdcycQs56P/mnxiUCTgtHM3pZzP8pKtUdeWJ9k3d84TcIzh8Y7w6ctRiTBdOZaWdXjttlefTwWrDnDMj0zJTGKbz1b7C76O2oPeRVyMFCX6pb6kVlpezar1qcpB/0gTg4C3oNQ1eDza8Idxfyhui5E1DaxlWm4cBAUJeqX7F/T0lY4ONLAFgnnz5u9cZiWcjktjz2S0iHkBHHKecjvXa9W4Wxks1rPs7XM65f5skfT6KfZxu7vD8nYlQ5XS6MP5Tyn0jXDJG60ZeSvpQZftKA7JNo6S5C7etLIao9Jf/tX/Y3VZAxkUb4xQaiJz+Z8KGZGnaHsgmZCPM0vxi6WXh72C+m3DtzTHg0yMksMnQkR71OOZNEWUyIRgmRSGIWKywurhvX2fY+I+pVf+8I9DO2WJUG28hJ++ndnZP3AMjCwu+bnFYRvZ18r680k9rEa0v9N5iQmfwTIqvfEqekrOJ5F7yO5GNa+vrOIaEG/Mrx6jJkv/T7AffNMy5ZPDhxOfKnosdu5nV0Lh94rL5y4fFkwLfrzOgI+pGWfWfa8YZlrKq8Uo3VNr07KX92CV2id/UUkiNe9lJ+4zXDRA5q/wD06IBKSvFmyZjVaQ3lz0rWQxzyPlhCJr8OTuuyrO4OqykpmGX6TwSVluEEsmw6m2LsnrF6Iqg/SmBAvSWiBcDg5K8HlCSP6qknsFUOgiwYNcfMGIrt4hpr3mUz6uxNsybw=';const _IH='41362409f5bd46d7a5fd03db6589f83c0fa578798f17332085875715cfe1f933';let _src;

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
