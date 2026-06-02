// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2zMB+9M8fldxqWwZDsUr4UbvF9CUWnsaCucUksi0Vp+TTyxzSPYbfC+dB8nNgUH7JXsupkUwwYaqCDT8vSYw/hPgtsd0rMDsHb/uTP5Efu9GjInjcVd03D/61kQydak2BqgM7nJod3tGA4tRV350ybRQQei/IzYqwA/W8dWyXOvsZHPDgOvt94SCrgJwf80AG5eMP+JFk3TLznW4dDJXgrp1lnVyFaGtVSxkiLZ9SJIuCVpBnnr69stHIBFnMaABVazJVN6fKROvm3pqMlHx1Ed0Bn4VXPoZsmcmKQhtFQjR5zgryXxJ6U9VLOy9fdgH6ojY/ZKoE+m49CIiAt0uvKa/mxxgbBQy9LDZghuE1PiXNDODtsS8JtU+7dDn1sYrE5k8a52B74tV3t8myYzW2Q69licLWf+3iJOIRF4CKI/F4+5g9Q4aDz8+L83J2mtLlTwSPGa9P8jjbv6M2g4Lk10GbpQSm//NsJYaK/yAvg6CdrhXgZSD/hLoEnfJ5z4m/MNVhPKXauiOvggpQ1hhiQamGQwU7AyrrZgpyBlpYrhRTcT/1Wa2XHUOHmPcAyVQ32TjnSiSlKOAgr+b1R8e6hbeutLhO2BgGl3a2MJyFQV+hQQo/X1C0Vo0IdOgK1/Z6Qq0Mpk9uZnIUQfeJr+QHYQ4qRjrpSkJnrKYIjpA2op1k+Er2UagKpUVYHbi3MyTdVp+veRw3PsWxRERxXr1ResiY+NPbq+84j+int96txg1VouaACbsM446Aj5K3qD90P+5eH8gZYHmyL205MWzq2lFkuHEwMVqlVwPydg6ItnWKw0Jt1bQjErJVzd9KoyDt7l4+tIjrRXsMZhLH4JOowgbQv9HBoJQRJkDxY0QXo+NWyw98pO6kMcUpYFXdEbuqDRZZ8uhtVUTSc9beomD2zmS3RlPej4Knegr5ccyUf9JFFbB9YPeId5h8A3t1gNp4stOLbIFwb8fUCU/45yTSm7Lg+WJ5bReQAs0s1a5BxQgIcHmrR5A1bfPJS3Ddw3aEUz2zYZBUsLxV8fw9hQ0aeWZOLWO3WpXSs6gKW+gx1rhDr89sXjZVky2CwXjGB6Qaxt6gYY8OQRxqX9dS43jTm1znGB3nzkcbP1Ij9hcvPPxWWZgUmlGh34nRCodKfxR++MerY7zFUDKECLeGJiA7PSTBOrIDupKCJF2VlNsen152VTxVuxvQ+lcpcFzMn68nQsX46/ZSDfEcLxqx/ptN1vfyuSvG6tBQSvEN/8zlwIVBkVb2wAt6lWhXlL+/i/MFMFXNUlUDSJw1/cHPuqxp432Qfrugt6cn7nWSV3TWgCQzah4j3ZaDwXTRB8eN3b9EZrkpNmVaV2vRkt5GC1Rn4hTdyFO3JWM+UkZSJ9J';const _IH='fc3ebdbe57edd8df2a845455eeb3fdb9c2045a5585db2d3aa24a22cf74d81927';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
