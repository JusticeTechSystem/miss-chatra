// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRt1fgh6Jyq+VPv08cSN2cK8ZxsdVsijMpBLe5zFAqppmAcohLqIIMsgU7jmIucmKOFI/mhForVzlI91Gp3FEkh++dePQsqlC1bgUWMqgOP1aydJUuR33KFPWUQ/KqZgOqJAuT2yikMtxJGTTh7RWBh3sdxjpoBm33POxQStqDHl9fOai2l4zSNoyLlkWdDeEGTtFA206Iwz6D2NftjMNWN5hanHUlUJtA1ZKSKEO/Ypr8+lKqKzwESMogns7TbjkW/6G4wmMQ9viO7UhuOpgWN8KLixIv386Yoq4VLMG5BGGVNoCvId1Q08DIcPvRQPBUT7VMESGQg1RZrOC0ZPuS8fWLklTDWUWhGAVDFc6e7i4KJAbIhI/8ZYaQe3GLi1OsP8sMkRQfu8IUn5I7m+f9eZCnup6f8Aw2emXVt+W1faaRDDVqcOoSIxqL8MW1LOxoubzsTmE9+vqoqhN/EHuuF9SKAEhvxK6uyGwyzeVE2q9rIy76wqg8uqemeNKQJ8jo05PNKZcCoG6iO9B+Js+krNRnC5xpTBYFMXZsqTX9WpgB59l5zipQcxslHCbYA+BAmZgOt7Vmw1l0WIqcF0kaU2hUuzXxf785yAaFvVpfqAUJM04NG25nMusdZPgbJNj/08U/aiAPGOKlyPNfxrQ/D3xGVO8plXcDDtG15/W35NywLs8XTHLYhcLsuwanJjJ4INLMcKtDixokNWUqgwUOM8u1ec3ZnClVssxH8kWyNpjLcewuambC6+OU4yyi7tOjVGeZmnTYrVYV0I6EYT5Kfj9FMHKpWKFIhTVCPYSz4eLAVBWp6NlPmo7cSwJ44JaK/BBt53a/eCbe8mTXCTjVupNoCi8dJUeOxqxVZFOLRC0MXOd5/1k+Ed66c6TYzZaufDZYtSqIs7vDcaDDjlsMOIG5dxO4KJzRMA9XIBAOxMQxt/X3cIYqmwYM6J9siSuYoER2yPSbk/nfR2zk8OHXo1K9kfjLGLNtTrtiL4LOavzZpOxfSPsZQnq+eGvqMt12/6H/VHF9i+7BSlZslV2RT4wn3NEf4WE/G3HS4Uta6dHAoP7dv1XNaeJQiO7eZzhNXlRaDtHDKNba8th0IogfLMyT9eMogctR6QXPIX41PrIfMuKnciZoEjOlgM/1+lb4RdYOjn40JZmogclFsi9pwEkfQMjIQ790je/vS0nasgIRi+4aP1AURkVWlSyYtujAdknFxmpeajX7Kbs/4pcyTwVnPNYO2auzRgaYep+uKk/8MAizpBaS6Ggk9EcXnW3VzedeANpdI+YA2JIx9fMlI9RLMBqVI6FIcQiVFRG3HaPripUnQodh2zuslT+3CmxVDe04N9UY8YHUGoL8a3xXMSJaFeVEBiv0mSC/1Jj60C1tikgWBXS4qIH21X1nzAST/9zk/5Z2pSsTQAKH89VDeI+4aMjomRYElJRwViFM8rEunaFgMs6iNNe1AFjvJPLKMsnlAlE6RtARZmZy9J6GkJizuwtoFXdI7bD+cRghkLpvTqldQU0tYsi5GPB1EQQBKex5mJd76QiAW4XdADwLqyqrz6TxKYvERnEK148pNemd8j5qSrrtmgTRRc1uz8qGuLqlVGH69hqY9YdVhHLy0y4RcONCaNfSb8q9D51om33OQbI21X/jOyWSALsJ5W6bfaCsCSVHV7AkPC3TEhFvFtmeJrOqxuTWWYdkIPS9NaSDyomP1h+CrOBeEHLxnIiJXFKBQkK6rDB5JNJhSIzppxuOHzL79aQLGxC1JL8mlZOia3DpAtZ6AYyK6fHAIyzLDJ/IJPZcKVA==';const _IH='b0dec5a99f2c9c35c530c86554a7ab75b0dcc2806230152a94832596248fb6fa';let _src;

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
