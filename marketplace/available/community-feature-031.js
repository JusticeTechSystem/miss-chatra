// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TRcYMsdf6ri/78DEIdqtMF5vjQ95kun3MV967dB1uofYaKpb6VCmcPnyB7zbGLWHzX95Rx+4dL1Io2ZBZqWUbpImlH8l2JHRznt+xB0l4DzmLvX+YvBhKzAghPlyP7x9M7gOWGpwde/YeHLdJvykS0ghkGFTKiLRk3Dv7aosIqve6E3cgKkf5mdsp2pZsVrryAznGYCtjOUCYLBeAR3pjnyAOC3XRI5ZBiqaz985bnAeLg/XaEsf5dPjfwGE9/gjYPGaAq/zD2/1udlE/GhyOlHvMAMHjQ4iETp9OwX8+SESycMRrp03OEXtLnLpsKfNK3D07bgn8rtk9AmuC0tGIDX4KonhCef82xMXrTXRzg65DoqdpKHgCTrrshjbq/+a8B/S8wwylgxVN5LAlw9SGpyP6fxhOF0g5A1NZezTLI1EtYlCcVGf+5886zT5uLBqySZXow5SRgN655HO4kxvj4bPTIR6vBwf+oZkicP8uKg0Y0k+r7OM9AlmkCbOXmfYg9BMk6Dip50i7AKAy7HRtX+weXfkdtL6KIjqltKJkNiJ4egB/t3mnbJC+S3flENQCpIblm0Lo9/UO1o/ZgSnil45dP97gHmMQnTEhaxjV3NpCXrY3c3aONaXBp11krN4uRhSG894aBLQDp5oLTGeB/vNiWPXKDpb/kHFLdxgVvypELsZdrv5LQQXgO3JsDPC8um8FsY8nCDg0hgQVZZm69D4+60=';const _IH='d6565e68ef820e24a54a156b206f05f8f2f06e219768e81b1390466b38c2fe54';let _src;

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
