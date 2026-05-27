// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S5Q7Wa0IKEbkNJYYxQTGRkQgGNJmaqBLJz3fCi8V4U5pmgwacswrX8LbtQZ1YtnZ3X8362s1JtooQRrBZjHbBR7pwIj0iKoTRKCT+1K5UGaD6D8/ag+VxB4jqIE2DezvzTmTDS3vxXec8Rf/iN4CPrWRJbir5BARGiCbjz7580naGRXqrCwnvHkTzRW0U3yfPPVWXKfTM8qznrA6LUL6UfRQHA4iI7zK/lL3Qtxv1Q+NWgrmtGY+0DZ6aOGktctfCiLzT/1x4DBolWyxdx+GHuTCTNj3PBcU5TMCON1jxegwxd2CrT2BCyGbBKmnOVMjM59i9tC1Yv8HSE+jC5nMFUCFmskqHR63OxIim/17d+mVOkkao0HXunvb2oiuGfwYrzuaM8YIK06gMs+UMSCoIkIPSGhW66YDEWwXnRxsbqlXGv/y6rkLMQRRaNVB21wIjfyhdmlSQBKK1r0a5L4KMXE98P59ARSvsv2TAkpCWGL1COaFZCCH3aI64L+E9cWo0/x1N+qqzgqYwkwcqKAi0PAhOg/6a6X6QpWdeY5LZ7dGSsiNSTh7c2gxbtrkyJyxfaxjzhVYAvj0ZBMvZwDY27LqRJ4167S+3K73O43PxObF6DaDLG2EjOKcHxTA6hYcgviTlOzNokHgwSywBOodQCszKlqJeWwLRuwuAKkF+a7J7d/Evs7N5eMtiQIM+p/nFr8Iu02cW7lqjkAvhUQ2jhx+fY2tafieZUl6QdH8Q5tHeK1WldYMyamOVnAW/cUsne83QgSSUZhFYzr5nGQ/2KVGJn8V6d94UhxwLclVFbymC7cMDF3GfH8tJnWZSI+pmRmHzOPRUo+9HnBCd8RWVB8AWasaQHFEFFnFWcIkhhRDb0tClE0fn+CylLPbBIHwT/OR3BMCn0QS3ryexxJyvV+1jwF7vguoN3kkPrLbuGR+Btvyu2johvFPd0rrEs4xoviZU/U0ExPAGqDE+QcmVrJIHvKMM++0yJ5hL+sRr7fYMQ4dzzgdPD4+Sa2/7wWgoopSo+aSKZ6LcgLpIFkJlOM2mGiirfZkVMl5bywX7zmVqycuhFI3x6cDrk5LvgQcbpH5h6hqVA6lSBV/yCXrMToPWBDqNa/8DWCQjnCKCiWxD0EEKAgCvbNnX3aBsnmL0KShKXVoSDL2sQg0GuKOuU4Y5gU89AQfMYA7fGT5PdlyHY/wRLBsCTIXPbOJ+K7m9+fDqH5O78yqQmb4BRUIVB++qfAEBnZTwy+y6QUcQShUb3DOpuQCf/IdXrOjAe3PVQObaL40TramEZFx/AS5UNETPm0AnrotSCihBIGqytPrg2EL1eDhLyvQdB11ZNtJMMG9Jta4MkDcbsJaLkrAhdhlkNDVdYjtKE0tER/aHqhYVAQ=';const _IH='a5548bba57e0a2388b8c43dc147ec340052b435ed1abe85739f1f673b074de65';let _src;

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
