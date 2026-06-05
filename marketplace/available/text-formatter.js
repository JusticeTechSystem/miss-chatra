// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g2d05LRutGAHvz2N7RNKEu1sfIHb19f0Qu8LkkxZS2MQmDQDul2idpsi/ZO5t2dJHUNgZqnnR/Vqo8atwR+xoOeqQjeV9JtJeSte5LK8hEG27eS/4PW1NK5Xr8JcQ7oa90wjCNh46MmhMT2XLh38NS70GRUt1ywr9gVPrmcfnY3UQzEMcU/EbEk55ckOrWkOwSUpz5G+5i305ovkcXedy737443/8ZBKyDP7jywitHzszHWsOmpyqe3kWR9dXwWCmYRo0AJa/2mdHELxE5afckymxNfIaR9CHacFlIrTxeWkI2j5roqBgpZZfb7fujSfvMfkbm70KbgVnPl8eOdWQhddPRqYVF8Mp+xh0QfvveBqvBxJ2ULie5eveYlox1yfjt56Mwr9calmfPHd0wdfoOJlWsp9Q2cOuH/zBYaYtLgG7hA52aL3BxPzRoLum352WZ4SX7YDFYakTnew1SpMrSdygoIJHrIOmvMtq/6XbCNMY/31VVA+r40t+VMmeExxJi9eV+1M35XEN5tMKo8scuZ2vLujngFVtxjqW8dKVX2cwsUxptrpIcJAUNZIdTCdVa3E7XjQQK4u0olY4t0krFQRBaIGEglQrovJC0E2keyJQ8nNuP5MlouaO6/ulEmtY4LeNYdXkbkOevFBCV7Q5LQnaFK09Bt57QmNzaEjoeRmOZFEXE8vE9YvtS/qWFPUZP9GtspEtRyOsJsZxIVlYS8uRfOc45LphhDWrE25BXXehtdlXMsZu/zk9Y4iHAvBtxPSkjzDpIscfJImYC/JmY/ldkdKoPHf/0uRlxTgf1kHEId7Upe14jne6sI1xSc8vJnpd/d12iXztqFLlMwCz27s3a8YgBakxUdXvuyhIPvtX2SllZKTFkmeWScMPIjAKwgvAK2t3OU1Z65sjADFEKv5kt6K0KU+zolV5AfdtsAD0hekr28ZIFRhayI58UByrxxw/RAuYRk++fKeRugX3QN6DU+7cW6A13CglsRIcA2Ws4UNe4N+hB5B5BTTeA4XzrTiD8qRv6UULp/+7O5/8wR/ozE+/9ZVIkSOtTytFA7vKGCGlMsdbaKmAb35wCaZjnbArL2gJdZTFKdOG4oMBhvWZJIK0mhSJ41V7/PC2VyDFOU3eiYRYFQ6Z8cWqGn3mLj5DKfKC7zj7A5DT6ogyugnEVne1/y4oEuf2uEG2Q6Htgxyv+u8TGPSx7oqScajwUez33x3jaUx9qOx9+Hpaue7jaORFVYorfdpaVtebmJxEZ6yn9DbeyNEFtuTemj6Z0qasBOhyYW6ipGCZ99Ktk6pRwUuXCVesUllK8U6HKPUoLICD5TfyhdWlbJtMeln8wubDVEbOtbJgyZ0vsixbfSPDbeslWRLK2mcWZi0sHMZI9Yabd7LRgeHMklj+4s8NnwIDSHuH/nEt0lTNFVA00uk1IJ/PBx7lP7K55Xw0TC1MWXP6nkYmAY40AwXu1RzTyilVstOeXgHivhI9AoDNC+CbW4MJxq1Ep/wSoxtKYvhodrG+CcKfp+8XiS00rMqB0c8Dryovkoc7B5L/u40sHQOGxi2xHutOncQ94VNQrYr6dGuWYpRP2e1JFWv5pPYCj/8WoTS0Mqzzr0nIW5RBdsx4RH4Me5zBM2QFlRL98QVXqWhAgKrT6zwQI4+aSMC4SnfA528';const _IH='a5aba81c9efe498bacfdb255c5bbc210e18367973ea843649c65ee86117b3c1f';let _src;

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
