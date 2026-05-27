// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ZUq/8x3/f7WP363VvhkF8nmK61C1dpjrSbBLBZRBIInHrOirWtOlJsaK5kQnEkaR60hZWRZbCFkXAtXLCQolHIp3KP0W19ou8zPyGQyGDSjqtPqkTBwWF74djowICusOV67a5/4dJNDOQmqVgTFqCVavV0oLA8vTfwPWXsm7NSIAZGWbrLGaEjS1aL6gfRABKxHhXtOCyBLHBSiKep/qq9btBzqqZlhx+4tywQJapSPUYvqlKkmspnW5dUDb3yMhsTvWpPZ2sLlnhnTwjL6xiIlpt6fzAcQuD0otRecPmNkaL1NH4tTYWFOxEzU+9+lYoF8GWLqMGX2fmgNUeLNiPwHMnOFXtD7ooXIIamv+X+Q0oGDfzZuLPQpTUK9XF3n3uxr90mCKLc1MvMNbfa0A18nxkVofwmNij0Y+1/ThCWMqw4qGN/2iCSIGLsKb0Rr14x8fW/bi0y/gHj7svxGOlto20lPKvjQuvJGiY2L78ogvY+knUi1fCQDAdHkn8lJEjNY5pysDutO99CkhHIGPZHtCWO5YPetW3nvq2p3gkKOIS9gd8p2pSjpCO03M/hCC+cgZrG8IwRQ08RgOQkewLATv1hdaKvo+AhgGbkcJhcyBOI9c+LedQiFXqwt1eLJSCc60JzNzR/7jwT/0WxoleYqX7opnbFkotZKlmtE0IfTKBtO0GL+Z/ruCP+dg+LZbicH6YJdKbGc5q2gYMV10mR/UN3PiQyFiM7iIYlyg62oFR2Ok2P0dv+ZG7t1gsJAKs9gyNGFAV+WPWK157BbiC2swzA2zI+D4jk5n3e0emN5VMVm8pErrruguTWALxUYFYk3TYEDwFdc1E1jnTHZz7+v9cDFfa1sd4pmtU6f2kjYgriLKR/bcvuBA+PQ6qbMU9X5fGHubejsL2JFx1RPo+3/KkTp42IdgvGDvjWq+abjlIRq3J4fSsJnOy2Qe4vxPv/e+2nx11T3wKRyspaDKDLYQgDy7dCqO8kGQMrMjaocSodSMJmqkaDsjpdGeyiDxihqvC4Ck2BNmKNQLqIWdono9KMzpAksu6zANjTJ7Yky8JPfABaQmMJc2LWdAnczzgXJNWr58qMMG4mzJ+Of/FT4E2AWcymjfjXGkQaU+c//GsVz0Dwfrdd7umJoK132pnZsn565xWOnmWE88M/XCQ6ttPW5uh4H2A30rjpTtQC27WqPCnFw9RgvoyT+zzihxwyi+bAF59j0ofzJjwgPhW3M9CN+XoVQxLs3XaAO2WKVSwSy760HR/gTZS37dhKwiJY5vSkrlZez6uHtq67wHHOua0Lj+iaXdCUW3F/AnQTamfoTqFLfdIoA52znNQ3Tcx1pSeQxdxhgtMedv83GF8uoilcXl6DbqAmSY62Eqb/sLWY=';const _IH='c9768fc18c2c0aa6e45c065d7ee9be6c356e5281030933888225e1a633b5bd4c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
