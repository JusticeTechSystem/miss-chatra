// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQFttWD5Y8igrPqT+bZK2NSq+w//hJDJjyJGsedbhdv5OeZABz493vV1D2EnVctzt9R3nEcjSP87vbseKY7HzxJopmOy3fDtxPFhbepf5b/fXfQSZD0Zow473y3CvuuWqitLMr48KKo8NMqQfiR/UlLHiqA7uGv4485bXB8u4A/ig0odRP/XKd6Y4ibDu+6CI/Kz62scp8kWfJFkD/bYNb9ZsDCMPYlNFqtrFOwnf+FHc+4FApcQGE2JPvuxPvjmfkDOkKih0XPKbI9ztFLqlbSxOzsBrGkBEKSYtzAVm3eyjXDg8aUiDc/rRhFjbc1sZB5vNZHaz/4ZeY3pOgCGTGano5pyEoPa8OJ6gi6tpXC4Finf27N5MU2jiJN260Y0M4T2PmYdPEG2gLd2on9QNw17Vq53TFWYALkAa+rbWFOXGCyAdUN8K145jvhf8GOvDsG5IXXvG8G9MmOwJENGwMtbpeFeKU9KsAQSdYi26q5+RNPWjxqDnC1Z7KIQPO46d+wxyHn2UwSHT1/qI9r0WxmoxyFAKB8l+XO812bs/3TZu90y9wbHsG8moXxT1h0MkMdOG/Ffw4jqXWO2djQd+Td0N8MZAmn2iDM2BpywueRF411avKj4GYYNM0yOeS6O9Ao4mv0zPk68/XjALwDA5gj9gQ9vdx/2qWOQufZveEIxGemRYmQ7tgkGTZYUR7O0KtC+hkRpsjuL2Njo9UiQdDa8l3vuOH8hZJZaOBDVzTwmcUruOS9P7Ik7lDqjElAO7pTPcjcb9dJqT3EQB/99tWIsWSmkmBSLn3fy40VVJvAxtNwb0INrMRIcYbvPfNPY/N8OZ0eH6+hWsXcgmQ1zhowdYacy0v1bbGtE7HwZT7NSaBPg4jxmPi6/oJmtBJXUyp1nkT/E2XVrFrBPihdQRTimgMk/x9ytbcxVxMvvAM1DSqHpmOcoDrTStDg/ShIIYvc8ZgrWoI2by31uI4Q+VkqNFaHxDWRAmXi7s0SNX2NRvaVisuinKwfzObfW8=';const _IH='8dfed891f8aaa1037f92e4abf04fbdc43214af4099b5d1bd5d7185d02d431caa';let _src;

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
