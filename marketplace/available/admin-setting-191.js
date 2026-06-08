// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jh6zmiBnZOGzvOWteOaESrlp6VVD/SXoRAwraiDGIcbJW9+PP81hfvdseTd4Llp6CrC6dB3+fpuO+R1s1ZiIpWYQEhaqqYZtwGulIxI2tE3MArkqMo34cPKslmGSiaMmqxotwnpzEETEppgQ9RXAkKXvP1ol9rSLlw414hCQWo0QeZ2feX0R7uZq5HkJUUOhWPnr7cuyY4NOLenoOyLOzwYtU42B79lSSbXFPjIL/Px+s1Z8OXTquktmMb0R0tFGFk+PDe1Fjg38og8rHTR+T7rkT7tR1Z8ckiaHzZeWpK5cFvOrku5M0OLeAXWs97jN6FapF7gDmuMsupo0DlK+BpEjBPKI25XncK0GU6YoxhigRLjx5E9BdCJ5j8aqfbw+GR/2E2fInUz17viFf0lMGd1+xRRORyqdV2rcj5DSachpMadam6NkMfmyYqdUkxjdHxW+PkK/kf4a84bwjHz0ob7TKBAWMoQlzwkeuNChk9e43KFf/2fiOnYhT0W6vYvR7OlXV0dMyNJgUGoT97Croemyl+XLTZYuMHZnzylEciFRe6IYHLVPeOfdRnP3wLSA+G21mufRjgbInkupcxk/WR2Fk86rfiZkWnxYDOo2/QyD5f7Ox+DPs4w6VzmcqZ+l5BSdBNuXVAbN7LiHSWuxbYU+JUAlCRlJAaEaX6BBC0KeT0yIzUmnAaydG7iqNS72pGodfFnCVMN+cWNsNWONaF6Pk2JnqDNVBDO5XcQL51VrrgTX0SaDaj1yEzGDOjVZ+ycYVTocZ36JEczGy8z6nYt6ikDUYnllnQ5InCLdqim+FFb0E6GmTpEnvziB3puL1Ird0pWGHRoM7apms2F8EBQ0YLVbNb7sBt7T3a7A83oxjTkvGP7DQFfv6fMSoJO5mFwNV16xO0I2Vrb8DPJuV1svchvSZM4pe1VpiVYO7MbFyf34gTQ1aiycaG7LpE14mqNE1zZKCMl3+Lug2WgsHR07HJRkw5rPSdm3mbKtRYcgJeRy7sIZUOgjPjG9oc6vKCv6dT8f7p8=';const _IH='2330da0ae0bc4f2dc858397fa23729c6fff1bd3318a1e445ef6ce06314ae1622';let _src;

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
