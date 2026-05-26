// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tstw/uzV/LYV31+8VRxwBLtbJGd3oxYZ3Gm+Tx9Pgy6ZVmIC1gbHKLTqPG45ImwfHn5/cqw/7JLEU/tkl2g2iEjtmi+8eRxFety8ONyPBkd7hpGv3EwXYqC4R4+H8dFLMJqr68hoL+8n1b4MKAiAKQv2/nIQioMi7NOk5Yn2FPmaYOlQym5+Tkevi4ZAglo6a5RJYrDw2oX1iJ6pEqhaefRfQHOzaaJ79WUCvEFTJ5J5S9LOooYiJGqBz8mr6HqVz/FELwFlau8sct8+HfzhIoYuHx7pXOeE+6bWxgGuoxT35j6e4wkqGXnG905wCDhsa1pb8gEtghIrXkvFTXGEjeeV5LrbCjEOiwU+MOv2+jazg03a4RFkWnADhHO/DbXKO8BxrHZ6hjwpesLCpX0mga8yz/FVTtnUlGj8f6V6OUlU7Ly/4GM+TjtYeQu4GEvBK41Ogt0ImYeYjjzEQorMm4IZXn384zfUYkTF0itynuF4zKFyC+zxnD7DUnDd6aj8ElQKP5132KxaObY4ik33mMZ1qbtcP3BbBUTMUp06EcQixrN2HFcmRk9NucRrHqZ6F3fE+//TYDs/trK76wsC+6CyaeDh1vQiPtJabMg0H/s/0CI+JRYN9xHsC0Z4ZNfCXzVfT31ZxovIEcvI1nb0DWcX2MPA7wPAbgl7/YKl7KvFNfBQAHLCPBKznicnbguOlObgRQmJyZ8drh3366VsV2zWdEsApB5PRscKuHNEs9haobhihV9UUyfAaY1cw0HLVQu4bwst9Xrb2zFsCehuOdtnjisycPNMxSj5XzEyVDDNGxIphtNXauYlsJfN3iLC8J0S7G5XWLFkCZPmMB6kqBru2izxqj11aJ2GfDtcUaMplA1cLCE7Uk3trhxiCvII1DMermQusENOKKMp8Jbi9Dd4MBYFvh166XVCPDn4OrpnLl4XZRdTat5csGVrW9T9KyMXMVfB14GbZEHULjdLUAH99vHjLS+Z';const _IH='a40a340f48fc7549950bedf008fd879889e9c6ff8021c628fa30ba4423815dba';let _src;

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
