// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwFcdZ8BcH9jnVTr4iIlv0+4rSjsDV9MB/qHiNUfdfmleEzMLys1iiT+5CHCHw0KbL2z7JTdBg1DVP+MLX4HI1fKmAgtCygyy9muK1TsP+83fAF3U2dxmEB7eSlQ2kTYRTJsnTJZdxa03FGvFeD57roozEZTVvNBzHb879tJT4fkQIW9Nez1sOgjb41HLzNxDMeM9WLrpVTWAnE8HJ00qocZQFByB3OZJmYmfE1v3Fi5GiGFRI2dFaSHOKflUP1kuyRwJZmJ3vKOCemAXq8qrMtebMz1Ud2pyWxAgop97UuUk5+QyuS9YAuIqB1cjshEgiIecKLXqeVe/3sDbmxiiVUDN2TWlpdpYeGjVnH9s6hvhzqB+pY0lm46mjluy1DhMhvXAe1A+nBRkMTOQwnDNXfp27lJjCTRDWOYImQeg7CfikxWF6b+A2UNiH6Q4MvzgFdAeOTy5T9yHxZrvtJVaU8N+O7P0W4t4KXquqA8bOSsabn3de/y8hVqJHptWu859FspQfM1b0Qx+OjhKdJshTGtmUNcPtt2uG2NCvDBGNB4H/ztSSz8k0Ww/FLU4D7WRMl02chRoCaESDGd4aUDjh0HKGGxsgpsdQ6hMWsJYTb0HYO30N9QutQ0k6nvCGSYNbR8By/JR3vykgI18Lu4iL9Cpp7Oc7imHwzKamIVXfD1m1/iE3DcnGTJlfJIOlMsAXGe3+wi6Ycg2UayZ+wHOi+8DIRQRr3No3zdMhuoGTaAvKow0Pa5NGvnpANTBZzsfRUuWEQmcNbcHvfQx79o5JuX8ZXxdU0z595v0+VW0qgBkzFKLD7aJu9k93sqCf5c4rDZ9tJSms2X1edl3q9tZKUN/AusFJKBPt9Z0D5P2S79WtxW2kYSz/6urGxSwlnr2+ERXXguDWyPPnZN5Y+pWSNK/7OEp9s3BNNY8gg6U6upk1GMymw49LLTcgwMAfzUTIAgqdYtH4stwlkeRG2FHnA1f05gezQGjZtuHwz2AINgM8sFoMBQkbIY09lJOcCaF6E=';const _IH='0f64d5dbdbb15d4d7f09523205afb4238171f9c087367281cc35ac2981b4de69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
