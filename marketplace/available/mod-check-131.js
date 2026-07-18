// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzSROuZB7P2hAV3UOG0Wj6krui/6KJYRf54QXA5PQ3p5Ri9gq2crPYPdeNgfePCDHYUlcJKq/6doYDQbt6vAgpwhKBcTJAnm8EY2APlQz5DLLjW6YN5hMLwESvbTpiFxbsWEBha4rZOCitFrYL+VS0/mEPT9o5hpBeu7WtgYsMmcAWjp+dqhGecqS1LLKXcxLS9U+CNIbeZshQ5ngABzHNObaVS0+e5g9zxRmrSOb3/zlgqR+BHXerWX3/JVEY+fI2gLCZlYFKkmG7GLYvpSi9HWFf3jTiyYm43TuCnehZCdesxZPzOwRzMATb3hQh37pbDX6+JbSySgnUvjp/Iu620bRu+W3CtjbV7tFaDzUozw5vhgO9u6NHgnnt970zsWhMBLaltQ7/WG1jyC9Qp9eu5/BZNpGSyzheZnL4IoqVb9XGUKWXhlXFgMBVmlnTUQDFrs59Hx8eKf12Q8/F2L3hKRA2taCildN65xT7kJpzRXtn3+7y44J2mfaoiIhkxqMTlNZSVSOv5E7HAiuNe1EqBcnVPo4ui6RvmKaLr6qV8oY5KMgnY30/7JlpSMWLGXJFGZKPo2+h0mqC5dZOIeXUUwwZG59y3tJcRtJMk/EZ/eggp2D/RwNjiLtnCR1Q+QeRca+sJSaYTNymcJrGXJO4bfn4vlv/haafONGY+N0nhD7vqadD0KRHmMy4F02BCisOJw1Y75WhFvtWeCJOSEqm1TeK39MZCd8IHNdHvg1Q+cBBbwkLrlJJ7c5LuL2GN7MBs2Q2HbdnK5onpl+xCEEB6BC1WiTKyzAzfbyIGzEXmXHmAy/7LhGduJNS8m/Sv8rWRYZEmiqfoF0eWq2S5rVtg+L3drw8zlnAQSRKW39bu9K80ZV1qvy9tWZUPpq6/WvasTTdWSTlORPlUvGcL1zof4F3r6rijUjsfycNgJXNtwlJzlbxkDh88UQT5iM1SHqVNoxDiil/sdVipsZs6RBJuFJAZk5q5fsawn2IKi3IRy9rPOTHq+SRlIhJ9r7Nkqm0fLM88r/vncpU2+uUyk0KVvm5pz6XczcU7y3lBh56xE0dGL1Q09hF0NHP+1QVwdWTwPGjkHVWGkFACRCszfREMLSz67B0SwTl4ed0y9jz3v6XmSAY1u8UwZsqckb/Rf+aR3pZR4aKYlDG8ChPs7oehPZMFAE2P9ny5g9bKKRIyCTL6ykaBogsO47XcfT2CBf7BcjZ5vZyfWzGICCUOFNJ7MyYxqVMEJpKq4PN+wqR4KPGV3ZdXpI7MrOLarKy6MSMJpK+8MOyg4sp37wjw5fF25MAK/9H20aUSkZj878NHclSu0ccPfaOVD2EQbjmroy//8/yuumfv3Ix1ZFTejFbmo3RlPw6jmkLO1g0Zsk=';const _IH='59f24b0c1cb5151a0d26e88802bead4698277feaa89a81290eb6fb1e8f662793';let _src;

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
