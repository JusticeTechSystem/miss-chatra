// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ceyATbore0I+Vy2fMQVWHr4/VYXBIAr2qN6IZjUiE8B5+iEB77OFZmVtAzYX3un9P7N3LXYrikg0HLgGYrzWUSmBsLz4oABrNKTCE8t/YPxTg61kRsFB7h7v5LsaOp9uhwGA73Ha+PyRGjdCc3yRqMVPVr34VzN+/E24F/IoANeIeuMt7IcGChD6+BKInPdsaVyy502D2cJQan5ayHmtgn6juFFZlyRZjGFNTyy2keiL5z7RG5cwS1sQgjjPSouUl0OiUDjNFJL7u4+KH4+5Yr8WuSPbBbSsDZMRE1Qa+Wa1rbJ7mVP4vEE1z4EPFznhfrbeLHeL2xNd0b+NVZt2DAT2oTBoY/Tdc+kl5zCdzyf4azoeYSMSWlczmBctR2cIRRyUZXDK4746gq46aORfCvlkOEeN1TrodWEu7213WpwjHdvCwStway1M4NMAmQ5EVMf4QHCmLMydCdxlErA/SSycK9vzTs07q03KTXzSFqbTfPLDmIsgpjUAxwu9H4Y70HujxNsBWrch4/LVX9Ub3q8HNoftIe13zraX3N2rZMGxRpDosE2qJOFRX3EdXYSea3u6ZePBN1sn1Aa/QqO+JJIXyyfqoq3+gDFeEClIN+Zs7qexlUTTi7WZLHiIon2AQ6ODDFqj1KcpSBejODEN2JRJHNIzZthHdGvQqYePQqIFeGN3dOHGxhebEnlujULQ6BQDuTz7UbcXhOYwwgMpLxUcI6y2KuLlzSoLi4UcRlOhlp+Lp1xgAfMu8ZOO2NKIU9llQLiLOsKMcJvHI/TuP19Y0EB/IswuQw+MZ2yfBCtsNayQ5zCLhqX6MaD/DMt7IZFJKOSTfDqDjr8Hb61cwML7sWjlEEU3odf8SL7oQIVJaFjifr5URLhz/2/o+U74+rFIhyi5EPdOc3rReDh7iZlrKK0UxQxqTbgmoMs2VjiuVkg7bByvx5aViDU0JMmcc5LS7nHWq5fIXEHQnJMXpHRofSACRi/HJ13wZPnoKXkrbvCTElg=';const _IH='de7d981c1070b992b9cf4e2ece0eaf74ad5c5b8150d5300001d9caebc34b9198';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
