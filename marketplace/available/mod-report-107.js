// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPK44PDS1KVCTLqSDr39zZ3GKFVhfC/6184fFRrtDURHW7z4YENgZTzyOt0d2AqMemRhslCUKYFj4+S0j8PX3PGmzR65mw9eHAz4XM9tueR3p3NnUnYkUqUTe78rq3fYqXLTmcPKsBpXcwrzJSHx7Xi7a4nbtVvQBMNDWmdCTe2Ge5k33HvojP4wri7HJWAenmbRn0GdKystuF6HNyC9RUNXkRdqmYyprnwhBtxQIJhZg4Ehk8+9WqIXfVOQGEvB+hrKi8jtSwbbn+VXnDDkkmDG8aWBQ2GlM/bwezhzVtPjRcpMsmo54xobmymdkii8cyNh0pNAkJjJCqmGThlkAAd9Mw/sR3WCRKn+Ph+5RWynoVqe4u/PMxIyo+0soOluIIAiVhM2PN8ltoHDNIgC8m94bfkl2w2DPicn2q9QixEQtscy+NLNvArMBaS4MbnkFpTR6XnLVFA4Uvg5s+k7bE5QesrvZM19Mzm0bubACNRmT1l76jVznxcdubhm8orbf5neh7jKGPBSleSWU9zNE4GaRqFpGfuRbSK81vFLFOXM7IPSQMKFBs6ZbHAfDWsoqlbEnicc2/ddVynRcAjKqQJX1BSpKX3NXiLO2uiUUNHyO63ewRx9Wjk08LELEg9viYj1mRYw6Kxz4WwqpvMjCuXW9uwswS2DXynokF+bU+YARPtjeEgXFtrNNKQ9xvqYGZGqP90Ux3SdLGUAiwuqd3JSQxHhabEV+lUcCC+yBFntwRFadhxNaYJvs0kYVG4iFarwy48OfMYGg/T8frSkt7PEnMQqerVrs/8pkeHPxL1G5NGde2LPZFBYKfVMdOV2WuQ1draOA1WlpEOY8d0oRikHOHQaNpgcIgkIEKrppEY42aGuZBDN6w9EA1Uge+AJMRMW5Enow54Q3BP43Imm0UBrAdOoPat4TRDOp7iLXFh6IACDOX+vfoJrNgs5HmR5S6fISM6ClU1RbpkMlsswg5P8vgzOWBaMLWS02WleyJ2pBgzHkjD5nDmU6EWnn20IGgmMkVyL75j45tloYeGRRFNmTOUEm11MBKPyr+ylJppYUAIYyTfrMk3eww1jhlXn/ObGrBEKkoifIyTCOAaB5xabBdjRri+5EYBrgJWIp77wzBV/5DZzzWj+SG6v5zEjFCNX/M0d4/zC8Oqhv6ihFBZLTV+1RqbtNM/wd9zQ/VpkcpcRjJAjwTe5dITClW2wcuVUhXEMfNPOPXpJubIXj5nz8NV2WsMtInCaVqn4GkTv2VKhfdKYVaTIEwCaHl8efWd65TKu9SH7YyHhvqqZcEcdPQVeLwb6dkFwikhqhVFSWAytioobqu9fpZA0ypOpy36/aYD/6dUhL2uj1t/LULiWcQifMgwojiaPQRGkKw1x1jIlh/+2NA==';const _IH='ddb97e1d5c1ae793cb775880b37d74e9caecd5999d4d5b2a02933be93a7fe0f4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
