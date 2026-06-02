// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qhWAfKgGR7bGuYCf/wDn8w1/Iaks0n4TiW9jwu6DgSHWa/LgroJGClSJJB2NXcCXeqp52e4h4v6sixZLoZaLBA793N2g2oYRRj5A7gHBg0GujYnZzaZ+jmLcZSMRSFAPos/pd/NdyK1PQXOAxqCKMBBpBycC+f88wn3ol7XmeYkQdITYHf2LptioHJvMFjQ0PVtJMO57kqi4TmHfOwcSg0VGp0Y+H95mjQ054H8xnNOGNYAYvb8HLdb/p8Jl540uHOqnnbj+LKzNlGIxyrs+S8imujmL0gHhJNm1o8y+nuOjKlLYv6S7UKX7khtpMAcv8yDzFGwy45jyVOd5lonBQuEW6mO9zAyQTHH70e17UFZhvcVjcMdQBA/jVxK98SrGQ5Em0yGnnwpNslg4AGWuiAMLHJonp1HdMxqBA0O20TmNJAm2xcxati/mie1Up58UplzAGNoCR4eqpKEPvWm+r/pfPNcY8cZ/WWi8PnFi51zazAQljgiJkU4kvYdnyqdirwlnvmfO8GFFzgFs35/cHKiv8fJLbOtoR3O8n9YL4ozAnsPVPJcovmAo18myX8wRok1uMCrhAcxLB94432PNY0wS6P1TpYQGTg9e6jR9GsTBTPNuLRg3nF/Nt+F62SYmZJKvAM1ozbkDb7HLIY15PuT9c9KqTfqOyUmRePhCCXVyB0EpwcEFdx16Jg4TnMx4kENBnT1aC3ft31zWD99eRqtL0XemsE2iA0r2DDVwnqhFIaykyT+a/xzvsbjfBJ7f0vqeFui4PYxqKehEHwOksEFC3npBAz+Ovpt0+C39l8Kaeh/xrTNhXI1JBztMVXhOqsHbMSAkot4gD61Rb2zyQDOAACC/I5Lf1D5XCN7qFW+18n4l2dWZo9LM+UV+oRw63gZ1Ih9FFY4dm83d+C2cargJURSMERpaeRG1RyJEgN0KO2L4MS6Yq5qxJsMaG1P1wRmpHNIcF/w2UoRdDLFwjY52SLtTKakyIj0t0sMm54Ou1N6r9ZkNMeHmTRXxNNmtwVb513onJQBLTv6BT5dGDTsXT6ZBQ3takhUlIIW9jUtm5ny06UONJz9eOszI3LgV9IRrYrzi3RPGY0dczAEXX/NptE9i0Zcw9yG78Jnwz5xNncBDIyA9QjKQlIMMKmahfPIMIGjaAkMLCu63okoxlwv8hE9LYwkjhUmUjEgFWtW+eJ5kRpg9yTakg4bDTJruPZlO+IG9C8xBVp3DcNI+XDhEk5TdtZFe5HTsMgH5RvLHJcYC/MqeKmtIunyj+BuZIN+0FYLDvaXmNagtKfZa84pnTz+vaGzwAJtZ8XISjAm/pJLKzF7ixGmceNAKZlQPdlW25YVIW/UyTJ5upjt8vopgseDMBbOelw==';const _IH='6a4ea52f2b67b62d1b890ade9498367c3f1df79641d9a653c7fc7e9c745d502d';let _src;

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
