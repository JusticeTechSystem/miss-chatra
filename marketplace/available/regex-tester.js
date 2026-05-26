// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3DAKBKyLY5X/8ZNgBwywNe6aGv+QxT/q7UGlnozehVYPlj3TQUdLudmC7KMz1dt63FNbTG2uVBdvGax0fM0txkCR9VUd6FZRoPK8SzxO5U4nbuiVE1G/XI8BgRTAu4HqJCePH7y/ZoQLkSQ9P/b3ohcQL/L8mnTRwZWzWTR2JjQMPudaolqkejkkLZMXCkBbJi18IuSgfbuyy7d7zI6lkLiiVog+bDjRG1grSW4boUfDP8sW9fIw+UUYojH9IHixRBpUczbgwbD6PGTaCeQttAwKKsZq0KTBH1Vnq5oHQ6+khrduWCeONOh/vbXW67JoIA0R10t6X73B0PGQqZwtPbyeKZr1Gu3G29EQ8oufzqovu6s1EWbEmv8AFwtMMUFTXyx7EQ02i9qwKtjIFW5Onpf74sQn61LxSNy1+S1Y4kSWhH0l6anX5BUImKggpv/AM/5DUtNAOS/xYUr01P2EMUeEyFJJ/0Cq/5h/yWq7TemdwZ5Slc9l8Y8v2FXt3Vdjw/VX8NPBPIz6BjpilE1SN/u2Lxsl9DHnfiNqbqQaAVqmVoRebcO0PjDEIynxdO9zfTAhGoaxiinhidtJ7BWsDRC0ZMOk8NTAcdr3ltPV53H3f3OWXbGJInEVU0QzSEJDCb8pu8uy4NbE7I/D+W1JNr4FF3SHVpP6PRDxBjz/ey2rk94210MODAKc8DkK7pXtYd/BgUgo7wcDUdcq91kSHgjTH3P6YDry+HRIxZ73Qk9dCkRQ/Ij54Kuiv8C/EHus4n4wwwjdAr7mNfIPZZeHFsA38HHBDTiil6JXs3rnQCkzGeQp9y7y7Ar4NyWC5D+RpOrZFNwiwpISP340DD5sfYpLbKSbMNIJMKS4FeYurSdwpUDzM1HDNcRZChetPk2fzHCKmAYeO9sWB5Uto9b4nvN0QzMCGwKYeCi05Wd1iPpdZPU3oL9TeQaBI81CP4rePiAg/lUJQ/p5klcb7Py95/Vw1y6tEExhGpDZraGSWQtRJ1qAa299U2fzZ1t5mpkYWFfLpZWqqc5yD2zczjnrRcapro+Br+5ArLDdMEy3k77HQ0d1sbjJ6O/uorIpjRPJQdgI11JKToTsC5OUqz9QnIVq2DowoaE7hnie4e6JRxqPJw9vyRftZPeWNbdH28R0Ke8rWIq1MNnWPvsTkRVgiRFKCqe0+FRAT8yEPSAz+FPp5CowmnD1CbXrEdpVUl9xAcavbfGgbtt39eL0GKCTVISxw9NxXdrIBcdSwLS9KXIrKpgeziH7ecNBCjMwPUBXfkQSuMnHvF3+5iO6EEjeRBsG3kU2QD4DuUR1UINGs8de559T+3ps7jWYQ5Bdb/Eb4wbqlW9SJznCkN+b8Xx/Wqlm9+SgS/zo426HqEsCQ==';const _IH='f707c8a9ee927878aaaeed0ff83a9a08a17bb2f90390d4e481cbb5912b585746';let _src;

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
