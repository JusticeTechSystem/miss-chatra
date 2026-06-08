// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F5s/Oj+mmZS+bajj4qBaJfilujyLjX/xm561Rh0LSmYqA8ChHP/HKXswu1oIBh6MIIA6JdfZ2Xk0DfBeq0cTsyjmNZWRslBRXCw5kJaBAgRfRovojAflP4l5RbMsiQeaYtjjYFqPt1JLw/NGRcGgTMUyojkQx79ZeA2LgK+OSeTguT8seaP3IC4c9mw9muAxMC0FMQNcMr1gO3gwhWAWGJT97URoh/eA2q/ARsambnXJtFMdG1kEi4HtHBGyFPamPEz3vxZWDKDGG9c4/X5iwVhSghhhnjT6Wkvwm8p0umI4y2SVAscaOOQAEixs+YtK09Nylxqo5m7FTH9xVnyD10vP3TxcHtLOkQvTCzz0i3mF8LvtWIMdMsbRTjuxP/QRWJpuxLImKkTFlJZjG/strxnQJN8ujUycTlFGMgmNxppwo/NyTo5wIt1A6xeGs09eizZx3x3dSDJuGFlrENBqT/twe6sW+opt5/cAPhNpLL8aVsuxJvcAmf5APsYkgDheX6i1yi6qcLUdnGVB6OI98sK16Gdnai/7HUWfxMZEdS1kAwFCjI5dEdsGP931LxaWoDGsMSOwXcnMA9fN1kju2ndtxlf5bmkUlv8cNhE2qRRvkGsyJFI4rJlwKL0LAQSY63vuuIzuU0W4A6OhfwCAO1zmtmCVVMWIjHhqgXmmU40WCDFlNAGEm/NHfaoG+f/quV6qsuusLBiyeGU48TExyEObS6w=';const _IH='6f9665741f2607e5d7b4a93c2e21e74156d0efc7fbb8a137e600249f5761f1c1';let _src;

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
