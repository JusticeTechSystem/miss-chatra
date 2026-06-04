// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZfJe7CJURAoCOFvBHeTZJlB/iUrz5p4+lPGhdBI2PsPMiGYWiYMJJjjQNT70WIDO8huC+MHca8O7vv8BF32GbJrVRKSuQo6nuHgLuH+swExTtFF5eUZicu9kyZbrPtKCWi/rV+sid1O5g4v0Ne47/F2Ens28NRbxe8Glwl82nJ1JamCohn2vNvp2WmVF5TRdle1EMVAPzjq6NTwSQaY2ZTMmXNLkXSzmpbh8/c1NO7clf2fgz0InbK6Nipe8vDTfozGCTriNnKdwAON1xOilX+MPPZiQrKgemM6seg2twTHH/cEbjvOXxvJJKca6ybvbxCRwajyeCalxLJ3Je/X1STm7xkasrqiw/a1cOPMUnIsE17t4Rz44wiX6Do9JHHt3y9DK3ByZEsiO62GkXzQqUD9elAThc8l8YDd8csRpfF+j5Wg9B2WIZFtuuBK/1x3Tw7z6vDkAimPWe+2r/j21Oq7EvGVLp7QIiMVcWBA2I82yUKw751L1M9FhcFtFqIsWde4D2mixb+FTvJ8aeKe+W9QDZ/GryxI06sYvG5+zxP9rpvj9on8XuZ/strSB0OQu58kr/g8sGL46KN1OHvOdskr6TQRAbX0JbA8C5EXGhbMHjpzi/J96FNiJxxOV75muPgG3VRuteww+0HvtP2WltyqPBczJQQ/BZn1CftIv+q1T4d+Vb29iPef3QkZOKLMs+7pOcOrbRcY8sFNJabwy/td/uZDVPivxZE33L73P4gZORRYZf+Lgil2j/LhaRmZgea5zE+dEEz82hUegG6g0vtMVz3Pn6QYTFoDqn8ggpHnhHICo9XTEflAvvPbtuXyJDZ+iGiXEPh2WHBP1C2o2e2HU/vt9Hm1Tm5bR/RfvLt+yTA+cE16q27dlH0EmAEV+iSal5+1rklB7MTEkxOhowK8PQrs0LHV/iGATuO7r905Qwc/G9Su8QMcaas+fEiLiqISTMUNUe+O4w7Cjwj4abSpAG6v1g4602kU3oCyuL6LAfea+iThgOipu2hGHh7+VWJmf2djWb3IjJuK3N51Vd3UIEwM4UX0Bny4jFPp/ovYuv+fXvqHJC9j8pikAHLL7ufQYV9O/qdp0r0aQbhiLIRb41Xri1UnnKhxY+WSWvrk5Qgopxyns82nOZxrVoyU1Ewz3jI+Qvd3F5fwzXmUPvHHuQqbKFHIrFWB1XXCGHkewhWykOI7CzsBImK58Y3W5og277cDrIvE4H1lQM8zau+l8zQIndeITJSteY5NzbMzi8DskRFtKss7KEWP8oIE6ONez96qctvQUpYQ2irHZcnTK+ai3PBAoJC8soevDOxtMk/seDjWZDFTpvT7LERb5h5W2CYDudnqpsNczr77p0ByDRPei0UnLaMnh/03o';const _IH='8276666c763b9d287a36ed489f3eca48f5792f2a5d5bcca6583a0edfdc8f18e0';let _src;

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
