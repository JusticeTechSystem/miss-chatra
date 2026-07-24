// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiZL68FBHnxpfK8+D3FEXKy9kYIobz+EtBVNV3ncypWoNWbIDXhw5Jrn4YN3vet3zvXIsNMjree+Fg8R5xJYV/e73HSO/yCvydyiSB+d+qfcKun3yowZ9Who2HfccG1kSXsPiJ42iGI254FAmifyk0JukNa4P1ayhrkmg8pA6Vd2lrbIKZURK9eGHDghb9hqOPRm7JGvrnVI8oRhMJZFWvrJ9WzTMog7rAWtTpO0Mwm+hkuSQhQ1k4IjDZe49WLoRJy579la+tJ+jeQQzLWQJSsYXO3FE5EmkA6TA+dG/PgXRYADCTgAUFt9bBAxTNApVutC+pc8lJaEMJ+2u16DVawO3Ax2eAE1qARqGHK4b6Kml7NzsKCATgWFg8o1ivyUN1p/RzhwnyqWNOt5S4Ii10W5LErq4MCjJwH8mIhVd8YkY4tL0wF2hWqULwPbLSt3OxgqnrKz6wcWzxrgbYOOFdrWZGyZqyLzAEc+IyKjiugcq2iMckAB2nSrL3Gs2cu53WruTZuEiZ8cAH0V7rxyrv6Jcp79PWDqGWm93SXsS2EVEU7rZGHy/5aDpOnaSdBUC4oRo17+MSECb/LKnUEs/mpNN/E4C65X1Qdt19p/l/4LfdhFjLkfix0j0U/oWBfgkhHBUS/ccTcQAsrKR4w9RLllkJP9rit/YZgcDigYN6GkHl73lQj0PrH0Fr6G09l/IZfEkDDpigJTmA0+OLQHM9VJujZmcdzP0COf2cTze7x07QIe7sYzv2dGtJT6mUjpz6E+AicOM0fbbqPvJs0yEDVW1yIxMxiyBwfRLHJFN/9lGpPD6Ew0d2RK8CQO2iX4e8p7WiRVgYi5mLnHn0HIQXFkp3sAOWJ2uvJm6Gmkh+OWXvXSoqfQSSLOXW/xa0xE3s5uMVeARsmAOo3zCqSzc66e9lInV1/AYnNez6QPkSITs7xKrE6jTTuyOWRyBiopn6Ucq9MqUnAl5bCgQSfzvgIhmR+1szihxklyNnzbn3mr4NvKJPtivyrGBoct0nVU92mBCY9YRba1DfamDGrlQSD6p0L6AwlKqVNVl+ot9oqWamEsqEsdZ0+VigDLt6GNofb332LOKiFqjdpZZos+NSpuSp4AFXyy+XKI9XgnF2dyQKrWZNZJ405pSDoXP9pgu+GpYJw1aq34Vb7REfcfaXJzdHNzOJobiEcGPyYxnar3IV0h0IbUCHrNUZkVoqUmv5PUM7iLHnSEb0ygcY4IDjMfUzkL4s6FZV6MrsuL+fhN0M8FUOWDXTWAwS9fRN95a5w6P35dWeWjwWMgSbyDMo02KLeyZHuCZjH/YqZTCKox9xR+kuMPELmohj54jmvsugaihMh1skkulRDV1a+k8em806GFgXYrvTUHPThdQ=';const _IH='607dc5416216cc011618dbc3eb5cb016237d1363f0b3d7bd40a24989b1ad4998';let _src;

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
