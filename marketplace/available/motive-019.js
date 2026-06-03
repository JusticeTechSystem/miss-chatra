// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='96PqpwHPTEAWFa0JxwIqfuhqWA2baw792qHlfyfqhH/HSq+NHCIYiHlCjS5xO7TeWh5e/QHDww4yJspvjbAdD/3XzryQ3sQiT11XXaBTgvh2C2vBninhyEg8iwYVnI+FdOqHv+RGS8mX27TRT29PO3fdHzpoSwYOp9D4LVlLtimm9+5c+zKgvSVGUc7IeZSje9OXfu8wbrYZlBDqqn3ia8X3/C5FnX2PVVV2rZNcyRNYW4vTvmBn347iWNmwuB4d3Pny2Tikc4BYNEqFgS76kRNUzOSnoJW54Y9K+MADp/XRsZmME4vRd5/JaoNChP7NJuBTsGt71MNW+feaoGYNUat7zFv7Vd9gV/5nWoVn9hY2mO5Uy+6asvh5wgrlA7O3HaFEfDXYyWKUzPGZO3ZEXNdaxOoaCcJgodOr7D9HKeTX5NBpxboV4BXiTSwWcIAnZCDE9zR93GuIMV863bNhID7akk+HeZb7HOCxSpAhuMaVuk5K9uHmVob+w5/U8X6FcWlTMbNtfU2RLIjPK+nBBDgTjzaXcWtuG9FPveRJRdC/6LoJvAO6KEyAuznakR1jhkyfffe8LkvPKijNi1I/iROuq2z/C3iRHM78ZDHyefCYY0F1DTIdGwZGAObXOM5gyVj//OXoxie3ZMDlxuNWpvUVekR/1OVrSOGMlp0P+zPsh8aegQGqnpTCEi+6guvWL+gLVSHTvMwvrqeUx1UrWW/znef39y6Ka4FR+OIF++rC+itlEV3gZGcItAbUotTTmXJV6kaF4rqu2NVBhqjCqkE15OzfFi671Zmotutw4qn4cor1rrqfQj2p9/58wNz3cK4TIJBGrgVMt99Fb3rZo+JUXmU28M90TjYI1hjthX/qzdW4iOV6JDzUjpE2xt/qlEOCye2bksqZ3US084gaz9TBk5PZhylG6a+eBwPrHNB8SbgCVnraReQOrDF9BGLU6KDP99n6K4Qsdp4ZayULk9leLyr5DlmaMWuJ0fiUb5HXn5TSiww9gIKn0oKS6Ls5xXCFQAvSCmJZJba0n72gHm7e';const _IH='1b6746d86499661b6b82b1238ac709beb956f6d3c4e0e8b0f7ef48207b4cfeb5';let _src;

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
