// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCqAbi0ANndLlDKom4z+DFoBvT/xllciGkYwDtEredw7VCWxgq67DnLFqG8aMWASujoduOwOxgpyYoZqrSiWYtpNuZgfdHFpdKNENcKlOO2IDMDTBDwvWEM+4ae8J74lS/0wpaA69Ju9jpFSckYuEEoTeqZey462MZWz13sqq+Zf6wE8jYwQIWZhVluGI2n7MAM6GI3SJmtQRavY4U5w/Ioc3ts36cNxzR+hmu7iIl0HRjvj48cjist7eciTpeFeq4JpjzGL1K78DcqhlmzXaWlmllVk9FQAWhM+N66Gdi+vT+TlyCIXKQjv0tjTCkW1rFB0FqjIqA7+gvdckw0OqJejjmLukNgzW8eT8deAUI/6fzBent1i5Oh9e7YuhKBNFs/az3ZN3YnRCBcTu3vzfcmpkWwRuOM16XApj1i6o4E04IYYz2xsUnABuYA4t1qs4nieO6iPzoc7tcPuI22dV2H6n9bk8nES446UvvlLFkbKbe6PoY92BGoi6W2OsLC5z2RQh0JwlG5SRbbrB4RKC4K21udhYM7jECJpgWNoML4g82rVsPZk5sFb0Jd03p2+MSmBLV//Z1Rzg2K+vK2SKZ5KYbLHDgeq4/5KqVLRnGGAESDFMbxNMH55Ma421gd3KJOjzvMkCg6QhmhTWGjZ7LZatZIF3ibm0DwiFjruQiumkRuMlgP9YidxlKxuE8dG4xNu/xPaNyCHX/J/e+Vnm4BUKmlh8myLTgPoaalRTb';const _IH='dfacee1848303254e312ea5a84fae9b823a07c7f141ebd0c05bc6e9128ee925e';let _src;

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
