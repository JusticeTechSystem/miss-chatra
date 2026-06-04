// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FkIadVPPaTUNsFyK2HZ636cfZnXS4EM+9Xl4CiHV3EoAbsnZQ7InUxZY4BimZ2ryESe3IxYwmrP2QNaEOm6ra/p9wk6pms9CSHrtNLZB0dGc7tsfKpJAz3c50CMsmJzwF4yxA0g+zuCCenMJJVdR4RLEOHn+grGkAPqlhwFI/Ssl7KgvVYOFgDJY1mIyyir/B0g3lzQ5R+ds0UKblyekzwY/G8YTXDlMm2tW4rnwuCvpjZEkMlKM4WAPtsEx616MT6bFx+zwtvL5PMSnw0fsnFtQcfLxInD1igTXzZ3Ngu9Hv9d5aptAe701g1ujluFACJbwWeclPaPWv+ZSMHDTchxekiv+xfdNVVr1Hdg7fSm5lwDoupa4QAtN3aHDIw3q1wMnzoeFgwZXW1bMbYYyBCVzDcMOO+gaO9GgLV873CIQmocaSvZ/OcTZlyVw83Y+JIB8udGjqW8BXzQiVDQlT/KvuZYOwOpG92jBGpgr5aG5MVV3KK8k8mPtegqZurrBJAYiOuTQHFfIGA4v+9P6t7yBfWwWNo1ZXDKB8znUN1MhUGofYsV6UR2J/n8kP0TXSV+U99+1IpLspy6m6sAobMi7xSd1aTKLvGfHL1XQ/2elWD3qkVXsl8YDV/aXHttj5iBIb0oWSWRVCULIEEMP8+2Et0ykA67th3EyN+nOBane+1LGZ9Lxswb+hbsz4s6QOZx2Tv/BcJd9Ztd/4Yoz6ZZnWiDeqif7uExbh9XcwHadvQXJEat0NgRIFEqtwGu2EynDbO8ChswC2fDSyXNiBUETpTigkreYpuGqYdHgDXPr/Fkk9Ab120rVar5+ujrNIJIb8f50V0RIc72YBCdoSnna+xAxIeZnAJxmheR/ihXpra+hs8ojFkqJhtY/7XhGL3J2Tu0UMWBq0uWKAdlsQS4Mh6Ire08m7hTPfhDVD+IWVTaeiZbmPXJn6Iz7en8uAK9IDe/rZKAiwBqpE0bCmhPuf8Bwta86OLDnK7veJNaKmG6vbzdQuYInvJLkf37oVSgNiKdekSTOXNe0my1KLaFFgswn7jwUqzKmn1G/ySjs2IQ2tiyHqQXBuIp+432pn64z1gFua/QfVwTy0WrvQh0p/n8wchGVEiJoF/74m0wivEME7NJCv9+MBDXSKJr6Q63d5jhtqKhrQLJczX3e2+E+EHQHCg74C8vB2uXCx1LiaOpaQnuYQ/bcjX0jYP0E0zeLr4iTcQ//IihXXFqAw/SHy34yfEHrLO3kv4lVtZGNewCSjTocHBgzfv2D0/HWCMjAjboSZsQH08Ub68Q9WGd6jO1Gyke51/YpEMxCOTkenLI0KwzTajGOAXb0iwy/nJzyU2GvkDnUNdHRu8lzIzj8ZHfjpO05/RwTl2iQyoMyOxDCuoHJPw==';const _IH='2b3d08bbaafd0a0ca32ea831a061a8e7d0daa032be9d26e0d7cad72ae55639c7';let _src;

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
