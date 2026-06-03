// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y0OvDUYVopZ0rK6yxbPF6iURlEEqmWfuOskhA0JfZ5D2Huqj47jKyhsruQw46s2e6qbyKeQ8Ka+Sat/hY0xVjvWHez41ENs/n3YPpvwA6UodPddsaK6E+E4w9Kp7pZwE0jm8as9QHeM4Mn9NFl808YvangFqgJE2Du68BbaROIHtvfJTUoXEpWkL9rG3tm4yRFKt/BuRslj0USym2RUSn39z1INClY0/El7t7ad1WMgngQ+2I/BTNxazGySHtrp3ZX0BmbsLYwXpN+r6Fqbia30j8oseVECoox5GrHNhOnaFI5jvBEnjlaKKC/lH5k1ed/gbmpi4GNKZdN0tw28SEsDwkCxhRXWp2+gQYSCqgp1V6llBz5ufuSMD+hgGqd1jt9h1j5At26Z5sbO36rIu25dvXYsSN7gM9Jc5PDjgrwteU3KxRcBfb2p21/DW4q2PApJXYAoXEF3FiwZ7NJuNPqzs68HOyS9LAu10Z4ITcTO16duZCsZl1J3kGOSvn3u7ARuT1Tf7ri+T8I8qsrr4XALiAkCsT7x7PU3z37J7xFFpWe2Ak+uigyljqfc8K3DmCIxEoA6BEkbIfZAK7isKuN1vHFN3v6xWWiEeQxBMq9WkdMftS8B/mGaTZrw1YWWiBZHik9g/poS+RldiL6HLz6zEz0CGWSVaI+atxFb0QbKSsZS4XaRFEqwf054wn4ouFI0r1DGMArD01oQg3pdaFRAxhM8j5VfJhsc+58RsWaZRzdmGSD6pc1q4bdIuZlkuGxSM5rqJMDoD0otx1TwwH5e0Oi/lkgopPhxMqfqAUpHfsZcNE43DN9oO9K4Z+4njpwKcPBW0vnAdMFlo6qGR+pZezAn0Gf8GVVX3GA0Z6cNQpUUq/PEHpuSiygx/VB+2S4NoD5uzUkpp+05PvKSLnH+wk6Net2MD496YhWbrRsIkGZ95DEivMTkE90j8BrYjKPTS52TNrM1czRjvz3qfDmrWgUK9+40fy24MOuooVRLj3QWxyr13TlRz1qEHy80k/5kIEqOjvOY2Ga/XZ/uNfu3fjcCS0MVgNoHF1lZBi/r/HzBEFsb8A6SPigHBl3+vi+JBfDecq4oO5xMM9UyjxE6sE40mirMSkGG60O2OF9zBo0w/PZUmpqYSIWUCQC9LhssbF59aLXY/AnTLOpUxAMzWJs6D0EBEGnnB+GyY2+PuVb9DCAirDy+0Ivy8+xFJNYnmlJBqTz3ZqxRIWE/nHHaBpfYjf0pQ1lcRN0m3bNjIyss+0pAUjiGLw/99ZoRGqgcYe8WQ7+Lhhl+gnFqaGxIzA95Nl91/CcAhFrZyLotxkIsJpVlVouhb5qH3WyZPWOLvIhQtzUjesVquBrWSzZqObTQQQGZtAPahqurCarz9s3QYkUGqRQ==';const _IH='3ccc293dbe7c3b73e0cd26daeb947de2c701fbdf2ac55fef3858df4688e7c221';let _src;

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
