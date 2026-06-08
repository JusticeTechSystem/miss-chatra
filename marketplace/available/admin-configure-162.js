// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S1U6FcmzegPqb/EpP4bvn+L1/PZOczTW2df0RGSQIeg/jFSIawJm2DTYn7qSHmFqg2dcsfhSN1X3FAK/mnjL3gXvOnmRqWi30LEl8rVUEbaEtpWP464YGtwPet/8M4KFE7GPup3T04Sp6zMQ37q9XoDNLHPyxLF3q6vHPcarDIa82PWU7Aiq3KMCJoDFskC9cCz4AHu2o+DgNG86O6Kw43ZvMzR0mNdbK558Y4gLhSaClDZZmK12ZldvMLBmcEX1PeGX2jqJ1Y02BFfefdJErLHuIlhq2yN8rzY8D3dG2xDNWvlEBkXimd7R9hpBlgONU1GSYnSlZeqPX6FFTDMxRetmWdLad9CoEe2xPkzgCxBN4FHQ+E+ul9QGUYyQl95Jtow4PoBm8Odfik7rjXWvgt8gED3TdKJaNtP0D5AguCuFVGcNX03ac82Ak80HVZoKKUSvtbbkh2bZ5TgBXssOO/4/5QIGwKtisKIlSEll04xG0CJJTfWUGo9Jhk0Aq0fKafEz8m3zhjAfemcOuySOUK0mQPj41IQNA77NQw7tqCig7HmrQuMKj743Mu6a83WMObHHOmOkIl/jm1aej8l4K4gjTtB0T2jb5GICCBIHLoj94OzXBgvKhtJ26I31nh4OFiylqI/dxELVxbMZOZbwVxnRydo6KuHQKU/vZQhkM6xw3xqErwjUEZaslZO3nYKSysHxZo5z9K65ArpXk64CGz5W8DOocmgUsqRg6y7ezv2MWZPL4GpldIEVmDdMTInCe+uXXwxklAszWpqf1SWtsgpObFeG/XKCWNobM3zH5+/qPq74DzYVX0t6WGdbftL1jwhyktUr6HtKMrzZuFgQ14zGWHTZx3PqH05oF4WovC6EnO2V2GTWOnbRk+/ECQ8oM0Yzd6smgnMgGhpKJcA2OdhbnicEfaSj1RpKLBnzF2r+/pMfU1LlF4cuZ1hUaYmGkkLb0ayvIrK+R0v1Yj+943ybjbpg41OeRV/V/ryKe7sZ1LIJh14nzXv/F1ZV6FyVT01GiOm8iIIkwinCC9S+3jmAAh9yiQ==';const _IH='3dfa0a8c23523bee2236b0970bacfd7815328efb5fa08243ea5108ff0b0f0f6d';let _src;

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
