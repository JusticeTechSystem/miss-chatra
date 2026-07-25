// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6KFdELg1LuaAxXd7wiQzJkXuOmcYG19zD1pc7MkFgUZQgB2qntY5ThnZY8VQJUWIJ4zjnxEL9eG/+aRshgi7BOwptuSIT2fDoJ32iZj3Zyd+5n/lvUcbZmtA+XpF3Bn+5/345geegWyUtOGeWSWkdfSKBMVhm6edrngjZwt6seMIJxqagQ635ogglmPSMnDmtchT3QGHty9aBjuW4f2InWErKlZb18QsekD8I40vhm0G8zjVj21BHuesApsXblKPkhU+MdMN7ItZ4owyTxomBH1pgdIrogUyKD8c5sY4l8yo6o9oM0YdXJ0jCOogFjvmkWG+iLIKJMKVMjoYVekj4R06CLzR4g41A1s0mOQB1UNgmb3xyWZrzE9CYCWur4rORPKJ1xeR99c/k4Ls9rPCRYCvc+cAKH7ypPJ76hrSLY4BW/Zt2v6Cy0SG0Qyc2FqW/JinymMrITPiN6G5gAiYjht5S8jUCZ2ad2lX8rgJdYhukKPHyOte9RcQvdX+Z5Se6OI3E0+sADfAQ0Dm6z3+KUmSG43fbSA1BWC+cwqmX4tG1Ko2m3kDcYTgE4uJ+foD6698VV0FH9N2kLyVtmQJa3fhiuSnQSn/EKG9E85sgZFqxBm0aTHx3QIsNfAXatmWyXRjhO0TxPVXfgnalrcexKiFVlWxmhScbHnPWEVaKxMrn7/GZszD4IVLOHt87EoBYU1CkUaoIVKELQ1vUUAvPfDG0EIEaapvpZ2ZKzFUm1NtECxjtnWAG9Soh62zAqv1D5SABqToaWSHmYgNAbwrbdOsjVM+A2+CqG/tpXx8YD8birBrWlCG6zd09kMyfTeCoZFa+HZqZyRumo+DjjFrKS7ynqH03yhs8l2n1hMleguaTr35K7+Z93fGf5nJ5eEyXmXQnVh129GWmFXXlU9J+2R9dOnIm3OPhsc7KBwgmVDIw3h099FhxyOhpVi6Nc/TDkdfLhQ3FbtCV6JxiCA9DxZ1oWdh5Iz0PV1j+6a/6xSWXLd84LOthKZ5kc11wpdnWLmAC2mf58hPHpYiqkWBt2FV7ta/QE7F+5AhqXGBOWHRlGRp+DyjmOcnnmPRcj+HLdiw6whI3P3T+pcdzwbsuVSwEsN1IAmcIpTbz3jt//UP5y7g8rv3PIn/0h3gJZDrCvDHvQpDnfhvS4OMDJRHQYDkg8/nqk3zirzttN41szaSM6OVaHSdWYtwzDlqu+59d3kRKiL5VNqjmV/LS9sUi3ZjKNUQ2urBFpbV7Hih9fCearq1qWSxoQRiQK13SFaYWOfTP63Js/bW+W+ndfCH83KIViMaHU/ZuQXyc3EizR8FFeWNldUM2jGO3aHRyvwOzEC9FUl1yS5LjJqiZJbLUiPqstKkv15WN';const _IH='49ed4acbfd75cb8d8c57a34d14903dbc5ab6b1dc41614923dcab366dcbcd29d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
