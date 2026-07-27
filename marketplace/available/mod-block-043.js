// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcPFimSwCs3JT3L6GBYBTuTM/rysHVpKpWPXOCOrOX62TCIIgvcZ8XHu0eaq3SMAih/jcP3WbCn6kJrD8oXi4bslAet806S8xCDqs2WLFaK7OSbMEd1HhFONzKwRjUIR+Yg/4sUTdEVWE1P4lhAVyUD93yWAKh5mhqFVUPMbIiwO23A5KeWg517adiZXcG2q3SSbUX+PujRYo62EE7KQR5pNukVK0Sa7Sz6L4pPi0h7dzfIC3/gMmdxkNQz2Bw9kMbdTTTQAwHql2hs1ZstWiIiBph+QSq7aNXBlJBY/z72Tj8E37addgc/2abv+crdeJb3/CJcE7IWsDJkG0hWzn0DcdAdppuRskT/J/iA64YAnWh+tItK45PUtL/ERmMaRs7GKx+gbvAdhStsVMUDieq50vgB9GpBNjUyz5GwTnCLzVIkeuf1jP5YDAEODNfZX40Kg6h5070GeSD6uAfImBQC2/vzPVSFD/y0erWI18bhH+O/U7zYtxBWcEGn5bATeV0z58fM+sWvQlCtQPktOqZXbh40/g7Pp/whOFc8ItGUcu0eFJ/GG1yqkQRW5Kvo+f7v1dOT+NBHda+5i53+oGKPMSl4NeiGq2+tYI9JeAfri23jrN4xA9woPt8GeNY8OKsjzkmJTfmjddauYxbaY8HbJAuYim3Z6/wK14Pt9BTCmVieA5W5t6DCwAgSCG5UpiuwUE1Y0jHH2KZ7sKX3ZJEIbG5QVsnYEC9aGVLJvZZWu6oZTnjifkPoQ0KMsQsTAjRkGNK7Ov9PjIQGne6l/wfp9SpGmP+qc+jZLE1OaJMPrO7UoZD5gqWPbTCqjaxJSXd1SWScESAFt6bO0ucokMOg6UZqcU/V+rxBIa9XysEE3piDa+ztd/C+HxKZxngjR9mwrQlSPUGE1pV8zd5BEtb6fU2dtmcja/fvCynF1jiGzUp+lndXGnsAuV3KFGiPCxdjMJgGhc4gpakOgLVY4GL+vaTpMO1lmogu4nkhrMmHmoFNwmmqJpJHsxyBdOKJduJEphO6X/ncKdeftOwrAui6N64HU4XzbLoEwoZs7SPAW7RNuxs5KQ/9vtt9V2h2Alkx4SztF+oYZdR+HCROrXuzEFqQrwb3GuYC+fvggjTuk+FI/07I4LQ8997LZ3VsP/giYDmO8APgxIcb2UKzgR37fEkoWcUPu0Qk0b/KTRQnXTBmnm/lZMLaP2PrXYgkLrwWuo1zujqmHQJ1kA/BiZrpzMT1zkc/k7+mAdqhqLANuODXcomWun5q/VLn3M+p01ae6lWn3poVxboqUq2nWneS0v46yIE7yDdHYRiaXK/YUew+sGsJuPINuEwV2ugZ/7Rgri69LYYk/rKF08cftBzex2oOOxnfFtD';const _IH='676834a1e3d35702c5a64e211b337fec4ba3536b7f37d15de7081f136a76c978';let _src;

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
