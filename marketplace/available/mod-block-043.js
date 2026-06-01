// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1A3t32rt77D05vnsAcpIijTkYxiA+VitNItjmZ69bT7KHZIyXn7kKjrASZZSSTIWpCfoj56Ulipc2krKEudhgOw7QFHFLmm5D3hXHQ9nQQeyE6IkL5OuIByBPemaZ5huLGFHgPfYGLIFM13RrQue0N6ucmW2kLDMFuI4xFnWQE7/t/cGOb4+9b/ehWne0G1UMYHPf9FH6k9voYMZdv3ElyL5YaA8cjjLXdjKpi2KOBhLUW+6URhe8/MEeeWoOoEIYhxNrg+1E43lsC0pD6yzgT+1VfIXvVpiPA1NOu9O5LwaHdMZZ7MiS3hHTCRtRc/vTyG94n3LCDyKhFneQjzaqlTcFXcqUH8ZoQKfrzsyFJNYa7aOGBaZAJFOUrvtz5/nD8U2CVE9bDKX7olgeUZ/dX8uKfads1DyZ5I1kqjE4n8OkWh7lwmh9Padt1M7hUyzxInSdMnSx6c/Ecck+Ivrg8wwfc25oIYCi0UgFu6bMbtRpfL98BO3UkgewPqzImhseJAAbRi9lUCYtWw3ZDmzYuvhH6zHs/Y5w/7OwNXUZeFpCE1ru7UVOSdH6EyxvHFHQq+y79dosxGGSmABmDYdL8obo3ZtopWQJtA3mKqGxTAfh7XV6R755z+csR1RfKUfitddVUcdag4g+9kckh0EHqNkUPBlNeRql77ov0FlTvrILbjNbJHvlyyCuxnNvFwA1nDDKpOjeN3Iqh4IDCIKlr3LzuW7T8bQbPhr90kRU1ZJZRdbM+OC+ZrKhrdoK86EMt4gn40FWDcuotjU9zRqnuuNZOnfZSIF8yh0xl2HLRYlHc0i4jKgpbcVWCGLc/tGDA09y3Iia4KH4iEerJKGK9UFREDjCj0BGocA522pAY5dk6wFK9toGatfkx87Oow9RZRBjpsCTuBq+YlxC+BUd3e2lVR5jWsex/S0BXImez8leqTaQ7zjtjKR4Mqq2QRW/RXPlIKrqZy1j9x+Ufeyt60Jn+P8KpJPXXWycvI5yz4w+BTkOkwSZ4633OMFZAAtDOWyfoJ5QiTS1CimIIiabPMCSbXrHiZcU45OEOzpXW9Q3zaDb0EN886oa4cYfq8OqKoVRHdpuC2FaU2sSgu0cX6RLYKYip2oWXhhP//TsTwWawrF7cM9DE9BcqYeo3HGyJHeHzFDZeUp91UhDx2Z0rCSMWH+B3/qxRejhMEqH5xymyxbMMB9vuvqtllrNcUX5hbfIfrq18+TyT8USBWPnuNqiV4eSYdEYYI5WfAJeii/gduvygtd7CulgewxqYXsqeXSTtUkC6NEiY4JUVGZ9N+eMDP+PIk28o56dccVB8RTXyXSeeVt7kWv/Wkcm3acP9ft8v6HVfTk+8nfCh3qbaDsZZL1YB3k+0=';const _IH='8271bd9b909ba090e696c62985c1c645be9409f3b147dd8ecbdfaeef4791bc7e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
