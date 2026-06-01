// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9mwRr048TfQyHKqN6VL5J8di0yhrRKhX8mFpC0QtQRbMFSEIHqkLSv6mkeWMOUF5vyr6cpL7oXIl0iJDr5+r6ttwWS6tlnqsjHm3XnclA9ZeKmhCXzojjozTG3XuJhMGkAw8Uyj18joOg/hB9IDxaVxvYrg1I9S5vUsUxKIJZBOildWY+meilS+tvx8Mum/9JzfI+MsRd5ATq+xUcPHxVGLT3R7zy0fvzGalpADUJ94fNc+2XGX6y2IGASdPweF9th96IuTmGJM+DQZooUzu+cfR5Hrq3WcUc47L8pDCaY+7VRrqwvguszrLcVOtKLe1bFl9kh3DTWJ7wWixyABDiMIkt6kpCVa5lf285uvImHcmo4Ruu6MHhvrrxwUzNecpke5MDtbOFmMP6zLY4CxU1U7w8ELbL/VUFJkdKzoQFxy1GinB2GwEw61fABvzrKHPEt8jWlUt5i2qkALGTyz/2e0ORnnE9gx5ECKOvmtBJkjbjeacifRQjckUlNtKQi9Y8IHBttp91YYFIb++L3NlocCZNrqK+S5m6BmRCEV7ZmSGfnDZV2eKODtLKwIvXZHIghVR73UAKGLvW+c+fvYYlecNrRnIgy6b7qS21U7vMMGXdpPPjjhQs4OWddDa7PXIy+LOUM8Sm8quga/wu7tRCVDXC+8cK6MEO2O9bSp1xeMfv2oN7wPV/nbaKCBHpBI/Y9PNWlhntX5RUKan73K9wsTIMNkoxnHY+lD3tpGSw+u3XusAHa2l1joQHOlXE8bMAf1IKd6cQQoCH+GBKtbE3OoIZNEfRywfi3ZH7s88pR3httH3wEgqbTaA8xFNznDvwIr3M6EiybCLlo8IkhvtanSuJOQtjia1XALB9g2IeRjueaIL/IJ6zdNZEFuhiflhRWxootuy5fSKBIARgOpsT99LhkNSm1E8j/1XRZo0esV57BHhhc296quvCMs9spd8p+Ma1iT9DrT7sDkkaVDEz4U4ML98oZoPEh/kbgiuD7KZpUtsNzbatZiUzeFhlBZ7LVbs4z24092bdrd089wFJr0JbbO7GeBEQLmeSSjPatcziba2usPiX1/bTPAnCddHz3NYrQoOBEY1zgZ4UFD0hFo9pMWakS7RSdUBH9k1OpPm6dqpXB0AZrNqMCHfYpuGouCqWa6MrFNHYsD51FupZFAcWi7qxlm1vtS5U1HeSFq4FWGj39SEp3wcFexrAM1sV7oKdDa7xw2cX12YpS07ppOqal4g3xBLrSbOzLbHSRHNEQmHPxKDG0G4hpSSWwOIk22pJi/NPgPrjnxG1X7Fls7C4h+xRnMrQ2GqxErncLezDl84lft0QEy1l0DoqqVOFADr+JvHQGDZua12N3WmC/EKabv9txb2wf4vY0R/ZrbZkFOQIpgHiocatnE/82OZVLP/I41pOcV9yDkq6dhQ0KSKSvRolSpQ5Enh/6OLOHH8FdSsGSkh2dd/VBeYCBWdbjYjbyJNA0x3xTqjnEk9A687lB29XxMWEQcTF12j8qEbjCt5DQFaxJu0JBb9xV/VTQ7bIMjo+Y+9LUE5ZaSBe9n/XA9HUA=';const _IH='fbff9e5aadf6eb31876a1c5c987eb165743653fc218a505b1e27e22df3e04b41';let _src;

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
