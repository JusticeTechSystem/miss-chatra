// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TXRxwCsjRM+yTt8GVUTukR67UzWFPgH7trzfPQA5eyM+7UzZaee1YE+buhmtppOnPwA/1rMQtNbRb1JRMm1dBJi+1GV3wiSKlMpOcX+knggYASq2HrAxUEeW49IzD1qgSL7oiCPBJMngMSjoYHKbLVQHMwEEpTbHkvm8N1WJ0G4HseIXvrebUYYwrLzRnz/PCppyJCJ/O9wx8Im9PxDAbSy3DctM4dxrGk2Niv7EwjKGxNUiDqDnOYWHKn0YhxlouUw1YU005nvoJW9qBRF2SwPvFnIKQnusBgyrzhOP4e2qCVVag15ltc7rBLg5q2JX7K9GxdayiM7lTLtu3Pywn1VVevwcZJ0Sz+HAPIwBPgFSxKk0inQv0bCRYxh8rsNqeBltjoXMWaYYM24VCGJUpYPtbMWgX+o4tkleMOpxjpIgMaZY+yPmR/7xvyxhRjH6pxpEZ6qDzpqNPA66toe28nBABiAe80zy/sHPYgQ9YEHPI1x7CEfNGeZBGbFE5PuI+DC9uNyXJSDf34vLoQ6DZ8VQgxqkY0/DsX+fXPyCfR53YQVv2LlHYnfqzeE3QMK4KwqWNCczJ4gOIXZ9lCyWYuH02H2YqyokERCAVCfrE5dPmewXwE1Iqt+lYoEJnBe6BmpwJK2JZ5udOvLclHRBNm0ItqgQmiRE77hGFjm2Q/qBsVbJGVdZfMednS2HU92BEXkUQA6oPAQDM4BJh9pDKV2bxSD3WPH62j3WaSyS8dlvARB1ktilEm+WowsNxFuJChdcOEkUIiJvMsurDhGrk4fz5SuGHmk1PNOWTn1qaD3uL8Rj9KtwPjFHAe2mMrwfLnkkwIBySYfolBDw9H7WxZXue/eAW9t2iu7oDDhMP72ov8J788BBBbQmckVRpq2fRE98GebvlGMYTNhk2GRGBFVPNJPNBNanyLStRDgJc5cuht7PKKhGnz+cdok6c9ctGt6vNrsYtF1m+/0yC3EIvGA4G7+AhG5eGzHbXlPk08hTMWiPeJnzQL0k0gnBYlKTcL31OvxeyWpTuMLEu4YVDRoF';const _IH='00b7750ec9eaf644d5bec421bb61d42ad1a9c87733f40444137cd5eed20efbcd';let _src;

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
