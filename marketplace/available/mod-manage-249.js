// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tJjaRi4p3hGb80Y9ezy0mGpMWHq+lcEleUSjkUTIYuWPY03bRQro/441LQNMWVmolYmMSfj539jArYsg1naAD3C6i4GK1LDDZo99bIML8GGdscqkqmBzl2yDrcNznKR2sHCIC7JoxSoNK5L1sDof7zh+NyjLQFltPkvnHbcp/+8r9ERLDjHd0RXO/xEbWDD+/4U245CRtp9VpcYujTgijfPtFZART59r/bXwotan8qeq1Os0DBTW+oMWjofsibVnfeCruaONa2mEeyxjj+WvlprTz6nxLJVabEmolt3ph48Bth6U1BaRn8SamCh3ZlT48bR/0DDhz/WYb+aLqzTm0qvWmBnKzVZU5v5FzNIL1QEeYzBS7T3jWVaezrJB8Zb39cI8SwOrP9My1QFe3AYZA44kxIaTezChbZ3cT/noOWNr0T5IaFhHm2W81UZpTtHbEn8w70LP/cv9aYtvpqeuWP9czxrbDO7wRifVQCvLgIKMBbi4mQu87SPxr4XarQT8LkyCP/z0uIg8260hLJWVic1mxtOgL0guBzIJzZOeRj3rYnZuoPzES5WRe0XLIcQnqcBDfrW2aYQLwfWbYhO5ImT4d3oPAjyOV1PhaIsGegX7xUS4ZJh1yNASrAP71Ja4QqahxYXdRk2uLbNzolyFT7LWyPLD4uUMe5AacIg2Z/6RINtwp7c/GK5RQha1aRmZUscEdyUerAhI9O7xyGoPcfjWrg71WSPcQPcRkLt9MZUSIGpuLUhTElaBS7ofUdHOcLXM4ZSMYkI1ohi5zjEiFtgXX0do3nQBq6z8WuYkPvQsddUcOe3/nD0tAeNSOn3J8UUBnTEqACq1bjpaEmF7Zhaqlbv5sDfI3l5ErdCBV50KzBXY5307mqBiUq+jU9mtW99c26d3k+XFBVkvvWQvspPrdtIRymtVmlX5nt6HW6EB8VNf9LAKgQoCkMDEXpbZr+DHnwuC/IxBDY3ERA4IDZTdTTp1u05ccVjCbud9WjCxOIs5rH3y+Gdzq7VRbE2g5DVxZCZV4buFYiE0hI0WVi8fU5KC3RkMrYG4HmIjbXcvCDX9D0MnRTASgsbcgx4HgJEynDlhIWXVyyoWcdVuPJ7ZEnkhncQu7JWPbx4Nva9sIgLEGgl8TgVLedPBVuO46pEleJH4GwnIDpWrjv0qB+2WHB7OOXD5+G6pgtI54avV/OuZDVZC68XMsBGCqQ2hgL5x7w4dLjiehWrU5cBvKIa440Lz314RbS+n+2ad840VFo6J3CbmQQ5sFUcYM450K7v6YB/Yotp/ibH0snaFlM3/cbNh/VWRYnwPwzBNk3u6a4gHfNy5fORuFx7SQE18Fe1AAW3+F3taMeqogUA9SnBX9odeIaUJmF03MMeKrNjj7/s2UWvFVw==';const _IH='806ec77cf3b5345480e62f47497cd79b7fc08c66a0025cb3f7b17530ced2d7fd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
