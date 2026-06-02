// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NM09ZZTYGDhX9yc2N4rVP11kL+BDQkKJBpsTedVZch9KG4UDqDegdZiugIL+V5FXnGpE1VuPCytScCH3BOpixJ4NQafdWtnIgqIsEZaOytGirdVJQaZZGdX2Rpbw3rb/RYDyW1FVSvn6gbSvrHvcgPO18ALOTj4ZnYCgW+PfDeSoQrXHSXQDzov79sBr4nHct2VNTMoR8n7BvQSkAyurxqCaS437C02VeSBljT6sQcY2M3n/GPVd1FxTYLVuaMjCk/MVM+zIrtePEb2oRqUA5yjeFy2U2mCtUUEvog+LcjAy1GN/XLu9u74+Xxt9yZYj8UYf5ZZA2b7IFqMhWFAwxNzsHRqVChrT3w0CqodncAzHF8MS9GCuEaMckBYMcckhtmNMrs7KFNiUjJceuL+3S9JrbLm49/VjuOEVqqvBxGxohmy46nI/yr5PmdNwoxO/77HwKW6X7ozo+I4WK4mYLneJk6FTxstq+MGmVwbEwI50KQGmYn+q0BBU+TVJjtVaA+5IffBYpMVtVGd9+hnfQBO5sjol6vkpnDA9/VeK5qvExmFQYgzDYFLyN32Mi7OjYo2GQ6AC3rbqIpuqv1BQv/nqQcC1wSho6h0Uyie/RPFPROqJzKRS0Bv6VFdB6bFBW9ghT/PU4aG/ug6ga6wkAoYXi/Pdz52AKaQQpmAtiTYSumeVV+6HGD9E7Oagt3B7N6FZ1FgDk14lxW8XW3mzKGn/jzmY/DOZwak2UstvaJwtYL/td2tbUsNXKptaa3PW7wKNS79p03JN/k+gPZKigiBbTwUIc9oO2XbCnuG6iO/vq7YEuiNgMNQBvOqS+dcyTsLOW7NKNlcToNttev91WSWY6GmkwlJE+aYPY+TL+GaWykz7h9zlooz+cWeVzSvBC4ExFdTgZqcIhfKTRcqB0z7QEvDpUrJrasLB2ifWKTanBoQ1ue3GEjj6eDkK1dXZ96Ac55vDqeESyMZ3cJLcHMKhfM1dRIwFFYt4Sv1I+w==';const _IH='c4d2c38285f05c9938e8417e4c2af00d1d399fd2e67d1a82c6dc7899cec81152';let _src;

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
