// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTz2HAsLLcIbmil5DpZ9V1KEY0BmXGndhKFojfsgoXds5PmwKCYC3JhqGhyB7STk5syDbDakn+yHAJIHYXeIgK8UVAX4LUGzXCj4TJkdSXNP2Pus2z/hoxfCdVUd3+q/STDJGM3H1prkoGHnQf4Ne0n9VykfHnOtrN+HIQC4MoEweEJOpnZa8Vpmsm4wWfqhS4e4KvuzqSFzkykuz1Tkr0oiPX38NNBl8+R/M8ULplGjeWT6Nceq5/TeO6joIq/xyYbDq+lKIu4ggcARtpNcL34Bp/N6ppX+KcAYc75HNzFVaytfYa45oE13FvXvk4E5WD7fyj9n4Ydr0j1TpdY2V4NmlBAQ5x19DlCLR2fe5qlhkKXiJtO9b5l3PPRmg2BmHuBziSAfgltWGpn6oXwzLKIceuuyS80PIsn7DpLLfcwv/vrSufgEnqovVVuw0fU9lhjm9r39TlyWelRTHzgiUzNanq7LACK4MeH7kK5ZAp6VK1UOprFR74CzHeLZOyokeJ3zw1Ed1JgK5lTGR+jC1/kQFYkbaAFhO9aoZ+aD2T+6q70HFDpRkh3gf7PLf/O4WP33Oeb6l49VFrVZu5fEnY1jy9iMESn6zHU+PAaHBChJ9bZ9nmJZsz5R6UEPdyiL5RlfNGKZ9FofyYNho2JS8FC0pIa0lDua5iM2eWyORrZXXx2wvRc0MBBXDn6lv3DBs/7E0KPa4GlC2ynaFMXERfQF/gW0Axfw7xruFOnF80R/RhAMIhX7Y0zUHkl6H+rioZfLhnM0iSSzxOe2KvHY5bmYw31ETaXPLUSF4HCQiWjBBVB6esH2qGBbMxD0R1zmAC3TVVsFLlbD4pdmsqtC6BYg2kM+Nd6NfxRcB2LdOFunxzOWudiiKLfKYtsITBqi++WMwCZAT6T87fl0eLYSon+dbEW/4dZ0C51MdDn6mxLbzL0ahtSMynXsH1ZWkZEn2XqN6s5meGYbod+zdZ2CelSnaWKvpTfp1LHgHeZQ4YDrOwvDFwPDUf6ESa4ydBewlw5H4jVAzZFDKhpbkKaHku+3hwVTp6wPspxgHKlqm8nwUAIELevqRgbnkd//tfgdKVxWXxVqk8ugANQq9Y8i2eu6hRlu2IzuY3JWSMiYxHXBbSnu+/W7Lp+Wjzbk8pivDpBwm01vOugbrMtB6/AHELZcaF5cUdwUnquB26XeAY3TggHv8ciGDoEjDDGsViAlFReqjd0hg==';const _IH='2003b0aa6716a1839f3208c34bc492a9cfcff03f03d6a6f9deefadc6c666e893';let _src;

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
