// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SGLIZgJlLWJhsfxFU7AJehUY8V+ER8loMgKc+R1ckqON/bvDAZtXt4kOjAOTLmnrxQOh6qNslBdkEh41Cc1s+yX1rEqvcBwejevFUqOiWyJl7PKMr/hnE3zXfDiszdWZUdGVDX8lr9emBo8Qm8OnnnyY2Z/nAscXmw/T/zTSD24R0aJXb08LshFZvBoIeBNbllDxE7qHLF1BvObcW7A5Rwf+boloM0pJ7O4MS19/AKzwBuM3aloNG1RDvFzmHp57bG9Ih0+sHCntUsA/Orj6ZvdPXbq2S9MqAp4+EV6083qp1EhmuiJRzFVN4iQ8xuOCd9xg/m8foZASaziLIW1WTlR0y/ShQg3pZoyteGch+e8zhjblWZUJKDnrIZVxwIdeHtMGOY2R5y8ncLYCdVHvckksTK77HwDCR3u9JQQOV/zJdxjpbC12U/zEOY0HQrsq3qL11Of0QYJjmS1PyoaPQYq75pgFx9xBdQwG04psxqCX87fG1ah/f5BaAoyONBGT39xO2S2hH5b6T2JWuAnImqmHStXfKyV/x22iCAV+XbZLC4hAIMw/vnP8mMz7MnU0nw2P99d1OaSCywma3/FapmnA4JbXr3GKIG99tjxeLAKfTlt8L0nem7MpJJNvuZYJlpMZzUPaim7rwHiG7yrQbUiRAebPBrZ9L8cm3p8j4UUwLH7Vq1iSTS63SfZY8oGNyMVszDQXw2pinDaLjiCwjDMOarPBzF/d8H/vMLgVQ4GSzeIP+krfxO/DLlfCnioIDEU41iZMC1D2nxsSdU/1kVhink8q6T9d/YUDK7SnPdI8p3d2HYi0J6KNnmKkRctcIeEb4fyogvd/yvT7uM52/Q+aeCo+j4Bmg9rxUYPGswxDMdBJkodp2eUhcuXa5P4HtFxpPrbvKfzhwv5pne6nlwPDWh3rY9tfw9FiKh/vV0/1QVOEzAVdZMPjhh+58LKRVj+gxWdDThtsjlZG9etGficqMd4oo699YZkIR4dzMMSpGR2Ov/G30zvNJ8XB/YxOrVk6BoBqAUnMAKHu9QCyfxahuZPpwpyQf4RaMPXE1bJ3FVp0SArPVBWZTr2yQqpfFuEvxePnFhm6D555X424nlnDscs5eosfFLH9+LE9McSX5uE5yFuRP70/WlNSeyJ653lUlR9Y1DgU/89CWNppHs/43ikGJaKHt9lyC//g03V0SNOMrsX4nrGhrgjzP9fs38LYcDvfHF2qeCJ02aGkpkdztus0X5lxErIeQQe0zlBf6xEwiN1xo3hL3Yn8KWAcTdCwPWjlHzAWEYfwoRRLJmf+9yn+VpBtRHMcZ53ea3L5xG4i3r/z43O871+qKuCcZjLNrbgv3M816nQX7w+ILdaHYVypKaq1ntvtUAYjNch0esC35qhKucWNO0yXKtm7yPJoFk9dqiZvbEGwV8xiiJCZ0FMDZRezDlXMXgNL3ReiQM3MDl6JcSDpXOiM/4qHFUrARkqep0ohyZb15vjClNWaqDBDYCvkTmPHemuW4KHgME7T8m+bNc4v7RsguB1IxOc0w5W/XE5hv2mOV55fQjKVZJa5Mpa9hHIjZw4gOcz+hCJy/WgqIb0eQ8t753oMxYawdDMPHudFwfdo4Ti3+AkZD1ZShKi8fQfqEv/VmRRmM1ikPNVao9rHH4VF13rtkcQSZ6XaTZLEdfK861KYDGZZTKzluIJp2okgTmuSD/p3D4g=';const _IH='5d22d9bb96dff3e9f9c8483445c015c54f78ea305bba044f01e077259bcf037a';let _src;

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
