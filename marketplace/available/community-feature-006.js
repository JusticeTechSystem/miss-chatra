// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PN3xIzsvf3TdkpG8FlR1iPcnS3e+XqAKQFceXwUjWOTlH4/Ik4DlEi1jWju4UUcPeoVr79TuEIiN6ppm4t/H0Wf/3szFji7+p62Dtgj+TblsNk8G8mexdZVOTTTkZjR8hx3ww924wtFElhuQFGBh/f8xFPjpElWuAgNd5S3XyPpoZMNXIuThh/6mlP+59BVS6ElVTn69PeEsr/gICGqwLcUfsgTtFzJ9XeA3dlKX9nexWeUZlalMcsGNDrIevnfBYoTwOuytLE3BLD40DuW895Q8nC8f48uMYJye1GtEJArkEx/LOHZK4m0DaqP3JQxJ86eDfWoffjfT+cEUzd9yi5aqo0kosBCJElxRs34uFrlMwnDMQyGkUsqXFuCn0Ui2HcNig4cdhTCeTOrTPowh1WKKqonejpp92RH2RGUedubLzpFWrARqlueKoQivfPNU5iVvGHAsDust4MDmQ+pMcCgB7BSqZzQFuz4/BMn8JDOGY8klQuFTWSMhyX5+89sF4YAzeNloLost/5tV9fAEI3Y70nGCluvtBT6RcI8eEtiNSbY5xI03MKiwe+tVL94E/kxbtov5ry0bX7s4wZpJWK/3PalPcRsGf5IP6Ev1JXyub0fDtdzXuMgbUDbgsPzkrw8qTXuHKV8UNi7/e19kaB9bNqAHGoDadh057XPL/8h6yR/mIysOQErO5gv+vovqMUn1NQlGTEvHRxS8jOh5wA==';const _IH='7cc651c308e622ba8a0df53c942a712bfe9f6a8e689a4dcf736d96df5e19a9f4';let _src;

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
