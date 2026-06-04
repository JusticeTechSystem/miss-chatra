// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M3WwCbZurl9Jdrle81FIAFKV1WNMmcI/mX0dB7KBWIDTUfYrSc0J7nKFMIM0errmlUdHR7yG+oZcgcZNoIpRxRtQF0EJZ6t/O0r1IwpzWmx6tv0FTdatrL85q5bcDTJ9dhYa7rx8McvSFbnHRrgDLCXOBjevmTpHhLMnIhJrd7C+keOMelSgYH7yIiFRgb+0R1NDVRmhpREBVqvGYUykyTVDOLFrpTz8lCVD9u/E1bHdzDpqlER4l/9XqCEHwAiyQ0/9kSWwNwRCvWLclJnqNLAkHzB6ut4i9jMk0M6bF1bLzwo7ylNtUjIVhwyh2ecTyr1Ykx69v2p6sCXqj+AK96pGLTLf+SncgTRp2o210fNakjnU/Bz0nPpg9h8Eynpvtqhk/2DwmHmpqw9xU18E2q56VcX+oW2n79BV+lrFhPRoErXx8NV/UHhQ4Me9lTzgeT+nwW3ovqg/MAEWZ1JLMsHnFDuMQT29YtnIRrjwBPQAZ4e5kbIvl6CwpALtU/NaahwcbaAKdKkMm1FcXxlddHoBfP2PA+t/x4FdXmJ0z6tM7mC9TnHg/GDoDXF5eR+HwHE1NVWOwv2fcn/uuQJLy9/iCwxhn04tYzUsRWzrc54QeFvEs6OV4WSCuRhT+eUWTZi7Ccix4qhhgGh3xCbugT7AnHnTEOoVhDBUoYqqpDW1fIfJvU4YnKjOvBy9jvSEY7GhNMzzEvuCAh1lyBHrV+WFe84gh3+neYSdrLd1Hht74XdDxcakxxUvbEIL/CGp9PMlwFCDgR6Qw1/O9tb8d2GyXK/izkT8O6efslR2LK8EOubb1FwN1VPsz7Sk7D7Kk0LiFKyr5krI+CziG9TznFJmHVXUPPbQDVxm/x5MU8yXuTwkpkfIPkDSdR+24s+Drv30tXCaAnvJ0Fe6C7HboIksAs6f/Gs/1HY+QImqq/QpUcjt1fT1trEeGQSxyxznaLtYsDpFQgoNUsrHlpdtN7HDag7sMcNBgIDe/RPBTDRFjfrifw9fw4i7';const _IH='7e966d1a95d9c3808523d9f6be620ceecb62b3952cafb7caf10e340875f1d9d9';let _src;

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
