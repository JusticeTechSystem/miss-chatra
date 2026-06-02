// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y3sHLc9V/A+UD9kRTXhfma7MsIAIvQzg55NCAgha2s+g/2VB8DPjupmaYVWZ9mfH2iRqPZVUfK0KsZYbLC5rqvs39J3pbGYFKb3cna+6Whn6Bw4etWQE9EdJymV4/Nn4O9ilfnv9ZgDakSrFSFDS8gjx17Xc3RyEZLt11q6Uau4+AX4Xd4lKpg7u3oCdWLlzoUObipFdJa13e/SJWUIafK94FvFM5iMjCZbM/2zpU9qVHsWC00qc+gTQefgCbpRyxZe85+73Rp7UM3HoUryUizvjV5FJ7M7xmgV+qmbDXb16MUzGab9cXiOvtaQDbhpIhQd/MBY+Ulqf328Qq1DLLS3j0peyKAtx5ga2SCOkkatPaL/nQq2iDQKx11xCWTQXEgJzxbgmveiuBVx96EpcDeudhZrg6/Sh9sSgzxlRK3POIKHsZlRdADg8G4/W41JDh1gE+BK1TrwP8We6+H9FUbndUwfqPbIjlULl4htMsRx42IcNWvvMTVJIv38vxoWrcaR8cKeUtWW+KBhA01dnWfhNEQ+ojbuXO9l9MryyiI2N7bRj+0BMcUaC2YUTeklQl8xel54M5DcbFlceveCg4fgSmJOFBniE5en0no3y3U3OHlQtyN3jBI4mebyF4OzJT22tjFSXRHxgjNciosb3+ZHN7WJUiLuwKPODOxIFTkS3TuN8uqZ7CmJcQBzflM/OYpLcykbZNDiXcMfPlwIZ/4LZhZj/iK8JkkDtCQBTCOXX80zI4MbEyRugSlsDjObnUnzuutm2S2J7QGORno08R2yhsdmKjScQpneF+eVLyUwFnnvINT9dSqZf8hQZmmv9lDKYjxDHoEEpWHRGIyXNY712IhKkYjnjouXNAU05NNzq+lLkbew5z7uqwTcqGRJMKZ53gv4obnjanF9nIfIQAaznbS1YDYvYLYr73VRqRz0VRAZFHhwJ7ZOltfMe7+bSjQV35iJvjwg2qzG26wU2zSBqLyhfoNjOy9kw0rjXS4nrTiBsFDGOm6lAB2mFsn79qYhRwayHta1azXaS7A40QuNSaKoYrO6+XfG5pqJpBmDTVBOm7CfrqD9WTB1VNSVmSyeQ/GudPb0iL1PdSwMKiB7LiTsdrQJcPh6+tfgta1gfgp9g0mOgu+3BY6ktqZReYGJhRgNQGfjgJviHFjfmBTk6Sr3A2XrZpOtAzONKI/Zq3Nue1rz2K84Y7P7MNaWf/w==';const _IH='178c7209ef12837fa2b746b3002e32ae1384f3a904b0c96677544ba57e6556a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
