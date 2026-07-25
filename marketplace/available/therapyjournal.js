// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTst7vJ8d9ddvb14VxuBKMOuP1JMJiB3CNE0+HvcT8A8LNi0zM3/Rrbf7o+d29i6zgBF1Uo4mkrdkxggoj68C6+8IJdfEO399AtgN/HARqldnt9GrSnkKviyytdBA+xE/SHrFe/t1m+ID3A2CiP/n+NE9wRL1+dD8zGlFQ9dg3+IpMff+6Pe5lbRhe+41UUmfLZEKY0zIj2BJtcXULtbQJxcsgUDPNttoJYGMv227FgcS3KV46Yr7+5iVOfsiA8k6QmliHETGia0/CmkuPYU1ICQX0dX8Rus0xodN8CGtgq/EJZdGmWaQBS/JXMRnRWElJLXw6YSm/x8XrijiWENipS0rqYtMIfbNW6j5HZmASAdY2tFGYhA3fHm/AcR5r73E9wMbQvFX7LawvA4AJJGiTuc2azsE6C8W5l+EiH3YUm4jLtUZS1CqYZ45YfU7i8k5i1k2Vj4NVCTA4E1QfwiRQ+kRIZRCgB6Z/7M54oV++spbIzeSW1f2MgIDPN4sFZAF4ImVEIBgL5qievs/RQ4wkGmpVFouQYUyR9xJvXXSjDG1OHDxzDHp3tM9Yw593NvCZDMqmjQ2wVXupaqj5VioZtoWLJr755R5T4lb/hUM3F/tATUwbMEMcFognIObTiFiJzLiIG5LcnIhsAYd6cI4vzYrjnYPWFG/jz3tzO4H4JBzh8PJl7JnK5Pj1kEwSdHl6l0dVcFkVvCWPRO2rRJmWYXsyYTxOLLtUhZWBrmBE8HGVm1gBX36l9qrW3217FZ57ywb/hpCFD2OsAhQS+ndYVsRvf+dR+AyofDJB5NngxeymKhoYwwhOJvJrgTTzUr6inpWQMWWScIzWGiy/3nJxl5lqL6zEFvlSt7YfxEyvruk+fEy0lQYfYqDb3p8yQ03EymjWvttX8hfSONej09E9iCr2e7MpMGWUwZaoDZPsuWZDgrI6Fp97KXCDBqLnCjdkTOv6czXemXoBopT+1wMvgqYQKMa+lZuAk4OwAveExgo/+Ek2g9H5nAY3BBDptzvt6ky/ToJufS3KLNqGUH6QsJfYngSKux04ocpekMDVfeNTl9W8YhLeDHEQ1PdKhznn3on1u8VulFQj05O0LLOIEH7ARnp3EyY7k9YU4eTCZOmZOnUQXIdg0HwwvHdzegmAocQubT8UXGh86ZS4+KF6sn/K116xrYt/9CWC+wu4Oo2vUAV9Iw5rTUcjYcI2E/k6uxZU6wSvOYXyvrpjTcWjr/g==';const _IH='2318c4237330316da499198c826e2380514113eb575fb424ba89c54c0351fd55';let _src;

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
