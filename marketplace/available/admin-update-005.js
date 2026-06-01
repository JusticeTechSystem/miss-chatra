// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxmV3RY3sNNfwPEBTuk4jIx77/FiPn3Y6hqb8yKACMSA7iOXMMICOv297k9CDGaThbgo25NJa6drcR1/maj0Q9y6+mETtj4qZECecBs6XuPOTVavQBsDczuRWBO5Xuvviq6ZBTueXYKl/i0m7SGKxUh/DIm9NEDv/605zcE3hkC1FeaA+GV9gPXlLqEmg/k2Y93KvF1dNgfoMtMKN+rHV15cVX5Y4xOVuhHZc81P7pGoWjxf33tI+HJ2D62aiLXoBiC9rohJDR9E8dcvDhGyomYFc8AoL2q5J11dk0IIkBjV1ftxoAbctH0/Gz9XWgTQYYj7Nku6n8uEAHGMNUepIGYEQr9E7Go32oOMiaVv3sz2anSb96v/MGhcjBuC0dPANymGee4mD24OFs9P02hOkBT2NQOpw16yUdPMoMvz54Nxg+mpl5uWvXjjX2lyIG3qRCPQH4T0t5GkvIe4AOHmgBKlokbl+OCNsfBdtQoW/rMTNj9/lcMfHRRmWuJTSEc4HusBvQtOxySQ//yZgL3/EE/vkCMwbLGXSw1ZdsRnaeoocxm3DAW7HhVLnSJe+xu3iYRhco7nPTdXoUMKzHI3C7+6hF2flmkGZAbKQslRw74/QQo3r77/34Eev8QmLpSAO72aF5C/FdffEK3LCoPicmLfIaBP/Rk3rynA3OmvUtLjySjau39K9pT+OCWlqt2Lzw85Mghm67yELuLC+pQernBki68pZggh5PYpgAfmYXAQb0OiNXu+Tl3p3/OBhXUd+ukOPqmDHBNO0Skt9nQz8RvLX/e1d0YlO4zeGjkf9MqDubzXal8GN1nVgcUM9yCdci17LQXHrmH4HaGktcFXcVyweS23gX2RGWz908vEhPzbnRzCd0iV8TnzlkoqpmAKqRiEnPo5Y+3N2Ysa7Xk63FIddTHH7d2V3X4CQlBIJu8ATVBxMUT0M9z1Cu7uOxWfzBHflL92fkc7OPX1Zh4RvnuksJwNCBLZjb73jaDEGBGpWdSznW56evX9';const _IH='020a460e201e5148ea201092f68ad34d34c2542a77e6dd4c2fe06c7355107df0';let _src;

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
