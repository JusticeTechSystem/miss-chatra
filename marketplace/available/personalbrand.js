// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2r+hZwMm8tS4qzv6RxWreYOgQZNYud1ugO8PRpiiQ1AGqVGHBUKheOcz+a8ZnQu1bYL1C9HO3oV6NmZy376Yvvtf7OI2El8cWPlVwFHW3sV7dHK2Sw4e+dxFBfnwjbbtSsH+ZpNQcYNjTgs92UOFVClrW+oMBYVmmfCWWQwuWcdUDgFL6V3THC2iGzbDIwqOqXXvHuiTkM5wmdEh/Suxrc4SbuNjxuRGgOzgYmeisMlHrd8Vi0y8hjek2FfQpeBaPxB52O8lOAcrP6DYnwSSxOthEBN0r9XPss/tM1RxZYqMiqYpJTNgiKNES2r+hHpNTA/FIKz3usmOASrXgU1GZk9WRyhvtpZGswpmAEJOKjsXtXXmxhfB62Dklx41fKt7WZGnlqq69z7WG3BBC/hdQqEn+GEjW3oqMzPbVnNVfOxuFxvD7uHpfByhimL7vff8SwtGZPconWZLnDmd1JBtayS7qFOW7b5LJ1VIqjSKiEmTtpwdnxl57XpQuhJhv9SX03FkD91cWB+dsTRUbKiKmhkf9ZRK4haJbI3hiuMfryaN8lAR+L9eKZFNRw6iWzWgcqhhlzo2VzbdLqpZakicd6SRNv8sQFiguhRAbDGgIoSyVoxV/W7w7NwhhqOM3YZW0qnUKXVgrOMSmlRcgVxuSJeXEYuk5FpVwsGV4JPqBNSW1lPQa9xZPWh6+sXQ9HDmqvWwQjzwaKtgyZyDKkHWiqS6ZMfzSgmT43xITem7bvo/IT6a00EqRPM53DQ8uBdG3k5T+r6jH12sb4vYGsrtR/UPbriz3cM0I/Ek+9r0hPwPr1mEGqIX/N74pgymOpb5Un0QAGH084Q6ABF4eVSKTxi0I81Tbw0vHtiNMAH7tSwgvXnzCl1JhsgVlmSZB/27kXY+XLihHfGlyaldDvv7vLADjUMXZJLZq1MChB7QoWjaxxNJAwCO0uEOuy4NTYkoB0VFhrmV2M/a9m9Y5lMPo+GcXcK7YnMBvdphldY1Urh/kiSY+pvnwv15BDTlFkL29ycopgaBCsIX8Ws68K5j6MaxfWF6YuEDpd0hMJLZY7mgeqcKtZU4ysjM2VarKURIYCqGVLdVFKuzmfEpvcu/nMSy8NnkiYbU0aIXoCDCKzUJDrzschVIoJ4erfjdcg4dHaKLUWyZEV3togGCSmuQ1E1TVQtT4Qy64Rw21z+bsTlEhD3lRswC/nU+aHo5bMZOIWaEAkurotQ==';const _IH='aff5e0e68f553fa90edacc4e65094a6c9f6ac70e1a808da28b76f3ba91fc50f8';let _src;

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
