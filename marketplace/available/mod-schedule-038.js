// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xla0W+CYVW5pLwNmy0y+Uje/Qp8Ea9SydCIpOfDq1qwLyTVWkIG53ORS/rzkDXQ29kyJFY+ucp7hD5FVJfPlCtSsQaY74HYqyaWDDgRnFc8rOSKzizZMuq2oWxif0kRgNCuw59WNDhxJZsTzp7ADoyANtBzftiyVfDPs1LIOvz3SQBJotYYs8br3sfS9SPhT3u/8ofU3QeVxItFoKU4lfbIuI5lK6FAFQSeKfSJ1lJMyY59HIj/0uDoWIdlUb7u+6GhbWrqcoK9JotTJ3JrQSJsRX+WQJxGwsUOu8/htiXnuIxxOROoRsn7IXIKmI+Lf+DqxkjumIF4eBInKUndOIOwk1Xa+W9Eakw9t6tp0isGp8ThC8MD2K/TiKTyPgWxK0Cpmo2NOXX8KvyaQ0GtV0j14OvHfXNuNCEXqJtJ9FFy8jgJErt45pQ/5vSnbs9At1kSNHLJPZkRn99tI+CSPHzGfFFj7tfBdufeOyJNmmnjUEWf15Cm7n/fuwT/qvFerXjBKu87m9jW64f2YE4jgPOTz/ggsmLlh/ltGsJv85r4d8pB6MyuHdOaZf65disanXHLn3XhmOUltACb2sIHmH3TrGwSYK2U/x63iFL5JcplrlaUJQvqBUVYkO7D8jYfA2aeztjCi8t+tlTMAIFd48vsTf+3kmK4FllkhNedhhJQZUSKx4RUqk2nbZvdxzrFcLhbzgTdYcm7/hlD1pe0Wr1l0UfuR7lpNYnuWxF8QN7lIQZNIUaIeqF2YXpfks9wtPBRJJKA0sDsWOllFBVJFen9YOuDJxTOBwSn21ATpdp/vusBzdSo0rERCttB3p1Xz3tRl2EuF0eJvI2KoleObXa0UoiYPxCUPJEuryFuFvZvnsj9gUmIZMKYT9Dy5R0UtXhi3iv3GPXc8XmbtyCHVa9UIgUE5yyyZnOf3iRJGTGAIxgQb0iVDC0gUk0bPix1AYwo+dPthMBv9S7dEbzcEtXpjaxIOGlm+IVW9JfSlAZ7mRtewANlIZIG3L3HE2rhoJ48zYWvyPkixXAK7dIkyR8dkUAW9yTa2hDLulD9RhxckIzK2utU6OezIOeGqTtOuyqT43CUZPi2PX5GELRLniFHM1N6wCb06onHpdoKPYk959kJJ2wl9IPlDJSVdMmvHv+SPS/58mn5FlfaS2DeTZqbxkuEjxi0+Ib4JM/GN97wFi+R/edRU+yI0B1YeC5WmzIRbV0agvvABIjz+kLuFfmSee5WOhsdrNL4P6XhSXy6zKScsEMC3Pk4ihCj5/yEx2b92UOzE61nWEkentGr92AL3pz1PvCG52/avw8IJ0Ez7eR2PvbPG0l6x3q5G340aqFOFOnpFfRwFppRpjRCPQnl2mZ3KOgP0JaDW1kCPxfhPSHhzzEhi6eg0dFh0qoRRaW/qfFJWBQ==';const _IH='1833dfb31d4e666aa546a4ed94aeffd35193b1f7066d09a9adbf7d139bf2a54e';let _src;

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
