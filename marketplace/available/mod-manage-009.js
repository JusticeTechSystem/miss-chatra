// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOCxAsRXnhDXqyBjXe7Et6AJtqxTOqamFEyjrhfLzUg6zZ4VrvGCUYe/l3jol3BgkCcRA5bcO97t7TayiIlTI2UTYS8jQ+UIONAQ+Rw0E2HFLfk36uaFfic7Cdk1qKBv3ZnG57elcJl1WrT4PQ4wk8VzyyGKwShqVKbMlyFkomwhh/1JMyYW+gl6eOr0c0gD6jQJTeZgauUJ8a/6oxbRkKkz2mBjwqYYEYAaYEyQC0KBuJ+racHo5GL1afUr8t3ednYqr1mmpmXQlUx0zVfXSRpMINoLozD1pTlU+kFhLlx5zC5EPrLmgtUQxi5OBUzHW8oOxyR/1i7oKfnYVJPVBtTKl8tiesAwVf4ZOj070qaebGrU4j/mkaN5Xj3m2rlRhay8BI9n5O8lAzgKm7a25CQyPkYIIqNyRpdUetpvRmj/vGns5+txf/V+GlrJPALezmcOIiSFg2lbuRiNApY9sl8Ghg9HuDmYlTVfQisJURZ73slgsP7HnG6HCUalxV1xu3n8LVkjl2cbs5Dp2thIq4zzX6jr7EO2ntogcqPM+eNg4/VZJZ9CR81wftHF1L1M94fBsCSRiuydMSAge3o3+s9iEMA1g1WYdrfOq/kelXltusTqjGjTYoyBT2DXdRdj0vyKAId7IK0/7CdlH8opJY/NYTAfwws640hu1HnkOqBqVQOJR7oDEKOddylPSjeInT7MVbdvnsE0P86sNZ4Q3zE6u8Dha++RE0SPpjC7F1V1g5s9cLxjlOLmzq+kaNiOU9QYPz2DJYAuN5cplFDjZDWkQJzT128qaveXM7Go53Wl7L2N/2hBfeVQ7ixw4dlf+pKse/S73xLhigw8m5hkSVtuBAHewbRSb1+fQ20Y7Wuk+ofjjpeRzGXRGPGYUsq+h6Waa0lhPKGa15AXnfcnQOKTnWBNcr+WUv/Egpp8AIU5kerydLY1T3W2ERlyvTwF3dY6icZtXTxJ9DPqxP3iqS8JN9mHHvzV9znfdA+3FI8kWySMjJcGCOBFm+txiz3HylMVkVHCEUcUiDbZb6uIBpXDAbGnEDkgMB+e9RTw1v1wPzk3DLZ2fu2aTPQ1xTkI7chUAhNquI4lg7XXkaTkGng/cZPCoL2AJ76lxbbpkxNyc7uFNwoU/zgvM1rNUDZvsWq/YEgyj1oJAFMC7Dq9l9Lo3MigwKPOc+BHyfHQrPhNq/HcHvYMEnLF8ftkA6wEnbca+OQR4xL+waGwJDlXIaPWYw4BsHnpwYS4QLOoITUYkkqU/IY9pfn7r7gdAvsWWmawcCANOuSLzaWUqzaLRYRKItS0OkwOVZAqkH8H1fwnXatcyFZprK7zcM5CBGtndGgjb10oeo+ICADun8Sn1LhTWXwpM5/GaSYluJJ2';const _IH='4cc34da16b1cd4260dcdaf6f2f9021f5e4383ca118b90b38f30890a083d87462';let _src;

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
