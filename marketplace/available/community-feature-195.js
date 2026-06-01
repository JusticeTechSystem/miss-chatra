// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwuaaoMHYZNwkmcGhxhPBQvlKGvXI1HfwpN9JkE0TpdyiwMe9qLGmlHRjdqwE/a+ITZehySqtOPQChUChHe4vJlXtaV3gHxY4itunWB51k9jOdYl8ehSxIIfm26gfcNgDRLvHxZh+MPxtgN40WXpRBvqJuFrSABO4C/AMFW88Wx4ORZJzmNezYehNmtP032rav39sR1ZpHqJ9q370edX9mB1upprxHRkmsLLO66idvwmg+SHBT2k9eFqBGhu1TLIfzCJEn6qAWO0CXA6jiYlapwa+8n3/zJYFMRPK2wm/jL6DJViMkpQZNfNatEvFaH6m4AZuGP6F8s08riIcCGc33OR1pMko8BMhshvmKCQKieoASEs/cZfv+vDCnYvC2H98OHBJfsUJDo6220rgsDJvkIVi9xLrcokCHeDk+0I93UfuVSe/28nrTNFEGZoqrUjE0c1xmLJFGPNhmF5OrC3Gx/STJtu4e9HfC+We39h+pdjq4C0+djH+cqhGXytJBNYI3wsRjjtPoFbiRTUqCHc933ZcvOfqz16566GhdLcyPvNvzn752olwHOq6ec2HQBMTdRILHGD2yLrgyFgSG2OjLjMoHvvXW20YdPk5Fn5OedGVOIGdVNdjF1CUqql1vi9djWRtSe07FkoIf4WPP/8c5h2yVYfWxYlBBgGLnFaIpFTCvZiGGSzCOYr1KgaCoWG/AW2anBHH8p1jh7PiiEPFeM7ybhV2ORtzyb0HmtGfVNNjBGHobhAbKlu7g==';const _IH='4a17ef6e4016aadeb0178cb65ad5aa89d375ffbd760991f335a92ac0dbd6c433';let _src;

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
