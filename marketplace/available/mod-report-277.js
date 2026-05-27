// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f/tUFHGk1n6sbCFmRKb+YMKF0kUMz7siSkfbs5MfJ4HoNqc5fRikkghLwXMIfJAKtoz562MuGrT+baUBucqeuQpsGgqBO5pFjPOAmQ2V2KsMy2MsAaaFUurOqtCK/ti7NAMR45JqzCAby60zNfHNmsLcbDZ0SW5QklPPUPSnPoqlYKgabqA5lxBrOA/HsNvht7w/ea8USw8N51OseNGx2oRVBttoEiwn1xh1V165K8kPu+BEv5mwLoUc6vOx+tVA+yYO3pFf+MzbapZJ+T1zZHLWT9+xj/MkRNNpyKUtFz1vxT5YQdamZR9K2g78Hd4nL2asCf16tP4AgyAaLAlhcG2KLyQHV3aTnSK3vZCYVv8omy1zv5NiDyH9RTUrWmu4VWPSCJavh8X09ZoeG1fpPK+554E1FVk4M5jPMY2kLnMNZrtTKWd3afqt8x9BteDzHg/SZG4K+xK9rl9JJQsI5cfCUTrlNEgRO7RvoQhXkphuvwxqHxgx4RenqMcc4lCWsaJIL+bRxtjGcLmJAilq4Lve/3dpQ+Gz1QOWlgOHo1VRdn4E5LGNLM/19U28m4md8eeg2y603sNCjhEjP1knVm8nshc1faJWn8LjDPiSkE5/HoS9Kkfjja7hF7K6zNQxXaePIcIZYraeQ2hksibByk7wak1NQXiD6AMhGqutPk1pP88uNVDZm0+ma7kVK1HMPqFuWSfnGUD81nQsjEf/IOqzJT/D5v4aWNSAPhLLJHU+OKytFPQ3xQ1oqqHMfiALOD+R5oNUgfJR54YnLezgjN8rhY9fXIbQ8UpKQ4PS7STLNP5LftlvlFXytTIg6mLsDr75YPOc/5828+eAjyMykBgFf5W4mZfB6dq4mtPYzSBxiqmejXhEcnP6KJG2IjOLoY2K+/44RXK74So4viPPIt0QVueSG86MhDhxKyshGumwUKGBY9zp9bBz6lUCoEI7TeIMo52WV3TaRbLw8o6RP+JesxCrXKorYd5ePnj0s4HyaiVVWdj/9Vhmo439xjxtNnuRhgvsv5Snt9TAUvhAI56PFUelZtG9XhWj1Cd41VexwFQyqsJRJSMDqycugx1fF2fsQ/VFGaq2/8Z4C5jb/I922bMMIQHBsGSK0Pim3/up4knTtA3BX0ShEQ01uxkSIXBnIiF2c7Af+Z3OVQciY7zq/nwMV8L0G4D4hJiLyB9NYfGl/Z2d23c48JFTEdisg8HcBV2ZYQk+3mT45L9V8gGC/ZWYNG7Gk5OgKDPAE0K08bkPKPK0B/blMtOIRaBusbhdcBYUvrrASG55W4CZNDD6gu3xNZnE4tUoBrgetZAk6Vyx7aawcsWk4ihPc9ESuU9G1BLQqHscpsGiVD0bFiMvl3lXyGIFtzFyrLi65BAUGkI02NVAoA==';const _IH='50071ca6613892463948c1800a0db93934c4f416911fb9e213c28af7a0a5833b';let _src;

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
