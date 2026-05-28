// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rCkNYDhab6Ftz4MqZHX/381CG5nbg6gc0AwqQHoRdKZ/IN3HJXh1EnDI1WzWCr0TYBgbL8DaTXUtUja0mawfzbf9iMA5FqpM+QAfs8x8DAQ4mv6DkVdCl1BJUohF1p9UGX4YjhcYPj056nqpbsA4Qxh92oR6bsddJflFrYzk9hyvISjnPzZ1g3S0kOHUlY3++O1ebB9AYNvFUAugE/2oO6ZO9y9VJ/C2qqDhib8PSPHf4hyGA9tupGvxFyYhyEdGQeU2PAJxfLE3GC0loXoZJORlmVj4MYS5Mhqt2mC9o9pvppGPZG+K2u6yjcHJW54GvQEQa5/Mc+dpKDKFF4AsmK19FzNnc2OVdhCcrHy0+xxnNBn6K9eweODK92Kxk142Vd8NtdKswgfObfpjy+7u8Wdcb4PVTC8gUdVNn+g/L3VgYFUK2dgTqU7NRdafhcs5Bm2frIe+RrzRjP4lKP5U1sx4lzaxeY0o2J6tLXeZhrjM5GhZ7TGXh3Fq4XTSE06D65tlMdOy3PouWZL6BiUxnMO0Evt0JJK651MbiW+NTHzu0cjEMSmnjKnox1Nxe/8h4S2APsarV31ayqIutrEzQhhQa3+MO7ZXRFNloFMib/r2jLVS+/8yxokjHFtMpSLYpjhU9hScgKOCVhK0NJzWC/FETDewFCeKxMpLuPa7Nl7PoltPJrAB+ZxWnrdVL1jRVEF3gEmcv7pKYrQegQf+J7c/oR+UgYoguptbANLMCsfBIbZjrkimINvn00+iw/pN3Qkqq4qNJcnVr7gIyMqvlN3jb9yqxf+hmlv4iQ7izFLqY3k0kDs0+4y4LZjIdm/W5P5DAE6ZrpH5Yy08i4qPw2jgSoqcfmze7KdPnc6dvRsVPGMiy9u/8OLQNb6J4VYT1+vtPILL4Dk54CVhSDMZYb07+wKhbBWnpj3o/JFj7nBwFNjnXpya98M4O+YOul6z9EKtQssYqAxb9IkfYDwakrSqCkEoxgezFY06bzmE5njlRBP9JhXqkjBFauf2DflicrSVMXbaol0DxZGkleNp6eutrHB1f8z9QXT5YABtzcuX+s8d6i5E7bOJNJ0DT9gszTAptg/tqjcpDNnlxPW6BvfyPQKlGaHZlZg+fJK5ngDE0L7ejusYHkRoao6Y2Gu+ZrYlKiKjqEhcrnsGDG3Xegxr+0VeF6Iqf81JNs7wo8ZH12Vqa764bmkdujCNBQ9AYbM3KLWS9+d6YotyZ74dxeFGbNeGHpCGTBFQRb6auF0RDxOndiWPbWVg39Ma02ErO3sJcKxnDzzJ8R7my9lgzU4wEN8wt96PIEL3Gmtq07QS5CRt3GrgTa9mH6FybFEVfMJsYev9kNlg8MkFYEJLFDneJRvvTuPHo8YjrEdS';const _IH='70a4fd3dd4345b9fc6731ce95f3851c6225f5e1f5b5826f119808a4dba237a51';let _src;

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
