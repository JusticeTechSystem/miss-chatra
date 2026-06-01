// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+mRzd0iOXoCkpgfV9JjzI928oB+7VI89MGlPp9peQyeiSTlTFrp2cmofUMnyD+dG2YUtmib6ozEALR6CPA4yWcfW1z/iSKhH6aXz3gq7Jbior/Yy+HG1cXx8uw+p7wpaUh0N7/qxQRlT5/XIUxI+42noyVL8dr1SM+3pjuNueejR+sZ11LDxHeJ0rcHPGEP5NTGZFaACnsuKJ+ERZ6Mlt0mU9NTVx/VsVXShUt7WF2neBNfLbgA2YgwevY4JvGTl5tujW2f9BtKrJStCeSKhymAtsM+wHsBXb91G2fPamCOH4vjNiMm/0T+ZqJ3+7cavDbjdzlH4iIYpZjZwarDDeSseNHhVrG20pSx7ftYMosBFvwJmcAUuKRgbyH+KgnUY2AH/K9hdRFvHBJ5gAih1W8a+G78nyqgOMoZBVrNme9sHfyn8loOJjOi1f8+FLU3j0bTV6yVP9tOa4WIqxvC9D/pH07M41xZRPP34rmbBr8/cTdPIr251nJi5O1SCI174DU53Wk+6dxwAuIhFwNFkzo+dls512rIPwQzBwKqhu3sGMH05P340wG85JplYqAr8zsG5npzFZEhx7FUqwth9jDG8lhRlxLaSLRCSSx7Uy1+cGz14ogh7Qqq5sOEFgDHr/Yl3RKiPZ/89078PESTqzNTckcTyPVySu0ZJbEX/AVqJM1V0NxLxZsTDOrqL/DvAdFQOaOK7j8mMrESvgZw0VqgTIPkOa77ZzDWq2y63Q0ESmtVJSOv2oap70HQbeSn21ilHW8GUwvTAY+7dzrH8qEKkHnfr81X9EEpgHPljU67dZspDAo04xRDgbb3WawPHd1NzFsyMQbOQARJG4etHZYB86Cz9szbD0WBEVUVJRM9MHDcMsKubaPPPRk43SLchxfSdyOJrut7kqj5IS1cxalQvfvI7kLc3bc0KE7jBEdMvIE3iLdhmjXuUsr45HdsZEOZI/BjgehSlORrjotYkzp7TbNGcg5jg+ZCCX6KTLn0t7bQ3ATd/TFju2ORGa6zPUOSZGz9QpsMxxdDAb3oPU/88oRUTWWwqB7ZYdS0OXnSlVyzjdaGcFmjRh6FBCuSUKE2eB1farRSfv03';const _IH='91e839f4c5be6ded7b5ff7957b6d1023018f1cdef53da76cb6443f8f44c78102';let _src;

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
