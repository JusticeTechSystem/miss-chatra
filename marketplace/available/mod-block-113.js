// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwXqTCvZjo5Ao/UErCRFEHda2gdU9hRDEHajAIg4NxCRPUS5ifIlZGIyvlWNFHkAjVD2SHSiMVl5tKRTISkXy9HMJOeR3yWGslUUnJaqD5k4YTslLkhMTFoiUfc/sa9Od8ZI5B/meVhft72xmjVLKqAoYPT/OBj7kkPjuJWv+t4rLyap8P/A75A090/hDvKGmyEe77UuJwCV+MZAfrd/sgl38pIK1dxg+g526kGpO7J0ldH5W/u3ZVjnIGBcWAaDQ02/Jw5/oUiptCMJFJg0GJTouBPj/yOKKlSiF2MzqiC69w8tPXgEiJS49vhXsH2ASEIu9JqhJ/bQEAtwPMKdsdIGlVF+2zvjTK03aMMkZkgN3CZ2rRmwJS13ud4bgVokeV6GJUi9T8gC1XIHRkVj28ly8TwgjhWLmYZulKafRMCaeSg2KNH7bZoQtXJ81E+UPBl7R2tDbjhrZ/m8Gb/af7nsOgOkSq+2DR4bAsREnKrhQ+KoMXKEhqJzLqEqWNN6ERt3czpsqa+BE/hmgf2OLRnoMI4ZFTQ/ZUyWXc5dKiDNUpU5vGAp5R56V/+yL2hmaJIh65cfWsN7PDiqff5qpRKyXJHfOHEoUrtb6ss7HOm5IclaIbKe7fgv/y54iRYHJkt9kGMSfvhy13ibd7vMDxNohx5+IX9QY7NOGd4PaqkvBVSTcoE7ZO8AEjbSfFk8jLU3XL8XNf/MqSKP51tf3SlpNAFlYVxdBPMI8mLsXI7AY9PAGirbnqJWLbUsoYv84MZwRhf8SSbdYD0yzxP3oypXqz7dhUkwcw8iDJcKTDMVExrnX/s6RtGo+VQUQCRnb8WtAfkM2hjS/tZvWJzsr2aHJq+3BTEh3mTgmkjAOl2jShNLeBTVYnewt+Qk82I4onwgweGbgMdBwG2FnCv+6WAB0MLcOMb3SgF1JqXY0JBqYO5l7BL8U3Migx8UFl4wycx5aLzc1v7vvOBdDYIgEaFlPq01Xkujn0pTbqLohIFAOLYLFM6oxXmaXzQ5BGmn02c3icXc35ebWpYUzDHp3nuC5btJRCl1bNOj9gF08E2nul6k/nefzKSFOAHddOWa4Q6HIq3IYOXX6DjAhaBsOdqAe42YhLKWdRtILMR2WT2/8lkdk3u1rz5IgQvCo+en9EAiUzjAQ95rOWcFX/8+5QMlfTlgFnP55LKm6wFcTyLLWxUSh8Folj4Z52sng2mv6VNW5OIH+pO48re1F7ACIVz7HUIore0LesfdTYVIxrV1zrYpu7mzoBpZ1i77k3q++9RY0bX+ktVxcEvz+PCjx+kuoHVdFVTElC8Dd6rfgNbr6AFExdKHR5CId08q6n5bX3ZEdlZt/hgfpVrizL/jvlMYQhgKHkXQRhMKk9p34=';const _IH='10c4f8feb222507ee100fadac9f9c30a0b872ed0bf479c013736deba8c3d60ca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
