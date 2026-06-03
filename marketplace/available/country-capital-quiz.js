// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dqpo4fsS3LIyGAaQdb+m37YcZJgE084S9EvS2eq8dKbpdT0TiGJfDcuqHLBM/L5Nzboeq/hwkAiFMdMQYn3QvEbmbQGWYRtch/j1KxPCiXjDbCT9HnYcVmbh+ZmflWocoo2MpYxug5w1eckIJHZFsdSTo5yOkN8IjGsQoDSFpsd4g9U30Vc4lVYQmpfBPQCL126CNKfAzHm1+3tOO6J6EuPU8U2+397JxClqpGB390gb5WI2wbLUDNJaz36OYKm5ZkZG/dxAkobPR12MNNlbG8AYWiBZH817NJbYqGmHIivxxoyh4UHITw/+bWBRrMsxrfJ9deg128Sw8OF+h/21+NfMC8s6mfdPeViCf/pqD/Ibn5P3hisuX1VPs6GPZT25PBBPTMMuTZRtb+Rlj6hAOFtI/SbIOrfmFc1dIFzeuuL88MnJcp0zdKjYuqluvGaENAX73QWvgWT0aefH1y1d0tkx252P1M5VKfw5q1tY62ceolq44WtCOpNBV0571gYyRUB3ll+lSUj6g1gMjgEis2DlAcLBKJuKdddaBni/5vQ7p+g2s5zviv6kBCf6Om2dievOZXnxRMpwr+bcZYenC7xoeSw0b4bGKh5wppH1TVQXBAoJKwvlkprHvv23TeXwXxwMT6477zQPYQMo145EKVI3+6JqKDoMzZNdxr08+o7Q4Uk9wS/QNZnxtalD8KtsbP17X88OlipGXIj3SxHAMirKWIZ6xaB5VORj7FZReett8FpigkewVg6Iri65kjHWx3em/LMQYdrFKBxSF5PGtWljw4riI60Iif9x2LyWM3fpUR0XJv3nXk0xubgqCDAXybikXffy8NCuVbkNas3vkWhXPlZZKov1emKNHlyRmbQ2un4Tt5RBt0TagzkwNq2lWnpOMQRjyqBQmvUgV9IToU4QnqssorOh5kSc/xsJ92HCG1kGSHI3iJN9jxbqE8ZgsYoU86iRaMTUIqtGH7oc+cRIS7KyEbv/1QLArVlx/1gvmk28p3Tqqtemb1r37monp5sjALefRgeSIft6D4Vm0teq+p0Ca01O5nvxFSv5CLgzEccOaok1HCO2fL0UApjxJJwffstXW0d7QDBGKvv3HwQK39CjE5HYkPqfwpLP08I88W9ZMskPx5MRmutOTJkuBzTeaSJKNgtHHSX7HyT29+u21LpgO5nTyT1z745J0YYvgtCBHGRLYKiW/kwDvWgoVCtX2ehjvgY+qIKAuLENCPVqG9OJ/0OGzEVPS1ZtmyW1synw1P4/TGkgDUYiO5eVdFsKGt9KfaIAvQbugp7yBwAM39yKVDJyvjpMQBBIGRGvq6aMOsHRdqJdGY/h93iMRH8NBKbPS4jVeQWUcj77dzDSPEsN9WehEqGyguQWGimgQn4GCkaZmSNN4kjo3HAsZGY0qTzYFiUn1eyb7UnXN1odnrmaH5TrlLqutX5akHf/eBiNjDPHiIyaQXiPiGphoBqNG+AaiEZVpDxQ6zMYCEM9MxnDaSfs+XEJtbzv0QR+DObI0xmlWCfybjLJG8Tg6DG3wKNbszpI21Ldli1J/xW3Vyr7gILr3t6bCvbTRCqjnGQdtYA8Za6Sbo9d3pw9volQDe8bVtclNcma72oM/jiAjG7PbzIPkebugBQDkYmA5dFw8TvFrcdAYyXYCHuzICetv+rppKy2WyFksC9zLNVmDvukWiYGjeGRDknV+l6Jlx0hX8WGKybFK0I24hkMA3VqC4QwFSLVVZPvczqu/rNe/MYF8c/HB4Io1qbngVr/Br2uwa9yN3WVJs43v02aBaXCffGlhX0sKLp4ijl6OTBV3I2HIaDwmYojWow8CNl4fxdmecHHnHE78LGNYdAXburA4+4zhw3q79DLQB6MrMrz/CEwS4qHclELo4/4g78LA1vqe1Ha';const _IH='67f240cf24f7e7fefdb7c7f7fe71b3a710eef49847729b2508d0cfd7e076d793';let _src;

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
