// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r30nml1gpWqQNFz9WIPZ7NPvtfdlA8S5/MWV6pdWyn5KUk92GBRxJ9DZ/ENtJpmzjbAbfGmBXcp/iPzL1nQLoVrXycXJkdcYRpCdCc5KEzJTRMo5V3g/suL8B0/qPwcmcxl8NX5UFiSNcnjcu2zE8oLn0jW+t2ROR4jmZREEN5eTkp8q5DncCs6+8HV3lZzLvPoGrFbi/UJZfnR3YmltU7KBhPw2TW8BgY++kF+o/eR9EpLUeQlPs4QgpAxYM0/yBwb2CfxgmnilcXvQ6pTfsmFUil6QIN+svqlrYik7dd1R2srwYMeLMbbKBoVl51it409p1pJP1kJtPmqERpCPEjdDCi3smqgMmd9zBlCPwS9NKYEHcVMBqrQoEypUWrMOzkG533q0hZ19LVMNcYyJ5HLilJkodzWuMukofseAaLWdNTdHvlrHzmODWTIDwtquZ/rQI8Yklu1E0aSfPT4+U4Wlo7xbe58ohLZI7CAw6gKcHoOhNEtPEWj3NQvH17i7kdU6yISNYVFfyHbVVItFVYJo/z2YHSrvWXCSh9bXZll2GzOq+lc/UBr9Dq79Uou24u3oEonbUp+QG1Rn27WZ8nm7Xsk1IcNPTkRLyimdOssnC4XQ7dT1oVKCQvHKTEZDVdiSmTEEwQ2BaQ00NJATbR72HIzjytZcsz78Yg7TfRgGke5uSnErF0x65Pq63NCo8qxFAsmJlrxtnrInYK3UXEaR8H6ldGsp3Z6rjNP+FXxJPFQZvtZDhd6xGl9Ct/kzX0wWyWqL03oXVX3J5mutiN9IV9IXYVAkwaRUAwFuMVNPapc+tiwakJ43Rrc8tJooiI+Qh2qvVIzY8E0jeOqigJd7KqHD/W09Mm4SU2kNsF18xzxyVrAg45+c9SY9bsqPwQHv9jfL/zcJckrz4u/XQyphS7WSgMEHzDlm8Q9y4BCdL16k4t8sLIilA/l7KraC3Jbnj9+kMAZ3p1h9duB+vinzb+kGZiirzp7G9QBY4qDbWZG3spAdyFmQ+An4NAHtLAO43u1BRYKp1PwGuOBSrN8eY3ismx1YZRFcYIKLTgRqfg7cfjJNrnFn4iWlqnHXkI5AnnU7s/Wy5jAC6Uqo10p5jNYV4j7RvSbmLR3BVdGFmiPx8eWskznTm0ImiaIjcdQjdOD/dTEi4qt2csoV7gUELEOsECFrc1XzF8O9ygZNieLGxf1sZq6DJc5lns+44E49FxQ=';const _IH='fe833f3d64d7a447b7bbf3086d4a0eb2efac3d784aa1cd7ac6ce20cdb65a0c53';let _src;

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
