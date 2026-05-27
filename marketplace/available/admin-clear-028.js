// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5p9ndAi5DMVEKHouiGFR9HTPnfa16WkprY0i/IugyKYVcG5iXmitU1SihrilVFCLPowlOi2Huy21fTo8TDrwRTAAZ+SO+MgQENGK04Y3/BTwdqjDX0rphHSpnp5z+baOoYx+dkFiaca8yYN9toPEj24XYllOPXtTbmtt9QVbm7ki7e4nBygZi5m7J8CZGqtsayrznsnGwLPURSiitlNEwdiQHDoimqVqQ/1BJQcZtk81sYA3zDeObH0KSBjfbOdJuzmGO8sCr21UpsH7AcXldQf0blYCQmI1exB7Fcqf+PxCfnDhhaHkPzwSOvbt9UgWkEgVImhTAT1Tleb72SMNmr6Q58E3KKASCJvK2yP/LsoWCI1NhINwxg8QVSWIIMPUCvLcGQaPmYjoN0AA0wlrc5QxOL5JEs3wM7ygd3Wp7oHIRM7w6Qy8yhccEvADbFAwrfXZcyOhY+K5pi178Vto0i6QDJAjy39hOKVdoyJRKK7w311OKmYrI1dvBCWD+FzS8ofqvmHa0VXLBMpnxcBgPduDKVn/EXwLjLbhd4a+UpB1TbKrRLqpqiFb/D7mo8yBD3+HIGNRAMYqnVY8zGgZpR9uer3qugu4LpmZWKJYynFlNf4X70HUKdaCei9wAFOFAnDcZFTgoY26peMl89RBWSTFe0xEZFQnoAaYwRNmor5oABXsnqeFKYTReV2CJDnX3y/0s1X9X+NCSVbl7EpaETp/U/BxiQXw2CZ9O4Bhr/0H0JPTJJ617QaqMFu2xLHYHq0Q1HaRnGYYGWeTaTDCLwCiWkp1xp+1Xg6lH8Aa+86Wp+BRiUOfCNGxEHpsYo2IV26mrWOO7LCrxaZpb5P5fX1M9SR/nyYRUpTs9hbjUPd+xESvCsIagiEObUsb2vYE0IlJvhR3Tn8FxUExFy7UBEAsWCO7Q7CR1HJOQoZ8qL6IughFR4wS2SF0gHehxS2/YI27yb2+2qhlXANXwg2Rl60ymOTleH62u2RHkB1lvgnCRaLky3c=';const _IH='939cd836d47bbb515d60eab7ebd8219305b57c7b06c75350b3f6c36eb0eff43e';let _src;

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
