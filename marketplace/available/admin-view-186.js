// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+JULMcQpnNstc4fXg8b4bt/il1q8QDyFwCYXc4GkyHBzhrp0xdC/QqXXUTuW6Fy+UgVlko0hKFTqI7kHzjRlAV8hH+r1va0U8Ej07LMVAOCETpKRm8meFrOt6W5NQZFqebycY3er5ALqctYjbhkxQxI7lkb3Tjg05osQBRNg0NxMuAu7dt6VMQJuJtiNxrCMCw90vwQd8iBO4admlLNvJ3KEIf6D9im0K1LFRYnxx+i3tOkgxO8MS/kLjQ/G30Ygu2/E8VoNuXAaMYlwoxQRXH9b2gp1j0c+4kyBiU/gErhEmIGFghI8im/7VnzfvWPg7WxIXLxKRv+FVQ68CHJFU0pe8I6IOXFvx+y/bxus/K+ukOl7VwMHIKTbxldnT2MgjNZ+K5eoZPB1O2xNNMBIkpk1pLVNGGhuIABkThmQ2pxIUaYiFGDp9SyfCdHrWTAN4JsM1cyoyhs2HVzRXrLJcaeOPJmGUpdOjAlJ0WMCrhRERfe6sYK6Y5Yo/xacC+txUT2t4GOroMHSMdBO93LA6Pl8pULRsOHt4m03OBw1Plni5KQYny68wiXHmkf7Fu1uv00CWKeOzH3lnNRDM9RPLy+8881z/wxEjiRNAabYInm/1DOJYyYzvwgePy84WFJQSSwp0HFQO/+S0pzV6EXFTg4Ms08+1PXJGF3KDaFxpREfWAz22ZhA7Z8d8Xs8MlvTw0qlQYNsCWWvdmcunvf1KvqcNK8zpwkH2+k/E7w+YtLpvXH8OlYQoqNIJ/Y3C6D98oT2F648+ItJIzq13tbujEBoA0FhFTPQWbNtY0dcdekVozs7zgoCkrUmMATyJRRLb//cWkr6R1tkwX4DjWz/aF1+3ubkZb3/3Tehd4h62SzlBkUZiESozi18IliBVH7hr6eyohACS94/04dp6d3MZKM6/JWm4wh00kPmwb2fjTmDlkgEcZJKdcg+w2MAlD7fh6uU7n7OQNJQWkuh4YDqsa5nyXVSVppZaBJK2jfsqCH7/HY=';const _IH='d8839c43861a52d543eac906392cfe590872f84cf923f7ff38fb2d0dedf38fae';let _src;

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
