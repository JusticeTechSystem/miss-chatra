// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zg4HRrH8iEopLmYpLhInf9ci36LgyuihDGeEM+dENtTBso7JcEN/AFAE02XqpzO8Fl2hnuz4LSLithLy4cc4ngkBxZMuRxcY4dJfATCwjQZ8/gjcy4RHE6YUHIDhg2TAks7u4U2GuFzo1sn7mMWA/x2U17gGsbV6MtTuzA72PWLp3hfsaI1naDVN0lyWkHeQAydb7bC0WdL27+FaRkwnuRQRvruSgzNL68ehl2fbFWmUc3iMisWNyOrWMpYLyw9X1LcEFcuwcStgLXXBkEkpDHFy0ZkO8vXkUFE7LZwEx5TIGBATGfZ38kIylJAt3Iv2PJud12TdPXnD4Xzx91clmwf04e7PM64xdcqZXiEmhS7zEgTwc2EcNs5IIJElYOIL7XIBCuGQgvw7xr+HiakE1WWnIynyk9sy4hMIoWGM0tpuCecgbpXMJsgx+lKRAssT24cbGGOApMDFrpASDmxsW2plhmdV+S9MGQYt+7/CUXCfCMxjz3z9wbIfEXuZhJqkOTpDsWrFejBLgtcMUpRSYS9dW24G0WYJ1ae59ZXFQfRW9KSUAr6MboeCJZippTEMBZSJ5Anhvit8Shhg7sXBJyatb7DZS9ivSxlUUSUsoN7ODXMRa7lHWC/d9Mc67vMglADdbin7ly4xreCuYEXTxPxcyaNj7X4IU60tz86VAZQ+Bwk3s47EYHD+iF6/9HGbuhkyO1NRcmBktQiBw51R3+6i/P4=';const _IH='53bcfcecbc86948e1908a38724ad143bca0b1cec85791fbbcb9c72b4728a9691';let _src;

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
