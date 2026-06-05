// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g1G4ny11k2PTFO86I0X43lB5ak6Wj+9ILLD68v1tWVxlMhKMYjlZW15TD8dmhvUPxz8thAP9V0iEvEuk2DlLfWEkDArnUKFMW/igvwawVvrlOmUUr+Vn2IKpbqExdUDDzYdLlgG/r/1qjnLAYR9BcM+ZN5FCU9IrIyN9kdGzD4ICzAUiNA4FuOQ0oA0lPwTRu1fpv5JP+Hmfi6f5dP2ESETdtz7I/fb8mmb47seXz3/Vld/mcmxokfVxPKMJdSnqSodLhNEL/U4QL7hiHnYtutmVfISbsRzAWiujzYcf+KFyfaV0b35A7evSbvMRj1DZmwfnmT4VCMAKde5Hd6AhH1GUWxgekubj+/4m0f+Ru87QQPyV0b4mlW4tmnXt84+VFBrnsOOIRq1Wj+j2ulFWN0CE3AcA9Ehj/IQGuEwEo0780mYtalbTr5tSvotocyxhqwnnRrf87/J5JNKSkAQaIcsyqi9up0T3c9tIlQYEsy97Tk8fuD+bxE5JAXc8J+WJjwTjq5fH1mni5Pvc+GcQXFoDxI8FgStMPHkg4RpCpDqK8S/nkabz91cQr650QAZNPEsgAgzjI7EEPaE2Lme7udpF5h3zhHzS5xZWD2nB7nUerPswD/BWApNC4fDNiD5nUvkP3uIkYvSoG4hAMbzLYhSOin3m5bfQleW0xlptaBO8iVrrv5xGBAj+DrLOOvxXhH5+z+W7UKX/6R0JVkTA9Nxnoz5T7q9MnhDncqFDTqiKkA63Q8YT7D4FRQz9Pmnp9N77MPRuVl38l/THzjAkYChDBxvSiueFEBCsCtQ2f9qAlL+WRpsm3CHBvGRhAMB6Nw0uMu6C6CcmM58CscZAWRqRsICMZyvmVlKeiuEHBhHAaS6dv/A4bdtZ+hAtBTscFGZ07UO9Vya1A/PcHxwlyYej2iWFynw1IVs171tvbnzsjqkpf+G+rW4dquztOKI1HyVliF4XbarMrO466enUTNe9oAbgt+At6ui4LVUcwJB+Pq5GYQ==';const _IH='a0d9b810b0fdb16c5f64591d54d69cb74f9a9853defb7db8a4352f59baa7823f';let _src;

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
