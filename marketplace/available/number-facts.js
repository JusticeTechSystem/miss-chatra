// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fCEuQAoRcaHc/fNUuSOU9+1JZJ2BjoVjDqUy2R60/pktNFmENZbKXl88Q7bMrR/+osW/34b80NmZNbBTEKsagPIyOkeDn1TwK1Y04H7TyLNeM0G0b9A5sTpm1owAHNEeKP9pUQ2/4zzUBfVvz0t+hOR8uBg7pAO52gmOgraocYT6NAcMKY9bJ0tW5XMiTMaz+1/5ytlN2DhN2ug2VMg1LBKhsMBdWX41QcciMGROQOuM9vVD/uUululb/qAe66CLQ7ayjA/ozwlXoLdJ2RFtBcYHeGLGF0EgIUz/oPy7wUdjrWr75GA6PZsv/emn/U9gvSmXYbSkzxU5CFkrq5gq4m7oy4OXIta33fZU5zCiZztGrnvA1zuPIW2GYh1zv2gKCxtjz4aoDIeoDls2emUtG0AU42c/9u1JuHXv6060WAzxf/6EnPPjKQsfN/cBcxd5W98Yxzsi9arNddIz5ZhHzEzpn2H33v4AjkQYtjujtybY5a7C+/Ur55XWLsjxDL4Zvfl2LhBDtfwKMe2srf5p054u8+UccCSFSU3lJ+APoYPkIk28aeLjIWZH9pduQEE0LL2BTOo=';const _IH='8418aa8f4f27ffa428c95ef5a5ba798f2a4f02f4c214ad2be1003f8c0589fb19';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
