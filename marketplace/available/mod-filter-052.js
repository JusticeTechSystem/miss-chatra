// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaeZLNwoHDy2NWr9pAG/gUv7S1rZN1TBhnujxcvqaDNbyWkFdr11wOqjgY/AaJDNcHvnBU26JJNLneinHsUhfFgnbR9fFlUZ5i2UxGt+iE5Gc0qSjCx0cMwaF/KjXUrHQKxAnJwLxHTMGylHD0tsoOy7zqBycvBQ8TSVRiGw0Kv+5K6ImtbeApBBbibVVpWwZZxeW8L1gtq8JQ4MEFNhIcquM6TsR0GcEXK5u0Smxsn9mtJFw7yzhA5YuxyZnGDrtsI6BP72nwRkf7J1lxwf+XxTB7pcEJjmiCoxbCkOho4QjsFuy/Azw94Cj69nAESunc+Kx9A/HJfFq+zLVBfzj4iVLv5OboH399LpEDYpbcxoiCfxjj3wpwbsQuNVO6bX1L5RUxNfK1m3oH5VJviRGUewrzVDprhqNL6dFS6pcl3im72x7CfMuwRLzOkArgc8vstQLrEK8BaxgP4kvH+3CQCFS8C/hrRH97MGweg0+nVeUL6zT/7EcxmDLDYF+HM7I8MRUeNvf3/0wdaDabHaamo/4YD3dsmdhs+yC7JwQKX4tZzpwCM7uIAXmcq+sH9KtMRB4LIXYaKYVSbGB5gnALtFPCrz0jKGkMvXROwDge3p+fOSvJvvHZ2DzweicH24kb21Q/Dla6PHj5svP97Ea/7TETT+XOAP0MpFQqgsmv8AKS6Hvb+3AGU8aIg1bJHRa2jhkxEJ9zmh9g6yaoVwJc5uG/dNkROo2UqmcAc7yniP1RTfRZEOrOT50zdfr/ZF0RgHr8TvOUmZvGxfwV/LKqfdET/mmddXD+S861c+k/rRTGnf6X9ZnfrVy5z09bRHeZ/ZF5Gp2nNxNz+alEMSSL9+7/T64AOx6qW0rVQTOfnSA9kGfOu8nuyUQrISsILhKDD+CGMioGjzikXhNT9o1y//zgMbC5qrjWL55ACRUF7aYXCPeq4wD5VC2mTybpNqIhAdNwt6iwxtbBBcl4xnw1uW945ig0NcQEeTvK7DcjU4SsvWf57lWpDyQ9sdqxtjM7Kn4yIZFpHFw0gOB8Tyeo7iqJJO1fhoM2MjU2YFntsiCy7Q8qP4sZe4JFq0OjMkeCdcgs9JqQp6Tvb4/OD1ewcg94XBOBV8eheoJ4LUWZP3eK5ee7MOy2qoiDRgL9qmi6sZH00ftnxfC2jXNZxCFadJVl2BDRN3DcTvFfMvA5SLj+GXEPj3F8IQ70E1vBm5g0TZA/3l3NnlhcATzJkaTxFbYjgqwbbLCSevbLnCBiFz6BEkFcVRmb/O4p0U1y0jOAfOU2WG7Me8X2ASccHQHPW2eduw6x/hBhkscNr+PXUrIvgKsu6+ig7NHBzHKx/38/ofpoSUD8LaJmbySuAW4Z4dR5bH4tGvZUm67dOQPdK8dZmw==';const _IH='08a927be663c80430d7255de01177f1275e8881492aa5f732e33bffd9a300904';let _src;

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
