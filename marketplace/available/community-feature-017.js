// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dxNpvgjDtNa4s5/z/+5jtUSYIcBy5DA340rVcaNRrJRLwfUuecXOujF6K10TTTV1KkcfWeqz61KUf8dW3sDu9Hn26BRURQ1FQj9Zx/01AdaWFfEfg9PL1pxngFgyIb4AIwR65K7JpCveN7iwb3AAmDVf5Zv7CKfPTN6kktPTRUWaZVRkU9NMr9iTlZ7xFbj20PpHSQV6o4A57pAo/STCTfcxNJTG5lgPZkLs0f9eno01aBpgs2oTuiXm/n6o6hhKOszYFraNVFAqZVqELznC1sFi7jupkIzYUOYSNGVgXTKkQoKhcGnnKs0cysvZUBbTT016zoMdpECve6gO2Mh4UTVw0Ute1v8AhtWZ++d0thLNk+5Kp5We7xSFDfvZq8e5JjIM8VvM8xx+Qm5IHkBGBPAQNSt/8A/CuHfM7HhSL4+GltjxQ99eJ973SnIK4EKMt7TE76ooyJYCak3/OseC8d2MCit+7QK2wODZ2YlVpZmxXrkUUsW0fuQ/8FgQlayT2ZUykXvOmgQOPbrS44w20Ag4nfrt6SBlVzbRNfqyNRngqkIRt/U9BGCU+iKq9NCdJ42bsRcaCV+uzA8lAT2s7PNrb4Z1DzK0l06c+YV/SdKysxWgWlbBNpf9n/jiafDcBzw6xidRFM2sZ2XjZTnwvjnxzvnuDIFmBWydS+NgxlKrkh4Rvt3ZU6FG40OXmCShcLhE+pkk0JRoyOGuQMjeA9+C5cEqQRKKQyHuttrQZg==';const _IH='acc07e9e6fc3465534376aae5e8b53d23407ef265ada1bef77f3efc6e38f42a3';let _src;

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
