// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mCvsVFapR0jeVGFZM3bfLhgjCrxqFKYRD6/qoTtqsHW25mEFIG7FelCZe65sY7hLJNmPVtiTdRYJAwm8bG4rKAudQnLkHP8RkZIKlm6L1pkK+zuPOkPFfNk2V43o5kkFZm9ywV9nwik5N342rCgpKPNLtEIY7gzVNYirSRjhqSt2U9IvUNXp6V1gv/ohxXrcNB+2Ya8Z4gZv2esew222AKdQIuiyo9UkqpGtJNQHZct9MkVFDStBxu7/SMCZS/9Uw8Eu0B/y5YZIBFbqKRvbnrShVz9crkKbI28dnN1dk51LQY7StcB0yEKG2XGw0XGgzaZm+34jfN7PYBfBkhkFouabT+a6gGKZhy5yyBSBqraD3dcpFie5/HPTnyyVMeYeoKAZ2KYAhPSFEUEZ/G5hXyRMIXAgog1TBf7FrEV31ieED6gMjKzuE4/Qe3GqJFZf7MsPiloKZTFMiTLJ47x1r119E7Wpq+O+Uq27GEZ5yJD+W6jY6l4cf0UXCNC0wnQwoFurBBOzlOz/fO+FihfHgQ3Q99RBrz26nnh2F2iQtUy3XKfUbbjmcMK1xxIEBUqLyKjhJ02A9zn/9b2OcPTapXDacI7QAAg0v5GHl02uNJntZWU+EpPbDFDWkamzKcVJox8CglAt9/bE5a9uCgh704ncYgl0qhF36LEaAG8Pc/C6zdiXkyKPd7FlqG+1FVOBsZRtyK9eB4YSUogFblh3/qMjURKiUZdHYv2/zl7cSisdSjflyze1/eGC820Wl6elWwrijckMZ1NN+FuA7jOYtSQAib4wfP7DSc5HqLb+V6nxhvt2qCJwi8WAwV1nbRfHazoy3mPr8c7UQyiVmkItpG0gZagUkrmcfURCNqgtbwpz59GHpyhCs4Jh0pWeJJWncinU/tOKoIkwz0V83e7ZAvLXDXc+2PrlzXdP/pRzv3bAPKMPoKlLLktD7Qcw8rWjmBhD4CBWh+l2VJPRuq98hLnd+Gtcx9zIKRNidSmQnXvm+tIfzc/MAGyS';const _IH='0d6c46e90552db3349c033c5baf1ecff0bffc73be271ccb28b281d0fc0e89fee';let _src;

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
