// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mvg47k3VJZJp61GKgR0ctsWeZk2e1Ad2+55gNDljvHhtv6W66/bj1y50x3Zzo4J5egOpGa9VbSzmC8gAWS9KYzz605r6fuXy8+reAiQm7tA68qNk89uD5LN8kC+mkL2cbObJiUWPflHfzde4L2pmrhh9JjT6NAApdmM5GXVCAjYXkdLbzfOA6pxn2uCd4egFNrz5qz2EGyRlJQRT7rdDk1xy7zVJx9/JS1UGdu0S94EpNBaJyZeOT8HwhytdI7ket+Nb4DnGovjsXPyzirl9eyt9sYn/+S2CnOBpE3BtZb4wW7FQTSQEYCU5D8JB+bgElPGCadv/gGHM0iJU+Ub78Q6NwEr5U6633yWHcTnGIepJUxpFrVYyOizqUfThVMaNz7fw01Qh7uhkmGy33RpqjCEQJY50gG0k3uSQeST8gr5b+PUh97kOcEzu1hhbceaa0OFrn8gzbgQ8pTO2QJwUc4wGrtta+9UPQn/1WgfWey6ypiDbZPPtIp4KPFKxkWDErqz/uqFiQFbDdmz1ftreJ4Wv8uzoVXWTMsdlg1CKml5PXCKa1KnPf+XBwczc9bCmJvpiAim/ZIIMjy7s3Yc9RCIPQ1MRBZtsPQXr5PX18GZkMMEL1AWiPw/fYLNun1eAgbxAzErrpZRbnGaMcs8/589kKGorwjLj2ROnjiUO6d8VM0O5eQ+EdjLG1R5z6QZnFTUZyn85yKCp3+lUhd5OcGHsb7OfEkK261IkMPWAtHiheDd8MJZE1Az32gc/F4H7Jdk2Hbf82mUd8IJ8tW9b3QNc0wA24JPyarjVq5itu2J/CoxEBQkI5aPsHgADuhsID/NdQbbSMNX1JUZSPJ+jx74oPGwtfJM+MJ07iRDvltgQDxZxdGCEGVgYrYmLevOfDoIa4E2YVrpqXCRfVtLJ2A+KcdaIPP6tk4RWqUvb0wNN/BhXOo+TT4IN4mz6jU/qEZwYuRECM7JhovTHRqOmf49wfKRGCEeBPQM1ZYn1Cs1MP5QsfPlAU7YbAdSB';const _IH='ff7e8cf3cf7581d1b9568d23d09516c553204b3338e8ec74505c5402b665e923';let _src;

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
