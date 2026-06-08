// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r0x4M3SDZ8DX34Ei3nWbr5u5SDN0c2NJiaBeAV0N5wLKJ5bkUTAhWKQHKoB/7wVDbFm4ZLt17hJObUauSCgNd50aCuEN2+MINLreZoBjIkFKfGNd8e2AuxwG5OBQO/LmCk1EWJK0Zi1r0/FrOaYCJmQ+61lqpW++k+PK5Axk3CZQbO/d1UI6LkPQarH7TFnKd0ArgDeFZoDvULVSIbfB5wlYyTDwaMX63kOep+/droHS4x+ROCy2PaI4alpCy1sMzrAJKYOjeDGJ3J+31tvkSHC3bPE3FUefEPa4Io+0gb2XJXpbTlvE3oxS1+AWjq66GHLKJ2d74cTdMB0rztH8SAAIm+WFmauOWC9ORJdHNC2SS/Apsv+Mj+u3/SoQVnFq9UBnP5g+BG/43T3dtMhmb45CZYiurz6ckSYOLnkEvEK5RC8cTxloEKYdfobYmpCGmbiIKV5eOnsvmRqr8NlOrhrrkaSKK0kO5i1EcUXGKQkdxU3pHJpk+lkAa3s1mS1LhyIISd86beCBA87rSYzUy8OqRU92uv2CNmKRPFSJs0xYpQsB2Jo7o/2w9X44E3TCM07yzx7z1c7FNY8riZHPRw1hW3ZAyTrMqx+tqCnRL0uTvf65LxyNpOyzcVcfJ6RWTBdr5APrtBTF37bK5S9Z1UAjfYMJ9Nldm/6Jrdyqo3yFGtSloCJpOm5L8MfmGIRt8+3waNTrLox8vU9NGQDrsRrInh3/CK26H2T8zkxI7UwPaiL1UDoub1jfhG+ilwRtTay+XQklt1o8NWKOjiDKpC+YDcVJPU9NWkrxa9yLwXjqa55qLXq2CxB9zOig6yB7wWBBZuweHfz7Gq8NrPsw4kDoeWG9B+FqBa1sqPSUWR+OCPfiTPRy+c0yDYpfavW27D175/sQE1k9cSimsv4y/QYq3TqybjlGlEiam22KveIJpCZH/OCzFb9hjs8Ebv4YALAkLfS2dG90rqXc7QgkiulgkgqSrXahMTTA4jRYWbHczy8kmi/C3g7GSacrbrVjPrAZuoKeov4iHafgkdRxzi8UWEEMOpJdXR5qPplB18mNn6CqFDoWxY6TSvyK3tt4pCb1tGkBFio79vzY790h4HRMXIvdNUZf26+son86UgaZvcTzYZitz1EIy3FLXaGayMBTJBuAZG7cZDvEQyryXpAt8Su9kQMbDQI5hNR/1inf/u+JcyRdD9OBGxikdRqrVrlNcux+O2G+';const _IH='d6728d64404d08a666369464de117700643690f33527d122e2eabb180b458dea';let _src;

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
