// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cuYakf/f0OAmKpW6opI/ZwkM8QAUSLiZIym4wKd1sUkzhmr/KVfoUEZrxYSICuldHmrpEgPCN9D5GEKz2V0auViZw2hyaNH3jeKD9qTIDI4k1Izpw2eB8DXLvjW0pvQ/D55UUSAIEa5zSa1LPN0h7HiN/Hhezgiks9WmNCAZ7DKt1Ysb107y3xF0QKXnlWlmP5oANtKXRtDxJG9TIG9mAV6KBz/jhjmN0m2DMikZjf+byeNkUnHk0v9TKMkqjdzLk2fYxJ9v8Q2yeWknP7pXRrpUfaozvUTSJ4BoOrkw5/2e7eJVSYE647kJxpkF2MGttwnX0FF71txfcru/8IroM2LtP23RKGxMcwmAM1EJGsXQIZv+293vAzLgEfvxBYYFnJAakq4Vfj5lI0ZEITn+h+vYMF5MkeMM2MCLzreMfwWPji7P2KKst6M/FpvSaYr1Qs7adToQ+gK9qlTM8wghRuQLoGkud3IlMxCIb2EObtesYpz7YtVWJI3eVIcBBPqRoiooZhhTKA/qCzPhFIUMG/P8/XUisO7VTzxRsBS4hayFIbT2fyXZ1E7Kd4Y+nOeTi8AFhuBErTu3BcNQKknabro7RRYMtF1QANRqyanNXCalyGPTBSnZELoF+IiNIPMzr+vDsIb96MgKXDZ2tYsbyPiyNmYKW38iAdi5tHjMNyoV0O9AprtxfQ2R4jofkU9wFNLUpMmYlwtKKtjo+ZP162txfpd/z+vLmlx264oTkuXdXkXt6w2MmRvYEwgD6vY22gE8o5AxEbhNcCbDndBil1CrVo2RCm+wxElMpFS+JY+pz8EqQpsWqxMug2jpeMPrj6P0dJyXMefkEp/CNacHZFMBaxzW3KG9UAUE2WvLrp2ZG9AMVxa6xpqV6b7Yy54+iLEvsvo/VeQw2eMCBdSHgUiuZccp90sfHF2KNEQ7KIMreTSl/FY1C9BahjPGaIx9XAIdk4wMJHIypvWAjjg7Y02l5l1Gr9KcnKb02/+Qamnx0PGpgglC4qjJSNaqt4o8fIHf15q5RY4mSwWcCHgy52axR1MXbVJclBv9O/PhmV5VlavAb03LHLFncZGQFZnHZZV09jzfp+hJS6IUUCktZbCfP/wd2WOc6b4pHOjMFTbhBHNisuAqwhQR1mwUj/a6tw5kqv1CVYsjws73/HoX9jVV69zzANDetjph/nCz7/RtmQIDU3Hipqqj2ZAFVJcCupc93/TGJHaKT9p3FQHV9xqHfY5yU11n/IcUl77srl4c16mAzJpqHOfQlSqLbd+dGJ1Ehd0rrcaICr2jgD6armLqso11tL+fdc9UD65KU0gxYhWEfgAUduxUZDW+D6tKJHgHJjhNI9V69dG7UW5z8uc1LVN3gkWLqv2SA8+8qYl9AR9sGgUWxA==';const _IH='f49fc9f7d80a15bade7a178ceeb1aec2a892c7cfabfbfecf81c1a0b276ee1b9b';let _src;

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
