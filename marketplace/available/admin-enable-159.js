// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UfDoY7HnOKGPKDdvOjsbj0J1Xz2y/S4x5CNoRD82r3qpWFCzmZhmjqbcKL70sHpXP4FLIvxEU5SG5dhQbw2qyMphnJU7X7jE3lfxVH98i5tBmoMUk0sDqlmmsUSC3RG70p03lkOwCDQn6ThAfyNrw8viQ1gm4m9xQpix0Eyq9Zk2aSuaeEYlK8V2bRZqgK16Nd5WeIb9uB5pBJXYtT8tv+IRnNrPFP5OtoXFPa8E8ub4UwN04CzCCV6YlrpZDgjQiJGxkonInSk6kdvE9lT5vkcpnFPtpvqEA4JXcY5hVQk82F7Pq+/Fk/jgPzdts+HyMJJKzZuz17FVm3kcGKMAf/u4xs9BxkgzrPNLkmmrNVignrIFxyXiD6uQXOg2q6+K1FKgzyO120bYJEsbArglo0L8eYEkNlVvNSD3I9L2r88D7ZT2aCMU/Av4PfDl5IRRhdF1B4GDwKMq/R7vqEck8Bf3LYDDTXqfYrTTGNBWvm2InErDUKk89RZr2vqYIpCfDY9JqSNTT+ZF8mDB7p2L3xCS99R5FgZ5qffPKmcmcEotVJ7j6LiCveKWGPfTkSVvyVnrqznswcWDle1bbfNCaMzClltXpTpcJ8j8MipI4w2awtOQ5bRtp9CZ3wRx0BJzRQ7G99QbtpcOim0H7S17tfvwRNNVBrdY8UNpoLfHfgAJNgeq7go9dnTuMC+EO8ojdPUWQVo0BZ2WZ7sAiInp/sgOHCyOLpKXYEL7kJyfjykOnNwsVthl8EeFZDJa/kNinkO1Xn36JErED/4W5AxoQlQNixqAEUYBm2GekX5TnO0yivDV9dD6SojoSaMFmuteEgoZM//U3mTHZkyZoWxlayRxxeWacr/prvEBb+ozUpRVwXUhsTkg35HLYg+4xJzePPdGZGlp7y68FkwAHo5G4cTwvwCJi/i2kaxvcxlhmRwQCfAXnyag4gtqyteJJEeQiM8qMbFpLfH2aiVhjlluC8bSQQhMNj9/olwKlpg4Bs+IR551ZnyCjtJL69WFM+Lvlw==';const _IH='9f5e82c8a92d07c8144159f118f0db0e0e0f1db119ff5c3ac2ca78058f34328a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
