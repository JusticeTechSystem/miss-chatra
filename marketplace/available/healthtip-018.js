// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CUXGTxdeOnyhi5BJagve35qZddl5JHyaJnfTUKJoaOcK/hgAI7OJrScBOxq0ECimNlrxL//hrI5vwHxo+a8pXnqvPCJgLS42tmoyky0w6e6jzJG63Zu/ime20U5UynEvmG+azy6LYUcsCJTvZ95lBktd8eDEcA5CI2iL3g2ZtadRkxP6Khede4xxJX9VfSPL+aiqLUmsMkCkSZ1m+LSnp06IeyZkeemvI4n74x2a+Xdz4crjB3mF1XQ9EXkRBSMPuo7kRfKQDs9TprEXynWGNJekYqnpQ0XRi6DfUpBqZtqHbuGDL+AJ1LJ3483Ocubie6twP4oBGoMZv+2LWg17gQrMF3jHGnXQO7vMcoO7SAvMZqsAohzIoEnscaBf1cJ65Mf7Yp5dUIpjtHBsz3SIv+ZmjYC2DNToCn5ZwSDGPMtt1vAddURjmA4xFR5RDw+2/93ovBo08W2cRfzaJ4lbDNUGJnj7p3EEhmtG3csiBTKJFwf6Znm1n40mnbQeyOBUFatTP8PTF5ulQ4CEFuGQoVgrOaeShslc5tLsiD2VLL7gyi5i+8JK15cVDUsTpiqT8+mRj5s4/QOWIrk6BZ40+F51sNe8jLxMdT6vrw1jDLSHlBcpZCvE3pYaKTyNQABu+RPoU4BjSIU60xPiIfoz5N5c60d8Ot030HCtzWSlbFw77ubjhX4OUHdzZgr3HNEXCjFEvf7J4AuyW5KaDYpsZJsyNja281ujhR5dfVUp1RqQAHT8luY1210sLaOtg5MGRlopmyKfrr+h9U8AWdK1n57IprzfAYtmqHzE+NlLLpgbxHh0CHmKHMUegnrjWR9lbpKBxB3UNJibLaTNCZU0XZ/kmkaE6AZXB+EbaxApouECuVJwjkoSnZdq5tibE93rXKQlinn6N8zocn1eYqHeVB6GN49Fo0G2W5XakS2qZf+oiwhUdGrSpWOzwYk=';const _IH='04cae08ef658cf8a5f2be4c705866484b92304329de12618daf21eb9e00e0724';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
