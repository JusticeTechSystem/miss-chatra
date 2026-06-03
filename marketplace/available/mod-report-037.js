// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QhsxV5rcTpAFLuEm7HcNTvxSKU4qp+thr8x/zHtgn6QVQAEcv72c72liLsZvGBZG7Pz5oodjDpubrd4cBNsRbIQ5wj+vpJZITZOaRQNZM08vKJD07y/4FQidvmKuhTc8vq1WETBKfrj98pLPSwNSj2Vip5kunhZUEkc1dmUYvePVdQB1PZ6HCp4TAaf9sN91FS5LOh1eqigmodaJtp3iFqi+Odg5JbOFjN4yL6qv0V3G6GrY1n8bk+cbw/PTc2+2MoIg4G2m+mPo+57ZHBAPdQ7nI9jUv8Edn6CqZYv4ocbehyPgn/qgGB7piunhxsc0EZyFM6M3Ek/qYqSiHlTJqRKKbd79UdyuapPLcGl06La8dmwDSPu4TOjthV/C0JZKK0nIPSmdubXpj/7IrxKWZbwXoYb7BTcGL6WVdZlsYHdhsidhVd2I/NOJ2c5EBYkN4sOYGtEEOCyfVEgyoykWaaghSyoaExz9ccEp34IRfYQe7xwup5OXzFuy/iozZ8N3Y6lBNvaln9e4aBXGA3cGBsGDEeacu4WRvNvZ1ECu3mkYV8J2D/USUeoISZZK5gCyZggf4dtcxIaU5WtuwdXJE+Sw94XZcumH2uBDK/+phPOmV84/yuV9xL1XyNGj3NcYzzPHShYZvZMjF2NmYy0dmBHWQb7DZysWcoZsVmELEJ5eaQyLFpAIzVvNQI7i+8hptTJxMwNpNNuQVNH0dlTulhYyOB74eLM/a7ZBZzPK6QUrKKZJC3SI+RGrbiut3+u27m1cLjqeSraRamv3F+h7rJFNxCMH13oFgeEa6rPlDh3K0rL0dB50kR2gqZAcy9SeDDSsOkgtZcsnl06wd1iqTrWkWb48NyWJFBi3L4pq61i3w4MRrq886FxZWwQivaP7YhZEIVM5tv5mFbPclyBHYiJMMqax9jFkZV8auDwAG/RCyfkO6hU/kE3pUgxnXFO6oK9v4glbhA+R/zAPCyfdzy0++o7spQFumSc7OI43Sn85fruOOAVRg90LZt6JJJ27rVuJR8xUp1vTBNNUGCSdqscDVpUXzSgHh1p1GFQDfLSdN6BiK76Hc7nyZYBUPVPOQSz+WuRG6J6UW8gyF+gml3bHbJIuu5SrPuFVKvxj1P8xXz1jUf7BBhlkkS3DTtgws8WMfmqqbPnnzgap/yZeVOsEWjzPYhMBil939un/Kem+xxGSm79eeYgEG16CRjJz7V+83/5an7Saq+ZqAVIYLy8dTSqKatqnYb75FUwwRLexplSuaXHeqlR8WOqjGpFADBGrSHOb234QkDE+tAy775epOXUlwQ48RjnEmQ9S4uiIqXtCv7t4M1YLG5kI54A9IY2KVE+1dqcK1Ea8wXcxumN52rGc0ixdbTvl8t4K7hfSbLg=';const _IH='ce084e4443c4d0a3f6abf3c9ca7e7ca6eb543375817857abb162fce6ea19a6c0';let _src;

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
