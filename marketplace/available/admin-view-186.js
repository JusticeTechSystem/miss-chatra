// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BIGaWTIM5f/GmggteNlBXolCScHnMj/7rBGf5EZjawxXaPeU/r7HHQt/X2TkoN2p16nSADIR1TV2rM/74z+XIeIWbrq6vRAgc+pB01p1wnnO0kL+a1WXy3uwQ8Th6sK2iER/ASsPH743A2YRUHnfP6UoVluVttxM09GBv9XoCH8fAaMs1ai5UDJfYF+SvgNCxlEchnPTQTH8EPLYVCmLGWPurd3aSpgl3cjEXriTM2QQXc3qGTEtlp8Kr771EVyqjWrJ4ASUMMyYoNXAHnKUBcO7hSUkXxlE4m9ckGW3HEZqf3ZuVgTst3HKthWgFD1W+AaFza3DdHgei+m1lD+C2qTubH0VpbVk5DMBioXKCBNXw5YkxuqmCiIoOdpYrsJKHk8N8sYdozNcPq3MKfzJv0CQonecBR+M24bSYa+ySQPjpYx65V840QhbS8csZxM+gkfP8GkthWscMuME/BoiLB3cIoHppi0WJNboYMI90E2AM8s3hPMJO6kX1e6XhVfHi68cb67Bk55GmM9uVgpHOKv2wss8+JZNKoTfbO4r1XkpKZSxL1sViUN25a57xs0koKhC4wf5jwbrOxjEWwXD7zszVSXPMJ2fmhqBr8zwS/V4FlorUD+AgQq5295I07OdS8yOd2LeQ7hJ1ogD+4irM5Q4MlcugPeC3mji8P4kQ31TgrAsl0wFfr1k8sSsvICgLg/Ciw6oVAmW/BuAic1MeDy/jQRx2uG4BHkeWZ1xwYmtmeqAwKOqocMlJGy4f+XprWnqhLe99hA6YRNoVEn8izTb2RBDQpidgxmgcV2e4eQ7BkqDPPTwofgeb/HmZV6l8WMrznxMHuRQVfCCpsPUYBaHX2RjEtMl7h0lDjZ4XQWyA8LbtmdhWMG125jHXranDhP3ibwkJw8IwtMR61mSWYUUwGLEet4jIuKEYLIXAw5KzCH3LD2y31wZ0hvTE7fHQJGrISUu9A41V3EQaRRiEI10xkJ+6ucsKygosE3ukTpOe/c=';const _IH='be2a56c9891cdc692f9c7ddaa59541c6ecbd979042c7a3d2b4808a4b7b670ed3';let _src;

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
