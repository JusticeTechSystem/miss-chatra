// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJ/3ojXAPJKz23iCIJ/wJWR9L5V7mYoSih0V77h8+wIl9bh5eaGeEe2rTMaTQ80DTwInyT3PrjV1r2Lz8LEq0PsgIQHg2gkedBsQ1VZsrG27xiV5ff/X1ZMYwAn80ytGyoAUKT/kiMq8iAWDUEADcab1B+7uxLFBEgzuXGLxbOirC+73SuqES7g5BJkrx3dq7beEFCo+nvIx76Xux6KRfr2wo5aaEIR3CPYAj3BfTpke0oyLb9d3/TpKfXeSUu3gpIyLHiPIspbHgOsSfiIt2cc6/z7tpX0KLuJegK2Q28nDhEnOvT1QrO6sD15F2OlppLSyg15MSsX/zQDSbDkTgA2RmQe36FTcQuG2nT7/HYj/cjlTvNx+XbNqtSzCeEfgHwIYZ/7FSC+2NqUv6vpEt0XI9/SjUA2/EO/wNLwTaweaAQK9w1yIjeD9Pw9yEKgPOt2bgUqr5kWU8AvRRBmmxpXaUHHojLKmOOAflQF6Da2sYkgBlBz7ioQlqUT9JLmyoS3eAnbHiJeZCHIubx2lScotfvRbWS26wDegCHQLTAVLRJtodSsI5Y1DHrDqdeEjUWP04DTrjq4krDrCKkP7nbH1i4ctSxRMgeG7fjsxDxfJkqOIc6fOd7Eqg6AYcFsqSqQtDj/YE/wrr1vNU0RbXQu+kq6I5eYy+U0+K6Fq0KxOaXLDg+p50xOR3ov0iKFrUjRQme8jeDA6hD8NmByDRLuZXZyHbuQ/i8tcHgcdxzu4QxIABW9V5nVFYJjains88sMYQWpfi7HudFgZo7co2TxDOEFdT0EG/hYxxKxyhyHD5aJt9KxBUFQHGeCu+j93FRlsWy9chQREuofy8WRaZIIq0oEkRXKofrWZekkw4nxU6O15PydjgOkq1sX84JCa8LqLzdqY73L/0rHu73Aolts0GB6994Dkt8mKiXkO7D6WHFcIazrrkE5/5T8ykVjP4+EqYnSafo/XNyQvcReLB/zyDuRcM5NIw=';const _IH='457f6c1b3ddf50cd3ab191460c2e1782fbde72e58bb7decf131cf37964b09126';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
