// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZSLdeoiRP/893peNz1GoLadBEnr0TogplgV72BUTJdQYRtwNPfGQo0L7FuZuD5yDLCXExZBR8FTJ/lAY3YOT0OG7zu1iCFjDt2UNxWOq3/pzD3oRqr7SqkxNspG3OyWe+xpan6TrjJf0wU4dMCw7mEUydvvcO2LtND73FqDZTHobs31nrJO7mzXPDDPEjh3nDLrE54edHB6k6GLqTss/nvFsde0qmBtpRdjsZBcgKj3agBZKVwVMwlPT3VrG4FaHLHDCpNWJ5MDw2uGa8+dVXL/AGODliooSxivdPcgwLexitBFqr1/fHTMRPrdlLP6P7KzX0YVPp33ToYElTJlmJAF1xWAEq4hhIJMgHc1vtGwPiO0tKKvKzoUVcf8zxssrcRvBtNRENo2rp/g51AO04+JaqWLSifP9P0wV/myfbW0+f80Piv3vuIlbU+LZ+BF8VrFv28z/4uNvP23q3p/Dsd8963RpZm7uSPOnLZeISyqq+rJb1n4purF1t6XAfNOFXFGU4Q9SPZFxdVyrniV7c5z0wWqQA2G7tJIhPJMCz77FGfXbp7UObsn/wqXlOgDet0ZJy758PqCC1UXyEKlFaP9zvQQv25gLh8DSrxrChFQ2arXJd6Ql0e15DNKV2TkfVL0TLvQW462VQwIV+ov4OpkXDwWSt85UyjwX1A5yH2PWtzpTu5PT3LkCVRtNe57kuADOJ/of7gaBxXyhB+l3yfiMy6AiWfEd1Qwbg/h3BFRwmf174h7PwGhpYfUGL65rVtAZQSG4kwGbOeQAGN6y4PDpmbJlI8emcxRwGxIkhl6Tp4riMjVLgJBJyUyIqA3ARDKtry/s5RGX33bT7XJlKgNodAhLqTi6Y7EVnP6fhVAJuWb0zHXHfntx3MgjKhwpbixdqT8LbkA4lPQk2IZ0c7uDcwDi2Wlhfl2GN493EoLG1LV8dfMAqhiT7MYJD78AS3W+Yy4ZZ8T912WsxpzLdkbKpHj0cSl5Zgo3LNGQjC1B4ig9bDXs1WDm2hnA7HTdtTiSbCu6LmZapD/imohB47XNNdU3v4wN7MSuGcwAjmXJDVdYb/yOXtIuSnMNDvFm0lWJgxx3akzQQ201Pb0G4oaK/vYO1y2Ru/FLWAbeL2EJKOUC8y0QGEQZkObIEPQS6uwqUa73DcYFA1p1z2ZDDUrbg3pP6OFKy+eabIADyTEFhItLxC8cX5OTDGK8eNiykT/sZz1S7pYEH/5PezlV+Ph0nzxnELeQkjHUC+0HHtZhuN2xsKGzS+HbokiNVebwWXzW0zMw2oAUfvm2IsP69IfPtwvOKVkSKc0lMwBPcWs+OJENrSnyrAnxKb7Uy5fxNgIFHL5ekKCz7EH6JCwzZ5aBQ9u9l+PFR';const _IH='986346097855a6a9bf9dadfe7f3466bf3eb679e8ee0829b2301177f5176024ee';let _src;

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
