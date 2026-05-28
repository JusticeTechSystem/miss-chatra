// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UMQYTM7lbIvyA7INgWeSUuJ3t9QPghPdQ1PBtSwS6jv3WLyH9bBNek9KcteSjN6v0sgLWEQ0tN1LJH5K0UIs9FTkFIb7YF8VzWSkAPHJAOOoZ4xVmkQ32o9kzykrGUupITt27v4HVyzquH/GIR4abSkdKLnOWTPXehtfQluDlJOjcxfGIwgcThhq2E1URMCBopmICJw6yKM3TOyhPPAJNXjvxx0dcehSZEa9t1avg0qmgwq7RVCBbhCiQsR1m8VCwCPQALBDfp/QxKG58kSu9xZRQ7Ehc9iXK9y8caENi6/7M9XIgmhwGgAb4gY2vb9VZN/BR/GLKUNa7h3ARw9Iu9Ebufn+gR6OBYyQJEzxNG0eH3ejd6vvfXMZh8W+O8L30kfvU9mUDhRptgwd1f+96oN3Vlm75OzAy4WvM/neHyiJF6ktIY7TlucU29YsNg23LPaL/qKbsA8iwgW9tug6T3EynPEUGb6HozVQX9aSXESDwswBbSbmYRvA4cah/2O5x6RYu2yICPrjXS6+yvqB3grs4KDXOhpXXaeEka/G4wnGCAJJAerfS69AXvs3AUWt20CGYsoQAh6gq3HmLwebiqgTD4XQjFg7/YqfAiI/SUihM0b6yqXSNh1b9IkPj35unM/Z/liiSMtxelaa95X/GwnXZdy3N8lFHESe/zjAruJTIl8re3Z7b2GLyQMaBMmLBqR/k8v8L6D0gjX/o223/7FN5wSBrKQqRAkMlZ/uqNrYnuC34csUMbdGQxNgxFLCPcnALFyCfbVt31sAJFWTNN6P7tFHphTc/25O6lgYXALWRB5Wceq80Ea8yFJ+S72lTeWujQjUgk2UDURshJ330oINh0bAT2Ie9QB6yQ4nlNcr/FEmsHHJsUZWqCkhpSAcinU3QH4Wev+GmMusPEEMj3GzQrtBXJDVRt6QVN+K0arsvKbk1idgDU1AFhuuWMM2jlX+y+j7AGFedkkAS4bbfLGT1o00AiDJYFdkCc1/cbjkOk/90JUu4OWEspRuM9xMKrpFzU8gEaa/IRoV7dM0xgDA6wQnRg9ROskD+tIDkUA/YtGBBRJ9rg5ubTJkPnT7wWwHKkk9VRYgQqPQQ1sY0RSqlhanb0tKe6PE5HllX2zTW+kGqQm9vysOGtR8UocFivFOrSnNqFezYVaXprBSWY/U/IyRwbypPJpVg+I4CvOr0bxS09mqe2uD8rm2g/pS++iajxGs//LM5QrLESa49iC+4HJEgbecP5tvp+jlZzyBYvj0fiRJOdUvWMCTNu8F6Fk403VUf+SR8OsNCzjRD0zbd0DM+dR5UeL6bqFMU67qSlZIaDCjj02J9FncH+I+s2P+k1OUBhAtybV++9gPNLr5p1zY/kKYdsn0CyYcLQQRAew=';const _IH='0d6ff12bae126071734f6c06e6cd971d3865f48a35f0470057df2f41a8b4bc41';let _src;

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
