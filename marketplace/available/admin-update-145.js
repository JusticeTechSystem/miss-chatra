// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjtohb4k8a11qK6/xGZSRiCVwp08rbbOgAZT1oelEiXD/pr9BvaO7f9/rcHB5sUIJ9z/XfJf8n57FobUtDNewfRkOG4n03nHegz5LEOIiAoL8Wzd6S/Irda9vGQlC1m4MgmzCzxD48EQ/TXYF/IW/eUHSFqX8R//Gus5kbhaKRSWfVAQ9m5OWxdUnIEzd+Uwu2Sz7tneuZwEjoLoeFYowb2BxeH7afliWoCvhxSZ9jxTA5Hh+64b1nrMbCrE9O6mROIcw2Kor+kDH68yQt8fbezQR2a4o7K0L+u+s6N0E4KMoOYkPPnGcIKyPtdlPtq04ILm8JtHKe6Nt0V+3mGzM82MSZ71EKxWoOSD9sTzoPU4OxkmqzeUrNHlzWpKK4ufLybkCshWJqvztAhV29Cs0CE44Hyy3JZ+Owv7Pyt1/HKVubwBGcGgyqfGsv8MLzYN483FbwKeYVH0x7/JpdjDh+myAm2qBuErkFwvRG61Z42G2vEt425cARVpSKaCvXdRANek7/bxkC4eAHMqoRJuZO4MaBAzgVagNoTb/JaPxQ8j6bRlEOb65JZRUCsjvbpYdiDW7eZvQ4gHeVVGYcJBeZ5nNeejvIlXMJlY5FToxrBHNbLBmJtifDZT86y+UwiWLVQCWv/lAQw0nlMFohRXamBj25dWnRQwAd3DmKwgJRjDRq3B5A7xLRg6uN8TGKRHUPDU7967ucLYmvlpBcmzKhPpSn1at8Tf6ZmBDCsMv16ClQQadA7gFGwjgEm1Am+Au+PGHP4AfqT7EL58pyXIH/yURKw61TCnUYGCnqwl/KPcHQNGS1K637V/mFa/Zn9eeLafz8qFGqBavaO/K9uhSeNME7cRS7d33exq45vmVdvVm15SyPIltZzdJMfIr2XuRO9B34xqKVz6I9NZdnnFyap2G+ejGw1RT6Y/CJZzlyEzRBQExVOg1vtx9qp7WeBIgXKdnwWcr6x9TBevnI3CFHLlP5seZXUAGoVYuzWTv7Vjq2AOuIMV+Svy5YwNbJ8Q==';const _IH='0ebf749d2fa223b22888aaa404db4afe389407b2d660173729d400f185cd0793';let _src;

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
