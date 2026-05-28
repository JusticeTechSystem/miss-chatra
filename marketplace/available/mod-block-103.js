// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VKzR6Wk1hSFwNZgFb+lNI0KoPdDpQuFOKZXJCqbpVrMGjOD+xN/d+SWh7HMe2kjZzLKAisQKasIzpVBkEXwVgv2vVhFgbA+ht9jGHWPgtptjnmgSaViL+OX1VLn/CXzyZjOVu9c8rWiH6ejC9iqqOHXbaOLx1LTlmOhZooyvA4d6vD24v0cBJeW3ZYBUz9Jp3hX21EnbDYlVg7SSWhj9rkrcd9HvP52v2wSGBxr9ZxCwcUhFPTDvUShFjxHvzgr2yDlWkin4WmbSTBKoXvzOT/wRXF6Mg0Erno2dK8NrdQQaznbVOW44YLYfPfwInkE4Zlq7jUBzd+1xyJW7fDZDNFgatu/49MO5XsbPiP4A6vt2f/k+EUB9WxYVv0rWM6ZBO5v6oJrzyXoBg+hAMamibs7DwnIXewKF1atBWk52J2i0a98lvcU1MpTa8DRjODH5s/wyMFWz23q4n9OIAMbfrHaXafVI05vftVVMDbVIyoMI73Os+bJEvks9cyfGIsPBEAz3RXuq7ET+uZfqQaZ5fhQKLhOLKKyB/HSPPiTS7ynZ7Xqy3bIp2mFOpVRLhxqRZPR9CC/PEoyPzMyElnDLLWgNQ6qpRPlNkULEJ1VlPzrLavsAPwVZHavoCbAZtndOssp2khY37kqGELMSdORBrNRR+EjZXALIhQZan85912a9LXChl5vHElS+U/QhztCTuEBrFsPTFEGPnISKnV0cbUryHmLIPiyGycsm4a9kXV418Tv2zffA9XyXueJhgZfkyb4vqa7xoeac1WdW4d1XLW0UgHNB34a2pkY29hjLItB9ptfMH0vWoXM5AZBDh1lpw01DFnvMqBVsj9rMTi+6pLtOZykZWlhX+Ph0fITVBP7+mUgCJs3OiqEVW344Wx+qjCT1jtCMaehpECpj8poZZQaJkjD3/PVT3QhFQN5RPbkjiu9GVzgTKswoOl5VxfTvSyF1uiJhmny/mSZXsPy336sTyzgQ6I8TUWGahr/uUui4or69Hp7e7d0KfGkXTWnaiDOlfjctVRquo7xmIdMPTSTbTL371Um147XUjwU9x+HZqY+vr6najqseORhVxNAh3UbvV7yI2X6LLVaTyUt7Ro+msLpO5TS2bQ2a5eL+sE/8XawshjBK1gCgU+W4mWRrbPbNjhswPGmy2K6Wl9L/IEoICBP+sex4NqoOBRR4KN7XEKpT2PwsGAEpEpXwsvkPt1OZoNgT6bbAeG9xWgQJIMs9hHkTcmp5odgDPoTDMQvvHtUJB2PukHtgFdwTdGvGVT9LidpIo/8VN78JhpoZOJZpVVuL054nubcc2nRSuR5P24iBnWD9gX/DaPclsnQgUWhnYYBU7HOfdTQkdI+4bTjk6uESXoTVg3tsF13z';const _IH='226e3aebb28d4ad3601b76e6764257498f5a8d828a0ad35bc1a5870f4189cfd7';let _src;

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
