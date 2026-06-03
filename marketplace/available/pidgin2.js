// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZeRkFp84JYq58y7DsDw7kuzYrA7u5DN/J6xij9N1vDzVQshQ6ece9JjK82VTPbM2TWrmd5HRVBqMhCyXgNynDxAfypW9VoSG+x/njzO2IoJubs8SrPNi9VW8zbumwNPefNWoSwi7eLPJvcZtZC4jtg43iVdK/DOPTOGWHRWRPqBr7gyezJyGyCRoILF9bX+wvbvlQXeEvV7yHDSU8jqFJ1IhexbODRsvXWUaTEsqWlm70JRKD1iBfsLQe9RA9pbUr3gwB7PLRxaCS7/xrGLiQRNgxkSl7hTVNDO2ZDVr4DIhe9vnvaYkPauxtTc9QcmPhihWHzb0Go415hcms4QjbAmRzSeCN+tTQhmC+SWBbhs4DFlXdsEnPOmxRh1NZ/1QLnWALe4oQ17VyTH5Gk+MJxjh+z78An+wyRVatwWJZwsPJbnn1yg9EJ13Zz9pjijboQzAGSo27BwIEz7XbDgIPZQcmr1K5MDTJD8qOqiX2LtStRyEhsU+ItKQDSw6TZXdaWBZNFDHayBgnWT6onwhwGEogiPZ3zLVwdpbp99LvXf0rzou9IhtxLQ97sWYNcBs7fZwBfXmUrR/IR1BoBbRUQ9MSYXJVqcK04yWqtOc+6poEhN4ZIp+u/ANIK/k/jeiQGDO+xckDtIiKBCxiiItPF6FHLvQeUYvO0vP56A0Lf5QHkgrE/G0i5BqYgx22tiQbBSd+JNZucjwTHnMOxYeRqkPEnD9KPBYaGDlQr/k44mH4+k5CvewDYOM/xKqGWMVIsJt6VF6hjK9mZxtveOSq5LsIauAXrtLV4hmw99L/sBmUqlxsmtOK3VIqXxNi3hPd+02yBlsb2UME8porcP1pINuxjKBXN09tG8DaFFAZkbxMEm1UO0cw2cq4LLvwP2fswWQahwXJybST/VRZiuLX8o64SQUuF37dM3CbuIP08o8ScZGTdMySWAKnKDWae9QBlThN3WwOkMB3kslUhBLSgACaN0Za9G8kw6QFvzY2uTQ4omGIre23Zd7MnF8Kn0KYUeZInt6WBBhQFTO9yDAsPbv4YGFeeVdmuiPDDHzijhNafkHLJdd1qsot14DaJAXovQM50x0XYobFM6LfNOwrQVl436qd7DVZxL3dLXubFR6C0Hy6nvFI34bn1TWEOnFNagmfV7zgQyMU0+a47vvjVDdbUYBH4eDJtg+6153hBV79qsIRjN3OA8J38YwSw==';const _IH='646058b881bee4f9d744e0052a49848a0d897ae6bf21fa5a26e38194bb473fda';let _src;

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
