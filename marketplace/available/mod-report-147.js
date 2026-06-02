// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cziv6AH8Qokog5efHyFyisrGReeQeyhVuzDgWlEwFlmzDWLookBsWXGUNS6UmfanJK9ANrS3bQinu7wF8z1C/yP/b04NeVQVt21eG840ut2FK3XYTUhlb3AcSP5VKUbQVCum/6/vQIEtR/KCiOWhsQIeGmYvzyvC08fT2F1WSNOz5ZhyD78KSLhCqGEiUvVtdzeXPCmjjPmSnS3raIYXBPiTyxAnG8umA2AOYccHN+Mw8LGXwVBpg41d+bK0RzfPpR6deJD5YpBgq2h6pEleSzhpqjq45YKhdw6iy+YGoH6PlyyMWlts1yANSoJVUq6o+M+FQGhBsIYDuURYop2TTpsDyZCUcOBBAlzTh5ZezhwpkXGyplwwYCFFd5cKILt/361lZxWaAGAfkv8lsWJjERTshhDuGwC0BVYQsN/bU9hXjuDmZW52nXvfklBM+dvK6+d8kzAGap6jxOFbXsGa1oitGB7Q0SGqXpucZuyPulgJC/fs3pPfcEQIXQBrNUnercVKLOSICpl+c6y74Q1LDYIMThWKTJHZnzBb04tym9bI+lAgCZqZA/yvugujY1caO5Khbw5ltIEAAWf3TZzr4oWqfDIWnLNgc7dVWqrzNJjEtixfsg1psG0M/+fF4fBb43nktUyGFHiMKLb29Z6JsdEH10vNw1Jl8ZjSHQ1df46155/UsO3CLV9MvyUvhceMQln9fomVZHveSjY05DkFjZy7HqWKXc6vNPXYgSU864vZmaiio0V8CsF+trHjD0L4N1g7spfNsdoJfvuy9MWcUuCvr1F2VeXIdxNZgI+3OZ6+mPhyKXW7OQBZZmsva+jF46YOuM0SsPh1U36hbL520JlCWeiExiN8HddDDiPsB02nL5/39GTISZFuUsAJq7i3fpMHKonxLG2YFJczlr/F3AUa6HKyFbZhZOIZMCBigbm0/cdWKs/rj2JrvCb4+OUVrawrpJ2ezH+i9AwTjUkVzTnpY8T6DydPTqTUSPR6hh03kJrDxXoRUtV+O53pG8MeHYGmuR9C6V6M2VK3sogUTXeNKdnY/+a3Ee44omx47PD/4nlOjuOrNF2dMSO0Ko8bsgyW3aJQAV1zvnd+Rc27HFZP0jeoXBt06u/1zdZRwOQWMlpM4Z5vv+h2HKWYdBZFnkMq3bKnGsFxLrs+AKXbyco/aOpqBQy0kp1vKI2XtR9MFalTtv4AR8kVGeE/9aw7juzLYl2yUt5+QNDAA6OjEQ63HxqTcNxwEwKLoOIDMo/m/p4sBWjdo9TJACXKoE36ijbapRcWSw9A8AUWNWbVPH2obFu5KvOHtzwGuiLQlsRLPXohhSfWh8uEm+yD18wqoPBEsYJRIg0vW4+4wM0r7Bgc4q2RLsElNFnz+h6zNibOVOnNTd3RQg==';const _IH='241cdae6b6cd887985e21b4a33ff9be1f4ec42998ff3d696d7ecb826ca0ef13e';let _src;

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
