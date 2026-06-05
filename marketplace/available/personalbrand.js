// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/tMiMTOeY9c4qhM8yzN956M+8tdI37tHT77LiE8tdb3UZKPdZt4vol3Z/av06x54MVYg9aWBHBJRg2M2V+DsdmYs6OEBefPoDJUnm1bH/3K12V9l+mQ1cfCCw27c4oX2wUf4w2QPR++/2UDsGXg2e7R1DOJGuHr8xjoTNanDRcP8DUAYVAX9c+OdYmv0JHhKogwWNP45LB1bei9MuQJcgpqQMhzDCUXX+/xPz3mkgAG51KfKo3LSxgmcunPiyv87WWHaUMwnhPO5c8bwkIDtpK+INtXhwap2SLY8hn3V0P33VqdSfdkzqQCQQK/AvZkwnYSDbdWXA4JoL61sBGA1WcT4SLSAjC8zbR1x02Hkt4J73yPUemx7xwG8QsIS29JvJONpPV1UK/RAMCXCTK8W+pLWQWWEuhaZFD/q3ury4nnf6pj6HiMP17GM8m0OZWPz0Y3Fs+NuerfTpeYwN0fptpTRxug/ywNHAMM4C7W+NtSvOUG9bRzhDUMeIbZMFTpj1e5eIgb0eUViWEFpNhVnMGKdyhpnspxOS9OC5yGBqSYKZes2lVw6cEmxquCiCNCHX8TN6k/pfZw2vpimWUdogW33GkB+zxDh8ynj+FC88TrljzJmtLcm98AjVvqv2jSCeDPA/J+6F3/yJIR06M1FhEQS/KPdAkiG0YmS3YmRQ08oxJ3ff8Zd/Y+fuQRm5rUv4fx3dQM8Iq81Lj6PWZmRC2IQjpM1yGB44K954pu+DHERRTeTodoKAgYgfNxctZK9l7xjTj/kxny6A0Kg/zZL83wvx9SqA6ANUTFN1G2NTYHQDeeHCdvkUjs7RG4BlDqVycj2YeuHKNxgMyyOoRvGLa3M+Ijg7Xg84xPVTKyB1O8TiANuc/YFk9DM8aZJ8jlp2HHU8MIAQgMJjjcTGes+HhChsi7c18HRdK836XAFwB05uwMb8wmAVomgGdCsr57RoPtZM3QLFPAJQhoUPTQ8tv2xmVeIcb4ihfLz21qq+Z1eYuVc6nFhYQ/kF/pfs4xQwbyv30+vZd7KCsN7FURvpWt6A5ImKNflvuqsn7X52kKbadWKMwtAmekAjsXuT2UPTtW792kUoFtcvI0qLO7PWg9dMjrkQRp1JzaAnTYeHJSIiStsdhspm07K9L0Drz+DlQUO3c8/YqSatV+9iAUlZ2lYGwQYfNTkPuvHRHAQLxbrP/qPaZSBZBqpQPDrv1OWKa+iZypGT1w=';const _IH='50ba2dcbf0c32f5519c9c74391ac0bf39e59127085f50b735e95f47df664dc4d';let _src;

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
