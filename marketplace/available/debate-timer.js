// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/KEWZfMoghoV95YTNyFpaQqHLRDjbcrHD0n5zEIXPKFb5uUdMBUWcvBeDkZtG7FHIbpB7m6LWvi/1GxTYm5lf7KGkV+TrEC1mfS+g5d2FX0FxYNsLutZELkTmKLT1ribqN3xANENNXH7BUCjmtqDPSwoPpM8Aca0X+kNbJvN47XNEIwweMCBDpzM1gw12puHb/eHl0Rd3lbefuC1KehLhXPS1pFIIV50HXx6ueCx1SBvTxGpIOjYBFQwkafhoxWuv2+JUtYzAIQtvgOwrPta2fRHNXKbeePVQGIld4hW3H2q+/9f+xfA4WQg5Rf8ca5uF8z58ULdXqa+efCCNV1AjjTcb01JAF+ARowawhVnt3co5km0OpQdqgeC0ll5KesxIkOZDDG8+WFd0wCo5vcmrCCqkW6MvEfbpFqxE6mU2r89Mx5Zhd8DK4/7vPisIU3TWE3jGsXWDFvma9z4avDe8pUHmoV2eKymJQjgUk3ZvtVU8NBZKjw9hg70Jlvk78PTikRFmMnvFL0fPWFqoe9cA4WQ97gpL/quloSWjR7f7/e0oKgw3tB2RjO3PQHIAVKT/kuMX1tvN8YILckAyPBAeMXyQEsgYqVUG8YedWrp5/nWqRSK+fNhqyCDE9w1Lh8IfQNfF5wIdTesqTkYdYVfWnYPkkuTorD/UZyd4bR8jPU7mEvEBw8bEmCm7A4ZAcUL8Z8RYcpNDQYUQo81TNF2QGpQdzh56yie9zNJIXXQFl1tUqfoG2cHoklhnRXj06KxKi16lPieafDyGBVuo8EkeQQz7t9uwpEWTFkiwHuxkIyB9HAAz84V4wzPSBQX9iejp86Gs3QGccOEuDZGEWAvJyxwr3hYaVLlM3Yavgmwgv4MAfxpMxzzgyMTbCKG3aU8ESapH0y6hfV/imZ9PXoCl3kYPXCw5tNWV6+w+Ln80TL3lnA6Ni1fsuTk/Jgpfm+cDJEpxGTai+jjwHqOkfQU5Tn/io3IZ9vt/tJP8Cot2lCtcILYx8J54RC5EwGMH74TkytzJHcpBYUDQbP3famaqZ0Qoc489EdqXmYZD1UlmeKyJN1U/6u7j1S610qHQ6d5CDxad7Qx9xNFOu2DDkRhU+41QIC++/mMD8DKQZ3Ov60pPLV4M/QkCzrFSv7K8g8ZpPG6ZGq9himQUkpr5K6JPqMf6h+SyI54Hm/jEWkAL0p8LlbWudkN+XHCh2UoLCTATVLudWbk2wo98sXO66cd3vUF0leGxKYYx9ZZMbZaglZoQVaB0fG4LdkPCmEJrsVUGg==';const _IH='91c9ddff96b55cb7c1e5b3920ce0664524b705e414293e7c760ed1b7e19e040b';let _src;

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
