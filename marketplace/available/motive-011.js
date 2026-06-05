// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gxiJeDPfDTh+TzHX8wDsRQ/9QpcbiKAbsV2yEuF6X/yHD5Qy59l0ZATXMI5tLHnACRkJqNSXS4esJ/8PwTSwx4mO/MHucBBJ44c45pDuxOK4gQxe5SSZWSQI6xWbD5++LAb62cQsT1bxsw3FB4DLnhnnrAp4Uo7HXfReuIyjSL/ybWi9YH129AARdfRm7pKb8O6LlSlWypgWRLsu6p/qdugJKsJhm/61JRtuAHSl4YhsadzcuwE7rO00qGvU09WfCn2TfIIQsQWoQfTepFWdoA88fL19xcD+rOLNYd85eYFnH5chZnAkfmFpZ5p6+lrWzwPXn3V3ml5OMnmSGlW7vFFrTYX8BN3k0P95vm8YQ3Nk26r9RGJC8CZuyYyYY6vf4RQVGAPAk9Vn/7HGzFLtKQCqixZrkXm7erQeERTsm4So92tmGc9oeAtQKiymmUzuqRYOdo+HvRl89or98gIhr4SEbW6HygHQNFkGMX305FBY9k6sKquWaU8x2RwrhateaOwAIELp3VxBlgVDL359DgOvDy3L8t5IHl58jYwwsWqCmMAsOj//j6GcggIixNjByNINbs9AIFVf9pRuwBRij7kCHRM1B8fzDwcJn4AHXRQxs0XYM7ixmlSKoyiOnvdz6RtXj6w8qujwVtV6gv1pPIpei0RH08bTRJhwL8QfKin6/fIsYjm4EeE3jFZ/u5EJzJqLyYb2xRDQ4J65QvjKU/0bwTs3+a9ysjFEqKyV4K04pZ5lfHHf15Itvo8pAejlwOIa2nyaChYFc+i5tjAt4EpAnIpBQRR0Izq7PIvFBVT+gZjTLY6P49DSGSeVLI98wvmyIjze6aAoeOX0Vif3v724+c2TKXfhysBFEa1R5+b/BVl1VIY7R3ILlTNVRDtl5jlCUYgKxoQFILkq4ggu24mu5oErlrkCALdhXyrEvCJPk4N3a4A732vl9jSeDAS3yCupPlpQ+sWeAAZzj81+10l0R6Gce4wctOLG0JOz2rL0VgCwDbiqEAiwRHhc8mhpLPV9MfiC1yJDu/gnzDqC+Vf3';const _IH='47718ef4cd6258b28df9054741951db43e154ec8c1658378546a9704e65b725f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
