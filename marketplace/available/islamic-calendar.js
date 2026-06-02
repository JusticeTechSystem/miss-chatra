// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HJAhoSX2d0f2X97FhpAUx97244gFaOhOhDjZfP79uGn229tMyqqLta4YsvnO/1/3Rzm0Y+9TNXE2ayKvlqXh3EcQWFwHa3agwgxAEzeRoEnilnELIFikhqviGpZdtAVK5+Wu6Dby4NJexKRUs4UW9NdgZ4D84iztzRrTwQtdLY5uGpiWSRTLqxrgWUkKEi5c2DHbJsqZ7OeRqN1nrcjgAyjUK4fDih/yG1fC4DDaKD0PGt7dXt67rNX8bFoyh6Wm/vJ3pHBXnNufx7ATR9jSjoIgfUC2Yh/QhDGTxZbyMxAAbfwslYQ11zXgeGrglXU6xGs+sB6xSpwvss7eixLyJzqujs+e79cTZ/7JF8YPGJptLEe4pAX51D0ybIKyXLIhJ25Hho47dk/O03HsELk12w3VMeZi/9h3++5gtyxr1tTn+/CFRNs647Wsc9TrxuYNoYuns5dxPvej9f/jg6O0ypx5X/1s0dXilVnMqeQa2A60BmMPdHjBlygkNfLl81HQet8qiviCVniqb0JwQRpkoGmqZ2H5KyRkC70Ru+YhHPlEEproePXC6KnhTxNzMRtaEFe06eHOSEOFNreLRdivUxs/u3caKOwbL2tgXJSUIuTLEgiyubZyG9oX25IZj4UAXtslaoEU8Y1MumhyXo7RhS+CJeB9SEbpy5OE2ntv43jFRiYcqxFLv2qkueuYAU4XLTJcdPTM1zjm0FS4s38n4OmASPVXJCRRqw+ytjDInt7ZdCFELa62tdKhHEPqG+6ZCyWnvUZ6cz3xYdgGD8w6uSc9qAltgdc86H5I9wKhukmyllwTzMaU40QfImL6w/Jki2OO+vIN9VKPeRGDcVV7IDGx0iHPyRmtp0yaJw4VX+JvmEEaNR9/y80BFUSAJBv2KBNJ086HCo8x5zaWMAKqmyIREunh7147908c+3CCWN++peKURIpFCsguDPnX7qr5XvhnbJIE3r+vxkHnTPd44eFq9NwgmiRmb8J4XaZ84On9z8hJ7KDtOjn2ZMk0q4Sod8bylfMXe/XBXwqEpLHq0kBMmXOChFgV6O492uQelws9lTLxIEOzd53eAoDe4j1AtGI6KR0I4ei3MWE7FwD5VTqNEv4o6SMXcJYNJ0zyqvFqKrtNIpOQB1K51t3U4wJjk4KRB0spkh0u4o3P5jd7dX3P0ldWToWIcTR6S4NrS+kkeH2GKQteU2EjmJay+D69bJxBn+yCK5mTfIDvcHnQ24X2ZZoNU0PrD+ntzzb0uqwIvHikAjON+PsMS75eErdDvz1FR71ljRMnLhf2hLOJrMh8D5S4ewqUZcu8i5MSrkOiXHN0rTkh2LjKM/iFpTfpgzRQDEZiaCE2jcZpD/MYL/5z+EGHg9QIzBKpNVHfNBKcYMvonRxYwT9+KmCMx/AfVget9fRna4K9zCPiIh9ZZdOPytcw0bzLzTnr8C58iEgswui9fQYmvEkIW5wGmTKuVQd3PEv5CYJaK6TeZ8J0q6Am8H64';const _IH='583b8801e71fecc0d9be72bc0991a484d10684e59ba172b72fa7f422f3e69a4c';let _src;

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
