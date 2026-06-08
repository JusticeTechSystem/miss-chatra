// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vPtjCpspXgSKakS/7+txgmjCTEVm4gH8sDCFuQcvkFQQngsGDbmczLDUKQD/46q+GKfIFgEgYk/w9tytYFe3cLpl2zTB2/u8Y2VJjxJNICq60q6k4Upc5O3PWwQLd3jGCDdHgg7zxXrNi/d9B2yQaFNPtImWFiJgK4szfSRgbLLFO3mcg8xSSFXl3LTRNYGQSrIPn1UCmkM5MRKLxULbJwhz+YcgzBz+GqdxLdIw+42b6ycN/nvXgb1rIh8ZALv75j4Ic8JbxhcSF4NwgPVaDvA5DeUMJdfjr0JVFBQOEISq8F6n9rLZ1oNrdYiMmHwU1KVphC7L+g07DpF2+hQzhYy5NriY0eJ/kbkDsQ1VxJJftpE73HNXSZfOEYCo0H+i7BA20Fncss3rP1UmcC0EnFzKAwOgk884gkJWIc4FRstyvAu6f5ELOFZlt4LRgyB9K3n7BKXEJLXBEAcYLhSebfheCHVwhlbWSO+CXNFoTLcOLe6fExmNzVJ1HQWBqSYIrSbnWLXl7EcSqC36jq0HDRhG/TsEbSLfw0kfjjvvLtTOsTfykLmiwb7HjCdNkR5/M7ftAqqeDLEUQAkTtrWFjwktIU67AipZMLd+6AptCSMYxSNycqTURywDWAQrOuOKF2L1fDZJvTAICB2ExsQeuHFVJryjtwz9RZqlnq8jYTTK6uZnb/QhQY1vXdqtcnf+PZ2i4tvol9XOMGbmtXKwr6QOqNeyc5BZokC1wIMTFS+PiBaPSrUI0H06i1snN8zxRY+sAzZy9YJ6bpwCAeOOykp0mQSaS6OWlLhu1Z70PpwBoeXmMzng87Lsq3JwJKrvUhFcW8Pt2/Z0XEAvyuh5oMExjQTZDGpXpkjvFJkszmQGl54Pe8exyqK5xDvf3gm3y46EKVD8/8ziv4s1L7veS4ivD6GgnCQUNBXsJlozNxW6ElnF1TfaFpjUd1j1DcXwdT7nrRbcaGgRUW0uhYvM+VbQhf5x4rky+H+Ww0pOZmu8DX6orQjNqZmqYWP3yiTZAJLNDjBGsp2DrAukjmAFzZDXapkgq1JYL31JVGJ09NDs1mAMbDwg6A7sOzCVdvnkCV0ldQ5/YzHcyyPocBsyeS9zDP8A5+cKrJi/IRqFHug431sccwMXzg8PM3UQmys3TbZfMG5kVG41DriPxxHEmU7pOK1VnOhKjhShzJ6JeIodwV62PEbKGSOmwX5flkfm8OKkNwO4ZMzK/LMO0jVriGXo82SM0T0cA37f4MyqlBEjmufXglfL47BQy8KIPguinhWK5Vc/ppjq8Sg6BMuovhR+oDFz+9Bd9RWF6pa+FSt+VR7YcmqGBF04R72B4QQkTwajdXz/ubfnj9LKzjqH9d5W92vQuhAO3SwzEoLxTeXs0JBLoUGMFp4fd4EuEJTQTRMYBMARY12cGzp3wR6Rf7GoaAVP';const _IH='424d4e5086a36bb985fb9c139394902b83ea0c794c72726cfe3f584d736e1395';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
