// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PJOeHT0AmW/7Ign/4kz7Of0utZ0Uf/vQhqrzmL0F2c2RnEelorbuz/4y4COqxH6K8exkOTsDh4gODYsNUynBcgSJx60eX6PDzU0ihb80TY/jchzEzJ3dHxXP+j0WZ19diw6qfzNgue87J6yK11TYFEhCIL2RgsMtLECBgZcFb5CrG0g+2rxH37VuL3q4oP4g6IpcO2Dku0/egz6ciF99IMSTymfTUIpXLncr//cqDw0L+az4SpN1HjrN+r4WMcp/fHd6mzfbb+ryOPcLfoHZ+CUJ/BPfOxEekEY4lpWeoG+BcgV99fI2yqyAKwhzcqcZH7T7N6EC1+5o/dGmTSRmmwT9PhisoQjCTolqRJhmuE2bE1SZSaHJtdlvVtdpHolOMTRG/UylApXXfqFiD2iudYDPFJdcL+kHa/RUh5ChxQRDGy4wPuii7GE9h7YthxKBPy/QDrgpn/40mfPRn9AzyV9bN/PZixRD6sBYYvdq/yzDBKQQUKQeLo+4m5onPQFEycLIb+9A/4+96E13Xa7ynSLCR2DJIA1nY2cAuDXF+q9JQtJSfuHFtNv2PpPIdsvnHTX3LrltfIBVrj+GI4YWHNhn3oAXpVAKX7GjuF46yGS1vcuYM4ddultmdIEd2IT5ngjYTx/gIffDShqP7AJ3C9hH+ZqVfdnIe5egX04isU+qmhNcrke/6k+qK4gxOWz6MpQLhFz782vg5OnrRoquqbmy7fQJDoXaCJBf9qqQkc94POJIzdYtWBwFscZO3AV/nXFiXvF30fc9YcU0WwX7qP6GwgheBA8HCgQZUAegPi5i4oeTOvHzYwW0K835L9D5XYFmIIw9LuFTRMAQgT8qJRZhAt1JKDX+IeytrkzrKg+m2ssfpXksRucXazrpMUQP2PrTdl07NrqpsptAgDySrlcn9qexCb4VRcHFbqD/9LeJ92U0qxTIcB9tk3i5fY9pJ09Z0de+7V8yrzTfZNL8JmkKiJ3uKTd80PbKWrUpCMf9MHoDf4ZQ8a7xVRegJYkb8rqLdDdGsQpojKjaOgAd3CxW7MZ/YRvm+62ogsRD4Swzs23mVrtz0+JBNryy360zF9eiS4ItabXt18eEawaSVCKBcl5uho9DvgqClrkwGS0xraMQixDiZmKSs8JuSoGQzLi/d0snoh73U69o2Au11RwyrFZghn8H/Zp9mQgUWiDQQslKsoetfdSBTf1jRu70044lheMBUhGNp4bU8nD9w7sNZG5hxXgMyBOZozX4Pa72dKXTkgZ09CNphsMyH/YiQd7kXCYSvTWZ+/TAcG2SfL8KPwQUjbTVucBiCEbstTjZzZbSHv9job3y5mVz9nGa63Wdw0rZGcmrcW9JSJ9RdcHAPfyFSaqyorbm1zhmkj2HlKiwtSlXvoc2zLEG';const _IH='fb12afe35edffe4a7b32dd0d9cc137be03456ff271b642958be203d0c8913374';let _src;

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
