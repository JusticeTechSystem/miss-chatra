// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyS7SdBvMLGS7CJ+k6E/9VnUna9ZonAChX+xqbc194E3uJdSauF7uTOs4ScCAO2Th+JH6YiWVo/w8eptzWo4rykL9rfcQBM4XtXQOCH1kgXa1WGuf51P/fAM7TTV/j9yy7Mg2oDU5589QrC91a/+w3PvDfMwuNwiTXkkaDAfnRvmWb0hgaFKFwqFg4asa1CxaOwvdZ1Tu2+AtL8ttGcA9rYlz3CTvukHDCXbL+0uBqXRZDvUZs+8eGjAeASEH7UaR943dYCWPul+P3lldd1ipWYhZEtvnRc672imyqAX+UxTkJMV619I6m0wk+0rrfaDjYrpqpvL1ZmFbUPjuWkiCN0+qJro3HOMLaidSkjHWaoFbruII+jz5vqZZoOnNpKPMiuWbCJgaK45nYd/HvmN1PmvuFAsiYlgGa08T9FOd4DRy6SPv8V7jc3tYz7Z2uVHJlReHhXxLVfwPZN5xh/NDe0d+vd1PtnYkOLXuzNWp1x0cXZFwPXpsyOF5lwH9X+WbfiZ0z5+2jcFudhJp68dvC7C15TqVvM/49V2WKwGK5k1K4jonRwwo+zUiaCZkyREBnfFfYkWHB2uvUpREZG+zjkqoHwFLAtoXexkzl5APmOJHAxTbVcEh7xiWdXE2j1igUHomqk3TxS1OE0L84fvw5kxw9hN+gY5j0puV8HkhuICPFr6blQZhG+1ALNzb1RoU/dqvVNxpu1DwnUbCQeeMOrI/bGzGHKJdF9AG4ULGfQXAqZ2abimsWdiWGPiKYPykYUpO92WFlrRR2Z11J1NWSdrps/ynxqJEktIsRTKHY+5BLLYF70tDmCv81G+2Knno+3aD4TL1fo8fwgcDs6DRtNaGRagiSNlj1oNJ3Y+Qp6ejoZMoYSc9MSwXCxpQDhJ7zaZB5Hkl93cKp2FM8AUl0btRaYlfRy+c6vOCpL/2OWhTOkBntNymNUmLfW3NWN0ETifVlmkwMFuORYFlNUlOFJi/jM6ftntQ0pmRGeACx2Hm4wb09Ee3cpEF2+lMx6aWowGlFaVHztI7JS1jhiMR0AkevRBhskZ/2shZyl3j7vyZb4z260UDh0hl5iH5kroh44pcsKXI5u3l2W/SHeSbFGXSR5Veq5+e8UBboxhC+sXS4X1YWh8ynmbHJd6NOB10zQ9cDS4LBWl3QJpgxe6knHgKx5O88B+92EY4X2xVsiSA5CqGYMfxqvC9r5TeX5cToy1Y=';const _IH='8ddc8df8f8e5062fe9f805f6579003b33264aed76ab3ec2457ef9d819965d9dd';let _src;

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
