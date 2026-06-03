// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3OAy+lXXSRJg31eoiupiR38bycWKac9E4LWukIsxgOYXw9wdmfPzN+M5KtK1LhxYEpcg9oAWL/hB8GUJHDtEhZzoCJrFbTCZhQuNnxWelPTY+kueOJ942BtZZxa6WqbfjEa1SUTZiPg8NmswS5wmYhP857qdr8WMSk5oX0tKdYnVQxl68SJmzMvdSRXKjlORRCAeUmBH5avhn8svjaO4pC/V5QbblSH6mrj9CVVkvrEtBTRgnAg+YdAAwrx+Yos6THLMTmHm8ml1Rg140xZh7QcdXfLnpgM8FxKWq6PbLStghLO2Yme4wghFIwiHx/M9IrvJSkpKL4VhgCwnoCYeS3SLGd+hElhD6B1P9vNP/rhOD4nc3rrj/Xa5vWqTOVsHuuFwZewxqa25YMiprcmghXR6hYpzThMvvvTE5W2sKs7ysG9BEGbUmMBvVEzMK1doYp6hiW+2yBUew0KiWt6Wg8+SEYl3y4ZVOQV0YdZBh/2Oz6mKs//isl7v1hJV8Kj70ZqzgIZgCnvBEU+kEzOxjpGral1EMTbE2TFu67T+6gxjgpTwc8wvLvkTnJ1PpDa3a4JVwycIN0UIAYiLBt4QVoflTfq0anydGPWDskypi4r5supty/pwOwKFX1Psd/fv5noTGtbyElp+TMbGQTvqVj8Xs+cLt0+7nFJKULGqi9ksM1AvOpoQd5ld7RkL4RDN7Ia3UPirTJVDh7A012rxaWTqC2VdbPxgSlCoC6EJxsRYks9G7uaqNxtE0tVY/MCQMhPfsPnB92urWVytnC2VZwnkVMN1wgRXBvckwlehzrsupIUhGrNpyvS6C3I25rLXtrhIJKH3k1ozXcEAAmFX700OMNcjCMyo2F+fyx26FuNb0yQVRfijQpVKyGS8nYPYaJZinn4pzIzBxgf0BtsvuxxgRR/LUuLZK2Ebry638hGEYLoWFf9RyAsurkX5MKwkZyBZ4cA8e8dbeFPQANKjKD3tBKQFAiNPJ27942I/cE3241GfRFoeWJqAGEZRCn6g8t6CaUUiKpIRFZRlTDNUAQaY1ZZ796NC0ezSwGRTLsayvcZ0trVIynGiqh6GyUNtVa7WApyXb1lykXzYrIPSeuuw3atIysCFSYwvsixP6ojWFsMU4mQVg2tHCDQmlvrxejmEgK3/aCT/+1+D5alOH2VflT6oAORAHDIciCes1F7VDsDJ2CqAxFHm5KHaiWn9y1yg4M9LgGtoReUOtF2ft6Z4GIlgKzEdEhUtD2nINYYkFaMAp/F9mxfiCDcKqTe3gvg2tT4s3Tq2OJ7Wfqa5W8DL5Ui/LIG2vHaXae+QLT9m/rFnLqrz5NaekTwS0G2Oa1dNokOuOfpuqO7e6RgNfpku5HWCX7Y2p+ey3hNiS4N6pfc=';const _IH='288f147b7fd477ee023ad59c232b4110eef13a17584fc66bb1e2bae955d2dd6c';let _src;

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
