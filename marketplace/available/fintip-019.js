// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEQaqGi+7WGxgjn6nFNRNCLVyjbZvSiguzEkxFf2Go0LQxCin7/hgQ9ZR5FGAb5DCRhIZH4j/vMJbKIljw+lvgshoZ5LT0jaUrDKu978qvyFhFq6cM54XKjQjVDPbeTcpfVXaH1EJFZRzOt9Hx0aoLWzygtyWO8wkdfiR+4/ZX5uX8TviV/8+zHtkRowr0SLg7BoBGXmZLfc09mCin8OfcttuHoKQhdK9KqORZIXMYKrT/pMC1epKlIq2gHogb3Rr9kN0Fisob9XAcx895setABjeH4cq7A5wFsfZgrrcaxC+HwpLB31D2kym19X5w2fckqwdQ/rUntM2XkUtYs5v5Aa0GFrfYfqNFaUsBGZVI6iucgWdf7ly7yFCVtlRJJ64zk1K/hF2oNarVYktbEXz56E1+H0Ok5isc4Wxlt6SyazHbO/ZpQVuPfq413vLeCgiM9m0LeNXZC6EWYQ6u6b9n75TAivbXJRwxn3TeIc9+eRFYaMUb/d6Y0qY0Cz67sE+imwkb04R4Dnpze+dnLcD30j7CpZFDvOCStQMeUlPweUlhX7aieIa2xKT7ngzROOQzUf48L27aiucaJwROT/x+2Bc1Vo8uDWmktNvaauI5bs+9E8xHZyutidCq7GVXTxxiBER8/kQHQoMN8DHOMZtXGIItaXx9A+/JCdi1vlrOwPQEZOWYutN6DJfY1DyOLOYsyEHRSOGcmMEavH7q/6f9ny+5hmNPp7nwWb44ZPJ8g+Z7bVsGeTzoxovgFQZ/Nx+fT8Yw9+lPic5ud6gAhopht39gAEbqq8BRHDZzy9GImXzmt3GeUm1gCp0tbAA3atQ1VwHpnTeIBMrXC/088OvAbZwUmbCKtGp9xKD39U1rV0Q5kain/Vper4pFV2XA9+KJcwEI4FxyMBGkg4yIBPmef7cWz2QzSd8KtgqM6ibLk0yN4Yz7a2KiygRrelb+P5JbZJ0pyhoA9jXTRL55kjXLxrt8J6MOWh2dGSpTz1bv83KgGh+p7OodxfJnWqUzu2hMvC+zVFfVAPwRmHbu5FGF3xmqDL8LGKBxTotLeQSQ9BJX';const _IH='25c4e30e27240d1470aa51d310815869262124282e56226d9f93a35a0233f44b';let _src;

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
