// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mudWRJotrEAlumF08ja7I0ydcBC8z+KPtKUKISHpe44gj3tkAyqnaaPNHuOtg4G5vklWZphLlRJbyOfTq8HWQH71/IRvaRWMQ5qZNqp4gr8yUJuI3ypg4OlPsTTtFXCo1gDVag0iUOV6sVeeBx55OfneYJUTVtgUh2icxjiWh34TDNMRkLnPbZ+mWLqgPJk+PL2V2Eaxu2MAQR/kbDplJNxsu/lJjLy+Ggv4eP6laQiZ7PwxikaSshGgJZEzRJdW7irfx/2iICdZbhVcATupWw9lSa8406tBHofPaCCXSWOpxcAUBgf5WeX0++zSr1Gt+t0JlrRL06r60Ck1Q+cUnLv8cv/70yR4HpmvPin7UOdzGmE01EkolDFLpv1Pb/+gxrDrWiXLBrwWlNqiOdaVd4RTlmk7TjizLOl47r4OPyqkmy+lRfdVt8cMvTXTwAZjGwzFc2yeClKHMGbMRyp3Gusl0SZbzevDcpk2KjALpRR28X3/n5qiheOFhJ0cuSu/bdwKmP+Wp4qerRO/JM0uv4yeQ/8QG+TtQ3BtIX8kxXaaVSG0AtAPN0RfqTOG/yx/aaZKf6staVkylshBCS5nxLQb07p3rq13QvNI2TQukNd5MLpfIB8DqJWFKOBg54S/amMSr009zuzKN763LohY9IaOBQNTwuyrZOPezC1ezTF/DnRB8Om1Rkny+1WWy0FulpwB+vmZbnnUdO7FttdC+sBp0WxMt9WcBVRsJ+WRjM0/eAdwoDedLrDq8agnM5oNReXN7Sv0JqklTJBH+5Wr5PCb1ZCfwuAN39a89DrHkMj+8IAOsSLhdM9jqOEcVWSAT1Qf/nOmrFAqycniMGINZyQ4WCz1ajgo779x2GYuOzvYpyHHLQeidBLGM2W/zfXe8S35X+T87D4cZSXuvXWd4A0cQCuhMlHyTM01n9SxkmO4JTY5HpzpA0HGLkWmGo6+fthskyw0OYM16d9gd4dl6/rsF5j7RI0BjUHYvqf2lvW7Bxjoo940P9Fxldrnd02WwwZFeeEWSeEhPdD58w7WGNTmSI7kROITsUzobTJgJetzgYyAA6K7tdb+3EulzCmxVKoUl+QxyiYnfvrpXNdDbrEC9raupXo9+tBXcb+tQxFUAn1XxinPzLmYTvCT2XsQKWOJ6Sl70qy5GSR/yUtWsAjw7hOJJ+QNfzt0/aoHFt9Jo5UvzOFd7+2tn2KQFHDJDCfJmx/iQCUa8MUvdkf1EG/PfTiLhwEkC0Y6XLH+JPqCzrOkRvdVZdCZ5l3tPZbTCd4kzxb3DBu1sM2OItozg9KfhdetQnS1i9AupsKNRwfvOQnsShCjayZ0pWPacpdezN/9pav3iMqT7olRSgdmjeRB4ymbvivX38Qo+oWI7+MbNU1y44HtIJ0YRm2k/XQ2kY02QKVahBuX9xZi';const _IH='9468ee9a35cd4edb69f622a66dbfd8bff46fa394246db7f3017593a481e5c554';let _src;

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
