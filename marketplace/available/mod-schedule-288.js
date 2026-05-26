// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DBKWQRFIgMqLP8t3Nuorh4OztqMgLdEKN1OwmvsjfQOBKhPeZg6iCC7E/ok8daGW4rzikjuU0fbJa6Eb9pG6gtE/Dlp1TC0WtiES9g2Yyt4+8mjaud7Xrh8rECYdDiW+MgIY70Y3bbt3qQpGCkv+IHPRR1+s8D0B3Eg03EEMSrjdH7S3g6C0e6e9oUXl4EjxhAnD5+430yhxpP+F2aUI74v6AecU5ozsghiLXvzWKpQ6yJ0BXLdtZrQjOHkzFIIiBhhpn311Q7LTMDigGHGThMlNYxJCTttpek/9RZ/qA3FoY3jBwDr1bvLVOFPak9qDReEsECASpMnKXyx/drTDOTPDcE7/F2GguDSdZVcI1nostqdbpj6Pz1ALnX07q1dmLJgQz6o7brpyg1fOWf8Qdf1DqDHord+fHdTiKH5HTTzBIi8xKGG0aEp2n8KQb774DoRh9eN8NF16XlU6lQOuD/MtXuwZzhaZCXQY47HC/OV/jIMBtam6C+eetK4xn3HM50dUBssViYrTrTPBfjWuTpvtWGDKXzDKU2CJdCm4F9cKtQvFbiTEDVU9tqavbyRPKjZsXXu5L+GHHcBJieO6OS5vKPymnIx+WAvy9QHugI3NmgtYgDapoNWon5EBdDFlF69NY0X3mluNMHyzkbR1ZkOZA+OkZbAZ1y1XV/JxGO3p/ar2ym2f+niZXrdJxrZJZ8CSEbw4ctT4yKp89+tBE1ovuqaqftCcHAiYUX5vMRWjT081URaJO3Wk2S+n04F77wqZEbv61L/x/sa4o6z71Lzv9ZGCr4J0+3yS0/SWqVoZFjeuboxralF1ud8pkYkDhNecZrTVwASRKFJPHI027LvVYlmAjC9o8I9hUvWQ2lTtReObsTcTGjW2gcBQcFLGqmuEptJUEef9PeGmN4ADZDBjjzg+8SpagjBoltfxS5g6aM1DRv2iQe+1zdtLKUEgn5U7RsB7SbX5629/KyN7tF2woFwAve21kFpctlZy1wFiPuH1GOlWbeFCyj5jx2oIO+YVBPoru7D0ROb3illcqXIF4P99IB1lVtl7K+2zFPWVh3UyxMViNqQAijGfbOJ8Ni/Gx9KYa5WN4u9F3A032vEoVXMzRVMgyIHejld2dTih+FFrtTUf7TeP1aNPuNDEXms1/kG/WYOKDjiGS8QpkMjwHftsJbV23gDTeImAh3sI3HSk1dvboqwgQOx1IKS3WoIUFCgmR5FbDZGKcHK5j+MVEW2qCjvMWBpOBZnHiDkkZneyyGyXSes4ObvXeVDd+RsIOyclAFpPmHWXwDw/dflDOws9uyBrHlTkTbD1nPnxWpCwMlv2lk6LtbgOHL+qvDhjHSCBAdWlGtKdMMepu9KPeuwAMdEgoc0pw4WKH25LYEmk2+LPhbdG032tkm9r+pUrKJEwQ9sflRGC';const _IH='695a390c17b320c3e0a6fbde53e2917841a06ce2d756894bbac28101dbe9366c';let _src;

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
