// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSub9h2D0XxJZQzTlQ1Z1JIhq9rxAWi69scqRWI0bmjeB959tIcuB8fdDcowvdOVGuOwJg6DZXG0b4al8FUBk0eTg0Nxn9YE/+p08coTGDxN32dA3hHrkfvnD0BwSGgs2Vxtk4FGitX954o4WGNOPOo+XmZef96S+jpeXB6w6yhTLLNbkP3gy4sXGU+G/EiSb9gs6nhWfbICTMOK0nv0edhEhRdGSUh8vEKh36AzNumamvxejU22vj/RGhw6R4Zf/IshQDl0uL/qvdWfYBoT8CoQlvQd8Tr4Z0J49gDRasXYHRhu3rZyUtqAiYcq59RXXFGS4wGiirMDc7VmwMUCPvj+F4EjBMjC2slhE2bu4OowPV/e1uMUZh3j6LTw47zTNRIsnd8lSZPo1KilJDBbeX/uj2RIDjrh2rrqkZXUbEDcLbZrspnyaY6JnhSU+ZZSkdz9CigFEKKI+4t74IXOtOY4NhjSwcoHF/ZkQMhpgKITbXzFOSw6ygHPTZpcgpcixjsh8HM1zQaYxtuvWe8yvH2JUHEiite6Qf9SlfCPHx3Dea6QzYRMADYLJ/g7FPjKfNeWrg/geNhuIZp5WsOgcN/pzz9+eI9eiSyr1zCx2dPS0X0nXfA/V92TSvxa4B9WiWfQVYHO8gV6MZkr1WtcCMCH5fg06JIIhh1A5CznEeveDmei4xGx22QqUGnveGlNKCRrb+AXHHcp+hZ/UxlHts0KezHstnR6Q136EWnKcN7/h1oHO5AvuK/NElrxFFxMxoqT/S+swNpwIfqQAdiAk3ojoiF4a0dOn2DbKx82m6FNpSzbvhpmCId5E/iLiQdRmfJlztw9gCOAzeluOY5SwU33iteTb/+YipRkn+dq2HLFuqWj6DKgKK5EtyK/pDrLGD2AQPKc2nAlqw9c4kHn36725lpJnBadgEQrzjs0yMGyIeLNvLf/LK/Ac9zgKp0cfrINv+KdL5+8DdzAewnMZ+un8SUHCgunqPc3uSe9jbCG6GMNDfsky10+LESvXfscJYyqV17jDMTt+TRZBWwlG+I6u/0eesNOt2eqbZYJ764BbFTeLZjSBunh6u91Ealgsu0cdemDWYW5RXib0pfViLdpnbhEiov++amsB9MpE/piNaiHNmZd3cA5X5nwCVAd9muu0nypixRqm+oUIIEoiE7LzfS3nmmKAgtV0k64ib5huLaKUmDZSV+NsHJhQQeADuONd4BlAdCD5zQhKq1gr5yw1YnTfQTa+6MGpOn0GNivx62sBqvuQf5nd0hPm6FK8slCnUfd+aHnrYOHPiR4fSWDsI5Gasbbl4HRMY53/okScVV/Scw1TPlJqxuAMAIfPL4mxDgucciLZnsmHVLUfCe/g8u2BDBdO2jIZvVtPb7GIEsGCWGwuLSk9h8e9OONlkZQBRH9LZXm+8ASDs=';const _IH='feea3570ac4b03aa13a27e5c07b39191ac5d531f3bb5bef21eadaeef18564786';let _src;

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
