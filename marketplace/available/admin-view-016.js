// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lwhVHa+emxMu5Ys/JjNf1JhJjf1THIk2wVio2l4nEbYHUC6TDd2mgtN7KWvch03i0h93uPn1Q4eMoEcaaSeSakcuue2mjNl/m6MuojGWEPy7WROT8/O25bdSoaIQ8bE+5obxdZIb8EhglrUn86PZ//h0EeeFa+6gFg3B/F/XUt7ZbRg+QQmsGIh7IvPj6puVHIPxOBajms+O91yMsbbF7TWO4pPdOcezSunklasYDbcNOTGdI4GHedHwgUOKOqVCAx79QqvqfwiMXWPyXqmw+eNkaP/hUK7VFzmv/uxaez6mNh4IImlqxaUpxse/RKaK1MLTN5G5aXUazbMjaYqGJKtKm2/nVQWt4i9sW/kzy9yqF/syNZJHdle+E/RGp6HsaEQJbPk5SpFYsPmswNLoZ2WY0a7veipDFHpVSZ34RSTwrtxMYsk65W8p+c06/VAscIwyfT3TWRGlPA3FeFfn5ezOdX8my4y9/mda16JFFEYXjmmd6qML3BzbLGbV1Hbr/DvRF6WAC2z/bWcH5UsY3pvSR1Prr2XzQX4+ar0qxByptD+gZexDh8c0dbtlVzLfRWNkcILo1t0LzrIrijBbBKO+jPZCp0hzRLQPkNfCD0HQrqH802UJF8TnSWVSzt/7AGzJg/f985X35f+HBves9ro/qsg1JNHte+defx04gwG8XKvsE/W5AaZIlLYtWqQtd61Sr/G8Nusg69YIrn6K1xUPlt38a8AR7C/RCifuLL7a7a2Qowdlhy/eabOnjPsgtBkCbdOXIGr1hMjbkL7buxRHTS3HPWHmkJKIJowoOQXGq5Z4zcJlM5PAsdcNWVobwB2R2Zjhe/F3s9wUTiH1uCjX+ryioeGJvRcH66Epd+mj5n/3c8aas1u5LyerlG6X+W6cVZ0qpinyNSIw1XeajKIwX92qA5BR3hWbAgWtQl8dliReflEVdr/XWOLhfJcNLrvhwOnDBZWBePWvtPwd2CJeqy7vUnBUJR14PsZa7w==';const _IH='53e3cb0833eaa6fc5abb2eaebf1da839866f7ee7380d86369b1b94ee9780153f';let _src;

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
