// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Brv/k+uB0HoQD9WB9uxmjrm8+uv5MWOL+hlGyk+P0bBBwfX1FnWQod7lnt3sz08xvr1m4WGfr39fjOPFzwHMGLGGoN9dud8O2Z3yYctnWr2K/Dibi/AiE2OYiTm854CDxbhId1BmRHSF8o619kvVuLVUkJqYtKT2Sev+kRCx0fT/SdHZsOrTRwSwR0+ehVd9by5t/Nf73UK4Zqh6TQVt5FsitV7Vyvg1XpBKb7hP61U77k4XiqZt5Af9sCZVxb6S8fBG7Z4wAmRThczgH4+fI7FV9wE3QBKxUxjIX8LwC8Bm+0QzXaOXmcI/lzkIPOWmvI3k4LpMAlGxD00Hd5K85sdRlXNfX8kSXI1oFXpT3qtwtfPqp0+eWVom74XwnjeGc3jPfH9e1eCkFJ9dRCLoYTaNip8ou1EI5lYjA9qWDfiYuv/+uNK86ulZRF+cwJwigAQ6uDkpbPhUn8ZysLqU/bbQF//ZDyMItJuJLN7sFBGltzq2CKOP4iQRQ5gtGEVPV+Na2Oz2OVAOvgGxxqlnEH0I0TlTgpfeZGFlMa2OPw0g1rlU+ZsqRSS5WwdDU+afT0WPsdYGGdy3fqTNN4kq60i0Gue5liNomyglFNDZMNQN0768iRpvRpdAucIEnC+/ycryBDnbFsg01ULnftseRXTANFNtyCtpedHa8P3yqCr7KiAWOaSbbujLqmF/Onlt0qzMFvXeBG6MIHUIqeg4m6XYPh6pvzyBGytxRJBMU7Z6MmcWfU0TaWONkRcJxGjm/tsATzioNNbHPrU7S8VpwZyXrcc4mIAYw2f7F2U5w0O39TFaOT0c0SEToHLx03VE8NaFSP0jI2QVav5Je2r8miEZ1TtdoYGHR12m0YrU9i0gKj1luywyR5brZa6KZRHfvuwx4oLcyO1Umf7ijJ7ANwwA/ehWYi3zggKSON5YkbCFfFDlo1ihxbiFY2PRbTAFOUlKnu/QPkQu8vyR3BHvxfluNGOw/Y+y1rz8NE2PXe6s5c3OlyBVlMUdUY3rj73g76HV5EMBJltmxQFN2oxwGP+KKMwL2GPw1zzgjRGVQNqhodnKZHfDwzwyblFckclgHKYxEzstUz0ZrSMjU2VOWwx2Nwz8kax3dLJWNnrkAKAgmHeyXM21qEvOCxmKSxWyfQ2IPwvpb1NTAtcVGT7mZPt64Oi6rfvqXy5OtZQqeF4ttXMTN5cbw2XrK0wSdn01+OOfZo0bmej48ga5P2Ervce2WDy5eU0J4ttcFmHBfE4d7ZvDUj9giizPuZI+szb47+4VaYKezjzyV9jcqyASVRqYrt4+8m0nJeoeSbgJfz1MJN0DbkQN/nTBCOmMGp8KoT8cdrMj6Ts9dy3agQH9uNHeMNJb2ZVEoJk1mO9PYQbA6PFCUmZHrEEO+nc7DRCXPji84xIGYVQJTf7OQrwOymFMK+0FoVTiBlKDK1/ef5';const _IH='6f503126255523ca6b598f352d35a1c3c169490ce2ca6287af4d8d5a8477a847';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
