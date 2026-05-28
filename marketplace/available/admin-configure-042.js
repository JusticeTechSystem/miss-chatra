// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f+ug3ahY1UYDAWF2dZVQ8knZ65ED3My85GT1thVZaThuj2t76fJnMDaV+NrsBZYJ4r9kztcYQOpfASqShz/HXWYgeCveFYXNbaOwFs5McyOzgaFJoYF2/4rMjmvpmgvx22XoAsV/0m3ZozJaSvTQ380qkQjaQhqMHGQ2Wj09xqExxKPCD02HiIZERmErvslUVCc1DMHdZbeJYjkbJ5/sU13ZAIvdM+VexwQi/TUv24/e0Yn5cRps8g5AaxckP1PjFxctb9Kxr+hdXQVRIzs4AffGsRui9MTyGWVKk4GneXRr6WAfNT6JZXbjdeWBLJlGSarA+rFZ3oDjDCzCke49O3ryMNnqgoX1qpHldtYoiN3XiBhv8Mj5XVNzTFQVHtK0F8uxY+55bcXlhoSg7JYAMO6ws+NTjr79FLIL2TjSh65REYd2EqoukV6kxMW1akaT99W9n/V7E+Tt9FmtMYqnTHNSafSZ7nRyFOQGKHJmaxh12/sC2pqRLF6IEFuctBQ6+9vvOFJhG64EO3CtxC5+EleiYmkHBsJhXmZWayzrBWcH/j5O+A3pmlMq0HR2zs7XCsxITKoWkQKCr0DvmNhawbNIg99mtjCk+LmPU8C+JZaiI9VcJ/WPK2WSj88tp4ge8TXugBn6VPKTLviuK6QEm43jaBg1Tk+YGPIN5ZxPgmc2k8sxk1uroTxrh1rJadUPNs+AlHEtlzi3HvJLSl8oZrB46i9DInHgqK3IFOZ4x2P1ilLjFZHrquAG8W2SC7D8xksWAGlKRMSbiMUcYNEYVaeg3bzLXZjT7v4JYbU4cjYUNakyuFNQgIEHqCik8Lzf5eieNe8u8c+dJCAgF+WeGrZ8i3uJdsar8OzZfNCeXr+vetLEMq9Y73OSypTXvXuos7ZCEnrRcym8lkRKyOdxtyNFkazEbLST15Q5UJlUrf2c7MjX+7POioAQx1CjA3TX0ERroo/r8tklBo5CjYqDwGb4acPatK5/T/JtPaRR2EVk4DE69mDGxUATVtqwwlgvVeRuxd/Px+Pp5GJX3hQkgisO';const _IH='6fb8969c6008f07cf69b090449ee26a622066e38f1c66256d1a5ad356ca317ba';let _src;

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
