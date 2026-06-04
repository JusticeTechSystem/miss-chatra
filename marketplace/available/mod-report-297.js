// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YKbuEnyLBZfh0iP7LaP/yQVgvKwHzpxZ/Qaq1Fi+ndLqkbZo4lvIeGBf/281+mRLBk7+vHtMsVOe6UPJm87PL+bv3g1KM3X7Bju8Cs/4Jutr0SDCiRWgTe5gzOAiNsgcnroy8H+zDyQYZtxL9qYVhUC9WtLwN++iq6sd5Yaglo00K/JbRI8R7jaL+yn2Q1Hjy5tkSlisP934xVwR4eORvqVq3IU3BN5KEfV29COihP/l9xBM1RquYWH86m1XMV5dPdXT2OA4BAvVVkFKce6LVQuEQ7ocTMw8KZfPSRe19cIYIWR6rRxVt6UQF6J6hEYrx4j44r2oadLyoOSAt56aZ5O+r2Wu42z34D+vA5YwpsKNISClzreQH/XvQKgaK9utEShdtfd/KRLcZrKJ8uL8SR2QVcaxVu+9YnrN0bnbYWNF9lLHrKkoAmtbB0HprGFHueVQMH54XHfGzjyTB8ThV5jRyIH34R9pABisfj5qKe7KSp3z+dZBQ7ImZn9XnH2URyBoOu6H6tnZ6K/SIdr0AwMRNwl9JS14RihikuH/jntCejg3uV+EqhLu8bsHL4RB84sZEIXvjTuFS9U6EINQ+KiMB6ftLuw6qs0WerCBOvn26Ye3+JHBmfyur8DaCYtF7RxkJp3hIcW7IwN2HGDjPZX1sQ1xoLpXU+DlxwL60Yln1IZYR18G8SuZ66s8/oQViExuedmUW9urKsF7UkJnOIT0KkhuGOs3kcziA72152ZzbZcKNjeb4mxg8oXjeFgzWaLKYu4TukVt85gb/EKCLPyt5hfI5krrvM9Xc3ynFTURdTo4fo1tHkPcfzHsGLqlBoOLLKPBboRs/dwRSnh9FO0SDR5oifDTU1TlyJtCr/wYKwBDBcnQV+nra0YY0QfHHxaUqhcv5k+KPSZWJ+dhkWpdMJNbkeF6CjtibNuH2z4MGHE0L40bMTb5JR+Fis3QAS6+WXk7TAKFJ0sLVb1Zdf90Dv2IbicG/Db+Z6cYGzvMcXgrDnG3WAQBPpDuxZ8Q5V4Oz/0sxQSCEukAbDJgmY0gjJq/7vsrLBCk7hiUOTu7tbf0A0f5VGbhekpzLqvCSVTazNeKLirLwKELxTuBSiFM4r3y4Ty9fVqPLio8B0huDAY3mRzatG7rJDVkDAtkmnZwSte96AycWWF4O1GssWDVDn7/XYLLQaX2G2E935GhcOzikGXO8toYHO8EnQe3Gs3v2QvXOh1irD5UqSRQgwU1xbd3YtpIhzGEAJ0LNWE7bC9Ez4dtXntFZAhKdz2LyzCvHHZFkbdq874J4NORP1zbCsxuSEV4qPWflwYhigNMRn4ATrKK5/1WwAQq4D+Aj0WrJn6HPp7AlcW6ZmVFSrDz/jJS4K8VOxqXXrB+SAqdlqtra4/npQ==';const _IH='e21dcc927a633ed332073d08f2415e68e3411ee8275b360fa00c6316b138b671';let _src;

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
