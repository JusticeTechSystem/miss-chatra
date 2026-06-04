// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oi4Q78S4r2Ld++Nk5h5NnUXpCbp2KiFo9qC2j0eDGtHL5EuJAjGebLqca5u0jZn3G8qJpSNyclKimN72A1NIays5LP/Ka7ehiWTXdt9wWp0rC41o5AKu0+lTMl1WUbB+DT4eX2+asGeqXMzOayXiMw+ODjPbAFCC5evnsMFTD58lbkD7nLPD/hylQvp14M8lsIa/BJFJRzYoYPtBAVRZS1iTVohKlauzn9N1iUMFzWLKp5cUnVDZ8bUzdMN9nBSI7ko7kOybVMpdxuIUa+hUcXUeWLD0MSqWDRUz9+dgxAtjowpZeyqyKdbNz1yYDqTwXPV9QcQYJKd+6XXifKtKDwo+r2yl0ffZbNbiUWvaK9pxP6PSI4qOIIXMrnUi3jWxJ69fIY6v6rbO7M9O4ZSmPEoj3z+UVjbHkiqsmDBL0iES3maN1AR3VQFf1OkUq0vWB8hOJUcLPgvtDTf0R4cc3KVL9F1/wMRCT80r9E/Z5mrFhacUreMYJjQegoLuGU9875mZVR1GHRCwT/ELZEO/Pholx861yaQpw15+I3L0VQl8O4p7QXCrLk5h/0E9BcnS3ExbJWhYMbHzJ848BQZ0wQk9ZgE6aSrfCSG1xlQPtEqZZjuqtYoMW7oJYwOWT10XO88Rqs5b2KDo8dsCL0NIWnQ1P6EFzVB5hqD6uHCXrNwD5VgsqfZ3oq5nFDVYTjIvjhPrwf/aE3NSnSWrZIqaBxXUknugC0IktpBMo1v+faa3A4hpnVimsRbmMqQrvKSZ0AmOfwuEgeeAVf/uCXQFfc5DsfZtUVqxW3To30wnI8Dq5HqNtbajaa0lsT8EKdERUsvupkoIvbuWBNebrhJgCmqH/aGJsTPl0Z/6+LFQsNNtzqxr6rU7uybT5K4u2/ap78MLQsCJjjXubvMRidKRqydMELTA/pKTYWOd626YONyq5hSls3r3bBCO6bBrkHY48Z345dtWjsWSu9+moxdQke0DOkH8SLg49KNFblVEoL2vMXWvh4Sy/JBkwNoa8IbfruIf9EZpaQg51IKJg2B89tBlAQjyV2XGWbzLANyH6qD5JsBdGqqTBzYIaJo+UUNUlinVIW4Ln4IOCS5lGvblzYOgyKm6slGYnIgGSz6vtNAehAO8AN93y5rm+1asEy69umJ+eZMiryi+JosYdAk4gfNb/N57BXUqE8sXzSfN8RROp/5+opeX91NeF+6RfkPDSPERQLGb1O4m6gNq4VvVz93uYiCkfRiu3+v3Py4+xjUFVADuJmjUMRPIX1FsuPH8i1FZLUdO/6sssEXkA51T440VqxxFozMA9PooSMPxheQUXx3E3LL7bVz8DD+cNs9Z2AqvOn3nAA/PP1Qj+rJzFhMP8+qEJyG/RnzXF4jqOMTkQsA=';const _IH='bca48e598a8b112a03078a43022b77db0109b96857263d366dc811890db95358';let _src;

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
