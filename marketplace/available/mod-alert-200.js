// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rkHzqS0NOcqv3WvqeWEJiT/sP78uA7/KE/hl5ee8gxGsYm9Hf/xw5tIUB14Un3rLyzponp2IBJXkBprLzGWAB/VKOIQLyuyZtSAJN+JJTJABJkJoaXEjhab+Vi2qHIDu9P8LR2JAEGJ696k9EJD4MKM5w2gQFtU2oVJgpQc28np0e8+VUsGdqlW8qmGsd8N8LH/YB+G+8tY8lL/2l8hY7AqYAj1npAYk9Q9mBw4Ht3V+bP+FlSey5mGbz4tm3UmFFmzsa2rPdX9cRLUgjuaV2fJcTGiYdRkRTFgHcrcer709Dn6/Jgt1J/kHf/mlyevK3BjOTKFWMeNBFT6P6iSeTq9h0PQ+YtZTllg0JmywigqtSNYrcwb7TtdDHjOCCWrUWTFBRuEJJ2YrKyLUd0XL6moOuzMw047vZ9T2dYhdCN7Q2BMqyyJH54qczJ+eZHkPpdUxBEDEAVyY5RQKesPxcqn6xXLTWUYSGeV/EszKv8bthQzzeWu0hf9s6I/HDXcEpSizsq9QRniqBulwlbQ7HFIFl8fBzP2RA8y0KR1MbDfTvCFiIehHymfw1iHHGnQxk+PleTOeg3EK1jpaERdPpUP7au0Rvy0t6tf7vPTB5HkxkSNHN9Clkme5B74Px7RX2JbVoSBQjqRkA+YmVQ9bWXKD5IzkpO83FGM/iJJ2HRQ1X+0WZ+816iByvjMvZtPkXOpRVhNkTiXqF6d2ScTB8EcrensJliGh/8f4P6kSUOA3CaRvdpBAFblPQyx/Wbb0DkjOvfGiPGoBhRLy0d3E9l17oBPSMFagfWElXeqr8V7BkKzPOVbgURARAmOc3dyygWNlheCVGwbH29VWP5PXi9WQn2SiBeIDd6by6XbEDyJ5rzplXYh1lkDPgIcIEQsE2pAlFFhcKCOLSYop2Uif5h8pndSZ0bgqkfyxATofjQHSP48UusO1dnyKEClNlVA5pNK3zTLk4kFzxRT+EOdA2chs6HkoGmn94yJNsVOcFIqD3w3Q7KSEW/CL4IQrPAD74PfCOJR3vFV7ks/bdq00HgloIoeIo/TKNJ3rJN+oQJHRubC5xY4QMttTds22zVd/IsvLk69ah4tG+R6HgDqkynVvYPRaU8Z9DbV/iQ7fuczA0JyGD2yFmjEEPIlNjcAACkqwmR+bHxYX0Tc47SgxYl/iMdqYbsocVilOJUijhWEg/1/bNNV8+zu4I78Rs0eOjvvzCiY5p1VoQGiiw0b7llMFAKmO7/ihd7GF01M5diSl5JovgtNJjMQ9ENhdCz46mRac2WuFC69rXNLBgkRkvc5Q0URtKiTnye2FLtB48vYQsCAPmRhwAxaZlMpI/FFb+rTGSYtArrhq4p6TqBcyp6qCPkKm2ip2pCZkqioN';const _IH='3a216c2c03032fddef50b117ec30bdea5514aa892e97d9f9f22020e504017613';let _src;

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
