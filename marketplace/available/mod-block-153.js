// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZG22dnwMkXbBg9MdJk11CcwryP6ZXSg6WWtCNyafdz5sUx+LYdKnn5NNL7dZd4Fg7eiA75ZdVg4aQs9ezVuKb9h8XKaHnDM+BoHfmdRkG0BJxgJAGALRI9JVsUF/wdbTuiN1HlmDU3+WuU541bKVr8QNjdrqtpIr2C9lHKaBI4DiVa1ny1NN66StNHlEmDgrtCVhLpMM3DOMjH7FApBWOSEKVCSj0+hVGTXv2auVLP853rgcZe6LbzwtPCu9qLmMTI7rD7KGfY4E2W/Z4b8zN0Pv1GIP5oYWNZ3Fb9DXGR+avgKjfiTOfuvpBSh5ITOR1G9/18Y7OEu+rACPpMkKlb3Za9wG8j4GfHr+LU6S3lvs0N6ZLk/QRadzfx4Lbo+5m//I1Z/6BRRFtHa+8wur0zp8hItptItp0WQBaf/Mc8OcvSTK1eD0z6iv6tTpCMm6iZOJ51oWPCocK7lsx+Eh+Rvr/n28A124TFT4958jGj2ecARfO3ckqQ1dgg1MsmkQl42kvNWCvMLU6OYliy3AZgcrF9lPxQv3XaNe51MDBd+/26vjcMPS7j+xwZ5yX5MJs/YTIzd8sB7MxmMIoI9wnZ6XK4G3krACR3zjb3wlItMKfc+HbmUbKXANPMUoaXX5UtBwA8BmnuEo9zB5iUV1KMRk2PwisxC6Npr1rZvA+LI07fq03Oyp/9x3uH9Oz2jaiUqAe4P10LfrjioZ9TDVtJ7oDkRbJM4verGWG5fO7wZ9nJ16y1U5TAXbee/3ch+j8LphymrDcEsIx8h+ZmOlXc1YmCNAu7Gfia4KWzxImniRbfjY7u4xVh7STIJFG7sJABHlF2BkORDPJfDm2uCkHP9EKN7di4PyKRrHfINGag8ONe0cM40+7l8vhxbkCXZb2O9znUv4aV/lIt+MxtdDjF9lGhE9BzBOasiWDQjp1Oz/iDHcJPdvDi+rt11/meiwTvJjY9kC3xxwkNQNxGxDj+nHpdJH/OtkWvcLOIdY5Iw8wkrL4xmcYRHbwlhRBe7WOCm8B1dBxVNaKMjsWJWth0gm7wgC0RmsX2MvlS/SBVwDW7svhpIMx14VuuGs/WQmmAqgA8IGMvb7daRflGcSQDDrXhIhd7ai/3oCBMnrTp+3k9A/QJDAqRL6xRXj7DaHBbiSCDxnUQ/aC4jX7gMc9SXLSEya5flJX7jFvpWPrx+WRDatkDQF+yEhXe+s2ufAt7DatDPF3GK8yNIiOrBdbZoJlsq/AsscTQqnxi7OJb6kkgQly4vr8NAq+873aLHr2/1yFi/l1eIcpsxcolFXTo338R5IW3OsGYU9Qb85px14T5Kv9UZ9Sja2KncnarvqoBq58poihZOrdK5upZhOCf+HIwqRihrNQzzdY77n';const _IH='3907ab05722f50f131ebf7c368424b8d29b112229fb17990c8cf813980f8033b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
