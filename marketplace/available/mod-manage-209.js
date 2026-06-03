// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ewzjplNDRpEMQVnggpEeh1Ri5EHldNIxoGb6tRu6LgZG1HEzusOxPkYzF+YcGrB72UnXkL23LfXKigqV/Kz/z4pJKsNpPycagVHWDem0faCJFJA2c1DE6nKj8i5DejR2hARuKxvN9/qK9TRLnPF+991bsKdWvt6NJaXcojVfIODeG+GFWWQySRclkcWE/bfmXM29We67yFDWKeBU6/ULr1UV+UbWdEZ2O99sICw7hr54aTjL2jpVll47LmcVa71y+O/quSwUOTLrnUd2yJw0D8tVlJY9sXSrnf1W/HCrk38mOTAymzezapZ2lh0hgwcOlvaDEYl6eE816aFdDswCUTuA2+jCyPC+EM6aB3dmJYFw+TTZ9aKWLLV8uQaLg5uMuC107rFHQdR31n10D34OfdqQiVSktPRJKQHxtDP3nGL02z858YVvSpMmNNqBeVq9oQOJdx7xbL0dMzBpOybj5lgzBKyVHirAsI06ldW+V+LGoNEKCiMst7lcqfi3ibPa9QrVZ+E+iShDj0aSymFT5JEeAEqpdoRrXMOfILNQBesTo8OpNxJ2yUYsZ8s77grAwE9mvgR3zWTjapK8XMhO4qJGZZvzXM6kEHr+ST3yHgpdhJ2UKNV7wnG1V5uw1jG6MOuZmZYWVY689vNUz31NbF0YzuBCKRSQjL2LyIIIxzh4jSpJazABa+oyeON8qcF4prRnQYnT681sGiymUJlGoxK2cjsJJiHW4F5XUuHw2Q5Fexyf/RH7EcGw+0Wrj3cBmci0RaOm7kU+CPJwe+TgnOLnb3WA1vZmQH26LXBmbBw6o374Y8T4lUSPYDRj5Y/7XVgJc+wNpGRs5h01N1WzzKGXAfTY1a3WbNS4omuCzodAB2AyXUn9BQDk1ZJndJGpP1t21X3aeQX0jltPWqaS49sIos69UiQhZDYkcYBqZcgC0Oeq0xbROiKMkHQEHW+6WPY6DCOXlpeFXOLupkyBYsTuglEYGnkbz+sUcw9+HrZpBqt+Ea3zl7RHLn7rYiGwGz1TFbuuoMmVvqORj+O6Yl90qHdrKnAXedj2T2/4EjtkW8GiXSVIXHn5hWgyiQXkjO5lYKL+ddyeGS7OaESq21yI7MJE+rjU4MtgHHJnO+pZHiNqnzKOoq0pn+L5A8u/+YZ0SJDkqbS+mMJIP6aFLCmuJ5b0S+9iXE2MgKbfcyd9nKBvfaO8rK36zDYWaV4pJpkx1qoqfyZvBZmiYsVa4zaGIjzzN3vr23mIbMWTuOKY/EEMcDLBufcPAOaPoB0agOEDAVe+noZ9t5GWE5zMbMgq9xs9oUASgJ3/kVbZjTMpgaJAz2qeAE6awwqde6HGWAb0n2mU7Q1DGNG5UVCyLFimpiRbtOq9804Ze2mt7mLHUCmoEuhnBg==';const _IH='99c4c6383eed4abb67555fef47caad9c9a0987c9fc0d73de2910592908cc7b4d';let _src;

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
