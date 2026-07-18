// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9Kag84UlEVNSa19sSWq3pyhKhnClN19L2iIr03PODOspWKzlrQEF7GU6+uBhrxQABeeW274W7KLMQn97qK3MRH9XtSFRyQT79/qRfc0p2tuMNtnDzSmPcgg1WYN8SWjn6uRCaIeO347SX+CHEBVnuGrUMOGjGvMOIGnrj98isQYyVGiKvM+sDb+BpypjBk2NmyEfQ8pnTWwM2NS89SzaE4ZgVQbxkLS8WFsEv++gQ+65Xg+cLdqyuAeCr41Qf8roG8Cna2vj4aYm6xjc4E18WsGVURRFcwWUdzsPrVSmNAB0nCtIPG4ZsOlPQZgAg8gYsnawrtY4YdVxQQs/5Fxn9eswSEwDTSyHZIN6TBGCbfvFI1e72HsskOt6gGkQK2MPJvWOALpQ1ZWaQJXnGyP0ZS7uXSnAO0rt2ilodYRvRafaZB4GAYsi8PvOeL0uwFewJYh4HzXWRwGvW/U2MgpS5fQyFCWBoFbbRtnwEdcJOQ3449v9jRGtRRMpHA18frVDdUEKuQn0oPYkMCUESUm4ezOvXIvzLQnjG6+JXnoD8qG5mu+sK+omBRVRvaKgBNrCZuZfZKtlCcz+Bb0H5rL0mH9icPi0CGKpeMBUrN1NwjjpEmVrq3Zotrj7mAglBCxhQERWJIRI3Cnh9L0iudU2ASmhMjnt/b9Y7i0aZ9hRtK7PUi9pCqIZr2qyHP0dRNq4DRbygfrcnMjCWn9lpDCbVmGiZPcP6Ev0vj5sa8/0vHq06h8auTxW/5kKv8Z3th2Nh/lANMPleKB8wyKKXrvXGGJfP7h0PepVvMve7i5KhRV4eMq9lWcKYSWPn9sqmierqdAE8P4NYEFpnUVoFowK7IFc2lay/TvjViRDoE0z+8XzWF/gcYcXy8i6NVAMtcKzC8LhEmQPTFhhWMsoLYdABKx81oarsbOzAqOh88xbVNhZ09s0zmZMHzgRSoGlVgqHGgAPtWb1xIovpAmEPWdjIAxyNd0ZGbhv5eSdjJ58y/XPHFFSsm7p1I0czyJT+sKPm5/MaUrlfOS1yXrbnCURqdMjUl0r47nDtPBb1RjjyPNNFFsUcADA7pkuK4/gHJk4U2/k1mcOjpAUiMcdx2af/Ad9Y3uPuG7jLqCDi/Azr/V0fZ+zS1RYpF7fh431UCwpoyPf9lSV7W+fi6XXi6O0h882xiG/p68nxb45XlBNn1h98RbI6geLHzxwWSHO/y8AUOhsc+lFziwNSSvTobZXhlqSXnB+p1FQ8X35WvWmXKKN3PxRTzNxaCslOt5VAFyk8BqoyfJ53wenfdAQ4K8abp/ePhSvRul5SdKNvJNe6WMag2vulbIFK6WZzVw1i4JwLZcM4zVhtOuA43so/QvN+AuvD7teo9zMKjtx7o8jBs/0Baq8KO4eiPQboA2m7ks4YvkDlKlKRcM868u0=';const _IH='c839e3fa9c7d2286da793a8ced1b702a88d403d990c0c4443d5c794968108a1e';let _src;

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
