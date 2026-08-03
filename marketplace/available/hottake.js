// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8KAeGIVs/dQSzOYz5/rkUhwPKJ2t1bjIer4lHZBjMJLL21upJjXcfOvwrtnqLChhi6Hww3FrmcY+e5Mb0YF/25jpY4RdL0QT+WynMhE+3fiNRgZPXYOj7zghPlQSd9ABJzzIqQVSsNmVSS+U/bDpb9s0q7YCednEk7oRwt7JX1jyXpnZw+pPWTPks+wTdHrTQQXklaOj2VqGEhBry/ENqs5aFev6iZgyu9vXPRM7TH0sToOJXO1MpU4ZZ+WzMfAdGu0Pjc7Ze9VpIyPnFfnt+OGxy0TBLajH8MrgxDGZkyQV1uw96qKDDhLiuHkZsLPDrMRYYHsxXO27p6x/2Q8xEe1zutBGi7zl2PS3F3+oPpn9MIWMqiBeuWpybNSc1G5Bet6z22fMgyQWXN1uhnXlHaQM4PPPcPwDdb2IfpNBwTj1fxk1QXsA3Eh2gZ4RS7tzmGqrNTjcr9dneJBhqovdcaZ2CAeUJFRPe6m7CKbsYOrwFWelBuYta8g45cZsl9jvlJgV8uZEj5+Xui1CKCmXHg1y5RYK847F3DD0JFUCgHlZBgB5BRNL/GQgiV6b8X94P2Uf03tBuf5URBz4m/H7I/N/ms+v4Ln4kxbEEhqEkDDh5mTQN7TuAuPCG8nKY2+Rr3AFUWxYjBPtN3K+RFOQF5CcMStrOv4Xk7MFhWbO4orwL8X4u4usoXvacS8Ea0b3oJT/8cIOLmDo5qj/goeVUZcQ7cwzOQ2kRHxEyWerPHzE5/QcU5S24PL3ToVWPEoF1vMmlwn0ElSTnOsAgUSG3fMYvr2aT8k669I1Pt4YnKKihFD766EhR7I4uTVTKtc0aSImf8+JiS2Pmq5ApyQoxePsMN0uxzPb/zGu9ucFB2HHUQC9r/A8bD1lW40/PuPx0vcLNu+kQwLizq64oqVQBOqooUZitvdU3OIZHym6pa6Jykwon3dYefcNScRSHx84gxErVb08dVV/d80ERqd4YalFhcp8g58PyNHFY9W5jxqn0q9Q4l5XHuk2+gl/mNsI28wY0/6hLkEnuRF6kVS9BJqD+lpzWhN185u58ZKAg8kWiM6IfXVTP2jnYQZ2DpEN72eDHoDO3BE88h36clrFpkoEC5CD4mhggMR6oMyzDb55MBiKgF+jJkZud8VCGMjbsaeBISNwqlgJz/o+42mG0jS9er5BVw93pFhQOwehEpd7X0SBnsW2pvYAcbPrdcY7TvA==';const _IH='e89a63c085e3a99810a0d4eceb42fe9e26ae64808198a1bea67135cd6194ce82';let _src;

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
