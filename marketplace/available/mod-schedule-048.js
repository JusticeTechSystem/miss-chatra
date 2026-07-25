// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtfT9QxkA/dpPwDe1QuDJJqy7t/XjpE4Ux5AcQW/L2Yi23RY0Q6VFd3Wqm5SlwBM8mToUWwvoG5ScBD4fwHzbB7vFjMh9ucNsIpUxFCmNaJmZ5fHzrm5DiRn44OLplqYWVP4xgjKzUfNJITw+7yz9yeM1YozpVJeal6/osZXywlaLBaQA7kLIMRlh+CbadVwq/ipnzsgi+uwnXooE2v6xeZZq+6mAn2kj2v2nIDZ5hidIXbeADKoRZ9N1O7DE4xsOSbpVsDBKL/q0iKS9OiNr1BOZNkvH/OXlaNfBH+QGofaZM46oDEZzK0T8VOvl4kNz75OG7Nwrn6AXcb4rlR8POEWrSGw5IIgg8LX5sd4hZxVfKObiCkJA2gcOyOl7OJsKHE/+nhF8mF1AzGdHFzkgrkCrQiQxLIVFVcbeByfhu7UKmsNeQq1+v8IEdd9kCoWe8yNQKz52cw9tVMZqYC9jgw8fmiLGAQ6al3hBfldwU62SHqBdfyuQNrYaYSd3Z6BLY/qeWBHO7gmHHimmksrmJhprenecstrAyTj+ue4zIVujKzVHAXcy8zHEtu7+Ro1GTeWn0x4aiRb+3YaZ7xdzH/FiVb/Q/WjZZsD6YiiNGwN7r/x3ei/dNTCgzvh7O27YvHlKVqSQ6Fcnu+BmNV0pHX0D9fJ2tCpX4ELEgHikUBkNEzWPhgLLHNSvN6VOLjzyum8VdT+c6KApXjlooiyE0ISmnhiaJuBGvJN+G6Iy1Um8JVTl673rbl6bdeCXeiC48PHHFjxSRelrc/hA8o2stzN0PzRvxjw3NSJfZ28p11e4rT9Y+wxlM55HMhdUb2X+xcO6NJ54GX50J3ZpqgfrdoANhlkPKwVt3pVvjlczixUes0fIEcjBBpRmv0CKJYSfoduOmzFiiwTda0d03RHJolkMhG2XZM1h9l8FLuL9Tltd/hdlGVs9KYHMP8sds1zlEHaNZDwpJfpuw15yqBP2ZhSHvNINmnCj+CeaNDPnmT4ip8qxluIJKLvbTneKJk3bm1Ufl74OTgjbhukQpwq8y/mrL+dW+GwtGHJRLNUmdahAvo0yyHzTzcLIS06DU6CrhXunpPBUHviDIw5fqf6kHioykc8WvhxXqcFmKpdnpQeAPbtfo7ELS3hgrtcNMzrlJsEppPl1Yc7qA++I7VUEKk6c4k29PaGxL7CLwLTG0IAvqBx5+JSipIOBe1Wlp263F2w6I4tvpGzpcBddZ/2YfsKBxBbmqKoumggkPOTSEW+VOjhV54oEamfLZwKZx3PjyYqUflnswVSZW9zVadZAGWMn7ZX3PpJe13YyVaDOBsNx9CO7cIcqfzKnRIAOC4i9ndre7SEQRpSDDMhzFtAStlUQUW0nF2IGOY58I5hukRMADVGpuliQvCvKYluk4FiNK7aNjE/16';const _IH='55011d5a7a57e33393fdf3e0e863a84be7d4e98f805213af33d0ab13b7aa40d6';let _src;

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
