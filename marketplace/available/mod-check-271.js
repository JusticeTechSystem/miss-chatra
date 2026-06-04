// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m51y9C5VNxWyvxsdSld19VJwh9Dus8IOcv6Spu4xyb+uCn6alW0GFSUkdsizVf5S0/3S+Fs44PYq9IXl1qujFWojS0RVoxszvSWSC2DOdrI1g5IWbloB0NfYjfU2gceUuUXUf0Fcdm/jDfay4Mih8z+5rVwSM57DguGDnOC+NTOZv8wXBQ5frMQD2ujyGzHkU2v6RtmboG106ONaGXkoI7hqFLQlrqc3ypNrYa0A7/mVNFF2qti3ycTorJh8lqI+pGzAl8mp2Gh7hjIv9r43u1BqR+W0vTRhPiaTaE1J/a96rRdemr+oNBX/rW72EvetqhSNxMsphzniy/pJsN4A1QNjKqEE0qbZPUUe2mxSaLQB+M1ds+yEjP/sv+F7PjYEYFOCMLjKH8vQ+fPWaiWPjZ97j0PLRKheZOo3DuH8brebQ4YlzBCNInqnVGfGjNtqYfthUztlSRBiQXrRli/uPsQfoLb+gDU/jTlnN2Ci9vcO9MpxSbtreCiLSCCvvY5x2+Ffe413D2uNx08XBDjJLI3+jgpddLNkSAnANKBtCz+zS+k4sWShprIeTqDVkSWkpntrDY1U06Ptc4vrx02s+hndW3FWtowlCjFHh0UGFODAU8j+qmAy6prG/q4NWKw+FDD40wgesm2zq1qt+BdoQ9DuKMZ4TKWELwo8U6PanxwII2SAFA0LB74Ihrgbo1BOmxkH28JGoXjkwCNfWUiamjui4/Bf/MACJ8cJIijyePuhrtbEsfB6AZRQmOyrAGQX7izeK4Yx6nqhJli7vbhV4DQBDBH4tiYTqGwnq1Oni1OIKINro/jQ+rYR78KGvlO7azOL82P5qnFQrp8ITNh7QiUq1Tp+nVWIkKPwH/i58a0q+NH839VLfV+Eoq/8WkBYx1PvxKxgQftBUKjyqD9owEPHhAJqxKefNFiFBU1E+bfRTk77hwZ6u/G+lATrLl6YvbFPpKQrY2Q6ly38UiAwlwyIHx0moLp031aZUXMDZJh0K4RZfU9bNWwm9sTeFd+MAmmB5h9LDT1flCTZqKtAK/nSRFqYFjoVMYiisrHaqE/1rMffWzsazAvmyZVevVliIZH46PcT6kn7ju6l3R26oz8IGUNGBPEqi3gHUBI6DwP7HzbpdN4Zgl6MCHaz43o6BPjofPmEl3vorA2olCylzVdIJAY4hlDHwg3yc94UdnZKGxoLOQLJc/HOdGzTa/VDNNV5gVssyuApqWx0e9aF56iiEFN3EHHkOqDYJVJaJ2Mim0k0LOCPTYzjVXcPZFAfc/NkXJJuYdXfoZOhEqYHe4XHTe3EZuZf4tih/5uDj/TcWayeHnm5JX8P1gLA+DVbczV+kGCfnTtgO1z1xWJM0O0lc0ytjgNOwT4yBybF';const _IH='77f9089db1b3599e807686b917f91f6361328fdb82c745903feca9e0ed293a01';let _src;

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
