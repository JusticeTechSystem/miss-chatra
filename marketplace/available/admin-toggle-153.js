// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JXmwc4bRDPMVxxJm5SkjopdG5emJhJPTHonhXSegPWzRNbE7iemVGhjKAnbjF9MM+agn9eNsQNlYoX9lcEF9t1FEINOvLEEvcf6UC2D50hldLMDYOZEvRZCKRjYzNZmrnzJHKj/fZeMqxtAUC+41Memw8enzcnjWZNn00Uv6Wq0cOiQYpDrWYXfnWM/Q16e9+zZcZS/+sQ+drXq4TvvAPq78e/l//9KDTEtRK3zdY9kLTBjvEcsSKsjFT4/a0PqyH/Cgu51f8nJLV/8os42YSVGJg2gM9wxTLintraiBTG2lIpgDsZx/5jPjWmFQ3Djbh2cS3uj0hFT2G951ttleR72FyTb1gOFq/r5t8X8qCqrFRogfwbVlS5GY+HCwCuGiEQhXDZbeZBrPq9h7ULpZ5fCTOX1wKR3cF3mokz98J4T75NttItM1KIHpq9nzdI6YIh8xpTFiICDbHyppy9Q+yrTZUej6Q+lzz8LeGjfd+DdJa4wbHHO1nX36sk8uCLNF/fMdtrKHdx5wbLJT27LQkbEFSxVpOv/sfrTS1YD71QopBjo8yZTy9kB47cwFtgHO8cR5YNHg9KIF8zlv4SV8mzPHgwm3u306/HVMVsbnXV4ajavKCusEfp5WFMuH0JS3YOC6xH7jAr7ji6TZC/U694hgKDcRahS3NdbPprmXujoujLL5HAdGRwNjhssFueO0CTpRzE0DNKPAC2hTgWZ5VjgBEMpwqfd1YvX8zesC8PaM9foi2tXaaoXjuGl5Kvlo7gLYEkzS4ejPaPwi21q4zQ62Nfx3hGgRogEvcPgIztDGQFHVqDPwtLWWPsRjerkD3LMNRxNcMhHz4vYECJpKaAp2Lac6xS1T8CeXDJcpyz1UOLiYKeFrhVcauCH9A1qe4zG9GRVhKQk+VlmwyNE2Ni8wN3eVMKdWFS7wVQD0vI4US5bo+K2VeL8b7+zBouQy46tUriXQqCd7bcs9t5jTGJTgsndFqyzFXrDoiSlLE8sgzulaYG4zau913n9fDa+RdA==';const _IH='6749ad73362f5bda57a6876f260776e12cdea86532a833ac816a0e18db0c5d89';let _src;

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
