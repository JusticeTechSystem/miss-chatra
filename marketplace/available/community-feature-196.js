// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2K0dzly22KaNbqYHUjbu/LSmbjkxtHoa5PVptlVn/1OE2GYBwZmCRIXH2h/nIX5ZmjurowN5uyFaiL5fQV9R2lSe3WiCF55q2WVVlkT93HRvMUATdHIpOG44g6QojqPMzmaJZuzrifmmga+EnNj3iYg3sOy12RS1mDqZQOBwsVlH5GrCAJhGumqEJZ3cQ/bIXAxeI75fD6XnjuJ8DKgJ05OxweL/PfLvfO5udstq5bcsJ4OjNS8rtc7J+Rcz20WVhuwL++FYHm8kH8n2YXXwR+EinHieqFmO4ArUaB3WkMmD5dVheBdfWRutD+dOKSQZu+IIZoeQa3mozCyk4lDQpCBaBw003oDyH83fZqe8P0ZzyIfNianemxZN6QRyq7q0TcTWos1/I9hEHrpo3//8EB5msbv9IRnpje2L/6aD2dP1W55fxbwNGUx2iMYHypzzZxf0mMSTtchpNrQRlQuz/x9AmU7/uyedMUB9r437SNMpzGeyzF31SwuWchPTW7ww1KSW1q0JE8EgjEaPAaHiontMvPU/0hT/U6ULtnnYr4a2M0BuOqPVaM6FnQUmNvvWUd+4Bwn6Ygce4p4oq8/uwhWU0Vd8NvHDGFHQse+NjNSZ7W8BIZ/f9iS0Zi9W05Ut3GEb6e4iTforarPJL8voIZ/8gASzdd1NATdmLwyBjAa+3OUQIQFZcqV4R9S+I1E9AwONpxbAMdjE4KCuzriRfq3jp2eudVAg';const _IH='1d9aef5c3f89577ed17bf6a801e40b76ff7baea6506baa04e92499a75d8d9c98';let _src;

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
