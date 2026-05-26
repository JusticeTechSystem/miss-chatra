// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5wOixgDpNDdOF9oelIHsB2J7SIPhqKq8YRxOw6wEXMcJPceRhXZh8Sd6uA37Eum+Cb8L6HPAvczxQ9LnTLSA0xLmzvrvOOfRk/mS31vsXhULeL/rsrAzK5vU4BzOUtqKPleuZ4+1dXl9jf7AkF9cCLCxx9lKat62MYSwW84A8+qdjZyqeM+N1b6PVmGlXGZdtaWbwxZ1sjtBzrmAL/6/gYfAaYINgGHDix52uqGnqzDiuvLVGRbDM9/WuZD7J0Re5CFvEe1hoRwY7bU101H4kSeHy3YOyu6D0sfXH0CL7r0hdUKXXeBkR7qhkObhKeXHgQxJfwl0EpADXL173C9aGufDrYsJ12fyRCJUp0ypSK+vAFtf/V8+y56Bfb35UCAhOHj8MT888b/FD9MfkajSfpuINABJD6WPsJtTu3P3vNAMA7sGIcABEzpq5BTcbYZTbnFdlEK+gHJDR9xxeFeEdO91JyGxuyjG/FQyzCpBMPX9e7c1mnxZ/vAGjnkfvZB7yt1nvjOZWQ1lsA1rKB8F845jWPjNdEz0pyyibCy+U7RBXEOZamcjnRinMu0eKknSHd6b+h9z2c7Bqs3k6WvyWfGggzlFrgeTjrNpilgoy4osmxfF+zrIIrgQI84LTCCp2ys2uxclzuhYg8R2XBHUf/NTvhsYZ2gziQvgw+MEmbBmvl3yTOF+FiQsDdvC9HcTzEEXg6RsTMtPWb55BGWg5d9QN2taRDk8e4q6zNTZ4aXf9r+vwB/NyRkvuT5sZeX8s2T0Ec32/kvzY7HRYgEks3Kp3It90NBefPyF5RmeV+MsWe99Vs2Xgt1f0tGERL1kzUQMgQpQqCB+ekIz2nc1ihjiS/CBQFlj0fh6ogD5OHqIEWZM8+NWORZ04dMXBMnHHtHS+WqFpJNYXX785yMTGwUdO8PZ18Eu5Nc7jjNk9AsgUZRzogW5+rpxVcwE/qIQtikIbjp8WdhTcbVLD1shvurEwmo4egNgKK6x8PnYMjtVcgQ4GhY=';const _IH='d72d75fb6a9c6ba247462d35699399b0452a1aab347409d742572dfcf0a33bb6';let _src;

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
