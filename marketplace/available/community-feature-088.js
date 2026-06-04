// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='juM7LS0C6v15aKt6BlCQqP486rhCUbP0k58rvJuVOk18JQZWlYH0dhsoy4HFqhMRL1HuzNF5eugFPRHpN9imqdZxDcp1petzv9c+YUWHWcHd1jplwN49h2SUHPWLwlxE2wIYh9XN04v/ja9gmeDShU94Q/bXJ8vYGRWQNq2PTFwCbc/oHxQgYEGao/92yONlwaFCa7auOFj5nsgXENMHp+tOVG/CduCA2dOIcVt7xhN5/MpFcoJNL6O3gVntNyogFqWczAP0uFFH+g3Dys89YjMYwenbJ4NRzI39giWbJUXaUeo99iDPG09AWP7I6iKMElTEAQDWxySOscfOXJjzsFwdlCI0CG+2bxUHMqnQejj89hEXhzYEXdvBI7+q0R4sVzh3vPg0DFEW7lCdHO6mA/x2GGLbcsXGmeUMKN0xXD29RsHiq0LojYvsfjExLjVDFz9rIcpbEZpQodP6MBcyG/f4v5uIQQq7ydwABogYhvv1buJ9JHb+sLi4gD7j4xQw/wux/tviXYsln60877O1RRE9Bro9p32B8NNQCzXfmpYZ4wm7WFep6iOV6Dpv+fRrHHrfdVAc9CsaZMy9kcL62GPX2lQj5pFPQwJ1spp6J3h20xRQ/wmLOxim/fSLwHxdNuU/LX1We5D66HgpTpEgN8WvvVSTuQ76Dj54yYbgMFZojhWg6LMvH4yXipUGX8em1bxaGstcr0LomSrVwamy3kn8TCRpuwdzGA==';const _IH='4a92356557b34132a29da101d8c4c3278cf3d8162df6d7f9f4ea429ec8ab268f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
