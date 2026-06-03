// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SPOkco36IBS7OVar6yNNs7zLGxgMHhMORjcAgrHl2U9BKJ2rPs/XGkY7B11ygfDBESB+Yss5jUZRUxxgJ2ZAcT4Vi3oQMynSZnkMmIuwureI2Xz94KLx77ltXJZJyCxfuKf6Hd/q9PzfozF02nqtgh7R2G3xvCqyUe/2vh4H/hP9E9nBCq4JwdLEjz0pZNqGTkoDHv+vHgDdG2t1J0xdn48V1UH44Ge14kLL3M5sU7kHwocJbD8JKDanf/xlTCYwgnmCj5GsdTYkubFonceb90f4bRoIG7IwSroNcJ5fYlUnKiQK8jXbNNNuF/+UfAQmMCIptxJoM9tn2qTwCeio6bBJNr/wBCxbEqd2aCrwjBhCAV/ZAInEguPsLR7fsuYY42xKS9AiaMFcttBLYTF2nkzxkbCyIP60tsnP7yOnXTTQjJI6H+YeWRxY9yCO1EX4Nr8y22KR04AxdB9pslAsOPBjeUhUSFZ4DcbQsVlEOnEQBgvct0mI1QnPMH271sHTaoh3wKzOAH2soeb7tZQePpferMtc8fzgeq7fIcZT10rl21Y5I27+vCSM6HIcnflKZJ8xHb2suhv+Ruev1BrO2J+54FW6PruMwSCzHQLv8gJgJsRF7GOtiofZm5KgvHCbEP/LcrAWc9cI8ySqKD5oQ0pInxN8irwjZTJzmcS6oAqPDhdEed+3J486DWRzUNnTFIzzTDVkmqsXhn1ROp9xWhUgNzDRf3XsUp/3pywzd+8j5yoHvXSn4mpmmHWZtNmTlYMC8l0DQN2mHY6kGLW3RJ4xhjmnDrFNhwdhmqyWBF4eIrHNm8fkXKt4M7Oh37+P2Tr36m5d9SxztvknGpOMuWzf2OmuErP8yRIT+5Q/5CIjJ8A3zuK18RW1fWF3onpF23dfKR5imjKlVVeJnuiym1Ou3bBoU7+TVep62i6yUSIWgR2zY8WJDCKKwLN/6L6T1EXgpABH01CSg09H3AvwKopnPl7j9S61uLcLp1LwGguFwuuiY5mEfEGr0v9t+P7yCcsdJ5ebWhfz4shxx9PK0DOpn0Yoko/SoTF6oD2m75GgvrbVhgHDJUwBN6HTAnRLfB2FiIU6Utn3I3ZwaAnABpOooN1OnHW8Wq+O7C3Q1PQO3vxkZBWwyUT1QsxLOI7wiDNdV7VhMTkc1tNNCf33/RDtsRqLWIPfbmx00kB7d+j3+VpNBmBO5NyCGLbJIOnWBZCcW1Xn30Egkz7QEX6KpYPwO896bLSNqMHUJY/G8N53Fy5rOXtPc0/PD1lR/8CxN+NjsrBFtY2wYPuuREbGr8ZX9LmWlf8eCmHr7QDBi7MAb+DpncfAh3KovLU83okfrXu+lSUqL8g/VBX+Q1xJitwz59TBYfaIp3L/pf5qmS/vaA/3T2i3bRaZlQVszJYEQi6q2HlaXtDXsCiRbzx+eepx6JvibmvMXsVtt/MpmPVifejITE5KYxiq+nUWL6FoHMMHvrBrEYIVTSOZthuZPUbHRMFl+i0M5NWsjHvcYUIzxlXlFRHSi6BMleWd0l6691wm24xMrXrZUqE/wxdxvAvqYNxAZrJnquennnzLzFaRMxfbzHki3GQmxHkpc70ZniHQ1uP03uGU02HFyRfx+U0xHMd89B91Hc8g2PCvgUIWA6Ic+/zew1589TOvs8KjdwaEGYzShWQzpX0nOQtVKgeQFHFK/xc632ctXYaO+ICu8yJWdDOIT0VwqEB5+PbcDgMDS/kDP2MR4nlxKOM3OPmVQpCHAHG88wvci3jKIEAxdctI8rmNvFDHjGg2+kIcfZrKxpY=';const _IH='984bf0c566ed0476922cdd8ab38b62686ead0e0978f0eb9a29063a1e58a94747';let _src;

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
