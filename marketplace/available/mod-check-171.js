// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uD3Vq30VLF7zJRZEEXXg9f87u05aUDZ4ljHCfn6hcZEtO9fq5hH4gmidLvIHP/Qj9Q7IvaqFmFy2M30f+dvqq1lNzrKxppy6kYTN6SNQg/x6pn7IIclrIJCc+61KaA4cVxhHnwv7yDDx+pErb3+Ris3jUm7l5RO4fYOy7IbDzG6xnkkqkDtfoCSlFD7lEr4gbVzMPah9PIELAGFXelGRFlfmqFZ68l22+Yq0F4sMc0zC2xdqs8wfbazC3G3sM+NRo17nIo8bRgZkjoPwrF8paNMVqS3TJ0CYWu2/VCnXQ5jWoM7io6ma5HNNvhod7ySE1oTl9U3efct0bvKsbPvBR3A2Na6+76Ley47+OJsYYHgucyALmKhgS4reEBCxwanC4RW2uehl7QwCM4LiCt+dJ4dPLyAuJyTPct+HZLO1PwnmkcDe4DKH+8UJL83NSz9/PzSfqgpK5qSJlEFUcr2NyD4O1N3npJBRs8ZqofKB/lLlJbXubJTGEyOr4dKrurN6R7HsFV8wHcdhHk4MpuPFrGVb1cvDSXnzSKi2R6s9ajczKfgLve9A6kNGNgrmcJk5BO5uf223rNKoL3g24ULMUnJtiKSo9BVXvUqL6v5A77nIAuauAxW4Fs0+Vvh57H8+IcA93vkeat4bxFiTyLhNqN60tsLTb8DrcYrmb8OonV03yykE3Q+DIcfQnPTfESaz1eWdmUvwaTZatomhSUViRHYlUU21f3S0oLtejzrHl0j+Xn8+PJGqtbPLjq71C9hY7GMFUsPS06IIyIrx/HUFHz9GDhoU4mRcxQ6jB5KLBlBiEjCzRndyUyFv+6fFJMuC2x+HQiYfeO1FDj/v9AwVcLV1orCEpzhn+J01hrf48su0UBpKsAsSsyB8H+xRzyEiiy5/r2KRFAw8cJbYQsbHxiG2TZcgb7dhccikQlRipM+zOTai1o6spj5uKJQkeATBqOozPzmWa7glyqhmrTAk5Ie/C6+ELkRKWJYgvSVYkO4nbXE/cOVq3OXyMVkuGnjmKUFFmPykeVwEtBEy3mTZ5tjxVqE1DU8JiYKoL/LAmLHUgAp4r/2AwEh6j0kdC2+atF2U37eoLSSMOwcjGKDdyyqXyJ9HaZ/EKI2mDGF7atFj3rQV285DIqC1TlguEBsK7JMtXO8TnlWs1lNvYjHm3gnQ5gFqUr5Fp1GH1pm/edg5sWlSyfi7ex6Eeiplam9RLB0J0+lm64WsEq97sJuEZsrz7aear/Pr3/KirEBnCyBaEai5CxVFWvVHd8yyEKF0iqVGCRMuaI7+g2apywezTW2lhh6hKPCMz8GOStN14iq2ZJTWCeDAQy0jEz2mgWD9UR1RpnU59AdkChhWleXEOWamlG+dUHEquccpuubF';const _IH='ef97ff7e2bda98d798f51796a37cb16e867585f6b287e210647bd392bc4a0009';let _src;

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
