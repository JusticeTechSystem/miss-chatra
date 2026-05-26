// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/PFGy4psbXQBDcIRoGntmuFn7TIZXwY28q1NvlGThdG566KNjvlvU8cnjtU9gpFuEygx4lqAGhqHE6hHwJ8SrcMZvzxf+7DXlMRfBwv0afU15hm/T5unU3/lPJSyLLOyaGRGjZGdhYDymDziWr/oI0S6YlkOMTutuxgDDyepNmhpAcWY5wCN16fFN2NFyMsdwIbBFxIxovx0DGU6JJAMLw52aYp75JhE2oghBy7pDSE+EpVM8cYBhuVdJt8AqgiP/1PzQAXBNRYXbKFSZ31LFNcThyFj8Ww7u6ej7n8xoadsfLRgrsHaVeZVd6UePj1vvtjNm464KLfIplQ+S+Lz38YjSKrUZZzYKG6B2cB+C6kNIX8LmJfx1xhAFGAWjOTa90/nQS+dbpJuJGXrri5zCG97FFYCCRJgQh/BfbuXWihkh7EU+m4wF6ZCr2uPFj4oCmhiUi46HGa4MlqS7QMFahjsm5EAahZ9JCLbP4lsd6qy22llyRMy3u3mGUAdNdMkkfKb49az2oIK2fPg+omzvlcCkScpqpN6a+p7HJXlVI04k7cBTM5mbA/FgNaDjkziq/pIDx/IdxzGFe+gSh3/qJsjzbacHMjIgPAvZUMhVMX6mChNCS+01cCXQIhRP45oIKkMs5ygCUwcFNUyxogCTip5TkjG8nX0CJ71imHe138ogQ6ix5fsoegkkU3nRRR08lPF6xUXMFZFZHp3vrwm6wIFmq6Gp2vfekcjk1e8sf3PjLzi1Kba4V4bB9V/JVxJRR1ar5rUVe4cVHNK2/JjTJzglr7SbYm//aQaxuShLftcgepJ60kLee01D4LMz1faNT72sGjLd2dOmKrfUV7qujRQM0XKndR+v9CZ+DZ8hGjHDpCcYEwiHH6Q2jVX1WnxpPWjkqOmK3QgceLoP2WB4oEgYq/SRLQU2jcOnRULjBME9cdNcka4Al4mGovNwQjit34N42/W1q95V73nkLzaYBKjN3FzTe7BBtnhRWZE2UKRqwLh0r+IW9yt0ACIx/k92Q==';const _IH='6fd30a9c38f4f429f024486cc660f8d06079511d10ed52533c24489b7f7eb0dc';let _src;

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
