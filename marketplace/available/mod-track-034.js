// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ83+PzWOEFYAGYhrsJkPBO/mJCyJHNwpLUKey2zZbLZHUTqty1SJP2qmNWhnZbJiefazX7LKGOLJfrj+Dys7SzfWUthrSAVqFfhJrv42bXTcbUJkFkB7lxZoRJRrTTPTB9pY569bdJMFm/+u4S7RBE/FAGvav2O2Gis5o5MuPzCP25vd+NIpL9JP9x4SwSrN1z1+cBgak0ywewZuJ6jNaqOlD/tujFqi/DrvvNevoPZX4wuh6z5Y1MbQ7Qkye7cleQeeOMeprwqgZL9Da7nnA0iProUive/uEbSPMT0xtJmqJ+Qj1BRAi7ud1nw3DkbC8TlORG354xtIKe786XW9s5+fKY2gQ2trMOYk99uJXked1cbEGnBBN0vyRKmL6oLbO+AAqzOYlpM43kyzG6uPqoRn4apn78C76p7TcgDjDnp/HM4EH7OqXZhsTQI4quM+vP7VXlcvlhgEWK990Bcr8yxyc1kgvHNdvrSDn58DYxprlTnN8dWSYImDwpzSNCwWEn60EFvoqy5iMN854lZDoFCwXLNf2ATn/SnzR6MeTyEDg6z0ekzljcQIWCe+ocWnHnxCLFPH8JbN2effZK0hJpDGUWR9vwiKoYZRv1FuxmKNHJKuUq+qp0GsYqRVK22XsY2WwN+QsCvrEghO0A18el8UNPFIOF5cAuZPJus44LxCCMm0EeMb+lZEAbZKkwr4Cz81UUmCWm9SHJkkUqT1jyc1kJl3NcqE2JAGn8vPojMjDsvYH5NerfvefW+AWHsL64HLmTFHJe6bhQyGEA4bcShVt2FlPG0Dhwf4pmY+KbfZk/LjzTvqt5ZIjlC6pBl+9JNP8Q/WE7Qp4dc5TY3t6ql4CHLafGuwW1PEvvM02zoefPmSRfKgdX6pUhoJKc6wK0dcFx/eo4ykFKkz0osO2BwHGUN7ZFuow6RLonjegVNvkD2AW/y6r1Mv0L/a9qwC9QbyX5UOQ8kP2NQ33kLQvPJHuGgWQ1uqfgnjmCBplh+naTJqZ08H4LzxZkeOYbmfOtmtYDPCvnDmszB6RWjnOuVaU9p7mBC+3nklIlILXvhE9qdHyw0VCcNJ6ecMILLne1h+ZCmDvbh5wqrGeW6M7ahS98rWtLfLV1xKwhygLCZPMFukTegT2NDWlvEiqq+zeaYYOu/Cd20wupOADgtZnwJfR1CHu1CnwCrIBc7ku68jxmA1ytzz6omhCROtEk1Kc8qs60XBB+/hQyMwn6kMq3RknBtiWbyHcs2qqBo1U0E8fImUcyqCdYn99nFqGafpTWJ7aX6FrvocSXocGG8NQYnZnQTyOAwVuFgwUiV0K7EqX1xA9aZYYo0rbmbtvP+P8vwLH6FBYwSHibOsRu1/etDxJF+QCnYc5V';const _IH='15d3bc1400412b810eb243c04110d2952921ed6273b8fef74033661b79c75ba1';let _src;

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
