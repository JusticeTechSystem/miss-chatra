// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bk4O8NTbk9N3WH2SfGZNiyoyl6ONk4VG3a5LVr2bWkcN1aQUdccnuetOM+VTjRVKZYNg1RdpKONvPmZBMse7O1WYCctO478L+Sq6KifWco65ELOslbHginbqb9znX1nQruYgWTD3GATrp2z+KsVkIq+fzYmHPj99/eW1p+zciqJEAD+rXLvwnQg+nC+sBG8K+g+zV/YMrhm1/2VuAXJn5lf0DTCDss0ehhpRY18Yk43Lr/MATW5UNoxPHqB+suE8F7fff7asIVJfAgG6WcfQf5BFwZbnUdGQ5RfcQ4fmnquBMseHofGzpAMJzE05aI+EHUYO436GSqzGTnREJfyC0Pn1h5Uobgbu/DGVvCRu8makKW/CgNFYqSSiWIYVPR6mBGoC7k9CrIxqiJsELH8bRHW3YFeRVLilJ5VoRbbt7s8O5SAhYI9PHV9G/g8QegJY9Igbma8C+Q4+dMQueN6f/c8agvvuXzEplS+DlTM/txwGyOplpBpcmHIQlbRQz7WuKoYcLLP1O2hcRezJPhUHROF9s/TJlVTIkOqsGbZI+UY7A2wjfm2eviTeqHYP1Zi4BypjYm1gonEDAJbTYqfrLpbwUm5lQ20RO5ECaV14oMLOmsCD03uVVpcE/PKOIfeH2qnC6/m05e8Uc6DBzaYhhEMsMjTmcooiMgQKJQWwXKJcGNtDngqgpvHYikhCGvlFrkO8egbP++xfxlvIVbQgNyHW9AcpjU6XMddQooO1XW5fU3UePo2gxeEZmLybj/Fq9rA0+bu4YRWKcluguO5RuAJwe0MEcI74UrX5VFmQLN9QS2RyWu40WtdAvk3zYa6dDtPMd6AJD792Br4t8KdngsMWX4yciXLFerYPfvDaGQbLfH9ZdimojDMZOoN6PppWVQR64Uywb+BXcfVx8ttC5gBqQkhMEOHmf20xLDAe6/3DDnkNn+5O0H3OIh2vz/CFOs7+mra95t2V2Dr46rmLy29OX2PRb4NOl93PmbJeW6QWWN9rS/jfC52iJKeZCZEjEaQ/GqvBIE/es3wPWrcoIWtPh+ouyqldiMSKHV2BkNuQUbeEobEyMDkrbIW441fZT1JbC95JI23yj3UAXpMOXeJKAoWny8ATf1HL+NTGkpiu9cmlsur7rolno43iSUo6C/JV32JXyjX44y5xdrMIiBVPQicn3BcEUGbnBHG9QxWX70KkK52wx1/+XGZUBeRI5K02U7BL0mUgMJEI';const _IH='bfd6adce38538cdf16d8f548f16b5a8f500b5a027b972913215d7e55d0293e63';let _src;

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
