// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rqc0rN91rf+udCF2pcMMLiAMc+OV4pOwFsVf/oQ19Wc4F1s8KmM3A+BFqT+8R4wVpJgPiU7G57gtcrY9gGogBC3B/3ILiUriUoEQUY20gEw4zNsf2X5e9N2MLySGo2dJ14u+EhEccJHq2N2fkdcPJH3A7AqehjsTiO6/A4Eixz29V7/s6GuBk0Rx0EPxEeiabNyp+o2WK94iymWLjNv9tZZiNQ9qAJviolGfm1PGz+V7Fv4DXVHJhG56Wtuls2auYML7JhP+JU8MRt48bGwatXH4+f5FT9fA+Ujc1VbtWPJBJcMB8e/8b2EnvZDdOFjqJYmSRIMLcKS3CpHrkkpB6PUyUrmCybR27EcYLHvEK/9atYLvpFIeeWy39aZboOYnxBeo0pP9k99VX/9A+lEYagHgu+EXKPSlQnBxoEtrROdi78vpfLnlnn4MYlR01fwt/0oRx5aAHS9+J3ohvQx58gWbJEsusdsh6ZIF0PrGuTw3lyESxRd4XZqQb7nRqOFdJXTYuYBtwdstgy2XQ1OIVIXmcyNdDUUMZnlzBr574+Pse31c7pNmjsTKBse1G4bAMibhf0yWW9/H0ih2sQpEiw+5793sg4ZCXIe5o94MK3RnMAsTXeoIxsKBW/2YDOfT4htP2ntm/faP7BqT6+zt3H1fThKu2VDPVCR+ZYTvnyffAMP4/O98hZBFfWlY1ofdtwe4rt1OmgJSXLMUBTWknXypznVq6gLfJnBRmZ21BfGrZuhKDeDE101jr3Xu0ZIQqq2Z507Vl/Jq4MCWI2E+EgpZYSMollvEQIm94DR1Q+s2dYbUFW9r95Ym4iQqW3Y/MSsTtcEk3+hSiMd0G4l2qY1y58taWobgywXrn48VQTw0jcEMlYovHpl0W7W/G4zHhhMFh+h6ejBlBnr5t/CWDIfW6ox+aL948rFKJUerz3q/TRMbUk7bIP17MS8KQ2Zm6YuXkxpAvrN/VhT3VdybLqx9qf2p5lHL3mFXju3l7HjcIwBAZdMadQpqsFqBC4ZJMvq3nTKROxlp6N6I4O3AgThZqE3suHkuFXlJ4DSRwqrVFa3yvYvsehhxavQypI0COJRDjBmX2wl6AsztgOjTimE8fqFpbn6snZ0t1HRYT0cR29oDSuJWL1dixyLUlZWSG4K0i0usmgu83XeWJl7ZWk510fADyci5U9/duYwARsY56r7ULYl8ptlGkNqnrHo7HD7al7Bfz2R2hGcRQpiX51syPjb8';const _IH='0bb0e32061c65130f5416dbc43b614fe79894ef06d2b3da1460b27a88c32e7a2';let _src;

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
