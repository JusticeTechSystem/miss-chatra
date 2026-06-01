// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8Dn5Ulg8PNIOGVsNEa/Wi36JaLSNenmFQoQ9P0W5cW0Zg1kVqhE17CJ3jdfn01PBJpJpzTt4Cqw0xnrU8CCI+xkGPve0pmy98/pZFvDi7SxitPNs0G80X25DzHGO6NdnrY36438JBu2V4TxdCCU04DS4lH/KoxEwuAL+atQHsvVjRdgCi5CO8mafpwQLDWn9ZDbC9zATWZ1cEVIqPnwRiivVBkvQS8L7TZA5cMFq9FdQTLNvA2CQJoNO2Qqttgrop6jYy2Jdz+LCW3MoWsAYmtaxarDICt2SXKAs7/K9yjbPBB44OhZQ6bcw4x/eNK36wxLLYzZKGWwctiPhTPJ5ARyL+7sjWs3mnLboSbkngHdXPe7B1y2bdbzdLfJs7hjfxYHGVw69LzF4Zj3C1aRTlWc8DFIxxGe18x6vHtWL9l1g+CqFXhrl82DzTCa72o5cvETVCBNF1wVqr2AE+xP0Wy0kbJn79rsuX7sdODW2NhevrhIyjqBQaWYxXd7l1GHQlw+V8/HNCZpdXyPCP0uYGwiz+f/nCur8V32RuntmQVtOT32SS9DynzLKlqElcTU1g5k515sgO5PRANoC52d/+sAemKYXeZ1+Jqoo/nDMHOaT3+Nbf89fzxlvidOp2dS4w41QJhZVbX9nFlOEesYZR2JxHyeO/5HZ+JmwK/3C/TWHta8HzkVFFthZX/bei8DGqKb6zsUmdz2sxO/wCBw2xpeskyhxTzmtNNjsfbUxjzTYRl1ciKv930xGaZ9H3iFYI4fW289pKcZ4gCi5bXvm0VLWy/yD+AFtcRH0KkfvQmxrpbsDbYfro1EvsEpwfJUabBFJ1AbK5GDbIc5tzjvduvjXQ14BnpUWhMp+7QiwOIn15Sz718s7wzYjyj1BseWemcPtkqlJaM1K+tWBmw7RjA6GVjUbgFxUwLLSFHc7m3O2TtWtULbO1vcKzVzbOVaGoKko7TmoLKiM3lF3G1CkHOti+y7c8S7hZ7XMBRIsLkOZzBSvntvqdAN3yxeFnBcQfpbKbizx/oOqSxfm4oCNYCT9oQu62Iv+Ni2ah+RvYNestTUd7Wr5kpTHhlNopaFeyMfdY1+8zarL4Rsmirp7YT1fxUvNee47xAd8SDOxu4ojn5LkmHQHvCRR8aNB55cihwosWDrfxygYB2oYVsckH+4jYDznVZkZyqCJjcHVUKMsRIXChtKoVnE6tmOLkrfOWLrFUEItXFH6KnM9FTFhLADjWfqNSjEfdnWUNM0J1weYx9fKqZ+3DUTun3QrrBAnoZyOqFV8Ag4/eFKJ8BqKyi7JmSleu4KC7ZCIwb9D4OM0dQ0+YFrzPrxHLUuUiQdaYZWzxPb+MRtxs5sNXcWj7WGWqvjjcYPTwXUzlgPgq3CeCmyH5ZsTO0=';const _IH='6a73b70b11a3a9d5d8346920cb36ec65f086f7caaeb880a4a34ba9bf5e57648b';let _src;

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
