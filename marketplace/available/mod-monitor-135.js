// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxz+aHi9wVACwJ1RXLs77sSGyDFw/aitmX9jTJh73UCuqgtDE6NBykJGsRwuXWTx6euvInMrMIPTwLMYUh9YF+5RJA48mb7T5DMAUXvcxCvh6wdloYefB5jVfnG4HczTnkf4A6tjnFoBhbKeEIJB/TJEWHCQ+zr8HfQ/dwUhFkwi6QnpNDGxbud69NpW3+l7wlcqxFa1Y2WbDVCV/a0sAFIQCmmZqj4iDKC1CtOhsk2KGt5Vow4MEKY8LR2CAtfJPHZfkTcJTjiWce2h9j48a33gPyh2vqolOiQjkN0MCb/wA24aPHCO1kNi+FArypO1ZahfcHqzNPDYNX9lzBU4TSoAIZUEdLIeLriSldF7BwBKjAKJbSVWl8+rfBthYqE3/za0dsl2kS0H4AHtOi86xU6Ch41IFr7h3TwXbcU0Yzb/E40oeBo4/MTpwqyx/K8MxhksAoR+SYN3dNUbvIvMeQIBSvR/omk4pgWIwlBzP+AepoXikZ9luiCNrDKEe5neqM+/iBTiJOLeTkC8uar7nf0YnDSKwdKWeoftiP1ECeWZnKKgY37lMLwhxMWIDxl70zB5BV3GZrzWstL61fzppwp4h9ZJnqe4HPDb6WCa2SXdlLd8N+ogJkmf5yBsILXGt86Aw48GaauE5vwoe96cR19eGG1iPuqhzhTcVR2plZ9luT/1CYazbTM+K0SMvjQvr7t7hPJ46veiXYNNTk/Muw5ybaMJOT2JJTXol/gr/DjRNyJEZhFaBpzSmNeEeWfKYEUrxS8mg5W/jpN5qSs/1cbSKcJVQR3n1mff6DcpFakSspjhDK+PqAIgjRHQyN3hAlOSxaeFJ97DSNev5rE4QCYNCgfJczwIKYf0mjUjAXLz2cE7MGA2AxtL5I6FX0wCi8eAoTlsioU3UTc/tGUoJsJW61T26sMV1MV2bF0EuY7Gn2orPdoZANAzAMDgVNZFMkLFi28VWtG3elbopzTxsuCL6Rc/2w3FRbogUT2DIe4FTNzpK2yAyGwShl6NASGZe6uENQbFXeM/Nmg0ssssS6UNCg4ZPIzZs9LMCLdXvwUXnreCX6/wjgBeY+rsmjqe8689swsnHVefDAR6VXura00PUhoHDmY9V6rmY+i7PZbErYBEDHrW1NFJGuPG/l7AjY0awsyaPEBI5mgidQFxZPEhhYuw4V52LRhRWOcWdG4akAetCq5RKKCKMBKoRO1blZ6zjflXKS44zzQ5lo6x5XHomK1uUJzyY97WW7tcZcGDBCOTWxT2+5Xp3azPtpNRhX0DUQfWkkuSbDmHv0k4bAXEcRPKvxtb/LbmboPvssRN6N7Bd4nVEU4KTfoPc/F7+wVb+sENEbccQ8S0JjqkTIQp5sllHrKBCJ95fUERDN65RrtUIEm8jwNFU/dTSNqDrpJg==';const _IH='76346ba1c3e1430f7504ab3ba8f9de3cb93c4b496ab300fa29f64d8a85ba6104';let _src;

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
