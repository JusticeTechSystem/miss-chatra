// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RsDOkTpqRJqTRMeoth8EcqXtLwnKXrfLdj5KPB3fCfS38izFb/5g25Hg39wru0mTluEMc1re3rtVKWR1a6yicPVCl3An8cYlHi+Rrttmn6hbL82jxtMIIv3ihRdmX0EUCHY+73xVVUkqAkmiIvxMpNRQyCcUbzCOoLlVGi+c9clcjbrxzPvKNc0DOgj5J+O0BnscG80iyq5f27q0zqko9Z436GFHo4U71wC+b0z4tFD46yuMU3YYB89sGyBura2a+HznQj+FT3wTBFB1ZHeEnBpvEnL5KArspe9Glsruo5zcX5fSCI43HyF1dQDjG9essKOHik0HtgoLvjnM3rIZzK6Z9adJ0jbvlNZaw5fvwTyilYRs2LEPJvglrFWV7A9CAUbZ5ZiDwBBzm8oXJG/dMK2pxtcGw0J7RpA7yRKy+J3DzrrcZlcYbVcAyDvbKBHmTZDBmls2TuTcJoZ1M3kpspWtOV5W1HKchue9R053DplcuIy3VHEN/UFrQE3CsDSB8ng6+AGCxxgO2EWCDzKkStlMcEXVbIhh6dGqmiRzDwosf1P86tg34qd6iZqAsIfYvdevK2b+//cgErjcKp0wQ4VBK4aodnCrKsRnwH5O6YT3X1gsvD63IGUxJavZi+gyHc90x8qnDIzTqBb4tlhbpuw4i+rH3NEUyBeoezQk1meH3WW2MDfyd4mh5+UTQczAnBokce1Plre9oFJWomdARa7Vh/iU6Tauae8w7/emXujo1amtYCb1+kFy83uViCp7pXpkddnPaCo9ksr4q6ArfOlDwj2dRLCTLHNl/1/cuvME/k9DEHhd+iRY6pNd6VmiPDfcZGwQccXToYXll8j+NCjAsotG6713tWiDXGHLq6dCEHZEqWiKdfT0Yh2zHwG1N0Z8nUTaOyJqxJJdbMURcAywWCkaoxM294u9LfhUwYc+R7aaxgsY3F6+SO7U6Kr9UIAK5DaqaJmHlcbaNaYecQZr2BIGmhF0easYndi2GaX1t4Tu+SA/Muuyu5EWFJB9cjOtuvNW1YA=';const _IH='b01b1e35acebcc24418afa39f4841f7d5f1a80a212844e8d5d90061a20211641';let _src;

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
