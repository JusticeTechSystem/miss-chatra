// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eWqPkJW+PwAS+jzB3qdQS+yviFW1l2ECWKshOTotcka/Bi9hg+pau49/hytY6wWHrwS6ldkJtkSQTgsQMr1rd8SGJx6cXM/PhWndYAdH8nlSD7I1kjSZaRcJtX7p65mITsQAYg9I+GpAoc76/T7Mles4aKYdfHhFOurE7WzWykWc1DXint3sxeiFDdl6FE9MZTw2QBYHx553XAOL8rf+tk1j/4VmJqfOZjvuygu3rIOA/9GLC6bRnIn68pPIBkiZ/V/XNetycZf/wNK4eK8IVsMgyaufS6zgVJFyiHkiUa0WyJawkzWE5h8vJKB6SvhoKNhTEoYFWd3+iR3nhJ5cmaMviUBwyF6hDOo8eEs6oD4aW1R8B6P8TFOjDC948NwIILLiSDiCab2aledAN1dJUfC/92neuWJDAwFBvNQaruaE4WwqXNNq7J8nHWVKdCX5vZPWI2MoOXKuEQd7OrtG8LOz6wzC4xpfD8rFSVC0b3jhnMTTT/gDb7s4ZlL37U6Ga1z/EIvou6ci7Im/BLsarZNS4xTaGS0Pix/XtYMU84Lunq2I3/tJcX+H06i4QqMi6TbMEofWQ/w1C3K53Sl+AZlc5Llu7yeCQUq/vrbu4eTwagsMsICstCxkAua8of37IUuJ5WBRTQUsHii8hFN1RnJtAVJZBgpHG7Ymi0pgVZhJWFTv5tlXIz7um3Q9OvS5ZARdwIk9Dc1OyWFTVgZvKBRS8rQErHZnv1e6NVYUiMpTwBEyaBOYB3jW3gjJpN7Lei6iymC1cCJPFI599ax1VsrnbXCoZhk4c0SMUJnb1B+m50mjcHQuaI9740xf9wfiZEfexyidakOyV8HkkFuSwCfGcPo4pRmQChszBS8oTJbHL3yexxFOweEPV6ozDzpWBVp+Hu2B3DEfEypq+ryQL1teSRQ5duf139gA2TyT3pF75ZNVflKynl/3lNViG41AWcUrPV9W8ogSX3flbCq2/S84YlhmZCpAwHU28gXYX8H1SEho2e+EmMMvuNJPxkAjcIQ2Ns/+n94LMSVxrBEYRLNaDWyhZR04nb31NEOF4dwUdDOO8hIJA8+5zw7+Q7hpDDmChks4PzcP/NVtBZ75UOf8CY5v6ADUlfJb8JQMSn2kusvM1PvLN1cuALA/ciYQRIjklSt3QubjNqLE9/nbUkoc/w+Z2PFTL9sFX1UReSfEV6eROsymFBnTjjSPld7lhWOKglTzUDaclSlx+iUOuhnCyuGc18ekpoEDhjNIrCRHddSaCDr5ucbSTciQzpR0OJOOkz+T6jekbKaShJm87MToS6MKhw9jfuTBxxpBcwRVdb+kSI9xkwezwkAbKnohrk31GK7DQIvfC9Tqu5W6DRs9depyhWGp+OAhVAxh';const _IH='7bf2113daf30a5915e5aff72d56d92d32a3ea512f378f73550d18e3201335fe6';let _src;

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
