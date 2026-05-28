// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UFTLH/xLl206QG7HZgWaN/GxfYcRqx1SrWJ9IlqYbCkLDoMj6dfY0HVrm7zUbKu7TSsVPAvUzTo3OKRodvbzlrT/gaeGJaaIN9p/tcyELnpk8CgKSsjPBrh6HVKz8lhVsFR4kLuIHllHMKIMe8w0xEC9FEzEVsNi4benOnW8D8N+9PlyiMkTd2ecsRbEmVhrhANsLDBXUsUWAoUrk6+uMsoIv2Mevkjgbx5N522yEz/RlMfmxqMX2EL+G/bbqGcz1P2GzqFbX16Gx9LvEsrpzhPxfGW1uwNsAdSkbuSinDZWS3aNeaxwPeqD8ATTxkD96BECJguLDDN/wv10xAXCZMXPUpbquflKd777UDet3NSriPTVFPMD1ohj39TFMJaHgpTqht8D/7sFi35O9m1n5vm0eiBYYfdu+PmJ2+YTOn4y/kiK2wM+wkifvHwLh6ucXC6V+NM+5UK7WLrIl2RTf9k9Iz9T3I3wcqmRabo2tej40OnQGmAZ+aWy5yYOaFzAXWB/zVDakZh2uPMuZUBHDprSibbk+e8ehH1hRIYavSzmuQwIV2Qfk4rjUuyYniCp5A1Iz1SP30a5DBTZPBA7SG1nX4SoVlAbbEchM6dijVWRGsnF0Z6oYgNmht9L/W7Q6V7XdfAUsGqy8Mx5SMSDM8Absr4EBEwKesirnyKBnABYsQPrXH4PFytSvgLdtsQ3dMIdzqngU+g8S7VyNNkzlFlpFvCLSKqcVw==';const _IH='12d27713a0fe6342487c4b49f5ffbbb3d34671c27783cc6ff58a60edd05b5efe';let _src;

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
