// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C1KSWiqOuGxUlEj0zB4a514lEHrTrXzR6AEfQlUQ3h1x9cstOxRm0oPZnLkWuq88MlvBIWWbwlEKVBWxqHaMt5JF4GD5GmtOVpCsO7pk2hZYJ/TZCSX3ubzzLy+oSt7AP9wg8xULxnfwekXxANAAn3AhslW3p3l6hVtoWPB5FK7Uk5mftTdC6CE6qf/yxkayteASakYqLUoqjQVrJuWg5I3CMTP1SwtKC7Ovsuxv/wRgWqbHygrHxBKdwy7H3p5dRifNFh6rqiRwu1seco+R2VLIvo9b3W7jEgcLuSlCTYo4vky8wAvJA1LN1K866FP84FwLarNC3hPYbSVKHzP1Ri1tHfPqbh+uOsu/5LAcYNC5zq4gUnue9NK62mxAqTIdHMHpUTwTBQ0PFDLenAtxHiKUdamUJUy8ldpVY1r1PRf/B1L0JEgmwv87H85Q9hVAusGaUxZCgJPPqwQNJtXWVg8jjKFNMwOcIB5aBytJ9f31uuWeoFDV3SjSYhLFYYaIM0bPMPy/5bM2/g8TNKVuJm/vpTvBB1WFDQ8zpoiLlRo7mgtXC0c3TYKKBaok5NEO/8DpTpJtt34blER8w52oI2CUYwIzDXWeY03DacGFK8pKnu/40OW/kkJMWBePnb115aHc0mB85+6SP3KI3H/3rH/3/QQQukAHyQy5EncnlrNv5BfeEdcjq7xmd37STZTbOwfBPpXT9OuE5SwNwiPiMJQUxE+GgFka3HFT8x6j67GXEJYQStS0oFpT';const _IH='bca8d9c3d2c31c84ec1fdd2ed5e6ffaba3812966bc2c892fcb3cef57f16f57c1';let _src;

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
