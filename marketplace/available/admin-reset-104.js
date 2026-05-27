// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1H680A06kmoQlR7NJauDvZ2j7Ij/IhH2HrwZtZsHc0sx4T4PE1nJl/xzYY0CZohRt+9BLzwz3qePlEfBs69+WdA84qCap9qljB0SjPzJeXVPe5/A3E96IfEWXwiK0n6WLNbL3mXqaM6loGTA6ygLxbfmMK1IdQid3DYy2984deJZtx00uBpqWBXXMHH7gwx/tvq5sIaYayHxdULZRqqwDy2IFpTk4cePKc8+Q0ICuEhA1lTLyjp3rr83oKRbfy2wAXpGMeKZhCTN0DJnqPzqjCyNOsEJ5wp+h3Sfmu98AT8nr49YCbGPEpr5y9AW2rw2UDlHMJeSTiVFAsSO8SGTGL7gbY0ah5dNsYrvh0iekUx8o90ErILxm/PnV72ZdvQXizE1r8NjDdHCp108DPqUERZsaKp5L9o2HvYVx2HG/ne46anEBVUaekimbAaWUzue7eIObbm5fgPUf0iYz0F+pudASzdilBRM8IenPYNak7yHgSo5VVF/GNaP7U0GaFykZGF/GRwSiWG8EMbddnAST85W8+PROUxHoLfNOzXOFxJvvCp5BNk4AhuzAYYQMF01zokNK07xuLoWF9oFHii8EP4J597b+NGtQxs5zQLEEZk33yEsRmINW57q0aacPJuX5+j4TGJzEHLVfPn926MNzXQAE4NikuRNzdayWtD5Nq55PMm2tey2FmRUcubaqYEVTDEn+u8IVWEFVKdWo3abRPiawlOtB1reoVqRW0gTbLv2cgTMSKESlcViCYkFpPAlVw8HICWF3OFX9OKebPvtDhjzD1MkHylLCEQCcZxTaTB1I0U8GBLL56dV0FV8a9YiVYb0kyLDXnUiOcpAoqB4O8Z0sSSRbBql9BaqW+Vti1BDReXmP9Nurt8CYCk5408QkJHPDfNCRWMYWvKYZhJQOOAI1Ed3uCVLgDDxbCSWjdVNaRkOwDoinJXcNX0kyXpaUJxhppdo9KojF0CsrQfjqQNWlsU/GxTs2V25SNSvWUetLLBUbQ+Ukz0N';const _IH='0dcb07980c971f2c8c3bec529de078eb736fba884ed5bff3186aad1594b7fcf8';let _src;

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
