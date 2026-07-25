// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRU0JI5OckSfkoryC7QoC+OyJSWKzRlloR3jo2R0pc0v6Stio+5TMCVhYO1L5jmNtX01CezFOt/LP1QRg9RhL2GVFJHLOvFCaxU1ILJXkrFplrJMkvb0GeA+hDdYvu7XJFbEkpHFigwtCCOKXIRV/cxH4rbQXQgZaEhB1+UCsdyrw5CxioiTJjJ5QPHX+EGba2nLo92QiAblgnvq1WWOZIJH4YKTmUbis9+ZRHSxBl+ovRFX7RBiD6gEeeRslBGUwt5frmhf9CR+Bsi412rK695og1g1MhyaR2bG4BmU3Bqk3qiE7LDSJzuW8Ay7eqOUNBZLj5s8Nl48pSKHOdOd8gsVYIRHchgh6nkF6mZaOuQzhQnOB677+wpbajMeDGP1t1ZuPB44Q2t2NS4xZNG70KfLn7Ps1P269tWPSKv9qWoKUsrQlX6tu3sCdvcuACyHuZONOmZTTLjtNDmgqxD2N3b7qpdU8LGluzN08Wjd3lvKOpBpNcMDYko+g6WPZsXWDWuO8Nk1JoU6RHIMV3XVu5nJU8sOn7rVrHzmRUtMQYVJjz3qKA3WueEJ2yF3L5ZYlPsSGD0NVSdkqLUHGYn1Lz1XAD/Y9vu/G+Gwtwk/+jaS2UCU8Dm+0ssZ4WAbaOK9Eu0bi+xvSTU+zHThRxfEMcD9X8eKp6eMTGAXf54DPvYou8o6q4AtZQgHydr8ef6n0u6wDkVN9uSX8p8l0FCrRnJUzOA0skN31xhFNX7zAcS5NvbSg7JiCTrSEB5DvG0jzPBglL8hbibnqY9ZPQ8RZPLkcr46BF47ljaPbvXmMiQ5ZpWG2HiL/3miz6zQDQR6WC0i06ZeLPIDCDEdoIwYrVk//E6zuqT4KRx2zzAZmVNE3XqGKufZWXsjLvd4EiIoQ9YvjEE5P10y+0ok3IyIQ/3NM6gvSfUIjYcATjWZC+n3aU/2usmTWwf5hrI1B8xYoKv2xRVzcikrFi29QlqLQLjKxphixfwDypiAgYptkeON7+sSY9x4rVGh0LGVGuJ9CQ97YNLs1z74FRu96TbVrGS/Q2lKZ0Y';const _IH='60deb0e117a79eb3092cb02d29b0f212d8313fb98448ab68dc1454e53434669c';let _src;

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
