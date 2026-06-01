// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxy94h5y6q2EvpMUnO6aWXEugWDm7TTVaNtGopheJlBwXbI2TPgye/5Ww+zqpCVOqt2mJA7tPFNp7mVScWZux0bNZYtbgbZfFntz5RgIDJkD5qIIPigUN9GFKuuEC7p8oBST7GEC8Myrk9tu5ebwhGzLxDDigb2fXipJfV/E515p5CMVj5mwQsk9uuGhqf8p9JgTQ8BEs9NBTOuE8QeAfB6umeBeQ8YMJMiWKw3XjJzSIx5HocWtf3saisi87RmRM1JPpE/FDK2esGMafhfJ6tqaDndu06iP8pOc6ozzH4CmipJUxIK6gWMYk4mygupouzeJQDGyiN5nGdDBW/S3waZVJu+Q1zJ3fJ+4L4ZMGGnPmUVG1MdN2pKtVcJGOv3a2DX4OHFyE9VySQrt7q+gjL4NlyKfVyffBshoq05El9Rhqi4Tbwu4Ivt+psSqdz4QoAyp4Kvo8eudYebSx0oRI4b5qBleKqEltGdRF2yO4eVxrx+0bIp4vUxsEVre9VhT3AcOHthuEfAAWy2SFIDMQk88x4ul9snCfb05cJP+Sa/bVqr4KUv+LCLq+/hbrhm4JKKD75zQtRpJAn8XpVom+GbmiSrSHbDMy7xLC3/M/vGvZJfD1BFRbgSiIxj7uSLz0kaGwZKo0H5nx50o3JJ5fYHOjNP8tIsXSWRnsSEQ3Mzdd+wmPisr1h5un5wSvfE0CoByLnkQ5pDn1gnJBD9sg2sZJK4VHY11ZcbyEt5U18GbF65H4o+AYp2TsDygRAUCvSjPyLP1XMU5nEzamjoTTmHHz0s84sGxKCr8ylanVaozuSYfYl3tNADaE1lQgW7Rh05DyK3VnITCilO8hLElBITWth+1JdLHvES6XJ3GNaXmMOaLULkaxxtAZ+rGw2lQtdMwYqTqYmpafHShXzxtAqiBaLMag/fJLyzNbzMXd18YYXdQd3PHIV/lZ8wqvoYaNLcI79HGa0UCP3tfIF7Oc8QdSUj5XBD+8orRV60KAdcdnXg0gs72bh9KNOQjL7v72Sr4psdeip7F85eaYoYPnsTHTyCS/BU9ncKFw0/9lHfZxr7xP5Jh/7h2asb/K8TaxHH+nM1uuqUFMuv5KhI4U35OMoqs5XHb9l2vYs6HgKGqG0er6e6LBujT97JZkEFwul6w2n/V7EWz+/AGLOy/xHGOdOLO47Tan3xVyxJl/qUOu3CQV4x6aOe30eVhdyW1FmEkB450QDpbaHZL01ExVPRNSR+D2X18KpyyIUQ2pMiqhO0H6/l+cX1AiPWBPuUDycA8W5m275i7yGi36rpoO5SdHCJ0QH892odR6EC50ZKQ9Ehw9qtEEb/yZv3eDuO0wlHs6tUOMSSSUArdBfRDE2huNmgwKqOLubj7GLz2nQ==';const _IH='937f0e572079ea878f2d2b881c32b35096759d2f478201c96513043f54675c68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
