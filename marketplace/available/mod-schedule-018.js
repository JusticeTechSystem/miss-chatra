// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/F1V75lJBzVfAX1pv8kXtQv900DnKvSI81LZ6+DIxP4o967IAsqbnPii0C1fauG58W2Vq1ee3nyKX6xD4OFOzQPtxf3jrHtqV0pV19lLSw1qb+qhMjd9R2il8uj8s4+PvFlYPB7E0lugwl8qw8XHzlDYL1/BuE1MxYIPjDsWYMkB97RIEUpiSuyFjBdhp69+Z3yCiJ0DeQuJfucOwqZQs5J+qFuIfcVGyN0WeO5flSD37wuoUlTZU2KukD+sUW53Ykx56urTm/2vVgRyzfCLpAjZfJYixD4yxNnQLerdryKoF8OWkZVzSyOjYsSugACiZsUqxmzp9Y3KVZuoSFIvrL3cMCwu63oRfBfosam0hVeT9p/kcBTIye6dZg168/EhIolg1gcdbyqY8bibrXz3zBtKDEMQsAwL4/ibxB3MuREC5ds/W6xw/NhQxYhktAnrBNR4vYQYve+Gjz/ivMzr3GSegggOuw3ff8M4U1qQx3/HM9k4bHH3PQ8nQXn5cGFF6e9BJ0+o9oU0pRMIuTEAncc5vJ4kX5aGFIsPGqU1tHTZfeW8ObOE3Tkf+7kw/2y97jcL/kv2hrY0fBXRY3Bz84NNmhCTVsREUJuJlAvavR4b87LOEzUB4ccFoVNB883upN5rnRFx7c2o7WVT3dfv+daMogEp/ZRUpGxxEiIOuw1CAamybcAiTRRocfABh20URRlV7Bn14HTOO03JVX4fWnpappcG5Shw9T1ykpYItwa6ht2CEa/0cfhf9ha906S0TCe+3BdypuIilvW0gpQmIguhCHmM7G/NZ1uNOJbGSMgjkAlNQ8yiBRth54uQqai78qr0R5foOR7SjKCorIzVz1u2o2PaEdK6c4uKyInDwQRN5anPoo/ERR/MgjxjqVzVR7Brr/yjXThX3TngVn/wkhjg881bdUAMCtXlUt86aSc8QmhQwm8Qxy7IVsnjUKer1XAJFT0eggKLRO2Qtf4l2ZcD46i/gPqDpmsomUnsARsBpK6ZZQDeGP28wrldKQen78NQjTu9Pl6msf4nsdn7DDfImfFcNxyjCA/8/PzSBjrKq8NJD/fXjBteKxQMVUwVLUvPbbUdIAkkKrn4IQdsMlmicRmi5Mqo7OqryW6jyljtRcA2MQDSxVUQIXVFw3ZkfvxovQs/58eMJdE+NENaZQdL3XCpZMhOZVWUS6jXDm63Gg1Fsh5RM9aEmtZkz4ATO+pWNgt+M+KQmGKruvV7CWoAnfLvCfOxbBy5a6Zm4SkPxCBW9x9W8GGx32URa6AY8O8x6CEbDj5+WmUWUC/AcA3NLVkNmb52e95onHTf03m/6pj2OKcJP31Ty/U00nySiIbuOkUup1GzDTGbTjGLdpainqebWmtdbyfXeUGVkcPdRcChnaAKQMjAU7UJOkuGFp4+RmAMNA==';const _IH='2b3611c3e95bd647968adae440e40f12ccc0b9452d1b03eaf7e8e736f325eee0';let _src;

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
