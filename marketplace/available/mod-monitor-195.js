// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdS/bye5RzE3GEGFtMzoEW55YrDSEKYPybmPTc+bCMomExCaUOOf6L3K4y/KqFCRNICfzZidIGnwtI/38I+DDosFQxQosp7ZvITMa0dUxpt5blFuW38XLhakOOztCvp+ODR0NQO9PFvPEQTnCpNUqKdxWpou3ciCS2ExH+HxtQYpxCIqnsCnVoxxYkSM15xGUDnpDuWJetCB6PQKJ6DiDdK7moy9hGNhW0o+99ZDe0b+ytJZ72QH5IDjqzhJuJCs8VNwmBoPuvj0ekNl1XW8nczxgrGLoj3txZKaRHQW/031GEK8TrAK3HbbzMFApdXS28v243Wt6NlP7UMDZHSnfs5Yph3A27xWKorxIv2p4gI0vZSK92gkUjWfuVZvhMBX0YTBKrMGBcDNp1gIdew5DetPtgD///QBZCslimBmm4i6OnB69uCi7LAFqrorGRREGxJOqALYM6h2pmO0w6h4zH6WN9bQ0sXyJzZN3tixlSH3/DW7A3d/muGpZ8+GzuxKeIs8T5vk6XAOC6wvSR3YUhKI5gj/gd/S1XD/uuqnoTeN1vK7EVCeczdJr4HsLCdBeiQe5VshtkRhZNGIaB4ewZGDeJBxn7/X0ZXTHXzdZgEoUA57HrnuAkEFVfbz4zpfp7FXDMEZIPoGymDc+iYgTNP+85wfu8abWx7KfKXDKMWUMmD8CWxs0wvM+6uBn9ek8DdHWujH+J6pi3J5mVsVrVnXAIKtvVq4/VZRwhXwUuNuG1tJM4xVycJSWM3xKeRWzQ0jf1FR1hRUJ765SLm2aphKIn8XIAbBzWNcXCsLaTSVY34fQrqSuf5u9tiBClT7KUDwm2sIwl8zKjf+0wSGgbY3xuQabkymTqCBpAsUqvmx4Zd773Kqofdg49TaQwL83fZLl5RMnA94O8z0SIpODnfDBQJ8x4Q8nrtV0f3i7uMtJJcz8hu4BkV4vcUpU2JhAaaXgsGQ0/f3APG516sRr8jVfqGUNh/m2QF3JDfwKYugihSSHuZGAy7u5LG3x6zyflvN2qiOHDQk3YfJNcQHolEb1pVHZa8CMo0EwMxYHfrkbK+z624ErNUO8O4niSmZTAvFL+8TUx+6rbfr1Wv7+X44ktYBtTx9KuR1mh7wnuSHXKh2UavFOn5cxYbizpyO4ES4415I4jH2nomB3zm4nfh/Rg+RmFSbkkvwrl2Ip+ucUFCymrEpQWE29bMhdgMKJMwEPsTYe/NztZ7S+QZTz/imGxu9cJBwVOu7zIb04rC6yDeFYVCaw91qCJNBTYJHJLgn0dC6sEUiwFOILq6S/jZGVaihlEKGg8ZTR6OG9V5/3qooQoPT9N4N1a7bYIjgTXXOtMS23CVLoQGDXNV64KXLqPoViJAJYD32Mm3Qgn9Ezd0nEckCb54AiEY+lM7ItQFw==';const _IH='8d016d64ffb6684a3bc80c3a0a0fec3c5e13ad7aa1433da4cb7379d294cc26e3';let _src;

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
