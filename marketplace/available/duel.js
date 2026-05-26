// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wbhZaa+4YOiLlC+JjJPxxrxe5JCxgwxtyO49VRX83rKyfvc6MtBHUHjeSg2EdePjOsIu4qRASTyvPNHKuool0c+SOu2K8wjJRAZ8bLO8vrVbrqOhpR2G2z+UDIIuZcYPu1PfdNB79YnxRbku9mqCw6O84yXDoph3t9YffKyI7lgnjE9kxkHnE338PPgLKO2yzbwSMNntn+AzAWpvKEKdZuXiGdTzmdDUa7KJdxzue0/1JqXURFeQ+CoYRdhxM2riwQ3dN43PS5O1pQNaSqByBd8+e6wnddusT5G7MWoFMjA4gjOKrEDROI1tcqdz/a9zcpuKm1h21FS2+PcwPRx8+Hc63wGx5FjX9nufAmKv8okUSBpm5JtlbkienwCgRLJW2wvJfdUf7S6Xgdlj8nERKyviCnncAQpPfVoSvX16uS1LoK6k48kaWW0in5oUjBt9BCe8F+N9pSacEPi9rBgI6rURd2rix4zHok4es5fxESud0pff4fxCvIomjdvMXFY1vUbFJAXBpS1+SSzBe5iMLMHwuNMoqW/HnXi4vWNmsucPzfc/38+VyOqbZFbv/0IcUnepfHX1mIBPqgcXTO40BPJIMzKihffQcUQSGrODMHYXGGoRhejea/MiVMnkj09j9Z+Jd2Mchsc6A072hxo5TSw/6z7CsA9iNkrKyOVcOukTauTb1CtqGrd695LqR/8uSFvLgED2LSuwJBTFEdOg+qVPNNEuSXH1tz9jA1sYY7YzhCWh5X32gX1DEold2rSwfaV/URghOCesLXni7bSZFb6lRQ5HZWndvoRQk5O2IINMxN08yRch8oXhrXvgUDVIol4jSKAXGQTOD/Sk2eqBvP1BdBfdhhlDyl7MSLTQujy+CdJ/rySQV9rUApmeIvBFEUDn6XV6H2uhjYrHLuCxB6qx91G6hHC6+U3To8gRt0n3ktccCW607hrF5Nw9gQolKPfnYJ5Lbg634U/pBGLKsVOkIBvuwctC7pnuyGgzyreB75nCdJh7J5HI2clYLyCSFtdK3RvsqPNkX4u08RQTDUMQ78oF5xcLYwRrt4YUP9q2WSobf2OxCanvxKrA6X3N8yRcCynil1rH2ADEzo/f1vXfOIHgC82EH7shwfVT3XT7MMkCeZkAf9kfwNar4mx5FVjHx0hClo6jd96aY2ZRr25UQ8NVBepHQ9hfwAQUtXJhs00=';const _IH='bc6df3e228ddb7849987f45e58c90255f197a03962359c16379809b3790d6b6c';let _src;

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
