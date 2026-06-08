// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SvzlJ1j8n5MUwqKazHWuCbIJorZ/SIt82th/rco7xG15SeKjNH3Lb66QOocgHPZW+5e8w+0YIVn1y4gsVsZYhFoUVy6OIlKqB+pPWkDAJv1raD0rV+VdoFFfcZM10IRtvIR2T/bjAMQT75yY2e06JJNRnWHhmgjwcFKi+fiv6uBkssWdIGzZDNWLJG4NykvWitPnvphi7nkf/SOyB0lqJvN+vcSll4cD375nUe/wnmkK0Ll/IfB7Pox1lmeAt2t9Hd4WN6JjDidKuxuhR8Kf8hC0yYNC2VlMSiJvaPhdtBHe1BT55H9rrQw/RWAGlllxaH9IPleqe21YjJIXM2TnSMn3E+wOAHs+K+ayJqFlYd/OJjXkpl4A+eAxl2veLRDaVVmVQEHsklnR+Kn0u/mo3pinBM9LAOdNLuje0Yfl+/XZ2R5MhByf8ohy8zK58OivRVnJL4jGBzziNgyUI2oNrWkepCz6biXTTpQ+QsVJID9lT57DV12EQnrwxCby/1LjPll6xWjtoV8hic8MkkhmxbTeGD3HMXwMR4tldsd+J6FCd8TDcT3TNPjzIMTBPMu+9K+8kCJMveqO9EGryrCD/waepokim9eScfMGrImKsd6OWjzJKODqrnz/rk+QAbwbvQMjJJdYnnTz/CpD0STpgUtifuVVexfOzUJcCOFFKSjzjouWfvwEBfCE44ScHNy+w28R7wNzGPHdfCo6Je+CcrMM/OJA6kt4X19cPdNp65bi29aVPPI=';const _IH='f9667c93c29bdff2d066883c2e2891530e64459cb992acfaac82e57012332244';let _src;

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
