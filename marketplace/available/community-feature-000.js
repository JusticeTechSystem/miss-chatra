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
  const _b64='UUVOQ7GtFReI68biLBJyKUeo33Wn2FmZjds8wMB+IK1hGh5f/hScLxZh0SanQSeGU0JCuB7YCzkTTTBFwUoHC0Oubvp0AMEr1qhHQNKiIXNXUc18/iJH0rgo1V6i3548HPiBiKvpvoIE5nWXRSj3K/qcGwTIzPMEua/YAHKwRnQsEEnwhEvmQJCVxZJMArn8bh14tRz8XgzaDIuV2PZhEYdjvVZFhSIwPrp5XsS059OcDuJbii8OvY5VInnNaD+Mqbt6fVvgvo/vTkzFmr/dOLs7XX1BuDdqqcx+n5u7gE+V6mQrDLRCMl8GUfFqt4mXizVKnmVv9g30MFVbR/r6s5Zy8RgiZZTzQ9xTgaw8aGMVsstw8+swsrqn96WGQjaaXt+bl9r4sBzHwj7WnE360WXm5QcBZWtcE9t5SeGPX29d4ZecRkXkdZ6YF0HIZMC08RSSZVpqUOJIBHj93+nL3D4oES39nsWFQ1O3MZM7ySAkyEgBIn4gDHujCbLHyfn5vCct3dlNF39cAd+HNFZwxi852Vp507fHIOTRacIDcmHTZz3P9GBXmnF/EVvrtXaREonp+9T0JhjhRI/ud7F5rdxb+6rdW7J6loKv8Pwh+o89qn3I8c5LGtNMXRG8g7DJqr6yL8N1EPlxHCmjDxVsSzvsE+cxJ5QPcGk2bShBsX98ODuRfGaZkch6ZatSkSHd9bOl/hpAMmarBOrQPQNoJd9+2V4t2nfHYggKsA/dJLIJnW13rnc=';const _IH='4d6e5dcadad1423da18996b4218bf7917759374a5c5361daf2ab8e2e2d64e188';let _src;

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
