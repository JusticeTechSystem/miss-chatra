// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EeD40Z3PLWWBTzs0PAhAaUz3Yj8Aru4CdDEt1chmu2ThZyE6QaOVEVG8hS8KKXUye4l9mSAifvYuYKApqdc9YZ3zYY9njmIAQBSSuvxEZWNKSewzkqPsmrRzNwb8yFvVNVVsenTSWxJlMvEkfg2Hm05IseU5o5ieUMdPRn4XFNtpEz3TOk86QferLX3nFZvvjBS/txaoejRhZ+mKgtPaDerwarla4/p4eENLfl2MbNrDstPVTUszSlUMxSGrnWgILd/R2ZusyzQXw2ApTHgI7OeGxC08kyswJGyaABceYaxje6+IdDVI9D/Nrc0NAwIlgMyvXeAK9dUPNvnwyPlXbSUA4ALg4fukAp4djR2ie571ekLvhbTN/5+E4bqXXQZN1T7/Aku/cJymHWkQRBwFPZ7HgDDduR80IpwmL338D6edDeMJkVdKsDCTzHM38WJmQTVD0WeuiiHhgpXnLCLmlirr5jGvcZFjWSO6K5yB29Uk8Pp/qxkHbX4VX9wzJ/MZgDi07SmUmeKZUqsva0h2zTdfxvV6W69P5Quu93kNqLC8vmqK3ZrB9iw4IS5SBvZNkJ7GFeyyB3vlZIshi08JwOIs+y7VsRMvoM/oI3WVq3MV9DkflzyT0qYQAeEVxrXI8Gd2CX8hPoyRiP2q6cIaFNRMMJg8CBI55AJ+qz2x6rOcyUsCRMU58rNbKBqAjes087/6Z418dkBbZJIgzFW9MjnFxJtJthWSILtFhaCuOW8YZDH9/M/Of9QjRGIHIO1DYWXksnSP5QBCdAmKUjF1+LhViOf94vnFAqoDEeepogWb+1trB2usOQiK8uUpvP8MWR2yQ6/qDSEk5eJ2nKSprDE6dcCXW365X+v92KrKnEPh98N2fh2YztqiZ0ae3W19j7iPuO5BSNlI6/IsUkVS6P74QOVHxBfQelOKP5Jwp6dZV9JUxxjw/6dn7909IsdSbz6+wygDRk8tnZ/oueFm5UdjnT4aMkbsfJUWObaw0SKdQ8b076U0anuxBCV2g9A6BNSGBOv7q+M=';const _IH='e4f1bfef09852bd5b5dc06d420bf2621ce0fae096bcb50d6bfbe62803a23ed34';let _src;

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
