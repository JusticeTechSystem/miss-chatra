// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4/ZwHXjJgiTAzETvhGmprPCvHCX4darUDrcbnXS3qVHGaKHTCh3lIx6RTdkCdZY6NAHB/crhQ6gyAa0Na/V9/CQhMdRnpU3artOWCCyHYa/zGOaiPsRFUR+mN5TCrnC0f6PYvxaamHGxW7jkWmhlVgSu/Fw49aQfyqD20uTXPp8ceHPAC5tKt9HFZYiOdlEHgaERNGJaytD7M4NipclC8VUM1YABLPUx9ua/RNHl4FZshg6z1RJ+OOtsW3sX3EBHVtEnEu+fFzNblRmufjFPaNEOp+9JyE47u4s1DQg9ImhGT8RHNh/evkUHHGSLwf1KKXsdpNclhAC6YUyjSoH0ncvEI5M8sI88xpWhAB4JYsU0OYsPBoGqPzSnOUKmGHFIQlI8eMM2pXs5NKN+DKVeEEJv9pzhHgpzlusBQC7aAvyrOogE6EU3olpV9s2UnSrX5H/Z1165Sr1VYXCXDmHjosm/g25dpRZMTBGReEwllB0gR/XhzyIvur01qz7QQq9KvgPsM2LtqAOUtOJLFdVSHiSB72oJJXhwXag06os6HQo/OQ1gLLlouutLCQIeUXlzx57gcx0UnfjYUzFlP3c3OQydFTWtVBczEpN+18nfBd289xK8W9ye/2ekY0h8ky7Ekh03MGYSMvjJv84ahN8Lsm0BMtdTs1CDX4z0xPTdXpynDrIAbXfVcWu+ieaFwIWQassGz54n5P7jK0gGbFypc32CyIqblZaNAkYG3AMEGZaL2nHRfBuAj1DTqIvi/0TdrHXIQEPlBj1Sb9PntWND2LyguqWlAVezjHsFuUW0Y7j3l+Gc6xi+j3lJIMnatGYMzUIF5WhHLLejRfJpGtEKojCUQvH9LjZuDK1zxJMB1SgvVC4bhjSc3kbg+XckCEJAoZf0VYOh+d/FNijXJ00xi28fdnAKeBCFVmlM8dLgCnTog0RcZTenT6Eu2UYfrAV/PWpqpNjwoy9EGbt/SCiEUIhsimE2K4Rq5uGEFjpwQYsLePIBT7yBkdC4KUB8MSCIAyip4oV2GRICNjg0L6FMoFyhAYs4QwVbNRprFDEIInPts7Poug6W2+3FU3uD6CiWtZ9SDZdT6/nvGiKUFrrGYkLIFN/YpsNrfeIo/ROtAtGAMtk4Gg1j5bkvnpCR73ahPj1EfmQpfNucXKe+1FUCfb7kJErc1Wu5tUgXiQ8eLwivCvSY6SnirKhx9dxrGFZ0uppR4FoJ2pFSXujEUjKrmvd5gPDxO921c9y4ARjCMjYChXXx4aISdL69aEO3i4y9kJ9UI21lIaX3pKNlnrLX89wU72cnQ2gRKEctlKEzNYI8iwJVI3nBy3ABUw7ANDigWbxUZU2m34quLtauygaeB4Ey0/IMnQlmuAZNs9FGl7Ve6BQ=';const _IH='45dbdec433cf51e2b5cde3bd0f28d853bac67a50e72250390a9240224c1db173';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
