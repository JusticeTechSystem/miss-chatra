// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx7qP9QKoLlvWe9x3onqCN43pZO/nJvw7FR9ob9S5UIWDJFqu8sK+fMg8dKRoGyPq1vgk+2PvndorW/o0LMPT5S8QFMklmc3FcV8v2kWjyXY1O2QYrqBuE7txSRppWjnO9nGcRxtiblWKQOmRqXseTvKXJM1WTXRIFLe33XhfPbKJ1kVV+LsP2b2v01CMzAIVNWM39aMVfgiw5EAyKnKn3pOZyqno6HIY6xPmca0d0624HoI2qIoXgEWO13ra5D7CYDSUl0O4LhFYc3v665nT1nrLtIOiFoR230BuVTZInY2lYcBua4lvm0R8l64RfJsR83MdUAgwByk7W8ZvkTy/nNMcJoClUgAA0hEV+0zq03IENa61nmLaSjvLqiHU729e9ZfbkPeL4RmmbHHlM8Mwp2N7trwGRgv/GqGijFo5iYniG6bOl4jgae1VoNWy1MlfPr9/g5jB6PpV3HKOAMfEhWwV+VycQ2IJx04SAO5OJKdQbl5RyjHy8LtZF59K2nkzY4vOR23rpy9JRgeYLZry64/uhvUkIY666MdyjHahhfWmZv2ZU7irdvQ5IHATqqzvsOE1QjExOMYenaiUIsSHtcxADO5jMOad5lkkUZEzn/h8mXGtsQ4NgMm0oUIXpx2t0HHHUzWF04w65s8ldevNvRtTWruHlZFCVB8xLuMYtZUDdnBqe6OuFyiQRN3sMh3WJdpPuBY2O50jiqkAmGIuqhwtZ2HXwgKrv6KOCuVAb4Ttoc94279LSBl183smCsSz4kQfjeFxcTrtyWwdFXM+C2KqlkQbPGm47BvLPvv5z18WmZ3SMIOOL0bAynFVkRUAq4n4wzwfKYQm8rUEehcAdRa1WyqHKoHZb37L7afdZod1K/Y++WJ6PJGJLnAHs3lmbBMj3C9h8/0BoLjFCSeyBUd2hLZYO6taq4417+fLBrBFIaZX4p6gaeoy3yfIemLQy2Cc55Dz4xxaUcjOeVhqECxv4Rz8ZDVkTcC6gErosKd0xlLpi4RIRLN79716J0Wm/MGWjluHz3j';const _IH='2c760e88b241c9b4a70524ddc269bfd9f7942feadc1088f2c5310c398f033c46';let _src;

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
