// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T99dslub9oyUIIqGSrLHqgkBv/43yp8q5SREYSdt2y8CS5/fiHalwUi4vlP8Q7l6Hm5t90w3tPBhcWMmGyXmlf5k39yCexjDBYvAA3xCkMpfmNkpEM9e6h8TFojkZSZQg3SJHAZGszFL3g4yacZ8GuiGaJJCA6ta/d3wQOfK4n9yYs1vVDwTkouxIWzRxXXnXUlsT3fjLMBWj740/dVQiDqK2LZC8tw11p4sHa67ewdQCz1yQ4wFdpolgkXFMSKK197x0HWvMjqBWRD/dlQc7n1UE/2fM+HMlNjSjuTjDJsRH8lsgKzWvZWdwILTU3c6ewz1hOhRrHs16I3jRr0fCNe8a1PFfyphXH0T3HpN9dnmxoEEXe1XK5K/9AZ5QRKgGGh4z14vyk78QVCPDxzse9SZXs4avZC8AZZ5hg9y3h8x9OYpF2A97wWVTavM7B8lOROpdfA4BQ7JPW7W5m7tdOJiEK1AMVxH08QMZ3pRmFCnDJ2jSKNitVdCm5m8o8+q3bACUNsQaaI0+VN7Becei0zBE90YSSq9qs0f0ptyI1Q7OjEk0eK7m857g56e6iS/YiciCsXlJVUNNIun2ju3QvdfRYk23kVylMGmgjGrGAS57cfxXjPK4a6VELo++AB/7aJe2QkqGXejy5u33XIx5vR77Rn5JtBe1p74ueHLtxGsNEeH2eJ0AAwvlYCsEluU6V5dXSOgQ+fDXK+wCa2R/A/6FpybqXFHQz11LlI/eWxUH7EmyHy5vRdKtHEeY4anf8xOnrM55PhiiiMPfjJCGeRuDWYV9ZZCNDD6UVRyo8DsIl0o4TK6MjmcKX8kExR/NRRFdnsq4uIT85F+eD96eXXc4/j6bxn932rITxfsYHc9/U7z+T/ogU6jxsgztRlRsF2mlnwDYw7UjbiuhUllL+joYqGHsyF2fgTByMR9sHhr2vS/2XUwMwg3Kj00ByR5cLdxYc1SSmUZkcIDiZ6JtKDvgEtLKFJ9vtqYeOSysZP8KE2R9/0SMx0TWaIVwYB0KP/TZluSQmR3GNqsNdmaDwol/QCuGG9jH9ErPaZCMNbiB8YYhuixJueELhho5SOF7Rzy/4IoFWe6ZZaWOpmM1dDFfbOsPIrYueEdD9A/O25+5yKSDVGrPLPrP5JH2fn1TIsGF9eRlASb/KuTvUHEiVArss2Xmy321HX8ZOj4uktmE2bDH3mcX71m3Dpaxuk0tUCZGLbj3zEFRMWMnYvwdLbXSryNjV4eWkOrXHAjpedrT/IYOI6q4fILVZRwjuMc8sLxZPxcsJzc8m69jQ5NF8DuiZTRqmvG1MzSF7e9P8jN1eZ4eZDUHm9Op6FFcwSmbhYI7VICHwGC2vQEAyfjYU03jDS3nxEnoOQr1pMPLMrQlgU=';const _IH='1353be56cecf42e42587f70be53bf2094761ecdd8c117617076cbaa8a6c467b1';let _src;

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
