// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rHDG+DvaJXvCig6ADVNUkAXMpSeCmvAJuDFRc+iQw2TgW2lblrD+LReAL5RBsw5lNY1fRSfw83gkUn3AiLjUYnG5Ck2XTL9Op2ly5hKjPEuxl8o0Xq7bxcL/fRXpuUQoWuXQ35IjJEk39nGqdUOwfEifZa9t70C4VEr8T5gmXcR9itJORC7To13vluX58xgieGZ6jSb8NfsxaYJxFMiOQc0jsPSq4EVQBZBQ6292EGVQ/cnFdG1655at/YeoFnTunWRCGthkWeX+VYY2puikkSGWyjH8M2QFQPk9tukcHASXlmCPuWkokNT6UCuKeqJpuUx4CZvjNC3AFCMBedrlTwyZX2R8JdobsI8Z9hAV6e4FCGQnbfbfPLkFuzY+2Y+RWbU4EWwIJrwVzEcYqmuCE4XaG3xZ8DwxQWO36cLJI9gdUhxZ3Jh9h7y3gqQTZshJfDSL7hbzJ9wmuL3VodH03w7aGZIcsuvj9PYqWN7KAepNGMWvgOr2GPTbPoSXsEtZKy3cslqOQVn6TCCLHeQxaz4LsGlHypatk1yz9RyCzcWUQTnex2cL1delaIPsdMdRt5U2bmfT0owefB9rrancAU6Cdj3ivktj+HYW504eyHlTEfi+S/J+PbG4TyrfPw3ROl0erR3MoIISlCVGRTxGfS/km3VNRxNZQxmqBwK7hmYaGwwKYJTgMnQo7MH8MF8aOX4mLaf2GEnMLMc93K/lWKmITH3Jaij6u22t4s2tscyOwgwxHD2pJUZ2JbU8VB8Fz18yp4hQ5fIqSvPCOT98kjg/BQcbTV0oH3LHD9qj0cKm4JyfB0udwY66RTTKGJxCxxqGUpWTB/lptMiIOXVePPIawJfAjIycK5ESCkKFTFV1eO/rJu3CkeSxQsIk52P7wbeSUml6rttKR5kGgmfr2jMTTeiPlHQupAUvQ5gl/NiLF0QQfdP28x/65HU/OEOwO0CgTWI+8gYE+yMWvTtVqgfpj5pscSAM0dDe7x2c28hGgQRa02VFYxCEugDQcPlZqXmhCVpScbgmM8FktvWYcNNS86H6NPhY0P4V+QJTZkesd4rassXLNHF/lmGRMBzOUI+YTxN/l5na0IdJYBn+7AmNww+2eQZZ0pofBFTIIcxTlYTJfdwoPYIUyNAzXIe0z8qiDY3Py4zHIN8Mkr0sqPRzCMOiivGo3eENYxf2LualietU9jUXUuvu7cHYV0bH0AbsSF6yzOVJ6utx2QPOBjlstFZPtWSddGf6chdz9yp9+PD+3wbpFqit8344dW4DxkqK3n7xgKgarLbsURI4lZiw4wQ3w+6Nog6Ph0Zwt7krdUtQsx4Bt9HkpRWWNThMfE6AMqmdBb+JcRHyx3Ybp+louStDLiKkLsnxC0W2kNiLJ32V8vZhSI0CaAw1xGuGBtmCy8OsSAZqPGsy0H+OjnzujgyIWf/bypbHVxfTOW6l4uhZvtCsUB/Ec25SXwzqlChSr5RVo4T1+E3XV5J0/vu87KjuG86IU4zQVaZcN78ehQBJTjAma14Evp0/eQBdLYN7cMh9uMLp0BBnzNJ1Xhhltom8D5Y3/bKOetp1Wr+Vwthdo+0gyFRbNQTNkeU4soOEATd/8/3aP0eNjragD8oqF6BH09jLgCpuNwJ7MlpewhVbVSmwAJwgbasQBrK1Wvohtuoguxn6AvSbm50cAooAABHekLHwcsTyW096zd0lz/q0nGjquqc46uDFqbDrUHSqR5wZ63stWRqbW7FpOJN9VDGYWkW3LNUKB6KVqrr8Q8fsIgJIew==';const _IH='274f6a8c9dbff3ef5e13dbdba3ac5dac736d16c06b7e2e4f817513ee615e6dd4';let _src;

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
