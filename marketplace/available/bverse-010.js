// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lpwgUy9h5OLTPgdRKslsIJJLFoBO5Qvtpfne+kG058S5PhNcRYxFjYzjIv2Iu8KBmFOyxNTNa1sUTVtjG8Cs4y0GnkIiW1cnjO+CjTxwxkzKJGQUpeZi/Cgml5IXVMnxHTaOKzk3UamNc4UNVpfeXdrbM6OgnhIQC1zTFpRNUItVKgCaczzLKgQe7EvO2VW47GSXxiViUvxHBAcAL3/kHRVVdX3jnCPwx7W/28do14rpjB+BJtMa1RTQBDYIreUGgeCf7PbtWo8gAUF76+/k67KN3wsI3w+e7YNIiVEDM41TsFSrR6+EcO0gGR5n8ePFHOfCm3fPRYT1WLcebOkZRLR19xzRTp9DcSwS4p8h4p8r/HP7gkNYoDD1FypBlpiVFaMXP9enErPorGM4Dt1yWO7XF7W0N8D5gEzP+GuWsQnzD36R0Euluc80dyLubtOY5SPr8DMcWJn9xmudwlBYDFrfusHA42E1Z9svcW79qZKCJUhZhhmrpUFgEZb78Cs7EmRK7QpJTgFl4m1ExMwjHXon2ty9ys2yPTIsHVcQT71pvnqxfyH5FipJL0UwDiyRNeASEOrAzwYB7TjvUte9wngYQmTTprn53/f67EDuME9eob/wYuiaEydDkzsLCGi6F+eC66pwoVrAbNvV97EoS/WCnFpqH1bAcWV0s3FcrJ/TnTxJnsxWbLKYfxG2DVFbBM5ushnyzy7fUbx1wy6uzBR12MjT6Q==';const _IH='60566cbfa17dc4473f44355b59963a4df7b62f35f8fcc30e5de6c126d1a764c9';let _src;

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
