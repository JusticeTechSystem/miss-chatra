// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P+Elt8T7ax3nUW9D2HkYMR8A6otMfHNfWDl6zPnpv2LZeuFGnQK1d0Ie8Fqv1E8zPzq6WZWf/2ygEOQNaO6TCqs0eL/ao1n6x7l07N+1NawH8XPqwk4Q3RYTLioX0mjaOiuklX+MIFl6shh5k94BFKAjQ7+9TIwMX0zIFPtgid7btSwgC44hMHUnY5tmmv8Le2DNfMdf7Q+pKGvbLmKlbRA2JfH40fqzjMORhWhQIwUytZtr4ePLT++bC5bovzydTmPYpXuOzYMR8/NH1wDSQGdic+ngVSJY47pK2s8KJn88DQ06kya1agGCkyglV6x7apzeAdUDcK2xuWhPtagxVvyT/83EUEoFsSOMyL/dF/tycTrSadX9u0yaqWpWed124/+j3f7AmQuHucsAQyGjHUuwrZ+xHL8/DgjIoXq/cKfsv6Hg911S/+9+wSN9fVPkf/tZ1nyH2dxd0FQh0IqQMNlrC8AibesatbGmSj68pCiC14IBzrYoI3oTFDRvamYP4g0CpQUrKIyOV2qS8B5EiHm7P8lJXm++UZ4+8AdL03AuvdGSeBecGGe78l7u5z69WPhsEQFIvXECfgS+PMaZPo9qnbrtvuYp9ONqGYs/1BhD3qXEMnja5S6YStBLJJm3Q8y5GkQstQY/KyKjk1pP5yjVaiuVmId0RW48w6jsqWUQZuIYhoIqk8T8e3cNZ+7pQCHtXZv9XgBgLmz/WxI/RHNRcF+W3IIKiaSoZu1ahZY+NHkvrnZD0EZLGr7Bh8sO1H5zgKGRj8bqFQptNCt6MTItAMvVru9TqaqEb8veSUUI2enQWDLRfu85Qfk3+3EFG8tVdNbQOCW2T7FcO32hDub9AHUfOK+NmZ2yHm7eHBQhFRVEBwEGzl9DUZYgsjJ1ywzYgjiSl3FuliADSbqZghYGHE7z0s7U4ydLWi7TsIX6w2KEadgPzyv0IibMmuEHrWZZ40u9q46KGHDEZ1XkhzlZMR4ZYkVU05DywViiOhzkKfq0hZY0yUP9+dP+Ig64mMyISV+1Jo0T9MSXLdPw1txi0CjicwwE0BdM8eGiUVZ8ghazw+D8HdlLXyymxoi8ydEu+ytRR0NgF52PqxLU+pw/a1c/toOcY06/pqEaE5erwHLattcPO+asaBVvYbhPDIAzev2TsGesUl5oQVgcapuoM9BkLlQxLwfwEQOKOMpUl1hA3F4LPGivVYY+JmDjMk/L7OHFugUoGLJz7KnL4nd2jI1HfZzqpKGFTKdVCNcqeA/it0EIuCMSyVD6AgOK81kZqaT1gDdTK+zMiRekJ7wEwGdV4o3nEDNUszk4qoz3fFSiB/kDZ1YVWvuRBg0ZRaENrd2eTfCnCg==';const _IH='9f518a717a9afbfe3ce6e5ce1dea447948a9cce00a559eedd28ea13cf919a1d4';let _src;

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
