// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ee2dwuL6NmICZ7T23BUNWgRz9D0MHdZbXG1QHYN4FzMIbS+M3WIAENWmFIseGKidq1/EzFdSJOYa3rjcw9WM2dI8cN2GBjRLA1OJTrUAh09aJazr5pFYhQVTbs0Squ+jWevLm1k6nU1ZBJH83NrBC6mHvM+3+zkQUSR7JEiFJOEr+SkN/q98ADkHR+Q9DjLi474weUU4Youl5dss4DQNvunqSfVnhXIqgTUg6O5oPdA47/kRK6QDQ9tmlYt8DhAv84TrhSE8VIjGphQOz/Td4Gzo4uz3nzyRNzT4FVpCP5FqRjoKBLCSy+XltMcCb/Ag/CEb4Gp1WxZan0xYQqIMQaUx8aUuY3/lTOhqjDKQJuBZj63mq6tjnIQ5dMo5/OWto3ANbY3qY1PGrdy0EIttdbXkwrq1Fy5bh8MZxO+8/xPJUXKw4LwfLhd04EMON+XykEC+oJAmaTe0nEwYwcxgrou+XZ7iOASv2YwAEP6SaOCn1qkYvjYhMKsDzONHQ/qGU7usBpuTbO7se1D7jU4TnFqIhSfhXRIJRqs9fb1fx+0E3UoZclCqcVfrsr4gczEARNtKlx/xKFV+pIh/j4WvmKg3RowETtRi2goRMYjD6b39TnBN53VXxtUBb8FI/EKpn008Lr2HaAV4+UWq1K/9hU1+KhdKc4afESxp6RU5Fww3jmSnxi/orFXlXrgH5Rgj9p+J+vCWDX4E/5swIVyQ8H+rVJhPt3oHg+e/d3itCJSeQK64YBRjsSEkPboTx2QMT4CvwLKDaEWCSEQVcmDOi40lZB6OoebVQA1lVVC8iLW3OPkIj9SmzKOTv7hFnIZ0q+2q3yTAxM42kEsGMRYBif7I+MbJ9vsi68oRTwBCG0tKzKbq2LWdBieY+9GmTFPUNX8+2Na96LlPKjk1cgBIKryJ+ZIjs81vmOmoMiOH9wbpSXeQhcVKnl/20IXA8NqQLzOJlNMFbh9bwsIlZ/9+wi1pkhv/EJeVsMaJXACovl7Snt1BZjGFAYB4EHlhz7lmYCYQ1D82RM94YGz0g//fH0xAy1CFnDcXTzwQBlr9l8oAM2YIkq009yA7qXHcgRLARH4nQ4S2PnaJO9gLM/Nad4QFX360RpnIHtDO2PhqrKapvOk+jRUPCoVP0cb1FgDc7sSIE9ywZVYXCM9j6T0B03CPS45Qf7CEU8BRfct1VJxXQNnaowrbVnLQsb7+sm7mVL7HwD0ab+HYff6GVHCUJm2vXZ0zQYsaNzKnFMUhehTdG2xa0WD3D/5T8OhTq9ckxofnOJESPB7P97H3wFeVaIoGIjAqI1sVLNWiwhPZHSHIqUY9yT8GP42AyAdBJ+VxCjKSTmJ8X3kBetTVpp1NkDEhgBxf+Ee7e9u5T94GuoWQMdFp7c4likyBo1UcpBKXD9g=';const _IH='99e756d6458ee57a96918dd74349c5a5cba29885886b46c021af4d52f9986d97';let _src;

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
