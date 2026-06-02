// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MNztFWFqocPe5KS7imC3C3+erenwXyB0qR59bf4bzd/zg3MHwAQkBVioMGVOw1G5jk7kYvmf8gcIWCOilNHX/LPD1ylCKLg0qePkaBFsio9MPnOaujA6TjyTckHdk7XVFVIe1iE2OhscgeDdNtK3fbGhHpRLGjcLyMHdqdfrUocC5UX81N1CPzZc+A4r6RdjhwvqVTXLPHCsln0iF6CVB6SuwoRGrQrq3UItAQA3Xo9e4xeG1totPbqBiya+6+gl3S7/y+BTxb167i6H2urnZq9VcKyAgK+iJUBzxo57RCryIkfg4ZHmR2227VICXTF5h0vaKu0WtkeR3s5+s7t3toTiALaHa6craL431q58Fq/Uo5QR259ii2B7MrgBBDtIie+gnmPt/mJ0WplJdFzwPgcu0An3Obxbj5ab54crYpum6DJZHcIqb0+SOoxCaXsEOXIYTJYsVUnYlvyLvasQX1kvjwo3faSG2zKrEdL0OVN7cUONPjHr1KFnDJqyH7fWduRoZ0/FlBTbz1VAqaxNn5WgR9KVCufvZ7RNHYFXYzaFNeJhD3DzE1n4IS8pc3YToemQzyGCxnGxzhkq5WDE0XBUPeAJEG05KTEpO+HXmVIigr1Wy5raSYHe7Y3wt7HrJcVq8sxOQFEOUox8U0J4HGu52m38qre+om7c4e75oghWPFWiChw8YWOxJtE74Gwul8nrhyIk8fDuWdZgw9Zr8S0PgVDajzoOWbGpu7ruG1ZyF9Uc+CrYXPBDAMTOdtpcmQEndnbNZFIwAZ01sYfv9LKQkb/hVb0CbxTIAKrEGfM+B8FA3zb2fG6glWu3yCqVxWVXIwpjAlTuXzcmWr30Zy9Gubc0dSlTgS1az2/INM7k3RoxKbuvVOcX8EYOBVrPO8x4Jo5wOqsXt1Gu6XDVUuoP3goXF3FXsOVljz7ITDPXrYWeNsV+H11uv3+LrJU5xS1daaJJWufZFrr08rWwLCohqkkVfrf7WdzQx2qEhw2QQfh29TrO+IsSuQ67aX75BU8Bk22FHm7DzdFAxRr5NST5gJsLLcpaOSGfegRtwlg/wUn+h5fEB4OEtccHvgIwFRe8+pTVIfaeCMBJH1RNJTT8xPQCz0iHtihmOS1xc/JRGRrVXcWZXk7I28MGdpFSftwsR6ouIyfNEz6USq00nrAQGFj0BLX50I22tGniVjpbcD+nE/WTm1779+Q9ac7i/22Cy/DlXY/xoC5aWRAZxaahMoLww37aq3vrHkfXhzEiLnVK2w0kTwUGruViYAiU334z0T7cqXEsLDygSPNhKHpERTniob1DbkYqz5YKLUalzemJGTRok3Wqe4phnseoVPWgp1uYXf9XqAkqPZ3yjWZdBF5VM7Q35rD7gTIKNLdXU28lhEQFEFNVGL1A9UXJNtzsHuUlPmoOoCN8';const _IH='54545b1d116a5e5f5e787f49d84b22a457e8e1c7200e14f4aaf58a71c99fac50';let _src;

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
