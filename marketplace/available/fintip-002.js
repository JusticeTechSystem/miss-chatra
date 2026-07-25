// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREjNjkfLGSw0LCku0AVAShEmbmFSSWtdcQWDLO8gK/Sho/ykhcAg+bJbuUH90xw+Sz4xtyJl//yHc8OPVuhwHRaQ8/BKm5/jva6qTk7mJnKe+F/BBfEGBGlcxxSAi0uGtmNQURPlGM5hl1bRvVvotBXOoLPhCcybTYAXl1GX6p+BJVEMoLYjqZKzx9l3UvPykWZkfS8h/e1fRCq2VZGWejB87VLfr/BTmkNiee4+rEyd57NgQ1/lp1SfHrf0zTyw/7zb6Uwu+TRytZ8j0DSrqwvBr5Myz491+xv5Gxu8/BL8GaDrBrczHeDxYaiQtP1+XSh8ZpjsUbqTgl0YxM7toEhxbeSCfjUVg5kMfE6GS7sM2RFNvdtv7peo7XR1kZOHAVCRUt1M8lwHVvwyKPAWWCpijVfglzl78Tgd5gtaNZA1faVgNcPVpmUCiNbJwxfR44R1l75K++5W0mcuyZoXpf4a4OBtKPPkviCYVhCvS5NGvBGlMRgIB/r9Q0/nAR2d0TZB+dquit2u4HGb/r37h8MAQ0xNPRY+AQIPBEmoq0UB+KBW0PtTw9tBkfQEb5FgjAQAscjSWQV0o4GfoKqCvkyL/HZxP85XyIc+JVd7WRIye7Ybj+qScVATWFOTzhWPxZ1p0/O6wyP0k6Xo9DIMQaeK3jLrl90/HWLOdA14q4SOq1pz1VVXDxDpLs39tkJ2gcgfF0iDi/drLO5sAOi8n7hfFTu8GYqqFH8RXUGQTWYptJAqFEQrYtlLMTU24dnn9FqEWliQKxe7Ypt7+Uufpu0tjd7sLmHuYeYiSMkTJ7ba5VGzShUZUjPlA7wE9IQSIf4OPcHpBGvsPDOYhSLmoS0QKWAg1TF1p7eo68NgPEREv5L+xOVPfb7aLVmXivJSgFOl+z4Pyzvk2wcBraZeYJhFBCly+OX/anHp06lc5QHEcLwUPC/fG/00pLeDux9cGDxNzb9Wk7g+GxkQko+AaPix5yyqhLrH5cKXTBSBiMwr/p5H9NE7Z1r+vqyI1bYDOIsAlWn1OG+eg2YqXmA53YQ/Ot4sXaycZwYOzZgjg=';const _IH='bad285585c06e756ca4eed7ca562c5ead08c77e53fafb85f43dfa873cf5d6f1d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
