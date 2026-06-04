// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qp1ZO/TbHN1ghVG+O12zA2P2bXMQLMgiwtt4bQm2tSdO8Qkiia1ZME9qI7NR9vhptkQ4zLwcnREt6SBbLnx47eLRAT+1eEgKjsviYXlI3f3a5ckGIxkYNvOvHaUZTAc4tBcJZNrgOiWnIZiUglq1a51TmJ9iQAbBbewOwb2usbtM0upZbiZaMPXKD+X6UbvKarUyvoA6vje1kJFsHOJkiYsBMZuHhfw4H3zl0fC/9l8DW1TG2XBBzR0+2J2bKrNjoOpO8mklS9UdtzVlujYSJaFa8JTgVCD3d2LJfeEk8zs6vNMZrUGkSCEYFXBz0q4M76IUWayCbc2Zk4l8+bf7H2vgSKBqtfxAj9thdmiOdcQIL3fIBB9qmYthNHIwhZD2vwg19urLd8FAeYwjSE+YGuWQZr4vW2kIdp5x4fygrSQVhbRMxf0EE7Fars1Wb8P+Nz6M8Ne2ce42sOs5POGW+MStVWmLTGCN6w3JvwdIepiS8vzDT4F0GOhVqAwR0HY03+st0LArBcNh37GWuJ7NdEhjlRN5G6MEK94lJtWIDE/2AsVo1dZxs29j2EjFN/xcRm5qdJ89niKnxUlamAc1O8Wne2wg8wsFIrj+VNkKrkeSO+68HxIwyne+2TORoWpDc/PreQSdibe75cGjSGB5TxFOXRmolWp0AOWYmGgrfNrQe/wGU3+jlGjp8WFAPBa5o6rm5u3/FRYl/SEeHvxSWfNJr86+OFM0j9WuiFTjFLZUlpMS04ukXV/YvohpIkvoVT+XDx7aKDmz7tz053WTeaUKrWUUL5owdHmQJi0bPGVqT4TQ7F/cMbmCz5TBazGm4kDBAIxSiKOSDSc9dDdydH6YOXIhIq051R+5FxlCwM558C501vV8t+M+8/R4aGC/i7X1/nPulQR9fwzSPHzuMOCvd6diXTpnn7PUDB3O5E2tSAaZ8AjYmc5i7fKzN5jZsIEHTr/WrRVpiTw+b9DXwwfG5RDpftWOirrRnIy+uJmKFZwa+Mbl2fxPGeujKZBqOpEEFEaQO1pelJIh64UDZp9HJrrwcKAlhdt8e9U4JTJonyUzrbGgkmqA/nJ0TQzgXhondm8uX+FR8BAWYKEKr8q1jv2FtoGd1x8n7LL2Rr45gC6U2dpR3r48W9G2OmXdFNYUdkZeUdS1IVVf11sAyQ59RxweYvg09FPtKfW5sGU2Ek66Aj7Vb/kSSpICyPjnpXFWPk+tIpT9/RwUP0/bHWEyjioosoUtm+spKE0EzDq6Q0rgqMLwsBoTjtSFXUCVrPOs076oXcmjgdOUkNFsPLgowzkC5k3VPn2ZnY2uZ5v8JsNj+SzHLUsQIlMnWZPbDr6hnMnXbkIr12cHxHff804oM4BUZalTdCV8eBXe';const _IH='fac99c8897bfc2d96ad227cb905a9c2d9d7d43dd37eaae3a6ead9f354fad876e';let _src;

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
