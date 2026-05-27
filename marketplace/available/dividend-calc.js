// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DPEvtZw0+PyKA4jNNmtFqAv25LyJ1+iqjwPDRBI2VeiHsJVfzqKU7EFKfElwwKL6psQDi8CcVcsaN0bi10YeMwY/7wuoxpmnZwtwmZsERig8JUfWA2a7+jo2J2fGKbMx1Ykb8eSKj813Tr728Mt3sHL7m2M5YPy9rwmdgtVf2na9rlKCZDgUJHjDc94zskEOefxM8K8WHPqJHD83Yeo3F3V+pFqRb13WSPQQ5IAr+798K8fmCJ62WuRfyPmb25T3NYQ5sZZo/Bbj1vzdhzU3WTAoitZCOrlE2eVEv9dYBhIjj1yS3izH37yMQ8ZMc0iNBUpVa9+SnH9yESNJknFNl60+Y6v06PU887FwVMcdb1KqCBfog5k1D6WRe5ZqoJdStISWLnEyj1PQlhPRHVBcOrzG4hMoZ/VurLyWadgGEuGD0S42DV5kYvdMph4FHhv9iFVsqRLrkDCnx96r7/qtNbqycT3BfnFczf6PEVNZEUWiIZT1YdG/M/DWKL5Tv9xXLNnhP1rw+mw8b4M4ftOkjGf2SwJ5GtOV8V/lA7yRjBgdc85Cx17RlBhvt/B59dhjgkWS+TsGcpfge8FRTX7SLzPeypntnseI9bE25aMgOC9IZA8KpwPCrqAOshvsbCcR7c3cMiTrzWDxhgtKJRo1LJeGJHBSg0ttq+mcI9UU/MGQag3Hh9IsjhS91ySc3bZUV8BbXaoH/QxSMkCQqMU/OEjZ9j31YAHoE53AdLyfi9hAicoJMSZKgAoX/JtqIF7bYXosbLQ5WhI/kAWqwKZR+LRmMmTlQznJWFY99ihMqOm/H8siX6kYtAC2va+DRYQPW1ohZNFms8dREfbRzla82KZn/dhO2tcSJ+h9lAdXH+WklqTrDuIHOAdDGYiFQI4RR+t+k9cOrZ5t4GIEI3Ko/UM4jCLolXuyuSN47XIMUe11zd2el+4+4E9kke0uxSDuUmhYY6JkCwrjPb0yimJb1AYTppKrO5LbaVci7A/QxF6YqsiffA==';const _IH='8065033f1bd7e193ae4882de6f9be09bfc8e8039bd0c14ebd757fde77ed1d79a';let _src;

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
