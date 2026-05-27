// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q8KT7jiMdCK0Oy9fx2WeV638WagCTMQIPzmvzRq6KmEIxbCJi5kexfWCRpn0iez3tZqc/IfjctU3FBizT1lCJIs48LNcCL4xaCqLBHrBDgZacuworYqqLJnsUjWTRTSwGKXnQ3EBs8ppNp4++1E3tQJeowrsTdlYI4UNtkl44A7WGDuBLvOGMMs3RxIIRBuqXzA1vTkZ9QNlCJc9YOpDjuwg8NEdBkEcm0cvQ/f+wVweh/6VUGX92IZW//dPYytRVMq6dovSuCaYl6AB9VJ9ZjEVgHd22cG7uogTTBBLyomjG1W2wJUEb0wGFeQf+rmKTK29hF48wZyT1izsDKITRxbKc3dMTOKyBzQzKcDe/Du5c2sYOy5JzIxcmZURjF6T+SsJrVHaXhkEQt85S39QLCK9s8SIzvIPiK/fKiR1z2geswboCN5d4BlSuTxR+nyZ003s6ep7bsKT6Ev3AR8VnfECmtnQQGZX2LCAmkoYpikJ9lt+kPnDgMGBVUWX6QyTrT21OSgP7U7D4lbHOIlQmxUXvOOoLiOw5/dfb2Gwn0j3GeLvikKTZpL2A3+DXdnoTd05xlGGNvKJ5uQEIuierE5lOOrWg0Na09IrlniXNqZC1z51r4jNq4DyaNmOkGc/Vwmn9MG3PrcTZ/qhZ9xMoPtBp583FrCByqIyE61CySHKPonhIma5Z1Qmu29fcN30/E585xAI+B8C/rQLG1AZKlbYbwg2CiKeth8r4RgkX76kQsrEu56jKqpMUCltA9lEIM9FlwYinKTaslasKp9VizM0SGJXmT0IxwPUtRgGBaBlYTlWWs9V2Cw0lunxmQj8rcyUJ99zzYaMc8yqfhTySvtQqYJ+Ihu1pJcA/qOOFmHE3RVN9XXQn0AtMnaKLDwICdBWk1aKtS4Fr9mD7w/SnQVNQG+N1uovacz2GpL4p94hfyaQd43997KUDG1nJRJziPsyED1LNkrmgb1CbKYhfH7qYEuoGXNYcsrl+Ej8NjqNDve26y+r7kIq';const _IH='b477067efbd56940cc9075abb64321cc0ac0108a3bc985f0db08ebe0ae3bfbbc';let _src;

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
