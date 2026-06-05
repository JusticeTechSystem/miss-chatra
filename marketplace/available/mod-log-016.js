// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x7sHz05AexRPCZyHqNZbXBVNCb9j45i48lUzx5yuiX0oocyk0Ivfp48IJ7xJEuVPE3YrzJAmc3l0MsUmLLTj/lAJfJ9ZW16UpW2cWtn8VDRDhMgNISh2nfoRy+ekQKJHBTRNNdFWcax7xxEk2RzUFL3WvJ7e4b+z5up7SLtigrtl6rmyOsJjIkSCDsmS7B+6cyO2zkxGoxNr2P1jrczKTern0CBkM7iCRACsoR/FzT73v52DHaUHnj6bO4YB92M52/LTHq3+MIMpXKGWY6chdVvEx7TQTsYHfkkLEVo791azKdkx/+4BHrYHW4Uv/o/YJ9nXd1y4rZll9SKwRkCzcpeGEW4eUaY6slBu0ULB84nt8580Q6OFpYqlmfd04SptZ3L7N0wJyf1b1NMbrUKKdEdw/nVAjXNXcJvSk1AQTh7SwDP4clSsYnAC5g0FDT2svGfajOBtObu4GNueslvqGVS22qumTvd7cj63YKKtXuICda3XxniaTcbCS2JS+xzPFU+YODP35hTzK7hwj/ylZc3pPXTOMWfLNUilHohhEbeUthXFsRMov5hQMOszq0e57sPzkzHG0nJ8dv4cJHd+suh+1WfDgihO72FvM/VWhSiaOPa21FylqD4F8aCx8tl5+2QI8vxQss43xpjp1KaNDSNc6LGbgpUbI0H4BYYX5rseI47bBPjKCH0ko+v/j4+B+vyY4plj9Ud4QUV3zaRUBs4+IXxVTgE/4uklbcY15+8mx/IV5o4nW+krq2sufSh16CTwuIC85RLl0tWs9iAUq+a6wfsPrGCkkl9JUdwh1iFevSlhKi/5OD05dtUze4sn8W0YIlv+n4uyhePOdX0PvVgDIwqIMbWPXnKh7BCXN7zOeJjwv1v6ghLjcRWCHQkAOfL4Dlr5LjhN5Tx0wXvNR8R9Hr+UQ81mKy4di2mQ0lnRYdLd1fbDkG3zxVWKDP9duvfiON+rFYnKwLjtsG2XS4lUe4lzDDS2BOh/ItZYFJRdg9xmBGwEGWJ73Ch3F3AL8zvoFwYkiXa+lWqiQJyzfKT7vAPN8SK8CFhXpKHLhKSPkVqicKJSgnVy6vK7Q3c5A6MqpfM5UxlYYwmLWdVyHHiRDXhPX7LynaFHtavTCxXfsyhyDO3eOFiETESbFYhNoP2IOdTrSA714/FYTWVs2NxqGg1AU9MwS08pOzBqqKnPsJJmfeTauZc5Q0Z8IkaeBDTpujA8PcdFHgFee4COROitToANaes1f8vjU4FQUTkEVvPeWLJFEckgoBS6VaccQU9ForBWtcM74WDpgGJwFeuctES8y2MqQJmd+p8e5BBcOv1314u9+DmH/i26lVFAIsI3bdw=';const _IH='3871b918da6aa04f76fb347c6550baa3b9c83ac5638e28d722357527f3da932b';let _src;

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
