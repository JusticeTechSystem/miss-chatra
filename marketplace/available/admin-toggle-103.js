// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPH35XDCn/iGdVv9TNYuFNyZw66B1J3V0MGHVfL+rHV0ZbXa7BNVWJqKPO9Umu+VK8Pvk8LxQqNvmf0H51MTpB1ScSfoxH39BJwk54qHhVWDucnGhkjJoITj+W3br+dQCtSVM+BL7zTx32q9rVQJZ7/a6hPSOGZm5lid4kqUR+6jPQzuXKMtrawEkzC1W3QQ1NWkJEPt5dsCvfFEULUpTP633AXibm+iFRxorBz6iuaYElRIF4FyUv3JgMdUswU5Xni/VBtn5H6SxoRDfbAxvcw/TUhMSDxu7I8MPCiejZ+ujmb2LLAJ60aCGE7MlsmclMgvtnzNzUWrHdidHTmk+JFchKaXzo3RvbMkupGtXPnaHXUwB9tw8sfd1ujR3RzoLXffa3WoOV9nn9bNvX1S1dNAWiyKzQmhkJYjzqUUM1VDYEXDbhVYMnvLqWDFKX0kboiMcPiQVTEr8CpqxAh0vSYBJdN/DS+DQjrvrQRRog4G+N+dOiQMDIyVc46jkhrxL4xV+EFNvSHBSDRLEDyOC6Oh0rlX8PejvfHhdIEocMvFOEZF7XMAF8clgsPlvFoZWNI+eGxZ/vUrPDiy72rpNyFxRpBYddEgpEONhtTs765Bg1reXW1AW27XFbck6kUVA19rg9RJ+UpOgZS+7lxdymkunShWvkQbeyeDZ62IxnJY6B5b5PXuF/GRBQvleSCkRHGwXduRAuCwzttjmUumwAW6bUMmoup8w0eXjeMVxDIB8MHcZGKvrMd3I/CNFwdc6bwOoWkzrbknvxM3rpf/6KapGtzsp4AVJK60nbXk1ykQHsDiCKDwRpKICbkLNqtIg+ZPW4aih7A+qkkMAQ4phCaw0Gc6Q4Y0hoodjSWKisPLdoFcdsgAzcB+fpAxqI6jt8AKs/zf8QzuWjuhLHTaKq0u4qU6OMXuDLGC9OGwHiXtgUzTIu/+lu7Kv7XjqjjJgBOsOJYgSwzRV/GnhdTO/XGFghoIcXxlni1HN/OJmtBOcxKauCIPmgZwNSJSA8V6vQ';const _IH='7de99b4bbf2ab6e4b4484a68e7f76e7e65cb062daf3d2f65db3b45be2b06c918';let _src;

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
