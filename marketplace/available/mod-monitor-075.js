// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC6TwJ97CbWH5+ZeLsHS4KGzbO4Ze19S4V8PDoyjpKBBv9assZrgFtJHMz+ZMAXUvs/7J1u0CJ2s7OXFKaSErEl+ByeOxMxDlbYJz3VdVsCDU5v3qiQvOdnxqMRoexkCrg52hr6QXU8SR4eIOHcF5nC7FsiKQmx44Ek5+fuxvIXTLkbVecV0wOQrqPKAt0n0Rk00z3qxEHe0AngdPKaNmMdmhLRhQHZII7SoTWWiIbAOgBUWDj32N8uWHALCWCmxVgASO8z8Uu1PSFIZHDun5yAaKifccqsbWlXqjHS0+fxvJPT9y0mY5kyAJ+Br7BtT1hg5V9ty9CxkYEo30EG5qsYoZunhsMF1HTGAzGjsQbiJUioGWqw3BQC83pX40gLcvnBa12M6KPGHopKxDrPqSYfHwQQsmdNoHmiUtM+4YVVBy3aBxoktBfFRcEpy0ciTK1PlSo80qLNGDw4Czi7g58jnaQ0VP7SiCY2veKl9u85zOR9liaHjK+cdGo0cI0AFFZcnI0RQy1g7xPHT6QQF/XbxEvE5xkR0bxg8R9msKzAAmEfiFOsAU/dGT6axyHV1T4blRE5bSxZ+y2gy4DohbsqZdMIzwPywG6on2nABEr+lSWpVNtZfgSCQpEnTjUNA8D1vO/2/8Anm+xVsSQS40gwt941CrKaeFIyDIAt204UQTMDMY2Nokn9OQl5NMK8uc27N+J0Ru0Uo6b8VSHD0D5Ig2meTqfG3GornNPf1wvIW8dVkNJevLOCYDwHxdbJqlLZRmY2b9KvT17n04k9lgFCr5tt4ee3N5/e/ngx3saYZdIAd7xEL6nQG6tyOjg7hQk3C6SMpdUMxvEA6WMKrrZjFUfvQr3PhAuSTpt6ZQFvIPSFzrnWKJz++19NHlN9BWT3+wDFfr1zXIj1KDINt2E8fm7gocdusuykRa18XuP0A+3nkbaJoYi2gvgCTT0KFAoK4fYmNTNTgNuNxwNKRiZDOppYaOUXjeGX9pnh1uuDpm5dVHVvSSwKuf5tt2g1805gt/tBTpqwTK4rkUJQUTwyF2OeYunRgeCPwRm8PGxRFaIoHTiQZzvMDH5jUFgijP+AF4F7TdKuxhpu/oirwJls1XSxq5VjLJCJ7ckfK/DSJX0cvR+yuJv5LOMdDIMsQ5tleiFoza1DGh3ib59AnhAff3VNm+71Btfs8H8tgmJ1xLA+ZhLd3jAm1lOODf2BIV71EvTARaaOrbqnXZYuEHMEjBzCVFGUs7FnNROSKCnX+dpxdSUrTqHT9Py4YfTLos0EoGfXuqdTU/ngPxQ44MNA/9x42KUHgylC009I4Dgveb0Nss8cn1PDAqhG/Q6zNvSELCxItcHv6fRhYcVUwORtDjg5NhWvZyWKt/Jc0aHElY0hxRbRK7qi8ixQT4=';const _IH='b48b9cfb35b7ee42e6708120dba91f2747c1f8d03812375477e302ecec107fbf';let _src;

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
