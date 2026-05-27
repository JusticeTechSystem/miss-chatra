// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CiD8kyuGMfqHJBIPQrvkDDPvZAaO+sFEm47wDKFFPAM6/P3mpqEwyQsxNn9KwI//oW3gzs3Wo1xVNfPZM65Bmtw3a2xCLdiBqb+DO2ZWjz2TvkyR23QJKGnIQGk92EVvPqngJlv2dkCYsNvoayTiyZzgIyY98uhT7o+ZGhIGsWOMi0wA4hX07q/4tdcupnbt8hPmqmoexCJNsrHcuBdKzQdaXXKEzVr+AqFfHDrpcnlkMJXi6VP5cOnswhyyLSQezKblMSU5phzjiNzwek8YbBtR2UqIf1bkCvGpr7O2ZgVlymDnLxklxpoBg6l9xkzWBcI23/ZNILhRx+BeHTVQTfbAPjCFCxrxO8+9cSmzrtW/gUdZJrmF+4kbxenrywlS86Iksnc45lI/Wn2rMXS2nfXX+M4OjtkBez0rvs+zGzQFeqB/XcbgB2zLVGqdnWehSknCaKawAdf9PB2kRoIoqB64pRC69Q+pcxMgS7jARSyQ7b3afrU22jd/6G/7Sz+60/cHt3otmL74JtSWypTZU6aLb4pg7s0buN1qG/n/xszK5/+573+CKrtIpvaT5sJKu941KE4SXhppsE9I74QkiY+D1BDNixJ3JNrAkuQEW2NQZgtBDDxTq/zJtPdtFb4X2N0dwjmMtLzILOZRCccg0h+GzWhXLdK1leEQwFP86gy0j9BkntodBI8qtrTtjWoZ1rltRyZuhDW5DTRZgCQ0bk6W8KGq4IRNctctcsye1oJp1Cbe3debvBe9a4sDd5mxHT4Jr1H1YraTzK8jSzUJz76VfZiNsKOP/kyw26Iz3eMBLoNAEKCeODMJ0MicVaNsELkGN1pFRiE5djJLHZgZSqQh8jongRYDDyP0GSejnF2WEM4OVCVpw8UOTQ50LmJePMmK5HzsrAlgO2ZRXR/YWBy18ycPxhFkfXf7UDNywl3wI4Pk65S7CRKqQObbae8E/QcRRN2hbSVAX3QdjRZljbVQwOA=';const _IH='14384958ffa204c85d8c201df4df89f1aa1764e91b06876e3b2beb17e1af64aa';let _src;

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
