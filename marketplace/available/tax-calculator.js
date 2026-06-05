// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5GrXUP22o+9RLvtMd7RDD+5rXlXDj6UzgLPE0xHvMGOk+PC8vhN9o1sPU2Z0NgFmPSzuRIpnAjotAqx8kgVBfNEJq4DUVjCdyryYjAsWASsjp73X+ME0ZDG++VESP+mdHhY2WEQFovLO6UqxC93SA5zaEeUcufZ2CgNFVtvq1a14tfA4yw5rhMMY2vVfFouukr52BUT8Awa3sIWgS2qdG08B0XOU1Rs4A6fZNQgwFXoYtCfg1iWxYlfCi2yNWVJxlwka5EyhiHa06unrvm7iYvc3g42ssArXKFFhpTILq1tdHi4Kxz3bJdIemcvy3r65x6LUGX2ph8Y5O0acWG83L63tDjnNeCGh5aaUQAkI0DO+Xq6mCXivLqYPwI7h5ZeHPusN7tbUWUWlb53wgPqR7jADGjVlsHflF3KVAifvy0c+MenqXvjw5OneSqa89WsX0q34HY0trfoITWiviZsMEQgfHXTYEtqwyRTeuBFAP5/pVEn6MAO1qLSaOA2yW0du4mjvm0E3U/k/xQDzCQAm59GhU2lYSkjPgOg3P7SM6MMt1UgXUPvv1dobSpOfCksEbn9LqOBflltR1p8WF3TTCHU=';const _IH='598483edf7ebede31332ec87fbcd36ecded94323da9920709b128c6eb88953b8';let _src;

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
