// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFO6ksKWWEKNxwQT7ZVIHjDHBYomPz09PLNPSTqL2KA9N7jcuhFnoKTzvY6oQWIdCKGumMKXR1GWI0dPIIomPH1RK2iBdK83H0WYMWWMKW+6vEKMVh0SkkLDSLz3CfaYS1x8b0J3DUwqIvmGMDmIJ4rFpbt5bEa4mvuFEujV6Wb3onku+KY4dz7I3rgl7Kqf4rDtIKxOBHRby6RTfbu3dx9maCc03Ubxg86Kcv227ov2Z66MDgiIpgcVMlKfaVF3XJByy8DirfAiQgsWcU331H1+ZdkO35qCa2FOewZFdldmSTERP1fUid2wvHRFfjay4ZeljVly7GCpdIL0BKhW5Uoyam/1+BtbdLpgmdogFJL6Vky0HcDPesTey2v9p/hRAv6FEGp7j9lk7PuVsHIlaj7+mL69RP097XRIUJp6kVP1T+T43fA+xajoDva3SqIWeekdAQKkol+UmhixSz7NAn35WGgLCD9eZy2eMxEjtJnL2sjFM8GW4CJwyBBsbT9qdRZ4IukSkkTqt2gj40XoopDd2VZccjEKBCAtB/aTsADpp85HNi3S4dJp08ODZeh1naTVKkEd6KrttjSjliXtzzKCmwtzqX3/JKNk21DE8HPXIf11kzIapWVKTz4FtCXo3vif25ODS/h547sAgvqxe/v2kz1FSvKfsEirFUpuBCWMkapYwfgCsFL9d9hoSj/lwBVvVJ+xHDTzmS3fmjyhS11dW1yoeckCo27eEkaVhAnnUbwQjwEaPK2rb1dQfX1y6BO1xAsoCKCex5LRcEoBKDuQ6IiMNMKJk3pO4tzNwb3WuU/Amhl8I3CKkS1Qk0eUJWujYJX/yj1vWHDgYmJmb0/ffOEQGBJEORCXZAtF13GoCATBiO30V9w5prjBLyWE8H9DVE2hXL/2Pjdf4cV7W8LBGETBlWwccLM3LxpBLXYeDLuW9Zqcttp/HfSLBiswkW4R4S2a9esh3HnGHHwsBpe+AWqCsZKu9JRK02JdtH0d04BH4URUhXaoQWxRayoa4nL52C';const _IH='0bca59d0f26255aa71f4cf3d1ab33a1606babf2fadfbd77793e5abe4bfc45afa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
