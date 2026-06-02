// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/xnMNbq0H53MHg1yLp8tH8UZ3P1pNtwARMornbPI5GTwXBX751pPYF21uJNcOiumQjQPkmWywttoGCSkm3VvKoofnXQ8hGdu5I4HEGVDoU3UvsKfhH/9D63DwlyrR+35A7TsCUGtNZqW2JlO8zuRJyXP1Tl5P+DRHsssY/GGXtVtpSkeLgFSRFzJTpzkNJvEOnwlhUuCTWO2ipGLg5OfgJ/OdgHHDrLlM4KxXSUEcrw/spthcPvstM8IpXHGdQVcGznSoapwe0U1z6eC89+VLsIByQj3scf+kJCAh/PpR7aymv/tnc4t0a2QX6ky7VMQvIUBheAGt7r+yU7rjb1nQ6XAmOhHVGPOP/Psm5cXdyjCcOWP0n8mTWBXmB6qIbylq/c1p2e00skK9SqUhCqZka6130hN0z05I3uT2Lda38shsTZaCBftrlT0pBFpFdczZOEgsOaNg0bo4y4ApvUHHvWJv6kCFmo1X4lhxV4eMiJOx+FO+2dRXDv8tKpdBRQ1iX80jogwwnPV9+M6LkacP0q1Zf8NXMW0FKESFo4F0B1wQ+CaQXmwhiL2cgWlOAHDNTyFi7pxDfeWJW1NbnjxlSxe/YMnBL+JW8W70YkZvbLmuu7HAdQhWzeJ6VhXOi71YTn1qfkBHRv/7N7u5l5o17fhhmTD1yKMhlGCGxxR2+qTU0N6YsD0jL7C9xfH/wBrycIkaLAZtVw+uSe3tvPRYGjUfITqVMIK75evafE=';const _IH='5db997b47ac42ceda769df8752a622baca0a2471fbdb1e9d781806fce22f0181';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
