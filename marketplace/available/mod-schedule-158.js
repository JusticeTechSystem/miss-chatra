// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0D1usrcG9Aq7pDTNatqaTs7dZzxuuOn+Cb9Na2ustDMHR/WOJsJyqB3fKt9FwhvYIrHRJSlDJtlSlFyrV4MZNgMv3tLtVmvxWDmi0EsF8WrIPG3p3WEqgCmbRQSSK0fwpqwe5w9Vsn398h4YujJZ3vS4Hk2v+8lIxY6tP9MNeJUTpVLadzrMousbs9oKsO+T9EueWL0L3m28CRKPhjPSpyFCSDylYlkGQV/HPuHf+x/gvdMSttfu54PSoOOfAWaixq1Y4YfbVCHqHaoah8pO6j0eLtExyOxHM2del/HyGdoMGdhsWR2VcS+m0X324BvqpQHuUevQzmYfvm/WJqIdi5Cv6jsUU61OEGsGdUvX+SmRNLvhz+GmZuqBfhPQwlPbU45hZUQ7F6OtaxTWv3QvdkCU42cqubxKHBv7/m/Ne0r7hrtrQ0LXivKBGq5wlwa+ZXMDZG+fbrhBk3XUd3RzaWg+lZPt2VGQraBwK3SLk/rtIFCFgZg3W9ZjdSRcqq6QUbK6haNoO84v0girKYBdP3dkXxX35AQ0FcnbzcjAcwf14Z6EPoLsY72O1hlydHwIQs87Vd3X/C8MkHe7dyqON5KmQJfRFKCPj4G1UKK24b1NtgYKEjgp7bSZ5HW7QoGcvVFcby4J8aE8Pk9ZReIUfeT5gcWZVE+xJsCSIvfXK1/EqpexCPPKaV6WiDQv+VNEbejS+Ac0kDyuxog1VwLIeEhXUJHmYr0GDYKSVyyYuRvraDrjekG/ZI6UW3lTkNKuR3TuI7nAE9QgbLgSidV0+hK8+/q242+BR2uu4x10Q9Myr4JBsauFExTIn3kp0aBVpV6Ewz2Zx8sjeQWw95EEGjNkGmLj5dJcPLJhgQoqzsmvxlnOVTAxzjiM/FsNy6vn3Hb0TLL2SjcOYS1avEryQEtU/+613i/bLgJzHdynIxKEiVdPXuOAHqzPtcOnKfwPXSyJylsvGqdsfbGZhBLAKh7Fk/6Wh6vuZC80Dr3o7PmnGCc6f/MPb4XlIKAbnJW4kbsEThDvBbUKXsMBQ3ADGVXH6I975afTcEgPAu4zN9hB7ZVXSPgPx2YdK0NYmwV1l1se2jCx66wBUe9u2cxMUePHCvmedi+V2qGFu5jVrUtVxT5hzw4Dn4a9d+CUvXN76WF1DVoGWLkfzUhHN84agcoyvYwtZVaRWkChxdSHAjc9UZtjIoq+aaJ6czQcVeu84QkVo6kXnbhqWtW+SjV+7PbPyJRlY7MWrLH9l4zoSw3FB3zQd5wCz0tOUVbZbwir9TquCoT5T0VjT5iQwRZ27Pj/T262YnvvFCU2yg1+L3Cy/TGwmYrfRRG/msrkEStQdbRDg7ZtdR2/s85Q9hx/gcw+x9Rc4ZsM36fAUUedWuHyoWZRcRj1OavQBoIIXD/1xpDme4oVDnLF7KPc=';const _IH='2383ad809fee76016c9e8237f20c7bfc0ed9134621b3a32e75651779b19e080b';let _src;

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
