// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3rLaPY7xQEcJuTAbWxtXBoCB0TGqMCb0g/fzXwGzamuGMKXUHVXq1960cGDgFyNMYhm+cOYshaMN/k6WckUZ8ud2P70IUUXMdFcGpJhAZxhxmMHg4MzQT0b+8S4uzrmfZXG4hQ68AVw2sPyp/hWo/oIlYpifl6nr8wxp5Cn6emfdbfRXIFzYaq3ZnbZKrvZpl5Vv0WnODSY3JDz+pUEYus6Y+jzAbjspxFSRlX5E9K/LB9SI88s1tmjKJa8WVlZ1JtB4LxEWVPDsywpxDpITWJzuGc81+5ioewNC1PO31XRKATShsrEJ02DDrBeGyIpUBQsdjWAszH2+Jr4ftYDRjewD4ewKf/ZqRcSYZDwQfylz+cbJipIHdGY8ZMFxjCtnUa/gEUIkQcwFZSiKES3s/JYt4JAG/yACct1dGcSgAZyBmd1ZkivLpIGbppvBRbh+WEZUepu7hZ7Xy5yQA2pHXU3gHy6JxA5MTlAA/1xzY8jwhJ0+pTA1E/90qSUBSsXwySCaXdE70ZuJZy1gfth5PURbDwhLZKKrpq90wRwzrrOUscwkvFC9c7gCqtL75hIRcKXOCiDv3r++H6br8MF4jX80wxHKSfSjZCWbFx5gM94mXvsbdQRW4iLv6f/SMMyKhaijSzng04rn0L8VCfRcVTxxDdlXZxaxXlvcBjSQdrlMWfffNR34GhC214DPoWMNuGgbUvzexfJUk9wCwOwFN1gTVEj4Lis1midsg0L3TWgNvg==';const _IH='af8d62cf90d6b72406c0e75fc0bcd09b2b40f9be65af40552d523e315f3e6cb2';let _src;

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
