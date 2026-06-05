// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vA5dzv8fyjsPHJFn37nk4OvQLQUzzgS1dZbpthZkj4Daojmo1y8qJTtAa2vXsIQXtTueIThWzZg6HhOWA0hhF8wjdGgo8CF3OydPt/FRMGXAnshzLSfF4lIwDC6/WG7RuxTSvLnnepdpnBuUmSwdT/cl5NVcy1babjtQDmLld2QPIq/vWRo3tAtBuJlqCkCGqlsk2nnml7+HYB/ytQExySlTE/YN7B0NvWSrDz+7ooF4EJCnXANh2FFNz3UZowb5n/JCplgSZKY1DxhEy7uYkY8B9Euk4MP2zKDzP3CvmjIkWbfyBpKRzg8DymX77x6Uf4ZPJbwpkkaBGj/TAwm8kGkV93RPfSgofeDPDz/9f/dncJ1bfE/jLIXlX8TU7C5YkKK8CMKZAJbcXmzbKtCCu+dYaEoCKTiMek1aQwLFlleB/hiv1lC1coyCAR8b0MNjkWsmY/DJk4C871f1IkBKWWKVTX9pjY6V3hDPvFH9Si31puWeq+vg3csWZqX5OlfFQRfEtL4Z3z2fJxRxWj/YfmVf59fngtSpTI2vKzeoFPNAELpWVdt5b1trEiw7TxD3CEewsFut3ByYNNgGvbXAQHoYVYTQz4nxi7AYIXKQ+jMbXjUr4YGZU7RpOJ1H/Zp1cHITur6Jms76uRVZfQYjp01U38oXhC+vTMQudebD7IN7MQF3eOjMvhZV5WLRqskNsMlri/BOZmqBsmbqKSbwEjWU5E8YK7WcNmWN0vClhLVRdsloFbPcP6u/ESGgMB4FT3PTL2N3gWNGT67OGWB+eP2I9E1ribGULOxsomlMbufz010ZGm3gtACwb6eFqA7/WElsHS0vH2Sq3Gn6zmXkGN1HR61PPq1ItpYY+0ylZvBnIVvw2j29V+Fhfe5ouKoP7wZiY3jPaHpeqVe4tsEbuXpkEASY/Gzg3m12+o8TM7NouCK20w0XFlmDyaFUVwGwsGT+yAyUwhDQUMmLT69ZkP5eCUrGxdwggJn5KkAjhB/TIGK1gntDmzWmZTl1vfFc6nciSiM/A3NvFSQigSaUwUkJkQrgfvIITihaWNOAo1FN7BXWwm6a3qn0D7q0tbLEFl0ALgOgzst/so+K/S7C+O4EKRoCUrt6xh32wKR6MGYBcAefKJryeb+sMyaBZ8wKYI4HPlRXdrAoA1QgTqRBq1R5BiPi1XwSpugnG5sz24SDNvL3fTrTfj3JySxRmgehP1Dt9P+y4JRF4CQ=';const _IH='ea58b99fc295170cb1bd267ce99c68bddc80dece0c4c2d66b5c4796af2457208';let _src;

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
