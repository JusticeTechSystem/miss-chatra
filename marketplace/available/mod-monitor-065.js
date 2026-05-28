// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vXsvY1gyweOJE2yh2or9V3ASHeRHNHja5YdsfUQDZLiQ3G7721BAy7PqCqFPAgarzYkFHi4h1LlYWBIXWFurFFC+pukiMdJ2THmHEyGTocJdyupXZIl8lgXVSlXkqxPrqkwpuxyPwc+MhX+9VpDs4l2HizvxW0QAnCpuWs1iFRa38hwjxgsnMLmnHSRWlo46xafTvohfi8IvE2uiA8Q7f5lQRDxtug4Zcg7plJosFw+0v0GubCBJaHikYACfaEr8asowRvtKVwg6SXZzI3ANmqhJJFL7AUTvcZovYEODd6rCt3wsUgs0urior+X2lFrEn91/XR5liaJsAE7c0DvdKvOpXy0TMfAR35y174EkEnfgLFH8XETWpMTdiQCS/VDwLpeiHpvN+zjQ2xuko69XOC2cuCjdIpnP4GYaIkRFHmzWaDN0FuUqM5Ho0Q1MMduS0tWvGoGCEjts+wD2m5UjjMwvpHuVq1P25UttWfLDHEdh3nTDIIXStsBuJVOn9o14mwl+BvvKkWVE3KlCjgeS09vXrFDmZZWA/DfT0udWPF23STotmt6N8/jWSk5eohuc93Fn+AbtGoU56xhEC+O3HDKrnC5J17DGtXrBGsQwkNx2UuzZUSP5U6gQWaVuB5JWFEdB52qWdbKXuVKVFyJBjiEaxea48l/S2wS97FWKV8wwUMhr0Gh5J9uu0TbryfH92ISCCIB7mq679mM050yuKgkqrCxeLkte1u47U0Hx4+0jYcE4b6fuUX7NU+tCb6mnNakDdH4EEG+uG3Ml9c8wZ/ct4UwH0eGCzQZqPM5Y6UpeW5ournZ3zFx1gUPeZ3TVLQ9gBhJo137PCFjGgwSFpxNPeU60okR06rS+kh2a2HjhcjHVVq5Jod6K+S8Law1drbtO51Zm9jIMR+jrHEbo3zSWwofqpR6At6zjQX0xtaE/Is8kYPi1nza/RXJuMCQNjJbSudus78eId4EYWuq7QEJ/rjo7g1JMoy7XQilymgmBB7M6S31EvzhUpbRa27WHxVUVmYVsRvz3uUarisE6BMquTTBzCzX29U63TcaEu2UrKOCgQ435XrwkdkJSheKg9HTBBZXfn+buyql8ky6KqhKdUnFFq0WEIimDldJlJd+efyfn5vUPY2QynV+YzJPad6MpkqWJXVTIZVOQ05tdyPjxZ5bNz3mMIwUf8JrZCyzsFBJGn26VsL9lnUvmUEyE5ARMDEgbiyignt68jNGsKtMKI+18zVN3f80P9dascy24W5e7H9qSROaJPlLHdSQAJkqegO+A3DGBKfyZ195eh21yqEvSxdgBOFhA5s5eaYxWTf6k/tmSOkxon4yo83j4oeMqpXc8jFnX4PeLznaLtQRRvgcna25AvsgdXWEPNCrK4fnXpPTFRkDgRpPg';const _IH='1967c5b636e230304662684d3873d9b72ca11001e7dfafc1e4f41c3dc4ceb228';let _src;

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
