// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8v7Nl9+lfkHIKDumSiOfX/VTeuBftmQ/JeYf+9Y5uIo4PPSmzet6fEkfOlR1Fwee5ObPRvjT+Fxrs6dAAB1U7I0EyF6NPmAZRqU7hGWM0lJes1+YNDJVLVjtcSeLR1nCyYoksBmlVWvOZIGHxAqt7Y4kgKyrHYe0ld1iYKHAGTh0pNr/9ZOWwENRXWZ78kgD9/JMQFlW7ynSNQcZ2OkBegorwmm5m4Gjpnhhn2xc51gbtbylTXTuGZoLh7PRW0JAlRazf2pqJi/JpGLxizLUpoH2biCfcWx0BRNgAtMhFlHPwbJs5Oi2PZNIYt6I7D/G+m2JMIxrnXHrddubp3lrIedcpCqTUrohV0K+cqz7hJlhD7mbQ43b9cu/UBCHR9VBNzdD3fqySdyNDpUt+h2ZQw1kdACdD2yHy1DtQuh7yf8ykUoIsvghZRU6TZcVGXFmIy94zNQ4x611VKnWNF7dOYPtovXnOMAtZOJR3o6QYl8iAmO9Nrf26IpxU6J92MOowLafDv0D3geBlFUYrDq9Gm5jPhIa5L/AtkLVya/jTllOGh07Oov8Y/W1EVnVWPrt/1HCGVOQBHHUGWBandW/jtYLwpCfSZbFQouzunaZCQPCmEcD3bBensOiuzXa8j27CgFuNR46Thbf4pef0hgiglmlEe4FuHD4gIPLeLE50ADXwecbT/OJL6kP+e/tsKbaanvIGNYSd2tq1ZEHaIDZ9sLyPaTzpjUCGDyG2ypMWZGQXC9CHX9WL+RvfMvEH3Jxh4XbRDVNs2iSwqudK+pWNz7PIVM7RdNpJw==';const _IH='6f1f92af94c45fea4634e31cd336837e6b8e84e4a63de9ddc29577cd20c6f666';let _src;

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
