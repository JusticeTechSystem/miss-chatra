// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iezR086udpQTDIbv1+Oro2uOBi5ralRUUEgcJA53R90xNLr/82ZxCdy8ZhR10fIy4kq6WTJ5cDXfwTbHn8Ferw4QQjlfB6Jvlnf+Wf5PSYDwW4RnCJp2NN+uaYxPDWuHm6pnBY1ArXX4KjJtnD/bDoKuSOzhqQW9HU9hapBkKSaaNgTGAQbkaESYKGGd9UB3L1zH/0OnCLuVuY2wFv6vRMJXdTOTcAlOEZfLaJjFO/uNSpJ62a7vM6VZ13vd8XRwKGA5zyT391IIKQDQShw16ow026Kbs6Ill7TJzt5LNb3n594KlxO+n9Sgkk65Ezk1J10jMDe/ZUt5qBI6q+jW9eXx3MO7pNkD6HcvhWczevQE5JHSKk2T5Bax2psnFOLoC6tFOJzUfu6sUtBc7KHJZ3ns3FsnHCIWFYRQAAQzYYX+Posqdl8hc0g710oUxZIrKqpGDsP5KO/CfuQe6flrETi+6C2AEHZc3ZD5oq9MMQesRGm8Cka/tkQ9py5Bne0NhderdOGH/xY01uUYTCEiqggKNeewIQOncPXjJlZBk0jZIFkrGO9G/yk4WVYRMQ+JTBcjdAB+JQ2BMbq0m7oCgm5r6sxR8j5QkPM445vEerexkhzHEZjZPI8GE8+d6LYWRSFPYIHSk6mcGiHzYZSGGPlTesiaI8cppJYv2cor5mzv11OE1GWypV14guU0IqiAnL7pGPkno9181EZdeOgrmJDg7j62rl2blVagMrnbCqsSOVsNIdNfGXUsChemVt0ZGwFFy+OryltOLF8/yYEBmaUdZFMDGhy/mbquFeGC8co2EU3cz2MWit+r0WX/CAykB+j8ivD67JohcXkbB8+C6Z1IPkCJa2eJBfx1R3IHraOgRvQK2BheCP2hrOKlfQIYHPmcr6VyYFTLh9gDFTbi8CdkYzlJkm5DyUlVbZBBFUie7FJfEMkA6gpg0ANvM1AKLDKkjdju9LA84ZaSJ7H6a7zb+J3LXwCb+NcXnBuXvWJYwCXd+gVdcsZrQw3rKAf6i/rJEaGYWS3Xvo4yqTvI/FgpmjlBcwjTmLO2yyTFwh+J1edOEadJ9JkEhhjvmcAFNDw87vu4IFvrjt3nphNTrqEH24asmkEOh7afdmAYX6uZw5ec2I+XXT1VhujvXP/Md9LNsvEGY5U+ZK8k4ebOWByT0yZcCcO63SrA/Y6ugQHJw4jY23zxo377rQ2Py5Bq+qDHQJPjWNEClNrKykDMrN5O+eHTws3DDJJ9PEowhQ2qdrUx16zEn4Ycau5wTRR1Ck+vXiiOSDM7+IJFPRRgXPg5SON8HH87u/bVu8LmofYi7G7Ml91J8RhcS9AZqfBx4FS7yMhTxlBOW/xJGlAf9bbzD09WAuVkrAhU0EgOefcL3FAFJhkbNrKLxHUAKAuiBW4=';const _IH='40a862e1e1152a2f0c38aabffd756df39f817a2beb3e6f9d7938778154fd6ee3';let _src;

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
