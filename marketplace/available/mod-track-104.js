// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVcn2hO68eyveGUVOyzPeoL383Vj/JRmamgG+OdV4RqM2pvq08f56CCoInGEIhzG1LEjD/nBUpSCZzcotOsKk3u1hxfLcM6SoaiKFeldf8F6XpIBJKkylgXg1aSMqniquxijz9ap5tEZM3tqQGwYcdpuHuGEbAy5FACUz3OTzOg7eKfuaNgF+MqXKvaES5C+X/GLjjEn1E/A0PgYHjpzvEWUf/iYfkW3jcD38tfsJiXqvRMdy1rATorG+jhtO812j+EjDc5OZAdlgfCkseIpYuILTH1Vz/0y+QdOJFmw2yK8B2Rz37M868BPOCIfzR0sYKhrZJ+fi1oVS9aG/KD9Sl7Mfd9Ah9qoZe2KHTPUii0vvlwn0q5sCMBjFqKE5nliGANG0Tmdog8u5EgWXgZ0QBUyi9lo8D9n0QIftCypduK14/kaVvHduc2tiH06Kh1fD7b0V5877OH0hQkTLufax4f4fQ9N70MVeN7EkL63k36Hy0/REWnOMBhfmmc6AHXF7PP+r55LZpnKYKFikYf7bU+eNQkyXzGyolriyPTVCnifVM/VkGXPKbYwekOWqySGdsqZP0MT/ByYHRQrAF9YmCRMVTr6dJdW+GYBATJVqVoi+H5/q091+qao9YydljE1P7kmUyZ1CF7CnYlioWGaaKmHojtC0pFvo6LgdhlpPbAH056cjNHt1enikQIbEeb7nhLTG4SI9KmId8rOvq4ABbG/HLUIzMDJuAIHiCNAPFg1RiY3CvoJHK/HezBLDvvONV2yzQlHFqqF2S2u13S0k7gPkSvAsq6yf/R2u4Bgj6BNKAXzzscL0uMLlxVZgDyS9xUUiGVtCpUAdgvMHTnG1+uoiA+6aPypI0BpJvoGxrzcLkRNpaOzNNC/HKKSxkkAw7axsOtBeTGS0iIoDIkYsBgDrNC/uS5qYHIHLRq/+0XuuNH+zY8ThJhmpSaORi5DE/ceZoF09v3iZbNVoosO+yzs2I921gH7gf1NtZWiQskZzdC36uTw8zX4MjQ701plbZ4eVqtyQwDBAx6mAnAB1+nGQ5Slpnj2IQTZINhqsS0J5Jt51FTBuFak4bcGRdpVuGn6mX0NQ1mnUvv6+aqmT46XPUJ5SctTKqzZhB9RLrKitK9u7HOYTMIAgcJCxTDThqShfjAXi3vddkVpHOQVhybeh2LIBJNttxUKrZlxnq8HVxumRRCDQ/DfF2QJ3MwP9I6+eXLuvHOGSzLpCc4oYdUOs5oKJaJlUFwr+3Gzf8zzv+tOq9wlaJeggFqBuXSG/1F8lJyN7DTVS6H0R20Qnx35c91JUFEqGim7uQwzDfJUmrDNKaVx7BGTMY3cRD2ojCpLIm8rtA8hvxezjdv9DR7R8iXh0ozeFG3h8ZVs0=';const _IH='f556877b1560d6d5ec2cbcc7180b2f2e2b8d686fc023481aa82908314cd7e58a';let _src;

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
