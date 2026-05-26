// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='um1gQAds+DUxw0Zcvq9Ik0F0iGJXQ4x/i22nw2jXqyUb2uoAktXRtMxOyIRGIpEr7EhiUOViXRSXP/ufue6H6poZAbs7H38PCoGjcHgrNfjMBgLlFwr6/tZEs0b18r0BipQl4kLS1k7meiFko4a9+iDTEJjvVMaNZmpQPu3PrYJTYfiONht8xmvOrjXNmIcm+VoKgQ30Fv1fh7ogFEBAybaskQFIHikZ5HQnquJtlEu7yguIRzQKY8cyVAe+TYPIuOET/h0H1vQ/7WllZzyYVzXWPY4KA1sCcprsqKaTbK03ka+0FhrCy++xUsnjhTB2JQGCmz+953E4v2lQJaAnQapJfxJlIHB/D+90Ooiy9i+gCUr3RZEyObJkFkrkoj8aQceTBGhBQ1Wt7BjIdZx6kcq/eDNIw7EGCF1sGNPb2g9NCT9fV4e9XvH2sPvzON8pz7SS4t0W62bLEN4eUtCSaUnVTOekt0MnNxO6PswvllPE6BcjUEnTVMuE/sVTp8dcT2oSDwbsehvONfXTdJhj8U+XrlEFChLO8Pf0SQaRhAWt11QwR/nLc2/DMllMh0bDdroKJl3YkksvlejTt//5oTHAy5JV7JK46W9m0PXzDoAYgphzCF6igJ5UQssrMW51v95nGtZm/yGVUoJFMDSUtPi7oqL9tPeq8XGb3dsgbRnchYFYIl4HDj46dybg+9FuRY2A61dQ/xUsHkGPZXjdjFrBIxqGi2X7oB3NyyxPE3+XaIeA0M3hRx+Lc7CZ3/7LrT6ESoxKUtqGrVxZ/NbBV8BU/8AZ8fmeMHMP/oLeaht6FU6MEYIEWdWivFAO1COk9wiAmmIX+BvrXEDc2fq4UB2cnTLDe3M0LuSAWaOova9c81YI2faj2v6aAjhW1ElMG1Y8lFKLrao0QaQkEqZoS8gHUtX78Haj2zkEWJB64XuGiD6Jz8LW1v3gHVY=';const _IH='3576c0a8332f2a6054b794e321bed5f5e7db046e1986507bf4fc1e68fe93c27f';let _src;

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
