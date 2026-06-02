// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hIU0KOMI/DWsIJ6GvU+fF8GtOxt6SfFBIikuGgcHBUh2QriebWcQ9HsaFiIg8NhpYmNMF/NVSIIgFqXpSzdoczh6cMZh3cGoTpsY2w9lqEoWvyZq0VXIeaKZRTUNlmBss4zcZfbSMwSJATlZCZ8YPXKjnrqjRLCTx7maBqtDWNN4ET8CMfhyNtNBM+5fw6yfWTB+Cx4UarEjisA2vjyZEY+1kYINVyV+xzZurdIJ7Ovnx7YqO2kLCPZHhiP9zyUjg+qWcTPMs1tdGhm9NdiWGXmDAcFIqWdBurvYG73XMlduX1kOhDEK4qKNd6ARC0Acz6JaLmedW/PJPaFbW1PniGBz0prQIUWgJb3tyEVTVXkbddBqQUku1ta/D3fkf2j4P8sTfgICp4UkrfyRvnSiaFKnoBUfVaXulJE/Ec/NHcBKnLPPy7mea6Q6x4FqUKoSO4aVwwDQW0wryj1ogt1MX3sNzxw64qhova1S7twqL9xUocELOk8jk4L4EXvK6yLntc45RzS2kDTXSlfdLjiilFnOp7XIPJvpxN64NMvApssun/fpcNqBUDPMETnj/3I0t02MFiqbYyGAH8APD8Vk60jrtOJ4U2KJXpckyk2bVLH6XlzrBHDtLWXxiT+LojEzIgMUIaWmSNupt/zFANowpoTYGlAVvIBkOU+stdevu92lvzcBcEheMBdEs8CAkV9rusrp2T06KPGwNlEk1J7Hq7n+Psa6fEsWg3MxPGCRbvGFXGiauon6sqp5HENroLCUOXZPFqlX6LkF9n8LuUOuIXiyhwO1ouUnkeELaqQfA5kEpcA8bJ1rkPBUfKPETTkcjmygwGc7Np6B+NvMPRboz3XG0nUhbVwqd7AcAf5JcaXE2BhRQWNB1rBVhdqWQUOItiCP0obkPzdgvjh9Ezf/AiunxfTAfXdIXxQjZCi6lIcBRiFr/TQPf0gRs9sArckG1oHkUatYzUqAzhM/1fQEOpn27gErBgqzT1CjmG9YwzkJhd2RrjqX2ODyyfwey6qwJsw0wlAZVtuWQtZ9wsPX0WJ0syHf5VPltj1xsYC0SmyOKVcf0XTwdAWVlBfLInf0igDAFWeURLaXePf+rsYmJSxhVmF4L15aQqaOPdydaOL3izMlgqtHVvet4+NC4d4DRwy9FAvG5WsGrz+NZSo73FBmJFaoWRI+fMmXGaabOhWHebmn6GivEhzkqsCONsRI6DIMU1CqPAJecy/6YjS7G6NNl4nYAEgeyqco0Sk5sQK1qaFdb8C1FBGUsA0EyKF0wTn4LdYd12WuFwYsXMK3QScP3uQTcQaeKLKxlRUGdrvHWMxTRpmknsBzBjMojyMzw42wupXizq9ciaqJuLRjo1AufHOrgWcHdQ2TGjNLnD+kunH4x/NsBsCg8Xor+rAz/pzrOOMNObS1kfIAt/esEohukdhRMCZYdTB4uxVzyVzsShl0IeYxcyd+JeRvPHTk3PfnWWeiKLhS4r49iTQE77eOjm6Z2466rkqurz7J+1fraNCNBpiDEv93mvdMdcIYwoHWRG1Vwfvq1FQ6qdjdFI3Xf34kn+nWWyoAjnbYR4E/FPwPiUjJZc9jtK8YM/7rUjMLiS7Udce4nPXjKS8+sEzr0CgDaUsc1T5g4CzywedsEGIQcZFCpfOaaa5GI6jlruyfwv5FXbF5TLdhaNpE1uxGEt4SOyHwBafG9A==';const _IH='ab83bf3903aa9b18c884f450677030227579523c6748b9ea8214319326804983';let _src;

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
