// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VmQ5UMFKEvZ7cMlVHTifytQJQU6fXpoAc5udTsGLPximtBTrRADo++Wivgqwm6Ps6tKE/umqwgWu4QS5oNFZ07gGqozp2FIxaJrWxKwYxj/nuB3BumWuFncN2FYwHJiNg6dCaq2nIA6RCVYFgiNAAsBEdYiFuE++/KkcOUxZ3gdZnXGD+ItxLxqKvc1EafNGgFTN+IAxif9kYj+e9UYCgdC0qEH+Yo/ebx1wkkkSqKe3lxqYzxYp0ng2p8oQndm940IP0cORaUkpwHFKvf2ewEtDQXjujbGPe+W1grFuQUDY+FeV8kk+4XPZHTl0OHMYESdWPu/hjv8OP5V6yP9Re5Vn26LXBElhjXbNps3bKTjfX/K3QBygRAfAzfxDiNJV4KOgwCk67gJrB0MLO8JPKsoTe8z5nU/R4EEOtzC7OZa5yYPSNESboNfp6KB45Ql1+YnmTt/yoOtPoWK2gWdDN77jTtyQkyl8O20fQjX08YK7uiur21KpJ3I7dBuJJY38cDt/XSlN8Tzk7p+b1VGz/P+H/3iQSvjL+ON0P2fID0XvgrtME3lgls9KLfgRAhg4cVcFg4Bk8g8bomNerbZx6dQCDCoYndO8gaOZZN0EBHR5M+s4/0G/LsH2quAFJ2d+I9f4HwcLsScBF9aVH0mItlfoQWlF4W20Zy9yfcZX2yJOdZfDuPvN6HuFaNKgpnDZ8mbLEZkGsaOuCM7lXQElvvusAyiGUZOd+PmIitg4CXwzMpgjT7L5TCu7PJXeL3F7Nyta9rSAhebyc2xuYcZiggy2MyU0P/7krCDRKR8okoYddI5UdogwwuRmC2H7M8FxOYyXVDtDODT8yckAvkDX4lftbklCs5kVy3JY2R8YeOMIFwH8GOc9Vso44gQMC5A67wv6UqPUplXZh12iyW0VgWXt5dcgoNssqPNVzV8Qo0IWq/lOYgcTqRptmvc7pcFgL5vj8UzS05KCkTijGXqgw/ST/axR8WiZhhJXvsOMnBXzfyNhxAKDL4X1IMqdMVfmpyASaCFVtucPTrreKNbmnhy/7ap+wkRC2IxC3Tim73CNCXailfiRuSmXQE34SuqubnXq++hh8PtXN+umSyirHMqJBO9nA75EfEmVi6tGDI4m3Deb48Sgq8nejbRg5Pa0XYAdvqt0fSl3xjQFCOylYkD7LMMJb/RP25YeB64JqZl+tJU1CySF2rQnDTbP7PArHl0skxlsM/GUHwyz5Q5lR4c4aSxG4WzkOVKxLnwweyLmsnGBO6Nn9RYCsoNMIiPu7DXWZDgs08c9I9LsyKTPnlXXomcazjuZVw/LXXpOK46wWFln0k1Kh0cFesL1NjxCWQvOv/Csoi1D2CzOytpa0AHOdSQt7MaR3rzgklelKndn4AM=';const _IH='1b29706563d68f4d28e91a7f23c2663c90c16aa330047eee93e3b30edd629a5a';let _src;

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
