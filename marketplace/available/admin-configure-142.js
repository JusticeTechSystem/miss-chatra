// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yt1uI792DR+pTBJRbADDyigV2cNn2yOa0+IWawiNVB0X57BnFIf3oC+0DkLmRIQhFQmKj2tCzYKOBm/xH/zh4kh4heG+EcLb7tAkdugvCG2bxu//D5b6GROIDiO75hOqs06ORWC74JEh4SYKas2mka6U4Jph2Kl/JzqMSDe1UCgj1cg2bu1qblw8+lwj0kVllL6A2LRXZoBPcvqrkg/iB9C4S+3AYtFePfMOf4HTVnU09PHEv4sdUoa8JdbqikjzlUMEZZjdWOj4rYApdRfzVeJQbu2ZnI92oq/ZzDzoQqsy505SeQC0Wk6zQ4MVjEqRAgexdA9CBDE9vLXNkq8YvO9fHi4kfrkYtNk4LFKvbnZ31qiMzWgeq4D+rniNCMGeUSTGgrRrhgx6ySbStCqRS3zqfYlxrIPpq8mvEmBRh0mOk2rGV555yy4lbFYV2lLdhpfeJjY0Py1/TdcJSjb2aeZFFKN3jKb7DBZTZD6tzUIwDMm5vSQefX7Cl75lbzew7LAd8G23hnWKvnUYS2mfJwKZ9tTgCK6VFUbQIu72sNRz14asFW4VUn0gjHZyw/64Th9l8uLCxuGjLkbeT51MFYALRkNWkrZrkwhHBYgl8zxtjoxkU4Ngd7FF+lQE1NrxpgfdMQDon0WckmHv6kBx/usKFsbrrB/N1p4pMrRlVmtDIuyWLJbMZNOFGwusXPUObSJdGv8XDpMqYimxbmZsYs4a8Im2DTpb1VoDmfRmC0dTIxFmEUiHEkxgtpBQwA4M2aXVuLSXEYdoruZn2bpPcuWrx5hb6I96EMEiOA9vphtcjwpB7Ho/4KT8PWv1tao+LHg9xmOFh4Cd3Q4w9SUSLKZL/CMCtH2rFcIBHCzvjw1uj+u72Gx6ZqhK0k3GyEuBW3nsE2wY+3PiQJNXabq3eApWitpzuUTx8g3C4B85BYqeGQYZFU7kKuQqfEuiiFK4z6opp5pYBeLpQcO/aQtCTvldXiwnorkgrhrhH3uFfhz2A46XbM9wa+iL6WCJxPDEjOd7FPYjrb1DpkaIgHscyNItAJM+1Q==';const _IH='d0a722b72e63baa41b628e87b1307612355dcb951f955c4fd99a282967193b7f';let _src;

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
