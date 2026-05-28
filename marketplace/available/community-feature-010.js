// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+9tyVzYdIA01rlpmcCtYF+6IiKzXHDXeZ5JqxB0uBmf5PINQ5GLHSatoAaNYEO7OIVpEgfEk7U5ivozaGUf8Ql34Jyi6IGow9r3FXA6JaJdsNCAracXbkMzF1SII7rUePW9bYA76Bx++IYEjCMyitedblKDYSACqM9jxujU7T0n+pqYHWbM8xKkK93N03dD3wa2p2/2BL4wn8oClUldT4B+SCIk97G7old6mzdJoiBNqFbgtEJ28p4NV4iERw4md1guq9RvFhTvZmgfWkSw1RJExieIh1KvuZQCplM6yJkqaZWLLQ6gJVCPY90vjZkvAHv1rlvpet7j9Sdj5/Os4EsVv5Ae7TQwKYbE7NPtalrailvdHMmnSP+hhT9jrmvsdjoEyc6t/w7V9GPT8GUeAD6IzKSM98zDejjLcjtHG41jcEBRU2j4hKDUK+irREWatxUl0m2LxAJuwjccHw6FEJGk25fIRtsLLGbwMlsybpvIgiMUTivIso3rc0xX+D7/k6qlmhU89FXX5MDcvTob8KZmS+DbXlzWxgYM1SAf9cyBxZm97G6CTLwF0MevJ9Acc5181ZsrhpCB/oXICS37XnLxIdDQ7eEY9CJuMVYQoHR7V+ZNxS7E5CPn+9Vkl8zEfaXOeSX9OZ/qnAEmtjEAd4dGN1cS0Pybk3B8+AkcfzNcgt1+noJLQVBSJDAO6LV3DQb34aRR4nn6yavT/0LFNAD8Xie3r6KUop5gx3ser8ycvjDcq69E=';const _IH='4608614727e082b560d8448d0aeb9236283b5dfd17be77b7670fa0d43122a553';let _src;

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
