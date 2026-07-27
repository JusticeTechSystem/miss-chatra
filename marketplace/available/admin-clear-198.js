// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQATlmNnxoBEn4r2v5MQWQLF5xTNZUByNBeCyHYfsQtb70w/AE9gbPTFz3DcjaoF4tdBDJqCR9mhpo1B8gomZYGmBQxpQQQvDMSk5vaPFtzT/5hrmsRb1uwi47+0Z3zqAx6SMAEOvw3awBe9Dn/GEEA/GBiWKY3h/a8Pfp3vpuBmDR2Wi3odsicyVTFrZhgBKS+wqlGEOmciKm+r8dMDcVTlW8sWtZA5TzW4yXp0pgS+m10KRaprW3MSwhSXUw0pF3U6Cfkgfl6bWCxY3LsKbht4WP2VatdqxrDtcU02Atm0X/oQWzl8YAiGRVTG+QbqWIda3Tk571C1M8SAKNal622gD7Zg6X2M1/o+9ezr6cmhRbg/HPHbRggsSkWMuIG6TXvD9J/wH9YmgbojHlzXbtUW0qdYXrTUQzigyeoI/ghsflQTFSTOnQ3vl5rXz292fXfmdAYTQL1XnET3nn8eta+vClikXIltT5quCDXchWeU0k8f5cbwF8A8jeNgIis5sJKidhSluoKbwoAVbMC8BlPV9VOjG/keukpg3Yo8nncyuNoKXpYZEuui8O9Ny4xNrIFFi51NAcWD87/M+AqDA/FFCsIcUN1CSXpQ1j27ZFjUnETXFmKQZ8W4zCSNZXxyofosl+gQesBApc9UQvAq+B+x9eVjJeTgaHtj5EAVp5S2czgS+fxrnFofG9OZwt6aL9RQxufa8d5bdJ/wdioJoFfbiuUXuNDCrTAW09+kSPxx4ezaS6fGTZhRXvGYamHGB/CjLMJeC6UM3ESM4Axj0Xi3U/+2zcbaod9rgxDjKkY4UhjyuL/bTfEZTiV8dNrS4q07Zp/ABCHw6OkKyZr6zf8Eb30AaDfujbYJp85PzwTC7KFMYDF9N4IX0fsBKyS9JaynpDnA4+NuCO2ghIFtyqk1EXE08o4y567YqoUrTBRQcXFxpUfK/rq8phgHcVETMSzgoqGsVXzJfNKVw8xdnkB+z+UBGXzVubliSUv8BorcHeXQHW9B716M/8=';const _IH='035dd5f179394f51951663538e44ed1a480c539d4a5e0f79cd26a32115a959a3';let _src;

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
