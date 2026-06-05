// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JyCAfKWK0o+QB0TlpqVIZU26fq3BoVZnroahoRyeUv6c34GHHre4MMWM5z5jL4mGFtWw7577DcyRTv42Jt0hPS6XRIhld1VsePo5S5S6px+gC2zMRdRUS87mTwW4U9z9VMW8x0yoyrXv6iS/wVO/F6COBD40QPb+WwpAe6KM8bv3Nl2NRfid8oxkgMyuWnatk1G9A5M2CmBqjmPER77wTzD0JLSs7znnCTClMFxJECTmNsVnMdtN98Cvp2cpxDqLSblebO0lyDCM3VVbAivyXB5BbGAhDMhJBkk11b/0SLRPv3lOsrGJvZWbxcNZL06WnAs8/nFL2cowtvlY4v2VqZ+8qUFDdI1SvxyS6W9IfC9dHvvdcjnIOPvVkGCs7bh4U5veiDb2r6HthabQBY3H/Uam0gxMMxpLCft5bmy3c0yV8DjlfX7oC8fH7eac2n0XrJn7sjwhiB1G28gtlyJa/+Kmwjy9mkTMLQNQdmfRvBmHFYEMXjZSSffpmKIL2RkAjli6M4Vq5GDGJ1SCBNI9ug2kgLSWCu/u5+LyhffsDvlAltO1B/tiPIoiY802Evne3K2F3cJnzp+VxWVjM5bLR8Iuf9RmNb+CfJ/I+BohWe5Is6w7z+MobpVNyNzuqgWOFpyf1a8984oI7wISnCbe5hQGRmrTz47EaFv1DV0JOp8JdpvGm/BQyuDb+KTFndXBersFVTc0FX+8xlVpvWUgQ4OsWSgwPZnshROuPFZd6mr6yg==';const _IH='969dda550cbadd7b9be9c52ea9357655e2b1dedc07d9546adcf11005f85cc7c4';let _src;

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
