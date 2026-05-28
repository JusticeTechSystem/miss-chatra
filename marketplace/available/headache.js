// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w4ok6G5ovs287SxW815ecv0Dy54QFVV96EdPod5ZMA00f0nzOdVw/yIJXt7r6iCXtXHZbgCZ8GP4r7TyD9QaR7wBb6cAC5XflgUNk+htGXiq4Vf1So25ZOxTWdpA26Nyc+mnR7CfWqwPA+bJhKmz53uDxY24hL4GC14B9VESqj5aOYph1P9q7NNQQha7oXCkjnLa4Hr78yCU/lmR7iDVnF4dP9vguu1cQXH3GKrNDRObOowMcDRD6wem1nJSOxqaQEh+HwsYhJr5+m2FZqfs6xDlwsBQBR/YDnSSSIE2K4oCq6Laisoy4hCqMgRriDryi5O9PLgnGyWLhxxjSZ8L6NX3+tpIw0mU8wo79Ca1f5p4p2q7yV5l/A8+aypTRJurnnyHagnO+gvZ2Gig3pP3l1BYwytOWb7B4iLAP5I2NY/g+tJw31pYQcJcx+yH7cUWI2zf2ggqNWL2unC3HGufNdNaY7VSLoCMN97ottDXBW2KpR+7HN5+q4pIR05rHi6N35y6cY7FdLZr43/UjFS+rEzIIjp5gjDS/uEN6uuwXuTYWGFyL+kp/K2fpS4uuTPdNVQk/1K8MNgEt6tg1jOPUSsuQHqpxayRZUTEppUd5ExCGS4GlFCcTua0r0IKl1d9KfAaZWbRo+fvg4K1K2pN66neJZwlTyVbs8aVOqh97E0HqG1PjeWntRR9BMYQkV4OBRoJiYDQvvNvEkLCsHrJxWpszW2IlJ++G2bSGb96J2lRIZtnBAbieYx9/CznvM2Y+8ptOXFEb22JUFwifz1Y9EcbwiyMa3sIOEtSUuKcFou4snid1TkJtf911KGBeoVse9L5/Mo51j04lSUowiKPY15w8kmv7veGtUzVTgDXWt8b2IvcmvUO/ZW7quxqWJMYeXrstHtuH9XneE2DBKgXDbicESMRNC3IDHACF9rt9IsCennxCqzJEPLZP36Jo7gL75xhClqJjDUT5OIToRgQbyjtp9BCJ6p/SXWaO0NXs2qqGuAKo0G0fGrQzJs8IWpAJSGYiuA+kyoLIEB9H7x/3NNqItszc7x6KM+Ln6ZBX0QGAvs7Ne876VNIDJCxaiv+BIYRJGIfVlf/LzntPlRH+3iZHX62fBDQEqiuDZw6AMZKXyEnleXrPKUD3FoTXx+Cz6Yf33YBrfyMM4PiFC9Uz1lbUQ+RRYo9Q5XWEHKEiud8DswVqi38ToL3Vs2d1Nl6KpmPN3c=';const _IH='d39d950426a6ac72c0af3a8ae751bc89442539928b7767e7c0e6a5ce6c51f183';let _src;

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
