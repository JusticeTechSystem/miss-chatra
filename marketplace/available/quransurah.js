// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDoyqefM5cbWbdcqYwEpzOGlpm2gc2ZgGnFa8HG54Y1Uxsot3cIrNZqUGtrAY+Byw6rIW3ZdKdCHXkwda//2+lPQ//wpMWjCVaTv7675ZFT6kCU61Q44vABXhHAmlGEeEr0QAp94qLCHiaGl5vcJ4PPBNDypW87ADpTkqf/i0QwFNa/zCi4hopbUJoH3axhLNT+4jt3YTGF71j+XXUhMKZyBuY0gy9e4fC2U6J6V1pvHc492FZ4m7DLQOrlh2C5MUqOCZn55xSTicfZAZoJR+xJqOpU5i7NQXjlh4eALdEXQdTA2QUan4sd4qVCPeDVGqkaHiWeIqSgr5x5idaJ4Eq90CmPy8HYrWVGqn1jajmbQ6Ch+CKLTaFQJw0vHFkHGg82pOQfcrX8DXNPkJoncltF7BTSaTosSsKGXkT7Cs7ViFP0huoaf7jmfIk8wX6UEjHoHeCv8r/mDCH4lsAa7RR0Mst+Lpbfe/Nku0TVTlLtB2nUaHhDyeUX499zlnweDqmt/Er8Lmrzto417DRDBYGm2oH8HJRCZLXMPsqhcOnlCsUa0knSYIfWVu4YvCM+ugILAreDFPqaYiEQ2opvMx7KJAOHAEaCNNZuBT+QGC3z6ZBWOzZANMeCm6dXJLZh7774sIWSAVWAY5eS0NSOFopgMpYIaQdEE5yXPOGO2rfh6wz1oe9rhxw5eLp/K49MqOogebJtZXzd3Zr1jP8XuH1OV43Esk4rkTpXSvgxEuf/Pf14lPS2qfEjXYXpgRU4JNkSX+sbMz47xtTCmKM4ValdtHYolz9Ac4wgzWsmJLJkJELCfEYUrvNDELuA74QaHh2QK8Nxp3sIEV88nc3/JPsBrqcBBXpjhf/ZVDXZaM5/90G/TUv6A6BMzaGiN87qFLOhMe4tVi9NtGdqbyY2wor/Zyrhnec6+6Fd8IY6FPMDzfCsBoS4loWN2aeJNC/rgfPqM81c4cfo7OZHAJojq9wtisJGNgPsXDLVQfP8KnMbzENMQhP2A5rhYEnKpnOzUsIJrE91i+Bb9SbJaik32BGFXH6SICMZVJ2SVb074DPD3g2cA3R2uJuTTRbt3/qKoS1jgwo8+0jCOOWM+QfrNdKS75xKkqWefVdi85/Iotqi5Dmglgq15tpoEzeKWlsJ9nqKByQPa0HNfF/vrDews4o1XS1seVmlJNUjNZ+oGbJZorPr0/jG5G+u4cgWHniS7bUUCA49n';const _IH='6d6085283183a9e2854deb3e79db03f002507e04b9923b0ffd8ff7a281360cc0';let _src;

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
