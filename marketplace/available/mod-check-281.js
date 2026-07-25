// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyIC+boslSDvceyHap29ewqqegMVVrVMXCQXfm6U8dNLrLelZx6HrhguoEFU67ifHJCb/rpybPG0P1IrQbedQkWJulEvBDpb8Qgx3LEeE27eJ11JvPOsZOSKzBj/mDATY8U28h5GdNAmReo9ghYdzPQpPRWklYySD+u2elerzdfG3+YPa6aXeC9r3zYthVmooedt8TBDOZnJc04buVr6VSBPCqgg1dWzuqcXwBfynXZZ22X6zOYZaYql28Er2rXFFZCipp53KkJlq0WNG95E8LC6I5MaO0mQKB3ZfzMbGu6T0VAc6ruITflF8s/Sxyb7yKHsIWd0YswNa4Mn+UlMubxAT8k8sAgnKRIzSywgIIajui375tv8ofl7JtCpiSO95nCCgd4EBfGxa2HT1z90LVmSkK92cP26HDTj45v1qLpAguxDeiK/RR3n/eBqXjvYzVK1rpOZNT8PoYjobcLhCFahK98V3GMLLE8jGNO3ZoGkRE9noOV+6ciaK2bWG9Q5HE9AKJf2LCrzLHgXPnxn/bWav9N4+P9130RdyLFPn0ovVDc1mQ0GwReLSMezuFSXZi2sBVctuyP/Yv69AkSG6ect5SYi8MooixTg3epjxqAdWk15Um4SHnxRsxQC5wBIrMKyAoMPC0U1NtXoHPF8512dLzaRwvAGCSRidnPi+zFGp7g85sVtRCBDBGabOKZm02r9dgJXNplayyv8LJk6NV79wIttokBy/1na50kRrWRWOcZGfHrZkXDumTdoezjf2GCk63Zv9LyEeRz9g4nBuGREXMUtsngMHffGYj+4iA16/454inGHOZnn4gdqCVgBbhdHm70otwGRfF1MZaP0Ed5fK/DVx+RZzG5N4o8O0VJKr3596lHr3YvqtiyZ3UT4A8dybHwfhfVtZ6fdNsHOj0GEzFhw1ejYN5IbgGHV2SRdOtppO1GCJ7rQEXQCWP3cmFMZKdM7laj1dgKnWYawu0qmtIXbyrJmJYqWz4d8g1hFJeHn51iJajC/aoJCUB0wabtEfXCEw5lKeH12UY5jsZnVHzxRjWhxwSW89gPNByXOnu4o6/7HAqHu/TtPYkPfm0Rw1H3THq6qUFnyS9o8WenZyNapPtpPyyE2LTp3JqHRaY1AJfYqyG6LLeV7Y1yBx0Nxr5q5y7DUxiFptHvFKmFg4tKC+CTuTmh5W5Fo/qPjymK6xWlhazSlwvnfj75bm22O1FcOgYwFUmrKFK8QY1xTSsbfZ68AbhOI3I/qiTsMF66GfNtdUr0aM7LkACY+pBLTWX3pfHawAoeF4FFbBD40xyfNblO39/ZPLzoLV+Kwwojwsngf+W361O3D0FFBIDpBHQL0H2aI0NJ0ETgp3raMT3w+Oai6E4eAGyivI=';const _IH='92c3061d6594441eedebfda2729d8b61e37bed5de22db4ac925941b5587165b2';let _src;

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
