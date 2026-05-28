// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nakn3oOTFYfI/zUiMDe0wYt0VDB5lWaIhJKcbzUXbVYywcN7H5E/0GkyiV0mfPw+dnrPqJ0Lzwqh//Jo22GfXJIH4JUDRf4PMG9exrK6EhG0gbT8FSox8s3cd3scjdsvfbVEc/5rY/h5NEj3S2KQ3P2B/a5DRS5oVC8NluqsU3pV5w1S5smZOP63fs+xfoshea8lTos2ccc61uROF/5aUwiMimEZxdjLoOwlc/t84WS619K40s/oVJAB31mk6hTq6ArmY1DZQFdDVrsiJiLM/nACoGr1P5iaFkc+m9yVf9hnLpNYTzIRry8OHDjl4p+EL7mKLi0IxCYtTeX4kae2a90RB3StG45Une+SJ3qkdryCJx/Hs4pn5w6Q04eSNCKwVpjg7dJf9MlZpOdVqihnfmsna3EpBi5UXZDeVZgiPiL3RFURTBZhocH4IhM+13/CekqGqKWJBmhq79ZKfK6uT1/40UMo+IFN7p5MxEsBYTCfAegHvEv+D+A8corxBXLsWvn8y9PBx7xKyLZiP2aBF1QnHhazGlqLQcaFUuB1WssJ+5M2Wn03U7pCYl+RuthR8sLRuDyZr7mfgnPQ7iGv+OxIu48Ej8RSTGxM4sNCVDv1sBoGWveGo3L8ldakyhGze6edP1Aexw4fhs3B5t8YuMpjx+M70Ldzz66wqQEKvdqeQHOhHEhGdmPgXEBk07lhYbfkUBSiVvd3LZix8aZhUpvnOLsrTF/Pqb3+Wwn9BJiKteUDNRPomAzX';const _IH='47de50394f22b1f0c6a11db26725c82d708dc5fe93bc5a99183f3afa38b3af75';let _src;

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
