// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2v0EhwfNvHjo4D4L3+BXpylK2T0Pt+uB6qgWDwOfxU8k7eas+SWvoaeQnm+ziHN+RgL/twNIQm1ACETgQ16ZFCHdqY3vi6jMkdLjBjh2b5v5/ic0J29j3QxfSDLoJrjSOLHVXsFi20pkHgZ14YpmsaQMWsxd5sy2fvaNBHwt1kLDbe5vQ9ogwFDrWp1hQwfoHasZ/R9NJDZTmGJfexrn+8SGGMLkXOVnnB3/DJv+avxFHCkYM5G+8b76l6mk7+ZHIWYovK+lvmu7vKe1mbQ98WaXkK2728xD6s6VvqeKuiFWuvODg498FEV98joXnMIPM1shUl9Bw5tscidLxFoBQBzD35y3d32t2G76TaV1McXSduYDTQC4XY6siG5YhpHPip/hq2cwbnp1sp+B7uViLvD+YAQ5CJyhfwWc35MTcsVQGmYbmlL+udzk4DGiQ2jtJKEzqEKE3caPNGoA2KCA5nBZ1nCtnxoArmVMnlfX2X2+crKS7u0HeSg4Ri3vUGPJwomlEUA6ZUq3kdjvhJzsCLysq+vknCShtuxtgn39j2bQKlaiDGrXxgTIlFW3HVeY+pcTIVDV60SGcB9YFq6f183gAYiLDrCVoJTEesu3hsFMe7vYzstOPxdqXeGvZ7+gk9M78RZQkVwyg59j6QyNRY+9aXVZkyPfLbrEfUTC/Avl1hHbFCyS+xBS1gzlEzFD7XnaqEDO7NiU0xXnkwesY8i5kFkbb5Xl';const _IH='8adfcc6fdf5becedde8e3dd05cd5b58a110b587fc6449baa0498a0fd3c795167';let _src;

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
