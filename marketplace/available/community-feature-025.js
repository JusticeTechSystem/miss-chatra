// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnbY7WeWqQZvFIPc82z0JG7W1Mskrp7et6+QGNuAft/ZCt+lHWI1vz2xWsVyIM3AQc1ByOHnv46JichGH6Ic6EylauutKoX1Suls9524GiZrvQySCBN8rj+AjtEXqNEAQZCgAsrwhP1xEDgHhvSi+BdtDA7efBOSpO+fSXvbzkr5MyCpV7IAGlNsloG7Ljdf3R2CiCbEnbFFQplYJ2SkkavQlIrvW4RAFClfX7F8mfBJjiPlMDTQWcAnaqUaZ8WXgC6D7+hh1MExbpL0NHnIwxmQctVgoe9bb5A/x+O1EAUZgRgQ9l9wjtJNnxQyzGAo26zRFwctFyC9jnhlpWDt91cWCQVO+hS6kW/rgdHJY5Wx0OtmcJdJSatPmHonC5taVuRwx72nHqeqBd1H3XBF+k9clpuX4RXXpZxWV7XfkKUxGBjw8A62GXq2SoNmT96u/vFaVB2Csok5d5Jip7zazQRU2GwYlcnUcpUyE6YG8v6EvjIZluUit8DXXx7gz318QoLq0wCSFmAB0iSuAUU+1E8UhweSua1uuS73wednlsJtIDnfb1t6QthLRGOMPjXYBOXmIRHENWvo0ZCWd7P/MHekOylrIxX1xGv2lagisbTvfbj/gIRo/EzxMDVwKOqZeiIo7qg6fnTNYS6vgzRG15PfScaIzyR/tbcIk7BRdT6h7y/ZaQQKtqAuBarhcO0xKeYh7xSzc9UgiKWgy1EvEYiaDKerWJxIKijQDXOexJnFS2ADPvMg==';const _IH='648731d750d872815317908ba77a9f9272003edb8a9b3ccb61e2dcedf21ea0a0';let _src;

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
