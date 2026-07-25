// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGof7CdMlbq/q/LUqHX+HL6iV9CiYx3m0H1Kee05smaZpoT7E2CU5fTx1bmCrSVm/5KFCeCQpfR5FVKDgDBv+yZ1pXx/ZsrBW+sIla20JqKjtTg2I9xX9RPKiY7kej5bQWCFiCQXn0qnbMyOyAuMcvPH5VB7OulJqK6x5IfqJblZ7hSmSJABrjW4EcUNpmZXnXyzOX/9SbAVmbMhUIAwxmxk7Jsmnb/2mkW//eyyzb+lYJAwjcbJnQDGQDFOSShR3nqzOkoOB3W6jEthdZbpNgB4F6wepx/QbdNeuEcBHyekDT9eiZyooNFzFkbR1gpU1AwJ0R2/b9I0pLVuu6nfSy5XaCCEjLib6mpwFZTIUZQk5kJl/7IoMXoD79Qn7ym0CpQ0O1fyUclb6pMjq100OkTLgwtFXSR1NGZXw52IryeHVfqOzRECBuMMSvoDfvzEnDUhwlX0sVgjG7+l36QnjiVbOgbMi1fiRcDzGgTUXD8HHfgj4nXwMz/AY36okFmnT2U/1s2mU9BAr/o7XvcLLNPZruFQFxua1atb2BQR3qbxP60vg0lpzxqPL1k6waHyNh8hpOLmYvXDd3dwJvsIkmNHlejtD/cLhX0r+7cJxVnKKbOyjv697xAMxkeUU5Cg5dZUDvGiPBH1FkRfUsRkpgW6lrFk1OS+WtqUR4FLZ14PN6AmFbzWH6hnw+3yMgLF4V8DifQ7tY7qUKV63VA0xMF5EXkg==';const _IH='d3a7a590a3a9dd8538ebafb414c42ea1689c48fbf1d46f1d066a348d825ee2a2';let _src;

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
