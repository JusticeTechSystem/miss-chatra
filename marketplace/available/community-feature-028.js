// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx0mGNIDoZCPFnxLvK0AUzNcS03yCsbbdZ8dvjBBs3gpM1Mdb+hV6wYs8Uq3LJFMIjxLdIQao/+KeVrkSpnKBCI9KVpJtxChq+eglUJob9fkRjFYtpe6pKTtUWQJ8VTYuM2BAibVuHe/kZoiQ3MRxEp2fAIGOfEjF6T/x5dFE7bXjOAIbrM4Z8/NaNRLemp60jg8kGkLP5LYVvNmwFUXlHfx0Wgh6eU6pQucUJGMNDfujNliRXjAkY1+iCQhyW/TVpzUWeTCQkRC9m3HGafQOdBWOucLn5YvnrdXPmZ7AtmmIUJm/g81UqaLCcuOLQ1ce+G6BtrdvraBeRz4B0fsiHbVHOJDRNZDa9dcCJtY/dsGl4pc6MpsLOzZ8b6hz5lTxidnDXHzGVsLlPt1PF4l/zmG1unfR2jNoWAMek5qd72eWFsOgfVl85wU3ecRJNjGTlUVhEr9cTp0cL3Hu7hcVEBv+9sZYaFF2wrywoCnNz5B80K0Sqfp0YtEt1h5vwb+3pIIlYklraokCqVyvGl6t5ppXZRZ0I10wmGh6PQRYeb7OnXsY05ZAJLl3fd+y1e8iieIe/01Lunibv1yawX+bQWyt5SB+4ZA9RF8C4ohX2S5w7sl9yFf/oUJjaVvWgEXPaUSNzOvZpypXyeph8gbArQffO1bNQX8K+8V9KQUeOPHs7mFAyXWr74TZF8KaNU+X5HiKI9rZrUnxGz166EPksQEyp+Goxu43AI=';const _IH='04dffebd7dc565b28719654752c7cfa79f2d9c2d2eeb0ee36e36ca9a17359f55';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
