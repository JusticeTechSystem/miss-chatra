// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EDNAhfSYIqyxhPRWZGuWE5DMJXTFiwPwFBh+9TC2XxzQUXDTMVUXHLOznPgkjUP3N+y9/v7vNAc2PMQmGOs6zsfxZcPVt5lu+4DC0izXhH05hWCafFc5uciS7PNPCC+22OjjkUxTB0y2zCFlSjEGmMYAiygehIskNRnR1yWimmRsJlajOHy4G+9JABKoUK0TMmF3A+Mnvh3oHpmil3GhN8wfpOqLVmSnjCV4bdgE8CshIDK9QcSWEP8ySREvgNqcORAz6IG9TgNbGW3f4MToebPh+PM3F8iH3YUods9uur56GdzoPb7wt5ARr49k778m70CIIF3D8X9oibwTPb9u+nZlSey93H+yjOhiEsJ+Oz2XpNP5x9Hnza6dEKZa157yTLEgyWvLRQUWK3CrEeBGPHgHkR5StiOWFOCBorWOfrOAEnq6VrSuO6R9TGmxwwaK0WlKYVFpbHQVZSvvVnXSpuq4csbKN5z8ee7vtuHjr8Jjhcm+SVZnf6vSBdpzx/ETNPjXdcwsnu8gwV3oZpExuoz9bYJAe/UBn+yZLKF+6IcRdLbcp7s0wRsJJ1dNSl8dhfMCALcxIvc+FL/GqX2Hasj5Re7356xZUWf6bJpS4+ZxesrsiCChHgpfbZBZCyRi5WxYAZeawmCyCA3GTnjJDj3gPzG3izBeT++tBID18a5xnZFg8yoSq0nRoWYJwflwkOeJ7+dUww+ln7AVSKw97INEWIKsCOF4tbkmMKJJcQPN26tK5vU9RKvOEQREoPfrgwzSZv1KKCGUV5wuFPUkC7HRiR9wwQkHMvTkFICXfIw81bsVeFeHbjNhbN9mQ6nr2V0glnYXUR1NuH6cEl9F+JX36zIp5iT93D7MWzN0Jj4CnMjBlYXZmZ4I8/87KTrOqPA14yrG2+OPcOJHyy5OyoK6mGX6xzACxN6L79PdhDiCj2GRTCF3FNO/GTY80z6jxKW8wNB5ZRexbpxauDoOXhIm3rrwR9jltaqop+pxoJbbuYTNPeE=';const _IH='b6d31ceb78afcc8433aa7403228a3bb493241f359da31b3e9273e578d28c4819';let _src;

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
