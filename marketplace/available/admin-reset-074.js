// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKB36o0vACajAJy5GYpKrXcCRfpro2dyGKFsZrWoYINO03TQGlEFTe+5Vhlg+Xjn94vJxrUrEAsZB/W7otVNNRW31tSDyfkdw0BfHOoVWBrFTezNyZBXE6x9p2OHbakVxjVXqHJBGCfjL+BQGRVtrN+TUDz3cmIY7ZDKPqPFlhcYwbCzXAoV7Vs88ts2q59HDHov1af7O54zLVccocxRumxJtFPthplGv4T5vpjyGCBIurvJxLV1iFNrwNGQOwlSGPlBfvCg96tiGW/M+uGye14trUdwSccGsR/peqcNh4kSVaccoHqfBYLkkk5wbJyWF35bgBKdHQdI/ROvodaZ58N4Bq66GOwvWbgHIgGnBhXQEJ677IUYrSIxGz1pCwyqt8OzHfg96E70lcu3S1TQv0+50Lb+j9H4aTs1aoA8sA/a1/uPCheqEcv9jQIEoOpAaDYuAup5t84CRVIfo1UUmHrmPwUqvsSH5qtm49ei1Cwlq1G0ganZY+AElO075XnC2n12HVmAwik6X3ClGeMoCNt2YE+Fx/7OEnYyUiXc3ycK7cS7kl3Du9FCIEKQzgCyol3IbrjiGWAyHbj0vggDWxmIv7XX81uSKstfF/YQmCSpUOZ/z1JsJucnHnsbpfkQV57cWkNehNJV3nV6qXnY1byva/GWrYczqbt0ctC2Mfo+67o96NuCiU9yMAlAo6zarsFYVT7MT5U1aiDrp3BwPYx6umliLusFkCirqKkSnjVYNC2EM0Adwk9ddZotFHAC4l6ihlgZk5B8QhKR/a1oAtrhUyqADztQc1+W/6rOaKuCUMy19OwdObyX/nFl6H1b3frhYKzP+szy+3tRwZ+GTjUmP1pxkX8k6Av2DbZbZWc+IsOrec96yR14/HUkSxA4myeJAYdFG33xyRIx9CpTgNk/bXKFzlQu3GMQTdSG3dh5EAMc5bfEqgp552UDV6B2IjjNvqStn9tp+d/mPa9iKSnX+9FRKe9LPstJeXmHJ7WV/1XrQ=';const _IH='da84ac98ec939a952aac8bce84b9eeaf4a8f7557747746565dd379aeca505926';let _src;

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
