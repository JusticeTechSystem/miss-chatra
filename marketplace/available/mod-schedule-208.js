// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='24D2JB292APpGmT7fBtMFNCjGNAp0K7enEeU+cvmJWiBXDIU/A6OdF3GlSq1EcG0+F0XsL7wQpheHBd1yPejPRXwDyZgZ4JsvSopitpHPt84EMPVSNdzhVSZXC97sd4p7irgyPcgVmK/TO1hqI+8HMCm5OrNtMAXOrUy8wKxLbst1XUBBFkKgGj+Jnqls3o9QLQmuNrao55YafoN0L/YC07C37zsEFdQlr5V9F05J7Ig3CyHxTVq5vuAev7ayEQiUAKUduMIT3DGiDxdT7cumEaYkCW7JSlj5xh6SiPU1tSttSzfRqjhlNRnUqzfpdzbuT+cWZltYleFcPPUS7U7n5CkWfllYTAWR4R+7Yx/HRbRbSJo2yRSZAFxbZOKnHVGiXNVLtI2AOG2EUZu++9MU1SJQdNihmY2/JiIff094KkBnggj8rYa5gmVjQeTT32Dk62W1L29Tqgb1Ka2o0blUiBRNgDJ1zhBB4SH10rtJ0J8rY2IwyvgUb9uh1w66X9JU6+Zw6BgFMyYLq7KBhKrwZm/jVcu/aKPgBegDW5tF57ZJ15EfxvA8M7+1IjM6kX86yhsr9I2mK44zbVs/dC+kc3ToTUQZnUldJG67WJiENv/2+xPbebF1n6SkSkmKqMAP8lVZMp4N+wFEaSMEwRSaPzrbd5Bmw8xxgCGjhk/djH+WmMrHrFDDBDOlDer4Oi2CrU8ELbZe6Nc/MNNEEiSkQcFkviqjO6SxIhNBsRJ2HgizMelzYAUhnHRWLzxy97FKrG40TL7zBHGcCHOJn5VaBtu4FGyKjGOrcn01ZuH8H2e4aKc+j4BxXJElYu8UPGxtsCVCmcvURhl9KmAop0f+wdERdUCY1lNS5fsJlSLOcHXmk9d08im5pkmVh792R1hBzjCUDxAbWzcO/FKgYdT41FGdNpWKZ9QRBwCMGGr+COQQuN3XXdIIFdhCIIOGyn+2bL9PgsGnnAlJz9TE6RkGj77XcCOXkVeYRYMnpwos3Ohen5JKZdJHdToOZaLdLUpmPY78gxXCe3+57N4FdgxKVgy3rJ9MyxSI+BCOHGKaykdoIQPH2lniFA9Mz8D3iRHsGjoEgclcMcPp7Nrx49CVP9qsrS5+i3ef7UPnaKGM2DTGwvQkByyCECHrHK11Fuzj2uekX2Aj9pSvLlV3mOyZxGHkTYytsxV0v+GS2LDCUxNZuJ0YiXDMzfwDaaz9+DWYj1BPJu3T82iYsToDiLLpcpAyGVwNSfIRfgHB4AQkHEMW3oSg/fHVpQ+Z06CdmuIThoSMi4eMgKFBc3pKyPttpnQzN623QmgnpFLYKzSKpT5xauNJKAzkWb52UOmEt7iIcMKJershDkVlDVF3xWZFRT4knXo2B7eoYAGkkZYXWtA+eJ5iWJZKurGl8/H9oegrdzx7+OKsklu6Myh';const _IH='986432ac7a7615dd2aff5b743f78e31fc6b4bc1189a3b7416c35afc49ed2b347';let _src;

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
