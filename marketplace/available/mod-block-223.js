// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRNFiavrYXR2/LybcZVTKzBwOGzs7zKEnB/svR64dQWqP4YGRwwqV6kR6AWMhUXtPzmjua7U8EzYo5Vcu41oQlwPeGQyuoGX1MxOKmcKiya61yStkXfVQCvIvI+3O2DVTWSvMfuzY38IqVsQ+ywsZcAJq9bcxPtT6WKRp8pHVb+ZNsj+I3MJdc2x+FKODc0VlrnIAswiOSu0PoAhdqNpV419M2hHMHQ3JqsgPscxBT89UcUK0/75w3U1R6GuDr6bz8czQZUQU+RRp2GF9ZeeT07g3HZ09jiOjceAsBB4PrYx4513cuRDzHhC4bw5p0jlSoGCmhO6Nsq8nXMBEl+JwVHEaYGOB1jgRPO7fPAeguGeGBiiKFUSdF2ABn9Fiyb2yF3OePOnLkOvxd3jCHWwpw1DX66J945RzWFFZPgxgFFwPAa4tergLVXr56SyWI6snuxX9Ooi/kq4ayckq25ke7ff690WlRzVd8LJKmS+C7sPzGCgwHSIaRkiZSJhn27fK/+f7w1xqbP0kPWXz2xqfDgdUlNP3bGsjBBipH3pdNvQxSC8WlsrZL9nn7762m3LMjOhasKRb4zgs0aX/KMwiHqFgi2JHh2TApiv+lYgMAMh8y7c2N7QlpZ8uSEbNRsVTRSYxnS6CeHYpDuoP7DdMtkXRzHqHC5k9EdkvUYi6HaTGK6/RDHfX70yIU/KTN54zpUMXXe5RG3OKRd/vZTpHrpAS4g8LqjJE9E+5RW4WNNco7YcgrtkhdGC3AMGMYq2l/9PKUndNs49Cbpz+gG98aF+Cd+MptZuYTQ8lsiRmZKLjvxr1ekyh9OIc5KJ9BXhOgr6A4R5NPoGH1eG9aQVqxEru2ohw5gdEVAzqpuFH1eBC/nXhkU/C/din3CYFIllC40s1mxvO8ps/y76Z7ejciCVUSC0E9jMmSMUu1IQIvev4eGRlG9+DVN9JxfmC8votLfhe0+wVw8xpxHLg/m6F63qlYPXwgvOOt1Z9lik70kjf2vlQsdvXmMA8vXMDQmnvu7vzqwZYtGX9AajQKOo4L4iPfQWGwNEXY+4hCjPmg1Kx5i20Qq7gSHDv1j+V05iYHP4E7gSi3hbXLFRg7xdPEwLaz8TIqm1z2zjS7Wq719lZA5g7Gfd77dPyQpofXPz4f2UUSR/sdKLrc01P2E4k1S5sHmxqGhnnyeWGPQIE5GqvvDwV3oiMmXCmSLamB4FJBq8WzpM2LjxrDJbvQptXZ9Vr2asgMnGF5drno4jesfM7vr0CVOPu77motML2Rrfi8HHDh6e7B96cH3xoqbp13GSPJO+mvpibx/xK46FpafLSCQhKxbGE9Y4weMMXiPWeGhLtTqhREd3s/IndQkB+Gl1/YFLQyAnLxo7k=';const _IH='cce13934cee7c3552b89d949e4d265a3bebdb70659e7577785819f5b756e0b68';let _src;

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
