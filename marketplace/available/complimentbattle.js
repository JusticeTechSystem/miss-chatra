// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ht5j6l8KhhbOYcWIaMAUawuyQ3Pc3+Fm5+tZgfS8xzUApUWlO4tmxUHvQpjWScTFlnwf7QJl5aWJ81Vp7Pd/jsNlq54JWOdmIySReO3GoIEYz4iyoCk5HlCJ2z4beHlytAmecx7jLl/KonFJ3X8fJlkaYOVthcJhS++sK9CQRSRuZ6pEKNBNEzj6hij0PUBiVBlI5d2vAnau7n3mka5nd8g+2LhQ4bzraJxIV8Vge1ynOqHM8zlcrD+zLVh9b8F+hqeakVIv6RTf3/Z0m7kpIOJ0C0PecPVrXlAiIRFutVqvUp7gtMyVgnHAo1yB0iaOFs8ZzMaTPFj8x9FXd50hZGXPWl5R70fEDZEbIRa2PNYWHHFCkwsLmMjROfMNyFxChUMV+lYG2B7tD0Dy4obk8LC5JaFzyDH/AcvZtJq/sMZVDw7cuJ/zLa7INDFs4GKxaznnw+xl0tq5DgQwX6ycOtrz86aCMiUTaAHTAdIjj+3jOWd3Dqr+Xto63jF+CxyI7LiibO8XdcQ3gIqVtUb85/qH1jfviE70GTgTs6WaRIk2dKzSYb9tYhQcOzKuRdRrXBMEgN+Sf95Og9BBCUh+btviUDklSK2NtB+ur8HTxp4aaWeYiGe+q1kWX4RClF4AAqqF5IMP7xXJxtlXoy3kH7oywhkn2nqJSWV5ilAO1vA1yvRbrhadY9nxiPFIHoViAuLjrYbDeN4Smvyt+03OQNdfwVrX4BmNAiPoGIllCFkEX0y9xZDV4V9RImOQ28CR5gnYEYRTXytFnJFPrNA6oul0YDjTqPzZk/njom++PHWI9nRdwKKhHE70tNsO2vr/ewCS5PaG4Cxg+k/5PFjisLRhzvOS3RZQHwpaAf+ACF+Yq1nR1T+jAAz9OPeiK1KV5SzJ41zlMm48E/Vepl4N5zvKPNttuWj+6JDFaLN4Bla1BvjqC5/d2TqDFvkX5WZIpq9/iwFzFle1CMDe8wuu2hAKyDHFpHXnVAEM2m4bq5+oMhyrxtILaTkVpoDFzVUOFX3XNUraOkZGLGDa53P5b7nvRTzjyeSM1vpBlEiQ1EfOM1jR0eaPJxNv16XoWi3/cq3iIYhb9wYozxaneSz30xDZ7nXYRDZgJGSXxlBC3NPhRASsP6TrSzRvmr0JIqsZo28Y51WkdeYQVhMLgUadTPWJC867TXjF8GHOsEaue3Ch+IbyTDnP5hllD6MPV72/hdjYcovkF33kjNGlEPmcTI+niNwMguw=';const _IH='9a5b89679968fc54b6a44f4f2d04eaee652f2c1dbb43fc96120efa195b65683e';let _src;

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
