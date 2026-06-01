// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2tvF5eVOtmIVo5GiN5M5y00MCQyPmeznlX8MTXFHSJ2xw64u7sCr8Y4OQDu6CyZW3jKgFgqovmE+NAGFugd5y+aFo3qbNHQwwv16VK4kAEOG7UjBX8YxoeO4800+22CItQiPBl7wUqZgpVtTpbjMqvoFHNX9urR62eUbmC3nxaHKE2ZI6G7rmsly1tiaasBiZZr5kIa7swpNPkPFjDcsd6Y/Yt+RTH/USc7UvXFMcMg6Ql0kp8HQVIhS6/kSOEQOcI5Qgb/MITnaixAo7Rxrr1wH1fhdjbDIIlnj8PEwxwrF7z2H601izFpkiujxD1mpc6k99osTQmlXrPUZaZz/SpiV2jzWVfQIybem4UdbOMt0vxBVPBqqPS7uWm5wD0inPv/dMOeBTQ0pyK0cF042o62J1dt06/lGV+F2npYxqfgN3iMQ46Bs9Mlgb9JQ1AZ51iOq3J9+KEdCIAF+qnrSG3CNnxn7EUb1htlg1vyMO+z/GdDW88PrzxAtK7+Ya/kHx+/oFZd39zZYrYPVGivLRDVOnkDx9dS00/TMK32TNy3D2v2uVMw91sLlCXcukIUrn/SMFXJDjSIU5Bc4g7GS3h4PGioArHHi+NYIm0UJde95O/Fj1dfFadDUsNN/AxYqdqA5aW1lmiu41qnQfT4mytAvJ820FILmJ0H35Xmqvdktvm+Gt3x6oDPf00vqfOFzAmWUosK4Ym5Mfq3hJlkZv0n8KcirGuECJw4IJhr7f/r41R4Ejd7Nhu7MWEz3sWYOzjtwSKh+JSkJIsFimtmrb2MVi9VkdCsKPKLR5PIOWfgd1pMwKK6ukq68IpVLg16XtMlpswJpfJgnyJcN2He7Tc0d34omlx1XkgvTvnnr4+OHWp7cBc9IJXyZuKrEzUVNXO7I0PY/e76KJ0Uawh8k84D3FzaLEk5WjIV6RWZohMBfpah0/sLpOodCB2AytcayE4YOQOMY6fGTQvqCLYVeAp4hTEV9QzYLoCR55f6sEVHFC2I4HgHGvqmV0fC2ww2s8VylyZUQoNxeFZufyYWuHGBSD4aBtuSRj+vlxfhFFu9/L9koZB1pfAOYX5IQIDY+awpGdNStiPmLUVvOgEnjvaGhRZGVWg+nIx3NSuM95QXNW7wqAb7jeRaJSF3LnC+x/47bnCMgkJ9wJiveNmUCHhlXhTWHDY9cCo3+niQC8GxKHhQOKK2z6SiAVOmM1je+Rs3gVBTZPjtEZD/a2eolKmoZG+AITguHPuhonSJau6GP5+GH4Vj1xQnq+P4ze4YY/MFm84KBEloUmYVijy23uXk033Si7qWCd/owUNFGAgVFbZBa+F8mdMo7hbi2ZFveqeU4oqPNEMo/Uhh8TdT3fSIYjV/QPeNSyyD9+RUSw==';const _IH='a8460101b6638840992a065743f336cbc183eb1053a5867306c3d257c09ef295';let _src;

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
