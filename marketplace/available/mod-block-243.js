// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='96eoyVHLydv6gwtVBgukpZkYR38Jdt1DcUiO/khDJHF6wPQAqDKhR9G4X7OUR5lolE7gjxKFPJQv/Km2yIqhaAh1iibw2znfl3EYxrlogNEG1bck5hDsW2ufoZnSbNICPQ6tFw79Caa2WsyYw8UruOccprAYLgXTgiXasn6e54Ch+04QhM4/y/xVo88F2wKJoN1iL2DBCnPXIzvpJssyg0qLQ2mb/u/c6wQ4Bdn+0EKFUyPMIw71HY7t2Q2Z6k5UW2E4wQDxwpJjofMQdE4to0wg17R8SUHYmEl0U0X4Mh3lNNlgXqSBjaEwQiz/I1oX6QE7yBWR9MOdZo756XtpWB0aHrCui4tOkQuFKd3xtBmDezXmteQfG+RVRU5DJOZvvjKulh+OtF8Joq+5Cw64qbqQwBT1AIjl+Lqaxfu69bWl/OaGyGAo/Pfe83EZ5mfuMZtmyOJwJMT6/xzvFSQqNoAbG9h1qjoIy5P75YkctRV8IRldb0RR/JFeNaI5zUz/ObDp0aHou9TN5yR3K4fNvYmBM93bemkxbroKe6sZJOlVwUiXWloz6/DtVHGhIBwyUr/foYDEv0sS8e4QUg4PFR7WnKXqHfhp2nEDtbFHAqbv2G89CL5W3DB0tWekwctARuZImsZ8oEd47F79MRvf4Ko6XAlC8Nh7slJo9thsu2tgFz1AA5h+gQ/Xu62vQtKpfxCylCTn+LyWfBy2rsY+Ds73ARxlBlYFWZNC3tz/oah1suV6trOzQPloPYMAjU5halNRMg+DJv3JgUUJyP8F6DjSBHyIL18Yar4YssS3cZo+5eFwCMeaW0jzhWDlLPnqnFYo1U8prWX3+WzMS0fDHHckTnV5s2umoEYb0bW73JT+gCVW1A++NJcihAHPtvToLud2xzhbZoqV8e0Ue44Yc3av38SJvNx67xZWvkuVkyrSZRdb5vU6AQFIUY7aP0P3CwCWIGiAIJpfLupxoHuhzRf1gPc0UuSD2rlx2LRVrwcsF7H05Ok1zBnJwc3uH3cknRNF2EmPXlU/sUV/qKKwPKOKfnUk28M70agTEuhA0JBq8YEkxkpijdBwX5ySFLZtj/BUu1uwbDmtx7XsiEIR3awNk/TgJMf/iL7PH5pxJ409rrNzWC5tG1+Qu9buyFLf444PZuBu0G7VYfRk33ckjcg/qw7f6Zaf/Ifean6O24FLwjgQOitJEQMGTvd3JWJPvUWkC3wjdS25j/QJGUgpDfWy5FcarAU9xRdLEBvL9AVOZg/MCPjTYhq/frCZHv7jsaeyQPWLm8wxUs3ckkHgqxo/PXzFmgKSEpr/2bXPKBBv8ZkxsS68s3AAoMLYpu6l3xaa/+vPPhS4ntSpHwB3TjU0CGidug5IvWYKdSVo';const _IH='f8821473f786150f6d5cf4c41db4bcdda281caa4581809074c64de5cb609237c';let _src;

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
