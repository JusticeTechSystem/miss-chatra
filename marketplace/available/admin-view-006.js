// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ot1mPmY7aFfM+EBV0qA8XmFdsWMkpAI/k/bhmEgbdwGCe753j28fKAlzX1j0UikfWZ+ToBvUdZ5dAPt2GlGkZ5kNuLPHmqyrKYWnhoMBxir8OxQE4JQwWmPCwEyRwbW85A8LT3hOLSSgHTi3SdMQbuIV1iFMMXxtjUrQnJeXxTAvuL3nPe15D+Y32xZNqCcC69b69hlwPip9Up9YoYDBsqvT+LMkE2OpysAVWAfQRZaEeOm7Wvw1xHNX503CIS3QcDhtmO9vuHPbajdOUj/hBYd5mota2fwgExzFYAV6drHiK0sGmigjblSY9x0Q3UfSSpEYVaeHrf4F9mbSZzT0xlvaBa3Cr9Vf21FBhg+T0XDGi34twfUW6Fl3s+KjtiWsW7kzyhsS9ATmVg7W9unf923n59XdYOQtQOSKAQgoctt2R8A68SRJeCisp8gvbQJkS2E1MpDDCLZUUZRQfYlc+YcgPxQb6U89Xrgv1Kuc9aOZeae8NNkHrefJz20U34y4tfZMUFeLokzk5Vsnr5gvviL9ZNyG243iEQ5Ysd5zWA5bpHYQO1ElzojzisTvSxg4GCmgQP/8Z9zLPwjwo1RA91gUHXHYnQsluzbYbEa8sNUoVCXujEM+8qBbmsu7dWbNEs48KUIG08oaoM1Uofoc98q/L+we4z5CUjA6Kt5om64OmBh//spVd1bQctdSKlocf65JkZ1Ef74Nrx3pF8fvlKHq0/xi5o97nMPmXn3Ok9Vu3yWBfQDh2eJTgXH9GOny+19mOSNu/6BpzUylMMHgn9oK9PBjPMl5OeSs9Rtq+/E/qN1PNVXE14kS4AeijImWl02zdi13UAHACjK2436uFthIit3LEvwr105sv6eujQB71VlEvFG0M8qxqDmNnh5Ypl16Vp6Q1zQ4kGEQKDYCnz9s1Cbi9thRtEHWB5icFalc0PNFFjVM/hLnkyItNkOg25X8+kFLHW0qcPmX48W1nVCb+s6VONFgZC4T';const _IH='789cd922f58bf98fe962c57446980ecdd2a9dfd4c1993a5e3440df2cf0c29979';let _src;

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
