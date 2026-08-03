// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqv7RSApyQZx8JupnEHiCbyD8+MvjMnWWTy0mh8KCL0vOZJj1wKSTiZDq2F10P4dvShNLmPrYPYr+nHRNe2uKo7UciOTUfDALDqVBE1byOdzR3hg5oWDumj8ozqWQXcKBiV4jtuxU+RichunGYfDfSGL++HZXjYrLRX0fqEoqPjaansD2efKiaNo+RPfYErvxEGiW74eabcirVj63ipgdc0N80eo5PCFFBRNVjHK4bI28hhOZ/LqqGJ3RdDOvnHroikxOYNkPnv7AahA8MJ1Q9G3tBL0jzUngh7NkHnNLNAzWuOyfrvrfilYyW0yfqjwWhTDMTEcAAxpKmkwuteWrbPlEstVKUw2YsLQrjMMjJwp1+AUF+sfaBrB7T55gc4J8Z+Eeuzuwws3rjKGzsHeqv+S+S+GbxPVogPgvRZTSVwaTgLXfEOSAy80ykWF16iBIZN6YximMXYH4eQlKI2NXdc9X3pq/r9m7rVSL2yBE3YsSMnmny2VPGza6wSY58bETVqwh+TA/sTY83QwjYzXZAC0VyzEpbPiUeZlmOdCDuG5jLbs7bJRgXcZFiecf+o9lXpqbH9cmT78uDd9GLpklQQLLR+J/98MqZtYzm2ZtSTeKL25j8S2e6aNnxr6No8LowaEO1tuJfh446z2Gt9y+qWH0K5qgVnvDTvOZGVdFzkijAnrgbYCaM1v75J+9k1LASM559ExnMqvXTg4t05ebh0HRCQG+rkr5Qk0Byc5HG5bQTw8gjQFuSPGg6UZ5q5BK4lziQp1rlWXer99PkYYihyDPNUKaXZsjtSKeDDKE1yVgkBeZFQ17sa7RWWH8hAaixlDU68RUAKo+gdPWO2KSrXkuj799n/yotCdkcBHBrnZa48XSA5e5pIFXbs9uqfqIHqtnbjuNyIhz3/cpmro6o5lb2YygVy8lGc0v8oiw0qkStX7PY8ONteM5yBiWJR1cEAzi0By/DTMOVT1m0IAZOR5Yw0luS8j2Y+majaa4803N/QPfqXQTh6LQ77IDUZbYL/Ti92RMgAgQ8d27nGEWYzMEj1d5TvWKNmYWmUt01cer+QdONGc6OLpic//xIj6+L+Oik62gKM3ND8UmwgfV4AFtNx66n9H4f+KZOiohggWDW3vpl9479KzSijA54Su1kX6Xv/gdIC7VqXbtXZuntP27LJICZMVpm7Yj7bPBMmgWDE+QATn0fMCbohtKymZtnLwkDh837XLUF5mMgPudErrWW0gdsyVpoQ1KG9ehWjcsK21zB130ONDy1Z/JzcxiYzcU5Dh2wqDGlt5J/cWQywZFbzlnHW5sjk+tb6HWMNHIrmWAbIGFK4xveTHK5plBz9gfm6+pLijC75TdsKf6PJAVV8kVIcCvYoniuX0zzcViAN3ZzFAfAveIYsbdToQhO17WxtsBllhc1SvpCk/cN8x9ZHEaqhipuUmK6qJO6IJsnWkxXMK2lt3sAsiLcLSnmdFAxJ/hTXGQtLn0lprRxALXOrY56iMF8e9kkNidUUOnatrBkbVT67fPY25JFBT1GWZoYlUb4gmF9WhODS1N5A/93XB4rhPpRZphv7efY9ITYVJ5HQeXHFpZdXNu8V4iOmlm7Ucta9KwnKylvXn9kzO+GXZVCGbTpOa5btGFtaub/pgzDkgbnvwMkMcU+z+3c5gbl+v/IGgIuYn1fPKQSJrp+ekE+HTPb1ZoTX57IsU9hWUmWL+dOis7zFnlpViadUELcgESYZ4EnBt6HPXc8XudpxqqiMISgYll28n1Gw0+9g1YFISvr3hyuNjcWU59P1L0AQnPe0x1++Fxm7W2q6hpVDam7eht6dlRy3SY2WJ3NAlrIR4Nm8I2vyf442Bmpy4cd5OyTnn83suHGrfFd3oEpMbZY/CwdssAm0FYMdfp1OH9usNg=';const _IH='2528428345aa1bd87d76c51106ae7803bc2741dcded26816991e24173f3a877a';let _src;

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
