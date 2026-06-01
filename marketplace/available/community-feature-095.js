// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0KNUYfHCu5KEFoiUVmB++fd4hX6PYRUjrjooTphD1WpIBUD5DqSOHbqf8cZt0nDdzePpFYJNQSgu5Rg3KgkUVGNCxtEKTpM16lj/qJXitCHzvkXAkVbYCBJRo5Gg8zBB7zhp5hJCFOwlXOnthFMFI/jsm9mvW53l+GWztPYstDfL1e6zmjAPErJiDylTaSh6BTYvlTNmEKYDcyflcgyTseXCdMqqLUK7giMZErV9xnC+RoxF58eDb5HVW6wPYjevyA/r22utxEZbKJphMrU+11dDHAGA7ZTDNRQ9EhtdSaVO/66Dz0rbPZLhRQkME4VtpFc8nlyr0CVxrXj0iSuqMqcoQssdpeCsWx9fBCcTKtJHrKlIABp85N/1J8UbdeWbhjdDpEIP3gctXedgpu+bBm+t1GJ6kryeXkraXG+E9XmdigkM7aAcJhOLD0wgZqPWSP7t7tIUvJZQCT2Q3TWFYuSSGMFzCWM3lUnj/WPWouzpfa2JGqL7PIqUaEWbdcktzp3BN/+r2rix/dQQWqHUNWT51mbhL6gk1vxSFkdj39oPVrpZv4kpBcBvVR7L459wEP09kXmlBZQU9coudKZUpSLV/0ofP0nZVytcl4eosAMCJ+laIcxbDIZAkqDxO/uAHjCp767n9dooG1PBGKCE2iZxfFwWJPCB2lU/uHQc0Sxop+pI6QYaKcO/VpXFgRz0hynsxLuMUL5VVWMJT7GughoAlY40cOCRbOGZntxz1sKX/N8q+Rc';const _IH='463f47c00f770395a93ef909c10e7955b64b638bf8b646c4782c6a892bfc944a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
