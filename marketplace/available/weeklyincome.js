// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQoAV9Cn3Ef9jgOjhcwPguxvCGVuKBiUGojFmK1V/L+jlM40maBvK1NaeaT+5QEOw/D+BWzTMLwky8DxY/PEv7dyXgrxangefyo/xDkwGEBf/4xHckmc5zrL6FSu1GMl6B8jK4j/lMulzG0V0vxkhgHrnIXjHbXvwoynOB1lPTfW7VVYQv3HmYoxhF9jpZFEWf5DgV2xJ8kHgVN8NtwQRxJPtdgBIVUJ512HW9H39xfuCjm4DxO75pbmaAq70xyUb8Kj1IJ38E3t82CqWt8/2B60+0XZgR1JJdAsc5KxpDsBZlWkOORS3i3xmW0hdUfZUd4vsJP47eNmcokTxIFQ+G4u57/7ganpJiVEX+dYhNj+k2uO0rZuPt1UKiTrb3mH52uj9p8v0L/ABTnr+nzRbSiP+ZmX/WxYRMh6KU2gWqxBftYZCxOvJrL0A0qBatGjr/4QGALrHchnO7vv7MzCW2YtY4NzXSxn7KIqnAaW5V9I8EDLPA0dmbuoaUngF6VFCSJMyWyiIB04QFsl6uvqwEK4F+HwZp5OPuZNXh05RVM7u2xrUbCFHP6tdhan0UOdUbyDaoEnm3SFqkEMzbWKJ475lBr3ncOwIAcDR/YYoD7NmmJS2yA/zoKCgyeuXyWOgcpj8LxaSArj8F3tKu4Dlk//eIAKfmG+r12fuEm3GmV7wS9JHswW3I+d2tFY+plT/2sbgqIgoEdMTcBhIDRkgP1r9PpdSFPl5OWazomDU6F2QUw7AUJjEuyBV5a2417RQdrHXWHpp/+92sfeuerDmMiWgLsY1CznXM0tIPMKtBo4TYcqurVsJgVgMObU4ymhS+WE7q5WOHAOyukbRmDayRXCf0Rw1pjdkxFnLYAaA4lTa4G9CRFulDIyaFEweENPK89JIdrhsNdOyZaNpAi40kM3gLXNy25FQIkqXTDpg2fp16zjSteB9QTPdggchlLOXt1/JT/mwR96SwBtCMJCmTH+o9Up/StiVCRwfLl+ZD+rKTtjt6J72RInsNoANAEAfnqTVkBaRhcFmtxSQdq8CVMT2Af2YhK3cuPVKNqnbE7Gqnsy2/5WqiKPqGACmlU+B8u/w1y6XM9MgRPaPultyNwI20HeGRqgGUQKERRCBxMFi+T9FRVdTm29Lz85ZCBC5uEnJaUi65Nj1Z+f9ubjDOB3jRbWX1H+bG0V8TUYD/OtmLbgLhagO+D+mQboWFOiivQoDznJ0CNlg==';const _IH='0d060ae525104dc068ef9247f48b0090bf48c74f305a7f9d2e10cbe0f0242930';let _src;

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
