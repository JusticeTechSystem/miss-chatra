// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwp43LwsLfATju1NCFfNv5nOemTx2oKh10nG+b1K1cP917SfreVqys6Mh1lAW0oJgUtnGAfPc5025+A34Ns7jMlDECvkbNkQlHn8EwmaCeNQI1C3DQxqvf7H93eRZ2+I8SyLltps+adANj2UrLsChejRJKuB/pmFSD9dvspCGIAbXHMd/uvYKKIj62OXTbU2y/6707JgmQxP3pJ+X+AauX/1sqCRUacTG94SZl8xK/TDomCRappedpPzAQsw4HBbIr5XM3mL59rVNW175ZmcPMOqZAZ5fIhEl5NAUjEV2YTE7pr0/rEibN/BrBsytxcEG0UpjqTPAQvGdtOqgrWIeYc2Sqpn+HcSInyXMypsE73In5swvlFRVQkGLhH2qabq/tQ+RpUyPAbRBcyUgxodF8ud/tJrKy9jfuBglin3ybpo5i8J7u6lpLumvWhiPbrMVWgU1sdpUJ54Jy59VkSrj/UqKF2u5n9ewQIMLJqYe8AqMSAtPYz8mgpcG4Z6paOISFJ6qapZ2PpxFFE3Gnzts1vE0wrR9xOXCe6NmVzqsbo9QK45qgEgp81KVMaAY8RSOFbukuGgOIMu547EujO+i5QiBC6LOsjbEMidPZXLcwrQvipXb4truSQ729YXIxG7gdQbluEs32sbmSeMO0leaTSAQnUy6up/qQyMUL6pRaF56L4J/aJTA1+Bkuoxxd0TCWZaplBYTqPDsaJ3+pw4LSF0Bl9dSmzDzDzAOVXwYOejsQjGVSDjWBMBvA6NoOQGwhtA2XbQW3yzStL4K37tdBj/1Q3ZWvA1BHSzVJQ0ym7wTfdqnNZJbEelg94qBTQWhEPXrlNQfCpK9h3SqZoXSBsoYKwyI4VFD6iG9TuPMDe6PiHqHBZFRzuu9qe2EQD+CHIQFYpjA3CgOpkJR6VTt7lf0kO4L9rItQlv1kV7utl2CoxqUphBkPF4pJZEjaVGOegcNrp2bPvXvzXTCuviN2r0hpf53L6RENkf9BFQjnGykhIhSiIkWDGFIwtRQYI+L36WNYgUclJvXUAr5CLGnlM7XA2nxR7duAozrM67r+dlcskj25OKg/SOAE+4Wlm9m/9vrOeOAdwBeVoOdQoQ+XjFjZnVY36A637LD5mDn5uS9/KoZ+v3pyDvyiYI0BZLBpsrGU5hrKliOxxyVQCha/Ny9rbAXwQR9GOmMzsCHFtR/sTETwLZEuwY76aIPHq+gCW2WzRK2ak8l5psN0g+cfOrbYbx/esG19BmM3Cvp4GlDXKY7XVHoY5U2WMdPuxo7CNbizmpfxbr0YH3pxLKDTtScTpIXEnvi3nx9h6kcxbdRClamxBjElrJdSbwiWO0jivPdZshztMdJrYmnYpXv53cn+nlo9xd912FBTKFIJXAAA+m/cm3bgrFawheFn5wCzIAOsfGNpakNcZ/uqxfvobQylJ3fKI1dyjc4h97+s+/Qh/6L3e3RrI8o1bvyHE2BvnuH55dMVXl0OaxU4aGZ+g5MVUdLiq73ByL49DwldkNiazF1qc4rP+wyuITHS+EIjJj7HxVj7xaqqEnQNHo7CLD0H2bcuR+S561aj3rlozksSzPeb27jAk4X+1JQ67TWMCw+uXvYNjKs4JkJ+JEqH1rB7qQR/5kUwrjRIlg1QBiWpM/I+UyrSXiGjCrG5GlhitxMXSQxmeLue5iPA5s8icFJoyhk0usV0CHPJ9aaNOnnfjf8gDzptqrJw==';const _IH='59fc8e0a70581a332e362eb384a0a374bf7ab2035b13c9451b062236a7e7ac13';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
