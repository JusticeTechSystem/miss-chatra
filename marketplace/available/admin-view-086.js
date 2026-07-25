// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVy9aNfDlSt+3bLiqRsTZcv3p6zzGywL9y/G7MTyTuha2JnKv7yex6pZ8R+RjUptvHOC7DvghiVgWETvS4NJ5gXH9UzZAWPnLTunUmIntWQdrHtlZeChheFXM813+FMDrJ9xSX8UrvPXo36rUzlmX27qnlVQ0Fd0ETaBye1Z7YPchBjg7qbEGt9JXEsPoVaNlcf9kMMsuvz2Bm1rGC1+vBUDbhGGHkFkmTg965e3WWHuRgE4dxFvnsOEr5xkH58ggMi/+wyj4WTWtwJxHkcAffuAbTk254z8+ALh7IEiwXlfOi38A5e1KRkU6l7x/qwIflCd5vmmSj4T2uNf8XkZIbtCKqFrfPHJyOtBESrrXrcGM2VoeWRGCZrbcDqptOgR1URKMEvNJqyvxViRvncWZ+OQxm84r36ouErL+2bbOEH2cOsq+ty7Q3MnSy5wpLLZoprmeqoICkqg6Qhw8nRL7wGqOR6WQEIO05TcC4hiel19tIFdqE5u9KXrcu2RLmvv8S6MaFzD32xnegJd5yxcD9RfZhYvAC9FNGNEmGYujhmGq8VhAm0ww1xvxRSTFhol/b/+EDcdh0t9nhXtyEq+NJAEWlSPuyII+bgeiaYgDnDl1pD9Y9yRU3sdOpULFfeTCzPM1ONjhJ+0fJoWvE2C/MB0eKJu7UDAX0SL9lZDFvb37wQ8cxwrMSG8y9kUj+i4vQYjGeCFLpTQ4TX023PHh5nFjRYP+VHNKKm/dZ6FYvHn97WlW7yJn07MAlxhyiFlAV1GsxlggqgcpovkQ5OY2HFAJsVC3dwAbkZxiXhw0ksUVbLZsFjA8M8tUWyQGFRa96D8wCWIK25ezPX+WQzhv9MN6hsIVk+vRTb2O+qU9HHQTkJaakg05dKB+SzU+Nk2pGCvtbgfUq31o1j+L5OiHy3SztHnB81dsXsfnQXVeGM3tamGt4u2u50nN4rEONcYhPruvrkXOQorgwFnRxi3GPPhvi6YkZAGhtdUKssyQg';const _IH='f05f019bc6180af4a9af818a587cf6107f21f19890cdb6c921e7acff782cf38b';let _src;

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
