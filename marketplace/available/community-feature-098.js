// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsnbnUxzIpOBjfsXtlj5LfkQTJWXSZTkRGIa/1Ub51HiI1TKL+KqAXCtrvIzaIs0Sq33oNLVDNbq/eGYfQSEBNl6lYkaNWcoBtTyfxq5zdluxSB0DQDxF5ygv+AUMMmeo3/SgmSJ2k/OS4/T3j5FGVOITNvoPb9sEhurjOhQodfPjljj0CFM8gVeytBbL7tLxjnF5GqDcXI3eN+ZHpAYFYMsLJy6RoZiF5Q3QX/DcDCaJt+GZQE1L/mZZ280K9IDD/FDXaRTIWaxyBdyfISvRvduv2jO2n9JtgPc98QmFAwyPpJXM/IPFp3WNFBb6hLKiYhQwktniP9DU+ZwYkMt2/WPktXvuGI+Rg8tB5apoWmBj55YCT1Gy3gBw++ZcFh1g9KeAQwvNqWCSoMs+XdHvw0RWgLGh9y8zGaxWd8UoAqcoCPckjGRBK0yhRlQMz36wPGcE38uVDGdGL5FyTBterlfc1tY8lZKvNMvfV87N6G9y+027hYa/xwOsLDUT0WLAHsr7Vfk3V0FUW7i06bGlbQXOHxHnz/vZdSoH+xLkDW3LokrM2kCZMwtgisJi/Bk5a2bxXSNCioVEGkROJvnb1kWPI6OK9dI20ZvkGNBkkBuoUXAZECKrXW4YhyymufhrLnU69uGcQjJSO2E72U+5Y4GQHbd9UzifRtCNtRmFPEuzOdBhY1wg3RCbw9lEAW59r9ndzPUVr/RNnVv01Bti6q5gNkiHaOIZG';const _IH='4cda7627703e153694aa9f18478a25ea7934bfb2ff743fe63dea774e2fa05424';let _src;

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
