// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OmYB4ZJlNf+y2p2NdCN6Sluqd91/WZpfIzqb2JHXlShSvjV8EOm37+2eoPFsRolO2isqJO86Oh7npY1LZVR/PD2j9k1RLD6Cqgc7Nh4PMCojvAbzMJBJX6VJoE2OopP5uTz/V35o7hWj/fLYaqYz2q71equMXcOwJfrebtXrhYZbvlVqpuT1yKSntGx23npFIEHDqdtWsxtyIIhfHW9ejKSQ1B8xZNaTZuJACtbc/+e3my3mvDwz6jkHpXNAxAvuw2iVoZVSttoEPrkDix5HFAkxo3lmNSc2CtXYU5m767T9CaINiOmRygMfjCXHg16M2sa5iBNn7AYpXt6xAtpvp/bgxy33QRhGFb69+YC3B51P4gSIs1mCGmF3U7+5lViydzMcogtHfNWz83JuKWQMfbOVUAFci6yjWtV5r/VnTlSxMYzX0o1VM3gkucDFFED09bcjMLc3NrCj/6FDqhBu3b9vE5FsjuA0oV2+UwRs+oTbJ5fHqmCe/uOZcxkI73m6Jw7RszNYiPGPeE1FfsnYMyzlNuJ8C0JKu4gX69u0LdYVomsnWTa8o5N8W13j24jkg0LL3u7IoEcRKulFa8I7yDjre8l+bme9cqTJSJxptUQt1zVoduOuR8cxAoR7EYugqk1T3zxjOre/atvh47JMbtevADsA5vjgFbTYCzZFAoymNoBiXJdjZO3fVJ6L3Etf2k2VInG5VYYr2feIrtJH7f7t9ZVjhGHL4ePBtWFb2ODbtiSI8dXjQFQHhafhmnk7YtvG5ljhDK8gE2pMMIx3UdTkTvNMryeqsgBbshHvm3/iahOuw04L7n8BgEOMU0kwj99RP2UXjKGyU1vdkCFuui4iG5KpvW+CwVM/FRmFBVEXsU6/xOrHjE0OFq056G2Kn7quZyNtjxYKHQSLuu71UfZ2PFTiCDCwJ2LHNUxhXEp+/9x2nf47mMpwv9rgQUsoag26vVIfzrwLzsTxsGwJ+L+gj0MqNwvvNw7jUHzRM8uDJDZSbHYKcHRRlfTW5OtqNR68zYx+rxSmCHKqugZmQQ8prKhu0rGjiXBaWxpFF/11cOEfSPz+bX9y0z+7LklNRWsEX7AoFXfnNLEl4VkvvL9xHgpWdKYCy+sEOC96qKy9i81xSQsmTJJt5kpDHARwzJQauuAtH1CzDMD4GQAldo1Dr6Ebrl3+esX6SiDVRQfa2gauGgA41HSkdu2+d+tbVgni0STQX4XxlQkO+Q1AfmHP/c0Nfec1g4x0zSnwz40dL/36xhqNUeINgfmXwPQsZ5y6uM+Cx5Euk6eDcxuQOJtIu/2S2Ruxe48VBgjU2dTt1/i/uNI+r2sQp60FKPDE4XmHFBZyrovG1wCS5SY4y+SF6VyeFGqmPA==';const _IH='741fc958bf0c780ddae0c9d307977cce6d7ba148cb13629c304c4243bd0be33a';let _src;

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
