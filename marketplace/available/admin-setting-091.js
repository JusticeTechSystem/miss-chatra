// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T9Dw/5tfBGqyK5WUSNfNFqLfdg8ZuJoo60wi9CLhg3gglE/BH6sBQOJiAARy9WfWWAUwCGldOuMM441HcnERP/yzeWfcbmbI+I+5oJSb4+LcaDE8m+h2Viz4u1EVXMWDvP5a3xrk6oLi1HsPWuSybDKOEAIrNflIZL5mB9f/RsWqUDT2nYlpDuTx+RRDAZCkSRhSiQZFJaC0slrDD8U6Q3QpQLBFhDWulygOS43C1W4WXap6uSdAX1dXsZDsaF4QrMn9p50fTMIsVMuCJcw12Q2v9boQOEnQMRHA8htlVMxjB9H8qO0DqvfSedDwPwFMvyWU6KGaRfRiIGq9sEcayeM7j1NHLto+7ISNHZI+DShUpeB0xjaVqGPM5wfEYFh69rEaFJb7Wu90K+WX7TFpcPQnU6tLH/uRGw8CKNfha/NInMMP3Q7Dp5ykDZ8ANrV7+e1k2LaJjZkgzji5ZKsmejmJIaQRs0jr5kphUcvYaOGc3KwmNb7zzbypfNNj6BatWflEOyHBKOgoENw89ExVJtFr/RUMyUC/3Q9zDsf72Fz07N2rhsVT6fMGh+NYvbKLI0jDY0RCJssU8uQqgE5dyRjyevwXg2wINBFytGC3gZzkmcAQFA/ewbbcj4Cn+t48rmto14bfJbbBDNrMiaMy01pRxUMdWwfA3dGcc2J1bYuQaHutb37J1rzSxcaoifO84gLJmZJXjMlDGPlt5jtI63H96QpXs3LjXNQFo9XR9P6LrWPU6slYI29rml6Sf/e6LMDoDFPr1IRIk+Bo4jUV2xlaBsQAqW3ND1omh2q36ENEQ5Y33tcNKQZv9Uo4UIaFqf2JrpFBIb5dCzu5ms9gEkTRT5Qe6+axtRHQlBDkIUDh9J22zF6xtjObeCjI/AgMLU26djrFTI6c3QbjtVYMBLBYc3+4SgcvNcYotflfEJz71TDW5TaNoewbYmAXaAvx2Lcw3e+CLmT7z4V4Hvt453rGri+XXZ1qNj4iGMGLWhuxfJuWteFjwg4e4wb4GNLOBA/dYQ==';const _IH='d362f78ab08c92dc9e76d7fec9a82555385086830c02dfb8321983d86f6f0006';let _src;

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
