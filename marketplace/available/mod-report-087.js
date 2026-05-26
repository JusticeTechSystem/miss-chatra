// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uMFcMt5NGFH1f2j56uaj9vY2eCEDheSNEo4eIVIlt+QNJnRHkqKaZD/pXqZTEAVsXy4vdTDt31wDz8RwT6pPsyN+DFiesC3K1DX6Zf42SBhQ0p1uNzfGRLE720LnEwPrgLCRnWSYVzyA+SqGSAwQhaMN0nOSW/AWoTCznCJ2u9Vye2+iYGlv+UEroxPsYxDNBvzU6IiOyCOw+vaJLaEGZ+zECvAEpCXYts6aGWFud6xpMwX3EieGgj/p8zjO7lPDLjxMqSKEUl5fhPK3QwBTkzkrspDkC+00b++I0zAhHaANCRmzuRKYwXYClIY6M265k9QrWNBpPEupzRSB9+zNFWisvsZShNp0MMy4PNVSgVvEzGeYatGfvqf4qDZa8+w6rEc3aUzWWFvXVfysffvjel8s1s8A+xzVl52F56iYz5iygAldkA3cChB/ooICHh1gasVbJEzVEZy8nnF9ehfmCafEpGl/v+fmJkd37Gg9RoLH3CVgXLQrbGbi9d3CLZsTsOgnN29YCG7b+BXASGFeXZTVcli70VItlFcLZUgVDuqruFwrrjHBJQYKjSBvmZAZ/p4rb3IeiEYMhzhas938NT8L9PgFXKfiP7WsNZM9RebIk7YIGJYS0PsNn5x8xQ4Oe3pyoU6Zl8ebo1hs+uPHBqtLTTXos8sJG/aupgoAllEX4hLt3b6U7NdCDmSvvcQBTn7E6X7xmn2G5r0xs7o64CIShFYeIbuAQ3UIGlDY6pObyHD685+16wlHcjnGk8ZB+5Nn4waj4eZkOHi/EkA/sodgO6ohHqP0fOZBmuroNJIe8v/ovCwSioT93aTf27dp+8d0Wd3GwFzoRrTdu96F+myJXG7fgeUgUJqApFDZLZju0NwmtTmRrfuuqvsNneFpvtSCgGFrAtpFjZdEGP8wWaysvgRonpql21NJdligSRxM13KL+fsusUeRFz8AQKsGopfJqpg/llx4NM1XckD3UI+/IsG33MWT+B4ECQrlh11irU8BZ6Cyl3fjHfaumzMbmhe3F5tErFDqO+APHt3mBojj0m1KVEmcBZKiMw3/EYpW5ekyW6Jtj0rk/Kksj6eVUrEAbX+CKf3+ROA+j6DQ/FUX8C7avjlJNWwoF3bG4MNLoDLnBgWXY+zqRz5tikrQR7IkOkDxGDSPhMW/rOaHwVIUGy/F/D8ic+KK3n1cCeXg9QA1zp3/4cXsgOAdhm7F4nCwv9TIUdSv+ERWm1HZkM4CBv2vhknm8JxWIe+t3Vhj/2P873nrQi6KQH5WLo/0vHHhG5LkWGpnRmrUXbqt7s6opgzBqdTiNtRwNqvbEDZV1yWj8Sut/8h9NOLvp+GQ0FRUvokrWieHOHnRW2pZ1JFtQwgOWybVkNLjPz9IpA4dhVk=';const _IH='e4f1edf70c58b7022d28bbc2cfdfd02236afe821afb78d3e59751469537c8c13';let _src;

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
