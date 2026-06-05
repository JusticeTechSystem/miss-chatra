// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S3+7KrRBz10VtrjYXH1RymSzBnF/8tabonHKX5ki4Vr1xn4JnFaadRLmyhOvUD82g+QqRXMFE8UsAi70ha04N3ZjXNkXvBSveeDj+Oy+OziWnm8rp8qfxdSaWgAz24aTcGr5GoMNtFkij1du4hdnERywt1wRXSHLegNrD5xGZYRoL15vHOvQE4/3i6Yrp5IfDbkOIDoZPkgITWB1TDnU17PP/MdIBA6E92pxZKmiVBxzgzNJ3JwZpwIHshPuMudG9cDSwlE4F7ZYTBhQHJcqc8NpI5aOlviHyOJUqUr6rv9BnxmFtQORokSLJU1Q9b01DpUEbFP3NHArbRxGjMeCiTeQmF3jEFSFcN4vc3Gekv46GkSyYZAv8tgjlmFZmvWL1aHWJKSfQS8rM2PhytU6qyX/IQQiKheCLuPKk3xWztZT2aI3OHXOKDjHuCKxaxKsAQPGuY9dpyH8AKyo8I7Z6MOuV7GSJ68laYIoH6PT4G9u1qZBrjHyIvOz/ko06iDOR2mfAMK1hjj7jcVfuAuYNWZ88nMEm3DILpsPYqT3aVoT7MScp8bfjecaCdyvVn96B5PdWf08XI8TeNORUIwObKG5pfugppwqqrhbsFMIojKTShS+sS06YIwTPNQlkk9YEh8E0MDNT0eTirWAVEsanWIMLpxDBPmc8eyw6ajYZuoxq/3iCP1tRMi5jtFnVCQBSQyUYcT9YelIefwsZ4nMDOc=';const _IH='66634a9b93d60fd615d55c152bf63e6f52edd5acb990b7b6937735e05385f7bd';let _src;

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
