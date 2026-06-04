// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pAeYT/0IgbWIdR78z3BuXzg3rHi0hR3Yagbcn8LVWp7JTPuHPUWI5qpR83tAuSxt7Mc9HPp+tYCFS0D4sAf0cKdSdzg7yq0Ludf4NY4pOg1A9uTlUlybGQoxsyM+E4VIde6bKSlGiEzjetR6+h+Snbe93p0X8zcoCr6j6OGGxz6WwVhjXhA26hfwQ+HOXEbv2MDRQLE9rfKs3Pm3XPzppG19VB0nHmmBDeqXPlIsS4A2XE4hhs7ysfAZgGZjpE0IdeJPxi4wKTF41ld2R/BZXMHqEOezLR8abrTAHi3sYZGzQfeMgHYq91s7/Xu3HKZqKD6P4C/mum/m0LSXXHvlPlEctlACFkW+wKAn1X7HwKPwbKGQL15U35Rz/d/EDILnYhddB3vSjyqKqkzg+iew/gefcoVACJCRzVBANM0qowZe7Vf5bFSdaQaCDGZq3GgQraRuVSS22mPhO2vG0l58ukZt3vatPStVOV9zn2PC3C0P+uWUUKzpMsxM7qHSrQ5oUEZBmP4EwJOdMdztUUNcaCgei/tQldlw7utn5lMfEDV3lvMVS/6crK+I1RCcPeLBmNR/5RJecfHPM3D/wOJlD6Qx5J8TMbiBW0ncTRVJ1k6wpLTavDItis4Q0o6BihCjGn/ONmdss5yeVhe/0gbhFOLwhdRwMzubTPMwJkmFWJDuh1LxovBp08SeO8fmhZ8n8kdx+ZHBbfJejT4WDo9K5erUAfMVIF1x7WC00F9nUafK1jqI0sWfLE7648Z+HOnSA5LSu/7iZXpY6O82f1vNPxIKBwZzQWh/edMZK0+5SZiFQtNdpSGKoHAD55HGnSSLlVzDMSRnarYh736aCLlzkBFY4gqLZyHAphvy31S7Wb2TxAA5BBvueTo4PvcHIiIxBMgKdNDU8d9REe7JboMQv6jX0qpConWHelwjZ+NP/J5pM4EpJz9m09gmDVZRbHGFCK/e6su9ZzfvZQz5e4W660bNla1EKb2';const _IH='bee6a80e7d80a3d5f20d7445277a2e776b138c60685c9fb82d1ec57f3a06ab6c';let _src;

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
