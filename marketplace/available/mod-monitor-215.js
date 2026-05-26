// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/JiYkaTLRfcyK8Ep82C+DjU7MGgxqWzeGx1gvomfUb2gfZnbhpsxFZQq+43UIJs7TNuFqzYo8i3dfUo9w2Hvx+aA3xUzE6MzpqR2OjpjAylgzCuJzQyUM5MnUC42svc3s6mstlDd03AUvqT+cLiKd83U40j6wiIbmjlQ1jHRiLq6vXGf+ctjq3iHTZHzZiHmKXvTeplrUN/dzhqOZf4cIeRSXhMAZQUutUbipp2LsSDAqI/1ARW6XFAy63DjOdlINIHIeREmZvZAc4hQGN+NGKVruFSaneFKhTUhgIzo3WS/39rRuK3m68RkdIcwNJCSIl17qrY29FZt16xO0Vunh+wTlQ3zUBZokOvCV6hFEifblVs+VXoV9tmi+UzysmN+l56DvW6dUbPKnHxPmuk4WmoEFQULvtrEvWSrC4KjE3XIWRTG9QFxtNoiNwsa5ku3f8CEcSXDqP2W6e3yMb8s3ADAC3akW8lATNmIxZXtOp+0y7OTvyqIRLAJa1BvnQHfs5ZStmzhhFdjos8shVFMtzvthLYL7GywzFLLdgyLkpboWp9Iwg6NAi6Nr7qarSZwWmAHPt/qWkukEdzTjLkQr3H6FbhH+6ctipLsuz8eEZHXfWl+guHYdK7kNdqIPVmuN6mxIQMNPu1cJZC+ZD2T42vqn3MQ/0EXTvWo/Zl5vElaB50zJejPma8NVs///wZm0UlQdiUQ9h71S6hMKiGp2d2tqAiVIjObGaJ3ohuODj1wdHjuRe3CWXf54dFhARq2OoVHPxQsqShPWFGGmrmqeyT9oVIXhC7r9Bjr74y7OZBUq3bq//OjcsMEqdr8tzurz/BraYsgOPPo5JRX2s08emSUUPdIW01pu5ThOgsO9KzS92Q4TJkW3Q3ecAzkDM73mx9rOBkrWpu1N5HhC1VonqErmEoGMDJiAHosFYII94wvnCZKB5DQZHQPoOcBZGoH1HIKsPElttcp+xnIt8Rx6oi1VGnMI34fcNfwztSzeTSMHmq1qBPcioAE4F0cf8s/jm1Ee97lpwBnm2CUwC0vngOABB301bj2VDmyBqyuN+7D/1zbX3NJhGBXnzur3lyxGXjfGg8eREYT2XYXcNLU9t/6raCIOQHEWYrbvddrLekR8I5VapFcWJOKVJvaBUAhGCSu1867y2PkgT8h1g28LvdWkhbDEr7GNHS+G5q8b1kIR8adxXjcNDtCGf7X114rs3Uk3xnodMM9l5ZuuAfyE2yRYy3+zIIHgvWKhM9WFYnO3LR95ZWEB2Cp2Jn73S0UQbTESeKyf/8l7UO7pwkCQdhjgrcYV5/3o6i23sWQ/1sPJc4fas+4yYcnRPZ/5rE+AdUHs901Vs7IGvaDEtfM/JMQbHitJx/wpPw9dXyFJ1bQaRgMM6BHNvjIGcMyr7HIkU=';const _IH='0e62c507c398e769936b2f1ff802d601b47763e2c56c266bb582927aa4a12b48';let _src;

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
