// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7kGxld4Hd/41TX+WBB7qXp7qKfOho8m31pCo+AVQJPcfKMBnEiOd0cjn2qn7dXggYLz6savghfBejwYTSa/uBc7cd8Dr0bNf5tG/cvo21noYF471zD0Opnn4chB8OKSMiFN5+/Uvs7GbMGXJgPHBAFbfaPnsJXaJR0UBOeiYt/DCLhS9UF8uRVrVIoXkwgOz3ZWze4yJtQXJxUY3tm5JrAtajC+kFwMe6g4bJvYnOUu7U1B5uKdNfUP0kRxill9M1vaS0ZFbK8DFAbXgW/O6hd3AehkspKm8ino+h26dXwNiQbzboF5G+VEe4W56ZHGtMPjb0gUgKhK38hE7nY7gx7nJVyav+G3ZbisY+aBwIxADNmvI7sDc202OeXSlamJxKdq7AmFHNnulWppaf4em2pQzratfNBYlXRKjBNBwTNp1g3DadvKD13tETOAOHkjqZoBVX0Dx4uC8mTvIfChUi5vGIJtbsLw+D8p4jR/x+qcMgYoxkula4voFPvs/UR38EVMf8iSwfzdABXuHG9GfoGIhCoDOP78P3E6v5/6C8UOftUPpPlVy+LOKgiguKgSANMKwlD20BQHjlz7rYZyDVSRgyaAi9uE/MhQx+LwLwITqt5CWCLpB344pE42Di1hJ6EvXzmWK24xkX+AYP8wsThm5xYXMPv0TodJnh+TjwYZPaXj5nK+GrqkLvMoCiFKENzivPXREFwZ28hJEz3355jW1kICYsdwLhY1evF/5DF/BDlhmGu0Qvw26JMF0EHWKxtsgH8g/7k3Iq8jupROG4htnqW38kuG+Xii3s64nS8xVui+WFPizPLTTZ4Zm1Ru7l4vPOWTXQXHYSd/ZZsm5rBlb3+Wie2TVGeZBuFh+u/yf3234KQ80nu9PJrFvnh7v5YJPQ//MzY68I9fdtN3hCV3nJQfNMK2QiCdd2G8CtYuprpwGc7lPd5FpWgNY1P8yyzxW2vf54t5BlngnYo87Pd4HzD7dWV+T8gTHLYp79RjfFK9/QrB40HYaU+vrj8YCLBux1BfyIjsPZYd2RVeVRKSymt4CW/5IkMrxj9J9/V/KQIOttU7medCDVXLFkVYSzO+OKSawc8mmEXk2ASAXI4xNFkWjNR38KofMMsAFd33laYLlM0u20rNCC1HYs0nRg/k1lLVy4SUlbffIwiC0JLgSOumLtL1AoAVxwkjClL+qCkBCdZE06X0O6YJWsxm5SvWUjItxIVBjUQtCA0Me5ug5XFKqjEpC7I89C6BjwdrSnbl7xwIgPZYobuIW7E0li0T1L3ThUruVZ4UdxYOpvZuGGUPFIjFxcDcbJLSuNZblQ0F3I5MTofQlnQI4iRgz6dgh9gmyxMs2iOqw+POLFROeW0qQx9eniuOL1iK6U3fouOknhzIQlsilbqUo2DyCEhduWTtCYYDce0uA11FMqqaYIEp1u7BfvwtO3j26LgM6wVHg/GjB4eiJe3zRsfK6Lws6uG7NvKIRQIT4cAmFFV+lrHjievvOeabZvlwY2xIX3w4uThDHDXAE3CTV/g8kMORk3ZBUavqP3IoPuSI6MGLspyo4s6rr9OG922TfvGc5qTNRKo0rY3zBIw2x9OJpDjiPxBdh0zF3+3P7ZBUGOFeba2KeQ/BQgbaXQlCQbgC09tZ3hCtOI7jPf3qThFISeIXach5dnNniL7ciFV9ZwKteEvMxQq6NxixODb+tOHkbzi2U9MMCPqbTKucB0kp11UMwbOgSckO16TAv6n1dDSpeLdty5HXSEUVRKv6zUDGI83hGBzRFyOynggq9em9SUXN3C+P7c2n6FaiR/EeNfu3z3IgicOsEDcypbZg==';const _IH='07e88cbb5ae3cc13a58cd5b54b9be606f32534d6e3151363280c410dda91ec24';let _src;

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
