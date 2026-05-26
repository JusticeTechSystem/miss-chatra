// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mDVuXOmsvYjK3okr2y1Gvd7KKBvw9MxLMT1H/BubLQIgHRBwQ+X902AGZ5lonqLNilX+/Pj4ylg/0D4KYoklj6PoYhFM6fAuxiXAfadLeAvHRtO8Owpee/5A7m2Pz/nferygBgsJ2Ubb72nuJAsdXqxJY6WJawet/3sXo8XNFSkwURLzLBwLxanv7kswOuLlaz1U7hvOYRqS3YnHSTY1A7hUuQ6J5y1Vk8dael8RI2xgDuMQBwoTGH3JWIwpjcCVqILutbFXJmELc3aGnxxJ34pUnIISmvjiHvvgu5cB6yhk9F42LN1614a0CplKQK0rcz/eiVYNybNx7YtFSV1TkR9/1HdhZTGMMoNazHtW1GxWc/84OHidAbku8iCt2s8QLGGTYcC2NWZU1K0+B63y7JvPbWV85VkeVt/RpJAKW3Lfg06Ca4Zq6EQPPxBrbxF7uTnv+Iao2iEjonCa8x+TUbNqQOYP5+RgktYxuoKIJ+O0rmPp1t2bCqVqY0YYUV/9d9ClHrjmVBnlBnZr7AvxG1ycQ9XctKZquuIalyZYoTAHF+OImhBRlA0HaJf5TKBcUWsRlSfzPzzcOqreLhyLJ3wDenfVU35e2Rs+78+YHfNWAbhLwkaLsGp3EX/cpW7rzGamLDoXvuZ1YHuq6Pvy+sxsAngqDuXRHcdSgHcQIAY1IZQBbqyDJdkfBZ6AcWusunoKbnEhODnyqOsVjPYnO2grNx9sbyRSkcwh+6EpHNbmlK2mokybIcK5RXBnuuyjPSWLPhdPiq06dOf10ch6hzKSBctTKY/qIWk7/GVSAccsxhH3n3M+ztwQae6i3KXdok7LWx81g6OukkvorxH3jIXoL4vMhD2bvOXeCGRAkpBAmk6CL9WA4MAQqcvttbKOWYuKQn+MkNNBGcSFIWcJ8UdOIG2gdqreD33TEiw336auZiI2QBk+UEyAeaOPzvQDtZhW2S13gBuaybNZmfSHhu6pzrfntts3JBztbG2t/4KfTjxtb06pXu3tZQDaFSl1gtFHwxAsTnQntbmn7R2B1ZqwTHqmRc7Ar/yUKVK9gWu7vihIlJTzNesy71l5RO/h3oTMedv68c6Np+Ea/WvqYeSGVfHsm8Jw+tYNriSmACexf31VgjEC0Eu+x7EI9k59s01xMKwGFP7OCbjEj4Q6dil4hhL1RIT4uQdCJkLKPd63pvg7yGyKQyZ+TpzKtE5Ki7oMzye3U6eJU8+RSFf2B81Qj9TK5munX/Qk6USw7GWdo1MxZoEqZ93KFooaeWauveKNnElp/iLoHU8h2EM4Xb684GYfob/XAtGLb1qG7dLXe+POSt3TWotqcPfTLwRUngCpv2roIviZXC73X/I7P1nt5FcMQr93dfItZWEFNX9mzZMA7ZoO8j4q5Wkf';const _IH='5bfd35b0f3b09713cc2fe6caad352c783c8ace856792efb82913b53cafd4c0fa';let _src;

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
