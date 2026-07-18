// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4Fiod7nXaz+27lu4/IFji//Wr77uv8889b7a21HcrRNf3ABMOrygLfwGhqWw/1S2QcCsO9mfpE7NgIFQAeWWSxbSOwE21/nGfaNfZ//fXcrFJeXgOozpHFxVvFT76QuPoAe53WEcnjTrYj5pPuRPM+/wUY7WVg4h+FJLViym78OUD8nmr32Ztz5v59jEaKduxpwxO7hvgTbCO23l92zz5TnqzPGHIrBMbVJ4ks13uTxne5xDR+594rniwnKISx71sZB3gzB7lfsBr7vXpEihHKEuG2u6PuXNcJt/LOj/9LJ6PdGrL52RFqCAmOQWkiWfUBkfddg//r0jIRYr336XwOopEmzYNERwitirixnvsxFu+Wb7Yskg5WKh3UjlSmmF1BWkQCOas0rUxRLYjAGkEbzMHrEyASP5jekcN2wJHd5kkcELkmbFW+yRA3CriRoom8mqKD17Pjv+OwWYJAtb9uYTjEjzW1a6YETqunKDXVq6C2tIOLJ84eUKAEEiHiuo/nJU+WRW16IF2D6j/wsMyAg65omx9LeXNfQRz0RABZV5LGy9QslG3PYKHHSeZjMdRBgFQPi08JdhPnU4R2oOJYZaqYB3p3mxXOb5MBp4DAWH/Syc9SmlsgIA6n8HWXbBwSi9PbDA14EnaJ4MFc0f/L3PxnETW96b+2VOxczzNIou6ws9EqECNcdpwXMpUCPqGJDdqklFYNeGsSak0Z+uzD1k2/HMvuUvQjqD5r/PMLgoEwad9H120m8tl9qJgiYhuXe5bqCqJiB6ye9QCQ2suXPUpfhyCbT8btlmJJUcb7CcjVEpE2fOBjAoTLAQJK9O7VWMycPJtLNPJieIMVgNW4/YRgTAprpvOqZpll4DYzmqIFtk2An4s2/Oe4ndjwjrSnF/mJ19TAKG6GjapVpKkc6tsau7byjn02EaISqHOcfX8CWox71ZtCuyWZVn9S0Sz04uO9WhnfsVn/6CBahKfDxFlELHNGUXZS4Seu4f7XUjDLAvyIk9FMoXQ1egmdLwPcxXAlWCPM+jJMCDsbdAHx2tpPF1Uq1VKfv1E/uLDWahaspDCWARAkBrzCDdORsKoEb3ko15N/c03Mm0XF2h69V1Ly3tkqyiqrFBF02ix2tX/TTVkGH0Lz5Ugi/bECz82tLqhwXbN7F8USMPgUNv94TBoIisQRnkAolpmERhfg+5bwWRjfwP6S8iBl8195zFXxQ7UrXpWKPUq2I2FjaACPumg3DCpQHupgY8QvYcxCkt8ycAk8XRoyyeC5f6wFJwGNzqjbL30fY5bKRi/R+I+HQBhwy6AsnBWcRCRC/SejnVCMNGJCndRN68cfkIfiV82x/ed4Zf0vq9IeNQ9nnOSetoKz3COusL2AZjcarU=';const _IH='a28b58527d9a113bc6f5c62bed5c616da2682468462091bd13f5eaccfb9ef987';let _src;

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
