// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M4uYkqfpOmp0pq3QlXHu1yXHziHDKsBg+Xk1JJSn4fmqrrh8DmCBgRAz1WAmbQOpDlhz+lzeqP7ulpjf1QkfaLMZFR5hPeGYr40iEg3G2QSTZpkbgEhcsKUvnQNP2hweqiGT7Zp32mAMwew6kwP4knayQELRbzWrEQcEG9qlSH7TIQdqvN4bWrofSKKaXLvE9TtndxtRZUL5rxYG/dc1FrdjW4MGPj5l/rrySh2wpRlF2dbmrKOyx/xtKfZGeYhSDS3Z3sBMbAAFl2Bm+lqpGWfHGu/poYZyqNjNw+bpq2tpzJ7LGA/7kDnPAC8Yx43GhQtJwSda0+VvpwQRH8fAU0VEVDAtXjZZq7ptE5SY+/FF3cc4xOdK34piXtUDdIbTROfKbLcHbXkXWJdfKrtWiIJlLe5DJfhyGF+D+KC3myDO8TuM0u904CVtZOVbFspIUkijEIeSqYkI5jaL+i/w17XETOLZpcwrnzRxS/Wd1voZnVcv+VhrDehKVJbobyxyCIergPbpvCm9mgXV8lZbPBUlUIkYSWwdRxkTCwcP5OBWB5+44OcKR0tGWW4JbPcmDAa3YhYoZenhEjG9sKOQ1zwsPQ6Y5daZ3QkyFJVWcDV2z980GlZ1paw2sgYtQIPve4D+AaVgmyuBPIga31Jm4/iXFM0PDgM+srxhZ3M73lyfzozK/62EnbGViEE6/ZhhxUpVNltXcMu22GX/ufOHGyEVz14FYEkburKdR+77/+tIc2IS3OpaeWdgJ2LEUrUpfMU+ptY6c7FaZi0AzzHV18oOts41exXhs/8i1OL0zP7t7Kls6iW+AFsQvrDt7mSsCj5/WqhOzxfM8zCAULLCLap3M1Lj3v/Pdn1FDA00FK3LPatlTaHW4SB7Mtk3t12tUe3WvvQ4ZE3Rf4TsNzOJOSrP5mWoSJqu/J2rr2sPhQ7tzOt79EyyyQ/ovdo3PSQiZ94jfBH/b9ab9ZowxGGkYjCL5ban7yfD7GnllfhRyxYEprqrvjMrSiwlrWFbzxLRAHFi7yFyTSnVE8IJ4NQNn2VuV4SW6fOv57mhUruzb5EoBvAMqAJVI3pDteJ6GkKSmDDouPxhfpO2d6kq52SyYjg6pd8VmgIC3UFRDuRTkAd1CyZ40wzV1odCZ+bRwbumuaaQ6pn9eDOAGVj7QmMKsz336Md3slR8SiuZQZ5UIopyVGpHOr8eWlmvEf5m4nmOerJ/dfgOwTg=';const _IH='c717272c5fc32f8f2c32f92d139141d589e674ab23186b004cb319f6edaa15e4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
