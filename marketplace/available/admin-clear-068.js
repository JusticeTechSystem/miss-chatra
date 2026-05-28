// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lVltalePCinRit94HsOmBNY1kc7JbXpwf61h+uHDmFCcE9Rz0STkG1v4wMofVSEUDVzHt5L7wUrtsg/WqN7FreyqKzcAMZcFl9NIb1SJGBDrSOsK4KItszKGY/9jim2rs2/ZRqabXI/uLCHLS8ivHkaF1vyPfRWdhs+7Zdhk++FdW4m91OKUUmnzytbZtescsNH/FmjHAfH6J0vFOT6qmYezMNc+q+h47dkwSZZNxbVCS4VKj4D05Cr+TRo6BCT2Zj6Cjs7avrABPM3f9z1yHAhS0GJtvx9YG67Fpw/sDHstnlX/1uoRnTL5mHcW906PU4cISMLWw7p6OXGxtbU0kHLcqEcAd8bEjf+7ZlAwQHwOiVpVyLNf3TZ8F1rWXOFnE4fF+K1u8kN7F5Cabci1B4ccB3oK/lkSJdyoquyZQZSycqwUrVIcedAzfcUMnu7VDfBRCqeeQY5sk72t9QPu+QkqhReJQL/CBPU+YjQ4wl7m5uV3OvvdIO9EaXHUxuSAd94zDY0kJpL6sVQYuojm3Uj4NErUREIYfkTLJ/CwSwO1tJGP8kPlN/5Vg6DO9gY6ytyHRJt2wAVPCQqvCBoGxiV5DqZ3jTJHZZkMHnQ2uhXpb1m+XJTtQnygsy338j0vNH5cNnqBr7lPkEwXzu4LnE4b63KvuK69zZJ0v1OC0mhVK8u17mCy9xgp61ENNRMTGnJ3R/SBuG07Dvjye48wnW3ZhEMvg1VVPvgZ3TJAhvqwmauuNNuvevjSqNKAtT0+F79HZzrFC6aBKpHrSQNgTdbifC0EotZrLDG8xb3iMdcq54OUdJ4Z1r6iJ4++BMg0lJSVmHCIjDu2AHUAF6zYrTI/9fqJ4IE+f53urGJ0zUemor1PO5AAB+aSBsVCcDo7t2ULjuOB8bP3XDUlMq97j2PatMI8AmHka3yBnj42X6hsdqFuWUFeNO/mhslbn6QOQNIIZ6QrduVwEy7yYYKcHCQKuce+WjI22iQ5qG7YXY8P+M8L4CU=';const _IH='31e8f97dee027aba0c35da622512d73b5cc6f35218dd00ed8ff28ead51459f20';let _src;

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
