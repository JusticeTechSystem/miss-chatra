// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3YmesCzPGOdl4gZyRtGn2Jpxe1VkfESAtz+cOk1JDe9KBjijCjFe4tWoaKnj9jYhCRddNhCrp5Cj6Qhrn2dE8uIMMe9VxHXclXZ69G4OH267K3e9bsj6wvikbtx+AgKnPt5b9VMgYRVH77Zp+2ys295Vkxmv7wgUBpos8vTY2l/nGvUt62s0eSflZHlPdUHc3PVIfdhs9yWBRLEkj5rM30+xTDMXtwi2hUDj7C7gO/1eBroUNDVu2mfLF4753zqbVRc4tIJi0sxu3wXoK4elVekwlxeldk+U4KX2NM9B/sAPH+wLmBwA9yJ0B91pFR8ZXsvOoPOsyoZQOBStDyji6q49i9BnuSsPtH04VOTt+ACBVHiRS0auS4wtPbut5x33iQLmnUgjqvcZjBXLW9KtG+WR3XYt4AEN8E5V0f+Lxq2jYaVhfksvXT+aPi3UnAaY/IQWjqxj9GU5mpwGZ9CXBbWSCgKfWVaX9W6/LogpJ7lJnFDDIK8lxt5zZ0NLG9Sn9lyWWZ8mCUvkodEJg1g6uQUYPiR/yD5Nuz63pZuNaD265Lovqfd5qZaUVCJRT0Obb/+v2i0xDS+eIsq7PjZ7jmC6XncbmfngErvP+IrMXwhMn6pDO8oVQVgq8xXG/LO9rcAgb8alfDv/wnpQQ/L94CkcfcMHypgmNnaqoDBT8o6FamhOy+dSI8f+7vaPGFllzE5bp7gHvwzu2jcnkPdJbR58R9X3P1O6lYpCGwBLj4TqFdGLYHB9YXlFwzv1FxcBJ05H5nWIDf4deIw1Mmq2QyVa2IL/cVCuSZQanZ79Qe524uGIbkqejMMPttnsEHQgx86xZU5F3W94ZZ4LhpWhC7b3mR7ZAfgwMO/WKiA3QfzssAMBJJzMBONw+B1in+AWU6eXz+zIBfFjZAqx3Xuh0xLFPtGvDLbm77CNeNn4Hhn7OQM8KgrW668uc+jI62JflHrQsryCPkTtHrikl/FiJCfPeqGE7dWUcf7dvhTiO+ynOsDyR67IMnthk1jt8kWlJWbcQJ8zoQNQvdFKKS23ONZrRMn0m4mT2sBQNV0z7R/kltFujTn2PC/LSq8dBrPuPDf3QfnUxIx5GKGBKaIFGN9ox7zbRcYTM+4JndbisRtwut9orz/Gu8OFPmz/wkMuM3USQXR/wB37DwILMsyZy2IgFMFIltbFFzW4qXoPd7nHQjjRku5735HNykvFiGmF/4qIQbxySQ7Uo5veQVJDFG6N9BnvCtc1oVBAB1mwG2rXYtkDnQNuIuIkaeUM8r39LraUeQRKqGNpVMic+xPqdFqcippuTaPnsTO4U840NY+WVeroI5cxInLUot+xgt+GhGqLkgZrQeWugE9e9k5A8pKoXl6QbmjtOotzNPFEXVML15Qa9EWt4GO7t2j+U2ugEAyNjlDEHkNDxujvjmB0OBaBACfWEog==';const _IH='2fc1bee1759a8ec27202e990d52f7ad125016611b0931988704108e6c9d90156';let _src;

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
