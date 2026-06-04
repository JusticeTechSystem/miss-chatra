// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ObFp5GOf7yf4mQjCuhsmJl9OsbxftttVsJsR4HlqySeJsxwfwuyfxzWltxGf7stWwTYckqVc85qPgVfoyUnV7qmzzujrbvKexT1LqUq9Y0ttUIg6UOgtsXHHBQt4pMX4Yf+O7GsK5k584jquRC/bJipGQY2UVSUV6A+8d9MraUqDkWy2PlmzwgrH9riUWc20J/RoWMNIlVx1JlJzF4IeMqSCkv1ZZSvEyxqeon/M8nheLQ8kd2x09q1H2ntvAAyeP09k0LMy0LIg/DIXn1+nJzM4t8wl5KrDDhJLSiXqNzoXC+gG6y2qWy5pl1HjTanx0wbvVJT/BR5Ol8mq6vZ9XLQZSej3tOG/AVtfmGuWW/1Im4WFKWQwXYGeBAS6A/bkDXQ+Kah4YAI9ck3xv4eDYzKKU/LiYiL7zGfE0myNCQ1z8WfK+/DM3lDbGtmz1O7ZwgpftCSIQPdKo36hNUB0VvsCMqIg1Yf3a+iuOSX4zpfPiuHeOo/juw2BvDIczulSmO5nmz100BuU4QAWSpAouAtss7v6kOaDs0LWNckW5m+xE2DktaOoBr3mTFgoHO7yQhdTQCvukCfD+AjFIcoXbNnMN3Z+v8j/+mNxu9ghVW451Kyz/VI5JB1QASH3PA+GB4JMuyXmDKpRWZ67C1xFG161gXv2b7sfggP03eo/zYGz+qSYl608e0hf0zyJGkACOixJp4cjHZYmbo5QvdncV3SCgNLLYXQ7g/Vklihbtx2o88HSTGUjVovpAwx5StT69HETK+KWIuFXw5uD3Lrcttv21pDBAL4l5kPEA0fTCVCMbM++VX34DXfCtLWxXlJ/7R1KtuA+KoCJrkVYCEkm7C0BtlF5yU2W8GrdmHrpB/HPFCcS5yUuxrISr19bgy2YFkdgosN+slGffoB8o1v+yQ0DlFzHLZW1rtdZ5RkVW9VptY1d6d35giLPdAV2Nl8JEeKELufC9OIfEVimM7wIlBHROpHrmbS6ku9q6GDXLi0RZtBlOi9APZ/Yjl8vhF56DWOddsOUnS53mIOf9lVuY6A8ns0eDR1M5SHs9OfZrISz2lDAY2CQPRKXx1sAJGHPT//JWr2XHRJRgrhAhWjgALwpbDaHl3QjkTjdsQJYPtYWRtgQIrR2pweZOS5t9/E7dlCGL/uccm7I+XTO2IoPBDMyiRY4pnj2Kvlsd0tcXPp7ZLLVVGAgHSL8VWSVw+RLxBZi+nFi0kbBJrJ+17HTIiS6M4SBFiTErzncJmgLZbxPZAgYJwUI/Tzn4j8qZuKoah9I05GB/OPwPB7xgOIU9Y1jLfWbH8bH21HDfOMOPvAA1PtyFlmUKlqQiGoN/EqT8I2MncWX/gIeVro0qDPm82uNshk5L40BC/9f8gAo';const _IH='84011fc60ea2b3053233285a0f05d18f20d86dbdc59839e947e58d99a512f3d4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
