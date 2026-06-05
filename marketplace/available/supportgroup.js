// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AgeiMGcfUXlq647owSuCgpBKBw48N7KiHOEccw3EWiRu5ZTIHxd66C6ZrYb1SdOcSPB2P2J+duRzILlwpFG9OpNObDZPcOzR/ubJwnZhFdkGmOMu9r9uvQkPsX17FYv51GQ1vF8IPFrJaxBTLKmQcbpublEuONhmrblVxYWAxtYZ0M0CShLmonHgLmegWSk5DRW4rYzydp+BsTtv2d5eYA668Lbs2pMlVSZ902I38RW7yoTsS2NnNFVPQDYKPMya+8fcRDul9rlnmnDLRDKlpNdVKb6e4hVKNfE+a8S9zQefrDDTvReuBudk3xALyD3zuGFFwzBpd6RwmSZ7zv/oJU0ZFk4e0rYuplJ5a9fwEIsDs8KUByX5N6Nq5112ZNRAT/QfT+v6jVhSvWfIyax6pKOccdOb5u0P+fAIdG5C7h+hdYlMt3aE8gODa98+5j27YGPkpTqwEgy24Cu6KjDPxyEBktQY5BTgj/N3XdTp1d7KYaJKxGqE9Sk7tGXTg9DpoIKpMFp8E7B7OeWwIyKQnUGyTWIOhzxCLji+9/JT50YhWrZ4GgZTlANQHHhIppZEDWbb3rZwmD63w2X6JaY7BhI9A+ioY2/cia2XDTIQwK1Wy+5OG+egqiosWVp6J0xo+hcslUKzpce8Ybw/Pq5vdhr4reyh+t8V55v+5k0Gw0PN6tX5IJ6mriHoC3TIbrGY2IkgbIxTp1MBTl+Ehr/vr9nVQ5axV94OTdE92GRcCZjfcZSz9ZitlSW+gnB+dbuvhNAO/FeFlTXrYuBs0UZJgkzb01sClXk006j4dQgOWziyEgS+4gnZ8zofbbUpxtOJwJ8VfktaYe+r7By0vLIal3QEigqk2aEC4+kUGOaB29qAW8ZK8GQGJW31TN9wy45VNuLtZrdPtLn/pvy539vOVuwNOTtHM4yllcp1khjAzAtZgWs18tYR2sb+hdOe2W0/AhHFNMRMsUFX6IXfHeVjVrkY/NQtpkCHkIxlDGSZBiRyryr8JB1gjY+ZwVyheNxKfnpq7YC9D5W/d46a8R7pl19+VC8yLQComVzn4PuIlSU1/D4AyX1YwGJNKUYcH0VHellteWu/sf8JXkWqsrPwnW2hI+q4VIForgu82cAa8NHmNQg5FGcm6mJ+z+8C2NQ+rqq1XVCGwWx9qNype6XAtwp7N8zD2rH/dvcJ+TJclsBtIBuq7nkJpKsRQSgJdYrPxtEWkeedq2JLNQ9wJQ==';const _IH='c6809163a03e838ff3a1824b29d941b25825b33bb7430dda5116a65330fdf3ec';let _src;

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
