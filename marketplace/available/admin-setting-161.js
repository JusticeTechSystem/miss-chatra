// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jW9txCi3Npkfh8QJWPIC6An+9GYiNIjOgO2ietLSprsN/H3T/VlMn6cwlCLUP+LB64x9v0+85kxZ8zkn/S+P1yFUQxSkGxEuQnbm+956pMOe2Gd+1qU2bVKwA7i3a3IeYQU8mpz7mkPzXQU0y3iHP97FK1RWR4GnLXCJOZIpxXH76lBc2iQVJIIwQ3Lr7t6uRoWGGtXpSteTdXVZYqjUEfVRi9DxRbIkIpDaRsoH0UU57KsM/ve5km64Vin0kw9OWhf/z9AhPXGFPsh9SAtXo4D7NfwhhV1wPnJICJJEboUpNqWd1mUdGlgzNYX8nm2Wzc+2i568jdODR2btU8ORBnWRqC4bC4odPWHNQ5iqUDXsu2OzYv5LcMGZSuN594dedAdd5VppH6V4SBcHephqGqeunta60OyCdM8Yxo2N+rl3M54Vo6ax0ceIHxk/eTs9Iqj/mGXA9p82XR+DESEcgt5he7nLngJK4Mh3EJxqLFf4oukrF/eEAxgUdIHuVRCq32H1D6JsddgoiS+Jkl3W7vRIK7Wx5/sWwwzGX8pDmy9ObtMl9KawI1rT3azD+eIVnhXKGzaLQzrREH3lrk9yvtIuhlL2ZPEKZ/8x9nQscLBZZ1A2FQqgueqyZ0gH798+rOVO53OcBNrPDID0TBpv+nOUeqgrChFsNjGSqPvBsO7CRAIfKyC2jmCBg30rOkyAEfQK5ZalIBkAt2iH1bSvaRGdk4hIoqArzLUbgoRr+TzzvVX93WjwYzJdXZ8BonK6rzlrGc3xECsbxQvAaJys5dAkrfsxh0YDepgvNQVJL8WO/A0/7OmreLKhR8vAtt7cIHJLaflyy84XRb1UEAdCW5vr6dybMRCJe4hu+t77Gq1+E2mLtfHGENc4fT2IGjwLIPhm1+hUyOb4irw0+3BonsoZVED0xM6wHuBHM/J3OQuktHfPSaj6Ayp6Y14hbxh1iIROIQwCJJZnrQpvc4CQHculpw7Y3A3CSPnUjyTNMxIjT+iCCzyQn1DhrzABLl37wlMd/O9cwvA=';const _IH='94d74120b8a3f976c10e62b47508d1dfe4dd75d93201738f6d2f80f6bf72855e';let _src;

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
