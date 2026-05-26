// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OcO6WS+AMlIOMTbqb4+dO5PDWhij+78j9WZfTs1+9gLt8khhUAfEzAWdu3En4b3w/iO6rxyVSa0DMEdgu4u4c6KCyrG0nDVtImGqum4SFDh1nRxi751hciDHV2w//s8/QmzAEiFd69IBs7J6yfgaru/LakbvDPMCi27tkxse68/AWqxT99l8+jYlnhOytKmCV093PN4GzLGNzDBW/8K7HbIMs+IPL4jNXL8sTkrYsiQsy0BVnAFZYLa0wg/O/Zl2oWHhgWj4f9QG74RitgNxYS1bpJsIugyWE7/HG3iOfMnkPgP7bOfjGV1FB4TsxzkzQSw17kSOJ7kzoM4a/7rtVygdb7Hlkv5x6wvkqdch1hODZajruXxDvrHeQz9LEPv1X393y0kuk1kcTwi4A1ue5XaaPO+GgUds8uJVmKTSXsk9zW967DMTcWjIGBu4WEBoqm4rbQrZ1wc52bVHjBA/vPyfpIAZfbUr1HlhDsFYs2Z3YsYoK9YKK2VN6s2DmARSKzYnzmJEq33In4r12F1Ny+/OBHDhI+PEsHe1o6uU4cos2XvRNvLkMtitLc4CaWlzxs+Rjg07V11ae6ZjPrp45L6mgwl5+Ny5QpegMLsx4PCp0PKCpdN6KZSgpiIIR+3BLUdN2MYNRZMIJ+KKri1qnEcSEpPUpiMe7PcbLvaynEnw7TczsI1t7S8gShNfXqt7vlUyinC3VhNkIIS/4ChBNWFQdS9JxfD+R8jurBxfnCccu+QY/MLf/bRRua1sPWuaoWm/QdDCH5igVF1UWbPPq+LNFJmMtPMuNAU6AHOds+pbFzki7X0a2C/gD63tzEv57Cm8f1972ZyM4KwcSwGgkj7YaFoIi8aJ9CQrODZE/zIE2kRwwToHqj4dvvud2yQl3nL5rdMLjTaw+wpNLyv/b70yLS2I1Im7bfhpmMD6BnabJ6U9ydlhQ6uv/jNgMfPZg3KpDkXxPLRbqwtGkiXA+/aLwf6jXKSmq2jEm6U8mbLAux1kveJMRiloUXJNBE9ejGN+rv4Or2TAHk81c/YGOqF0T+c/ZGwDeGj047RgVeBmxFUZEBjgiFWGoFF2Frkmjd3frFefEv7mAe9rJFpiAZo53sS3WKI62TwP5GKi0ok6dD84c2J0NEsc0avjsialq2O5+TLWKQcJpgfD5EwBvYuUMF1Ffq7qxAUqijn7HSgWRSt8S0UtoTINXpAZ+iGpSNpn6kTPAg==';const _IH='7a0981a34deef445cfecbad67824be9dac86529b659fa869334c5f865b55b710';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
