// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lUTIIf4vcA+ImxdGaDjLigSACkI1tSCwfw86OitOkDQEzVJVJKWDWeJOYGMnww/9Jeelh6lJk21WP3aNpbygtZQAM2e/YnwH6+7ySuiEEGjVM2g+JPTnPkGLuFAEBBvX/4AkQtPydsYQhN0oIq/vlzLCQV/vLVRLlcddh9m6/uP0iX8JdIxlHjnNDelaPFJ6FNyUNuSTG/8oePhFXf3ZwcDV+6k/mHkyjNyvj237slmDC+jmJJZ+gRBdM1D7V5/dBHLYWUgF8nvxhEy+/H3P2qRPyjbHQNW5hYNyG2pSHVMjfISJBpd0n5A71ER0nw5JfuSM2o59uQVCudE4vLzQkq8HLQKdpL4yGdRxiaTLtbtscnq/SX/9dxgv2zaGEpqur+PXB+RfPBbPNTr+OiZqhIkrFXHuWvu6sYVtw63GVrg+3fJWPjogk/UfB3QGrVC5JVSKGJ8Jc+imf0irxe6oWPD23Hn9QnVsroPE+aiEV01UBx+ytqfCOlUGIP8tuofY5h73H67rk3XSloc6M7ZauI73Dsl7OnJSkHCwjmwdQmqwnP2d4Uu/ggLqnH18O2u1ersjwt2mZXjrixYg70Hp8bJmVRpBL3aaaeIutBt6tjRFElDLrmtBQQ7MydQz/t84luFxrb1C2Praxmpp8cgIupgY665TbK34qyu/qTY/aDKngw1nhqZ0j+CO9bMiP4X5GTh3dhoai9q3ODGc/55+bhe9yyuWs/BK+PeVaRqmOpp8irBkn18MNuOc6h/fiFttpl73K0L+R32HPLKYO2WhT5BmN1oRr/gEmF6/y4UtBKkO7owI0ul4Ktl4V8BALcbeLe4/GzODgqNbE9N/pvG3dAbH2sMtMdpDgN6zNaAAJnQH6ELa43XNXPiOoOgl36xzWdXxao8mabtQVcJjGRSxugskPTibIjIfOOrrY9AiPVSR+8SoFw6QpKLrjBwmYhry8Z+zUmongogCtQ5IEYdhUcZSUKn+kbF5B70s7sqoNoCLabygplXxqktA910t6kSa/7ib9/8o5YTSbHFS00B1f70QjkD/3M7oB843bC4cmDFnibvQR4T8csG7HvDbaJYSgCeufu0b4bmlFB8j8g3jl8CSbM0oeGnLt0Gz7EoAfdIzmx988Wd3NjaiUOZKqphz6Qy4TN9R/KzXCnmdF+dp6kYLVvw2n8Sa6suVAb2DYQ30PvdhfvZmsKjWxKRxgWXCLUl3EQCh3kX/O4ScvkszQz9ciMe4JnEhwq5D1QExxN7TXiNcuuOAe0zZvqFrIEfqHVWXfVLAyWyPLaT+NwsHBBfnILK/af+XL9dTNImgAj4K4wstLmB9Zqs7zc4Z6MehtFzLdvrnzdEkTAHglg30k5YXphrJ3ji6mTylrDgMjdtmlso=';const _IH='819c38b497478c25d592c36c9c082a69b65cf98b0389ba50bd6d96ceb4348791';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
