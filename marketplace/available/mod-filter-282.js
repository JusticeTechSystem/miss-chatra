// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLuZjD5J9Y5APexNf221RxAdqz1ub6vFO5DzA+UEz/ag3OaDPCnNi4+7lmtgqESKIZf/2kTS+E+9lo+sFkmweW0aDXumwtK+TzA2R61an4sXjstkP9HqIFhrkPZ0ceBe1j+v+rEJKCZlTGFQ379V4/Pq4bjYHOz8dMEVTedPr2fQzveyexjeKEeB4Lf1+uYyv46LelalAh+abMmB2X4uzkzo0tiMfb+LET3YOe4JFq54yeQDjFeIszHh+zx1jXmMMewIA1BBHeo+JHl4gnPO/way+R6u/JfHNF9DuJ4BAM80JhgFhmjTw9Th8F24NR5MW9X8RF+QwIyBtapg40K1VUC1coljocF7RqAfnwzF9XEUNx7AqUE2u+F/r3V5/g043dTQBsstxMRy/V1K47dJQB2Cnb+pj/eDRumNp3ZhPkTlD0GYZWYAKzXEpTyvPUG0Y8qp4DOjXqMP08yjyvdBJu965hVdELhYDo8SatKF2J8mKuaqNBWaiquHHZdvenNg6fybLzFgG+UjAofdp7wIy+n24Qjv8P4B1s11xr+FxZvbKutvOlkzSoxQWK780U33WXOrBMbGNTa6OgFO/JaLEY3igY7y7vLmGEksWijIkyYJyZ9mEiskFBLyexM5RC5z7L2cT1FkI/VI8NAdyMPpbRA1BBV1iKCpY2OEO+Up278nVx+Bzl+CU4kduvktPubKhHH9oqU1IXo0R35oMVQKeNTHhN6vnJc4KNyAEohaPdQcO9DYrl8OIDL3JsARFtJeA5d69rXy7EoCRSXilVpKh+QYVna9XWIc9nkpUSe0CQjH8UhQORpJUkwpNYqcreSpwHgDwdSI+MKmoYwiH5p62xqgFWx5sFm1FPIpv+wqO88bomH0QBeGRoHATeFdzZXBn1vnUlyeoWCfSCWL8Rv0FhpHMFki00vR5mlwfVAGvGFiTRhBcSNSCKA2F7oaCv8Zr3WsWRcHInwliwTIwJ+n9yEBPqapn2Co44DIQADFDA/GfLFYmvnmI+WFNz0fMQkOWJV6B6sdIP6BrlQoKhYziUdkZATCOV04xyuvcT9wbErS1rHpS/3RVAQ6h8NZqeLskaWxJ3RS9fn0zW2MazgSKoKrmDC2eBzGxFQySJRURi1j72nwgg/6dcoLrHA0FDpyy88kTVLeAnsgxWxzvB9+OoJ+NuXEM+nc76bm9GO15TgcEFjnjfF1PPVwbuhgY1ipuMRYaExBtXupDus1EaTxSgI60uM6YTtZJsgPJ2scl+mbop6cXRydLDsvnSp2+3oBR1ZYVzefzWVUw+9HrsKTAR5JutYmLdp9MSa/InRul9wHo3TEKBcXhBW+Qs52OAJrUUZ5X7tb3xJKiUEvCySsneRNgzsQF3kGVHiTMizFrmq7Kt+Lfq7b4g==';const _IH='154e0ce60f0396268edf02b7f2adc5c39992637bf103c04a8d489a8e156f5469';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
