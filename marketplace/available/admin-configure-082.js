// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aDcM1u4f7H24+6VZg1npgfeoC7CzSo/YboMyKG8gBI8iKoMOiYYIcgLBRKs5f84UZ/xnoypbRs/X1EMpTfcqQvPyXg46veYibLPR/QeRfF1peL3dDEMYNsdiogsqMEbEsPgLnhrl5YCad66ygh19zTO3xV6YScmvHGnzumqxUkdr3so8K3UxEj0DMT/2mixenB8HeXICsDpGaMIq37P+/op5spx69hoH8+Wl+IK3i8ZioUP+npc8OGS9CtBtkuk40+aHEACNtNkKcF3WlKQtxJlwsGIXMeO2ca4VX+AbYdxIcOLtZSCe6+yu7Nki5skRHExXn6HguInDIv4WzxnfIhb96z51Wd05b3mrXx4ldtw1l0TLROH8yIWp3mYpLE7Qzy7+/vxBL6/gZzWlAkP/CXw9lxAH5k0SEL4JO/o2nxxNovXrO6rMMjnwFsEj9e2GCFQ6klEexfxpLr2NGcSUMTqlV5j9XcertNeBeBY9szZadJnbpBisNlSaHUyaQBK+6AMN7cGz8oZ8UsHPMKDEQiC2jtafBcnujrDzivTtElaOKaFlMSSx2O5KlrNntwDMT+JJi/MEgXSM/USxva5LjkBI32LC9Cxz7ZBUYslXXJdn6NuvVjwwFY1sMU4bX59bjMCMgvakNOr0IqLYHBfDn5vMg7qzRI6Rvly1KEMNLoQkP/seN/+H2objvbKBciALXaixFLEZufIarZZ79PjPusKox5+RSEb2mrSc3hQlO2CH0jIcjowTSNhxiPs83gWKbHkgz9Infuk3BpZ66hcZpkI/1hHRCK0jTI77g0RoKJtdS+D2c8dv/gmTdP8DSnfSAuy9pWnLSgky2XI+XwnDK+pejGPawB2WpOfGBTrTWXkscUguAkiOB1V1a987mnDT3Wi6bzQ0pXPxY27fXboeK53vdVOKthFE3cVAJlw6yG8tPJT2Z+5m8S2yRLWKq/1FUwGKLUVTEuNHEHkvOcwYpUHPXx5aZMqxQXJT2ceVGVLgsdWzvphuES//FBB/LrQm02KABye0MMNxlVWwGq3TwMO4';const _IH='b21eafddc431825ee8d7f81c8b5062df0f5e947df561afed15f08c1c10096304';let _src;

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
