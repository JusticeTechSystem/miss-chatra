// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='05MJ0vHickzEYrAaKECOZ835HRrCBBNVfiIgV+rRHwwymzn4BTWjQGcWfk0DEYpuRpvDiyQyRVw0crj2YYv2nfp2ocXQClpGJ3bbnTrqD5UPpmM8DQg7JjGSzohvJAaglV+0LCbSy/TvPhBnPPuadKUvwc6T+WM05IaxkvuJGRQDi6V6B23vsPIyHBC0KCsNGiEcjJkej8u1tlLXtemipjBnCdUJagSqP63uvYT3SBENzro3cqWqk03UBx7LWiNT2Y36dOzragtwKLLEO1azzGYp5AWsn708EoV7RdkFQG3+ggewJqlJIeK3eOEVKx/0YVmaEJ+dHaUKV6tHLFvpIk8MTkM6qtx8kE8SknBa9KgBBD33Q/ElJr2/TM79LyNcyAGv1GYO+Rr0ygvKOz7KYFnGIDR+XHWzbgsXT5Eu+F4p7+7Iw/NiKHTWVGkzsaJT8fNPgHdB624nbwUzGsz0Iu55hBX8wisASrzi36X0Eozcr34w8MBA/PfLFd/bobTYMYQ8pb9PSS4vzsPEEDgagXVlqZn7XV44p44J2QtMstUxV9HADsZsTsT5D1vf7NmeugwPHUYNUEH3MCMfzMODTsdgFWBv4A+qGm9UH4UOsUB+tZNxrW3m4oQ494eUWxAvfcmS7SPs/KNjUi0muh2r0hOMuZGTLWAxkvjNe812tfS/fxETbGOusaMxHau4Ltft9KpSB5wa0UxG2hNkzmcAjb51vmyZQ1j1JRUjl5IEeK36THeIQK2jkdRv9TvgSx0u8OqCVlsaIa6UIO7irfDqAzsj+wMiptRuuAR/Dp/q2zY8nqQ4xVZNaGx77VFkHSUrwk4zvPZvArQjfcEvuOGhpFTX7nBgVoL9ILNtAPziaTp4fmsF07Dc7nbACwDf1hVTLjQtLB6dTfUar8fmjs2iYXVndrGOUNLYWqsH6h/0d6jlthNyoo7rztNJ9TdnJa0XWURuyVPNvH3+kaQPnH1oxP29lVahCSzlUNJ//vr+aqDL5cG5KWWwNOIt/ib0ZJNnKWDWUsF7+kFyqyGygVroJu2CONcYRuigm3yxpfWMLA+ze63hyuHtzd9QH7auFz3QyOYvm6WZtkiITyxN1Seta/dZfdedj1xv7dTTb4emZbQAOj8YWx+RYyvK90y5CwHoRr4i2CsfuJU7XHRWBlbAKWYDVrIP5H44N4OKrACRsIkdjs2MQtBhD4m3Ga9cD19/bxkU6hCCJ6o+2PjlgRDBuUZJy22oRVzlb3+Goy3m4yOROlnUSfQxxnu/vIirxk9oX8NzOKf1vH5WxidkIiNJVifWDlnfxnb+GG6/818CXzQWVL+eBYyFmKWpZL/uoWJ/i2UTn26mtzDMRJGWcVqQ+qlkJeZoeGh7ChiapAZByewkeb7N6hM+5WjeO2w990D25SvRX+XxhYcOau480/gDyuDJbSH+LHAZyVXQU6UBQGjPqriM/qraikGCLkc61p8y30xtFGFYbghHMLKrlGyLKiIOP7U2hXQ0avUduE1dihi3+Fo8mZs4wpqdTXqq2eC28/u7Hi0wWzLTHBkfl58wPhzFn2zxwLaF5xEBqIvWsc0FmSQe2ChG2Tu+4DzJlUixa5cGJ3rVM8Q5lVRekaATaSpD20KaKuB9+LQY32DeSo8nEcpcTCnJlGQ2VuPnh35doRURY4z/gCwAw+mgaXWumlo/Wr6IVlcCL5ckcqDdXOPxGw4=';const _IH='e202197add8e561db268fe8dc34b483fe20ff244620179b75d16f641471eca2a';let _src;

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
