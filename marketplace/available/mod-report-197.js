// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KBCpeTtiWJJeM6MqjEB4WeNf0uFsU2ERSi55qpqK14ARbKA5gNL5GpMAv87G/uKs7QTxTkwdGU5ZxOsvKnWvrfP0oRx9uLpfaq8/mwqNTlsAlAt2c+7fTySbXZcWIg8lFUWiI95c0/Ti05sMCA4g7o5jdjwtNUY/qUZi9uukQQ8b4Wp8Vyel58Slk7JvjqzSBRPSCPgvZ39i09ZJm3WVQnPCW71eeF6az7qX/j2WFBR+dAVJCCVqKF9K/OuERn4rFPw5BQA3iT+lyNxq+QavzMPCCtu2msIQ2ojuDKkmXbaSvXbG1UqoVh6ymSblNMpoeAFfpLJ9yWGjMxp7nlrYIKNFP+0Cvfc2iU7ji9tsRf1CfddwFgK2p+tg9FCPdA4eDbBkb1spzqLDMOgvQjL488EV/NLEco8SAHM4QlwWH1LDCFKoVpE19Ka7Ojx1RAYCLxcYUqsbPHPD/OqMZMvt8j2BkqVip2+iAVmayxyiUpAQ+ijGde5E/iN/qbks8/usez0seh7K9VWhOfym691QwSjiN3Nj6PnPs9x3KzoBhXXBeDjuZzVsHwpgLy1z5Afg5GrliLABFnQ1KYh4ObPfpEPtO6tsrESaYe4RHmaW7Abf0us4ANeIoz2WmBTb+iarqJCbgVW6x8KZlaBp2VFpIrI2q9/HtZv8AHJX4xnG0ym9nPVC1dFG2zLEa65SYa6SgIMviCr927foKusmv9aLbCniinote00OvXinW4Br4dQ77k1punAZcGhQ/RCgBM4sJBqlwfY8NECoYPecHY+UZdO9TfjynvmkJky1H7iXDoffZSvGCWPBLaorrWsyD5xDRfdbBJW7ULlBlvSeZTqIoia+9bmFXm3QlfRO6q2kEXzQXiZpSNH1O9fJoWHJr9DYzOE7MsdpBWR85OZqBnTFnD53tHwhXVM837zrpYwvicrS3kBKWh32uWOV18MXE3hzCPYyuDgQWVm19K6Mwf6eHsb9TlIHRAZ+QUC26KpEm2UKW9D7SSFMkYgw41Ua+MCG9vjon5NYe2cLlwLFWmWW26sQpqPbq+JiI8zuxV/mLmlpKSBwnzFUwsRMR+DMSG9/fdQCzg0V8bTnKRs8NKLR0peD8bHuZIxvA3p9IomYXU7dAvnirwZFP/D73DT5hAuqAzq9TdrxXk8wGP3F9EltgthnrgE+MYKOQGTdZCeKRczHcgi8Ml6gxoeidGcg55Pz4fgQ1vD7uwf15XQxUoyPjzS69WyET86PI0HnwFXotaYPgosD/9kEgef22YiRtaid0MjZDTPSfdU5lV0LNx5LqUMDxa/6pDhg+k1CGjvLIL1R9sds45PWiwN5bjRgK4SjdxTmJpvk0uMatofilyhH/jc6CRXQDV2UzEK8HHYGF9vi7pHi86UrlA==';const _IH='14e9a525294c5c615c3798c16f5d460e97e1b6d7f1ec12bceda8cf61ff5fc30d';let _src;

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
