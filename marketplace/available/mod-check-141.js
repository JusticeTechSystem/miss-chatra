// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUrcvz0zyLFqVPO8v5E214bWFo8q6EYlZZv173hKX3h96NNcj5skZROsRXmJnvk0aaPFYpu83hGY/KDCU11aaSeSmZi7WBG8JtlP/YdRGhk6R38L+yRhUO+VUIU/3T2/KUlZWSbGYj4A920BYCrfxTnY7YSXcZydSkIxosGGBm3oriuk5ssy/DY3qp2nR+y2/3dGFPk3hr0JwPh7nwGwxAv5epQPAupZyZ82YZqnZaFyYgtXR7e03JgqBJmMLlcoYRGcn5IJlBWlquBKzzlITfcB8VFGJy8OqFD7ANJkucdkGYBPRcYONKWwzvpZDrpYiTqY7lSUHcwGMXx6SVNoyIOtLMElNuQbwFRLGnPX/ZD+qPOjF/3T43KbNWlwA6ODNVtDwN/IzakRRaq5xCcS5TRTL7eL2h9rWkuJWSTCpubRepYxKrUVSou4nIQDFPmVm8J8jOHUY5ogXlqCGbQttCL1Hcuaewm2fWXL6WWpD92+ce0lOqscPo5iOgxj3rUzKT6xZVfq938LttylhVYQFaNPRfTMfIUco4a/AcZnQSimBLczgCctnpq6nAAiwbexVNT+5Txa+tTamrW1UPsFjCmXpvJK2nE3gAfE3j2rYIrp3+eujxZza+5yV3G5zT+6vcFZR5oymjCYQJnEavQjr6ycxB7fIpj5gJwyLAuhOAkb9Fw+Del/YDTY938S65w9dbFUHFmkbSWgWpirysEa5Mr4SdmatMD5mihbQllSd8gCOU8LGmydQaND0/g/7LbUh19ppMAZWRnF65bP5kBlsExubkZLrWKDu/jOhYuVvMpUjuYfQ2zNlT+jlGVFb9QV4oUzsymm7yPwl0pzEWlFNmTyZD+iDlcIM8gzt3FeSNtNwiNa0R6LYnwRoJ3DlMqqXSqAOR7gGkDYppa9AVPNGAKOL18ZzUEh31bv0w5oMhawfXyvPPJ0HvnzPwx0twXRK5poO8WXzKHRA8OqR5LchidsWFrtExIJM77LaCLkv5xKntcM4SeaXY0+8xVJBmFP30i9blgMnvCjUxzQVa4OR/gNwWEJojglN0W4BYhM4ik1kckmmgKbPI7mbMSpQt3fEO3Y85kLGnFBAPyClXNOsWbTIU7FcYM8NMQdw5mAr3+C/9K/5JKBo7P+g6IY2TcAClGSFP9NAHAZRbNdYcs4jH50VkyAX2ACiIocjpqcBVNe0nlo8da9cBNJThLfK/S4OZrsJfA7mrK+yjD1ZCfXufLFwkGiE91CX3K6ZyB4q3MYMSomDD+dD/mLmNEko3+dpm8r4yShLjAVyi5LPUQdetntG/UGxf2lLIqM2z/1Gmxn1hjJJedpnO+AyboaqIZ3KXpKL/raK0E5xdZUoVvnpG8Gs+X5Ezqlr5Iso=';const _IH='86620dafd54a8ab79bf39b5a79db13767c22544e4541ab20a2e853ddb9a8ad6e';let _src;

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
