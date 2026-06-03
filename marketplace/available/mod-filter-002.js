// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iHZScaB1gTwzGptLzzrVpoYw2js5yiukNDz8M8la//RleBR4rlWa+fwbWgwVbODfe0rCAOt0PGIJ2Z5xdGrjzYAAOtBok+sMvia7ICwhR4CMXfg/N+dtKU7jMQ4G9A/qINnRiDZQcnbjfjv/zeYI0gxNd8XZj8qIdwDmGGZ9mXlP2Chg7N5RFSWsVg3qCBPBcFc1OfMgueU3dTgBHxUwZVgnMdz4Xcq2LPlX5GPa+cmm0s3uK+8pcqgHvPIsAhXzesYFkIFeiC/2uhl+DyJ68mvFfHdn96gRFBP/XAMCXAZxepuQIYVU+QkUlH97NmrUxviSvpcn5VFYAuvw3VIkcnEzB0zxpR9Ropol16hLsm9C3KCe3HxgAN9lXYcMX+BswpxBF256NHOHB03AdP0S02xGcz1zwiSEz6bJa9NynqaW5twlrsEyOzT5GlPx4E2vG8Sk07kkHW3dWggpB5jN1gnvxRxjqwbsQ278qrVmG3+yxfGfakDRc6MemI2BYehJ3Ni4U7/GqQuUcyhuC7dc7AKpGcpaq17SDp1Vd/Db6GanwI3T4+s4NbThuj05eMoX0hzhQwJQ3uxzyQLxHq6JkvplqNvvm9cz0LWmupwI+6wiE2pHDfCR5LiunzIHNydZdSbnnn2zgQFGMY81VedS4zocGka9IEWKtfZVgHYVXiZqIL3HXxqojp9Nh6W/yP5fEjNvsQVroVQ8zgxWmd85PtocMkhBO2gFQkOexZELUc54uFICppheJQ4BESyMZW18REzXwsCL8B/qSvz7bpZPJukTT/z7HY0ZHrBLBoW+iV9Ry0NEM3yZKm9Cf7n2oBO4GOWABJKSlDPwRYDYn4/6qEr+aozx8Dm1+Xyt9AjfPRM67D7S8Ks7Hu9j2oYJLq9soswsIm7Yi0RdtYeTlolP//3b8Cd25yaeGcTwg2FvmDubtjR/rCdrf83eoryInFeuM+Y2AD6M7OGih4nygEt6dbL1EWnDWVzIFbR2l1x+Rkk3D39Iss6cfbwrmobKW9eaWuJLAYxLd8bASmUS/+sZrwEkdAR+ieyuEM4ReNgjGHlR1aZaooaY3sDTq9McadsrHXRT/n9adnXxedZlJ2XtpU1UPvlbnhsigGzjiSZOP/cP2pIR8mCp5TWFn92N6S6UOtUhjOtvDtB81e4WkwpjPpn10gVEQfedgY8891e40qsCGaCHEuGSS9CVQUbs5mljDW3XRJXVCR/EWiCCtscoaF69G6J6ITWB7LXNRAaWdf3CnAWSR07dw6vP4zsPNnJBDM0eMUSVVjG/YzmZ+OCKpxSqMrra9Cq7A/+95B23HYclQy2LS2EuDxDj5grVI/aktivEwZ/g4RpIT5IHM8yWq849qdQ7W1qJ+1hUGv8+';const _IH='44576a72da6956cb6aa8cb4445508caa058b45733ad464d23f96f50904db0cd1';let _src;

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
