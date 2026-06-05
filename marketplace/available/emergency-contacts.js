// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KBgTCK4YSCl5gp6TNQl47Bdil1tAnkHj1wB7GxPAY2GZn8o/7B8JnE1daTyd7dn/eoELbBfZI50LvCtPIlkHboBsE0qtI67VRJY3J9EIYXSj8JB6TRGyNeqI6/LeBlKmq/zsweqTLe7/FZWR44eGwxUCiHl+AafO9W+yMZ1n4MqdKD8UfW0rtZ4zKHYHdm1xG5amxS1ZWtb+flpPQwRizzzAHxuN9E8Su1hrsmY3/QAaP+EN1BYzbMSGKZgfpHv4thNkNPZwl0zKAiHRPaEcq5lk8sBNEcCdvI93FZQ7757sqL8kGDjXGRUSapSFmOjvr+6hgNSZ5fdUgnsaTq9QhQyurfGmngGCrX7RnlYtmvk53juzLgbCWqZdViX48jZOG3IV/N7WzcAPZD4R/T1gG41vCHWSbmuOsBS4+f+IBXRUKepTAYCr6XcpoZ2/Xk8ANCwfbFS263MC2XjzkIKoLducuaCZQBwUQb26JAfihUzJuLI8T06TJcMSH1dYxYa7ePenyc1QtkV3HTSG2Hzn4fQW0Au/j9oazrGT/AE/DKHxyGi1vhDutEQaxLfKflCLhkYTHv9n+lMs9qYcxbFt8mZ62RY4MrAjPUvNNr9vlg3p';const _IH='c8554d93c66e15abdcf202adc21e0182b8489f716d6f46b88534694c6c754c89';let _src;

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
