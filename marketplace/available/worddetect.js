// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YHxuGDdRg5zftbOwxDe6fygCXxw7uyF1hyojeVf0gBA2QEjNLPYCwj0QJQfcF8WIy5vKXp12c5ShXdqQpArYX90or1bnyAKy9djQKTDRb9vv1Qe9vXh6jZSkLDbYEcSmsVe4jMVNN3tP/0r24ywoRlNI1WJwVidJizYXo03WwEIqNPPUV5WYXLKeOWp8oYDt2pdtBbBUHSQxWKo2pmCSE0wipEzBCYbKsDF53UavIObHt5kx8cpfPl6RQEd0y5Ow0JrN16vN7vW/h/DyZpHCHBQMFeNpy6YqWUbeDQ3QBR8gK0iBKrKLUFDpPkqqu9nIA/pDJPt02XWMNfeAcI9PU19sstbb6F0CL1X1l0kjt/RfUZX1ZJB6F10sAfg/6XVhnWehwEp5+uizQArbh9zXHEJP4bV6kDbFzxVywRF1JEB2rvFhqyVVtw3G0MliR9QuLrhVwkAzPB+9YxVz+n9wAJx3PjMvFZsSU097vN7EY9sWjfWKcAladYojKJqNi/PoIj+RRMOC35OMTXj5elN1WbJl34JWzwOXgXGr3pJesKlbG6TsvGWyKzsAkq6XIism8nzjo/TZBFTBFirt8Aj4102YMD31BQDb5YxOs/2wzDOpXszwtuJBJzfYPxD3LXz2an66E/V3FQWQd+RVV0gXXH9rHiFVHhVj7FMYhxCpJ1GCiOF8gTC/EbBIWEIH6F0zbIOGRWU/Oc4YcDIpEuLBIZFkmv1ANfmefCvik/aiQIfTDhM2va5LDd6A4ipgOXBbz6narABYT0NvawdrJBa8xD8halZndEnQoBg0Zf5E4tL3AHnVSY5AbFTzWZT+AYXBi9JBSXnEGov3JDHd3/XCiy5HcOXDAYUS3ISk0dBPzkwPdC1QWWWmdRRKxU2cyJud0k5AgkbPuN5tJ6BKRsPIi9ilcgXlKpJgzJcL+2zd1sv9yOePDH2hfwn6F9p2dTto4aPQlxUn+rBhpy46St44qj7KElqgOWfela0PMF7AeNmHFibmcseqYxLIcY7lXDdK92vmq/U+fQnRYAVuhAaXzibr9sBzWjm3PMCG48udj7B+7zaRn/113Bt+QY2h8VYveal110rI/CZP07RjM2i/2z3qWhK3x3R+l0B61bS3C3c2+y1rLeAS4zyIVhZVZ5+AYfIv6INoe57GJ5yKpS85ezbb1Ac9Kvo3jKdhtPSZZn1wUS6Y/kjci69YDZ3MEYHk';const _IH='5dff0892bc7f5f8cae2701aa3a5504b068f22bed2531b25dd41886eec23692c1';let _src;

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
