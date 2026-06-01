// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5YxIiIS2l8IGoOMBzr9QauNo0OPCNYA0NocpgYftfRmPGKa+9gl8S9Pw2/CuHfJ/JQv02u/shpSjrzbf6RpEOaqKvHQTnFvVxuAPTHsy83ufvDPUSyK+1IyuX/Js/hdQkFbtIKb+kUx5Aiea8B3uD71v95feskxnE7/z6Plal3xfZ7eEmBRUQvGbXSQm17HMPBUZhI4lvtMnW7HlLLxq2ZKkiYvRgK4Wj0XPchuI/Hg2qemloal5ruoRXUBgUthFBB2FnzNf/RiodYWQsiTRSfNT68Ivcw9OVpAZsaNb5lmpJ1dvRPoWYa3I++WZXqhBKqpzR71tS5s3YE5gu3gEFu6Bg94V56MmBtS3DsyGjpre2tFQDpobIKfH2+03jAaGVfB5XtN7EEX8mKI9EBA2LDrBp2hrWEtwDzLnssWoJ1vlqkyaXUzZ+ZBISnNMR1pI3+nmcvmJPB+V0oeKo0P/OjAAi7fU7Md7TO4JhoVdtGBFFWNivnlVCd6YXjmXgzrru7mnw7pXPxIMubf9qsqGsRkmFr2h0Z3oZkwI6jLcB29srtShq/9AvWBJlR8v7CIJObkA4GRXbDQpv3hOu/NfRrhetxWRrkah6F94J/m6XZ2FOdgbAY8HK3ApZ6U48aEkphZwaqG/XkYQ/r79FuYdDWW0IIIFrk8PWrok3gX0Z1Nph6ZuDZ+1A153enh42jkbabndazv4lzKxacL3aKvnIAjpKmiIls09g==';const _IH='645a567fbd911e9f058d714eb786fbc802f8453b9d406f8420e7e6a964d52be3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
