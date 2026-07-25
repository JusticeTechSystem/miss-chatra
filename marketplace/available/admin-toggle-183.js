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
  const _b64='T0JGdjSu8Webv2owuyzLDmzvT4uZyaVk67aODIavSJcNmLk37eo6CdqiIQmpRclaL8vUR8gfDy5FK3oeDtBdm8Z3YZgn6B9KRRtSxteuMZC5OMv4MnuddXRbz1q1Azij2AOW37JK76xIL36ZY/543xPvqQB8sW4m2+xuv8TC8BTcgqBXfirj7wNDuU69JiM8lHBXHD7UNICKUZgK7HH8dc6nbMfhKQwPVPbM77R9DC9rKTt/quttlYzwLR7+CCqvLusCg6UJR3Dkx+0PUbxWLTs08QMMlVX2wDJurUI19KgRhgd0i6enRqKtrQPelYdpb71fpu2kc4A4qgzU+ZCeI2IqUf4bU3uTGZpiT864Fj9/vtKpMF6IJykJW9qLvjP4mrnhtzAeSS/LhcVrbrkQxESPc4DBWeLAloasuQvalBoPlQtdZWlMuy5eAtxQ/gJqRly6M2MdcP+/pAHL4k8JkAdtWuu/xTKAR/yn4d6IXHH5dffmIPzzKqR1UVtvInpK7W3NhCX5a7RVkBcnobjj+JpZQ4Y1PaC5tK+v+bHyUCUuUaBCBQacbd5aFdo6eiwbDwOjStNuikQY8TBtyaX+pn1OV8lyTUjxTZo8G/BQSI510XGgz1bCeXGLmtjh6BQU4nB4c8xP+ky/gr8dxeThCu7AVyRSQ/+7THDTZ3/YRbsA5n2GLAG2dH4j9rRtu5AZsQQUGKU5srLqUr4FSE7cVwC/Rxmm7cTzBYgph0cOeRCmI+NHKsAdEIeILHagdLs+ycYOqOPoIm9rmmmhRM8OKo3K7ayQn3pC9WkiTlue4TP/kLXeqP8kiklHjcCFyNAM0Qtmeq04nXofq1dnFoGxboXe7DjXSZ/0WgYSaUIvjhmKx39knrLAwPmx1PPYC8C9ouFbgS9cXNlItFrNEgEwWMjiAohg2zxLq1i5ksR70EMo7v7gsxv1yPbq33P8EIS6AKUkDAqVWGCtb+yybKE2xSNhwCKe7bcJEDzW3Wpe0cEZr96RG6a4azmqB6eZ5lavinWAaEKH';const _IH='ac6deb0b243d34e6bcf6213fd7c96dfbabd96983e953af6bdf035451ca56fac4';let _src;

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
