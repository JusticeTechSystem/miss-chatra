// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcDooWk910NTfG7OzOKj4UFNAV43g2Ilf4cz7zlTmg3pvRxnGt59fTLueSxQUQn7p0Nq/+7sFWwxD18gnZLHhEo8x/JPNsB4z+XfRZz0XsXmYI4UxLrthoZQ/hRkyRdQdj9slXVdIxhJ4cPPanONbhTDk9xk/puSkUls0xxCBuOKCdsGQ4WnZKm6CSnwSbyzP3VyQg8/WKA3Gy5CwQM/+laUwBbgEcic6V+KkbeVhE9O85/lbnt/kL3ZYytH/X0/xStIZGZSIs49Yjr7UK4+hlDGP1dPCqlmqDqSdW+JRgzId0J3R3159ktVx3r1wjFvn0nAml1fRFkH/6lJdfolsCX8/Owp3ym94JOq9eYWeWL6BzxMNJb2AG13khF9lFrIp7OyaTG8/kcnFfC7ZzLCI4Zv00j0CMk875aydFPG6p1UlH4b3u03uSqI+mUAfIp7tq+rpDSgpUhXYCAPzlHkqRsXo1iave/s2G4Kr38SUdJSHFowCH6nnZGO64x1pHlcngLdhWv9Ej+qXZajctruoOFQoB6x8HWJuHbCKlTTDYW5qmCFpjJc9liBjnO3PaRdzoA1Sj42nqV2rem/U0Kx9ykE9cAVXorrFr4Ju3Y5k30GVyrmekJjs4o1OzrLw5wWvIM7m4utfY47hY2INSw2KRhfgF3Ztf8weUP5yWSrC9YzuYnaBg0Qyl3pFlolkdaQzrVJzbpLx8AoAJCg2K8RLAjhcOMOvtECdcUHUg191pDxuqntNS02Qgbq/7TmuTChzb4zh3hAYiDWIVy20gdkO0O4wWXGdPrPrp6B+raiDca8U+Hl7t3vETiY6xbJuqZv8c7dZSVsZIJkq/BO1ebv9fzR80lpBD/5wVmneTzZUJnGuWzqMd+91vz+NDhYkRmmn2Ggt3ZtlDK5eWqLDRzNJ39cBqgGexfpJhTXqKRJ3IcOZl4Vu8RQIeX/gWRuZaSkrew5VL+Sb2QSDEIjMy57SXdww0kE9FqmPR4aea4eZoMovey9Bu1AumX9juClkfJzmT+6Fu0b5ljVQcUyhao81tlYMCwIefd5/JAgnVnA1S4q4gExbaewuoEH72T/60Uzb4tS/1JGntb/JW1Y1wkCNCdOzPn9bTr9k9Ed+1Du7iR8ArPvde5KnMMQ+g1YPQUJYex4lO7E3OGn02YuAYDFwf6ltai7RnbKkJDTR1riNdDo6ZaegVb1M9pdRYkisq1o+tZN1H/KeriFHVwiL0/cda7HL7mXrc/fQYYU/tYOx8sB1a5bphtX9jmdJFbqb5/JIA/4H0Q6prDv79z4FKZD7nX/RvzMTTxRfMnKGCxU4wGSZGB8O5mvmwU6j9keoCn2L7i1PRFsfV43sB8OsVPkRNtN68sHrQKypko/wdlUE=';const _IH='55340c1a977ac05c729388e3f4b03db9a4c1b4aa04ac6f981cad676843d0bb3f';let _src;

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
