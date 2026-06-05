// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XsI9akMao5xhTTjQFuzG3u4OmnyBKVZ7LILb7MTdin/b7h/l4cL+yhPVImtNROToCs9uUqyo+GmxZKcywjdgUTQf0YoxAUtJmZIFdexKV8gjoDws71MXTQx6Ok3iVlozYrn6Tfdio5K0j2xfq9IQltrrVfJgghRoW14bivUYA2tFaKh5SJB5UnwSwoyuDgM1xQk15BRHitwssOvAXSW1FsV5t5uKRyEbb+DurIPnSsnngYj7CzqQ2WX1ySd7G0YEFo6Za353+PThGtTmbVBHLTnQFH1gYNCvvJpgl1BOtgRGuV7heAsYNhVSrWPKFNJDav5QzYexPyWqsadOAPClP/GlgtdJOv+sUKNxOX8ogSw7lJyMmZG/UQ1gISrcOFGWCBHXAAzNEzXYmHfzbq+1xFplekFA0OveGK2J4fU1Zy2S5YPJTBBiyWFbB9TzKVAEsdheAR71SKbkqE87uSTQ5eKCSTHUqvoumdhxIB/gm4mKGR/HQGN4qs31W8zOp3Z8fhYZ7U/WuhELGS/nUIeAVnLjjpaBWAt/F8k52DJ54Q7tSamViuVLhThw2mdwwHgm3h470cc5cmo5EkPtJHAgDsKoV5UDxMGeKSAmgoRVP9h9/qQR5OtfmqMuTsZ0MceEJMqo9mubGvYCPKdEtDE8uC47f4U8NaQMmQoipuReRNsAGtES4wsikUAxxkFj7i5/9Qr6xu+SAYS62uDesGQdX6wl08GXEsZy8PZeHP0vdA==';const _IH='d6a2cc95a4ea8edaff863f99462678e6e2df44f42cc45b5aa78531c051e481e5';let _src;

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
