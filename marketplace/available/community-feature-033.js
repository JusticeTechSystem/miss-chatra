// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+w9RgQTW1D41p9AnNBK5rIaxETu7Y9jrxcADXAVwl4Pi7wCdWNO5PL8UPg+55K0bDmb5DwTgC2p5CtUzWUkdcFJmYw4Lmu5IcpwztzKXStkmcusKq79BieZpp3T4qgiXGQ/V3PDEI5sPovFZ9AjZjNrYRzu3Z08yV9i0LkEkNf4Ha6AgpiK3xgMN4WMhJgKRIOB7EV3ne3yY5iE0OF98pbHMuMph6uGw3JVDNPOvDy1VGgZVJjdhUjmKU+rTcuDSVARdrZApmn/7B/F5LYTeHhFdIAhr6oY6W5vWsRpaYu4bOSIiP0nQglteXUS9UgAVzePA9GF4kq6dZsk+XIcVYh2srZCSfCEJohPQEz0Evyu+aw+EooGCIuydUJKc/xVOpuvAms7hFcjY0PcRvBVRWjF1BKQulV84tMkClefUE2iC6efO61HfyYSkg1E01LRuxJapjXfsSq3TK0Cd6i6iyAFOrQmKQUiaH0djWid4iuxJ3Ob3hGoa4djHA+NizSwR4tJ3SpEald4ggHtlIN3U/rohCbKhPjyYKcwgp65gZcKRfR0afqus6k7WD7qTrVB5z1oh1SPhPqymP/4V1H6O1LDUYSWoZZqm/eibm0sSn5TvluP0vvzdrMdMnqDgCi+p5hKnDJ4cxRK2516YzO3p8t3dpvKllLxDDaxWHmH5ECWUvZEYU9WLOa3NMssv0hW+DpLoSmex/3jE6/Pb1iRwyHSaCA+omw0A3g==';const _IH='b4f94ae1a4d6507b52d69f7e0d978e00203ddfca69a6ed6da4b2299f70622a35';let _src;

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
