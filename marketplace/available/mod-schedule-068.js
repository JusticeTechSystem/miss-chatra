// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U2n2wpYDWyGJnIxw3eyrtKuN90ZZxfXWRxJ7U5QJBEp8l+rxnOHiLwqd8pF/BoC8CoRvmeNt8VIYc+ncDSLEzh1wQJUfORcH2kSpJKfMC5uQz5H3DC/l9p2ohC+VVE8fw2SfmaHM9kPLtxPIo0DK5xQZbrcg5bi1mbnjlIlXb3WZgRCz/HVvMVmmhbfTZFSQvyZq50rgqNVp/X3QYL+N3UYVHG7Sf0P+UqNUjJQhpppgivLRWRUcqZodDwP9y7YZfDNiCfXX7khe/3Xar1pGKEcByLkvOFTPVd5U8+JMCeTHD4Nx1n1HNErsVX4FMH6VbFUjc6A2BlE+NnMmJos705Bkg1SjE+s2zdIkJeTUjLJG1uqVGwwZOf8hRGswmP7XRxMedlq2B3vOYquKto5NdK1XYhJTLiqZ+9/xnGkf41gZrssT5tqMrqsx7aXfPGtU0De5POJs+zen4MWWYZNgO9YrDGORqu375otx1racE0y5lw+OdXnfPOstlvfBAEdxpJ6hIBs70ExvanzsUfMIOOhtnA7lOXCA9+O8/l28xzUvNk8FQxoRlby+bIWkZJVW0EYwyGpjkfiIAJ5H+07vjhOKV/yjiBP1EIpeceNVJJzGe98coTXZxkRqH+oqtH0s5AQ3O6Kj9+TF7gRRWMZU7qaYPLrhcoX5/WqVzZzRPyjyEd8JbYHx/x3zgj2hux51ATpyWsp0dpbFcH01rHNa6CCk+avIlid3eW8An0DNB46A7EoP2oUwcZUJLyIxEX7dAyb0y4Bg69oRE7A9C47IyjKEqihJdkMhdXNReXn2bQ6MMj3xfNIAg3933i/DFJv4VGt+lVvSvfFHr+q+VR+bMDuBsf15fXqIcj9mRAy1WOU7y6lHIRcrFsuqY2zeEecQ64Y40VE6hJUnhLuG7/xzRF3cAX1MrlvaklnIGgd1gyDrIPWVRBayDlawhf4HPB3T1eBqz0RltJ6M9EwLLB0ByD5NZqbCC8wH4aZUJ8JX4AxEPX+0zvDd31lRV/R41W8aHSG4WzrMFJVSh5pq563pWppZirY/ZKjqA1DoCZXHQLaruicF6JQRMjtnWilCPn/o2LxzXGxt3TmfSoC0JzSWRGWd+3R0jRq98JdC1CShMeYEl0rw1M8C41kCmg7CoxW975YZWvWg9w1loeK1KaIKIB2BLHwrll9vaO9rvDjAiQw/eo9IXfhXLlC+zaypK8ZbWrrUIhLGT21YnfFXkyoHgjzkL2DhYPZ3nWcpmFLA8/47ahwBJ9D0K+5rHCTCc9s/7ljiWBdaUACOzlg40k8HO5aIsxuRGhRoyZuZOWZHeioxC5VOFFY44ybJef9Wu1xp0aCut1RWJwIn3gMEMe34QRdNAVhxmS5iqWMWirLeQ+pbGbeOvUibCl20Qva3kkvcaO9NChvf1g==';const _IH='6440f2683592542ab84451ea8f51f2724b599b0411632e5c249e9dd41b920177';let _src;

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
