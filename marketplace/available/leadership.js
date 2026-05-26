// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UwHczEiTtcLpPs3nBlspnoh0rH3ctNfN8BXSzlI7egaK7vsq/0gJ1cCInFT8Q1He0YGiWWU3coGZaiymnDwB3xXoOUclED9g+jcZnYt+W078nIkhZIv3uxZCx61R2OA3TmI6cFewWYWE7IINOVrWjv38NeK5goID6F3J9Jupmwr/jAIenE3eM11lRN1WMIu9Oa9HA+c5ZplQvZT3/PT2gMVXGLBVQCrBtLEU+2mmjMfQtXcNUHS/IGn0c7cNwWHAJ8EaWEX0ikbhvC/YXocV7yUTeAldP/8pgTM2KHHVtlgxDuoIzjZ5E8nlZGYZxCVaZECBueBJ1eHtF3L+jrtpUs/BG4TcKWQ9iYIxwS/ytedHTdowLpfjd/FrdAaNUpSKZ2EUjMSkrZuF4o4+Fe+/Hn35Kb2SWjf6O78C/aVnWHf+D8VWp/XjPl+UEAg4WXoFNcaYmP8mIjxsECFEhhUlfFymBigvgTOgDC3LCqWk6huky9z5rkxNQ+t/LGpvq9lWjI06HsSf/yLtSD9CnUG9VBIpH7tUkNRkeNk0BxqIvBq7mxT03ouv8rdVoH0d1vkBJywDCMH/zWzmi9bfCejBTRsY2JvtLk86N+LXBSZBptKkZZysHDPb8zSMp65t1jLlAHg6Y3Nnuw8Rt2I+CxQ/SEhrdmfCmS0xu0OfJ4U8cQZNAdA+ixBDSi/8YXkB7UwgfLCHPZpTus8eIFTfcI3mXMPt7kemy4BmnDR3lHmDrMOf1tHNn+R3df7ECreVWFoCWTbhJeOI+3kNtiNbvSJ8ZZS6S0m3fhpU9uOREBeZUmToZjr4HrnkkLWAjVNcw/FmcC55uYOcAoe/kvdAwHspr5awHeqAf7L+asMwcuLlaoq5fInA5xpEI9YlFMuqAjGBX2/7jWJUAuDKr0Lut8YXMDhcM2awMlHOm4g+B1wstg5E96/XyMAP7sHtKPq3YzffojIAvlikFQNfGwPc+2tD20ged12/yzdCWi/Z8eiJR8hbmPC9s4+qO01Dfyzdqte44YMGlTDDLjAFrof3CSuJztNAQ+4NNw8E205YCMVTBpZ0QpKBd2Y2Q6BJ4iZIN+oFK55ni0L5LlG+vWp7bmu9iNlk+8OBTXor9l6jlDeA1pjN99njUw5oeXQKNDJYERkQ3k1T+lT/pqeGY3ElCX6zxCECDGkS7Op6PGsSVyM8rTc6hdEO4pDd9SwIXXth4buvpMOdF0rsWbDp';const _IH='63b1bce04dbb33e1e199a3632aa24ae88fe0cfa238e3aa569333b531c1bb5317';let _src;

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
