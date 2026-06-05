// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hpovmYAY0RtCNzQsLBdAE1T2sLA/tc7tMjWY2HEe6fDSZNyL3qr5c8aBEOhL5gIUam+VW2GYZf4rGzGXkuQqwENliz4wVCQc8nrGeRXBXRHQHPVQJQHcPFpiffHyihsScpT8yAYD3tM7c3ln8s+IyMQ8lgow2y+4CZ00BXgiV5TpiK0vmBLzfEVdCtfiJkMBODgkulTaSO8g7KYV0Igo3JROYfPxBJ5Ix/zyu2ya8I/iUXAUEXc/HzexwfTp7pq1F4Y0tr8aF/Bq4al5jjWbaGeKLTng1FoN8MIu6ZKwDUr8yQgQvkACTupDnFQ0cMuf+d1aQbs7waq6CQa7Zs3J7q950XhlHGghHV17rFl6scE/v9rokgWf9mB/EZgLMusC7yx33qFRD3dIrxleGassXpitQrFSR0pTO0TT8g0/KsG/x5mFf+uzl44QMqmQe8XkjBsitgC7S/0eQ1LNYNrdpmw+EcH+ejs6P+kTTil7tEzGGNeljZ4Lf341kY3LL/RqapxpvZUtPu5raIAU8BA9ke1c8i2Jetpz4dAVO3UBwtbAQZ+ocU3vgYupjSvc6bWoBcQLEPmkcbZcYnerq497uueGv+4HyJzwFnPdRHuG8Y6JJ2s3HJ6fUlnwZBqbY6WiNN9lQp26kBAawres7kFhyFvIQcso2pc3OGzDUh5Kmw+Z2pOIKLv834uSIB9H0CJvQ7qi63n2cI/CIMLyWEBivXf8PIk48xzX9z9QSe4VSFPqE/pntvWei9ualk5y+u3cRKAgdMj673FGVPHY4MUWBQlAfVKVRv0XP6n/Yn3XGexxt/3Ggt4onOhJfu/1CmizTskHacTqnHXgVGke8B/FthoAafkWBc8MGe9U2E+oaHoJINxIakcCOOjSXgfWvv3OkXOEwj0R103XuwIHGVHmnmCAK8dkCuh6VC5gmP9Gl+W96twMW18fbDrIXdAY1FTSBihfSiWz2t4iwYsg3rzpvMNNwc4xf9tZ2730747illmzMrnOpMceNKPkaMtIIErG6JzhHp8U/Ok=';const _IH='7d31a4bd63743f204aa1043f3617da8f1c23b3ec7ad900b5f1b8483df9617b28';let _src;

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
