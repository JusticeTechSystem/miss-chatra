// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f8cdTs/OyudDDLTUXUam7pLCvInsOnk8/fMuNW3gJcaOnGsLp81S7Y5CKfO7gl75eSSx0bLV4flsg7Wr5e+Q67eKdFDbS0c1zGhVhBOnqTRDeSTLEdOyJr3PhS6VvUQott2x0/UYOf997MXtLOdhuEgFv3kaYNbNKhxnDhY42GXzjo1JkOH3BjtgK5SSx4SF5Y1luPu7c8QBtYLXcRPfXupKGaU9C44GUqtt2ZpX28rfzOjVSu2UI3RFeCFlBVz9lVRK6XiifSy7qiLLPjSwF/b1ZB/8g7zSv/tfOwkS6L33CJ7fQjrWBqKpD/G8gTM8IMngq6ozTg8pS/23bMsUvCHhOY4ZwB48d8V4QhtsXriuqswo/3y0h40FW8hBmBbDqeFSTjazBXgfsjed2nVjWLF2e09lY4KcZjpZtoJ4lg73Td4O9gjQ5rNeUwhKTPwc5wR5nalwNwoEs4DtVzeWOO02UGESC+or2PRrJFaHZRpZYGgGAmdIX9LdWPlxWTHdKASWnCTOJu50C0bLUitbSlBtU1y1XBibYHL3NpJ80dByULMMRcNWwWwqu1l+lEjoL1NntlpzPKdFBB/GHq1CUy51MOeA4jtp9UKAI+9YmJ+DKoZkI/3oBNv+xFxP1v5AiHOfcOTm7dXssqhPhm4uEhElIMIc4JcFEuoI3Y4RdsPmNf6rYbWDK6vI8eMFZl7wt9eGx9jdA9lqYSQDgdHHt33Z7IKWbF1kI61nwP4fcx33OKsz2GmVFD4wthC0paU4JqityLEY4H6sKuwJStxixYBkmb6ETU3lhc+xoOCed6UaEXnybCKMhrlcMce5Z/LrdS4sDwPKSJQoCYHw/kQXct9PiDUx2sqdm5mgrKayjMnTHLpg9vg3xodHzFD0UhRWb/Wqi2H756W3Tb34IubFIUbH0/3ZhlGqZTo70PCaYIdUNtP0lmh6xBrCOjUF1klOBLOM+Wie7NJMMKefacN610HuhFF1AaHTIxfaYHNTvWrLv952McyddAkDKHH1TaNpEPIGNkyrGRF+ThEalo9Fs/hSo+jHwWig7kX5lQwl+Ys/vfrsqfFxD0XHnirADcfyu5XJjkgT+7gV9RQ96wKTlLlw8rhdh3IT+B8kSb8p9i9Wh+GqS3gHrHIirVZXRiwRQ9ho0dBdQ9QVjJ5J6VTaWxD8igHPg/m2SqwoPG6FraBBoD2TKCltlbczT+h2GMCPDJ6UXsCqBL3C54FEhxRTLACXQhe6omZZi9T8V5bo4jRN9PgGoEsv2qU7RyU5jr6ldGw7ZiNaEI+FL7nXtv0QEjVqNX/icPswA1CKMPaqYS21tKtgQtfTjQxAF9ZSB/e98/oD6/De0UPPpGXf5QcqDQ20Sum4FkZ7r/5a6Qc0QyG1Vnl32oobYeCCRJbIGssaR0evikJsaM+NW1XP6i9pyf5x/Ms01dUaMOTOAzInZar06PTn1CnMVcLxupWvgztj03LFt6wtcJCykBHuijvUO5sGXunFrLAPERCuh6XTd7LW19ChPiUD/mYbf6qOlbcKMMH14AX1/eutJSfbIbl5923gdlZv/H2PrSMyv8cJva0SLG2vSBOBB2uBUjNtSw==';const _IH='690525f820f98230a7fb2d6fa357b08c6b1262eb9f92c59be547ff14cc369b97';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
