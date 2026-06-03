// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DbtIBob8qEvHYAP8Y5cMSfYQ76ePp8TZBbF0aOhpp/npWQQ4swlG8Ggj+l/XOyFnF7lhTaYZsJ11/89nJ45aHVDmGb+7d13B+NQ9dG28t+Yb2Eeyla11xkdBa7GZBfoWq7a9bE1JfB365Zf4XF0PYFH/iGNYiK0JiPQVlDg+aggu4ZfLegWt0AWrQEuYUN1NPujRJSwmX5CvO00nRFJjP8IkIpG05MJkehj5IP5Mx+zwuSnUAY6fak5HM+pSSrwg1cqKk5DX0rVXLc2ztHLfPwxuycpGMF9QZ4MEU3iBl2rVKW2nroR6uZjCh3g+crU62RhPpjtREcar/zkjvUr6owPp5zJO/bX6snNQI5/t2QT0uz5V355b767I6+gnw21LKCRBz4rS/hDWTSOVypNG+o1QfCI4erZTh1VyacwL/pV2uw0PsoTaFpCACq728UQ+mSSfYXUp3zWXlWaYtoNQ/Sa9oRCThGnXOFjVLBPX18UdXGtvz6axhnUC5jxZ5VVA/u9gk5xCudDlLgs78/EK4FqBC9IddF/+op/xaDgeGaDhUw2t7+ZvCE+BigY50U9nPW5kUbGV2qCfMUsJ9YxG/fVz/0wlhoj97Q3CWgWLcIU/REnqlZKtG5r4vzIDvIxNlInwfMzjUMDsBxr9d7b0cHlzg6fkWyPVwlB6Gp/09+PgjoDWfOSZh1XP0trs90G9TVaW1XNFrzCeSfSwaaBMk2VQ+4h53wcChWs0ffL2YOPHGS7cpKFVsxxTm6zUbz23hY/s6HNK42JZ8H6XxGXsRce/JmCCukjv5p6r3LuWPwIWugQDlZhPU7K0HKUDdR7V934llCJD7Mi/475vaK5YsEwaVdIMCbX0+tENqPMq5kyrjXrqI+gESmPLh4V2PMNMOfcJSUGAhnWgWAxnBGBoARAIoyeInX1/8D3SnEIUz1fhiBfbv4iw8w==';const _IH='dbed1f762ba575149e7800c0af5f6032ac667f9c058e1d028ec354ed24638791';let _src;

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
