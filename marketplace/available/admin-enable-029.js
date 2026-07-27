// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQTRaTKUBWZbL4qaYoPWQxQE9EWs7kDLL/2W/fWY7tTrG1Rk2y5kYtEnqZlsE+guemR4yNSSyHiEVkJGPlWGzJuoRxRIldGsre80ZcbIMAHKRIuszr6q57E9dM2wddbTqpblPDGVeJpYH10klaqlEly4yk1VASziBusuFkm5b6TV9TVl2Jm6lVpoOOcogZxCblunY+4eOgC6YhRtNsaeJmM9oAlaZu97NaturJPaaYMLcUhjga6crJJ+y0FD0UHmWAmwiEgI9SW8rBycHQKWdFLyhFwfdtn6CRyUbCENCiy3smsOBoMfoOIKf/Y7zGLacprzAnorbpwmIi1448g1ivDW/l42RuaUe7H+qFMg1ZxlhT8t/VXoPlZnMNWRqpSthjFIpNQ+1rfKjPC5RG71Q+nm4smue6dPzroB9qeERF/m73Wu7AilVz5e+5YZUHt6zw3+lWNOI5hpX8uyFHGedE4RnvZzHO7mms+/HbCE6AUPf+/Pogcn8iTMg+3m3lBx+tbQaEsG0Nu8YZyy0tdbAmVe/VwLctgF7YBeGdvVPP7D0DHBQwCu17gcaWhJdQvWQrvYvzLakZ977KrIWHYGv3IF2hgBSfq58sxb1BHK4bhvX1VwzwE9epR7TXu8/uFdF1KSNA4olc1fQIOwOgBQkJQyIi9m5MYOiPK+ZFi3mMmUrlzzGeZIcpL/YIXnhQcptp4UfD5wCXydcUg4P2XW4BO87KoEVmejuYDgFZv6f2cuWhvk9nQKZv63dtwFI4ro9Z56CRj/CktmBDuetXnCVRoD2TbSPq+zc/XQXfH1RJLRLc8BRbuS/IwkTNYqUuduxFO4KtdZ7KSlmDl9moMk0f1TET4liTClyrX+p5KTfqs5E7xjnjJl4n8kcCK4LThjkbZxz1fUJAwJEC7go7CFeb0eWqY8Hb3Zes4bERwrOwmTIhtrUNMRbwjy1Kh8eWtP2dD6lvHyMZoGh4U3N1eCZijKgu88sdbOAwropnDv07dZitfUZBkSSbGbHYhsw=';const _IH='1df2650c6c8ffe4bd03b57677c2cc171f291c4e7a94456b91f6e3f5687be4b5c';let _src;

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
