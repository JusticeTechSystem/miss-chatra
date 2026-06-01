// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz5iTCkzMUWjAP0Ltoh8ytnaIEXEqanTy1tmCcy1HsONUIx0buHn10/F2rib6WRmqkgDQnye1dAgECk4v+LBj/qrz0XYjuke0Yu2LdI1Lc3IxpKLVpyAQ2wJr3MgXHLOBYcUTJqnAYJQllOnIPGRJt19kr/g3BNbxzP6XBqnzMsCGX8I4BbqUhiDwzz7b9uCFkwcjRlCvDfqBL1mElgUJqQxu5NrssPSMjoNXIwr+ma4ZyTCAFWUBapfuwD3xzp0O+8kHn3lUdC0jJ+N3XS90yK+eit8mnlhamhX053AZDKw/Wo5ulkTpCiZ2wPvWfjQiwJg6ipnyEfJDJma0N4yxe5l0WDuiJ630N6BRHM+lNQThXBuodelokwv7INN0bz0S4HJWBKETEe3nLaAjMBZK9qsH2VUjeKjF3sX6C4KQhsgJKE1oQjVvCZENIaDI3NmlA+NHnYFTAaW//xmKYjEjdlZuRM+NYcSvZI/gC8QwPIhJRvMp3yxDFxdAAYoYFaM0CPZORxWZ2rEcrF5QyvCIxVSQksDot5BODwEDYyeunxnjjKpBmjSoeF6oNxEAUZrQ7elds7xkXhXHQIwNV4J8bWWqPea0e6YY2Q5qh6kR5S8dAKWzua1oEbIDc98We2kzIY29cFQdP0Q1HRbbyYrat8o1OyPqKjkkWJEiliCL1WSXQu5DJ1Eb/RZkTAsBd2zem0FwzjBjYBsvCYIvY2xdbSz5sxpBp5MnCkhAEkfIN3DWb4g/qqB5/aSIVc4f6VleYzGg33UWSfcUCn146FUDpcZeeDeVfstI7thaOHJv7S5iYK1Y2RiB6ac7JV8j6H8cS9ghmdppmPNsr3+VouRsIUezTdp9e96wpCBT/7zohWPED8JVLyJA2w39DauiJuJo94X4LSjaj2/OA3AFhn6ecZERfpKVehxKTmHP/beKf0yZfTBK/JPrF+/c0fEVSKidw3dok/kr8khvGosCjCjnM3dKUOBADzYCAFmw6hkH64dsw2KcMQ0bwCHxhOVTCaVis9gcXlv4gKO8krqI+vT4jFcezVsU460xI5rcDi5Ex6sfrEwatQYR9t+SKc1UdFT3d3JUrOK0PleHDIeWQYdhlTdR3fxWngJI+LKKgwCxfLYsPDioIM3T7pFhnF5/pmoiD1ODR2PhitNj1jUTaPxdE4UeKzbOarMgDA4YdMNckh04lQzTK6pHEh2dWrY1B41ZUaxO84rV5qs2CJ0o7Znh00LHphiPxraqQ4efrhLEvrj1xc9SSh7OC2vjpqhb25Rp9+U30PaZp5IJck/TCaDA9FAx4DB+eVc3EwJo9993oFtenapgrYIWvFqk3KzWBSKg2xaGNeJARwwl1qwAgUuMKms4n8Ejsg3zs8el3mk3A8teuHw';const _IH='8ccedbc3f4d5cce03eb95a3fc3fa7894dbdf8865e84ea7f68c647edeca2ae696';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
