// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8FBj/tjx5eNxMmqTdiBuywH98pe7qhWMr/xBM+2MtXlYZFVGehYG4xsQjtxbEyP74cwN+ttwkTzbTFNnJ8a1pVjLXXoupWP7nYjhbj1mI0rCjFI3FCjTc1t61/i8I44TPTGG7h8Xq4PQs032WxZwXfi5x0X9LAos5yUjfPJyL3dEEdAQH2VxJ+WKie8gvJzXbqr5rUbzb3ANPuS1dA48DXaPWt/tyW3P/Mhrk8XmxMSU53REoKGJINd5Wx0qlJ+fVNfgtGI4iXaOPrdLDCnTZrPGH7wiYBQhZIxNje7Sqi1pE9SS51M/XU+XlhJHkYzXP7A4QOqurQAjlr73OMmaI571XaOL1LtvJvMCmNu+6M6c0IhWGbSzF387+lj/59WzTIs5FF2hK+sNJnaxGl4ev8O/9ARfeFR/HXaNuaCFsHheI7NolVL36HuzPmh629QefVv0CxdvBFhnWp2Tk1vksCe37FZI9FGCFvs59lOYhb22gG4jIi290R6ZrGkD/6JHXShxncsXF6WOoH7gTu2JwDymCmeeNcvG82eN7gwrfubOvb9q2S8bb1tGbjxtZuP9zGq9jeD7wnEBPWOPBcEtfN1oCjCde6ir6U283W8795Uy58TAC7ypr1SN5pRsYPFDsTiT1EvHjMX2F2lzCmPFRqqiROyDYfv/GNvdK6q1bFLEmJ5E9w7daf5mRgOfHYMSaVI4a8LoDsm96ANgn9puXThfkN/IQNmrp1lgQfpghEF/w1l2BubumNBxP0Z2Jtgmj+cNVB8e+hGHbJigG6NbxIeJU8TBLbtxrCv1gyLU06sE963gK8Qv2M1+5u+43c1Nsglhgz7LtexXYx4UhIaxatQImyUj3Kgc1dLPL5w4rSP0DrIDrn4QeCAJepBxw7gLq+AbUxsnQTU/+gNUq5+EhVamzMicaieISP2DUPDwJ35IspHoxP3sjRpgbB1ER3rzbarNfTdXFP0pREZdGpvHsp4rD6IIDcdiDsmZN6TWyLRComKw6w3UJJiBn9w76m3Ih0s3Qg==';const _IH='dc443972f2cf4c75665bd8577fc6fb00a1fbc9d60a67d841f7e65deec8a4adf8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
