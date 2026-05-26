// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cyZ2Eqe8NL/7M+4afPRfx1J/lZ11cZWWgj91eRqZg5ZPxZaDugQiv3jiJoGyXcAy44lt+xYirB+Un4d2CmqlcyTbtMhjlYhxCuHrO+X1hSrNF/HQeuEENCP6TS3iBuxhdMWGJvs1lICtpJdDuyTS9+doHECRMkapAgMmCLXlhrY9EzUSyC84p4nMqHHoXjfQcqFRhfoiHNuCL39A8IOKTOPEzjb+U5vAKky9TUs5JiaLpFzyTLQNsGmnU6BpI4ycjoduTn7JiiokMuct0OSeAiqNPA3PJj7sOW7WOBR9CLiN9CXqrhzI7gFcILe4RZmP6jyxA0GZfYWoH0KIEQIgJ8nkgdAUJXySLq2vhJQdTqrHv0Kyj3R3U3EmpAO8a7akilupONO8Iawu0GwyKUQkzTuWz6aJ7YtFFMS9LyIFzRSDnftDimsVcBi6wr2Oa3oU9oc0RPLxaAvrPDtFtj2E95Qv6JQngazBMjMe/K54YxQqwIUWbSYT4rkBCvxMXR9xVyNxIo5v8O9j8gSE9op9sK0LEaMxqI8c62PNrhOWvqJrpvpFZCiXchfXZt6wfuZWN7LazKPMai9S4Up39exY/hLrVedosm2scyHdXEse3USdf2A+s43PHqMOG/C62TYZ7I+qS7lSc4jdB+gK6tjRoqXMw17xgMxj3EYIzdZGbVLp9MpjWulPrUfdbiscLThCyaapgcbsRPC2Xzrx6g4ROgBJ8mObaXQE18PvV/lHFzvjhxQTCUk13QfQmxZTlXfto27/LH/koYxsCAiKJRPTEmHyBkLNXNcTZYbCmUQVXiXzDZWfVeqGbFGSDp5+hCX2VqveUT3DA2rpTfmjD3F+NAtDfh/OtHfn2YUPKWUYLQM7spoj+mVXw33cjgnGruRcP//Pw5He4f7zLg5cogsOB2HcEktrJ4tksuFtUQjodoaLOK1O460zUkocC/mgTwKvAG4EkGi8FP5fifVO+/6V1P9yCP19bhCrXFFV/e89CZ+W1MUOBFvaoHi7yyJHkwIg0hzkW2l06wHNm7dF6oYE5K78Mck7cUi7MbcjX2E4CcQroJW9u7F6VSscjj6EPaLsegW3Puqyp1buPvFT5aVX0k13pmnjWiYgPyYoqBPPx3E9Cp/FkAMZkqP/lEMr0Uu80xB/FkCri4uTPZ/kj0G6Hn1Vww9MPxqznlX5tpFhrGAKoBYqEIgdarCjrdFkVy7Xpn+4vU+REdnlUrd7K6znQOhpzuPUwZyL+0Yko+V487Zesq/4psZzCaFKEUe6ZnhNDWZSs3+7uyiimXaWW2NmAGkV5Q==';const _IH='e86e32154f9ea02e6364a867ca5ae3e0278cc2c98b10ccfd26562ac1e31418b8';let _src;

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
