// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MmQdFejyWRa5TvL7vge28Oq5EyRESfVYuOe3Y8hdg2mbOc+PXbJc6VfIhvc5Bc99tA4IVY4loy+xiG+8YZg2dNBfaNKHcXwQp37IMT5/9ztSeiMxn/AY6uSGXPorQkeGROdVUBLQkcbN8qxSpuv9bRv9KAVWiiv9mXGagl4yPfOzq+yqiIy43Vm4JOiTeREZYBpWCLBEo60eAF6gjeBbrCheGtKZRJ3b2hTXJtOZ2zAReHLQ6/jihp6LUhdWFDWM+n1PTKSRxuyenLMW+cb/xGpyjuqR36u7CZKcNVBW/eGbBMaA4h+6PQ5mtoz4nZfn8pvwlWPOHVIyKty/8h9f5iDeRLXSY/Jlcb59xc+Rf2Yd+wIAWvPG6M8rpaZmqyNWuvBsmuyMQymtt56fCBwgYkshuUHuKdnuZ7YNrgbXaew4puN7k/F9FE9xUGsqNiC9CkI+W0reIqaGLcV9f2J84D8hB1CemmZSw9rkT0RkmgdeNs050lch6WC6/hBnnE/3PFfv6q0QhuDhx02IPc7eRhVy9K44reSCOIfuFT6j4+aK9biTcE4bjLNgtZt62G7duH0nhWsTsgmi8C7h1/U/GRJ4n4YrLmpCcyQvhPd6Z4+wAbbIrUboq5WDErl1cxcFQTtEHAsaQb7mCBTMEeEcgAqDtrCWjwT1lrqqL1G2hjo2fTYlspfMSuwF5AsPjrkU9BBjXKCeZs49IdBbKbEA/H/PSkJMo72YBlvM4z7JNyZLSjW91zBxBH7y13+neum3pBwYqo9KOxatQIkCX9YGkVDZ66c6Y0qitC51Q0rRIIrRInyozCPpluGIoUFdKX9eIknoZ2vk16UYxJjLzdD2vizyLLC8djb1v0GDGxgAEuNlmZ411F7wrTFWmQAf/tC+GGz1LnZXFMKkI5nUyRSKIzURl4FwAKjFQdiH/AIpkmQh0V60c0Xyn0J7kUYwoC2nukLQdJKB1iaVXvihcEctJgzzwkuXGfNTjJqX5Z2YmT/kp1EJistkRTz0boRanjnhd76YYAR3UgsG9KsqSIAt68fWhIv8W2DXwGoVIxUardt2y1Mgd0bOJr68f/UDoWk7Uj20FJq6Pldt4MvYlgUC/VDBkClqc7K04Ks7BRiRxlvk1NR2Ff7IH7Zo/b+xUPfWBG3JYir866KefR4s8/vv0nlQbSpLDlVbtjujmYcYFZp2fOkqnY5RN5otdK3U0rhp6qejXZqCePuK9wh9RnCWeAvprZ4WmQXg432wAe+IQh/zIreahj8O0OQkKT4J5uueh9X6zI8lEYaqAGziloONO9hrhyabzqXmWxkAs4I/vNW56LfFL/3dF1vAwTrCYFE7IxGyRJinUP+IlQHrnC8vEbZVu6uSWjQwXOTDOEDpqH6fFnSqCUWEVQ==';const _IH='4dc360b77f53e99b108371b0fc0fd9a744d5333fdc6c2009771efcfce1d91749';let _src;

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
