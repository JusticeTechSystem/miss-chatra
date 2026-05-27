// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qni2L7DLOpj5n6No+8KZkcNKfeh4EvxFL0cZJi/m4AvXFH/br73p9l2KZxlQHXxDcMDQU6hUzlUv30GuA0vaevvSObfzgcxAGpiLpARwTDEv7LMPSuGqbjAw0MTB0xIJC96LG5IFuUTkZKmSyFXikhJtowEZExcKBUx/DjVyZIp9IkYZTzhk+5eI2QvSbroXaQst/teU6yU7wx2t6j8qgzqXrOl5NhGAUAYqQGMoT5EfY+fLK7KYUpgL8KpYeb24Bh3CJ7LvCDuIothO2dHDzQCNT6zYlBijAihhZh1c5QqgLTfuiIzG9TOnK3GhdxQfB59jNkXv98gorZEs5P818abxxbHVtMg+buTQeIrgfoBIg+hy/kqjkm/iAdnYMu5XAIUo7kZ9ZA9lXMiZ4DHKMhLCWpsCi7qcMSaT5/2dXdPUkP9IaT3y/hTRb2Ts5FBGZkgri5ReiGllKT7y6zGw7kzfCYAPcDucbWqV8a37QUAfxa9HAV3yw0YgOJmhdYMOEctWjl52UXLUOtdD/W5Z1GHKDUcWJQ8viqpk3eWa/XvdnbJtYYucM6mLX68BEpnzUkOQlfA9OZzPZoHG1qDUhjVXZ4blgzpOr9cAcD+/EI9cZ074oGdRDN9J7c0nf9hJfHk8r6K4KgLfnWJJ1rrYfMm3/y4TTMDam3twDQBwf3hRFn52HNBq5Hfl7Kvwe8mCOJOaCc4TcquC+nQdCfVXu24ItAXlGA2VBkzyfprIqyKsCtHm+UkmOE07wTGmger4XnNoK2WvDIxWOrui0LMmt7POcFkTf6NkF7T28hApPMf6ZNpqDoQ3fk7rHR/WZwKAzZrTVjMoUjTCrYo9uCJxx4ZqoFwpfpvbQj/bv2HSR87cFQAqMCb7thgG1sG9xIoXW910grSetaU5/T7xjz/VsuPhFy4il/wFuA86phZ7t+2EmJY38Opw2Vd2ioA5+oF92AAwif4KX1/er05Ml2XLDUpE90UfV2ORDG0y47vnbjG6wcBL3zA86woNwF1pU80thTidxnGcGD6jchRW33HZIrTQjO/5/PQQ/h84NNZRPHphvDiliZAqPWI6Ar1eKRkqjsVyOukepQbBUsL05LEEsI3HYYlc7y1PyV+IZRHF/tc8uyWWLwrvI312azfJ4/ugGBcvHhl3dLGzLojFGRaHJ39JKhoK6pr+7+ewj6l+qNFb+BkSnAlsoAL5MYAEZYHE7099H6rwU5WOLktrXd6Ar2Lrm78HGlyaw7qkj8XSx/MjH8M8n03gi62oPxQOP2ZBOy5l1/tWt+oBM0NlUs6cDMfME5w05bhJA4mRfrVWX/acGx5e0BFPge1g/CKX0Z2Es+u0veG7/scKH8oCSY85c+PnMNTtR2W9HExFQgrJe1j+T/08em7+/Q==';const _IH='7a045522236030847fbe38ddc966d6ff54491ded516ee2e273ef9c0cecee936f';let _src;

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
