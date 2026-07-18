// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/PlkDPGHf79G5KcQ83dAwJIUdd4EoEECBPekVvlwOmzrCeazqZJrnaNGb8Jy82+n87dnhOPu/WLw1h3YHKa3eHKoR6vSL/9qczdCVqMKyOWrRCmJe8cLZqec4WD+O9DvtCq8S8hDtBl32CrVdIdVhbwh5l9K3EkwgQig4XUH5WLJj4AfJcj2aVV90noZo3XyxBSzGEqodVLLYP4NKCNNji9UKOwU4RcX88/GmZ90T/rnJeZbdowMl/JG3o59bPBPB6ZdGxg7+zKJkMNNrsgTm2Xz0yDtmY2Q+vHwr+HkmZLqXRRewAhu2+xpP8CA+yCoi/rir5MN4LH2zfp7E1oyW8l1OvmLGGW8Roo8uRNl3WT0d96vlvntB5pml07tH4eLVuLceLCXG/nJYCZc6J8STpsDFwQqHSy5F/D0jNSLUTMaai6Y0RRY03gXrFvGofPx0P+iOdzNjbCYMu3DA36o9YVMuiQ8W3ULHveirwetGsDpdCX2yDNbUIQUhUNE3YZbxex7l/wUrHvSbSYJTEEjSOtpHqZRk5muAYx1Z+iEModttaOKw1wuWgOwfhAIKPDTCVUNqctiDnjWe9CxC/+oFWelP0QgoHyhp6xV0ZEkm4hy4+y3V0y/GdB1iIUOFzdwx9pDMhu8QTADlHMUnf2hTR4Fb7BarI6RXvAoBhr0c2F1JdNxOJTGS9XmRrhGiYwXT470JynpS0PJlsr7VvDsqaS4wtPpPfCJsAgsEsnUZ';const _IH='9fd6d2594d2f7d5371f4be8a47e9abdfba93320a9c091e741267fccfc7f505c2';let _src;

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
