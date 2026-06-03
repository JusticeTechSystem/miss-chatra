// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n7Wic2vLNp3Ui0UyMTwmt17n/7PVgEDK0XOUoVcMqqWAQibZfNcecvFTW0LyLfodaz58pUiLZ+UACG2ecuvsemwlWzXw6B8mwkz1PJVf/YtV4NsV0TVJLrYi++mhkxbCMKaEc67nI4aoeNevLP/vUPvkau0q9EA/YdRuul6ByrDQ/nCs2Se0llpTz9u1kHbXPGHL91p30JHu0q6YviHFxu0DbZQYsaT6kUw0tyMy+qu0vRQUQgxLPNmte8fjVHjNFyceozgRwtQOQ+Fv7sfDVjWoPjOt08Uj00b3P85VTuTAUIVgMkY+qIEvq1IPn1eOzVX4g9ERgwNfzqePoKgGIAJN5/95bT4+HvpyjV26BRuLQtmZjvDSav3J0p+TIaKrvM3+wONA3xRCwASWajFvwczPBbVdFuhhsK8nBLa3zJ9l9GNv4kSr+hUWufBUjTnDTQGIQ3YRouHtW4WwzXLyonjYPR+b5NkT+dqpeLvFcRuFf+Qwgz+hSEIdHCrrOaYBN9n0Pb0cdWz3+2uJOpNz+cL7rL0ahdD8FJZn6WZw8qbozccXxio21pH8p4wZeca1yiDPu8n6rnmxMCU3/Idd08QcWkKzXt3iH/k09vwc5uC2mwGjUZc6qRwk1VUsEa2h8ZomLjVZuC1Epb5mFD03tPh+16PWJfFkZhSJPEy5GgUYQKRbzgLCoRdmX/pJDixJ8RT9vdBJ784LhobG2nxo86K9u6B/tjEdY0/Mg3lED/8GSkRIUuY8pfYVrllxh1NKCVrKcFzvblxjJR1FZQhYO2hDQrqj8J50tgQ50zqAzO8Csao+0Q/gT401i0bGQPN0fNcfmaQgZHpEU2PEGr0oNtDEEnxCXOOy8O0KCzIAz8aALUUuCdCOlUgz6GIzifF1KU3RDHfoEZERr5CqMAsVbbZel4DJHL+6+N0elQe7GQzRT+U5Q6qb4K9/eijcIOU6rV1AreFDo1TYCRPpOtiBl4pGjhlc/ERDRrHDv/6VSvCA3oL4I1C0oZHhPJWbWlqb5uXPGFLePUrDwAQbGPOObBhmkcaBq3IQ3cZtDjKD';const _IH='f5ca1e31fe0edc73de827a089748add1174e039675fd444b83871c4a47a8ec1a';let _src;

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
