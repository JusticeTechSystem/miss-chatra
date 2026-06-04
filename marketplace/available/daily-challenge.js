// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oxCI7Qh1O3RMjwIaWLbAcFZVhs0UlRGqoT7kHWVwpufiGPBfEl6ZHrbKajfH0eBnJMS+zf73L9LcoyKOT8LYs2YVztx3Gg3wvArY5NXN2j/05cpqkSmdxSNXpiTDQTAsrI/+ROjLs7eyYd2MVfMBd9w+KL4JltPUSIl8S62KHMFOTadiLzF6vuyrhKhjGz7kP4ZioHSDeX8c5KNdygZRBfq43Woeq6mL7U1q0/vkMIz21LwuLY840CWeLuc7j+ISE9xiUhdoJGIW4i5cjUBob0U1X6wQDZjP0izHGLF1BgEzFjwvmFkiLoXqSB7pAikaUmrgBxBkZy97JM2nOxDgFDo2oYUoqxGIH7mOcGIvyVOYos4a6gqBSFTLnZQZ8zyMaeT4VxF54e/pouqq4tAj5odGFI6WO4CO98RYavgFzjYfwpxYCSFl8e7mlM2TtyRGOdgmB919/TtQzBAgf1t2lvkPCRWLF8o2Opi31ZckTmhUM33PayXrVfzhDqdDipqmVAA6j68afzNPmw5kZhdDEQ/EnY6UstD3GscQNFbYy5S1GmuDHFPeotB/9ppcA9O/i6gby4R218IhpGmV8W+VEKJ12RzoAqvvp7l3GKFyqtRKZw==';const _IH='156eeac21aeae5d7dba536e9bf8192403dc3a841386ac7f121e2a9ee90c21658';let _src;

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
