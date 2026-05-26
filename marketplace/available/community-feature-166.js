// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ftMyn8EM8xvTmHEfk/r0pQH34unmT4R66kL+jokJebpjPo3/713DL90aw6rl2VVuLP3lc4HfQmR4XdGNxDFCrpZzcAJ5GMC3EZ3/5qcu2u9tY6NLM/a8uSqTs9r50DIqkoZQ4NbAbBzhZ0SR3PC7LshSI6MRQyvyRa66LzSbpHtxrqpScksjSq4d/SYYjhMACbAo78or8vMvg1Vf9LwHBrVZkAZjJVZhvYrdIIo11s7cVlL1jQYAau7GY55T2t9AQTUfzHSKAxSJtXuNxI1a7CiylKIt/7OBtomE5cDcv1jfqyDDz9PSd8EYZK3ht4g5vVNM29nzVAI0A0pndQEJFNZbvlZvCHIOB3iIvQdJYZaX6FdVHAOepekLjSAwGFUvxEGrMz86gpQw3Zs8mB0wrBvGV0r/0vBN4sD/qcJw55K8xzSS+BMKI5L/b3Z/V0c/59mR87DIGkGcooXWf5Bq7Xke7/62L9Xz3W5Co+NBzlTbzaZ5380ehYLh2KYlz+npgBgoW4jf2Ovi6RyDt5XpXaB2+bM6/6m9GDO4sPATkDJUsiDM9nNIV55h1ZFS6p4dHcfaKT2gSKcKh1F8dF9ETunc6Xf32JyKnVkKK7WNSu2oCGBVBuRqwk2GJThWdPOR0BpRWY7YzmpyMPVZl4PccvzXbbwajK22YC57Lp5uJjdrBQ4PYFDN2MyLtyrMtylhwmKkTbTUxrI2vo0eerk24rDBWUHNpeWp';const _IH='0b855755149dddf7c883f51cc59e0ac7f37300917b34f149f510f50600332f12';let _src;

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
