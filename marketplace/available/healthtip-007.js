// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VEYlrdEPMvjKgDOgbUO3yyftlfPPIr9TMYQnfbyiTR56QN1Yga0HlE2N/n80LoxGiiuQrACAe8hMQgf0bX7QMS297xehvgzsnNpykmlWuvG6cOfY4MSK0+7oePpwWhseKe2Yz5VPFo6gIFMiuXAh6E/zPgSEl8zidrh+iSHOK9dxoaCH9+2KfK+3w/2S+NG6RhlO0FJpmi0PcC07o0XkpfJa3w4AkXdWcw3nUwvcSQ7uMGvGpWCdQHa8wksclM/dEBRZLcZyK3N9cUIgkgS7DHOKc/SgtcTef4cGWyjO2wvmfuJ1YKKXFx0DJtDDR9cdrJVre5Ed6bfetVWT8CfZ7ftUZYEVKKJGxUdPkqkgoHAcLPelu/qFc7Yx3GIiMPjE/tbBDvnFlA/500352HLCsfn1MBFtk9F5zccKjuhupa6pipfEaMnEvuu916FZbm6hQ/6/vcMJPRUvxnzHmfFO1/P9S87MQItmtP9TIjqSW6mGozUyrb/24xaLju3k4sSXdwnLkjyGKTX00VuF3lyw73b8WHbaFY+6YgHX6xN+Wae24Cd6JZSKKEYVHOJqG7Hfq1PJsUwNGePogDL8eV1+n9CCsK6HcpTDuYOFU5yLWi+agO87otvG0M19vM5zsVRMLjhp7FmUFFTQwGse/DmeSkx2jvXeAH0WThcYoTOtFt0VkKptIAH58hksKOBzSn1YAGNeaHScR2KBtd4XsUA6n7jJhG8M69Gw/W1MPT8wvv0qhxA1CV0UAz5Xj74k0sjnvC/AS2y70Yp9gReOOwWPt5Urys9/csGSbEyG7DtdsWidwZSIReAX6cNiaLjF5AtwjbVjUROH8z3+PQc5eCblMLUVlmMxOt1nQ4CKBpnRcgyQ+K4BAIQWJ8NTgyB87TDDBqfsfhF+V9YZMY3N30VReliG+1TX2aA23531rP2BiuauL+hCDFPlpA==';const _IH='83a95f6377cfae414448d160ba3dca4261c6813740b16a92652e6999092c7ad6';let _src;

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
