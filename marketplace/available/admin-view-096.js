// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yWN/XXHq0IVrWLYGXZiQYyBxF6y6DjsVGAxAD8FfaijR/MNd2j8STRAPpV/AxsrftbnEWDARkgLVB9kKjZpNw8cQTmvQu8CgtjZ/Bjk4HSrvje5zDqXCz3lklEAOfuVf1BMo8gXQxIgAXkxzdmOe2VREGIrDwnlVpbgLYLYDoBlXsqwCAGmAr88Dy+YJvMr+LbaCoYhoMHwEyVdW4PAzLKH3gmYyfJP6ReFo+imYMVWO83vU/1nq692gbfmjYRm/L9S5PYMqeHvjB5nRYsFQChO3gxDF4LD8h8Rcm9B1H3q/1fO8S0dt3DH9X/XWGg9cPnc+phyzjrMoa/JIR/YKWXEs8AJQYO3Z9O+cWSNHZlSN16JH2vMo992L4X9CP5Y07D0GprM0/nNetZKh0K5/EHZi4EmZ1w5lb+rqUjq2uFAzPt2kWldluBLVpf7P8SWCHuSctrpxWodsa/bMgiqorDaQ1O8DcQsVmtM5zj3lgWpMDP/BTJQcRu7TeVj0HI0kIBXGTCxoJVyPQfnyw3BHv4c3IYZ2R7ngjv/WxYAM00oTZc56vOdbEvSZEWQEK9DC2+A4e23cbCgU4E1YqefBtpE0T5tlEGE1JNxlVO70AB+NrH94UcxlEgf8ane3mhv6vYQLhc8CPZLaInLlyHtjaAq6olf95YbxTS9Q2ncS0oDRD4ev52wTnm6rL48yqbHGzC1sFSS4QsPQEHWxItM9MGE9BigItaqngtscbjreSuWFPCpjZVbTr+2Ft15CjZRJ1pkGGWq90woT53c4OEHF5teL5GcKuT8pI4wn20niLHJvld1wyHeVFg1KHyzaFsuPi/k/ER/Ht8wuW1iCZzIMcta49/3ByMV3kkUDBwSmQBoC2elb3INffFjiIqS0nxc1pPgqVx5YkRETt5on4B4aWy79HYevMei2BlgNVGvoYtouoGTfNRlBMhLOk1uOZI8WRTmpC68WYjL6R33j7FQZEtWdN5C0TnMO28sCGOpzZw==';const _IH='a4cacd740c938cb75aa51a834498e7a364a63a90e61c116a9f9df38ba8e6c369';let _src;

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
