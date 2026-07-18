// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjCbr5E9cSqtfo5Fil9me+DDhlsbRgRlgjnMubUOuiXD8/Y8RZ9+XIExsIVVdRgXB4OaC3MgT0zImaCEZn7FZfVhZOpEHPKiMhlzTEzbkD4O3rC60rHjPs7esHHRtaAxSFiz4b+icg7CKofOKA1MXCLdEWwe3xs47eIrcJ44gjKlRWzji7NzdkPKe9RokpKwaKiBqbUIsjsc6K2KeU+ucEKS0ohwTRj9A0wwXzRGjr3tToBWDksnrLUIHq4nhGdrZAzVdFozzndR2+IXNwtVyGeBUSuGGhv1tVa9cRiRQlLkh4aUx3R1DOh6US1P8Yw4q8HnvCmNhq8GoJNWcgd0P1XI1z8Cigx2DeBz7HUO045qqAhft2NiAPrU0k5CnXGuMolci652Cxc7ACBKIw/Hv+WQJS5gK/diT7FzbiWEIVNdsYpqU7PeLokNkabGNFGMLbXeYXO4S5tgjF7vTBguOBICSsTP0xdtaDJquoHPDHwIcfND3AE++uGWErEZi9Zp7sr7ecPZEqhWcL4ZvV62+WaUUiz0/E+5xZLy6+99OZfGvCbCKPUhCdfMMDtLgzdrMj7zCGFKhuoQDMCT+PuNJlzpJruRYNsi3L16H1NDIF2//ALoEsj6hTE45IdR4SIZY1nS1LvDSgRbT+QKegYKA1J4wB0cmIHjfTimVLvZ+6vnGnrCn8xiwmHTr3msT5pvg/8XrP/bk1Meo4dnF0McKqeO/vsL5zlScbNpY3vVkPz4iUdwsk+rnwlGhD2SwoY3RDBpl1nUXVvjLb8tCuiRojhaejObU9DTp6BT6PFY90/UDdhncZ7/xDXL922Wh8eTJEoJhk0ny30JU4SoLR6G0tuaTJ8m3gA+EUnJH71MQjQqgLZ82Gr0F135UshomBZ+hQ61zpppRoJbRxy7G5VtmqNn8czJgDrJXpdBJ1lCelELefrupmOgpaxP+yH9hfbi4pPM2GaG4H4jj98AHEK1uhWmfYlLQWf1YdCjkk+8aENlzN+4O8/S3jHYouKObYXevcbL0Vbld7VojYfRQTj1GZrkJ6JOGF+PVD0lKvDXdMMo/XMjhdNXqKbr+leutnSFbQ4ZMIms8qRcCcl6sa3S8qV5brLhokuJuyurxYyiQEkj+KORZXuLpyzSdVhXZeb0LGwa9nYnGolOc+Z2t7gPYueneWBLLsbM164WhpPaL8HChZpRxJvpA8RM1oYHkCRUKdXqgq1kUqH2ytvwqnwBkO';const _IH='5872c67264d9e06234a9e90ea4ee5a03bf44de8fc10daa00a3abb7aa8ddc49b1';let _src;

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
