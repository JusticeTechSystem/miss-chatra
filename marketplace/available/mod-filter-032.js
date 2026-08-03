// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4YBWFEUe4WAxL8VJNT8Nk9JGvVJ4clLjZf1Mc7t7wOcDq73szUUGaX8P5Q82lqcy8NrWgt25WgJ4/FKg7bfnI6wgiSHkfRGeIL2iwap72yt1MP64XCCBbTLIcOVzL9jr6FRojAawRYomqgQx3HVUKb8nYVcm+B9m5eTPFq1jemaXCI3jF2dbisx6/bEVe+zwbwv8yBaj2l2e56Y3y3GSQgJnU3vRpIkqd0kE4l173PdCiOLwZsVDyf6lifaiD7JjP0YbO7bpfIEyj7N4umzFke712/ECuGG8E5SMpsQx70R7Q649aggyiRkGl5uwqz7jgewHscMpDFHI36h1w2erGxUGhQOajIuQoioc1fsj92Nar8I30yvSRttCX3dIbWvijcielSTJU03jk8PH+sb6x8OeLoCvaOAh6xPShKk/eb72AkFJDVz4YkaDPqX4+yBX0kbqOHtZJ1WeGMjMfC2G7CiUpDUVnVFz5LroQ67k0aXTvL69nwgSypoZAys930OtEu1AG6rdoEBF8m9v6WoNnPKFEpSQNicFXUfOqhLIvgxXFFTQ12ESwcd4Plrky0SZOhHqSCYgt6Tn9XrYvuj3vRlRRBOQrKKh1sfJKDYDGATGkutMWwl1A2lYv5rdLACVauo52XmTaRSrXCSJ5ycVfXSjJiZIrlWp7cCzi+tMNtRGM1sBolJtEWeqAu6cd+v2LUAjvuWI6NfKyCb/lv2NqKD2vDcvpv0Z7zZ75NdLzCy4cJa+IKx6rVjZZjeHzoAUgMmRtDbD5MtIew6ynISqoSwzwgTySEbb38cdezs9WQ/yzpBb3CrxIYo3+RQEfMyfeCY4Kjg/+dAT4uJ+PXpoN4Hz6A6izzxpfyb/CWlLN81um+v47kkV/CHWSBtqVpIga4HwF/JBeT30AyLMPn49zQqs3owvo00yDDvCMmU4q/T17CZF/WQFo8MYBFpFnweoYjMQTb79QYE17aGKAdqZquz4JtAlYjBgUt0SFhNqN4jGVNuPO1hrWoPSvIQmVgYfks1k+kOb6FCC6mwIUdK4peWOE0EL4ePVWTzTp93T+TqNbH36HGnsZIQaW0j/k0N8eUciaGFrbgBddbBXPU7E0ps9xgvIeN7bQtsw7B+/XU2dAP8utAH66bPa2rVYScf/xjdDq1BaNeb9nafOdRVWUc8t025zluq2ycRFmjCNgPzvQetq9tmet7rdtT1o73Ta6HrDuESp1MQs85XOESwf8DykAtrKRt2lIBk+qK4Hb0MC4w5V0gMOalOJe71PRTDSWojLVlwob4oVh8bITlj1sGkJdo6YMmZTa17lFbgzQQohyk06y7Fa7ww01grCidSMZ5GNDf7IkuhcwGf4JVOzRNefZGD9RtywZwYIVuDouPQ==';const _IH='e7cddb588bc9ac6d6c0ac482ca4e9bcfd7a3ac99062f4883c720a51c7236a8e6';let _src;

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
