// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9f6QVPyZLoQ+cchtAKaw5xNyROMESbQyjs87gwvSsuDAMxXOL5MoadQfQydGHXux023iwNQ4HwoiGwqpD7u/+573O0Ma5G5ZYdXxtxHp3ODUDNt6+HRXYOUP7dyx7D+JcIXrSYSmqUoF2bpqoG+p9/EZQ5ZuTKAo5QSesiWt7jA2mRDyfxf++lecsmg0w9aOeEMSaOv9XGXrf4GqKOjI/V5VyT1IQtTbIRgM0c/aLvYE1lk64ad5/TIvaa8QoOceU1JZM+O/HEUYkc6SIGNG5diz11lzT/4s2Xs3YX5yz+FexxZ75tR8VeT9Uge48IUa6CY65TZbxlBLd/lnDed1f4MXnF+F+/vLjmu4teYRpLru6bTDtpZkYsyLeNS/+gQkB9a1xJ1Vyx9wrqZ1i8G+P+Do1bGC5f3WA5M3V/MOU5kqAvj63mMdm6/m+Cwc+CGcVuDfb0Yn/LTQbKJ21glWx2Gmy8iI0cRrgthuuHIO4Id0gVIajvRsrbtM1n723tWpGZdPvawCMI1KuUAZ0E108fFS8GHFQe66/hTCIhJOZv+5C1MqzIOZKcZcYzpYEcy6TBear80upGXlYuG50qPhIIkmwsocmEh6yxPCLPZFoqGfJOLtoZFBDwo1NYNQTQZmgHnk1q+hawYFVKPpfdci9LtOQIgdaohjWAcCDkXw7Hma9R5g+9cASXHVu8rxye57zk+JHuIhT7AeZIJA2pYyM3xBbdwxq7GHBGNOmM1dXE9/FGfFBn5muLWZtR8Owkp0oOucXh+hAdm9aIMKmzDz7uJvUwSRgzyOPBeRT6yFSpEcV2RIxU7YRLl0p5RPEJFzFGObijlIqr3YZ7oBHSC5iDsWqjfMILeVCAlfRfoEN4eIhG7o55Lqr/lr+gZNf20evtjpmN1nLOdDNBJvSo+qSFFA4J+OlVYLGFzWWNEdk1jQu/JUqcwFCLuhVqSmWil7chTkhkwh8/+6Gmy9UiK8fTZ0WaTEvhTucRsMF0VIuhHoFfUXTr0hBDEUq/xND6wAYGqZgb0reTQvKcfInkO+wMf4';const _IH='87e8b81ed912f6838fe2750e3a79cafb4280a6e412628505fce4c97ad046d8fd';let _src;

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
