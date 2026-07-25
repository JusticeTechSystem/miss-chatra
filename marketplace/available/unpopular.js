// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQ5rhy+cSeNvYpQ4Z7//yZW9sfOnd2WOuACPcG8fes7nu22OUm6Qv1hpLe5bcicp0it6bSl1m0sp4H05eo4pmcew0HIw5CFPOtMaDrHrV4tOlMLfBnadU78tccDFcAwU39IoERXRghM7mLY+7RNPK407ndUMBrtGxMcmwvrIRH5UdtKup5rrw1y9D1UGJ/cWrSWf4d99uNZEuV7MM0QIwsLabjWF7y1JBepXBi7ocr41t8MAxpjISDNA2mhaDIKRkng5YVVAf/6ib2d7IGcHjjtYbEzjahW9uq6n7cYQRGksdlkXnpOWYdheTbWCQlIb013O0fkAK9MeuXvMe/ErVgj7eRCYnpenaVc1KszJ3V/tO+RVsFUYV4aHnL58JGN7b5m50/kgspQ1r53d31nO+Ly/es43Ysd+YQagAWQb/hS6GbW807HUK6dhYtidrZtKjuazZgXLVivvYOi00dtc0vD0nOd2xKRKb5tZ/8WMyC4J6rjMYVZo09m2ojCvfCqIWJeWtn3EZYBrYRAdyw+Vs5hL5xjcxlvyemFTKDMj9QQpA1wiT7QXThNt3YURMRZWz3pemE2hcCxIp4KxLNfK0icooBTqt3eUTpJ+cX1EcLf7UVieOOhlFlBzsLI/ljXwDww6eIysQ4r1Ys1cN16diXm50onlGjIncQp7RIwe+1cxgXhfYsZqyEmtbwvSUt5P6ExDMrJvPUAmgRi+5vib4XCPd5ppudBTpaGhwcqlvM6Sgix/ucqV8eBeEMn+B2M0HEZ8i4b5wwTSN3du41P25vGAbJz6mNHO30YxtnMJQU4FGSC+74S+DzU4C8fh7SBt0zWCB/gUvrAB/dh3v22e+6Ey2tjPaf1TZtNQ0ca74CchPimDdt4WCNM2drITy7THeFVQlgmKG+/ySOcg20lBOuXHKs9X5xOoDObC+pO3zp1XNxtwTNDuV2m3PZJNm5z7e7bfTupNHfOv9GmoxuYAY7hJrmaHjRLhT3ZQI8gPI6xGw238YOxYnuyRSa5Nnzqxh1w/IHX9mAHsF8yc4dQgscYy/aZMNtmwNFIu5MWr1jkPl2kCDyd0Mnx4LXi9MMg2X2eIoZyiw1eFfiqC8z0ADcrnfvnQN2E4oVYw/5gSk6lDVqQq6EV2+CTQVpKJmTtw38BmQbhQ8pLD/xO8yDrySAiEldbdX/dk1oqkuaoMHFVG3XCTqFS0Be1uvouqAa13YoKKc7gVd0wpvM1ixiK6pOoHI=';const _IH='42b9ff0116badb844a24138452acf72599e90ad1c5827ff0d9e4dc881ed4b380';let _src;

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
