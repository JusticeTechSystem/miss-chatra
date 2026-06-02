// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1zZZRKb52KrPwEfpRNvVDrfc3eyYsxR7gtnAgAEze/OC2hf1KE9zQVOnc48SVLtFDmyZokJfgCmqvK+DrCgTfz+58Kr1LnxrvFIp/mseS20ryZLaZkRHo7i/7P5+gj/1r+XLOoUE2YRjDCEQdqC7NjcJ1Ge7N8LQlvtdVty5jivDEgQLeaRNePeNu00e9ezRD8nQEOaXFR7Lek+lWmzm46/Joj9jyemXC4oMtXuUCM8qy8afg2t2pQE0Po6XA3xXdt8Y+r8Tspu8i0SKsUGWup8Q/wHRIQf2UwK+GZ9HPBkt3zCKIpUH8/fsGuiynIEMZIRiw1MhjE/lsMuDVAyTcVsh6UKLdQygo3FS1bvlIg15KUZb6wXrgrwd/Ea+Qyb2IMEPVTE01TzPf1zLRe5US//uPH7XPkvXaoaDxd67gy0mY5mn2tQNlBsfKHHGzqK4suPHhps58RdzcZO9RKaePmYIXpJ01liVeTuytQmJ92NvObkQP+cIHefQmS50Zt9wFJOt3556K3J8gInXq0txq45HK5tXgBxqOwmzCjNggnTP6CaU+HLYU8RC2VE+/YYnew2ChUe6iyrT1tqPX0clQO8RtHSKwzBvFGjn1sk8wdZKQT/iJRpwzn6rlZLelhCM5kp8q0+ac/bUIYxsiQX9QycfDZd70W3gUQGCOttGre+B1gP7LIRU98n7EfVzpRZbuOzlzMGOJNKN77lvZmftErrUK5EWhUmavVbxLVRpiV/PAuioFVEVn7yGatpNMfj+6JKUIl7szTqUavYYaH+PSW7ME96Pji6008xWWudE6VDvJ48MLIrESNR6wMnPQf6M9l/aMlZRUyEIrDAjUPelxxjAE/m1Ks0knUiSz4RmfFcU7hb9QOK8xSt5UKz36381+Bw4vCP4ZWGfiYU/AK+KBSzxXjydtNf8M8APVXH7PE0iZyL1iWJjLQNFevsnikdgzjE6Z2798ycRuZvWyds9w3FqOD5F9sSBUEufKSgZTSzZTsEJYyrgKexXI8+ox25DJfOUAVBm5g1iLx7BXV9ZcGmmdZFrdSuTS971YaOxsB3cyJCkbt5GGSR5iSh0Y3WRPblUIpgbO4g8TIh7OoTvm9Cb5RgOxpWf8ytrF5FyYyA0fAo0uovN71/Li3137YIuQfxCfXofIAIFKlNb5tRDW/kUIoS6nLj/cVkp0vsZJgSCztvTqDCraRcU03ztkNegThiuVmVj5ezHX39WE7SsXiQT11IyMpC9K2xdai+r2lqFhErEnllRZbWIOiZm1cUxvLa+7RjN7arTmFvMsphHK7BeVhcBfbv5VqOozrNIAGrgt9MF+s0wMRStTBb8t4sp4B6sfn6Glsskl0FYYQbBWup5cbCRBsDqIw==';const _IH='6ee293d3a3b10eb74f4e727d5072037aaa071842c5f41c2afc03bf42e09e60c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
