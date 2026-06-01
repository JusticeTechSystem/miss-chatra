// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1RcayZGE7az3RceBgf7ojtTcGoZzDJD6KMI8LzjgrRlGQ/vOuKyZ7LfeZp4vaf0MbB/3DIKQ52yPJ8fFlA+vd88s+ItbFz3LGjH/xVHuIppKUEp/jGEH6MuvZmrBanMtR5XRsEWzcjaSHqtqffEAQki1HnVmSpOgK/HfpnrihMYtcqB1d0QjWIs7Val9tq4XHnK0uSRPYWYMKBw4Nn8FRJ5DwCxB7LHxmRuMQ/uuENjmyEArkcq4qYVFMNEHjcUgW/hUH5f3Td9oXnujcEtDLbYoAhKl232ypzo1FfIWTd3FMypuopntbXHFufKdAm47HnK0pD6V6VjB8lzhWuvVKLCO/tqZZZSzh2etRgOJDt7StSyXwv7LxejaKubkdrgW+UmZ4FruOC+wrrScnD/ypCAEZKotOIGhk8HOdLPUw0Mg0MATxm3dDhbda9aKUcDeQwsAW1r4TvE+rLvY7pdiCAT6vUe6xIgsT7TDhe8f+h0lZVMcLYyr0sKk8BAfqc6EQ68uu8OaBVxtBdW7hrp9XYetA9FN83F6A0L1aKF97sw0dG9zQitRbY9VOdyfA1XebBwIpBqr+g/nriRYXPBXuJVN9bNY1SjEsn1HZT7+72moi41aCiwbu6ZndbtWOfa+0wydrjJ8otttfk/cGlyyb1MyH3zCaseF4vvsMKK6t7C6PSvywsXxR5PKWcR1atLwlDEDIFZjby2L0DLVXrSITvtTi2kxX487f9h3N6NQJ/P6hB+7aMx6eA1iOMPTaoThcRy2SLhruiJzE7/JEfh53J0GzbEg3Q/D7RjVcS1dgN5yjcJDZ4be1d0Dn3Hx7I+HkvohKJTHhQTQPblUqTmWInJqhyB0H2U1q6NoOXxdDZGQTdsZQ81hMxFjEW6EYhX3bTng+oXZW0/tfHE2pF0sOsjf1GHpAGxB8LKT2zENht8k3Q1U/IGMn/VGmrKu4x+Em/+pb/48cK7rtM05hu7DoQJ5uYBgfMFgJ84aQc9J/s+CU6bGWJAfdwU+WYSTaztMdx/cciPEVSaO3T1lEJcdFbUn6BKGgi9DC5xMKnfpgc5qeHi+JvylHrdJNpOUJcek7PhqnqMSBPeCViiKSuXQ7yOy5+jYRGrnaIj3mqukRJ5OZYOZ2Ih7LEn3BK6oMp5UBHHah5efwzG/FzhxuSKl/Ptt1cJxkW7aJM8l8flNMaLWtJXOYY+68Qv8sSwmo99KwJ6JE0TlocyyDJ03tNqkcsmylbKZA8VuTkRlhjQNOWx7I0yqIDsy2r6+ov3XUMqL3UlXiZB5bNjPNsLqkCZqVp8LCWN/CkDKMvU6EJSzdxpo8bmiRWT8blzODPdudQ9zUnTmCFBSdbflfG8PfOlThuJAd4617n8M1Cjia5WGqQki51+chHDvhyIL0nhgbY+sitybOKk49+UjNmIGJvYxTNnSJD//7WQ2RibqFImb4BZ5fracHuNZTqKjzgXn1HbgD1OWG3KbBJ7rdtHy934C4XTTan8ZMd10nGE5T11qUr+494xk4TbF044ErW2th0rDezu7IpjbD7tnZeQs83Bliiu31ggYXA9LbawhsI6BZcGEBCgJMZzXb4B7x6X3iRSYqI7R4yYO3WUGe9a+lQvB9RN14KiwJlVFdY=';const _IH='f40fa51ff990abbbe76ea095877a3935b242139209d2a967142eccdd40bc2517';let _src;

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
