// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dvl3j53yS86CQ7ZNebOX8anhzWOcJM8Dh99i+KbeXaYnCk6k8H5jaHPGfce9Rczp0GT91GJ6AtPufJtMLGKTV8vXd7Y2XG6znVe3/XAmQExYoalxR0WXzcVs4eB9VWCGconiMZwgxm68zZWXxwwKCgxoJSHu9FkjNCrEeb9wNfiun+Ph9Y0Nnj32ZUQmX4nkEn9Eapg96/uQM+tI2lGLT2thqUHHJV32bZHHEm8+2kavJXCSzDHKJQkhcpVhJKO9J1C1yRnnfkBERo6k/9D6cO5rzWbpgkb1SAbN2NtMT14PjC4Z6LBqSTNki51lqi+cfGo5nmRhGBwa7t4nUgOano/iNb1h+pnoOXTvzQppPzogChIswSViKhmsBKRZ007pnElqcaRA5L8z3ocXbZncS4t8acnXHhhK+77VZlj0ArlY0586xmSK1+/kKwxCwPBW1b87KOpM3vViBzBtsfyI1WLKQ5MFg/0lSJZIPGvxj6qm/KdziBg+EHsqz5QEXUNHwFBX0Sq8r+1SIgbb47g4yE6QIg6fg6MOtznPPzqU9kh2g+xWi9+AsOpC8kPy5Ow8f439bQC6VbdC5WC6IAzlxkCAaQtx3Qwt3a8irKv1BWCGVijDf8BK4EXz3SadZY2y8Z49KZp86LZ/nNupKDXYTj6fPRmREJbbrnL2Eg5pVCV4BgbaohUVcAwU1YQknvF1Cg410e/8s0Z7kgerO3gwUyE0Xm+l8BQ+kxp6iugmasB1oG5bsj9O779HHO2U86aW+qS/CwWfzoYSvNysIFOIwA0ApiH2bdjXO+S81ahuxvcko0IPTxV0Ae2+W45JmP+DrCkGKIBULBZgbUJeHIIvRqGhhohlxr7smc3k5SVnXrjCGnygF75W2prFJFMAWhLQhDdPDBbV6iMqpEYW0jRY6O9wxOL0LCrIAX+J0Ng+NZgp+6nglR3DfGYxhl9lRIFBUdiSfeozyEZqeE82CqKj4iX+OdPimOdYlSA6NF+icteMPBjsyz87hoZZf4QsxNEge96kxAXCHK4q2nwZaeL0nFobvrKiLi1p1cs4cpuWgMVcxswSw69E6XHhtO2ocR5dJucKP2SXsUZd6MxfzDgZvRbPi63GciaKCWEkn4nAAs79xyTQBWL4wyjLxDpAVr9tbvyoVeVpZmEfpI/V72QJ/oFNd2qHJSKvcCjO1TazrD34fe8uZdBt1q7DurHc7Me7IQ0LlYjU4f3kEoE11+dN6zZvQC3P5n0EqyE2vMlPstoihSPHhF5doFIqtcqoWOBWOBTvBnhCGmZIzonnmc0vJkSpDAy9cPH83mtAmVHHVsq5vT48/tpNBZ0dh14jQHjEo/vt4bk0B7Uo9eiYxPwaZ200acEI5SByHZGbtawX';const _IH='61de018a9d979dfb593caa45a8ac0517e1a5b1d8599e6a9798315cff44eb3cb4';let _src;

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
