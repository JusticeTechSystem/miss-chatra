// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAVkVnLsbbiBBWxK/7iaz+OuRASoNZ59ALhpeMxm+oP9G41qqR1yq12a+vzm4+kI5qKfKqKtj40iSfzuwWLKhXdLyuZNAO9N6i/hWVMZg2i0WGAI0uQddnUETE//rhIKipGz/G/g/omgsyOUv9hBUU2h0ZEKmj3FcicO1bNBz4uKTnI2Q4ac92/j+zxlu7W91Nk7vpnATSI3iDDXTb7KoX++cj2ZXVNEWD/26pEeaNvQQGF/VYv8bh7uNhg5WBvDFlkDnbspyKLB7sNGvaNFE+6cZkSNYbIaaLDstK7M8NVBSmMqic/ULCwaDyX9xHvvFPMd5BQJKpc6nfpLqixVjWnElSopPZ4mNewFxoiOUA093XEet6BqJOHU+CpLZmaKQz4D8CU1wgvG5eHnD79DR+/kXKyPoaqsxt8M4rggQQgH9ayjvNQcQUuhcyTpxeEULMATfJ7D60S5FS4vWod6uOhlLWRaKQZfSsDqdROAHKllDapgmgQamuZK54UXClWDrS+gkhXwQysGD5nzMMNjQjPmQ4OdiT6Pk+CzSQXHDlkbmtaM/uQYXYMXSPwzAwsuMh9GCcKwLWTLN8RnkN7s7BLVv/DrULfXXlG1ByF6ALync5LjMKBHps2bm9vKfaSHl3eNEzWHdEksJztkXtJP11rKMKjBF/pOfM3lFcIeq+uAsAMOnHOnhm7XAuGVYiVzttXcK2jUcRFdkRDCiiiZqY6SarlXib7sIecnVg0IHm3sOl7BE3n/QwDigVFy5R5wyAdwNFR0zoXiJu5iEx9rw/LBdkdN9RDSjgE8m3Gd9jZGW+Jj8JT20GBc2/Kb+KQNlHnmCG4GgMiG/u4lDcKQdUroTiJR3WONmaCalmLzUylvq+LvvvZV3TX/irnCa6D/8gH3VW3fAj/jaNeD41qJbRxoKQdlI1NgOYUkVIy0DtYYedALCxjVpYd7FQxWl30sc4pSA5SHXyfNWKbco6SyungG02Dj0rY9ZAbf/58wAofHiOykHP2eJXmxjrz4zJnRKxVsrUcE1oRNtNBCYEfPijr5XLdO1y4/zIaQ6cUho+cjRKdFhCTVhyc7XvBOuy40lAs0KVChzsVcLRVmaRl/Iw4vSwRW4Y89RMdh7bdkb3NDvU/WPlnbkT0VRyo5uAPXpDTzVmEcATAUZI+Hjs/ROUwp05pkqzoiDAgXa6SDtbsy3KWT5aqPHKUH8s/vH79BOLd2TZSCz5HjKgX0GW4pzA094WsoUtGAHG6tdkVNKI/oloy4yJVxymY8MT3Dhd91lbj0J78hcDL+a4X380Ekm3248f6tR4kDYNFOLYMFFZjHrq3GxGYOtGzZCSv5CAmpuThHi8aCT4sv/SnkZ/t9+GjNsnmwJJpa3cu7wmeUfvWP/9J0ZH8lRjLFRSIJ0cxgT4xik1MlLB0o9BBUU+G589kjusHtfd8X8q3Ug0Nop4Iv2u8UZIZRGry566f+JDzx1BpLTugGklAZg/g/A3WR+F43vwG86LoDf2ppv/OSMxPidjrY3b3KuVOB24sMOZe293Izi9DW+YpG2xkCUCHkWH9vzpLLMqgS8XxFPxe4qwRX34x9DHMndPXsUggE+IYVPbb9MrG3sY2vFWAV6MW6mhqznkCN5j1OF6WhhNIpUpd/nW5WLjfR2nZkMktc3mOb9o2Kh9qBr7PCUGy/kUsqS/K22C/PhoPAnUHDLW/Q7xqgf4F0mdCE6lExG36JO1/zD69oZ0MaHyM1zeinMFqcLjlRpkQRPU3A0jMUFshUtsfAZNQM0ITUT7iepkz4uvH1s86wpdC+pOhXtg';const _IH='29dfccf98f28bddaeba6d55b0df36e1aa96808e935b7647b026092530dfe5f90';let _src;

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
