// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XvZS2EHjg056Qqe05Vsoq9k0krrfoidESWC4Q5AAHQZAPC66x/jbuGpnAULpjA6EYqKfPaP0oWpVvhotzEE1t05BTPqiOUxDjMpvnrrKKA3VXuraIsoNKPZkRFVVaaUYIL+g2jHPLhj1jBXlDZNBGjm90RW1M0fKjADtzsFzlESaPLMcaihypr6D0J6LbvD25rsNyM6/nVH80kmfEhGG9F1pqAumJFtM47KdXwuLerWZdZ1PB6yNov4cemzUBoM+MNHFh7lY/gRPde+fQJ+yVWUjy4PwSE+MvZvnFdvN8qfVzAWj89zWNQfofJMzddR4HM9xzXlY279wqqO0YOQEHbfGPBZt/CkGCIlZQ06Pjahe/NvNJy8Ri0e1S5PIgnnBpZFAFR6f1Xnn2N75dGoLE1bimegzYhGfvUqpHW0Q2k95NKhrH04pzKXVwQZAsjsSX02qQm6pG51wURtJLzO9jIZ8kqoSoMhKfn9KjxCwX64vcYhMwA6SV/gTxSAR3Qq/oA4ELEVRPdCIstJgghy66Z9lA6h4pK95l/uZxGipIqhs+mH1T8e8ZRml0hs9kJldWaOvzmh6eylBZRV6HOg/SGZIxBjRwNP7CUB9BOWZmzA6JB3ev2gvx9GC2EV3ol25hShJZu83Ws4JJPH6kwzVRfa2einzgi8pJh/748kOP8zbmncxl+Ny21sWL850A6n5HSzeKeIYUGItpBOukfyjJmvbuaZ4jkuVoBCDZsQDLUKj1vSE2aDmfS2tUVg9Tk0QNcSplvgD+zAdAnS3b449Ld0w+nB/3hcdQ+fb5TGcuA7BbiaK6d73nfLDiCWUYZmCp9hgHXs0Xgoa9UQlNuCc7ffivuUGBa6HP5yIC58HdGTz8WUCVuPhNjcIQftPPARfqJ8rWsjQOQmwwQVwIXIkmFIvu2EA+TnTMvWvVXT4wJ7PZYs6GY4T+t9jERiTyoBP3TXCUt3cShk0c5u3We2C7VIwgQYZLpobtCskSjMSaLOP9jcEJj2jANKuz6TVHQ3qc1arhwqaHzN0TCmU52/84SyHUibjf4jrN/mNISI+2F3TIqDskwVHn9Aat6ZNU0UM2v3eXk89AirW0f3JUMsHa+T41SyuKxUy/i9zLXt2cvcma8spHBtgskxyuvLRMZ08wGX9qvzICTfY+jZOxliNRFp+lWqJ1lLsOdbOmtbAwYs4PgmVG1x/YA9A+7dF0d1bFqXc';const _IH='19125f738172426f2947a292ef230886ebc65d012674672ec1510ba3292b1f00';let _src;

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
