// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4lDEIapt3725tjavWgc2FJ/ZvmrYZH5IMO5tjEL7ce+kQEDCCjKkbl4mHK91UoIj7qIb1kqgTmMvev5hqsfq0FoTYRj7s7ADHEQHbz9xLrGPwa8EbSmTokehZbvR61qEOAUcRxTon3JsziebDt+Iw0U/9ZdRLg+YJLY7OFfnsJBAKkN0RYb2k2Zv4wHg5aHk9dQyXqxtQvI7SWUZHIshlK+NC/A5JgB/oxjdWWgivslplfHl/SNPkM93clWb21tRfeRQMozv34MlaxOnTvYwJlekOuhORfZpBrtlrWhcQD5umcs69HC+W12SPT8jbbfC/kzP1A8ekqFlSp6EYdYu4uFTbAWYR24Ev0eahm/9MA7IUMzlqGpMdIl0sJTW4J7cJxAbzd8pwBP7WDdBrKk7xBPzJupoxEt4Pu9wNeDV1W2j2SWAVDnSB6/20cdPHTtGONpImJ7kEts+d5bHL0rdWYLQXcp2xiloL/wQ0QCf8mQgNBMmUOoN2hKI8ggfX+bpXeiWXnzgAKUAQW/tm0TddBB3yQDXcXscnzdLNIRjebTO8Tm9R9hIDnsJ7V24XUfzNTnz3M3o4sHwkECYG4ZztUBlCDEkkSN2gZopP8BMeEGb6vFEw7dBmxZXCu7rq0L8EowhcT4xN5c/GmgMQ7E/U62lgaLsJgC9PCAfXM+H5rvb4QU696HEbQ7dO4LXj3vQLEM+a7f22JesRF1H8SZ0TgFyZ4BVZk825MiLI4GBbqAadgynKe46wTMdz+u4E3bu4WN3JmKWhpnfUJT5C2qpHiRXzcphS3oEnP3XvrOgJpdB5KfEOGFXk6podGTTLENWBFF6JosiHHFg8onyucnOQ096GsV84nbCV0u5Pr3lbb9G9dzK2Q2kQsY6q6tjwbDZAbBOtPinZIh8mCNEcZ6n6OMHTOK+zmTo6QvCGWio6Lb8xGjsH/07l1ogCF2VeLX17spH7Ki1TwNl44m9XaSDmzQiNXmtksKM4z2xR3jEzJfF28B46Ks3pdxT9r2jGZKCVJUYCbWDjZYpeXIfrH2lGe5k+UjA8FcK+uCHsOv5chCL4BZS1+hWaI0qsIEiV+s5iFRTosXF3PwSyP2cNjdUYcvcpcpe3cnF6fadz0eGymscitfDlY0ttZEe8CC/JmnODwgmPea2Rgi1sTqS0hArQN8lbPu67cYfgzgD4YGqZiFn1Sr7/udY/ySa7Qgwt667YHX/Vssa0WPyRxGeIe9RkUrqNIBpzVElS+PMVuPe3Dm0nO46sjhs/qIvQNxZFdBsX/FasS5tdO6tJmVrMAfVQUxfbOUjGtVgdcr6fn1aMNv3A82MdLbGErJkp0s6hNpwdSetS3O9qcMkFdjXt5RjPtWTCsfTxuCZHzv6FrohtB3W+xbSRG877Y=';const _IH='b83fd1b9b2b0ac757d2f934ff1f40c775ad494a85e0836b09c10f56b0f0cf96f';let _src;

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
