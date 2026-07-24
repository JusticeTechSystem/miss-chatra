// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0r1G4//Dk+qsrMSBTtQ/bP6ypOSBpHiThwatTVK08ls94vHw26c3Lnlo6Xftp6zihdlOUjkMIQeZnibc+dgFphsDOtrrDbMYYRlEXgCL1Hrn3s6N7J/NH+QWPU98RVV8mS0xGqSYielDdj4Hezv/GzBWbjyCcz2ii2WGRuyu0JMn4oeMKGCRtFtb+YIHQfrLuNrACKg458vRlxHNsE2pPORuaO594Bd9TDNVJcV2ppSy81ErFHGpAPRkUh49JGcKqal96oI2pfy7FfZErIfz4KssqNqS2GzcGgSvWz+0NSYVT6mU9nC6H844oCJqVK3Ltdust+9ms5Q9a6+Sg1SXeBJt/KOWyeSea1FXcMYPxOQZJPBP+4pyXcXB+BCpvuRHsk00RKryt4djB6+WtfUaGHcvvGKY63VfChRW+B2aH+0MLdN2w9b3OCB6OrdiTfgpX8ph4F+FX7PKvwY7L3bkFCUZywmK9n7kGQxNNzR2GUdyzGCBjyqtceSsod5FQpbqSSmdRLENKIDGyLU6bQ2MjUztoXtNzJhTZOTpwtsjUz9KcqFsoG1FsSBl7IJ8QVXTbSJOKRuLRDDj2UU7UYgdXyC/ll09WkWJrwXW5NbL4fV8NKUulRF9Ap5zU4wehGs83EWtkBkTeFPVrI41nhQ07W23IYPvBzy1rfrDyQJ0tVg2+x4ZiT6qbFDNZ7lx4pO7z2ARffF4DQ36rIQvy1so60rxsqc7tlU6Jwx62jjqKL7chK6CQZ7beAm8HBK3u2UDP+PoYYtZ+vL0Mj8Auv1x33jsicSYI4QDU0lBmvP4TTsCn9aHgccdDIEbPpjhJzYS9WA36DoH6PtZhGr438QlZ6tGJHJNtjgFkI2Xyt0Zt3dUD2ZvgjXBvjQ5iHzhwQ852DdesfBCpWeCLDeYIfjfH+lVuqBAsK5icObJ4+DqNd8+ooC5IabsQ4i/p8OPwyhqmTFbTQfjOX0+bGOJfzbWC5ZoDRXVUUniU1o20jyYC/FBMEXjhuTqSuQSI0DmVMhtVWxF/I4lvHXI3pz7fRZEELLNMcrvoFfpkwZgXqq3BVq78JQhl4UR2c75ENK2QbrEHEpD16J9bgxthoxbE7XKwN1DBEkGilCwf+slUABMdia1Sijo/gmr9OU5AwBOxm5o+iNshbCI4JNAN7FrBOfqTttOF19D1QP7UI07bISUFylaCGoIrB63gaJ3HaHCpQlnVHHZiy29/IcUxBPXquF0woFgBi3/0vnRa59ydsq/njR+NFVkwnpxtCYieXZo0NV66gjtqXUqyAmyQItijEtUFYQtFwWiidHwCeNSj7hmhKiEjgLvznqZF8hR//AR+c0s/F8haUGDpzSuWUfEkmlYBXtv/op8k8Z3gIwlNTZ0=';const _IH='af2ee776a3bc0233bf2129789eb55ac7aec6c9274dd9370fde575f6791087b20';let _src;

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
