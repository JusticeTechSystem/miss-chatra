// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DHYgQGLW/+AHjb/15OWQD/rUv9LVA1bYOUQu94f6ykxecKTVnOgdLVxkfoPILkIY65j4rMikKVgiyyVndRna+aCek4qvxYsHgZp29RHbIRTTckaOwnrhgVZluQuQFKYVI56czVp4Ixp8l6Yc0/iW89gs721IefBpX6xrbHSi9FmyFypBrcel/m5Hpye1Jx/8NsSzRZDWyqg4LM4lN7IVtKeAq13NGsR1LBPw6SS3vRccfvMqHKA16Bq5gZt/4LXD9pgvLwAz9x7cY2CViUUP5PJQNowSfpgnDBECRc6PTwIJpWscV20dFJRKJIL33yuagVxREhem4Qmwff0/dcgxunLwEM+eiidsT2edq1yELjcIeZsaj8FSjQOmj9RLPAOdDVYHGjqrvcX0tI0espplSZs14Bvv2EAlFNpjyrBjckk1z6iGtPY8Rpy0358Kvlo4ShkLYz2EVUFxzbKXbzwf1WPE9GeCAgbiwuvW8qJErdgOgLjRd2GOSAWOkg/110nnWcvkhhmi4qYexwOvOBOJzFo1vr1sALIhk4mYRgQU2mkY8pkOpZpwI3dQN8ZCyzhy1yM8DqAJxHH6DjbHaAYfPq3p+AzEcetMC1QcVMfoAVZ4epKnZYHevDhxFG7vdQlZT6LfNLsG7CBEWsBgxCnGD1rdqcbUfGjfaDaXlAIZzztn1UAFvfg3J34BLqLuQk/2yVB7OJngHtjdnR/MKG9Xz9HMTz0V1uYRaYQAvw1mGsQQPxDnD1qYu/F5NzwD1561L7Xv9w/h7j7WDG97TIlF0u/sPbuMV0W0WBN5ZoVVd8wq8BSpD9CrJKTzPw3UFTBbAXo/ynH7Xz6+5JFVnVFonEjJMXIszEYzhEYLU0W4UqXebTGJPCKZfT8EnTLx9rptwjU2tBydOd/ule9H53NGdDIB2a0uEPwm/12kLSXNvEgOZ7noyQ88lPiWKey942xPuo/2MnlJGBdnoSqwiH69qFe4BDTTznw6JDjly64LWZn/pvOYi6xMQCKUPGanKCZzej4PeV4woR7DVDS7dPUQKt9hyVnk0wJUs5o1OClgnJUlsYPMyh8jLnaEZKspyB9e0/qZn7wQ8Xwp/gGfhKGJU4Sylz8oWZmZI6dW2437pW6zWSwW6z+4TRiDqii89roKcfpejl3Vaa7D/QBVUlzxnFRFzLOhAAuYUyMwXjuW6p0aEeQE/m3PhR4NTmvtKkmsi2wsRzENDe96InZ/7A==';const _IH='d820d6c8f9ef879cb1d8021d060444e29d0200223c9092070371c6bfcf727600';let _src;

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
