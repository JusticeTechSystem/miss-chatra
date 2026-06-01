// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5BtNecCS3E8XJ1ecfbyxxaBO2CXNcB6xxj8mLc00hLqqq+gBdRD082i+r5hJIcXCYj/4l3ZZ1eF2sSu8NbbqPXkUU0c44/SWP6jrXHHwdIzZn0n1pjnqi/UdsX3BAYbyyw0isPesb5qko8ITdLfIdZwNn8hCegRKg7uH2mGo4AKtgPRLtO+oIeoB9jcHT/HFw9ByUPbZDFE5xBfFs+gpXxqJcLvZMcyjDDwOYMAj69B5Vms5T/mtCTNNGvm3wQb1joDSwg1FszDIK3KhTy6/f9/GNL6aMHfDP36I2ej4o47/cQdmx9nxn1av6QZwWsrhHVF4zs1YiAWwkjwT04JnNGKr0CQGVFsDSIOKhbuuUlmvYZWELjV4O/nQwkna/jTKhIHhfzNIaRw8QAZgI3z0OHfOr8acgWwiwTYm7FgwAgRB/+SUyVonriUf9jUdn/hcuuHYc+myAL91iL/eTFwsTo2Yw/G1brEDDWPvx3+9R5bfRsQgkx4it96FbI0fAVTNRciL678TpL+RV5uuwo/nG6yXuhKrUzl7uBnQg9xzpeidek7z6FgB8iH3Seq0HKX+yNdIpUddmle2bOeQUBiIA9mM4hsPvbxNc3ouguTZIET3Q6LD/2CatT0hfdGyHCZUsaOWRGe+dsDQOlEoPp89wi2l7eiIhZubW9Yl7bdVBKj6XfxRy8NFdaL3Fs+xRZgAFDCu7mnv4l8Ya1mCX7r2Xe1GV2q52HG7V0=';const _IH='cfd4a14b01d3e2ecb8f92d2fe691f787989263a125b8179fb9c05fbf7d432a12';let _src;

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
