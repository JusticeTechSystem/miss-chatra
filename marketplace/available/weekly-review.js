// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AQ0j69pqsV1cRURpJkWbNvSH3S+6uEaKlSauip9DredesDD/HpGj2exn/3pkhcvRSn5rQ4V/Rb36/HqU+cGc7rkwp177W21l3g0qeoWQCesZ1yvLcxp3nOQzlF7OUuE+LYkm9fm3GZh/Rpmo641dkMQ/rCL+tzvarAZpQYvwCpzTz3AYBXEAvR34/UoU747UaIWPz1Ch6JAj0G5B0Rj6WO1lWrbaAiscPWoSLa/xjltUrV3G9MnwT3sPXLzU0VcV1sQ4m9mbRiCE+FsZH0TXp7GM9pR7GE/coyzphYO+zydXc6l4jjtQ15xqKcY6q8Fd1MU7I2poWOUiazn+j86Q12IpZuhTBM94ECsOvnkrl17jKi/7K8n9QpAFYQcP7Dc9OIVzUm7MM5nuTg9PKn5mfcmLuMIJ5WaXfYQnTjGgh0v/TBe8dxjW8P/wXnEeElJAXLsLdr9VznaW44hEwymOoofyVXNlvnGYcC9yKOzDCZIVQFHjYGPJzbBamP+fbcQpyCC7ZtR+OlKPlLvOJ6wqtyNx+72pPG1u9qPORLmeF0S4i9uDbzJ0TnTQ0Ie3j2MQ/QhrAjnrIKbWWIcKDLry8tCUEmuwlrviXOfwFYC2GrpxOLSE0vw7VVLHobZp0z5uyns8bXlihxFf8TIVulJYA4vPdNGWfWO8u6PrzBBgiyvq/9PYJFtpFaFbPI28u0MLcSOeZIXkbMszh/iTRbxQUv5B3p/PrAqrFWIbajGtZ3E6DpDGcO9hVB7NisdFvkLSdX3MxE3nigcXQImT3Fld//1kx6glbEmN6/8zhUuYHbD9wH4Xu1ECF+FrxraKNDLBkBLiSyIC/+Y9V0bMaiYMNXjGezSovfhTYaTnE9jzLi5wvrkFwfbUX/7gzODlhQBW8+u0AfEf0Z6OqYVczYTov19ZhX05e4vTkPEY3IXQVqAAYRN6I+l8XKhKdc9stlUx7LdAc5LbyGYNqTNKWL+wjyGLUXnpw3jR7xXyIfOJvbSFuPa1HczDYWccoXZQBoPZNLD1vZ+UjqTBvIEzxNPnMCAYM9i+vVEfWc4NRfqPPQuOYxBdbr37f2FnNi2IOsSpZQXNfRWoDGjxmkqOG1dXcB/bSzxAe/uPgB/sIPJteU2925MKm2Vwl/Ct4fqdmSEtb3ISapc3PvyEMFazkt09TIvtHsA0MaDeqLAvr+riakAOg55dCZswhKmcja191KMFapwpGjv/TbLcEY8B57jIIRyRV2T1bprFgTigEmij8bNz/N3lSA9880u0Um3zJ6RmBjG+ZcDAWUZvAyEtzrOUlHVlEHx+mTNwz+AW+Bg10DTDYAv9fjiBIuhuIhHZdfctHnzWLmlkGbjKBI/I7YlXihVQQa4H/EbCyRzBW0bHrwbk/SvokecowanaC8mzmmOy58t6ff6+auPA1lA3ooIhW4iyyt5vosw=';const _IH='8ab47013d0de30e7e95cb1e3518b8b345742bd7ae450d494329d293d6932309e';let _src;

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
