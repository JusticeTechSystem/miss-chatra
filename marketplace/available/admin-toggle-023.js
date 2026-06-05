// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bVprTucmAJLX52IW2iZ2qU+IfFh6i30yEE9en4IJuzMVqQPulMPncrp8YKG45AyY5V17uoDVfWQGJBqzDJPpP+ZGfdaeURJE5f9F8g9AoratcW8OimJdPoFaE368AtIj2vDx8Jv0gZyQWFwEHzYnu56enk1dryQWLcaUZxU4j5vXrxLU5dIOiPnGgxO/a0HVhzsO7M5ggPJZfoV2wXB4YpBUeS8wGKhPCUNkVf2nLy/KEn7XmkfzROgOSXaWGGFGc2USYyBEScEhEgipkLIPqfTPU6ZjGSLHmUJ8LCCVmBR9mQ8i+wOseoJQR4NJbUzYmCiBiP+cT3K/cDqxcdntFz3y9pXJ6d2+nGjwR5Ii64Re68RqcgksOLHpG/q9TenKptGFjc15Sq7iilNfZ3Q2UGSXh8UMgTD4zrt9tVGgj3DScWVTjXJW+B/cqgdK7l7m3zsvoCqS72wi11qZbxWUBoJcEu/rbikGRxRugCILBA+/yn7U3h8Kx6VPsF6h33ZC0cjhdkAx+Jpq9r/MEI4h6OQ5pjAGliY3kuL7vRilqAGFiJev/c0YR+2obj6R5DresBiiCiibWZ5xh1ie12BGOGLOZmC+LSenGo+oVsWAzPntjFVk0EfU+73OMTUqexymoklpxKrJPw9Z/atiCr2/2mjaoMticAJHYNVT9EDtWZdKvDTJxDa5IuJURmW33gvvULkViZsLtz9IqUlUWY0OQxICTXlXQMNopGugKJJMr1s/QAx2PJ2ryyCGWdsbcai2VM3O1WgN5yMNOYgcdlbtRGxtUbWjcpvZUVveV1d+Z15hS4OrZkYWLNgnADApQSScRARAJTB902dR9gLKAhIfUFSD/p+A7d/ltLMs/BItLFiYlIYWGpb8pmRXVENJynsc4ms8ThY+RDf+zapa+spyv14Qm6bevxk0JvXDK+gHxxpGzyf823H8Fqc5YqIdU7q168hzWJDEwNb0EUG/33szjMv/shXzLzciycPplMBWijtwoTs8TZ3Y9ywRmNOP';const _IH='42ec9066a3606e2f16dff8bc25475c8cb61e9cb790dd52307dbd9bdbe218d66d';let _src;

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
