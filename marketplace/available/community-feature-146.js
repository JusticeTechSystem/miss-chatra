// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0LUR8uQSOawLBkt12rdgJcADgB1l9DoKSk8u/kyK/JCMoEjyz9jipC/q4bXxSCFON/Dn96vq2+WWtrH2S2wV6ts/sitv+bSA8pUtE3rgMf3dDo+cQY0whOBx1OJLp0FoU7qjdLeCx9otGr3STTUaDpZ7nrTfT/mcaUpxPycQzcvlLf3dJ2tdpfBoMhn9K/84ppAdr7WpC7ISGHaUyMpnkueQbzotpd1dL+StnXmuUyX27l7+meUXIHhN4O30L++j53f9s2b84Sk+eoWMwEQEBNH+PGDJZqkDLa+0yrtnxdT2EKEe+fVDXtZ4k/mB3B+pPOMEf8SbYrRYtkzoxVVg1OftOFWmFspneDW0Fq7jAIG8F5uGtBcI7dLE4hGrmFuzKuZYIjDAH2lXH3Nodq12bZ/wYoecjvx/i0WfHoS+syWHvvaRWH/upTaMz/1YxH6cyVHuR/38oUBDlLKq+OkM9N8xqaDi+vGwd8tEtP1xC/IYIkj5ymmzRoWqoMhjQwd7kMXTO6O+sIlYHwabXQzw1CSj/MMukhI8v7yE/qKvA6Gn0O2uDkEd5frqwdbOeeTkv/7VrORek9JSjxGqd1IIG3wR440bmB0JgGPRBleXse+TzFIWYMrbAS7vN93o2Uhjfzf+dX6CX0FMJXPnIBnXeUI/NYtncFDVv/K0gtZdw31RI/dWZnPcse4GKHo8mhuM6n7Gqzi483jF2ayPAs0rlzMka52J/1kAQ==';const _IH='1e5bdccf4b5db7eb41f15d798117d701290314c122e40625a37494b4cac5be58';let _src;

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
