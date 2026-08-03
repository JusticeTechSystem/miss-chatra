// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQf5BPnGCBhqJJ2fYMlK1Sb0qzQBz7DyRI25zkT5JNIRcHcRk4niwRsxJChttLXAB1X8mlHqW/q6i0nklcp0qqqMqpN/NNB4bT0X5do09RMYYcVWkRBui2gHSgeTaAWNHy/GQuDPM6ftSQAwJojoZxWST/13Kb30TjzgoQJo31cFVdW92/mLzCDz0pJELi6Lc0JdLc1pF2a8oa4X6Kfih9i0OGdu2577+p2KKzom7IKzJZ7KWJ6KqwfnWWAl2ron453AWue9LqCvy0xjpblm3BcF76assqrBMSw7l8sHRfqMknmGp+jMXDuvByce0O3bM8+60297Drw1/XoX8kfaHzvWsZq8QiQRl+3WwU6hwAeDAV3iMnQq+IJdoos7jxShZcJDn/q49QycKlKqDG9YHD3rv8tp0NttRqhfdTNWn083/ffWpwSQ93FK36w9MOQM6pn/AGJl/cYPA7hF39qNPSFGsxZNfzTYTcV74eueFShfZCOLIPukpCLrsH2WQVkraJ8qVhYXl1VRvc3ZHL48X8qwk5P/hJx6AtWDEfnkkYkcus5WJvwz4fX6xVuQMRZ7/OjLprgeAcySff0uchEhstwt6VdZWyX6+Lhs1PDYYWvSKbyP66nIauQcLYZ1XAJOiT/9z++0FtrR+nVJErfeDok7s+W9lcfymiUdGe9y3yGAvriBzNhkNoCqoUyDt+UrAY2lPGbQk83IzDgn6AAO7Se24wm1RNWG4I/sivtkXKOO/1e';const _IH='ecd3920088147a65f7fccabeef2c450af47ca9e343f77af0c095289abba25f26';let _src;

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
