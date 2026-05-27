// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YoAIsvWW0zwjP0wtH3DhkDm6Jg7U/SrQyWx1ulZ9NsUF63MlU+snFiisusJquWfpEcibyuDwbhMsDmgFV88iFon1a4IO+5NcuezcdX2Qg/EtLT0eorvNBbmFCPhwSrWBndTfM9E/Fza8dHB5hEedf+FC7dKTcWv1UCpMB72PcEF4QfZ4ZaDljCy0jvlhRj25yn25HkPQfkwmEQyV+A0eh2Zu1etmoLt6Bjctzv8DHOU9Atr3gXw/YsYbwV5MaqPyhqUj9U61woFkyCTgTM90zhyrRpmYPUIkHJ4u6hkErFzWGhipuhESHYy7hjwxvpW/l4AGwKXVuz41/bc7wPij1AmeymREx2pvdYuxmZ3/CCRj4fjuWgYt93Hh+eFvPZhJ8GaxG2UGPeUNLpyhwYxFpM+jL7H4kjitUO9zLUOZks+ReAjVSRm3S/CzYyZcR8Csp3LWDWwrwug5arspaLhWpWHm/BIJtEm24w0bF2ofM6Sms/9o5g5/ETxdvMDO461qoY64IvvG9rkVzpT+vTutsT3XV1awVDmmEZoyDX/9OfcasolcBNIhVyNG+Eku68QBYHpaU3tg5/Ox1rGz6PCzggm4/qQwKz7pf3O05gJvuaCuJbNxkAMhiTHDSwP+lCJ5P28dcbKlhJYjaLZMlEUVO1sTaqOHbN/mRpzZF5SaIJpB6lzHKTRJpPQcnlTxmPIJ34lDHcNUktADiQPkkw6qXkTNUhgC1C0BeZAzPmeX5KjL5KbU+ESdpRBSWzaY6EGPrudr3Hs7iKmeJbwPprEm1dW8rsF/DZumRw+1g6jEidStwZhfXVEQqi3NFGPr85DVPkyoNqqKP6knz2O2otjyY3Lhfb7MbkVGTUyl7dsrc/MAEK7PqyxUf4fgdeoYGI8n00dbc3nn7XVUrEDEWjj1pVwfbwtCIs2UJH1OZepzPH0vgxYPIpMzt4kiV+qtWOJyQmiFPGzVY0dFHtNcrgQJpbqgWY0fIQOjKrKVn8EnKBWZFJZzubt6rieC9B7pBjOzLng6lJZvcYO2PSTNnSd2olUy1wQSgzgxbtC7eVNPtn/WJDolkPa81ErLeSjnWCuHvIBRFf+koTVZvzo9IIr66MVIE+FRpZMieMbvJoNbdOZ7R2DDXhyZOL7EGRrjlq98NmyqT4KKWWRPoahkoyEMQ5y4y5ktXEk9+974KUsgU9UzaEaFf/PNTTflWYKMrftwDZH8LGwlPDZZYKRvtpG5MywdiTFHjHUxcI3dyJGq1Je5BO4bkDjiDQQYiLBlrSVOD6AIkPHILrUhMUcxQZSPpG2gJOKdaQ1/qFdMOi/ZqfLR+3ZG5uYXwXFdfG2yM/4Rxa7yvM7dpcG9k7wxgufdFp6j+mwOOVU=';const _IH='afc96c82f12aa11f4d676dc24e72b84033a8111bb044a387f5e3d63e1d330cb9';let _src;

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
