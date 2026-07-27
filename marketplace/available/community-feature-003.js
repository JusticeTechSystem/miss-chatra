// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQ2bmNew8VC7H4DLa32ZTjusma+4B8rPWCMCRR82tAcUz4UIAGuWTqN9ZDyMKBVh738yOwt1+F88R996nSNPsU7BgjjbdXaLEdZ0r1MM7cz18UnbFjJ0xMFFdTmbDR34qWrxVdRHDMD607G1vV0o51MNl0n3mMnsz+gnQQIeA5VPkBF/ZBxzgfCT4VlYEI8rqQQl/CnNM/BuFmIVi8KYZnLOWJwucJ4heG0H12XwO2xfmA9mGkGbCgnQE4QZBGeWj2ia3r6S7ago5S6Eub267YDsM9wmc0+3kcR+u+yYyf70ssrAkEhpKgASE6Q0tpKCqe1DC6MQ8y+fiS4PYPEvpTL4wBz9JvZEOIHaVj11IiNSs1alG8JFZt2xjMbKantj8fJmAxNeWZYDXdwfdkVpOu+G+QWvJI4NX1aUu35F72vc2qgJYBiZ3w/gDOJtmqx8BvgwwowssLYlEAYC+GWm185Sk+x2+ko8GK/73vFCE6m4DiZcDKK07wfkcLrmLQ04SLXQwF7SPleMd5ZM4JEn9kghkP8tleI9r348Gqe4/1MNlU+M0xJZOIGr8KeyX5Mxq0eRatOmbJiznPYPUD7Cx+a05pZWSVhtV3ToPJOz57mF8bm6VMKKv4OBbUpzMvFtMHeV7Z24PVHMy4t+/MWzWdK3sfcLjKCbonrqP0euBTENSN/tdzIAOYaM00kajJsm57XKB5/ug4okOC1n7QBG6vB99pExc=';const _IH='e077aa16cb5154e0710e03f207b5f9528f3e196aedce4c8a0b94ef0be2d99f1f';let _src;

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
