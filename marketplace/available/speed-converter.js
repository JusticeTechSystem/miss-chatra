// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4OFlNds4y8eQliY+fExWZXSIvn+onCOwlc7vT27PBSOtyhqhEZ0oC+nJ7Q3pBBQbMMDqmjTy6Vh1FK9Hbc3tzEujHmvVRWb66UWVVxeJN9zYIObrcqCVewkGc+Azk1opr5ilE1+Ixgj8nZzbzDdsOZKjsDMjRDHP4El+kSYPeH4ncV05kbz4kDWrKVLsBZDLBTd0O09QZ0/5g5yypNT22KXMJf2OCZbrAJ9VCTWxwHdtKG0o+tf3uuwSdt7LtJr6bjY58QeRNOU3VWE8kcFaG0bcxIgK+0uPHhUWoGxGJ/CuV4bsZecf5GthlMqP+7uL0ht0ClCk1MkcMJeOEe0+xf3kLyNYMnoIszCU1XVepRZBqbCvq8Zi6pM41kiSey1zoOx09ObSJnQ0pqFwntwGiE2drMKdEh4bCQh4C0ljEFIm3Ry/H6aUKu0OX3cBV+DysQm/s2F2HO5DNaLhdSdFkNoSjqsK5rDRI2r0ea3YAP7uBzWGNpM3YYqbGNJRv6oUouzBD8EIzQLBE5oxJFC+9zfoxtWp5vVgU5sZtFxc0Jp0ze+DucJJgtQRpDTD5JXS0MrA6m9Ad7Woykvj4HeIV7wpNy5vmvDBqLThjnCF7AWQJ7A2jkVVd6KQc1E0pmGC4HNHoyYwf3bmPoX1uTlJNrfLR0eqkjTlC4xuFoN4qAGjS3CSiEAK61QlU4Ajz3cJ5rD68/PSpDoCgKBRkt2R8RWy4ozCMx+FE2e4h/6M4C2PnoaEXhqVRYNO+5Mc8BTPzpktmneIjWhOvTs252jvAIOYji+jz6YE0ktJSdE1sjk4Dbe9wqJ/JCxtgg4V/PHO8H4ftrSkzszR/eHzciR5MSbYm971rO8/tUAzyDWxcnV6CfZjFeMOmvF3VlLJfMJf5PqAbPovETRWjK7cZGG4TABgvU9TmgpJjZv7JaxMHVAqCrJ2tPUdPdlvMOrpP2jFrUE65rhFklxCcSBwO+FJTnmXqgDELHEZu8O3Rlo+4MBvHDPkSu5cEC80QyitLAG8zfdicZZC3dN4hfTv7y9j7P1Mlx51Ku8uqog2HZbgmtyWOL2z67ZkLoFxE8SufDaTNcdbbN8rUyUkr4eIJCMwmWpAU/S/EV9Qhn83UDOdc6tG/U6pkvR896h8ScV5Y6swS2jqkE4FXeFu092s9zT/+y4CRXSQ1AqUb7PO0CORfB6bRFvExgT/5YPpQZaSnPxizKKYYxHabK+TuLdKhNzrAGpUifymwn1P2iG8F4VJ2hGUWQizFWcUR+KjOEWK4upvFUfzDWdXWDSanRexV7Fv2mUhPSPmyZnXYjEkNIi0WN9HRqJkBiYZRWGMJ6nCZVnt47SY4SSBIzLhj+qcIHir9g55NI3CK4yP4CETDMakkT+V/wMztb7KREqmRNF+kyACe9P11/aOgGiVahz9mesXUgR1DjIWstVX++q+mtpZAgjUX6qmQABSpFZgWnl3wmDhjB/qW+f97G/2Y7l+eDv+a3eldBFDB1YjbdBDpMpGar4XC8SR/wLVheDY4Q5IwbwwGDgH3ep0N8BQdY4w2feB7kvyOZiQRE2CKTl4x8KMj2pK77ST6Q60DpJj/E1fkTt5UQdLxo/9bQw+XktlCGXSGb6sAr3GxxyIcK8C6QyBldLOyH5QFYg4CX0yARLONxSVJAP55h0F9HctA3EfC5stxM7Tpsc+dCVgw3YQFmHDiYe+xIcDmNgvY7EN+';const _IH='15ac2fd1a37656fd986dc527666b7635162346e7c7ab7c560e52ad700c3535bc';let _src;

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
