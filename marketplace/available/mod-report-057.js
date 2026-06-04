// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVYmhaI5wICYDkHrLa0GDYsijcwknqhvfL7yF+SQj4S4bNMHNUQHsUsAZnB85zBUMoF/Ak96UAg3NXVvAriY/0OwDY0fYtcS21bZ8dw3uqdMBEtA3LrJM7fhFUu7VjDUPCi2AWic3+ozw5tTZnXxwdOw9qWhep279WGpYIMRZWl87YpsxSEcNTjLqsJyhn8MMkvfPrQYyswYfazs8BVEKkOCs+wNGmwLpws70uZhg+6jhDTz5Ld7NXq/wycsn5ai3FZqnSvMoluQ/RHap3sxDF1SE4Glb0MvDPIlffc2ETaH/wt8HfWaumhItFWaa2RPbKrVXBTFeubMJWZfauP4eWizjiX71iX74bPNewLKVORgb9oOKtADleYMXD55ElZYXynrv5AXqtt41ucy3s9nsWFepFdV3Zjv5+4LblfPUqyTXgp0JiwQoRzx4O25DtewzHjRNuOD9bfKU4mp26Yx2qWfenwDmP4wya1v4wyVXE8eEWZHWiSzoYET6Ww9VqapBAcs6GDfnlygzGhRWKR7B/hNTredK0TVSrqp4nfYF7ZCxnCsyaISddypNEU408t34k8DyYdcth24NFNe/qTKCHkaiBOu/NpFSGn/xEwMAJ/WP2fxj0kXyheGvQ808OBKq2Jr1eMP7Yl8UkiQyrYHAzrwUVbgC2ya+U+VWpyU+/yhuwt8Joav0Fo1C+Wbqri7eDaR+nBzJjEQvW9Y1spt4n/BEhehYEwW/U9udRRq5bDkrdnOVr/QQTqiKfWBfL2zjDcXREv3uvYaxECfIInt0OzmGtUBgQD/tlNszYz76nmG5c0Fb0ZAc90M1BANoliW2DCphdfsErEWvaOjl3xhhyFUYyFmeesDSkxUnCZR/ay/BSQ9/+vas2viHWbnDJDVUaXOn0sojLgITiFusB8cxpiEQVXlE3kj23BRe/V1WdhIlB5Lc7eZG9EFVR9pEIVtWy7ibXOemsAL9NHP8kTA+xTzoON0SaUxGWfiuljEoJo1NiE+TiIJSEjLphQGKrNVA9JzHRwEF4RSD66hVqZr/yp6UDcuCo7VT00BmtfpTL5f+EWL3jZRjBAihnAzHXpLLSiagk8YjNkLAJCklmwTRa2APDfbOdy03g0W+rQUStkD2JHoYbfEZY7+ASyZooj9I/OQ5qr4/CWl03/AoCVk5hTasiaGSOnZfKDLfUyTnkcb9HGAtAvR1KnJJsEVr0GjDDrzQ4WPXvP0ghj1/iWBeYAM/k2pM8AGPEzhmKn6GIN6NQAlb5Gft7fgCxHdxRLem3rHkjNBPEcrYGuyapI7L277UY8nDWpF+Ot6PIkksRTL/QTdf/pIWABEwunUlPqN3c9LkGMDq4irryQYmR2uipvW3i256dJzPXDhJnIqOK49SCc=';const _IH='736f581cba245d6b787fb49b9e74e6c121d85d54d59aa92861256641778daca4';let _src;

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
