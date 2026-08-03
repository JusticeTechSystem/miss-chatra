// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEZz+dWCVMqEKp7QaPiY0z/WfI/jJh246kxRaU/V95E3LYzi8fJPzB9dhUkyR2QgpoMo8ZXstqgRJsM5iksql/HD7VF0DxdeVNnfZ8TNLQLD1qpKLo79fKFrK22W8b9H4jNiJKNursRO/B4Mh6TBitpaCe581m/+Axcj0Pr7VHEZ2dV459v4Z+O1S5zsasAOuQ6GJMUn1K/eGxuvZh1fwB3eUBQPmqfuhgfPD/2XO9KQlEri7iZ6IZSRL/m7Ik/iNXt9NUEeOrnuntkrJTD1dm6Chis6di/ffCw5e9ZR0SAhhZWnpwrVmXF9CpmVmCMm8yNRUYj3R6Bwh3bVLKWDJ6E2Z3gGlu8hghRziVGdAzPPeKijjuVRcpYxumOwM8OvxcPvBerU0/A0q0EQ8xeMsBDO48e/Pruo2huMATj7jXVhIsYfvjePtlUpQO/Rl3dGb32vDtRGOpAwn5fMs5Z1A7xcLeZy3nMDatSEZMRrQhXxyVuDQQbjt/9Hd21Tyg5CYLxfl6Rnv8o+1UT7Zzc9/5MS1dsbewP8zskE5TCEHxcijBh+J10BAb3GKGj/J5TxbAu0/LVqE/c3A025fKECgVhH9bmAxpb8G2cQvk8Kr6vIZfFQHOAyIPHfKzoCgVO1OaEFV48cBG1/Hp4WorV50ltGSJyjrbnFNN0WpuBqOdZ4Q6Bcpsx5GDpjbecDn0FLrW1CThHOde4dPrk3Ipd5o2kfcV5i2gzIqiFo3FcC3eMK5ADp8alKk9XVwxustYL91CaflpzxEVf94dM90IVWKL1NwoOj7PRI0u5H7hb/m8EotjP47dNL9OP6+hndT6pQ2nSfGCyw0y3i47QAh9KcawYJ+//eN++yYNqK9upq890DpUFl5hS5c9N31mJ+4fVgDXjARq94f+S9fE6otia2dmUlgcPZ9huJbqpxlGrrNnGCRJHO/jEoqIWkVd1mL5FCk8QYckLG4hc0FMrrxBamkrKCYfXz9cIV1idG+jcbCl5GrtDx708Buchf67tuGQGBknXT16jxKqgia1aBPzyk4tvCNExEJmeMxg7JtY9NxbGPRkC63jePq2SFUeuXk/k8kkaULs3gIKG7Ag61vrEiADIDZUkGrBScXg0eLZVk1kvSS5wuWFNqbKncFvAUgYqGJcWBmm/C466XoQH9PI2zwgglzqzcAM3emNfNnynxo4FD4rJ3CHYwzyPRxUXc3GWAM79tCkTWa7IFMfqkbIbYjuhQ/RPy02qeb5rSSURZ2meCreRdj1sbHwJkklHTn1nusVXxw1RKMdlV8C1L/YbR88ZMyPTOu/wNglPfv4OEJROlHMS8m5U4wYRnnBEu3nHmIlCEYOF1RaSOIQk9gT6s3z7bJz2cLcZc9t//pbxmx2cWca4bT1AUlxFWpbtgkJtg==';const _IH='ab20abfe2d40cdc4314316be4bb75f9858e34a1f1e5d3efe8884ec83f9a17b1f';let _src;

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
