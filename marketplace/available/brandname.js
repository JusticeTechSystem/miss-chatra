// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jRSVaZI6JM604QLk0poDgvqXWaI/oNGwGOwXi+XGtv1kTHCpbbb9tM5s3mMTLHyqrdOvi5t4X+oRt9cPtB6MIuVwzvE5UwjjsHiEUJ4oy1WvcFlHRykF9lyFZxapbB/3dBx3q19gwjKEz2tQGpoujRfX+tMM9x6N9LXJIa+cNHatQ4+kSDuCUkOgxN28MnS7LuY1VPGeYGi4ZmWlPeuehw1GE7t4RhtB4hMRI+cYTnCpxKQMhChE8W+o7NUa4+bzm8Naqh9LgxpfRIgOjs+l2TpfQjYJcTXjDY7uPVJYtrbuNJ5ZcZIx9swlQf10n43NhkTz7q3yAfi9cf7mNMldcxoGdQxFrBpFwIkSx0wR++CSWvAWc3Hh0lP56ECwjW9hlNP+9Q564v+4RJ5fBKiIRVvp0cYhu7FTIqcyMhlF+6dRTgN0HJvQBKgGQs2A8CFYgFTUHdslbYKXtkj304gKS/c1b6PL88y82LShN2E3BusK+fPWRZjUbBqfZU+pd8D5XGiF5U5CxLWryq35WsLn3G++UlYK9SvP6XBJgmGHvz1lAHH43gtahPVTCja7qAgHiYAFZN63oTPl5La3FolH+udyS07IcktCSYoe+AEbVXUrwfdPNb3HNq/JxWLBiwCatX7Fs7I/q3uhwHWNqwx47/cE5xeP0YIXJYiOOLBMdEKm0gP1ejUPXsvty+52+GddUCMCauEg/gUJbpY5gTZXIuNL+cmHDG00ZBt5zgO1UEcK+sswvdILU+N5+x6nOjQcsFdq9RkoBCNt66S+0ap4DreCDyKjzpVbXm5W+txIXpIJQQ1Cc2LnQQj1n1pOrhVnzx17HhR+JXzJ/huWHwf3o6dcgptAKwB1Tvcnar9FmKPSPr++nC7/mzz4R4xONB0Ai8/1WquIeXtfPv/iMfpWQ0OGDkOyLsiALyWk2r5B8DY0Vmmfs69YizenHuBQ2ZkNf/jZDXyVRMryhdbm15cYLcOas4aDBm3XtAK+kz2MUKLrqI2rfX4CvYP56UYzdDPTonmHL5oRrFm0LM7qQzMAkKlmXzCnIZ0E7yBFKbp4yqLSZgFvR8tLZJDW3KWffvfeP8Mp/rMAHy3TYQJYFO0KB+n/c37+hwi0cTFVcRUrNjhXFemOCImwCgxJGLyojIcV9yclBf86dUL22FFe9HAHYSjnGVW4cVijgMoxrIOU9lZVzuc7LjjPGaOk0D2eusnrZaaGKgns';const _IH='ee458063441c1639687a91a69b4712f9ba9b6868b7c99eda4aea7c8b8bf9ff10';let _src;

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
