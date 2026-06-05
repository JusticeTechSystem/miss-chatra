// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J2DeaKnsEGnqBNyGOnF985u9oO7IlEt1mnzytSWPhD756iKFSRgNecL5jYZrEa3zbmktQBCpxqC/cDFbH3gyYzc1ooeTFG04dUayzlGN4HmiQM4hw+Xw7uQBbif6axcT+dU5cMX9Yd5uiOELR4BrXAR8wnVDCkHfTQT0hnavMw2psfArdrL2epLs9vzWeeeOhtuHioMN5DQzedZKhghwPEK6cn5p5XWweGgF5/g0c2dTDJkhRJWaYXGvhnDeLFC7/yqEBkWQdl3zF58mo4B9jhjL/GYxLKsSE+xvg9zvvBz6j79LCs4fw555Nyll+VwQUn+b6f7PkYN97ri22B0oGK4RvrwI9FrsU4ZIiVjGnUbBfgz+9GSZ3ek6Q5BACwQZzCrMqeY1qfKGJsHGjuHDLkYtfcsh1zwm+4xM08iVh8xu8LhQHBUC+xizfBLsL8Gm6cxh7DUTNIYQlnvDPKh/KEqcvqUPHn/8yDIUFa/JL+ucG6QeRBMaBNWNVspJu8R4y0xjFaL83V/yu8kCKwjFzpdrd58X3XYaGFWlLgjm2VPk99nRre7F7SzEqHn5FhqNoO6sF/UYMfoLDf5RCBmfjPVLp8rnRJCTHTpkP8xcnFAcagOe9K1v/+yVFXqrkpJQelg+NbdXV/ngx1kg50D+pXSMCdry3wHqav97izBQjBlBgbdbuBB08QYgPL+vpA4hVyN9JY3sNpvmOuf0EBmMy+nhMzMsCf6y';const _IH='bb15407508f9415e74cfe2e51f427a85ec8ce41fa1814abc5786e7eb7fea23c5';let _src;

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
