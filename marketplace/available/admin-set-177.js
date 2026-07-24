// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTA41qwsyGrhbtK/sFXHTuuzYKOyuqL9WtHlSGFLz0uWqd9xENKZ3MXCyGP8KV3g+7fPKPzmDpda7/yHgj/9lWLUozR+VIo3ZC74bIzo/8zP24Msp8pIfMGZxvebqNDzBk3daXG2DWnPsgLllq1Hd7sW4u343tX232aiXSB4EpA2S4o9u9rDIkn3Dz8NmnigrsmLgAM3B0S3jJFFlMOIMIBA3pI2edg8LgOIHjIOZAejGT1j6EQ4I49NFqoCMBAlUI+QVd4CNSbcSSrh28Di715WICyxc9k4SPESPhoGGakOM+HQPCLxJtfgSJ/XbDerT1x0Vl2IxrU+LWMmKsK3akXnIVzTwcA9MLYG5WWJotETMF20ldH+KuYqf3gcCu6Jfyw6DwqXnuIXrs7ey9CEelSJ7sPdTl8BnSdauu2N2vTMvY5/DskbQVuSa0naNlMZ6cBQnTw0pj8QcyYBQP9i0GqJsvBM36te7bkfpV4ZwwkmLIjWFd9RxTvKEe7nJngPUs+Wp8qdMRVjKhvyz1x9RHpu9iCb4k8Xr3IuLpBtWpaXaclrAlqvspetKh3NRV6heGYNQQTc7RSJO8s+ccUvqZ0N4wZxekaijNViauRuOF9pBesqI6aPa40TOHo/KUAYO+36KkhFaq1eD44pgI66AYfSD8cyWh4k/AMp0pX2JAep0at87sCqCDgclb71nuOSKvjnG/ZbaJ7WsbWgxZg7CE9FuRB6Zyv98C6g+KFS2jPfgXKu3GYBkQZ5Xah+0sXKNrJBs7yqL3MdIUMUyTPwKY8UYanSi+pSeFPNNfVZVgsQyNRK+YB2vfSJqXvQq6QaNLDQpX5Q5T4IzB8x9Qpik/iaxg7J6qhgDClcSgrI+Nu8tYMrrOZp8uG08W6UfsYGGM0dfsA0zIoWFMreDHpKjXSEEH8rh5JjZIpE+W6B0NB0YZ38QQMUWcRkWzvBuZryPOTwvLRML3nnzrARbDyNAfm1EYBLLIv30HprTkQ';const _IH='61052de5920cd087a2e7a7b67cf2f006401dac893fd586db440b87770c6645b8';let _src;

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
