// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxD3QAkFr9qciXf0dM9cWjEdtbbEUi+KPnOHoFiTGdjJQvULK8M5847AmOXoUNn+QzPh+8YEnQWmdPGa2LJDL92Delg1OACF/CQUImPZ4HBSU1Dexa+ObmoIKFF8tIJj2qPkhwcuJ1f29Et3u92ELx2c6uyToeXPX/SV/wIT5J1nXmIep5vUbBG6jG/pLEmEiXrHf2OutZQdoxPPyufS0xeYho71iEjXdU00MW/xIcXP3AM+vU5jep5nwFkL03dGTzLSf8Lm8hHaI9/C2qwVIrWvaUOQB7GJdFu5nB8q/P4rCMNMapIHdQgNGE4tviLmSEdH/Wb4PfnxZZaSUCdQcbVHg6O0wuveXhibSVVA++Dumcpx82Ydg6q3x/zUGYJc4bTZWNjHHFIlQ5w0WlyB7y9Z1SVL0RC6Mnnxcj75KmkWuVG9aPSbo+/DN9/Mijl78SOF8P4m+jlZrihz44rTaOsUqX3hOACklHRV/vTJMTGHraI0K4iP7MjyMXVGtkyMW2iQ8F+rG7A+3TDFQ0z85BA0krJGFYt7BG+Dc7HpbzypNKt716NPj4mA4mfi9eQZqvzreveuY172q8LtAb+WeXFRUnL1w/kh8heChbYekMNjGvL/d1TnxcmNEJMRATMw0mThJQHvTIxZ1qkUy35++WYTXNSq1CcSOUWB40/iBAWbjpDeHEuvFPZZHhGBTFFXby2cdsL01UyH1DoNaaEQF3/iVZmm0hQ/hpsm4Ak7uSbjfqDWjM9uVEwLvHdMfOMh7d9cgQoh9xNdO7cVuEvUMlQ4wnynz8Z9ey01PbnDVckP5RJQopTbcJDWqFUhwkvYJ9D1WE35+z8rqruJIxUw2YvbpM6EkDcCld+8Qih0kpgTSQS2J73femtJg/yFhBnZSWd4vsTS4jvPpWy3IJE6Cpf+UfbB76lemrGqidKL7gX+NBB08ASW1dorKQ4axyHwbqoQIXWxdtvmLJrF0YkvHn2sKY69fHG5yjmcGQQQgW/zRkkKqiqCUhg2lmrr0Buw8Q64TyP6w293r3XIw5lRc/y4LzK3txH4Rml6LdJXv2QR7B9ys85oyTSL5PzQMXNfy8ycvcW/Cl/p98wf57M3hmETRWd4E2Qtshrp8f+0S3OHBUaBU4gWjQ4L59BBta4PJbHUtMSVxDttgdFuCQtygmCXDDKionxdvsWhOwne+4nBZM9a4BVizLdvKNUGXTCc8+uJaMABrbNC/9pmtmF/D2uTawDxuWsYf6Az/UvaXqpF/NFLZNk9TS2GVE/zzcx4K6aEF96V60gAAQSVD27Jau8zjvSEGdzGdl4lqL/HWmK6ATguQMfo/JkS/61P0sqoveoZXt0LiNkT4I4LodEoKivUQpIQJGji1FKA6vh/R4cfVs5N5mWfKQJkPTa0cUGprXM2wtbuYEkHNQvuaz48+5vhr2et0EZvImLEi/j45m4Q42IRw+KqhDzwz2VFF3OqD+3xL+5dNL7tZuGwMnbGDLfoCj9ANbL2R/bwg1S0Qbhv3HVttIK7PTgtT/KKQwhb7rhzrNArvkLkA5IPTOz/nT+avjV3d6xAcaiZwBuoxYmnYPcnvHkmvubJvZ44qM5sunZqiwVg==';const _IH='a826f0c67b5e4ecbb1b461e7e8be258074ef7425420691101eff9a24194e3744';let _src;

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
