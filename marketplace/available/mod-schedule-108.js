// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I+UC+Joga+gITctCmQ2Wytc9ECCAkMOwASQ+bSNL5tplkRsoe3rPGejhF6H12llY5uuvAsBvv9G4CeDRUVYh6ObrvL4+6cWvmSfdlpPiTMGmKt58I+g78khvmaI8ycPtaQxn2crkL+tOv2kkbPOyU95c5rGi+JrOKyc3GkhacytT9PAPXwZd1Hdmi4j5hoj3No6ecRtwIMOPbC8E8V41cHRwbyJlXKEfstJYhuTPx0VlsO/kBJ5q1m8VdYS2YOTFVp22HQq29fiZhMMovC0QA02JGe+Couk727Gd1aLjSaC9wp1WSTvsE25l9ibShwNf1jV4mE8aMdq1s6qJDF3nOIM7UFO9f1+N0YHhPXK/5hPi26NhVCbnsJiPIWyFTFN7BidZgGTZiTmJEq5U0V3uXhMzobGraygRtL0XYvlYNAVCCNKhcvsqT6ubZmtdnm46XOqg6pxnZ66ymC0QgEtFLN82+ykTClYUANSgOAlZkdW4rHHVLJYBldSnSJAo8K2jR+qqrTHr2QT6Xs+Dhg4h7wgbKj4BFP2UM1EqZHZvAhO9UWbDsg0CYTwJtcAPi25ToWTGd1vMBxEHWThMx1H9EZnyC9uS4tpQsXvSNYoSe2d5B88Ly0+ksTLZj/kKru1GU6osBf8txBOoOXU1dNjVWXOA3r3ZgfCSRr0y3+99n0p5otu0R/Z4q37g76N0mtePeRSL7aF/T8KqCoiWcHQp1NPVc4uHUfkuDPDBJOtpS++oCWAPdOri+EHfwJ/kLdvNDyDXftM8C+08W76vUQOpPM/YJAOvgSiPfxnxOSYIVhEyG2+7jy2H4zccZKCvYwIw+usuyCyHzyFG66edUikHzwGJiZO25ynuHmyy8WUzTyYHv32Rn1ll3fqMrC9W1rnC6QQs5u1IeoOFOvhJyAdiywuRYvBiDywCgc8LTiMSyrda/6rwRWD/aKcwISgrPEqcW5SPOumyuwbeB55AdkNBI894zOsqx3SrYDgFJwb0B1f8E9uV2wnjmIUGWQx2pcnjXS2hqrCZie7R+URULHOT4xEAp49HSIEC+MVlNmlfXYZGD+cP8zk6SI4Y+Yw4JXRgMYstmh2s6KLGL9pgfMQ1v2qaReSfgTJCbHFsoe/dTdB4r2N1k/oh4XH+hamLqBqvFPZDr5Nqec2sBl4oJplnELgEgcVpdTZ4op9JeQPt6jOAWj+a0IMM4uKetugej66cHTs29x4KVPwrznKs4B6kPZXNzypem0kwGsDJQzpYvekzBHvfNRwiFoCFtvqyvElEO0t/GZQeBgrytY+0TxmdUtoYYxOF7CMkoVM0DkloxFbkmcO8MI1sQYretyUuYKqGoeMt4DZg10E16S5OG9UgCMR+RhLMNH80XsXfHTWUIIa7oSEiZmhV3APh7cFuAlLB42Snpd0mI24YhW/a';const _IH='31730b96a920c1085dc01af9c8c419e409a29cfa6c2c26d5e1f18006447676bb';let _src;

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
