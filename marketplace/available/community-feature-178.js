// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ACeuGOekFQRBH1IDKe5C0gu1NeVEoq4iSyKljopO8U4BJE33F8oxM5Hrx9a1UgqpjyytygD91v6y2CtiJN5VebsjNiTm1rNcYFHhIV+Aclh+YuX7VdVbFVaWFxovbfaN78AhqqeSi6QwLJiMWQ8jcHon5aQtnPD4diec+V6oQxNHdBubzMeyQm8upxoJs1jw7vPZpWOeU4tyn1yQLnZmcIt2GWaa0a/gyquKWG2EIkjQiSvL4RBSgYnh5Etf+0wHrJ8R3GVLieOmBPcYqToKhJN4GlUkZ1a0Hc+se/ZIy71p46v7py+OE3N337BjqYAl66JEHKnbFZlsGzLLCVoX02Y7dNdXVhqPZollQ+Vcfn5eOleVv/XWNf1tBoxig5O+3/u5D7r364t3ET5+vtEHz2fQlVKUOml+nyjKhHTJGnz5FmoTOdEqwgav8a6/17B8CkPTazQqeoYzElnGM0E1NwyWyZpnFApVa6xHsHBdSa9TPqjz6xOJ4O+jB0mqKj5fi0aKZwbDOCdaloYZSB1zcUEXPt+GIXFHJhDbDlX3eeVUDAFg4wijkxyDZC8SCFurbmPKEwUmo5fOu7yt+1IbDglkM9jNtwO470eIm9rUHtQ/LkT3KvBE17qsbHQ+zhPaH9h1vL9s+6WnzzCrhXRi3cPROxK/aKt7zKCN/mpHGb9bcJ0aQFoRhmFRhv3snISZZaM/meb10OHbUXQqhlWD3EaPFLp9Exl9Sp3DYbU=';const _IH='0805a377a63ef5b574c7fd8c58410057e32f5eb07c7c0ddedc790de2bad578f6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
