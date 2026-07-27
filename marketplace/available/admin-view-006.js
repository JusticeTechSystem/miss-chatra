// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdzrsnP9AQ/bM7TrXm0hwFKzJnLy5/J3Y6cZUAks9/jdns0RNmzxDJM1O8BCqB1VxwtURZ323BBt3xLAxhWI2wAQ7gv5JbNXot0dmZ7ZbsfII44Iqfar1cJ4ASUPb5XWG1d9DATk0bYXiw25ffPZ2tvgYSYvDKm5HWUaANEzRT+9Sm8bMb1GCUq5AEkIBy5abv3RGoI7DMmrStW46WqSGAceoPaogUYr+a8Dzp/5CxhI0C4jJ1ZQUeCuT+4iDKwSwW9vZ6Ia19l7eokXlERGY4KysqTG4kQfxiD+/Jn4rSI6WqWCffFjVaH71Ruw5j9AmQCVj1VcwXViVBLSo3EUmxGHntVQdYzLVIMkkzNwHejRYzQjcSlwNJDcBeFYjFW2hoR1ACI/vbAT0CceE/Ek5VuhSm2HHeZtBzSD7wlCPy+UcmTmKAKvViwM5pSI84ivULDPSri9OKbolMLWM3TJq4xmwY6jeKFwC2c8UrHPbkrma/fYExj9rQR7nruQ/7Hbt3QNx1pAp8TD5BtnuUJioTuVCDHyr5gBBuhY84k8Q8ytIc4fFqt5C//8r31IsWkcfYUd6bffhoxteLIlmg3Yl+/LzOYSnuep8e/IQmNHmqjATEWT/010lMqBwVIxwmuO7VRKjxgAHtNexKlT7mfLBdGYmpvWvqZdwREtjXNZRff1LB71RqFxjwkJ/JQxRpzx7LBbXqEJxvur91HoXjy+PsKcOcxTVZZ1AqZPG0JQsueP//bSJBJ10/w1ibepk73kBWAPixgeC89L/OyrpDcFid0p223LzOvjTWynziOgxH1ulV3vcXBSa2cfM1nI2CvvDLU1RDptqqCMTmlSdMXourJLeM2iSdxXTAcZ1krajSY8DkKiuY+8bq6hlSKQNgy3KthiA0IQIHzjtU7Z2RhSXivOczUcGObnNK4JsfE5GZEpKtg/HcVEUb9zJylFjIo5LbrLDnA9HFux/GQ8rN0f9IvYHM7i6XliLlGMo=';const _IH='68fbab7644e73b819b3aa0663c9f116e1afdb56191839b89d6d385d07a5cb3bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
