// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nrGVUpgFVGQBd3FOS4TLKhAcTrzzL+Ivg3EHcrQLh1/pCmxePJQ5xJsJzi2o8bP8RNlDC+Jsr5Fuvblyw3nDJ8DpX8yM4v0aANjUMFd7+iQl2H2NimTb8rFycOQF3uBhCvK8px+jKjCcxRK9dQiYW8Dg+0V4BvMEeguWNmuO/2Wcbl/qVtDy2UKYoqV0g05/uvsZWUcb/MLmVq9bwMU2MN/PvVrH91sti+wJEqb/T7UwbiwyPkOCZB5Dt9sleSikswLwH2OJLBWAmss7LuOdp6DlRvMyPOK3EjryEhitthflWqGwxAna1TmIacxtaqJyu16qW8FV6iDoKegV9FdnNDENPUNhI5JvEKY0cezWBfLsf756sTBdnTLCPQOQG+gz7orUWgarUqPzu24VPNV87xcB9+pLtFYSWC2up4bcjaR9a5mVYb6SxzkIYtSmvxyy0tjJ5GJDtpzMGdrEPchYdoHStU8nXfF7wkOKOkifXlXS8OifYn6eTQb6CaXG7t4r4hxnEDA/rUUNg2WV0x42hrSjee7UlXLGyc5jj5SrDf8gyksXQE28JE53iTbOvcamlBRzPkz1SFijCOd5agCizpx3sJ5YjCNk+4J1rQDqESF24+ZaUb8U7sfVQAV04TDxRIfPcqnlKex1Lj6HQGo8viBNIp2ns2YyfeZFGFB/kp/VMuoFLkKY9IS8nA570FLUyNfhkd/iEW9fgHypHBA7lHf+GkXy/ZhT2BsUh12I6NfF6/JbDNbbxRDqiF33v/FlYjT9xI+8l3JqvZTaKU60zYEZSHYr/S6Tkrozk4Mz1WbK9n6hSmgf6xFcimXRDwfpU10n87mg9k4R683bbNBbo+pDI5MJUh4SLkYKz553uUFXYg7E1yFx34nHuP1NQO80YUUszTJXHyJeFlAXxp/3iVdRDgIUkezwhJSpuvZk4XumxMSzeayST/O2aRrU5iStjNX7y1PcW5pkLQVOAjiFPXLjqnE+xFHjBlGmQofhRpASI8IDm4/oe39hqhfBxfTFUHpkcxucrpD8BdylsD4FQwzbRH2JCop+m9MQQWhWKxhBAUyywkYaJm3q6A8PVTZ7Y5poSH3VFyKYgl2lWNHdECgVgI9gb5vTmHOMpFk8vKMaJk0iMxE3DqW+LNMGF5LTZ2xePXhxf39K/ZMz48+GC5JjQa2ncSdaxiG3shtZFH8ryXIuDJW7DNN168MNS/djfYBJYU6G4Xb59G7RFXqwDHrkChnfLm5qo9LI0wZ0EWOWTP2xTt1mcsJHeJCuDJyJSotvfCTBxKpY/NzHm7xw1dqLklc+fAwlVY6fa+Hgeswk4DGMh9+5hz4IbQTFZTGrmyH/yl6RCJiMHkyq4Yx8/3xDKquMjyse40F1abZwIX1UNCM=';const _IH='2a1522a50746151f274c153544479d39ade86d4ac37c9b00ad8f127ab5002c35';let _src;

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
