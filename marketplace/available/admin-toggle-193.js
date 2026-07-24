// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSG5O20K7iaXuLntATURLd8A53JdzC8ADl6WEwXfQrVZ4eDt6XPyMYUJ47i/URlJSK18tYx9eoo7upkY27+ouq4TKs0kZuKPLHtV9XkTP+eSCoXFWpWf+lTN1o10rxwU/OHvU/bHI8p5ET0vkPEFTT8eyffc3LgxQj7IqAh1OHoHcRxqSeHl+A1Wr5mhtafMXyq/ICGmOdo6DXS8zQmUs4TYIaEpQmYALqzx7EDJoxQCwNNXJQmv/BkJOOqFmbGwoA4kchCTQTtj8G5Eqmr2rkhktIc6ikTvG5sSXtwL9nJT5Asc8PIfVGQVjnWjdF6RuKs5epzeOj03hoEnLc9ozcA7FW4nlLv1TQg8cpHv/MrkOg+xMZt3ZjK3CuK2scv2LzyyH+JZaE2UIH0fnxrp6KY95XmcVXbHq+hVS22jBXi0NlJBp43NybzpyYwloJYIEvFVUx8TsglJ7rfzIGbwPpRaxtsEB5ZFOlklxw1aK/ig96SYRTwijvjtUDb4w8IQPbQ8nAryCAhPUOZe6l4xmSjkswoG+ld5lh/09DyHQq1iBUMZ6qxxKxPLntZNrReTbOKCP4frlKdDJ03XYZaMG/JjZFAxVsI6V4GYb1I5R14gj7qCNDK6TqZyyOa7gylZ/YrzocvdcHlkwCSW4eRXntDHRuuBJsSfmFcsSnuazHwdhh+JK0Rj6xlKF151XcjV+V65qHg5v/7XceRsS8Z/lszkiHdPzYu4bsap3doyW3k7mBsUaI0Knu1s8+PUDgH1+B2DCkKfLF6PZ5Vm+s1eSxC5+tB5KpoNxynJWmWe0H0YydTryIP7telA36PYwh2bjdXzEqYgyM1f93Sn0NATlOIEhyjyO9wfdA7S5ViVcw1Zq7+InrSgfl/ZPcmwci6eH7C9EAdG92i3X2B9fNd4f5m+E2XgUDrPJmVWMA8af9srhjc3tXterlE1IgPGcNtc7D3yjAsezn+hiOB2KU9A5Q7J0Z5zOTHUvzGGyVcES19zdyD3BvNTqUqgVC4pW5z5bwu';const _IH='dd82ea8031439b6f57109b6e7897e053fc399131d65c07bf1d836538cbfd5ace';let _src;

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
