// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1IeAULGEHtfrCzkVYSn6iy7ne0KRQZFXBa9bi7q05JP3tnoDjMScC6lqHL7bG7HKGhzIV9pgK05i1DR8p3AzTxCilroBX5WraATtmuxl6uF6bRHRA1vBn9HwueIeA0fw+2O+y5S85YD07tNhhRAoT8m60Pi8xzqxG/bo6/ozPLOoGMNDPkwl9nBGtIwpQ+5gDSDPphAQJ2dqVLXUluo/eflJpjFOQjF3MNkHE2hk83Aw7lQUFU9gbUh/MwsROZNU9gqpSFukXcAJX9DrSv8AMEeYDOntJnsS490RbFRM7sYgDKiLc+eWDA/IZrG3Ew1WFat7gC1UYtvb/cn1z1fjnMpkV+WWtUM9WP+MgMVgYaNwZz3u7NL6cE1W29XJV8tWqReP+sdjPSE9bngCUtPqvqpMHUYEMRWru37O8VANkfNfXJjvE9o5PtQ2mZowJn2/ZYOflm9UYdUXBmJDG+LgmtiHOate4UO78NYd9w0kBbe1Uyll+23NgoigtHTKPZ3ApVz5bcF+FdlR36JwdMkp6dsxxVbHkDOUHPAYaDtVbxyNsNyI30Is7JCaQtw4rc80Vpd4rmnICe0EssmA2HDj03J/K3BrooCUPTGKjE6+ZRmr/zF1YjuaBKoies0nOzyr//cy5Hs73TAgNqvFZSX6lxM2v+MdrRZ7VKPCM/VWnTDVbzrGYxAGrBepSAJmGcwK24BPYs7vfZvcU1lAPqg5VLfBDP7i7FW+0ey/W5rOadWyJMfhH96m3zWvKJxQtmvZbjyWjEGbOIMYteJOh5Ra5inl5gDEugNDsyztivVqsYyrjZa1689GGZjr+7JzKYP2uHu4ZZKPlJSxmzU0hCzfrUxzmr5CigqnwshHk/ErEhyeVl9nk/85OhR8O4Txvz5IP/uUMQEUrONgC8R8Aeo9Hxcy28uwFt7sIHwHtzMSXXZq/qXpIUG1bPAl0YvTVVn1NgV66DfiHg5UVtKVjgBIgeBho+oM4H8D2VAp49DDGaC5P3dOwemFvZGeGB9gt/wny8oUkFD0ZUqvSyyBYtY+F1PxU1Et1WtBOofv5LrA9aOd45GzdK0xDJnbkYSePBgvEFA6pLD10XmoYASEWofVzLeUyL+bwonTOqATERQMcTNj476JCU3dDjdhN0m2Hc+Zft6SJDB/unf2HOwRfdiwp8bybcR8zH3XIFtj6n7P3YDlcwDA0Hs9Jmt4Q7E8xeMyfUYh96cVdg745LmhLhrcDetwsGFoiSKKT0kIT8cEeEgmUXGx39Uerhs/DbdrhDgcRZB0gsvjfQ2UzlfOR6NaG8/hlsjw/JtfqSyvalIYrgJs5UuF4wlA3ejMJu8a2myvE+SeNhTBWMb2tYdJYIG+mrSEIbTtqh2xa93zuskQ';const _IH='e009ca28a3add3d8c79698bf8e70cb3e132fd64132d9438ecc39f0e451fe7693';let _src;

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
