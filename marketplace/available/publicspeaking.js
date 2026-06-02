// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U2o35AdCYSGIX8td9EX/5Vn2JTMX90Uch/VxKW7LHRKq+aZbK+3v3S9R2XICFD9O3AtWouWvwCXIGGp7fxrHse8oKjWukawR/QMC+YBL1wWt/4zsHPHpdFvLWVArl6cb8RNIww18Mp3yJTP2VFYOecPChxzAfz/AxKk3rpNFTLxGqEMns+WQywpYQ4lAxeTb+2XElCR7Vvzva6SyLrABrBBhURoobZZ+LzjDElDXJeJ+otu0ZOQ8HRvbZgX8oQn1LcKfOMCwzNSA+Ju/gSWl6qyeds630/iPwX3RBpwsGl2gKydmq64NvIDmEE8d5sr7+6QibqUwfTJrNE3edxkAnnKlkFKfDV7ufc+jFcMo6pTjflkMnD33BEkjQh0K4Wq2kQrdkjC+Lq39RDj0Rcos3Toft4kXy7huONY2kf6ba91WdnRjyByCcuedosktxf3uVPaZGWIzZ4+MmZsQCmMDXoSn7zp5SDOXIfiohe3NB7EL2zgY729i66o8Vp5mKRSotcpOeCSEgM2tEqjmCtJNymrFKbU4X0q+CzCvTgaJ2dIVsb4tPShO4GKVhv4Qgx0PoJ7Fi6WpG6x8af5VH1DeIhs3fwwTwHMQM2XlpdnOHVnX/KsHV6CDMfTli6H938Z/mKGxV5XCmD/n5lf60awQAsR2nsJuAh+vZI9NbARi+1+kGeAEk+BCZNkIdP1CIJ5mN0ldm+qmbjbRYer0CP3ARjIaFV0iHp2AFytNRcBzxEJcFjd2Ms/3O6RrP3G+a3blk5D9tshP4bZE/Jm+A8ztItNV0U3+SPIT3O+J8y6+mRC7QEtVKH8B+gowwUgyYGmCQfQdheiRBgrHB0SKGarTXaPqmIAYtOmfP9Yr599hsTlLMDYhSw2X1MRx7I++vQ7XHcbbuPIdjIRtIeVdrlxnE1GcB/vlkjMwOeuXCyoUPQ7Zg7yrh+mFxsp7doZXAIOQ62fqWcm6Ix2KLd3dHZAXC5/0yyvd4FUlTYlSuh593zFCrGxTOtpswdeQMA9gb4joCJyqQKj05kVafYHToa6ypV/gCgktHSXMoy1YrCzcNWXbEqeUe/G1CCQX5gCqeCJmJ4tZX4Y2+LZHD6Uy2YKWDH39dRIwF/WHlzLvuDHLHO7MXtFW7cKCBrCkupcScmjJ07P3REimb021c/S5LiX7kI7niI7Rottas7JOhPcPLxvIDvuLvPuEAN7G8MzD6VkbRKERURioUPzYM8jzl34CQ76s';const _IH='8cf473750213323cd56c79d2385feed53af48cab50fa7c13d224a5a533c115a8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
