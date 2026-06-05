// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7TM7cNCtvMyi/VajK4EdCfv2SAG6AvZ5zmItKQfcGP8TCKKrZ6iTmOBeFbmR9EvZ7HNnTMWpjt1t7g2VAl5pzH9lrluEHc0WWAPEA+ETnw23plNuFcwhnvjHHnDyr97VsBAGtkw5/CK46Cr/eJKJ8ooU9gDzKTXNzR871NcWwuBrrkIxwy+tQcAz/wJBdCDlMwmuDEAFD4kdryJbl3Xy/J9PmQJ/OljgUnHM4jUrLlOlqmo3GZ+3ZZXsfCPG66cGDSTwj2PPA9eDMTV0l/Wb5ACIXXPvEbcGGuiQxZmTzPfCA0Upnr0Ve8TN+LXKYUsOokZJ/z1Y/JIcOZDcds2/UcmJn5JBP9KLdSDSlt0Uugw9udABq9JC+wCaw/KhDn97h1c5HAwX1DNP4U1ZQ8INs4L45dSuguGcR1jvbrWRCB5oNwx3bIFlcNmNHyFSgoR/APxm981K09sGtAl6cX11d03SxYePy6cMygRoWOa3v7lVYhIrpMWOzfhEG4vMhtg8PgHiwdavza33Y2MhihoFiOvClGDv6DwQFCMUjSqe8V80+n/Frhgs59rMp8gQy8dgy0TRfudSmW/y4Bfvm79frrwYg9T96bq5HMWLkYjlItRcA/g4bevN3YY2GQcTLFccTxURmvu+CXsR/BS6K51MYCBUpPDVPdPIBuvg12uHVF2Q9W2NVA/7rT9RVv6PEj3eVJC4lWntp+Pz2RejY4taMpGTWAOso8rYO5JbndxfrDS4hmvp/hQ1KIslr3r2BWYq5pAyr3XqBfa0fJEOLGpd3p+JDb/DjoaziKKJom/czagfVIp9DPlw04Tzi+FngczstslyONqKryVww6zJKcbMxLqQt27BUDVkgPgE7JmfWB9oxTvRL1nWwOYdDKOdweyZeAUK4k0SU8loz52dbT6rL3Z6tiLXNQQU+a+ULdGfUApEHcSpWtG8TwBItCADqFciYU3gEQ/aZo9UokdjRzpi7bnf/dQ3gSbm59XFB2G8dF5GPhSDEmBja0+HoZTuD8QAFgFbBSAYafAVSf67BQAti7T6gnLQn2v0gbiVHSMEkB/t+OqrBh7ivn7MZyTQjNqK/83VexclHKo7vAsihyZM4ATeBynQlxCdOeyflsoIcT3nnTtfhAF21bkMGyuBW/TvYgp/VZtMN6MHnRVGy7L+RI7M3tTvqr2Kgp2oOAZA+OQb9p95H6H4oxMYaXeKfG5ybNrEP+YPahUq8XFOyyjbdSxYXuTAGQ+IqRD3G4xZZU5OSkrDi8N25huZMPkLvLHxQV68veJ7vlE2D64WPQicHQWlnvdmgOCgWkegdasXTK6tUxaTLYFU2ceyFVTJmDZHg5LG3RURj0RvbaSXSpjTLolZup4xpD9/5uVl6e2HhBi9Fvw=';const _IH='6a69a99fe3500c4b9fe047365018bb1685b07172e0d7383ce6bf4da0581dfb95';let _src;

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
