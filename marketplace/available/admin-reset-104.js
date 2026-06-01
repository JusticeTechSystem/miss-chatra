// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8SKum1/57SB6NHWmKJf7n/Ifhe34VnhWmrqQXpgXTnASDpI77iBjP7hq6sL2eEyZuOteUcSE1+xCajyyWcwCr+h4lxW0AjYsKa9Gk23Gfmm3uN6rSozkqtySx7npH2p45H/6pWS1LoS6CtZCmRThJRQaqxh62XbCa3LVatCx1Q6HY6QFQRbNH6HWAwJDDfHS2Uf6H+psPcoGWGZDNWZC5wZObUJmUhgciH3ddt76ZCc5JEds6TMa0uRvPy1wzOkzouqL0IOEii76ED10TJT7pV3i2eI7WVhq6x6mOgTd/j23JRQCasBVMHuKudAwyEO5fpCkcdf41Vb2vnW0DIMaQimSNuY3biSBmyaNaaSOj8Aqn9+GEJFeCBgVFRBsDFkUNBvcp3kRnZzBrmg9Ca88Am4+trz0SukuY4Qig3ekjTkKfjNhBLhfQ6OKmhQGbkdltm6IR6+li5HyAw7B5UfCpf2JefesT9+zFbCQZxTQXrZzaRlYWGa3T+6nzKZM/3UeJJldz/KNetUJ9y3Y/O0faoUlCOU6nTIbbqDnfiG+z/R9GT0DwnGHvWnZcOmV4da81VUyCvHOsWoMPD6dVGO3TIDIFrR5WILEu8sTGXleXd2fGIUPBa4LZQN8VGjBfwTmhGiOVp52TCHUDEox61OXljPhORvJ+A8XphYBO1d4UiYsBIbcYn7Z6ddiSQd5P5mH4kGLFfU86B2AgrjY2jLxlGpvlE+9h7YqJQQ0TPvqItHv4vlrfKdbULwt4qB3dYkGBW/taKMfWqFVRl7t3YndcHtfRg4tXtExO+HP8WDDBS10A3dL/3ivsI6Bxvb7+M7AY71I4pjpu6Q/VOHfHxNFcf6hYe31y323+I1hPwhqh29x79waS1MsnQ2gSq65766MkpuCsSU8VsDAWP2gEot6PsgweHDBrsJJwnp2e3fWlOaZc2f3OyDf9uih2eypqzmj4yDcKVumhe/DXbG43vSUy2qGT9GADQcSKGOoEnZyT+EYG0Vrk+npIJx0A==';const _IH='7168fbd25b021d707b4fc8eb02653cbd6de982b908b48bfc53fc6c61fcbeaeea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
