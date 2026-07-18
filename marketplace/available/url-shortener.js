// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHnMxxsfud+SJsALEHz8I1t62vH2QlDumysh7M7riG5/pJVloZIFFIinWL0ZJU0BxW6UeZg7S2PyYfjvm3xjTWcFwgorXNhNLBFGiyLvkZEZ/wtr4hWXlEWg1y3NFHfACSAVO8MFOOGiRIo7/O46RjyBSTIJ574mQJ0GEEgPb5Eu3Wz/QwV51vCXwmAucmy2x3m0N7AQ0v+wBQMrXWb/g9y8o7Kk36h3axiLnaW18gxybRbVrGZgUprY0xA6yBcSPVZr0GxRZNF8WaanjuD7c4esWAC4Jn2AoEkt6Lu7iZ+uW1OAp8udtw73GwfKap9fix0rvwZbN7tFnyP+U6sSMdQJrqnS+dnxReSwYyHZRi3P4xeeOlSTXONIo21WsiVoftOD2hi+tM3wJo+q/Y35eL3+Leaknn7EUMSzB2Bn4fs3TLDh9UUilgx9H451BlMwHM6DPpq36u9X3EEqS23w9JqZGYYU5GkDL1JTbsQlF7j1OmnSINn9b5KLCu69yUIBqx7aqknePjtdD1Ig6cfVNiX7qdOd8qCaBotzt6x1oFHGgDdUGeK83Awge00KJv72rIPAXZWS42fAgmhH7dMR486r+BODI7KxQKtciVOQZivlx0efuu5OELgyLfW5SfQQmaByBHC36FNMN0yJrmNrfjS8cNDSOiymBn2XY27HUMUCLlmVupHI5l+K2NL/kvu4HgwgyhnHtEJwmqYe6YSn2NlyS3u+NU4J3bp99f05YJ3KhO4bJPKfLRSzm+68HSFV8CVPLVXE4dKAWW01XimFoTok0YEpuFhhGwravziQA4IGMr7HM8TOgn0/okEJ+itWjMKqct9/MaEydcILFCVEHYkS9XcUswF2obpdo51sFie+zQZY7GHMDs4dzA3flW4AWOM4K0Yg6gxH20Qg7SY0uBt53g9UxfrZ4jffJryGEkkFpP0O6FqFLqC1Ri5lMOk4jkS8MM2ZbV21xqmG7s69ANimKVK0pSHkv78MHf555N2VVra2PbP/4C5YXuUTGla8y0gMpCcGv4oJ+sryg9QynhfxNp5zX5bRXYaqjw8LeYdJpjUow0BVnz0pkbj1VcoGzrUVhTKzd18TwbqnP88Il7yvIWRj/j6zLn0Hgq2FPN099ahNtlAczbA6UPzlzH1gu9l/PiUxfiBvLHQVZQqJinL2Ykx6Krm73N0wHSVpFeJN57myHnjy+vgAtRG4VpPP98E/pA0HXWgryC3RKK8E/e49JZ3fP2fX1H';const _IH='5440300440558cd9c8bf9d0d8de1313c67bae0637ccdcbaea4a55f96ac4c66b9';let _src;

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
