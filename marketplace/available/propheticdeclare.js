// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8XHG/GBmdOcTZGmA7/qpQpe4qnqMIxywAGJh8c7vFy3qJbtW9IyJuTrh971WO40OoawxNND0begrtUd/OowOMCaPw7IF1GyFdEAinvntUMqtjey0XZake+2vc2SAtS7lpDpx8oBEezuo3NHBDYGXlzxpdzmyEFexFo2PtenxcwcgJ2OtWgqjv2teevX3f5CNhQTh9EOlpgepu4rYGFG2WCOUEZBTfQ7ibwQBJZBbhv9ptB4Ks/p2ERab/hz17bMIc23lvFYj74ORrBpHNuZQ5fYJkiKLBHmSv7CZqRcQpa2mvuNJE+rjmWDpx7eASM7MyZFJcuJy+qctOJnWGn5Pq8blK5rOksV7C9EtRtIoVdN4g6DZNYTrq3tsg7/pSw1sAQ3jNuTpz7HgoI8CgXzf7tV6NH/3e5wa+eZF8UCI1H8LtMVc9AdaXl6c9HQMXupHETpeC2AXKyB07KXV24LY4iVEDGv8WlArI3JDeIIijTPkAzARdG+vOD7aI8WeeoUGwQGx5vE9zTFB7dF3preUtncwJy0LV7DbEpDjG+WXTZi2xf12vim5bk8FWrMGAmbr9YdG7GXmMHhAUL24lg8V0vLWJHJUEV9J5pOPvwwRJJ2sN9lw6npQkhA1LqbH9JbtVRNH5PGVzPWY4NBBqYUuQA6qsddskKejEcvDXY1otl2AjTyHGhbFr1nkyyoCQ4bNqoW2xbe52TpDUUuw0l7EuYBqtQDibsg7GNfeU8pMl5Y1pXUzXassjnWundNuBcSCpkN7wZM36mOCzXQD3BFoYHMUkvjIXMz8EIvbkDseiKWnqRK8Jxuq3rhWiD0FFJGad/Vj+vKOR+H9iPeq9FXAPbxoiKNUKK+TL5smk3SPKz98luZrI+O1fhVU4y8RVmROjXCQbm5vwp4Gl8hSjxE2Aw2t1NqAO4rm9vWlOEjLpnac6zrQW8J+DJvR+U1/exhe4Xl3+qAz58MgwM8UPhH8S2Wub7jaSAjm16mAYCiP3Jb5eNTUvr2S9RsIv+7SoJ+I6pU6dVQzpVz/IhkXQNocDJcFVipsTwjh5lDJc14DfELePlXMmBqgsZvfz2e+TUtLrgD3GhtL1lShuGCjSSZY42vzidRsU/gjyIODqhAJvq54/UOUsrWNknTOEFLudzFXM56X1FNxN8BzO5y4TkqJU2IqQUoruFuB0lSLE/0yDiW2kJF/PTaHsp/NWbmDNMpWAoJ5tT1a7ZRQcP+qW40wnzj8l3owA==';const _IH='ddfb87c7acdae5b7f0fe5649c1ffeb9b7a45648ebf248c008b34f525ae363a2b';let _src;

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
