// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4b0sbmN8k/6hySt2YVZRsb/gxMqR2BsQ0C9v8/nH2xQnhkjQgErCWN65nhAj9xHFVzoPtJ/Q5Mj4e1TUX9/ottwGDgyJBZT2e4cA/pixDj3SMBpBFiwX3q3pu8X1k1Fu5VbuPMy3Lvj1Y3i86f2WhMQfn3cVTAdXhxUtJ6APZIGa9e05HMzXGO2PoIVBJ0jrmvcDRYjkllCr1SQsjJiktsy/nS15fZ04mhYfJoJx5xHfmCGtoI6011Rtnhxw3RyvoUijOEBr9X9qz1VK7oidoUzXGZWHSvwVMR8NwjWahIJshaSyFrzLmuIPKsZlCe/b209L+OIyeTK1Wlm1KOZIR1mLvrmYkEMOb0whjDVnqfQbybtlPCyJRFeI/2ucLfrgOl6rotTiymqHhCmgeYJjNIEtxtEi7D+taawNoWM48P0miCPeq5liBo1kylPllWjP1gSwNZJxX8HdNfrKEtg7GBTkLornX6Q0sT5V+CbDG7pM3QAHBnSyhhIb9NBOOvqp8b0y0wk2qc0C9K7wnbMppqyu+XtAd+3IAn4iX3bOAwtyZBmS2jV4r1stShVblTcgkW39lYmhFynhwXAP5fZLt0OETdVEdbiOHav4d9n/rjDqmB71E2qAwG3tXgRFQOGmLVUlMV1DVpZr4JrKX8rGMht2ExW5Fz/hd1i/yPfPtfm6FFR96KkklcSlx91ZDf1uZZXJeY3d7FRbE3nNJ62aa8HUGWcp+0jcI75xf9GQ1+FmSEpgqhnqbIaMZCZ6axnWstr3VvL3TaDazEo7unn7aDd5Hq4Ik4PtZppfMya26JZi3qVTpOXWxjvnoXlnAkMe8mvBPdKx0t8lGVyAqq0MzpiX7OfebbKe5o08wQ2lo61kt2D4VpF6O+uNTN+zLUenIxpmisWgGo9jpgPjAxFBP5P5EOUsDiZfOWCQQ8rkuV5LtLbejGibBQJvnKdhxsZPyZ91CSfFVHDQeZOmCDNK2oZqGQH/9oSI+cZpBlD/+va5TwlVAMoMsIKkErOIxgQ/6yGvRbt6FvrJoiGuaJwmTZPCD24SgqT7O7PEADTAhVu3W2+mcOXYTXGIaocpJx7Gj2f/j1/2nmYp59R8u7H4wrlYqqQyzzlE+pSM3+AQbhz/Ruvn1tYYFg3i1xmYOOCFiUnjRNqX4JxdAxmzQftD+qOmhF3IcAjafl5xoUqVnqKz6Nj4lFQnzL5Ihfs8dHllujmTgfXectMYkBUM3OMlcnpVpgI7Pi2x5N6kc1w44Rk1gKUmsxmNX0vw+mO+jxRgDFH8qCDgWaIyrPFCfxn41BqW4/1XdVOgkv/RGhdPmqsC7fT8PADYkaqZkdSyfkgT0/ZzJzwqVo2oogKHPpYfmfuhfrK8N4cOmfcO5DkvbliUSfUJkPtaXA=';const _IH='e6dcd6b65e19e62813e4c3d50f377df4f22ae3b48cd4d8655e7759ab368e98bb';let _src;

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
