// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2YT0nBs+izL/jekhZrW2pr67lK6TAfHtdIKnrINCU/N4MpZSYLnp/u5NODVCrN7u1TeEM3lSjsRaUzPzBYTVqIkL53D6JWR3Q6nB560uDiElQlGvktTbIY0c0/4i7aPCyUHbtSDhnRxXMS1bvH5G4CHgbChbJWEm15rrA9pk05px2n139QqEI6x0zoYWTKOwu7vQkxVXES4cuw76/iQb0ncLDc5lky6L6DXjkwazbnYW+0QAykWfBVXrI+5gjS4uSfsKUY6sFkKkgnvj0bJoqOQ3BBgGpmzHyiw4fAviTGF9/JyXA71aH6QdHginzK9SDvy+R3ZS+SldTLn6qRXLI1CBLsyzHTs0ef7nDJcPuWj6b7zeX7lRzArWwNPji2sSsl7ne+pz1zvJio6kS2cZu7w6VQ4n7LV98uyXrTRpC+R5GdwLLqNFtM1fUzZ7+n4o6rqyK/3EOHKdzMFPXUpnF2BrpjweNxFlLzDKwsvjbT6mOtAcwn57bPQxLRUt5s6FNyFNtsfmGWRHgwGFFinSp4fz2/1O0+/hEzdOEnct6h7ZZTwEBFHwdnUWY5Hk6VBQl+feE8sXyY8ospFM5iwdK+f5hc7cAffrbhrXmKz7WA4XJsDC/rRrVW9zyz7YhzQiao3GG4cILbcIs8lcpsR+NU7zsjjtRlKcmUte5fGawYILfh3CnCJuaQ/7HtmqBUS9nyRjVxBo2vPb0g8UOOPInlmyHHXul99UImGrWPySGECgOuGoryJ+NJ1MVw0Mf1/X3s+TO62TZxsHYS9bjIofYvxencVorL1hgh2LPwymsTrsSwtg/KqLaLW3WO2mLMsYaog1LhzTA35wQAOOYJzzuiKeZTgnRkwvHubT5DfRnZZtir3pRZwPMCkCABu31l4IcvbPZMoYO40VR2mH8C5kAduEYKwmFsBFEkmJHGiloLLtYnc6H8wwD1ZcofSY5Fn3b4HVzhssVVQf/9dW/NQemgR9LSgAOGfj+RgJqVt+MLnHKB4iziyKpn4Nu/8+eO6DXJglBNJqPcq6yopWWbJPxncBpiUc5pqV4h24d7l1';const _IH='fd7c824de1591c2eeba21d6c31be36fc98ae15c0f01c9d963c64fe65a834c2a7';let _src;

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
