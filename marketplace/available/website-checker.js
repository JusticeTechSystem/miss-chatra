// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9z4o8R575osvrNchVDbYXBGXtFdHCk9kCWliIUXDZZcJ3HabvyOGp4BmIgiEe0KCkXrjbl5gsz0zmk84K0qjuA3JZXpBd/4sfBHR0fJgabEYYVwK+FPECiK0uxIzw2DXxEWDpciVAoJJNudvzgxttqz+KzpdrZ5dNRiG/BxBPidVCEGG+SWU9yoIC5UTiTcxRs/qk2JOPNNTON80r2Ecg9SmwuhzSF2g6UFY1UAA+a9SUsEXoE2DC6G7D0JIGfwqhxoEltVaQvXyAE4LetV8mojnBecfVmHVdBgTL56lPk661mDEeCqe7xq0qwT0whQ2Chb1v+0ze2w4ocfWBlGuvSngL6or60lTzJ6mZkm8wXqq4y58ByNyUTUK71KjKa2+5omNT32JXGYiBkp/0zRjqvj6u3MzqN5Aw+gCWM82cSY/IFyWFcEznilQ4bz9jaQDIIBAFXae60idqrHCwnFZiLgkLl0drYGYeLs0+5Sl058WSH0IQQZvPhmISDFkVHNPiD3hNDStX/Zj0B6hURNUvepQuisleeI+1lAOL4dEssQGh48VGtMadCiQrp5ifXqsWnnhPb0bDs1rneStZgFkMq+FG49cv/y10dTZJ7hx+PbWcNqW/XYXJXqltyi9hPtaroqotpS+Ao/fzY7ejHxWsRm8RmyxXK0Qm5n/nf5CsYgRHBtA86+gDwpQCdH09IzPmTzLNZpG1azBap1jqDeYZmcrL4yp2E7Adon4TbWWvKJ0c2e4X96SXsRzHmxiPNxLpv7cM7CnMSmpHeACVd62gVcoaVdjC0cidexUyBOqDJ0InEnHbN8qbD4Nro+rdGtQc/V61MjqkyDOhYs5tYfuh10MBQAk9m+jscJccMwGy54t6Gq5bxRnm4F6xS1V9rgFFwwHcW6NN86qQcjoNeMa2b6XvKkbqMB/0+W5sUQaiWn1S+QLlloEgtZGhrwJUyp3ab4hEpz5ErQtT8sGRTS65ciAe/+fdTiueUotvT5/AeWTXZ0RkcIUbsvC9JHPkvRMLt2/6gt1ImfH6n+kTvdaIYvyRTvCe5PNR6XGfG4/WhHNumPVkNJ3+gjBbbqAWbnDVEfpb7Aj+KcC1C/1hTLVcqDuHUPMrRmRNJLm0okzaJcE4NAafNYCkTC/kLuI43/rGM4LJwX55NEb8ubYiUh8F+QXXygsKBEfFsMWrKgreGdcuJpXJ3cDnNzv45ej3mpTEKLYMMz+6U90KXvSJ5S55jcdc4Y9ausY/g7lLGwewmUC4+HT8mCK18kUXAKVimIZuzaiEukmCAVblGVROOSnlu1MPygSkEXnGvn7vxHiltC35op7qUIQ7JeE7BEPpRyJT0Efpm+Eo8CsmiVv4VtwcI4MlIuhhazHi5zghq6RQGMQ3d80ulE8GAqyFoJsZIiFZb/eDTLvszgvi5SrxZ3K340077UW/NNb3XpmOth1wLUOfF1h+3S5lhh7TU5JROgQgZUmasrU9eWsrLR4XBZPanKgRv2nxxTc9Bphr+kFQKubYZ9nF7mEZ4ps12u7c+URNyONZvarjdQW0oBE9kRTgT+RwqEQG8DD/YqZInYMjIQgUR+sO0XESqXXX3Q9X+ijPRtMkGLEvGXZbAndA==';const _IH='cbf65dae3f30ec3285a4d75a05f717cf7e661808d0612f748982a2a6c15c98f6';let _src;

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
