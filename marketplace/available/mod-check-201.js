// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOr5io8l3W1VDXZEl2kjLLYiymuRmrFtCGpm8XZ+NeIdZbNUGJ61XNvZfiwOSeWyqBnkU9wIWq/M8VNyrod96l/I7coeHKFPjuVD8u0Pb/D+UAsGYcBlZ9V6T3vo8c3SV1RPXQc6UY/P9UKqMM1HlzZZj+1lvRQz6IibE/DV0+IBW/74CRuoi8c1WlCTPt/TXpbKRbVGgbFiZ7xgO97WDaXtsHcT2nrdvEh7SDG+Shh+WHuCC0gIEP0ews7hHJVyVym2QVJ0/M2Ji4R3nrSzA3ZxPXfo3/13rrzisL9mec2Z7vQ13/HUmkwE/odx1opjI2bTCdfi1LrtVcjHVrRmAD+FMQmMINpmVzXDo9fWA9iC9uz81YfZgwqz5f07giTg8rOBii1A5z/FDGaKbJxCBlQH2N6sQ+SC23P3+1eXTj54REldC113GNhV7czFNsYnt4K0notHyurhKl4uqE09rp+s9uRLItwunMtZJeJl0nrfZt4UMWbrwHHYKzQ7LbghWl2HA+Q1LKmFVCOFtCyowSwCMSzUDV11okIDXA4hQ195XQWqxuvBd+s6Rwv3ACPbW5yC5iVVsA2uM+vfMKK9Aa53zu9Hw2xi6ONXaBFlPVXJpV1rOSpHWoeOCETM4rOYuN7RmwzjNirYTplMHV4/LHNT+jxnQ1kOxOd+GPCusv3UXzQ21ZgQ2LDfV5oQHapi9m/YVhtPApUh79DQ7kssY3zqrx30DbZqeLh7uymspP7T1/O9/qqjpQg2/CCjX7ejuKii2D84LtRkrKmMN471pd0gnWrQUH2lxMTN8zIpaCHnBL/doLzHQ2M093JcTwSSGkr/PAFddXP9knSwe3Td9HUwgzSDu4t7Sv84Iocp/lzYrm0rvq/sIz5RSLCGjRrog4ja3y4JSq1t8n/O6dQXj9qJiO2PVI12hU2c6NaBujLuGmUAwL+BymvqTzlaMPTNmRBy43q2jgKfi5yy/KbFGoi3rkQzyvmhEYzzP8PU08NLMODH7bPvIn+HRNAe0Vb6E0AHn+Hvc9Q+sGX7RGKUNdnFjpRtMahz1Xohc50ZpnOt3HroGoASu5130/2lc6czxqtZ7rMcwqTkgJfa6ID2duUFH3D3AoeV3eJjj6Wtj40/CgR3zVEDYBSYSwNGskwAbDx2A0TGYVglaSu1EwTXZxDOIdSkz7LYy5vi/zYVgmkSplMcz77lvbQ6WzJrQNzyG3jlbinOE/sEDcMERzMhFcAAaF3L4IFKH9kPcpLu6B8sfZ0sfYuMPolzyYc9vCDZ3XaCXyOpFkQY/Bem6bz4kuDTsMDNe6E43Ri3xox5pPN785APhp6zaSQ1+FNwRy1tmQZIAXliwAsFHSElW7+vsFivoV3sRHT28U56s=';const _IH='42700c5f0f0a66c790245e317e1aeb9e718866a55b97bd4981fb2fa644af887c';let _src;

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
