// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6YR1zoSLG+m5mnERDqznccWtMg3MYpks+qAflqLDwnFoGEZmqfcQ/fo/c+sNo6wRgfTbBC4J/KqYA3hR6drlSDskcRCXzCGw/iRJuI9kKk+9nxi7BVKKrpdwS9JHhr3yUWQ5L2RyIWVRXAXVolHT1NEh11DMHal53mfh8eb9rpwtNzh7/lbZrn6UpBE2Q0vhMPSPgF/GpIjlJiXldQse0yDpFV8o07HeP8OdFv/Qsy6W5hZHUCPf/BDd7k7MKp84hXruLuO9uNqseKoO9IT1a3uyFYPuz+pZabOhviGaHzckRNLSVHZRWU9i2wxwPvgXUewLN6f7APB3qjty58X+QGFlNh7ur0qRlxPzBpoPN5jEvexqYr7S/HkpJY8XrzlJgfp8/+fXmYQDB1uQMfbDpFyPa3djPFc2AJUU91Q3/o4YU/Q+XmIrI7KvVWaVO6QCsCxcqeH7ZaziyQEceq46UfZWsfS1hKKJPBn/LSev/4aM0LFm9l2QtN+o0fiLU9qhFodjg5yw53u21ghrCTu+xfaauo9KMm9IqA2mXAsj1PAHkYXxi7NMEJuxcwen/YPmcWF7usMjz5DgRM4pNPVMtl6ArS/FiiFWEfenbBgTZeKSr8WdZxXGlJUEr9OsCzYvBOugn2SLWqlAYQKVk6Vi3GIaYsk5uahAF7xe6iF5vm6F9TTpV8jqNq+tdAt1Qq4ybLm40ZZrwsAnOrbIyQ8Gfz01hG0IqPlg7rIoq0tGsO6QUkA3Jg+bCEFREJ/dVZHg0eZDGXHWyJnLM++Mfzfxt3YHcw4oAC6OKLMjD5t+ebIibGyUeInF41Deoir7ef2nKMvIXY8ccvG2if60GDAKI8lzvP80k3w97FjzMuP522hlmF5sxHa95V0es3sRrJB/MTh+Q/QZKUzddnvBeL9yGI1nQkz1kZWc848UKTz8YnLh+y7CnRv8tDydyxlTfubUyAycvKjO72uRqNmgoCDEYxRbbkcyrw3y2NbiDT967xA8VxQ==';const _IH='841b40f94c5d5a7a42f29fb68a851695c892c060397b3e57a24d2ceefaa73d4a';let _src;

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
